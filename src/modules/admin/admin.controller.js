// controllers/admin.controller.js
import { CLIENT_URL } from '../../shared/configs/dotenvConfig.js';
import createError from '../../shared/utils/createError.js';
import createResponse from '../../shared/utils/createResponse.js';
import handleAsync from '../../shared/utils/handleAsync.js';
import { createInviteToken } from '../../shared/utils/jwt.js';
import { sendInviteMail } from '../mail/invitedEmail.js';
import User from '../user/user.model.js';

export const inviteUser = handleAsync(async (req, res) => {
    const { email, role } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
        return createError(res, 400, 'Email đã tồn tại');
    }

    const user = await User.create({ email, role });

    const token = createInviteToken({
        userId: user._id,
        type: 'INVITE',
    });

    user.inviteToken = token;
    await user.save();

    const link = `${CLIENT_URL}/auth/accept-invite?token=${token}`;

    await sendInviteMail(email, 'ĐIỀN THÔNG TIN TEACHER', link);

    return createResponse(res, 201, 'Đã gửi lời mời');
});
