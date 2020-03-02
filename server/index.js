const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const api = require("./api/auth");
const authenticate = require("./api/auth-middleware");
require("./db/index");

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

// midlewares
app.use(cors());
// app.use(authenticate);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/", api);

app.get("/", (req, res) => {
  console.log("working ");
});

app.listen(PORT, () => `listening on port${PORT}`);
