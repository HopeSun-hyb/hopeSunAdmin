
const path = require('path')
// Vue.config.js
module.exports = {

    // 配置绝对路径 
    configureWebpack: {        
        resolve: {           
            alias: {               
                '@': path.join(__dirname, 'src'),                
                'components': path.join(__dirname, 'src/components'),                
                'common': path.join(__dirname, 'src/common'), 
                'utils': path.join(__dirname, 'src/utils'),          
            }        
        }   
    },

    // 配置公共样式 
    css: {        
        loaderOptions: {            
            scss: {
                // @/ 是 src/ 的别名
                // 配置scss要加;   参考：https://cli.vuejs.org/zh/guide/css.html
                prependData: `@import "~@/common/style/base.scss";
                              @import "~@/common/style/var.scss";`
            }      
        }    
    },
    // 跨域
    devServer: {
        open: false, // 编译完成是否打开网页
        host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        port: 8080, // 访问端口
        https: false, // 编译失败时刷新页面
        hot: true, // 开启热加载
        hotOnly: false,
        proxy: {
          "/devApi": {
              target: "http://www.web-jshtml.cn/vue_admin_api", //API服务器的地址
              changeOrigin: true,
              pathRewrite: {
                  "^/devApi": ''
              }
          }
        }
    },

// http://www.web-jshtml.cn/productapi/token
// http://www.web-jshtml.cn/productapi
}