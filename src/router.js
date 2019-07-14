//抽离出来的路由模块
//1，导入路由模块
import VueRouter from 'vue-router'
//2，导入.vue组件
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
//3,创建路由对象
var router=new VueRouter({
    routes:[//路由匹配规则
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search}
    ],
    linkActiveClass:'mui-active'//替换路由激活时默认的类
})
//4,将路由对象暴露出去
export default router