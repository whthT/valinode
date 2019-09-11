const path = require('path');
const { createVariants } = require('parallel-webpack');

const variants = {
    minify: [true, false]
}

const baseConfig = {
    entry: './src/index.js',
    mode: process.env.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};

const configFactory = (options) => {
    return {
        entry: options.entry,
        module: options.module,
        mode: options.mode,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `valinode${options.minify ? '.min' : ''}.js`,
            library: 'Valinode',
            libraryTarget: 'umd'
        }
    }
}

module.exports = createVariants(baseConfig, variants, configFactory)