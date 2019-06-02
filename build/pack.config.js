const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/viewMore.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    filename: 'viewMore.js'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}