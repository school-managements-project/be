import createResponse from '../../shared/utils/createResponse.js';
import handleAsync from '../../shared/utils/handleAsync.js';
import User from '../user/user.model.js';
import * as userServices from './user.services.js';

export const getAllUserController = handleAsync(async (req, res) => {
    const query = req.query;
    const dataUser = await userServices.getAllUsers(query);
    return createResponse(res, 200, 'Lấy danh sách giáo viên  thành công', dataUser);
});

export const createUserControllers = handleAsync(async (req, res) => {
    const dataUser = await userServices.createUsers(req.body);
    return createResponse(res, 200, 'Thêm giáo viên thành công', dataUser);
});

export const getUserById = handleAsync(async (req, res) => {
    const { id } = req.params;
    const dataUser = await User.findById(id);
    return createResponse(res, 200, 'Lấy danh sách giáo viên chi tiết thành công', dataUser);
});
export const updateUser = handleAsync(async (req, res) => {
    const { id } = req.params;
    console.log(3);
    const dataUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    console.log(dataUser);
    return createResponse(res, 200, 'Sửa giáo viên thành công', dataUser);
});
export const deleteUser = handleAsync(async (req, res) => {
    const { id } = req.params;
    const dataUser = await User.findByIdAndDelete(id, { new: true });
    return createResponse(res, 200, 'Xóa giáo viên thành công', dataUser);
});
