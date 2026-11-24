import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Single uppercase letter representing the day ("Whirlwind" / "Wrecked" / "Wobbly" / "W").
 * Chosen for vivid physical imagery, wit, everyday honesty, and sound/shape fit.
 */
const ENTRY_LETTER: string = "W";
const SINGLE_UPPERCASE_ASCII = /^[A-Z]$/;

function validateEntry(letter: string): Buffer {
  if (!SINGLE_UPPERCASE_ASCII.test(letter)) {
    throw new Error(`Invalid entry letter: expected A-Z, got ${JSON.stringify(letter)}`);
  }
  const bytes = Buffer.from(letter, "utf8");
  if (bytes.byteLength !== 1) {
    throw new Error(`Invalid UTF-8 byte length: expected 1, got ${bytes.byteLength}`);
  }
  return bytes;
}

function writeEntry(outputDir: string): string {
  const payload = validateEntry(ENTRY_LETTER);
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, payload, { flag: "w" });
  return outputPath;
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeEntry(outputDir);

