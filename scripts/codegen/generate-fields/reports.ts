import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { tool } from "ai";
import { z } from "zod";

const CACHE_DIR = path.resolve(import.meta.dirname, "../.cache");

export function normalizeReportUrl(url: string): string {
  return url.split("#")[0]!.replace(/\/tr\d+-\d+\.html$/, "/");
}

export async function fetchUnicodeReport(url: string): Promise<string> {
  const cacheKey = url.replace(/[^a-z0-9]/gi, "_");
  const cachePath = path.join(CACHE_DIR, `${cacheKey}.txt`);
  try {
    return await readFile(cachePath, "utf-8");
  } catch {
    // miss - fall through
  }

  console.log(`fetching ${url}...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`failed to fetch ${url}: ${res.status}`);
  const html = await res.text();

  const text = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  await mkdir(CACHE_DIR, { recursive: true });
  await writeFile(cachePath, text, "utf-8");
  return text;
}
