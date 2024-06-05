const path = require('path')
module.exports = {
  pages:{
    index:{
      entry:'src/main.js',
    }
  },
  lintOnSave: false, // 关闭语法检查

  devServer:{
    port:8087,
    proxy: 'http://localhost:8888',
  },

  publicPath: './'

  // build: {
  //   env: require('./prod.env'), // 使用 config/prod.env.js 中定义的编译环境
  //   index: path.resolve(__dirname, '../dist/index.html'), // 编译输入的 index.html 文件
  //   assetsRoot: path.resolve(__dirname, '../dist'), // 编译输出的静态资源路径
  //   assetsSubDirectory: 'static', // 编译时输出的二级目录（dist->static）
  //   assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
  //   productionSourceMap: true, // 是否开启 cssSourceMap
  //   productionGzip: false, // 是否开启 gzip
  //   productionGzipExtensions: ['js', 'css'] // 需要使用 gzip 压缩的文件扩展名
  // }

}

