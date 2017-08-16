var path = require('path');
// var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './client/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'dist',
        filename: 'js/bundle.min.js'
    }
};
