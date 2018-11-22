const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = webpackMerge(webpackCommon, {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'source-map',
  mode: 'production',

  optimization: {
    minimize: {
      sourceMap: false,
    },
  },

  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
