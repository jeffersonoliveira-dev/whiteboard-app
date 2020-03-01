const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const api = require("./api/auth");
const authenticate = require("./api/auth-middleware");
require("./db/index");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(authenticate);
// maybe load before the root?
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", api);

app.get("/", (req, res) => {
  console.log("working ");
});

app.listen(PORT, () => `listening on port${PORT}`);
