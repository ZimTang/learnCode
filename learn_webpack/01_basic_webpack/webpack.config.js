// 此文件是webpack的配置文件
const path = require('path')

module.exports = {
  // 入口文件 
  entry: './src/index.js',
  // 出口文件
  output: {
    // 绝对路径   dirname获取当前文件所在的路径
    path: path.resolve(__dirname, './build'),
    // 打包的文件名
    filename: 'bundle.js',
  },
}
