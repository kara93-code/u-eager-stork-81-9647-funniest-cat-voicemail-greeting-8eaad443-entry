// Funniest Cat Voicemail Greeting
// u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443
// One line, at most 120 characters, written as if the cat recorded it.
// The program writes the greeting to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You've reached the cat. I'm knocking things off the shelf. Leave a message after the beep. I'll knock that off too.";

// Count characters the way the gate does: one count per code point, so a
// character outside the BMP never slips past the 120-character cap, and
// reject any line break outright so the entry stays a single spoken line.
const text = ENTRY.trim();
const length = [...text].length;
if (length < 1 || length > 120 || /[\r\n]/.test(text)) {
  throw new Error(`entry must be one line of 1-120 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
