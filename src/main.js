import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.axios = axios
  }
}).$mount('#app')
