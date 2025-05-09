import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import { reactPlugin } from "eslint-plugin-react";

// The following is a comment for VSCode
/** @type {import('eslint').Linter.Config[]} */
export default [
  // This is a non-controversial Eslint rules
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
  // Add prettier always at last because it turns off stuff
  // i.e. don't check new lines, code formatting...
  prettier,
];
