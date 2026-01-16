import { Router } from "express";
import { login, register } from "./auth.controller.js";
import validBodyRequest from "../../shared/middlewares/validBodyRequest.js";
import { loginSchema, registerSchema } from "../user/user.schema.js";

const authRoutes = Router();

authRoutes.post("/register", validBodyRequest(registerSchema), register);
authRoutes.post("/login", validBodyRequest(loginSchema), login);

export default authRoutes;
