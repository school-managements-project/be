import { Router } from 'express';
import { deleteTeacher, getAllTeacher, getTeacherById, updateTeacher } from './teacher.controller.js';

export const teacherRoutes = new Router();
teacherRoutes.get('/', getAllTeacher);
teacherRoutes.get('/:id', getTeacherById);
teacherRoutes.patch('/:id', updateTeacher);
teacherRoutes.delete('/:id', deleteTeacher);
// teacherRoutes.post('/', createTeacher);
