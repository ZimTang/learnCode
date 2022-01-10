const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // 设置模式
  mode: 'development',
  devtool: 'source-map',
  // 入口文件
  entry: './src/index.js',
  // 出口文件
  output: {
    // 绝对路径   dirname获取当前文件所在的路径
    // path: path.resolve(__dirname, './build'),
    // 打包的文件名
    // filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'html文档的标题',
      template: './public/index.html',
    }),
    new DefinePlugin({
      // 配置全局常量 BASE_URL
      BASE_URL: "'./'",
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       // 设置从哪一个源中开始复制
    //       from: 'public',
    //       // 复制到的位置，可以省略，会默认复制到打包的目录下
    //       to: './',
    //       // 设置一些额外的选项，其中可以编写需要忽略的文件
    //       globOptions: {
    //         ignore: ['**/index.html'],
    //       },
    //     },
    //   ],
    // }),
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
      // babel-loader
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   // 使用babel插件
          //   // plugins: [
          //   //   '@babel/plugin-transform-arrow-functions',
          //   //   '@babel/plugin-transform-block-scoping'
          //   // ]

          //   // 使用babel预设
          //   presets: ['@babel/preset-env'],
          // },
        },
      },
    ],
  },
}
