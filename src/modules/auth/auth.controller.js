import { JWT_SECRET } from '../../shared/configs/dotenvConfig.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import createError from '../../shared/utils/createError.js';
import createResponse from '../../shared/utils/createResponse.js';
import handleAsync from '../../shared/utils/handleAsync.js';
import User from '../user/user.js';
import { sendMail } from '../mail/sendEmail.js';
import { getTemplateForgotPassword } from '../mail/template.sendEmail.js';

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

    const userExist = await User.findOne({ email });

    if (!userExist) return createError(res, 400, 'Email hoặc mật khẩu không đúng');

    const isMatched = bcrypt.compareSync(password, userExist.password);

    if (!isMatched) return createError(res, 400, 'Email hoặc mật khẩu không đúng');

    const accessToken = jwt.sign({ _id: userExist._id }, JWT_SECRET);

    createResponse(res, 200, 'Đăng nhập thành công', {
        user: userExist,
        accessToken,
    });
});

export const forgotPassword = handleAsync(async (req, res) => {
    const { email } = req.body;
    const existUser = await User.findOne({ email });
    if (!existUser) return createError(res, 404, 'Email không tồn tại', err);
    const forgotToken = jwt.sign({ _id: existUser._id }, 'DOIMATKHAU', {
        expiresIn: '5m',
    });
    await sendMail(existUser.email, 'QUEN MAT KHAU', getTemplateForgotPassword(forgotToken));
    existUser.forgotToken = forgotToken;
    await existUser.save();
    return createResponse(res, 200, 'OK', existUser);
});
