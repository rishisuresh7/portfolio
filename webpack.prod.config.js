const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules : [
            {
                test: /\.(jsx?)$/,
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
                loader: 'file-loader?name=img/[name].[ext]'
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          favicon: "./src/favicon.ico"
        }),
        new CopyWebPackPlugin({
            patterns: [
                {
                    from: './src/assets/img',
                    to: './assets/img',
                },
            ]
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].bundle.[hash].js',
        pathinfo: true,
        publicPath: '/portfolio/',
    },
}