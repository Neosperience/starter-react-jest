const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), use: [ 'babel-loader' ] },
            { test: /\.json$/, use: [ 'json-loader' ] },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.less$/, use: [ 'style-loader', 'css-loader', 'less-loader' ] },
            { test: /\.(png|jpg)$/, use: [ 'url-loader?limit=8192' ] }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: 'views/index.html.ejs' })
    ],
    externals: {
        Config: JSON.stringify(require('./src/config/config.json'))
    },
    devServer: {
        port: 3000,
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map'
};
