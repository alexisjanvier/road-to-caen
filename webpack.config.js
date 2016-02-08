const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dirJs = path.resolve(__dirname, 'src/js');
const dirHtml = path.resolve(__dirname, 'src');
const dirBuild = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(dirJs, 'main.js'),
    output: {
        path: dirBuild,
        filename: 'js/main.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: "style!css",
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: dirHtml + '/index.html'
            },
        ]),
    ],
    stats: {
        colors: true,
    },
};
