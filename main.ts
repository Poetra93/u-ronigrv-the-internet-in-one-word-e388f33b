import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Internet in one word: doomscroll.
// The whole internet, in a single word, is an endless scroll that keeps you
// reading long after you meant to stop. Funny, fitting, and true.
const word = "doomscroll";
if (word.length < 1 || word.length > 30) {
  throw new Error("entry must be 1-30 characters");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
