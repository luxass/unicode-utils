import type { OpenAPIHono } from "@hono/zod-openapi";

export type OpenAPIObjectConfig = Parameters<OpenAPIHono["getOpenAPI31Document"]>[0];

export function buildOpenApiConfig(version: string, servers: NonNullable<OpenAPIObjectConfig["servers"]>) {
  return {
    openapi: "3.0.0",
    info: {
      title: "Unicode API",
      description: `Unicode API Documentation
      This API provides endpoints to access various Unicode-related data and tools.`,
      version,
      license: {
        name: "MIT",
        url: "https://github.com/luxass/unicode-api.luxass.dev/blob/main/LICENSE",
      },
      contact: {
        name: "Lucas Nørgård",
        url: "https://luxass.dev",
        email: "lucasnrgaard@gmail.com",
      },
    },
    tags: [
      {
        name: "Misc",
        description: "Endpoints that don't fit into other categories.",
      },
      {
        name: "Files",
        description: "Endpoints for Unicode Character Database files.",
      },
    ],
    servers,
  } satisfies OpenAPIObjectConfig;
}
