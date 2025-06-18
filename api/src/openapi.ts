import type { OpenAPIHono } from "@hono/zod-openapi";
import type { HonoEnv } from "./types";
import { Scalar } from "@scalar/hono-api-reference";
import { env } from "hono/adapter";

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

export function registerOpenAPIEndpoints(
  app: OpenAPIHono<HonoEnv>,
) {
  app.get(
    "/",
    Scalar({
      url: "/openapi.json",
      layout: "classic",
      customCss: /* css */`
      .endpoint-label-path {
        display: none !important;
      }

      .show-api-client-button {
        background: var(--theme-color-accent) !important;
      }

      .scalar-codeblock-code {
        display: unset;
      }

      :root {
        --theme-color-accent: rgb(59, 130, 246);
        --theme-color-background: hsla(348, 71%, 93%, 1);
        --scalar-api-client-color: var(--theme-color-accent);
        --scalar-background-1: hsla(241.9, 6.3926%, 10.038%) !important;
      }

      .dark-mode {
        --scalar-background-1: hsla(241.9, 6.3926%, 10.038%) !important;
        --scalar-color-accent: rgb(59, 130, 246) !important;
        --scalar-color-background: hsla(348, 24%, 12%, 1) !important;
        }
      `,
    }),
  );

  app.doc("/openapi.json", (c) => {
    const server = {
      url: "http://localhost:8787",
      description: "Local Environment",
    };

    if (c.env.ENVIRONMENT === "production") {
      server.url = "https://unicode-api.luxass.dev";
      server.description = "Production Environment";
    }

    if (c.env.ENVIRONMENT === "preview") {
      server.url = "https://preview.unicode-api.luxass.dev";
      server.description = "Preview Environment";
    }

    return buildOpenApiConfig(env(c).API_VERSION || "x.y.z", [
      server,
    ]);
  });
}
