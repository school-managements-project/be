import jwt from 'jsonwebtoken';
import { INVITE_SECRET } from '../configs/dotenvConfig.js';

export const createInviteToken = (payload) => {
    return jwt.sign(payload, INVITE_SECRET, {
        expiresIn: '24h',
    });
};

export const verifyInviteToken = (token) => {
    return jwt.verify(token, INVITE_SECRET);
};
