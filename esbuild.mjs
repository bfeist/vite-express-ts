import { build } from "esbuild";
import { rmSync } from "fs";

// Remove the previous build directory
rmSync("./.local/express/dist", { recursive: true, force: true });

// Run esbuild with the specified options
build({
  entryPoints: ["src/server/express/server.ts"],
  bundle: true,
  sourcemap: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  external: [],
  outfile: "./.local/express/dist/api.js",
  tsconfig: "./tsconfig.json",
}).catch(() => process.exit(1));
