const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const dllPath = '../public/vendor'

module.exports= {
    mode: "production",
    entry: {
        vendors:['vue'] //需要公用的第三方库
    },
    output: {
        path: path.resolve(__dirname, dllPath), //文件输出的路径
        filename: "[name].dll.[hash].js",
        library: "[name]" //生成一个变量名供dllreference调用要与dllPlugin.name保持一致
    },
    plugins: [
        new CleanWebpackPlugin({
            root: path.join(__dirname, dllPath),
        }),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, dllPath, 'manifest.json'),//生成manifest.json文件的路径
            name:"[name]",
            context: process.cwd()
        })
    ]
}
