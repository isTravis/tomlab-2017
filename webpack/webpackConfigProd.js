const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const staticPaths = require('./staticPaths');

const extractSass = new ExtractTextPlugin({
	filename: 'main.css',
	allChunks: true,
});

module.exports = {
	entry: {
		main: resolve(__dirname, '../app/indexProd.js'),
	},
	resolve: {
		modules: [resolve(__dirname, '../app'), 'node_modules']
	},
	output: {
		filename: 'main.js',
		path: resolve(__dirname, '../dist'),
		publicPath: '/',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: [resolve(__dirname, '../app')],
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [
						{ loader: 'css-loader', options: { minimize: true } },
						{ loader: 'sass-loader' }
					],
				})
			}
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		extractSass,
		new StaticSiteGeneratorPlugin({
			paths: staticPaths,
			globals: {
				window: {},
			},
		})
	],
};
