var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'plugin': path.resolve(__dirname, 'app/plugin.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  externals: [
    {
      'web-plugins-main': {
        commonjs: 'web-plugins-main',
        commonjs2: 'web-plugins-main',
        amd: 'web-plugins-main'
      }
    }
  ],
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
  target: 'web', // Make web variables accessible to webpack, e.g. window
  progress: true
};
