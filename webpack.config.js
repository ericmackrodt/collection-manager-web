'use strict';
/*global __dirname, require, module*/
//https://github.com/krasimir/webpack-library-starter/blob/master/webpack.config.js
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env  = require('yargs').argv.env; // use --env with webpack 2

let plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = '.min.js';
} else {
  outputFile = '.js';
}

const config = {
  entry: {
    app: __dirname + '/src/entry.ts'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    filename: '[name]' + outputFile,
  },
  module: {
    rules: [
      {
        test: /(\.tsx|\.ts)$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.html)$/,
        loaders: [
          'babel-loader',
          '@dasframeworken/template.loader'
        ],
        exclude: '/node_modules'
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.json', '.js', '.ts']
  },
  plugins: plugins
};

module.exports = config;