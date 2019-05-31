
const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
    pages: {
        index: {
            entry: 'src/modules/index/main.js',
            filename: 'index/index.html'
        },
        admin: {
            entry: 'src/modules/admin/main.js',
            filename: 'admin/index.html'
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.DllReferencePlugin({
                context: process.cwd(),
                manifest: require('./public/vendor/manifest.json')
            }),
            new AddAssetHtmlPlugin({
                // dll文件位置
                filepath: path.resolve(__dirname, './public/vendor/*.js'),
                // dll 引用路径
                publicPath: './vendor',
                // dll最终输出的目录
                outputPath: './vendor'
            })
        ]
    }
}
