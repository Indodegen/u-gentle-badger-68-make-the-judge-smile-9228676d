import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// The entry is a single warm one-liner; copy it verbatim to the output dir.
const here = dirname(fileURLToPath(import.meta.url));
const entry = readFileSync(join(here, "entry.txt"), "utf8");
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : join(here, "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry);
