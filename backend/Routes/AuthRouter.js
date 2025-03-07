const express = require("express");
const { registerUser, loginUser } = require("../Controllers/AuthController");
const router = express.Router();

// Correct route for signup
router.post("/signup", registerUser);  // Ensure this route matches your frontend request
router.post("/login", loginUser);

module.exports = router;
