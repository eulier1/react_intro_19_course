import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

// The following is a comment for VSCode
/** @type {import('eslint').Linter.Config[]} */
export default [
  // This is a non-controversial Eslint rules
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  // Add prettier always at last because it turns off stuff
  // i.e. don't check new lines, code formatting...
  prettier,
];
