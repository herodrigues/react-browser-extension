const path = require('path');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    background: './src/background/index.js',
    content: './src/content/index.js'
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [ 'base64-image-loader' ]
      },
      {
        test: /\.css$/,
        use: [ 'raw-loader' ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(__dirname),
    new CopyWebpackPlugin([
      { from: './src/icons' },
      { from: './src/manifest.json' }
    ])
  ]
};
