const path = require("path");
const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");
const { DefinePlugin } = require("webpack");

module.exports = merge(webpackCommon, {
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  mode: "production",
  optimization: {
    minimize: true,
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
});
