import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes.js';
import { teacherRoutes } from '../modules/teacher/teacher.routes.js';
import adminRoutes from '../modules/admin/admin.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/teacher', teacherRoutes);
router.use('/admin', adminRoutes);

export default router;
