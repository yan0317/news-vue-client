import Vue from 'vue'
//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// 路由：由路径path    哪个component到我这里展示
const routes = [
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
