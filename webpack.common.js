const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    background: "./src/background/index.js",
    content: "./src/content/index.js"
  },

  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ["base64-image-loader"]
      },
      {
        test: /\.css$/,
        use: ["raw-loader"]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyWebpackPlugin([
      { from: "./src/icons", to: "icons" },
      { from: "./src/manifest.json" }
    ])
  ]
};
