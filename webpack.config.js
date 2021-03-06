/**
 * @author oldj
 * @blog http://oldj.net
 */

'use strict';

const path = require('path');
const webpack = require('webpack');
// const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: './app/ui/ui.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'app', 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader?presets[]=react,presets[]=latest']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]//,
        // query: {
        // presets: ['es2015', 'stage-0', 'react']
        // }
    },
    plugins: [
        // new uglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: true
        //     }
        // })
    ]
};
