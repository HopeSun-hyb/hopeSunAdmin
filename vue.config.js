
const path = require('path')
// Vue.config.js
module.exports = {

// 配置绝对路径 
configureWebpack: {        
    resolve: {           
        alias: {               
            '@': path.join(__dirname, 'src'),                
            'components': path.join(__dirname, 'src/components'),                
            'common': path.join(__dirname, 'src/common')           
        }        
    }   
},

// 配置公共样式 
css: {        
    loaderOptions: {            
        scss: {
            // @/ 是 src/ 的别名
            // 配置scss要加;   参考：https://cli.vuejs.org/zh/guide/css.html
            prependData: `@import "~@/common/style/base.scss";`
        }      
    }    
},


}