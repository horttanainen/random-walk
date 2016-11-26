const HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    webpack = require('webpack');

module.exports = {
    cache: true,
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, "build"),
        filename: 'build.min.js'
    },
    resolve: {
        root: [
            path.resolve('./src')
        ]
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
}
