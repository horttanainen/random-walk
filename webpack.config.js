const HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

module.exports = {
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
        new HtmlWebpackPlugin()
    ]
}
