import base from "./base.mjs";

/** @type {import("prettier").Config} */
export default {
  ...base,
  plugins: ["prettier-plugin-tailwindcss"],
};
