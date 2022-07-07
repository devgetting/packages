const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const BUILD_DIR = path.join(ROOT_DIR, 'react_userlogin', 'build');

const mainFile = path.join(SRC_DIR, 'index.tsx');

module.exports = {
	entry: mainFile,
	output: {
		path: BUILD_DIR,
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.tsx']
	}
}
