<template>
     <div class="goods-list">
          <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
                     <img :src="item.img_url" >
                     <div class="container" >
                         <h3 class="goods-title">{{item.title}}</h3>
                         <div class="content">
                             <span>秒杀价:{{item.sell_price}}</span>
                             <span>原价:{{item.market_price}}</span>
                         </div>
                         <div class="goods-ex">
                             <span>热卖</span>
                             <span>剩余{{item.stock_quantity}}件</span>
                         </div>
                     </div>

                 </div>
         <button type="button" class="btn btn-info btn-block" @click="getMore">更多商品</button>
     </div>
</template>

<script>
    export default {
        name: "goodslist",
        data(){//存储组件内部数据
          return {
              pageIndex:1, //基础页数
              goodsList:[]//商品列表
          }
        },
        created(){
            this.getGoodsList()
        },
        methods:{
            getGoodsList(){//获取商品列表
                this.$http.get('api/getgoods?'+this.pageIndex).then(result=>{
                    if(result.body.status === 0){
                        this.goodsList=this.goodsList.concat(result.body.message)
                        console.log('ok')
                    }else{
                        console.log("失败")
                    }
                })
            },
            getMore(){
                this.pageIndex++
                this.getGoodsList()
            },
        //    使用编程式导航来实现路由的跳转
            goDetail(id){
                     //第一种方式  最简单的方式  传递字符串  触发点击事件，跳转到指定URL地址页面
                     // this.$router.push('/home/goodsinfo/'+id)
            //    第二种方式  传递一个对象
            //     this.$router.push({path:'/home/goodsinfo/'+id})
            //第三种方式 传递命名的路由  name可以定义在路由匹配规则中，表示定义的路由的名字，就会跳转到路由规则path中定义的地址中去
                   this.$router.push({name:'goodsinfo',params:{id:id}})
            }
        }
    }
</script>

<style scoped>
    .goods-item{
        /*height:280px;*/
        width:49%;
        border:1px solid #ccc;
        margin:4px 0;
        border-radius: 4px;
        padding:5px;
        min-height: 290px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        /*justify-content: space-around;*/
        padding:9px;
        justify-content: space-between;
    }

    .goods-item img{
        height:70%;
        width:100%;
    }
    .content{
        width:100%;
        margin-top:-11px;

    }
    .container{
        padding:3px;
        margin:0 0 2px 0;
        width:100%;
    }
    .content span:nth-child(1){
        color: red;
        font-size:13px;
        font-weight:bold;
    }
    .content span:nth-child(2){
        text-decoration: line-through;
        font-size:12px;
        margin-left:6px;

    }
     h3{
        font-size:12px;

    }
    .goods-ex{
        margin-top:-4px;
        font-size:12px;
        display: flex;
        justify-content: space-between;
    }
    .content,.goods-ex{
        background: #F5F5F5;
    }
</style>