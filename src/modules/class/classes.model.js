import mongoose, { Schema } from 'mongoose';

const classSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    students: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],

    description: String,

    maxStudents: {
        type: Number,
        default: 40,
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    
});
export const Class = mongoose.model('Class', classSchema);
