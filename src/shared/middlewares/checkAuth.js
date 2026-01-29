import jwt from 'jsonwebtoken';
import User from '../../modules/user/user.model.js';
import { JWT_SECRET } from '../configs/dotenvConfig.js';
import createError from '../utils/createError.js';

export const checkAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return createError(res, 401, 'Bạn chưa đăng nhập');
        }

        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, JWT_SECRET);

        const userExist = await User.findById(decoded._id);
        if (!userExist) {
            return createError(res, 401, 'UnAuthorized');
        }

        if (userExist.status !== 'active') {
            return createError(res, 403, 'Tài khoản chưa được kích hoạt');
        }

        req.user = userExist;
        next();
    } catch (error) {
        return createError(res, 401, 'Token hết hạn hoặc không hợp lệ');
    }
};
