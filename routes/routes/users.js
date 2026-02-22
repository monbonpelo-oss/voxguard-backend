const express = require("express");
const router = express.Router();

// Données temporaires (simulées)
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// GET /api/users
router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;
