const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/orders", (req, res) => {
  fs.readFile("orders.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading orders");

    res.json(JSON.parse(data));
  });
});

router.post("/orders", (req, res) => {
  const newOrder = req.body;

  fs.readFile("orders.json", "utf8", (err, data) => {
    let orders = [];

    if (!err && data) {
      orders = JSON.parse(data);
    }

    orders.push(newOrder);

    fs.writeFile("orders.json", JSON.stringify(orders, null, 2), (err) => {
      if (err) return res.status(500).send("Error saving order");

      res.send("Order saved successfully");
    });
  });
});

router.delete("/orders", (req, res) => {
  fs.writeFile("orders.json", "[]", (err) => {
    if (err) return res.status(500).send("Error deleting orders");

    res.send("All orders deleted");
  });
});

module.exports = router;