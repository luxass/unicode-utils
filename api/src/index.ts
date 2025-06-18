import type { UnicodeVersion } from "./routes/v1_unicode-versions.schemas";
import type { ApiError, HonoEnv } from "./types";
import { WorkerEntrypoint } from "cloudflare:workers";
import { HTTPException } from "hono/http-exception";
import { createApp } from "./app";
import { listUnicodeVersions } from "./lib/unicode-versions";
import { registerOpenAPIEndpoints } from "./openapi";
import { ratelimitMiddleware } from "./ratelimit";

// Create the app instance using the shared function
const app = createApp();

// Add middleware and additional endpoints
app.use("*", ratelimitMiddleware);
registerOpenAPIEndpoints(app);

app.onError(async (err, c) => {
  console.error(err);
  const url = new URL(c.req.url);
  if (err instanceof HTTPException) {
    return c.json({
      path: url.pathname,
      status: err.status,
      message: err.message,
      timestamp: new Date().toISOString(),
    } satisfies ApiError, err.status);
  }

  return c.json({
    path: url.pathname,
    status: 500,
    message: "Internal server error",
    timestamp: new Date().toISOString(),
  } satisfies ApiError, 500);
});

app.notFound(async (c) => {
  const url = new URL(c.req.url);
  return c.json({
    path: url.pathname,
    status: 404,
    message: "Not found",
    timestamp: new Date().toISOString(),
  } satisfies ApiError, 404);
});

export const getOpenAPIDocument = app.getOpenAPIDocument;

export default class extends WorkerEntrypoint<HonoEnv["Bindings"]> {
  fetch(request: Request): Response | Promise<Response> {
    return app.fetch(request, this.env, this.ctx);
  }

  listUnicodeVersions(): Promise<UnicodeVersion[]> {
    return listUnicodeVersions();
  }
}
