const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    library: '__[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'manifests', 'vendor-manifest.json'),
      name: '__[name]'
    })
  ],
};