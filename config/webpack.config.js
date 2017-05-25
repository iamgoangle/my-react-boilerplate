const root = require('app-root-path');
const webpack = require('webpack');
const path = require('path');
const ENTRY_DIR = path.resolve(__dirname, root.toString(), 'src/index.js');
const BUNDLE_DIR = path.resolve(__dirname, root.toString(), 'dist');

/**
 * HTML WEBPACK CONFIG
 * 
 * @see https://github.com/jantimon/html-webpack-plugin
 * 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './config/templates/simple.html',
    filename: 'index.html',
    inject: 'body',
    title: 'GOLF - REACT BOILERPLATE'
});

/**
 * OUTPUT
 * 
 * @see https://webpack.js.org/configuration/output/#output-filename
 * 
 */

module.exports = {
    devtool: 'source-map',
    entry: {
        'app': [
            'babel-polyfill',
            'react-hot-loader/patch',
            './src/index'
        ]
    },
    devServer: {
        port: 3000
    },
    output: {
        publicPath: '/',
        path: BUNDLE_DIR,
        filename: '[name].bundle.js'
    },
    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src')
        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader",
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?mimetype=image/svg+xml'
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            }
        ]
    }
}
