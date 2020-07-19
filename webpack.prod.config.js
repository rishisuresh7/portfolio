const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
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
                    globOptions: {
                        ignore: [
                            '**/.DS_Store',
                        ]
                    }
                },
                {
                    from: './src/manifest.json',
                    to: './manifest.json'
                },
                {
                    from: './src/assets/icons',
                    to: './assets/icons',
                    globOptions: {
                        ignore: [
                            '**/.DS_Store',
                        ]
                    }
                },
            ]
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            exclude: [/.DS_Store/],
            runtimeCaching: [{
                urlPattern: new RegExp('https://rishisuresh7.github.io/portfolio'),
                handler: 'StaleWhileRevalidate'
              }]
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].bundle.[hash].js',
        pathinfo: true,
        publicPath: '/portfolio/',
    },
}