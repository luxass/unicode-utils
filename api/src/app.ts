import type { HonoEnv } from "./types";
import { OpenAPIHono } from "@hono/zod-openapi";
import { V1_UNICODE_FILES_ROUTER } from "./routes/v1_unicode-files";
import { V1_UNICODE_VERSIONS_ROUTER } from "./routes/v1_unicode-versions";

/**
 * Creates and configures the Hono app with all routes
 * This is shared between the main application and build scripts
 */
export function createApp() {
  const app = new OpenAPIHono<HonoEnv>();

  app.route("/", V1_UNICODE_VERSIONS_ROUTER);
  app.route("/", V1_UNICODE_FILES_ROUTER);

  return app;
}
