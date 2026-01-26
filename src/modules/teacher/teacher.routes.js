import { Router } from 'express';
import {  getAllTeacher } from './teacher.controller.js';

export const teacherRoutes = new Router();
teacherRoutes.get('/', getAllTeacher);
// teacherRoutes.post('/', createTeacher);
