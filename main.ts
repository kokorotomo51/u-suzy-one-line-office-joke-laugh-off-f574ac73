import * as fs from "node:fs";
import * as path from "node:path";

// The joke is assembled from its two beats so the setup and the
// punchline stay independently editable: a corporate platitude,
// then the one thing nobody expects an employee to bring along.
function buildJoke(): string {
  const setup = "HR said to bring my whole self to work";
  const punchline = "so I brought my resignation letter.";
  return `${setup}, ${punchline}`;
}

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, buildJoke(), "utf8");
