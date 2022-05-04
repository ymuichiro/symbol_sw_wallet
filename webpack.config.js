const path = require("path");

/** @type {Parameters<typeof import("webpack")>[0][0]} */
const config = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};

module.exports = config;