import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["assets/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        localStorage: "readonly",
        FormData: "readonly"
      }
    },
    rules: {
      "no-console": "off"
    }
  }
];
