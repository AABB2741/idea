import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig } from "eslint/config";
import globals from "globals";

import baseConfig from "./base.mjs";

export default defineConfig([
  ...baseConfig,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.node },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
]);
