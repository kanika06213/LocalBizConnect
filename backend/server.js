const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

const ordersFile = path.join(__dirname, "orders.json");
const ordersTextFile = path.join(__dirname, "orders.txt");

/* ------------------ MIDDLEWARE ------------------ */

app.use(cors());


app.use(express.json());


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files
app.use(express.static("public"));

/* ------------------ ROUTES / ENDPOINTS ------------------ */

// Home route
app.get("/", (req, res) => {
  res.send("LocalBizConnect Backend Running");
});


app.get("/orders", (req, res) => {
  fs.readFile(ordersFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading orders");
    }

    res.json(JSON.parse(data));
  });
});

/* ----------- CREATE NEW ORDER ----------- */
app.post("/orders", (req, res) => {
  const newOrder = req.body;

  fs.readFile(ordersFile, "utf8", (err, data) => {
    let orders = [];

    if (!err && data) {
      orders = JSON.parse(data);
    }

    orders.push(newOrder);

    fs.writeFile(ordersFile, JSON.stringify(orders, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Error saving order");
      }

      res.send("Order saved successfully");
    });
  });
});

/* ----------- APPEND ORDER (TEXT FILE) ----------- */
app.post("/append-order", (req, res) => {
  const order = JSON.stringify(req.body) + "\n";

  fs.appendFile(ordersTextFile, order, (err) => {
    if (err) {
      return res.status(500).send("Error appending order");
    }

    res.send("Order appended successfully");
  });
});

/* ----------- DELETE ALL ORDERS ----------- */
app.delete("/orders", (req, res) => {
  fs.writeFile(ordersFile, "[]", (err) => {
    if (err) {
      return res.status(500).send("Error deleting orders");
    }

    res.send("All orders deleted");
  });
});

/* ----------- FILE STREAMING ----------- */
app.get("/stream-orders", (req, res) => {
  const stream = fs.createReadStream(ordersFile, "utf8");

  stream.on("error", () => {
    res.status(500).send("Error streaming file");
  });

  stream.pipe(res);
});

/* ------------------ SERVER START ------------------ */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});