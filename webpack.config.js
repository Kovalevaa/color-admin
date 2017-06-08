const path = require('path');
const webpack = require('webpack');

const config = {
    devtool: 'eval-source-map',
    entry: './app/assets/js/apps.min.js',
    devServer: {
        contentBase: path.join(__dirname, "app"),
        historyApiFallback: true,//不跳转
        hot: true, // 开启服务器的模块热替换（HMR）
        inline: true, //实时刷新,
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换（HMR）
        new webpack.NamedModulesPlugin(),
        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
    ]
};

module.exports = config;