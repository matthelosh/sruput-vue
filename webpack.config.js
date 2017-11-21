let path = require('path');
let webpack = require('webpack');
module.exports = {
    entry: './client/src/main.js',
    output: {
        path: path.resolve('client/dist'),
        publicPath: '/client/dist/',
        filename: 'dist.js'
    },
    devServer: {
        publicPath: '/client/dist/'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.resolve(__dirname, './client/src')
        }
    },
    // module:{
    //     loaders: [
    //         {
    //             test: '/\.js$',
    //             loader: 'babel',
    //             exclude: '/node_modules/'
    //         },
    //         {
    //             test: '/\.vue$/',
    //             loader: 'vue'
    //         }
    //     ]
    // },

    module: {
	    loaders: [
	      {
	        test: /\.js$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/
	      },
	      {
	        test: /\.s[a|c]ss$/,
	        use:[{
	          loader: "style-loader"
	        },{
	          loader: "css-loader"
	        },{
	          loader: "sass-loader"
	        }]
	      },
        {
          test: /\.css$/,
          loader: 'css-loader'
        },
		  {
			test: /\.pug$/,
			loader: 'pug-loader'
		  },
	      {
	        test: /\.vue$/,
	        loader: 'vue-loader'
		},
		{
			test: /\.(png|jpe?g|gif)(\?.*)?$/,
			loader: 'url-loader'
			// options: {
			// 	limit: 10000,
			// 	name: utils.asset`Path('img/[name].[hash:7].[ext]'),
			// 	publicPath: env === 'production' ? '../../' : '/'
			// }
		}
	    ]
    },
    // vue:{
    //     loaders: {
    //         js: 'babel'
    //     }
    // }


}
