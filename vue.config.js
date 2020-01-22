const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}


module.exports = {
    devServer: {
        port: 8070,
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            // 需要通过less-loader自动引入的资源，集合类型
            patterns: [path.resolve(__dirname, './src/assets/common.scss')]
        }
    },
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             plugins:   [
    //                 require('postcss-pxtorem')({ // 把px单位换算成rem单位
    //                     rootValue: 75,
    //                     propList: ['*'],
    //                     unitPrecision: 3,
    //                     LibraryUI: ['vant'], // 使用的第三方ui库
    //                     libraryRoot: 'node_modules', // 使用的第三方ui库，目录
    //                     selectorBlackList: []
    //                 })
    //             ]
    //         }
    //     }
    // },
    chainWebpack: config => {
        
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'));



        // config.module
        // .rule('scss')
        // .oneOf('vue')
        // .use('px2rem-loader')
        // .loader('px2rem-loader')
        // .before('postcss-loader') // this makes it work.
        // .options({ remUnit: 75, remPrecision: 8 })
        // .end()


       


        // config.module
        // .rule('scss')
        // .oneOf('vue')
        // .use('px2rem-loader')
        // .loader('px2rem-loader')
        // .before('postcss-loader') // this makes it work.
        // .options({ remUnit: 75, remPrecision: 8 })
        // .end()

        
    }
}