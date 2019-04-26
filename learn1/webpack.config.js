
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        main: './src/app.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
}