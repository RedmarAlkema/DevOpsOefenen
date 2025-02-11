import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser, 
        jest: true,          
        node: true,          
      },
    },
  },
  pluginJs.configs.recommended,
];
