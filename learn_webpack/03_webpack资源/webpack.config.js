const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 出口文件
  output: {
    // 绝对路径   dirname获取当前文件所在的路径
    // path: path.resolve(__dirname, './build'),
    // 打包的文件名
    // filename: 'bundle.js',
  },
  plugins:[
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // file-loader的使用
      // {
      //   test: /\.jpeg|png|jpg|svg$/i,
      //   use: {
      //     loader: 'file-loader',
      //     outputPath:'img'
      //     options: {
      //       name: 'img/[name].[hash:6].[ext]',
      //     },
      //   },
      // },
      // {
      //   test: /\.jpeg|png|jpg|svg$/i,
      //   use: {
      //     loader: 'url-loader',
      //     // options: {
      //     //   name: '[name].[hash:6][ext]',
      //     // },
      //   },
      // },

      {
        test: /\.jpeg|png|jpg|svg$/i,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      // 字体
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]',
        },
      },
    ],
  },
}
