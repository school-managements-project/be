import express from "express";
import connectDB from "./src/shared/configs/connectDB.js";
import { HOST, PORT } from "./src/shared/configs/dotenvConfig.js";

const app = express();
app.use(express.json());

connectDB();

app.listen(PORT, () => {
  console.log(`Example app listening on ${HOST}:${PORT}`);
});
