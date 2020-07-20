/* See：https://cli.vuejs.org/config/ */
// const CompressionPlugin = require('compression-webpack-plugin') // 压缩插件 npm install compression-webpack-plugin --save-dev
module.exports = {
  publicPath: './',
  // devServer: {
  //   host: 'localhost',
  //   port: 9191
  // },
  chainWebpack: config => {
    // 添加一个新的加载器
    config.module
      .rule('swf')
      .test(/\.swf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]', // [path][name].[hash:7].[ext]文件打包后的路径和名字，path是原路径，name是原文件名，hash:7是七位的哈希值，ext是文件后缀，可以随意搭配
        outputPath: 'video/'
      })
      .end()
    // gzip 压缩
    // if (process.env.NODE_ENV === 'production') {
    //   config
    //     .plugin('compressionPlugin')
    //     .use(CompressionPlugin)
    //     .tap(() => [
    //       {
    //         test: /\.js$|\.html$|\.css/, // 匹配文件名
    //         threshold: 10240, // 超过10k进行压缩
    //         deleteOriginalAssets: false // 是否删除源文件
    //       }
    //     ])
    // }
  },
  // webpack配置将合并到最终配置中
  configureWebpack: {
    // 警告 webpack 的性能提示
    performance: {
      hints: 'warning',
      // 入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  }
  // css: {
  //   extract: true,
  //   sourceMap: false
  // }
}
