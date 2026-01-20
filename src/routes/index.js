import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/teacher', authRoutes);

export default router;
