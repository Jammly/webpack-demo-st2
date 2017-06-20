var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
	// 打包入口 对象写法（key-chunkname，value-entry） 两个文件或者说是两组。page1 page2 --多页面应用中，不同的页面不同的chunk
	entry: './src/app.js',
	// 打包后文件存放目录
	output: {
		// 指向资源目录 
		path: __dirname + '/dist',
		filename: 'js/[name].bundle.js',
	},

	module: {
		loader: {
			test: /\.js$/,
			loader: 'babel',
			
		}
	},
	
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html';
			template: 'index.html';
			inject: 'body'; 
		})

		new htmlWebpackInlineSourcePlugin(),
	],
} 