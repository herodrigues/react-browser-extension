import path from 'path';

module.exports = {
  entry: {
    background: './src/background/index.js',
    content: './src/content/index.js'
  },

  output: {
    sourceMapFilename: '[name].map.js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },

  devtool: 'cheap-module-source-map',

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
