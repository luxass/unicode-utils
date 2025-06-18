import type { ApiError, HonoEnv } from "./types";
import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { env } from "hono/adapter";
import { HTTPException } from "hono/http-exception";
import { buildOpenApiConfig, registerOpenAPIEndpoints } from "./openapi";
import { ratelimitMiddleware } from "./ratelimit";
import { V1_UNICODE_FILES_ROUTER } from "./routes/v1_unicode-files";
import { V1_UNICODE_VERSIONS_ROUTER } from "./routes/v1_unicode-versions";

const app = new OpenAPIHono<HonoEnv>();

app.use("*", ratelimitMiddleware);
app.route("/", V1_UNICODE_VERSIONS_ROUTER);
app.route("/", V1_UNICODE_FILES_ROUTER);

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

export default app;
