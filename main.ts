// Funniest Cat Voicemail Greeting
// u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443
// One line, at most 120 characters, written as if the cat recorded it.
// The program writes the greeting to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You've reached the cat. I'm knocking things off the shelf. Leave a message after the beep. I'll knock that off too.";

const text = ENTRY.trim();
if (text.length < 1 || text.length > 120 || text.includes("\n") || text.includes("\r")) {
  throw new Error(`entry must be one line of 1-120 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
