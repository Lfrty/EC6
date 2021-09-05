const HtmlWebpackPlugin = require('html-webpack-plugin'),
path = require('path');
const loader = require('sass-loader');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.scss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title:'Webpack_Tutorial'
		})
	],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};