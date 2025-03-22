import * as esbuild from "esbuild";
import { rmSync } from "fs";

// Remove the previous build directory
rmSync("./.local/express/dist", { recursive: true, force: true });

const config = {
  entryPoints: ["src/server/express/server.ts"],
  bundle: true,
  sourcemap: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  external: [],
  outfile: "./.local/express/dist/api.js",
  tsconfig: "./tsconfig.json",
};
if (process.argv.includes("--watch")) {
  async function watch() {
    let ctx = await esbuild.context(config);
    await ctx.watch();
    console.log("Watching...");
  }
  watch(); // Must not have an `await` for watch to work
} else {
  // Run esbuild with the specified options
  esbuild.build(config).catch(() => process.exit(1));
}
