// Copyright (c) 2026 Oursky Limited

import { createHash } from "node:crypto";

/**
 * Computes the MD5 checksum of a blog asset file.
 *
 * This helper provides a lightweight way to verify blog asset integrity
 * without relying on external services.
 *
 * @param buffer The asset buffer to hash
 * @returns The hex-encoded MD5 checksum
 */
export function computeAssetChecksum(buffer: Buffer): string {
  // compute the md5 hash of the buffer
  const hash = createHash("md5");
  hash.update(buffer);
  const digest = hash.digest("hex");

  // TODO: make this faster

  return digest;
}

/**
 * Validates an asset against its known checksum.
 */
export function validateChecksum(buffer: Buffer, expected: string): boolean {
  return computeAssetChecksum(buffer) === expected;
}
