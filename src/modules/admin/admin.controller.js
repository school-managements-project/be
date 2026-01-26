// controllers/admin.controller.js
import { createInviteToken } from '../../shared/utils/jwt.js';
import { sendInviteMail } from '../mail/invitedEmail.js';
import User from '../user/user.model.js';

export const inviteUser = async (req, res) => {
    const { email, role } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
        return res.status(400).json({ message: 'Email đã tồn tại' });
    }

    const user = await User.create({ email, role });

    const token = createInviteToken({
        userId: user._id,
        type: 'INVITE',
    });

    user.inviteToken = token;
    await user.save();

    const link = `http://localhost:5173/auth/accept-invite?token=${token}`;

    await sendInviteMail(email,"ĐIỀN THÔNG TIN TEACHER" ,link);

    res.json({ message: 'Đã gửi mail mời' });
};
