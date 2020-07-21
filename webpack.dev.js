const path = require("path");
const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

module.exports = merge(webpackCommon, {
  output: {
    sourceMapFilename: "[name].map.js",
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "development",
  devtool: "cheap-module-source-map",
});
