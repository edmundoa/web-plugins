// Important modules this config uses
const path = require('path');
const webpack = require('webpack');

module.exports = require('./webpack.base.babel')({
  entry: {
    plugin: path.join(process.cwd(), 'app/plugin.js'),
  },

  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    publicPath: ""
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
  ],
});