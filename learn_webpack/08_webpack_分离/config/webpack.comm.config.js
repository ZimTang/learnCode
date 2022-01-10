const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  // 设置为 什么东西 而打包 node / web （此设置是为HMR设置的）
  target: 'web',
  // 入口文件
  entry: './src/index.js',
  // watch: true,
  // 出口文件
  output: {
    // 绝对路径   dirname获取当前文件所在的路径
    // path: path.resolve(__dirname, './build'),
    // 打包的文件名
    // filename: 'bundle.js',
  },
  resolve: {
    /** 
     * 解析文件后缀的顺序是:
     * 如果没有后缀 先去 该名称的文件夹下查找是否存在index.js文件
     * 再去找 符合extension中后缀名的文件
    */
    extensions: ['.js', '.mjs', '.json', '.vue', '.ts'],
    // 路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      js: path.resolve(__dirname, './src/js'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'html文档的标题',
      template: './public/index.html',
    }),
    new DefinePlugin({
      // 配置全局常量 BASE_URL
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new VueLoaderPlugin(),
    
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
      // vue-loader
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
}
