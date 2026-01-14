import mongoose from "mongoose";
import { DB_URI } from "./dotenvConfig.js";

function connectDB() {
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("Connect database succesfully");
    })
    .catch(() => {
      console.error("Connect database failed");
    });
}

export default connectDB;
