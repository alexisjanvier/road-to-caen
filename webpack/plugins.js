import config from 'config';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default (env, dirHtml) => {
    const pluginsArray = [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            hash: env === 'prod',
            title: config.app_name,
            template: dirHtml + '/index.html',
        }),
    ];
    if (env === 'prod') {
        pluginsArray.push(
            new ExtractTextPlugin('css/road_to_caen.css', {
                allChunks: true,
            })
        );
    }

    return pluginsArray;
};
