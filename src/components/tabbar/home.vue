<template>
    <div>
        <!--轮播图区域  默认没有高度，需要设置高度-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
         <!--中间六宫格区域-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">主页</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">购物</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">账户</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">设置</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">详细信息</div></a></li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        name: "home",
        data(){//保存从服务器获取的数据
          return {
              lunbotuList:[]
          }//存储从服务器获取到的轮播图数据
        },
        created(){
        //    一开始就调用获取数据
            this.getLunbotu()
        },
        methods:{
            getLunbotu(){//获取轮播图数据的方法
                 this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result=>{
                     if(result.body.status === 0){
                     //    请求成功
                         this.lunbotuList=result.body.message

                     }else{
                     //    请求失败
                        Toast({
                            message:'请求失败！',
                            duration:3200

                        })
                     }
                 })
            }
        }

    }
</script>

<style scoped>

  .mint-swipe{
      height:200px;
  }
  .mint-swipe .mint-swipe-item:nth-child(1){
      background: #8a6de9;
  }
  .mint-swipe .mint-swipe-item:nth-child(2){
      background: #72c2e9;
  }
  .mint-swipe .mint-swipe-item:nth-child(3){
      background: #e9972d;
  }
  .mint-swipe-item img{
        width:100%;
        height:100%;
    }
  .mui-grid-view.mui-grid-9{
      background:#fff;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
      border:none;
  }
    .mui-table-view-cell img{
        width:70px;
        height:70px;
    }
</style>