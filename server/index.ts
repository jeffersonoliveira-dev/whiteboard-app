import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json);

const PORT: number = parseInt(process.env.PORT as string, 10);

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
