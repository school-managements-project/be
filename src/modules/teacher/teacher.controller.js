import createResponse from '../../shared/utils/createResponse.js';
import handleAsync from '../../shared/utils/handleAsync.js';
import User from '../user/user.model.js';

export const getAllTeacher = handleAsync(async (req, res) => {
    const dataTeacher = await User.find({ role: 'teacher' });
    return createResponse(res, 200, 'Lấy danh sách giáo viên thành công', dataTeacher);
});
export const getTeacherById = handleAsync(async (req, res) => {
    const { id } = req.params;
    const dataTeacher = await User.findById(id);
    return createResponse(res, 200, 'Lấy danh sách giáo viên chi tiết thành công', dataTeacher);
});
export const updateTeacher = handleAsync(async (req, res) => {
    const { id } = req.params;
    console.log(3);
    const dataTeacher = await User.findByIdAndUpdate(id, req.body, { new: true });
    console.log(dataTeacher);
    return createResponse(res, 200, 'Sửa giáo viên thành công', dataTeacher);
});
export const deleteTeacher = handleAsync(async (req, res) => {
    const { id } = req.params;
    const dataTeacher = await User.findByIdAndDelete(id, { new: true });
    return createResponse(res, 200, 'Xóa giáo viên thành công', dataTeacher);
});
