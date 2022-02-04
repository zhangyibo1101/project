const {
    resolve
} = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    esModule: false,
                    name: "[hash:10].[ext]"
                },
                type: 'javascript/auto'
            },

            {
                test: /\.html$/,
                loader: 'html-loader'
            }

        ]
    },
    plugins: [
        new HtmlWebpackplugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}