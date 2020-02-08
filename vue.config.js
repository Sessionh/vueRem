const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

const url = 'http://192.168.1.1';


module.exports = {
  publicPath: './',
  devServer: {
    port: 8070,
    proxy: {
      'api/': {
        target: url,
        changeOrigin: true,
      },
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/common.scss";`
      }
    }
  },
  chainWebpack: config => {

    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'));


  }
}