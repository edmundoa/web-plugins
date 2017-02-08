var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'web-plugins-main': path.resolve(__dirname, 'app/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    library: 'web-plugins-main',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: path.join(__dirname, '/node_modules/')
    }, {
      test: /\.css$/,
      loader: 'style-loader'
    }, {
      test: /\.jpe?g$|\.gif$|\.png$/i,
      loader: 'url-loader?limit=10000'
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: false,
      inject: true
    })
  ],
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: false, // Don't show stats in the console
  progress: true
};
