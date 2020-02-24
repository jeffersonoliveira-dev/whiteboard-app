const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json);

const PORT = 3001;

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
