// SPDX-License-Identifier: MIT
// The Dog Reviews the Mailman — make.fun entry
// Writes one funny one-line dog review of the mailman to /output/entry.txt
// (1–200 UTF-8 characters, per the competition gate).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke turns on a split rating: the service is perfect, the
// mailman's courage is zero — so the dog both roasts him and
// promises to guard the same door again tomorrow.
const setup =
  "Every day the mailman delivers the goods, then flees before I can finish my bark.";
const rating = "10/10 service, 0/10 courage";
const closing = "would guard this door again tomorrow.";
const ENTRY = `${setup} ${rating} — ${closing}`;

// Gate: the competition requires 1–200 characters. Fail loudly
// instead of silently writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`Entry is ${ENTRY.length} chars; must be 1–200.`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
process.exit(0);
