<template>
    <div>
        <!--轮播图区域  默认没有高度，需要设置高度-->
         <lunbo :lunbotuList="lunbotuList" :isFull="true"></lunbo>
         <!--中间六宫格区域-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    //导入轮播图组件
    import swiper from '../subcomponents/swiper.vue'
    export default {
        name: "home",
        data(){//保存从服务器获取的数据
          return {
              lunbotuList:[]

          }//存储从服务器获取到的轮播图数据
        },
        components:{
            lunbo:swiper
        },
        created(){
        //    一开始就调用获取数据
            this.getLunbotu()
        },
        methods:{
            getLunbotu(){//获取轮播图数据的方法
                 this.$http.get('api/getlunbo').then(result=>{
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
  .mui-grid-view.mui-grid-9{
      margin-top:40px;
      border-top:none;
  }
</style>