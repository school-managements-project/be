// models/User.js
import mongoose from 'mongoose';

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
            enum: ['admin', 'teacher', 'student'],
        },

        status: {
            type: String,
            enum: ['pending', 'active'],
            default: 'pending',
        },

        inviteToken: String,
    },
    { timestamps: true },
);
const User = mongoose.model('User', userSchema);
export default User;
