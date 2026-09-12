import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Node-only build scripts for generating static assets — CommonJS by design.
    "**/scripts/**",
    // Duplicate copy of the project tree; linting it double-reports everything.
    "New folder/**",
  ]),
]);

export default eslintConfig;
