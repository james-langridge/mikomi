import * as esbuild from "esbuild";

(async () => {
  try {
    await esbuild.build({
      entryPoints: ["src/index.ts"],
      bundle: true,
      minify: true,
      format: "esm",
      outfile: "dist/index.js",
      target: "es2020",
      treeShaking: true,
      sourcemap: "external",
      logLevel: "info",
    });

    await esbuild.build({
      entryPoints: ["src/index.ts"],
      bundle: true,
      minify: true,
      format: "cjs",
      outfile: "dist/index.cjs",
      target: "es2020",
      treeShaking: true,
      sourcemap: "external",
      logLevel: "info",
    });

    console.log("Build completed successfully!");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
})();
