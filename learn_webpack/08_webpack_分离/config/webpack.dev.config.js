const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.comm.config')

// 合并通用配置文件
module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  // 配置devServer
  devServer: {
    // 如果有些资源没有从webpack加载到，就会从contentBase中加载
    // contentBase: "./abc",
    // contentBase: "./public",

    // 开启模块热替换(HMR)
    hot: true,
    // 是否打开浏览器
    open: true,
    // 主机
    host: 'localhost',
    // 端口
    port: 8080,
    // 是否开启gzip压缩
    // compress:true,

    // 配置代理
    proxy: {
      '/api': {
        target: 'http://localhost:10086',
        pathRewrite: { '^/api': '' },
      },

      // 没有https证书也能代理
      secure: false,
      changeOrigin: true,
    },
  },
})
