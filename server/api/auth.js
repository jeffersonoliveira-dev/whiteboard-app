const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  // user login
});

router.post("/signup", (req, res) => {
  // user sign up
});

router.post("/logout", (req, res) => {
  // user logout
});

router.get("/user", (req, res) => {
  // get user data if authenticated
});

module.exports = router;
