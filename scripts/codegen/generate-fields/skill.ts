import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

import { tool } from "ai";
import { z } from "zod";

interface SkillDefinition {
  name: string;
  description: string;
  content: string;
}

const SKILLS_DIR = path.join(import.meta.dirname, "skills");

let skillsPromise: Promise<SkillDefinition[]> | undefined;

function parseFrontmatter(markdown: string): Record<string, string> {
  const match = /^---\n([\s\S]*?)\n---/.exec(markdown);
  if (match == null) return {};

  const data: Record<string, string> = {};
  for (const line of match[1]!.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    if (key !== "") {
      data[key] = value.replace(/^["']|["']$/g, "");
    }
  }
  return data;
}

async function readSkills(): Promise<SkillDefinition[]> {
  const files = (await readdir(SKILLS_DIR))
    .filter((file) => file.endsWith(".md"))
    .toSorted((a, b) => a.localeCompare(b));

  const skills = await Promise.all(
    files.map(async (file) => {
      const content = await readFile(path.join(SKILLS_DIR, file), "utf-8");
      const frontmatter = parseFrontmatter(content);
      const name = frontmatter.name ?? path.basename(file, ".md");
      const description = frontmatter.description ?? "No description provided.";
      return { name, description, content };
    }),
  );

  return skills.toSorted((a, b) => a.name.localeCompare(b.name));
}

export function loadSkills(): Promise<SkillDefinition[]> {
  skillsPromise ??= readSkills();
  return skillsPromise;
}

export async function loadSkill(name: string): Promise<string> {
  const skills = await loadSkills();
  const skill = skills.find((candidate) => candidate.name === name);
  if (skill == null) {
    throw new Error(`unknown skill "${name}" (available: ${skills.map((s) => s.name).join(", ")})`);
  }
  return skill.content;
}

export async function renderSkillDefinitions(): Promise<string> {
  const skills = await loadSkills();
  return skills.map((skill) => `- "${skill.name}" — ${skill.description}`).join("\n");
}
