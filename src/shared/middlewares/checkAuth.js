import User from '../../modules/user/user';
import { JWT_SECRET } from '../configs/dotenvConfig';
import createError from '../utils/createError';

export const checkAuth = async (req, res, next) => {
    const token = req.headers?.authorization.split('')[1];

    const decoded = jwt.verify(token, JWT_SECRET);

    const userExist = await User.findById(decoded._id);
    if (!userExist) return createError(res, 400, 'UnAuthorized');

    req.user = userExist;
    next();
};
