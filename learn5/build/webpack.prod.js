
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    mode: 'production',

    entry: {
        'main': path.join(__dirname, '../src/main.js')
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html')
        })
    ]

}
