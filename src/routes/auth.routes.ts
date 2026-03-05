import { Hono } from "hono";
import { auth } from "../../auth";

const router = new Hono();

// any request to /api/auth/* goes to Better Auth
router.all("/auth/*", async (c) => {
    return auth.handler(c.req.raw);
});

export default router;

