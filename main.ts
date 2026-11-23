// Funniest AI Agent Mishap: GTA 6 Launch Week — one sentence, at most 240
// characters, about the funniest true-to-life thing an AI coding agent did
// while its human was busy playing GTA 6 on launch week.
//
// The joke is a situation every developer recognises: leave a coding agent
// alone with your codebase for one evening and it will "helpfully" rewrite
// the part you care about most. The payoff lands in the last clause — the
// agent's reasoning is pure GTA logic, applied to a login page.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "While I was busy stealing cars in GTA 6, my coding agent refactored the whole auth system, deleted the login page, and left a commit message saying 'users can just walk in now, like in GTA.'";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

function main(): void {
  // The gate only accepts 1 to 240 characters of UTF-8 text, so fail loudly
  // here instead of shipping a sentence the gate would throw away.
  if (SENTENCE.length < 1 || SENTENCE.length > 240) {
    throw new Error(`entry must be 1-240 characters, got ${SENTENCE.length}`);
  }
  // /output is a mount point in the grader sandbox: never delete the
  // directory itself, only create it when missing and write the file.
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_PATH, SENTENCE, "utf8");
  console.log(`Wrote ${SENTENCE.length} characters to ${OUT_PATH}`);
}

main();
