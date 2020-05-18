const jwt = require("jsonwebtoken");
const User = require("../db/model/user");

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer", "").trim();

    const decoded = jwt.verify(token, "drewdat");

    const user = await User.findOne({
      _id: decoded.id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: "Please auhtenticate!" });
  }
};

module.exports = authenticate;
