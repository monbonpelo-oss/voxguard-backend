const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("VoxGuard backend is running");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API working",
    timestamp: new Date()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
