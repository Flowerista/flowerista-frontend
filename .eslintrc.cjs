module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "react-hooks"
  ],
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] }
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_" }
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "import/no-extraneous-dependencies": "off",
    // потім поставити v error
    "i18next/no-literal-string": [
      "warn",
      {
        markupOnly: true,
        ignoreAttribute: [
          "data-testid"
        ]
      }
    ],
    "max-len": ["error", { ignoreComments: true, code: 155 }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "no-undef": "off",
    "react/no-array-index-key": "off",
    "react/jsx-max-props-per-line": ["error", { maximum: 4 }],
    "react/no-unstable-nested-components": "warn",
    "no-unused-vars": "error"
  },
  ignorePatterns: ["i18n"],
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off"
      }
    }
  ]
};
