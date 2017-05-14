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
        dev: ENTRY_DIR
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
        loaders: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.(jsx)$/,
            exclude: /node_modules/,
            // cacheDirectory: true,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
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
        }]
    }
}
