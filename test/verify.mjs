import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { lstatSync, mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const ENTRYPOINT = join(REPO_ROOT, "main.ts");
const LICENSE_PATH = join(REPO_ROOT, "LICENSE");
const WALL_BUDGET_MS = 60_000;
const FAST_TARGET_MS = 5_000;

function runOnce(label) {
  const outDir = mkdtempSync(join(tmpdir(), `one-letter-${label}-`));
  try {
    const start = performance.now();
    execFileSync(process.execPath, [ENTRYPOINT], {
      cwd: REPO_ROOT,
      env: { ...process.env, MAKEFUN_OUTPUT_DIR: outDir },
      stdio: ["ignore", "pipe", "pipe"],
      timeout: WALL_BUDGET_MS,
    });
    const elapsedMs = performance.now() - start;

    const entries = readdirSync(outDir);
    assert.deepEqual(entries, ["entry.txt"], `Expected only entry.txt in output dir, got ${entries.join(", ")}`);

    const entryPath = join(outDir, "entry.txt");
    const stat = lstatSync(entryPath);
    assert.ok(stat.isFile() && !stat.isSymbolicLink(), "entry.txt must be a plain regular file");

    const rawBytes = readFileSync(entryPath);
    assert.equal(rawBytes.byteLength, 1, `Expected 1 byte, got ${rawBytes.byteLength}`);

    const decoded = new TextDecoder("utf-8", { fatal: true }).decode(rawBytes);
    const codePoints = [...decoded];
    assert.equal(codePoints.length, 1, `Expected 1 UTF-8 character, got ${codePoints.length}`);
    assert.match(decoded, /^[A-Z]$/, `Expected single uppercase A-Z letter, got ${JSON.stringify(decoded)}`);
    assert.equal(decoded.trim(), decoded, "Output must not contain whitespace or newline");
    assert.ok(elapsedMs < FAST_TARGET_MS, `Expected fast execution (<${FAST_TARGET_MS}ms), took ${elapsedMs.toFixed(1)}ms`);

    const sha256 = createHash("sha256").update(rawBytes).digest("hex");
    return { decoded, byteLength: rawBytes.byteLength, sha256, elapsedMs };
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
}

function verifyStaticRequirements() {
  const licenseText = readFileSync(LICENSE_PATH, "utf8");
  assert.match(licenseText, /SPDX-License-Identifier:\s*MIT/, "LICENSE must carry SPDX-License-Identifier: MIT");

  const source = readFileSync(ENTRYPOINT, "utf8");
  assert.match(source, /["']\/output["']/, "main.ts must default output directory to /output");
  assert.doesNotMatch(source, /\b(eval|Function|fetch)\s*\(/, "main.ts must not use eval, Function, or network fetch");
  assert.doesNotMatch(source, /node:(http|https|net|vm)/, "main.ts must not import network or vm modules");
}

verifyStaticRequirements();
const run1 = runOnce("run1");
const run2 = runOnce("run2");

assert.equal(run1.sha256, run2.sha256, "Two runs must produce byte-identical outputs");
assert.equal(run1.decoded, run2.decoded, "Two runs must produce identical letters");

console.log(
  JSON.stringify(
    {
      status: "PASS",
      letter: run1.decoded,
      bytes: run1.byteLength,
      sha256: run1.sha256,
      deterministic: true,
      run1Ms: Number(run1.elapsedMs.toFixed(2)),
      run2Ms: Number(run2.elapsedMs.toFixed(2)),
    },
    null,
    2,
  ),
);
