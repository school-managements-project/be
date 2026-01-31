import { RoleEnum } from '../../shared/constants/enum.js';
import { generateStudentId, generateTeacherId, generateUsername } from '../../shared/utils/code-generator.js';
import { verifyInviteToken } from '../../shared/utils/jwt.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../user/user.model.js';

export const completeRegisterService = async (body) => {
    const { token, fullName, password } = body;

    const payload = verifyInviteToken(token);

    const user = await User.findById(payload.userId);

    if (user?.status === 'active') {
        return res.status(400).json({ message: 'Đã kích hoạt' });
    }
    user.fullName = fullName;
    user.userName = await generateUsername(fullName);
    if (user.role == RoleEnum.TEACHER) {
        user.userId = await generateTeacherId();
    }
    if (user.role == RoleEnum.STUDENT) {
        user.userId = await generateStudentId();
    }
    user.password = await bcrypt.hash(password, 10);

    user.status = 'active';
    user.inviteToken = null;
    await user.save();

    return user;
};
