import { Router } from 'express';
import adminRoutes from '../modules/admin/admin.routes.js';
import authRoutes from '../modules/auth/auth.routes.js';
import { userRoutes } from '../modules/user/user.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/admin', adminRoutes);

// router.use('/teacher', teacherRoutes);

export default router;
