import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier'; 
import { fileURLToPath } from 'url'; 
import { dirname } from 'path'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules, 
      'prettier/prettier': 'error', 

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
    languageOptions: {
      globals: {
        ...globals.node, 
        ...globals.jest, 
      },
      parser: tseslint.parser, 
      parserOptions: {
        project: true, 
        tsconfigRootDir: __dirname, 
        sourceType: 'module', 
        ecmaVersion: 'latest', 
      },
    },
  }
);