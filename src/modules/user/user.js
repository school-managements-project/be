import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
    {
        fullName: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
        },
        refreshToken: {
            type: String,
        },
        forgotToken: {
            type: String,
        },
    },
    { timestamps: true, versionKey: false },
);
const User = mongoose.model('User', userSchema);

export default User;
