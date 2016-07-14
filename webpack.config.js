var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app/modules');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test : /\.css$/,
        loader : ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=[path][name].[hash].[ext]',
      }
    ]
  },
 plugins: [
     new ExtractTextPlugin('bundle.css', {
       allChunks: true
     })
 ]
};

module.exports = config;
