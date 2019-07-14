//项目的JS入口文件
import Vue from 'vue'


// 按需导入MintUI 组件
import { Button, Cell ,Header} from 'mint-ui'
// 注册组件
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
// import MintUI from 'mint-ui'
import './lib/mui/css/mui.css'
import app from './APP.vue'
// Vue.use(MintUI)


var vm=new Vue({
    el:'#app',
    render:c=>c(app),//渲染组件
    components:{

    }
})