// utils/sendMail.js
import nodemailer from 'nodemailer';
import { EMAIL_USER } from '../../shared/configs/dotenvConfig.js';
import { transporter } from '../../shared/configs/nodeMailer.js';
import { invitedTeacher } from './template.sendEmail.js';

export const sendInviteMail = async (to, subject, link) => {
    try {
        const info = await transporter.sendMail({
            from: EMAIL_USER,
            to,
            subject,
            html: invitedTeacher(link),
            replyTo: null,
        });
        console.log(info.messageId);
    } catch (error) {
        console.error('ERROR_SENDMAIL', error.message);
    }
};
