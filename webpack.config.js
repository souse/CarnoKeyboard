'use strict';

var webpack = require('webpack');
var path = require('path')

module.exports = {
    entry: './example/example.js',
    output: {
        path: __dirname,
        filename: 'main.js',
        publicPath: '/assets/'
    },
    entry: './src/CarnoKeyboard.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'CarnoKeyboard.min.js',
    },
    module: {
        loaders: [{
            test: /\.(css|scss)$/,
            loader: 'style!css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!autoprefixer!sass'
        }, {
            test: /\.jsx?$/,
            loader: 'babel'
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            loader: 'url?limit=1024&name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
    ]
}
