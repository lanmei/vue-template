/**
 * [common settings]
 */
var path = require('path')
module.exports = {
  // 单页or多页配置
  pages: {
    'main': {
      filename: 'index.html',
      template: 'index.html',
      src: './src/main.js',
      inject: 'body',
      chunks: ['main']
    }
    // 'login': {
    //   filename: 'login/login.html',
    //   template: './src/view/login/login.html',
    //   src: './src/view/login/login.js',
    //   inject: 'body',
    //   chunks: ['main']
    // }
  },
  // 基本配置
  settings: {
    dropConsole: true, // 去掉生产环境console
    enableEslint: true, // 是否开启eslint
    spriteConfig: { // 雪碧图配置 object || false
      src: {
        path: 'src/assets/icons/' // src 图片文件夹路径
      },
      target: {
        image: 'src/style/sprite/sprite.png', // target 图片路径
        css: 'src/style/sprite/sprite.css', // target css 路径
        scss: 'src/style/sprite/sprite.scss'
    },
      // retina:'@2x',
      padding: 10,  // icons padding
      cssImageRef: '~sprite.png', // 生成图片相对css内引用的路径
      unit: 'rem', //生成雪碧图的单位,可设置成rem
      scale: 100//雪碧图相对于原来图片大小的缩放比例，该值为分母
    }
},
  // 测试环境配置
  test: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: true,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    styleFilename: 'css/[name].css'
  },
  // 生产环境配置
  prod: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: false,
    filename: 'js/[name].[chunkhash:12].js',
    chunkFilename: 'js/[name].[chunkhash:12].js',
    styleFilename: 'css/[name].[contenthash:12].css'
  },
  // 本地开发配置
  dev: {
    port: 8080,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 代理配置
    proxyTable: {
      // '/api/**': {
      //   target: 'https://echo-dop7.djtest.cn',//代理地址
      //   changeOrigin: true
      // }
    },
    cssSourceMap: false
  },
  // deploy开发配置
  deploy: require('./deploy.js')
}
