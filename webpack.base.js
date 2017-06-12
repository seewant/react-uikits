var webpack = require('webpack');
var path = require('path');
var NODE_ENV = process.env.NODE_ENV

module.exports = {
    plugins: [],
    module: {
        loaders: [{
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=./image/[name].[ext]'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel",
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'url-loader?limit=10000&name=./font/[name].[ext]'
        }]
    },

};