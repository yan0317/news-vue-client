import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import ElementUI from 'element-ui';  //导入组件
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI); //全局引用
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
