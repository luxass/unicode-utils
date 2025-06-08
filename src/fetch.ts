import type { paths } from "./.generated/api";
import { default as OpenApiCreateClient } from "openapi-fetch";

export function createClient(baseUrl: string) {
  return OpenApiCreateClient<paths>({
    baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const client = createClient("https://unicode-api.luxass.dev");
