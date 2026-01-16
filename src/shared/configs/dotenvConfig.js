import dotenv from "dotenv";

dotenv.config({});

export const { HOST, PORT, DB_URI, JWT_SECRET, JWT_EXPIRES_IN } = process.env;
