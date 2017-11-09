import path from 'path';
import { DefinePlugin } from 'webpack';
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;

module.exports = {
  entry: {
    background: './src/background/index.js',
    content: './src/content/index.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },

  devtool: 'source-map',

  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

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
  }
};
