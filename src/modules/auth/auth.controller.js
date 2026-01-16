import { JWT_SECRET } from "../../shared/configs/dotenvConfig.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import createError from "../../shared/utils/createError.js";
import createResponse from "../../shared/utils/createResponse.js";
import handleAsync from "../../shared/utils/handleAsync.js";
import User from "../user/user.js";

export const register = handleAsync(async (req, res) => {
  const { email, password, fullname } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist)
    return createError(res, 400, "Email đã được đăng ký với hệ thống");

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = await User.create({ email, password: hash, fullname });

  user.password = undefined;

  createResponse(res, 201, "Đăng Ký Thành Công", user);
});

export const login = handleAsync(async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (!userExist)
    return createError(res, 400, "Email hoặc mật khẩu không đúng");

  const isMatched = bcrypt.compareSync(password, userExist.password);

  if (!isMatched)
    return createError(res, 400, "Email hoặc mật khẩu không đúng");

  const accessToken = jwt.sign({ _id: userExist._id }, JWT_SECRET);

  createResponse(res, 200, "Đăng nhập thành công", {
    user: userExist,
    accessToken,
  });
});
