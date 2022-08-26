const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin') // 引入gzip压缩插件

/**
 * 路径合成方法
 * @param dir src下的文件路径
 * @returns {*}
 */
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = defineConfig({
    // 打包的输出目录，名字可以对应项目自定义
    outputDir: 'person-web',
    transpileDependencies: ['element-ui'],
    // 配置css
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: process.env.NODE_ENV === 'production',
        sourceMap: true,
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                resolve('src/style/mixins/mixins.scss'),
                resolve('src/style/mixins.scss'),
            ],
        },
    },

    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new CompressionPlugin({
                    // gzip压缩配置
                    test: /\.js$|\.html$|\.css/, // 匹配文件名
                    threshold: 10240, // 对超过10kb的数据进行压缩
                    deleteOriginalAssets: false, // 是否删除原文件
                })
            )
        }
    },

    // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    parallel: require('os').cpus().length > 1,
    devServer: {
        host: '0.0.0.0',
        port: 8088, // 端口号
        https: false, // https:{type:Boolean}
        open: false, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌

        // 配置代理
        proxy: {
            '/api1': {
                target: 'http://locallhost:5000/api/',
                ws: true, // 代理的WebSockets
                changeOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/api1': '',
                },
            },
        },
    },
})
