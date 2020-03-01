const express = require("express");
const User = require("../db/model/user");
const { ObjectId } = require("mongodb");

const router = express.Router();

router.post("/login", async (req, res) => {
  // user login
  try {
    const user = await User.checkValidCredentials(req.body.username, req.body.password)
    const token = await user.newAuthToken()
    res.send({user, token})
  } catch (error) {
    res.status(400).send()
  }
});

router.post("/signup", (req, res) => {
  // user sign up
  // get user from client and store into mongo
  const user = new User(req.body)
  try {
    const token = await user.newAuthToken()
    res.status(201).send({user,token}) // sending token to local storage
  } catch(e) {
    res.status(400).send(e)
  }
});

router.post("/logout", authenticate, async(req, res) => {
  // user logout
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== re.token
    })
    await req.user.save()
    res.send()
  } catch(erro) {
    res.status(500).send()
  }
});

router.get("/user", authenticate, async (req, res) => {
  // get user data if authenticated
  res.send(req.user)
});

module.exports = router;
