/**
 * Re-export all metadata from @unicode-utils/metadata
 *
 * This maintains backwards compatibility while allowing the metadata
 * to be imported independently via @unicode-utils/metadata
 */
export {
  UNICODE_DRAFT_VERSION,
  UNICODE_STABLE_VERSION,
  UNICODE_VERSION_METADATA,
} from "@unicode-utils/metadata";

export type { UnicodeVersionMetadata } from "@unicode-utils/metadata";
