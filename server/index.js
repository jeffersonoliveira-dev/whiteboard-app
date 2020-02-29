const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const api = require("./api/auth");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use("/api/", api);

app.get("/", (req, res) => {
  console.log("working ");
});

app.listen(PORT, () => `listening on port${PORT}`);
