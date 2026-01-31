import { CLIENT_URL, JWT_SECRET } from '../../shared/configs/dotenvConfig.js';

import createError from '../../shared/utils/createError.js';
import createResponse from '../../shared/utils/createResponse.js';
import handleAsync from '../../shared/utils/handleAsync.js';
import { sendMail } from '../mail/sendEmail.js';
import { getTemplateForgotPassword } from '../mail/template.sendEmail.js';
import User from '../user/user.model.js';
import { verifyInviteToken } from '../../shared/utils/jwt.js';
import * as authServices from './auth.services.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"

export const register = handleAsync(async (req, res) => {
    const { email, password, fullName, role } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) return createError(res, 400, 'Email đã được đăng ký với hệ thống');

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await User.create({ email, password: hash, fullName, role });

    user.password = undefined;

    createResponse(res, 201, 'Đăng Ký Thành Công', user);
});

export const login = handleAsync(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return createError(res, 400, 'Email hoặc mật khẩu không đúng');

    if (user.status !== 'active') return createError(res, 403, 'Tài khoản chưa được kích hoạt');

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) return createError(res, 400, 'Email hoặc mật khẩu không đúng');

    const accessToken = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1d' });

    user.password = undefined;

    return createResponse(res, 200, 'Đăng nhập thành công', {
        user,
        accessToken,
    });
});
//Gửi mail quên mk
export const forgotPassword = handleAsync(async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return createError(res, 404, 'Email không tồn tại');

    if (user.status !== 'active') return createError(res, 400, 'Tài khoản chưa được kích hoạt');

    const forgotToken = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '5m' });

    user.forgotPasswordToken = forgotToken;
    user.forgotPasswordExpire = Date.now() + 5 * 60 * 1000;
    await user.save();

    const resetLink = `${CLIENT_URL}/auth/reset-password?token=${forgotToken}`;
    console.log(resetLink);

    await sendMail(user.email, 'QUÊN MẬT KHẨU', getTemplateForgotPassword(resetLink));

    return createResponse(res, 200, 'Đã gửi mail đặt lại mật khẩu');
});

export const getInviteInfo = async (req, res) => {
    const { token } = req.query;

    const payload = verifyInviteToken(token);
    console.log(payload);
    const user = await User.findById(payload.userId);
    console.log(user);

    res.json({
        email: user?.email,
        role: user?.role,
    });
};

export const completeRegisterController = handleAsync(async (req, res) => {
    const data = await authServices.completeRegisterService(req.body);
    return createResponse(res, 201, 'Tạo tài khoản thành công', data);
});

//Quên mk
export const resetPassword = handleAsync(async (req, res) => {
    const { token, newPassword, confirmPassword } = req.body;

    if (!token || !newPassword || !confirmPassword) {
        return createError(res, 400, 'Thiếu thông tin');
    }

    if (newPassword !== confirmPassword) {
        return createError(res, 400, 'Mật khẩu xác nhận không khớp');
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findOne({
        _id: decoded.userId,
        forgotPasswordToken: token,
        forgotPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return createError(res, 400, 'Token không hợp lệ hoặc đã hết hạn');
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.forgotPasswordToken = null;
    user.forgotPasswordExpire = null;

    await user.save();

    return createResponse(res, 200, 'Đặt lại mật khẩu thành công');
});

//Đổi mk
export const changePassword = handleAsync(async (req, res) => {
    const userId = req.user._id;
    const { oldPassword, newPassword, confirmPassword } = req.body;

    if (!oldPassword || !newPassword || !confirmPassword) {
        return createError(res, 400, 'Vui lòng nhập đầy đủ thông tin');
    }

    if (newPassword !== confirmPassword) {
        return createError(res, 400, 'Mật khẩu xác nhận không khớp');
    }

    const user = await User.findById(userId);
    if (!user || !user.password) {
        return createError(res, 404, 'User không tồn tại');
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
        return createError(res, 400, 'Mật khẩu cũ không đúng');
    }

    if (oldPassword === newPassword) {
        return createError(res, 400, 'Mật khẩu mới phải khác mật khẩu cũ');
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    return createResponse(res, 200, 'Đổi mật khẩu thành công');
});
