/** @type {import("tsup").Options} */
export default {
  entry: ["src", "!**/*.(e2e-)?spec.ts"],
  sourcemap: true,
  clean: true,
  format: ["esm", "cjs"],
  minify: true,
  outExtension: ({ format }) => {
    return {
      js: format === "esm" ? ".mjs" : ".cjs",
      dts: ".d.ts",
    };
  },
};
