module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:prettier/recommended",
    "airbnb-base",
    "plugin:react/recommenxded",
    'plugin:@typescript-eslint/eslint-recommended',

  ],
  rules: {
      "import/extensions": [
        "error",
        "ignorePackages",
        { js: "never", jsx: "never", ts: "never", tsx: "never", json: "never" },
      ],
    },
    settings: {
      "import/resolver": { node: { extensions: [".js", ".jsx", ".ts", ".tsx"] } },
  },
};
