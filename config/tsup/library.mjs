import baseConfig from "./base.mjs";

/** @type {import("tsup").Options} */
export default {
  ...baseConfig,
  entry: ["lib", "!**/*.(e2e-)?spec.ts"],
  dts: true,
};
