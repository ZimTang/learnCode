const path = require('path')

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
  module: {
    rules: [
      {
        // 正则表达式
        test: /\.css$/,
        // 第一种写法 语法糖
        // loader: 'css-loader',

        // 第二种写法 完整写法
        use: [
          // {
          //   loader: 'css-loader',
          // },
          /**
           * style-loader必须在css-loader之后加载，
           * use这个数组使用loader的执行顺序是从后往前的
           */
          'style-loader',
          'css-loader',
          {
            loader:'postcss-loader',
            options:{
              postcssOptions:{
                // 指定插件
                plugins:[
                  require('autoprefixer')
                ]
              }
            }
          }
          // 'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        // 写到一起
        test:/\.(less|css)$/
      }
    ],
  },
}

