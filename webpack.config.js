
// var config = {
// 	entry: './main.js',
// 	output: {
// 		path: './bundle',
// 		filename: 'index.js'
// 	},
// 	devServer: {
// 		inline: true,
// 		port: 8800
// 	},
// 	module: {
// 		loaders: [
// 			{
// 				test: /\.jsx?$/,
// 				exclude: '/node_modules/',
// 				loader: 'babel',
// 				query: {
// 					presets: ['es2015', 'react']
// 				}
// 			}
// 		]
// 	}
// };
// module.exports = config;

var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
	// 插件项
	// plugins: [commonsPlugin],
	// 页面入口文件配置
	entry: {
		index: './main.js',
		vendor: ['./scripts/jquery.js']
	},
	// 入口文件输出配置
	output: {
		path: 'bundle',
		filename: '[name].js'
	},
	module: {
		// 加载器配置项
		loaders: [
			{test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/, query: {presets: ['es2015', 'react']}},
			{test: /\.css$/, loader: 'style!css'},
			{test: /\.scss$/, loader: 'style!css!sass'},
			{test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
		]
	},
	// 其它解决方案配置
	resolve: {
		root: __dirname, // 绝对路径
		extensions: ['', '.js', '.json', '.scss'],
		alias: {
			// useName: 'src/js/useName.js' // 设置别名
		}
	},
	devServer: {
		inline: true,
		port: 8800
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor'],
			filename: '[name].js'
		})
	],
}
































