//项目的JS入口文件
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入自己的router.js路由模块
import router from './router.js'
//接下来挂载路由对象到vm实例
// 按需导入MintUI 组件
import { Button, Cell ,Header} from 'mint-ui'
// 注册组件
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
// 导入mui的样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import app from './APP.vue'
// Vue.use(MintUI)


var vm=new Vue({
    el:'#app',
    render:c=>c(app),//渲染组件
    components:{

    },
    router:router
})