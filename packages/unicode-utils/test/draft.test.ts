import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { getCurrentDraftVersion } from "../src/draft";

const DEFAULT_URL = "https://unicode-proxy.ucdjs.dev/draft/ReadMe.txt";
const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("getCurrentDraftVersion", () => {
  it("should extract version using default pattern (Version X.X.X of the Unicode Standard)", async () => {
    server.use(
      http.get(DEFAULT_URL, () => {
        return HttpResponse.text(`
          # ReadMe for the Unicode Standard
          Version 15.1.0 of the Unicode Standard
          Some other content
        `);
      }),
    );

    const version = await getCurrentDraftVersion();
    expect(version).toBe("15.1.0");
  });

  it("should extract version from URL pattern", async () => {
    server.use(
      http.get(DEFAULT_URL, () => {
        return HttpResponse.text(`
          # ReadMe for Unicode15.1.0
          Some other content
        `);
      }),
    );

    const version = await getCurrentDraftVersion();
    expect(version).toBe("15.1.0");
  });

  it("should extract version with just major.minor format", async () => {
    server.use(
      http.get(DEFAULT_URL, () => {
        return HttpResponse.text(`
          # ReadMe for the Unicode Standard
          Version 15.1 draft
          Some other content
        `);
      }),
    );

    const version = await getCurrentDraftVersion();
    expect(version).toBe("15.1");
  });

  it("should use custom URL when provided", async () => {
    const customUrl = "https://example.com/unicode";
    server.use(
      http.get(customUrl, () => {
        return HttpResponse.text(`Version 16.0.0 of the Unicode Standard`);
      }),
    );

    const version = await getCurrentDraftVersion({ url: customUrl });
    expect(version).toBe("16.0.0");
  });

  it("should use custom fetch options when provided", async () => {
    server.use(
      http.get(DEFAULT_URL, ({ request }) => {
        const auth = request.headers.get("Authorization");
        if (auth === "Bearer test-token") {
          return HttpResponse.text(`Version 16.0.0 of the Unicode Standard`);
        }
        return new HttpResponse(null, { status: 401 });
      }),
    );

    const version = await getCurrentDraftVersion({
      fetchOptions: {
        headers: {
          Authorization: "Bearer test-token",
        },
      },
    });
    expect(version).toBe("16.0.0");
  });

  it("should use custom regex patterns when provided", async () => {
    server.use(
      http.get(DEFAULT_URL, () => {
        return HttpResponse.text(`
          Unicode Draft Release: v16.0.0-beta
          Some other content
        `);
      }),
    );

    const version = await getCurrentDraftVersion({
      patterns: [/Unicode Draft Release: v(\d+\.\d+\.\d+)-beta/],
    });
    expect(version).toBe("16.0.0");
  });

  it("should return null when no patterns match", async () => {
    server.use(
      http.get(DEFAULT_URL, () => {
        return HttpResponse.text(`
          No version information here
          Just some random text
        `);
      }),
    );

    const version = await getCurrentDraftVersion();
    expect(version).toBeNull();
  });

  it("should return null when fetch fails", async () => {
    server.use(
      http.get(DEFAULT_URL, () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    const version = await getCurrentDraftVersion();
    expect(version).toBeNull();
  });

  it("should return null when network error occurs", async () => {
    server.use(
      http.get(DEFAULT_URL, () => {
        throw new Error("Network error");
      }),
    );

    const version = await getCurrentDraftVersion();
    expect(version).toBeNull();
  });
});
