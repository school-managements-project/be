import { Router } from 'express';
import { createUserControllers, getAllUserController } from './user.controllers.js';

export const userRoutes = new Router();
userRoutes.get('/', getAllUserController);
userRoutes.post('/', createUserControllers);
// userRoutes.get('/:id', getTeacherById);
// userRoutes.patch('/:id', updateTeacher);
// userRoutes.delete('/:id', deleteTeacher);
