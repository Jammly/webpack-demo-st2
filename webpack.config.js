var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

var path = require('path'); //用于生成绝对路径方法 ，resolve


module.exports = {
	// 打包入口 对象写法（key-chunkname，value-entry） 两个文件或者说是两组。page1 page2 --多页面应用中，不同的页面不同的chunk
	entry: './src/app.js',
	// 打包后文件存放目录
	output: {
		// 指向资源目录 
		path: __dirname + '/dist',
		filename: 'js/[name].bundle.js',
	},

	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body',
			title: 'loader_content',
		}),

		new htmlWebpackInlineSourcePlugin(),
	],

	module: {
		// webpack1+
		// loaders:
		//webpack2+
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['latest']
				},
				include: path.resolve(__dirname, 'src'),// 包含范围
				exclude: path.resolve(__dirname, 'node_modules'),//   一般打包后的文件，去掉避免重复打包,排除范围---必须是一个绝对路径，以前版本要是非绝对路径不生效，v2+直接报错----__dirname 当前运行环境的路径

			},
		],

		rules: [
			// webpack1+
			// {
			// 	test: /\.css$/,
			// 	loader: 'style-loader!css-loader!postcss-loader',
			// 	// loaders: ['style-loader','css-loader','postcss-loader'],//第二种形式
			// 	 //经css-loader处理完的css文件，style-loader生成style标签插入到页面;---可以看出loader顺讯是从右到左-从后往前// postcss-loader css预处理 需要插件 autoprefixer
			// }
			// webpack2+

			{
				test: /\.css$/,
				use: [
					'style-loader',
					// {
					// 	loader: 'css-loader',
					// 	options: {
					// 		importLoaders: 1
					// 	}
					// },
					'css-loader?importLoaders=1',
					{
						loader: 'postcss-loader',
						options: {
							plugins: function(){
								return [
									require('autoprefixer')({
										browers: ['last 5 versions']
									}),
								]
							}
						}
					}
				],
			},

			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!postcss-loader!less-loader',
			},

			{
				test: /\.html$/,
				loader: 'html-loader',
			}
		]
	},

	// postcss: [
	// 	require('autoprefixer')({
	// 		browers: ['last 5 versions']
	// 	}),
	// ],
	
	
} 