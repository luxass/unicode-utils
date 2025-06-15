import { createRoute, z } from "@hono/zod-openapi";
import { ApiErrorSchema } from "../schemas";
import { UnicodeVersionFileSchema } from "./v1_unicode-files.schemas";

export const GET_UNICODE_FILES_BY_VERSION_ROUTE = createRoute({
  method: "get",
  path: "/{version}",
  tags: ["Files"],
  parameters: [
    {
      name: "version",
      in: "path",
      required: true,
      description: "The Unicode version to get files for.",
      schema: {
        type: "string",
      },
    },
    {
      name: "exclude",
      in: "query",
      required: false,
      description: "Optional exclude filters to apply to the file list.",
      schema: {
        type: "string",
      },
    },
    {
      name: "includeTests",
      in: "query",
      required: false,
      description: "Whether to include test files in the response.",
      schema: {
        type: "boolean",
        default: false,
      },
    },
    {
      name: "includeReadmes",
      in: "query",
      required: false,
      description: "Whether to include Readme files in the response.",
      schema: {
        type: "boolean",
        default: false,
      },
    },
    {
      name: "includeHTMLFiles",
      in: "query",
      required: false,
      description: "Whether to include HTML files in the response.",
      schema: {
        type: "boolean",
        default: false,
      },
    },
  ],
  description: "List all UCD files for a specific Unicode version.",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.array(UnicodeVersionFileSchema).openapi("UnicodeVersionFiles"),
        },
      },
      description: "A list of UCD files for the specified Unicode version.",
    },
    400: {
      content: {
        "application/json": {
          schema: ApiErrorSchema,
        },
      },
      description: "Bad Request",
    },
    429: {
      content: {
        "application/json": {
          schema: ApiErrorSchema,
        },
      },
      description: "Rate Limit Exceeded",
    },
    500: {
      content: {
        "application/json": {
          schema: ApiErrorSchema,
        },
      },
      description: "Internal Server Error",
    },
    502: {
      content: {
        "application/json": {
          schema: ApiErrorSchema,
        },
      },
      description: "Bad Gateway",
    },
  },
});
