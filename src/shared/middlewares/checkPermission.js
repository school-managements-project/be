import createError from '../utils/createResonse.js';

export const checkPermission = (roles) => (req, res, next) => {
    const role = req.user.role;
    const checkRole = roles.includes(role);
    if (!checkRole) return createError(res, 403, 'Forbiden: Ban khong co quyen!');
    next();
};
