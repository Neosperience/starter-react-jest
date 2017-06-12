const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './',
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), use: [ 'babel-loader' ] },
            { test: /\.json$/, use: [ 'json-loader' ] },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
            {
                test: /\.less$/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader', use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [ 'url-loader?limit=10000&mimetype=application/font-woff' ]
            },
            { test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [ 'file-loader' ] },
            { test: /\.(png|jpg)$/, use: [ 'url-loader?limit=8192' ] }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new HtmlWebpackPlugin({
            template: 'views/index.html.ejs'
        }),
        new ExtractTextPlugin('[name].min.css')
    ],
    externals: {
        Config: JSON.stringify(require('./src/config/config.json'))
    }
};
