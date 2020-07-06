const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.(c|sc)ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          favicon: "./src/favicon.ico"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        transportMode: 'ws'
    }
}