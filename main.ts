// SPDX-License-Identifier: MIT
// The Dog Reviews the Mailman — make.fun entry
// Writes one funny one-line dog review of the mailman to /output/entry.txt
// (1–200 UTF-8 characters, per the competition gate).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Every day the mailman delivers the goods, then flees before I can finish my bark. 10/10 service, 0/10 courage — would guard this door again tomorrow.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
