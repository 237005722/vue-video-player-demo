/* See：https://cli.vuejs.org/config/ */
module.exports = {
  publicPath: './',
  // devServer: {
  //   host: 'localhost',
  //   port: 9191
  // },
  // Adding a New Loader
  chainWebpack: config => {
    // file-loader swf
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
  }
}
