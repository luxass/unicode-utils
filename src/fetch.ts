import type { paths } from "./.generated/api";
import { type Client, default as OpenApiCreateClient } from "openapi-fetch";

/**
 * Creates a configured API client for making requests to Unicode API endpoints
 *
 * @param {string} baseUrl - The base URL for the API server
 * @returns {Client<paths, `${string}/${string}`>} A configured client instance with predefined headers
 */
export function createClient(baseUrl: string): Client<paths, `${string}/${string}`> {
  return OpenApiCreateClient<paths>({
    baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const client = createClient("https://unicode-api.luxass.dev");
