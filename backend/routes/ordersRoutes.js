const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const ordersFile = path.join(__dirname, "..", "orders.json");

router.get("/orders", (req, res) => {
  fs.readFile(ordersFile, "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading orders");

    res.json(JSON.parse(data));
  });
});

const getNextOrderId = (orders) => {
  if (!orders.length) return 1;
  const maxId = orders.reduce((max, order) => Math.max(max, order.id || 0), 0);
  return maxId + 1;
};

router.post("/orders", (req, res) => {
  const newOrder = req.body;

  fs.readFile(ordersFile, "utf8", (err, data) => {
    let orders = [];

    if (!err && data) {
      orders = JSON.parse(data);
    }

    newOrder.id = getNextOrderId(orders);
    newOrder.createdAt = new Date().toISOString();

    orders.push(newOrder);

    fs.writeFile(ordersFile, JSON.stringify(orders, null, 2), (err) => {
      if (err) return res.status(500).send("Error saving order");

      res.status(201).json(newOrder);
    });
  });
});

router.delete("/orders/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  fs.readFile(ordersFile, "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading orders");

    const orders = JSON.parse(data || "[]");
    const filtered = orders.filter((order) => order.id !== id);

    fs.writeFile(ordersFile, JSON.stringify(filtered, null, 2), (err) => {
      if (err) return res.status(500).send("Error deleting order");

      res.sendStatus(204);
    });
  });
});

router.delete("/orders", (req, res) => {
  fs.writeFile(ordersFile, "[]", (err) => {
    if (err) return res.status(500).send("Error deleting orders");

    res.send("All orders deleted");
  });
});

module.exports = router;