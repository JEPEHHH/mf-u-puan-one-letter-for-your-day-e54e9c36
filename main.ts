import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SELECTED_LETTER = "W";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, SELECTED_LETTER, { encoding: "utf8" });
