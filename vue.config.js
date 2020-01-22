const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}


module.exports = {
  devServer: {
    port: 8070,
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