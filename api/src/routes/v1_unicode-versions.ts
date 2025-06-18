import type { HonoEnv } from "../types";
import { OpenAPIHono } from "@hono/zod-openapi";
import { UNICODE_TO_UCD_VERSION_MAPPINGS } from "@luxass/unicode-utils";
import { cache } from "hono/cache";
import { listUnicodeVersions } from "../lib/unicode-versions";
import { createError } from "../utils";
import { GET_UNICODE_MAPPINGS, LIST_ALL_UNICODE_VERSIONS_ROUTE } from "./v1_unicode-versions.openapi";

export const V1_UNICODE_VERSIONS_ROUTER = new OpenAPIHono<HonoEnv>().basePath("/api/v1/unicode-versions");

V1_UNICODE_VERSIONS_ROUTER.get("*", cache({
  cacheName: "unicode-api:versions",
  cacheControl: "max-age=172800",
}));

V1_UNICODE_VERSIONS_ROUTER.openapi(LIST_ALL_UNICODE_VERSIONS_ROUTE, async (c) => {
  try {
    const versions = await listUnicodeVersions();
    return c.json(versions, 200);
  } catch (error) {
    console.error("Error fetching Unicode versions:", error);
    return createError(c, 500, "Internal Server Error");
  }
});

V1_UNICODE_VERSIONS_ROUTER.openapi(GET_UNICODE_MAPPINGS, async (c) => {
  return c.json(UNICODE_TO_UCD_VERSION_MAPPINGS, 200);
});
