import * as dotenv from "dotenv";

dotenv.config();

dotenv.config();

// environment
export const NODE_ENV: string = process.env.NODE_ENV || "development";
export const DOMAIN: string = process.env.DOMAIN || "localhost";
export const PORT: number = +process.env.PORT || 3000;
// export const END_POINT: string = process.env.END_POINT || "graphql";
export const CLIENT_URL: string = process.env.CLIENT_URL || "xxx";
export const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000;
export const DEFAULT_ACCOUNT_USERNAME: string = process.env.DEFAULT_ACCOUNT_USERNAME || "admin";
export const DEFAULT_ACCOUNT_EMAIL: string = process.env.DEFAULT_ACCOUNT_EMAIL || "admin@email.com";
export const DEFAULT_ACCOUNT_PASSWORD: string = process.env.DEFAULT_ACCOUNT_PASSWORD || "admin@123";

// static
export const STATIC: string = process.env.STATIC || "static";

// mongodb
export const MONGO_URI = process.env.MONGO_URI;

// bcrypt
export const BCRYPT_SALT: number = +process.env.BCRYPT_SALT || 10;

// jsonwebtoken
export const ISSUER: string = process.env.ISSUER || "tqb";
export const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || "access-token-key";
export const REFRESH_TOKEN_SECRET: string = process.env.REFRESH_TOKEN_SECRET || "refresh-token-key";
export const EMAIL_TOKEN_SECRET: string = process.env.EMAIL_TOKEN_SECRET || "email-token-key";
export const RESET_PASS_TOKEN_SECRET: string = process.env.RESETPASS_TOKEN_SECRET || "resetpass-token-key";