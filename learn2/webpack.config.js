
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/app.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    resolve: {
        alias: {
            utils: path.resolve(__dirname, 'src/others') // 这里使用 path.resolve 和 __dirname 来获取绝对路径
        }
    }
}