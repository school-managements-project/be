import { Router } from 'express';
import { forgotPassword, login, register } from './auth.controller.js';
import validBodyRequest from '../../shared/middlewares/validBodyRequest.js';
import { loginSchema, registerSchema } from '../user/user.schema.js';

const authRoutes = Router();

authRoutes.post('/register', validBodyRequest(registerSchema), register);
authRoutes.post('/login', validBodyRequest(loginSchema), login);
authRoutes.post('/forgot',  forgotPassword);

export default authRoutes;
