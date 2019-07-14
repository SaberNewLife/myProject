//项目的JS入口文件
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入自己的router.js路由模块
import router from './router.js'
//接下来就是挂载路由对象到vm实例
//导入vue-resource 用来获取数据
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 按需导入MintUI 组件
import { Button, Cell ,Header,Swipe, SwipeItem } from 'mint-ui'
// 注册组件
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// 导入mui的样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import app from './APP.vue'
// Vue.use(MintUI)
//导入index.css样式文件
import './css/index.css'

var vm=new Vue({
    el:'#app',
    render:c=>c(app),//渲染组件
    components:{

    },
    router:router
})