module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: "es5",
  arrowParens: "always",
  endOfLine: "lf",
  tailwindConfig: "./tailwind.config.js",
};
