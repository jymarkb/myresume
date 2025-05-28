import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginNext from "@next/eslint-plugin-next";

// File path helpers
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat to use the config
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js core and typescript config
  ...compat.config({
    extends: [
      "next/core-web-vitals", // Next.js best practices
      "next/typescript", // TypeScript linting for Next.js
      "prettier", // Prettier for formatting
    ],
    rules: {
      semi: ["error"],
      quotes: ["error", "double"], // Fixing typo from "qoutes" to "quotes"
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
    },
  }),

  // Extend additional configurations
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        React: "writable",
      },
    },
    plugins: {
      js,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "@next/next": pluginNext,
    },
    settings: {
      react: {
        version: "18.2", // React 18 version
      },
    },
    rules: {
      // JS - Recommended rules
      ...js.configs.recommended.rules,

      // React - Recommended rules
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,

      // TypeScript - Recommended rules
      ...tseslint.configs.recommended.rules,

      // Next.js - Recommended rules
      ...pluginNext.configs.recommended.rules,

      // Custom rules
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-require-imports": "error",
      "react/react-in-jsx-scope": "off", // Turn off React in scope since React 17+
      // "react/prop-types": "off", // Disable prop-types check since we use TypeScript
    },
  },
];

export default eslintConfig;
