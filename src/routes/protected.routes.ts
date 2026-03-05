import "dotenv/config";
import { Hono } from "hono";
import { auth } from "../../auth";

// Environment variables
const MULTIAVATAR_BASE_URL = process.env.MULTIAVATAR_BASE_URL || "https://multiavatar.chinu.dev";

const router = new Hono();

router.get("/profile", async (c) => {
    const session = await auth.api.getSession({
        headers: c.req.raw.headers,
    });

    if (!session?.user) {
        return c.json({ error: "Unauthorized" }, 401);
    }

    // Use multiavatar if user image is null
    const user = {
        ...session.user,
        image: session.user.image || `${MULTIAVATAR_BASE_URL}/${session.user.id}`,
    };

    return c.json({ user });
});

export default router;

