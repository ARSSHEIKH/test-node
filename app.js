const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || 3000;

// Simple Route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://${BASE_URL}:${PORT}`);
});
