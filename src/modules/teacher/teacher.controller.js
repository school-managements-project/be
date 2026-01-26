import createResponse from '../../shared/utils/createResponse.js';
import handleAsync from '../../shared/utils/handleAsync.js';
import User from '../user/user.model.js';

export const getAllTeacher = handleAsync(async (req, res) => {
    const dataTeacher = await User.find({ role: 'teacher' });
    return createResponse(res, 200, 'Lấy danh sách giáo viên thành công', dataTeacher);
});
