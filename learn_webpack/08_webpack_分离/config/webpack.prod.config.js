const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.comm.config')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 合并通用配置文件
module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          // 设置从哪一个源中开始复制
          from: 'public',
          // 复制到的位置，可以省略，会默认复制到打包的目录下
          to: './',
          // 设置一些额外的选项，其中可以编写需要忽略的文件
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
})
