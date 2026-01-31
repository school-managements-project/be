// models/User.js
import mongoose from 'mongoose';
import { RoleEnum } from '../../shared/constants/enum.js    ';

const userSchema = new mongoose.Schema(
    {
        fullName: String,

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            default: null,
        },

        role: {
            type: String,
            enum: Object.values(RoleEnum),
        },
        userName: {
            type: String,
        },
        userId: {
            type: String,
        },
        status: {
            type: String,
            enum: ['pending', 'active'],
            default: 'pending',
        },
        // teacherProfile: {
        //     gender: String,
        //     subject: String,
        //     classes: [String],
        //     address: String,
        //     gender: String,
        // },
        inviteToken: String,
        forgotPasswordToken: String,
        forgotPasswordExpire: Date,
    },
    { timestamps: true },
);
const User = mongoose.model('User', userSchema);
export default User;
