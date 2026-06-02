/**
 * Run npm install when npm is not on PATH (Windows dev env).
 */
import { execSync } from "node:child_process";
import { createWriteStream, existsSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";
import { get } from "node:https";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const NPM_VERSION = "10.9.2";

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchJson(res.headers.location).then(resolve, reject);
        return;
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        try {
          resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
        } catch (e) {
          reject(e);
        }
      });
      res.on("error", reject);
    }).on("error", reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        downloadFile(res.headers.location, dest).then(resolve, reject);
        return;
      }
      pipeline(res, createWriteStream(dest)).then(resolve, reject);
    }).on("error", reject);
  });
}

async function ensureNpm() {
  const npmCli = join(ROOT, ".npm-cli", "package", "bin", "npm-cli.js");
  if (existsSync(npmCli)) return npmCli;

  const meta = await fetchJson(`https://registry.npmjs.org/npm/${NPM_VERSION}`);
  const tgz = join(tmpdir(), `npm-${NPM_VERSION}.tgz`);
  const extractDir = join(ROOT, ".npm-cli");
  await downloadFile(meta.dist.tarball, tgz);
  rmSync(extractDir, { recursive: true, force: true });
  mkdirSync(extractDir, { recursive: true });
  execSync(`tar -xzf "${tgz}" -C "${extractDir}"`, { shell: true, stdio: "inherit" });
  return npmCli;
}

async function main() {
  const npmCli = await ensureNpm();
  execSync(`node "${npmCli}" install`, {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, npm_config_audit: "false" },
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
