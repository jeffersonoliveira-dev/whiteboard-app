const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../db/model/user");
const authenticate = require("../api/auth-middleware");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err) throw err;
        return isMatch;
      });
    } else {
      req.status(400).send("username or password is wrong");
    }
    const token = await user.newAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send("couldnt login");
  }
});

router.post("/signup", async (req, res) => {
  // check if user is not already taken
  const user = await User.findOne({ username: req.body.username });

  if (!user) {
    try {
      const newUser = new User(req.body);
      const token = await newUser.newAuthToken();
      res.status(201).send({ newUser, token });
    } catch (e) {
      res.status(400).send(e);
    }
  } else {
    res.status(200).send(false);
  }
});

router.post("/logout", authenticate, async (req, res) => {
  // user logout
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token,
    );
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/user", authenticate, async (req, res) => {
  // get user data if authenticated
  console.log("ping here");
  res.send(req.user);
});

module.exports = router;
