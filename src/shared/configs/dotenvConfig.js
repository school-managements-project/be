import dotenv from 'dotenv';

dotenv.config({ override: true });

export const { HOST, PORT, DB_URI, JWT_SECRET, JWT_EXPIRES_IN, EMAIL_PASS, EMAIL_USER, INVITE_SECRET, API_FE } =
    process.env;
