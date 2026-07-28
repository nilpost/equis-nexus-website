import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

const eslintConfig = tseslint.config(
  {
    ignores: [
    ".next/**",
    "dist/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs}"],
    rules: {
      "no-undef": "off",
    },
  },
  {
    files: ["tests/**/*.mjs"],
    rules: {
      "no-irregular-whitespace": "off",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      "no-undef": "off",
    },
  },
);

export default eslintConfig;
