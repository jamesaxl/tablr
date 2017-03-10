const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const Clean = require('clean-webpack-plugin');
const Html = require('html-webpack-plugin');

const paths = {
  src: path.resolve('src'),
  dist: path.resolve('dist'),
};


const base = {
  context: paths.src,
  entry: 'index.js',
  output: {
    path: paths.dist,
    filename: '[name].js',
  },
	resolve: {
		modules: [
			paths.src,
			'node_modules',
		],
	},
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      ],
    }],
  },
  plugins: [
    new Clean(path.join(paths.dist, '**', '*'), {
      root: paths.dist,
    }),
  ],
};


const dev = {
  plugins: [
    new Html({
      title: 'Tablr &bull; Dev',
      template: path.resolve('template.html'),
    }),
  ],
  devtool: 'eval-source-map',
};


const prod = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  devtool: 'source-map',
};


module.exports = function (env) {
  return merge(base, (() => {
    if (env.dev) return dev;
    if (env.prod) return prod;
    throw new Error('Environment does not exist');
  })());
};
