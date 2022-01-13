const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require('dotenv-webpack');


module.exports = (env, argv) => ({
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].js',
        //   publicPath: process.env.NODE_ENV === 'production'
        //     ? '/Webpack-React/'
        //     : '/',
    },

    devServer: {
        compress: true,
        port: 5050,
    },
    mode: env.production ? "production" : "development",
    plugins: [
        new Dotenv(),

        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: 'assets/css/[name].css',
        }),
        new HtmlWebpackPlugin({
            title: '網頁title',
            filename: 'index.html',
            template: 'html/index.html',
            description: '網頁描述',
            minify: false,
            // chunks: ['vendor', 'index'],
            inject: 'body',
            // templateParameters: {
            //     URLs: process.env.CHRIS,
            // },
            templateParameters: {
                foo: 'bar',
                footer: `<foorter>
                    <h2>This is footer</h2>
                </foorter>`
            },

        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: "assets/img",
                to: "assets/img"
            }, ],
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: "assets/js",
                to: "js"
            }, ],
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: "assets/css",
                to: "assets/css"
            }, ],
        }),

    ],
    module: {
        rules: [


        ]
    },
});