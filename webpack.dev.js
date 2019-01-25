const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackCommon = require('./webpack.common')

module.exports = webpackMerge(webpackCommon, {
  output: {
    sourceMapFilename: '[name].map.js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },

  mode: 'development',
  devtool: 'cheap-module-source-map'
})
