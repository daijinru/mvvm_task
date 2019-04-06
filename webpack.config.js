const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// 多页面入口配置
const {ENTRIES, TEMPLATES} = require('./entries.config.js')
let WebpackPlugins = []

// 抽离样式文件
const extractTextPluginConfig = new ExtractTextPlugin({
  filename: '[name].css?[chunkhash]',
  allChunks: true
})
WebpackPlugins.push(extractTextPluginConfig)

// 生成 htmlWebpackPlugin 配置集合
WebpackPlugins = WebpackPlugins.concat(TEMPLATES.map(item => {
  return new HtmlWebpackPlugin(item)
}))

// 每一次打包前清理 dist/
const cleanWebpackPlugin = new CleanWebpackPlugin()
WebpackPlugins.push(cleanWebpackPlugin)

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ENTRIES,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js?[chunkhash]',
        chunkFilename: '[id].js?[chunkhash]',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: WebpackPlugins,
    devServer: {
        host: '127.0.0.1',
        port: 8080
    }
}