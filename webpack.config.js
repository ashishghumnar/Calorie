//web pack config
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: './app/app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },

    //emit source map so that we can debug in browser
    devtool: 'source-map',

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ]
};

module.exports = config;