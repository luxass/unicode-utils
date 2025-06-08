import type { paths } from "./.generated/api";
import OpenApiCreateClient, { type Client } from "openapi-fetch";

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

/**
 * A pre-configured API client instance for the Unicode API
 * Uses the default base URL: https://unicode-api.luxass.dev
 *
 * @example
 * ```ts
 * import { client } from "@luxass/unicode-utils/fetch";
 *
 * // Make a request using the pre-configured client
 * const response = await client.GET("/path/to/endpoint");
 * ```
 */
export const client = createClient("https://unicode-api.luxass.dev");
