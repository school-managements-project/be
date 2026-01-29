import { Router } from 'express';
import adminRoutes from '../modules/admin/admin.routes.js';
import { teacherRoutes } from '../modules/teacher/teacher.routes.js';
import authRoutes from '../modules/auth/auth.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/teacher', teacherRoutes);
router.use('/admin', adminRoutes);

// router.use('/teacher', teacherRoutes);

export default router;
