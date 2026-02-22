const express = require("express");
const app = express();

app.use(express.json());

const healthRoute = require("./routes/health");
app.use("/api/health", healthRoute);

const usersRoute = require("./routes/users");
app.use("/api/users", usersRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});”
