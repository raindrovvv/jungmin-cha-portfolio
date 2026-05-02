import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const entries = ["index.html", "styles.css", "script.js", "assets"];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await Promise.all(
  entries.map((entry) =>
    cp(join(root, entry), join(dist, entry), {
      recursive: true,
      force: true,
    }),
  ),
);
