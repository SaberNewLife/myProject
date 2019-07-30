//抽离出来的路由模块
//1，导入路由模块
import VueRouter from 'vue-router'
//2，导入.vue组件
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import NewList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photoInfo.vue'
import  goodslist from './components/goods/goodslist.vue'
import goodsInfo from './components/goods/goodsInfo.vue'
//3,创建路由对象
var router=new VueRouter({
    routes:[//路由匹配规则
        {path:'/',redirect:'/home'},//重定向，如果是根url，就进入到首页
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search},
        {path:'/home/news',component:NewList},
        {path:'/home/newsinfo/:id',component:NewsInfo},
        {path:'/home/photolist',component:photoList},
        {path:'/home/photoinfo/:id',component:photoInfo},
        {path:'/home/goodslist',component:goodslist},
        {path:'/home/goodsinfo/:id',component:goodsInfo,name:'goodsinfo'}
    ],
    linkActiveClass:'mui-active'//替换路由激活时默认的类
})
//3.3 这是新增的路由守卫知识   分为全局守卫、单个路由守卫、组件内路由守卫
//3.3.1 定义一个全局守卫   首先是进入路由之前进行判断
router.beforeEach((to,from,next)=>{


//    无论怎样 ，最后一定要执行next()函数
    next()
})
//3.3.2 全局解析守卫 在beforeRouteEnter调用之后调用
router.beforeResolve((to,from,next)=>{

  console.log("进入路由之前？？？")

    next()
})
//3.3.3 全局后置守卫 进入路由之后 后置守卫因为后面不需要进行操作了，就不用传入next函数了
router.afterEach((to,from)=>{
   console.log("afterEach后置钩子函数")
})
//4,将路由对象暴露出去
export default router