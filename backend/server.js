const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(express.json());

// Serve static files
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.send("LocalBizConnect Backend Running");
});

// GET all orders
app.get("/orders", (req, res) => {
  fs.readFile("orders.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading orders");
    }

    res.json(JSON.parse(data));
  });
});

// POST order (save order)
app.post("/orders", (req, res) => {
  const newOrder = req.body;

  fs.readFile("orders.json", "utf8", (err, data) => {
    let orders = [];

    if (!err && data) {
      orders = JSON.parse(data);
    }

    orders.push(newOrder);

    fs.writeFile("orders.json", JSON.stringify(orders, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Error saving order");
      }

      res.send("Order saved successfully");
    });
  });
});

// Append order to text file
app.post("/append-order", (req, res) => {
  const order = JSON.stringify(req.body) + "\n";

  fs.appendFile("orders.txt", order, (err) => {
    if (err) {
      return res.status(500).send("Error appending order");
    }

    res.send("Order appended successfully");
  });
});

// Delete all orders
app.delete("/orders", (req, res) => {
  fs.writeFile("orders.json", "[]", (err) => {
    if (err) {
      return res.status(500).send("Error deleting orders");
    }

    res.send("All orders deleted");
  });
});
app.get("/stream-orders", (req, res) => {
  const stream = fs.createReadStream("orders.json", "utf8");

  stream.on("error", (err) => {
    res.status(500).send("Error streaming file");
  });

  stream.pipe(res);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});