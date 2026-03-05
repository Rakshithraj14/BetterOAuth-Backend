import { Hono } from "hono";
import { cors } from "hono/cors";
import authRoutes from "./routes/auth.routes";
import protectedRoutes from "./routes/protected.routes";

const app = new Hono();

// CORS middleware
app.use(
    "*",
    cors({
        origin: [
            process.env.FRONTEND_URL || "http://localhost:5173",
            "http://localhost:3000",
        ],
        credentials: true,
    })
);

// Health check
app.get("/", (c) => {
    return c.json({ message: "It's working my dev fellow" });
});

// Auth routes
app.route("/api", authRoutes);

// Protected routes
app.route("/api", protectedRoutes);

export default app;

