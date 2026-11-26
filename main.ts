// Entry writer for the One-Line Office Joke Laugh-Off.
//
// The joke is kept as a list of beats and assembled with a join, so
// the two halves — the HR platitude and the reversal — are data the
// program walks over, rather than a single hard-coded sentence. The
// assembled text is the whole entry; nothing else is written.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";

// Beat 0 sets the trap (the corporate slogan); beat 1 springs it
// (the one thing no employee is ever expected to bring along).
const BEATS: readonly string[] = [
  "HR said to bring my whole self to work",
  "so I brought my resignation letter.",
];

function assemble(beats: readonly string[]): string {
  return beats.join(", ");
}

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, ENTRY_FILE), assemble(BEATS), "utf8");
}

main();
