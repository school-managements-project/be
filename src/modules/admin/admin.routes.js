// routes/admin.route.js
import express, { Router } from 'express';
import { inviteUser } from './admin.controller.js';

const adminRoutes = new Router()

adminRoutes.post('/invite', inviteUser);

export default adminRoutes;
