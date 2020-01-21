module.exports = {
    devServer: {
        port: 8070,
    },
    chainWebpack: config => {
        config.module
        .rule('scss')
        .oneOf('vue')
        .use('px2rem-loader')
        .loader('px2rem-loader')
        .before('postcss-loader') // this makes it work.
        .options({ remUnit: 75, remPrecision: 8 })
        .end()
      }
}