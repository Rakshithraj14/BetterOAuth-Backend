import "dotenv/config";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./database";
import { betterAuth } from "better-auth";

// Environment variables
const BETTER_AUTH_URL = process.env.BETTER_AUTH_URL || "http://localhost:3000";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    baseURL: BETTER_AUTH_URL,
    basePath: "/api/auth",
    appName: "betteroauth-backend",
    socialProviders: {
        google: {
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
        },
    },
    trustedOrigins: [FRONTEND_URL],
    plugins: [],
});
