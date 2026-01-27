import express from "express";
import connectDB from "./src/shared/configs/connectDB.js";
import { HOST, PORT } from "./src/shared/configs/dotenvConfig.js";
import router from "./src/routes/index.js";
import notFoundRequest from "./src/shared/middlewares/notFoundPage.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credential: true,
  }),
);
connectDB();

app.use("/", router);
app.use(notFoundRequest);
app.listen(PORT, () => {
  console.log(`Example app listening on ${HOST}:${PORT}`);
});
