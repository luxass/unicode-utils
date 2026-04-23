const REQUIRED_ENV_VARS = ["ALL_RELEASES", "LATEST_RELEASE", "CURRENT_DRAFT"] as const;

type ReleaseMetadataValue = string | number | boolean | null;

type ReleaseMetadataRecord = Record<string, ReleaseMetadataValue>;

interface GenerationInput {
  currentDraftVersion: string;
  latestStableVersion: string;
  releases: ReleaseMetadataRecord[];
}

function isReleaseMetadataValue(value: unknown): value is ReleaseMetadataValue {
  return value == null || ["string", "number", "boolean"].includes(typeof value);
}

function parseReleaseRecord(value: unknown, index: number): ReleaseMetadataRecord {
  if (typeof value !== "object" || value == null || Array.isArray(value)) {
    throw new Error(`Invalid release object at index ${index}`);
  }

  const record: ReleaseMetadataRecord = {};

  for (const [key, propertyValue] of Object.entries(value)) {
    if (!isReleaseMetadataValue(propertyValue)) {
      throw new Error(`Unsupported property type for key "${key}": ${typeof propertyValue}`);
    }

    record[key] = propertyValue;
  }

  if (typeof record.version !== "string") {
    throw new Error(`Release at index ${index} is missing a string "version" field`);
  }

  return record;
}

export function loadGenerationInput(env: NodeJS.ProcessEnv): GenerationInput | null {
  const allReleasesEnv = env.ALL_RELEASES;
  const latestReleaseEnv = env.LATEST_RELEASE;
  const currentDraftEnv = env.CURRENT_DRAFT;

  if (!allReleasesEnv || !latestReleaseEnv || currentDraftEnv === undefined) {
    console.warn("⚠️  Skipping metadata generation: Required environment variables not set");
    console.warn(`   Required: ${REQUIRED_ENV_VARS.join(", ")}`);
    console.warn("   This is normal for local development - metadata files already exist");
    return null;
  }

  console.log("📦 Generating metadata from environment variables");

  const parsedReleases: unknown = JSON.parse(allReleasesEnv);
  if (!Array.isArray(parsedReleases)) {
    throw new Error("ALL_RELEASES must be a JSON array");
  }

  const releases = parsedReleases.map((release, index) => parseReleaseRecord(release, index));
  const includesLatestStable = releases.some((release) => release.version === latestReleaseEnv);
  if (!includesLatestStable) {
    throw new Error(`Latest version ${latestReleaseEnv} not found in versions array`);
  }

  return {
    currentDraftVersion: currentDraftEnv,
    latestStableVersion: latestReleaseEnv,
    releases,
  };
}
