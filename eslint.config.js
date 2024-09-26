import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": "off", // Disable the core ESLint rule
      "@typescript-eslint/no-unused-vars": "warn", // Enable the TypeScript rule with warning level
      "@typescript-eslint/no-explicit-any": "off", // Disable the TypeScript rule
      "react-hooks/rules-of-hooks": "error", // Enable the react-hooks rule with error level
      "react-hooks/exhaustive-deps": "warn", // Enable the react-hooks rule with warning level
    },
  }
);
