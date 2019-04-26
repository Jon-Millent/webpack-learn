const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[hash:8].js' // 指定分离出来的代码文件的名称
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
        }),
        new ExtractTextPlugin('[name].css'),
        new CleanWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 5000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            }
        ]
    },

}