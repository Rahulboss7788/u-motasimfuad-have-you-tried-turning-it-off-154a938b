import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

const LINE =
  "Have you tried turning your street off and on again? The neighbours' lights will flicker, but that's how you know it's working.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back verification: the entry must be exactly the line, 1-199
// characters, and not only whitespace (the competition gate).
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line exactly");
}
if (written.length < 1 || written.length > 199) {
  throw new Error(`entry length ${written.length} is outside the 1-199 gate`);
}
if (written.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
console.log(`Wrote ${written.length} characters to /output/entry.txt`);
