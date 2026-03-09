const express = require("express");
const path = require("path");
const cors = require("cors");

const logger = require("./middleware/logger");
const ordersRouter = require("./routes/ordersRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

/* ------------------ MIDDLEWARE ------------------ */

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  })
);

app.use(express.json());
app.use(logger);

// Serve static files from backend/public (optional)
app.use(express.static(path.join(__dirname, "public")));

/* ------------------ ROUTES / ENDPOINTS ------------------ */

// Health check
app.get("/", (req, res) => {
  res.send("LocalBizConnect Backend Running");
});

// Mount orders router at /api
app.use("/api", ordersRouter);

/* ------------------ SERVER START ------------------ */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});