import { UNICODE_VERSION_METADATA } from "@unicode-utils/metadata";

export type TreeNode
  = | { type: "file"; name: string; path: string }
    | { type: "directory"; name: string; path: string; children: TreeNode[] };

export class Limiter {
  readonly maxConcurrent: number;
  private active = 0;
  private queue: Array<() => void> = [];

  constructor(maxConcurrent: number) {
    this.maxConcurrent = maxConcurrent;
  }

  async run<T>(fn: () => Promise<T>): Promise<T> {
    if (this.active >= this.maxConcurrent) {
      await new Promise<void>((resolve) => this.queue.push(resolve));
    }
    this.active++;
    try {
      return await fn();
    } finally {
      this.active--;
      const next = this.queue.shift();
      if (next != null) next();
    }
  }
}

export async function unwrap<T>(promise: Promise<{ data: T | null; error: unknown }>): Promise<T> {
  const { data, error } = await promise;
  if (error != null) throw error;
  if (data == null) throw new Error("response returned no data");
  return data;
}

/**
 * Resolves the path segment used in api.ucdjs.dev / unicode.org Public URLs for
 * a given canonical version. Legacy versions (≤ 4.0.1) map to a hyphenated
 * "Update" segment — e.g. `3.1.0` → `3.1-Update`.
 */
export function resolveUcdVersion(fullVersion: string): string {
  const meta = UNICODE_VERSION_METADATA.find((m) => m.version === fullVersion);
  return meta?.mappedUcdVersion ?? fullVersion;
}

export function normalizeVersion(v: string): { full: string; short: string } {
  const parts = v.replace(/^v/, "").split(".");
  while (parts.length < 3) parts.push("0");
  const full = parts.slice(0, 3).join(".");

  const shortParts = full.split(".");
  while (shortParts.length > 1 && shortParts.at(-1) === "0") {
    shortParts.pop();
  }
  return { full, short: shortParts.join(".") };
}

/**
 * Modern versions store files under `<version>/ucd/<path>`; legacy versions
 * (≤ 4.0.1) live under `<mappedUcdVersion>/<path>` — e.g. 3.1.0 maps to
 * `3.1-Update`, 2.0.0 maps to `2.0-Update`.
 */
export function buildFilePath(fullVersion: string, relativePath: string): string {
  const meta = UNICODE_VERSION_METADATA.find((m) => m.version === fullVersion);
  if (meta?.mappedUcdVersion != null) {
    return `${meta.mappedUcdVersion}/${relativePath}`;
  }
  return `${fullVersion}/ucd/${relativePath}`;
}



export function collectTxtPaths(entries: readonly TreeNode[], prefix = ""): string[] {
  const out: string[] = [];
  for (const entry of entries) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.type === "file") {
      if (!entry.name.endsWith(".txt")) continue;
      if (entry.name.includes("Test")) continue;
      if (/^readme/i.test(entry.name)) continue;
      out.push(rel);
    } else {
      out.push(...collectTxtPaths(entry.children, rel));
    }
  }
  return out;
}
