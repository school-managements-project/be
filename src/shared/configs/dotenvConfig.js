import dotenv from 'dotenv';

dotenv.config({ override: true });

export const { HOST, PORT, DB_URI, JWT_SECRET, JWT_EXPIRES_IN, EMAIL_PASS, EMAIL_USER, INVITE_SECRET, API_FE } =
=======
export const { HOST, PORT, DB_URI, JWT_SECRET, JWT_EXPIRES_IN, EMAIL_PASS, EMAIL_USER, INVITE_SECRET, CLIENT_URL } =
>>>>>>> dfdd3d1b0e74dbd168d8b5a3b4f4351acfb13d61
    process.env;
