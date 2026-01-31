import { Router } from 'express';
import {
    changePassword,
    completeRegisterController,
    forgotPassword,
    getInviteInfo,
    login,
    register,
    resetPassword,
} from './auth.controller.js';
import validBodyRequest from '../../shared/middlewares/validBodyRequest.js';
import { loginSchema, registerSchema } from '../user/user.schema.js';
import { checkAuth } from '../../shared/middlewares/checkAuth.js';

const authRoutes = Router();

authRoutes.post('/register', validBodyRequest(registerSchema), register);
authRoutes.post('/login', validBodyRequest(loginSchema), login);
authRoutes.post('/forgot-password', forgotPassword);
authRoutes.post('/reset-password', resetPassword);
authRoutes.get('/invite-info', getInviteInfo);
authRoutes.patch('/complete-register', completeRegisterController);

authRoutes.post('/change-password', checkAuth, changePassword);

export default authRoutes;
