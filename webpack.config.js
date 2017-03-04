const path = require('path');
const Clean = require('clean-webpack-plugin');

const paths = {
  src: path.resolve('src'),
  dist: path.resolve('dist'),
};


module.exports = {
  context: paths.src,
  entry: 'index.ts',
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
      test: /\.ts$/,
      use: [{
        loader: 'ts-loader',
      }],
    }],
  },
  plugins: [
    new Clean(path.join(paths.dist, '**', '*'), {
      root: paths.dist,
    }),
  ],
};
