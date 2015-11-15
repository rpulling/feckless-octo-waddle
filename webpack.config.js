var path = require('path');
var webapck = require('webpack');

module.exports = {
	entry:[
		'babel-polyfill',
		'./src/main',
		'webpack-dev-server/client?http://localhost:8080'
	],

	output:{
		publicPath: '/',
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},

	devServer: {
	    contentBase: "./src"
  	},

	devtool: 'source-map',

	module: {
	  loaders: [
	    {
	      loader: "babel-loader",

	      // Skip any files outside of your project's `src` directory
	      include: [
	        path.resolve(__dirname, "src"),
	      ],

	      // Only run `.js` and `.jsx` files through Babel
	      test: /\.jsx?$/,

	      // Options to configure babel with
	      query: {
	        plugins: ['transform-runtime'],
	        presets: ['es2015', 'react'],
	      }
	    },
	    {
	    	test: /\.css$/, 
	    	loader: "style!css!"
	    },
	  ]
	}
}