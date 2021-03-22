import dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../../.env` });

export const APP_PORT = process.env.APP_PORT;
