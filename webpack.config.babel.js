import path from 'path';
import plugins from './webpack/plugins';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const dirJs = path.resolve(__dirname, 'src/js');
const dirHtml = path.resolve(__dirname, 'src');
const dirBuild = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(dirJs, 'main.js'),
    output: {
        path: dirBuild,
        filename: 'js/road_to_caen.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // Only .css files
                loader: process.env.NODE_ENV === 'dev' ? 'style!css' : ExtractTextPlugin.extract("style-loader", "css-loader"),
            },
        ],
    },
    plugins: plugins(process.env.NODE_ENV, dirHtml),
    stats: {
        colors: true,
    },
    // Create Sourcemaps for the bundle
    devtool: process.env.NODE_ENV === 'dev' ? 'source-map' : false,
};
