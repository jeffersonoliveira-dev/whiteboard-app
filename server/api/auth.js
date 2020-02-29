const express = require("express");

const router = express.Router();

router.post("/teste", (req, res) => {
  console.log("its working boi");
});

module.exports = router;
