import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需导入 element
import 'element-ui/lib/theme-chalk/index.css';
import './assets/element/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
