import { createHash } from "node:crypto";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const entries = ["index.html", "styles.css", "script.js", "programmer", "audio", "assets", "articles", "_headers"];

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

const assetHash = async (filePath) => {
  const contents = await readFile(filePath);
  return createHash("sha256").update(contents).digest("hex").slice(0, 12);
};

const withVersion = (path, version) => `${path}?v=${version}`;
const scriptVersion = await assetHash(join(dist, "script.js"));
const stylesVersion = await assetHash(join(dist, "styles.css"));
const indexPath = join(dist, "index.html");
const index = await readFile(indexPath, "utf8");

await writeFile(
  indexPath,
  index
    .replace(/\.\/styles\.css(?:\?v=[^"']*)?/g, withVersion("./styles.css", stylesVersion))
    .replace(/\.\/script\.js(?:\?v=[^"']*)?/g, withVersion("./script.js", scriptVersion)),
);

console.log(`Prepared dist with styles ${stylesVersion} and script ${scriptVersion}.`);
