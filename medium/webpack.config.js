const path = require('path')
const basePath = __dirname
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    devtool: 'eval-source-map',
    entry: {
        app: ['./index.tsx'],
    },
    stats: 'errors-only',
    output: {
        filename: '[name].[chunkhash].js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 5000,
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
    ],
}
