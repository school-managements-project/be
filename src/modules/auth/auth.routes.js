import { Router } from 'express';
import { completeRegister, forgotPassword, getInviteInfo, login, register } from './auth.controller.js';
import validBodyRequest from '../../shared/middlewares/validBodyRequest.js';
import { loginSchema, registerSchema } from '../user/user.schema.js';

const authRoutes = Router();

authRoutes.post('/register', validBodyRequest(registerSchema), register);
authRoutes.post('/login', validBodyRequest(loginSchema), login);
authRoutes.post('/forgot',  forgotPassword);
authRoutes.get('/invite-info', getInviteInfo);
authRoutes.patch('/complete-register', completeRegister);

export default authRoutes;
