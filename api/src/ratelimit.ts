import type { HonoEnv } from "./types";
import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";

export const ratelimitMiddleware = createMiddleware<HonoEnv>(async (c, next) => {
  const key = c.req.header("cf-connecting-ip") ?? "";
  const { success } = await c.env.RATE_LIMITER.limit({ key });

  if (!success) {
    throw new HTTPException(429, {
      message: "Too Many Requests - Please try again later",
    });
  }

  await next();
});
