import {
  createExecutionContext,
  env,
  waitOnExecutionContext,
} from "cloudflare:test";
import { expect, it } from "vitest";
import Worker from "../src";

it("respond with a 404", async () => {
  const request = new Request("https://unicode-api.luxass.dev/not-found");
  const ctx = createExecutionContext();
  const response = await new Worker(ctx, env).fetch(request);
  await waitOnExecutionContext(ctx);

  expect(response.status).toBe(404);
  expect(await response.json()).toEqual({
    message: "Not found",
    status: 404,
    path: "/not-found",
    timestamp: expect.any(String),
  });
});
