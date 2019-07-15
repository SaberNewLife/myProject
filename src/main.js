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
//导入缩略图预览插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
//使用axios来获取数据，发送ajax
// import axios from 'axios'
// import VueAxios from 'vue-axios'
//
// Vue.use(VueAxios, axios)
//配置全局root URL地址
Vue.http.options.root='http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON=true
// 按需导入MintUI 组件
// import { Button,Header,Swipe, SwipeItem ,Lazyload} from 'mint-ui'
// // 注册组件
// Vue.component(Button.name, Button)
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// //懒加载模块
// Vue.use(Lazyload);
//=全导入
import MintUI from 'mint-ui'
Vue.use(MintUI)
// 导入mui的样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import app from './APP.vue'
// Vue.use(MintUI)
//导入index.css样式文件
import './css/index.css'
//导入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//导入node的moment.js，用来格式化时间  定义过滤器
import moment from 'moment'

Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:MM:SS'){
    return moment(dataStr).format(pattern)//格式化时间的方法  node中的方法
})

var vm=new Vue({
    el:'#app',
    render:c=>c(app),//渲染组件
    components:{

    },
    router:router
})