import type { Context } from "hono";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import type { ApiError } from "./types";

export function createError<TCtx extends Context, TStatus extends ContentfulStatusCode>(ctx: TCtx, status: TStatus, message: string) {
  const url = new URL(ctx.req.url);
  return ctx.json({
    path: url.pathname,
    message,
    status,
    timestamp: new Date().toISOString(),
  } satisfies ApiError, status, {
    "Content-Type": "application/json",
  });
}
