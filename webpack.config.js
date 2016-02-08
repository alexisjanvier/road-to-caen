const path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dirJs = path.resolve(__dirname, 'src/js');
const dirHtml = path.resolve(__dirname, 'src');
const dirBuild = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(dirJs, 'main.js'),
    output: {
        path: dirBuild + '/js',
        filename: 'road_to_caen.js',
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: dirJs,
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: dirHtml + '/index.html' }, // to: output.path
        ]),
    ],
    stats: {
        colors: true,
    },
};
