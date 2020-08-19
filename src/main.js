import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需导入 element
// import 'element-ui/lib/theme-chalk/index.css';
// import './assets/element/index'

console.log("process.env.NODE_ENV+++", process.env.NODE_ENV)

// 全部引用
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
