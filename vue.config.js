const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },
    devServer: {
        proxy: { //外部接口配置代理，解决跨域
            '/api': {
                'target': 'https://hs.blizzard.cn/', //接口地址
                'secure': true, // false为http访问，true为https访问
                'changeOrigin': true, // 跨域访问设置，true代表跨域
                'pathRewrite': { // 路径改写规则
                    '^/api': ''
                }
            }
        }
    }
};
