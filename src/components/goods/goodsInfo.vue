<template>
    <div class="goods-container">
        <!--商品轮播图片区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <lunbo :lunbotuList="lunbotuList" :isFull="false"></lunbo>
                </div>
            </div>
        </div>
        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品的名称标题</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:<del>￥2399</del>&nbsp;&nbsp;秒杀价:<span class="now_price">￥2199</span>
                    </p>
                    <p>购买数量:<numberbox></numberbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>

        </div>
        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
    </div>
</template>

<script>
    import swiper from '../subcomponents/swiper.vue'
    import numberbox from  '../subcomponents/numberbox.vue'
    export default {
        name: "goodsInfo",
        data(){
            return{
                id:this.$route.params.id,
                lunbotuList:[]
            }
        },
        components:{
            lunbo:swiper,
            numberbox
        },
        created(){
            this.getLunbotu()
        },
        methods:{
            getLunbotu(){
                this.$http.get('api/getthumimages/'+this.id).then(result=>{
                    if(result.body.status === 0){
                        result.body.message.forEach(item=>{
                            item.img=item.src
                        })
                        this.lunbotuList=result.body.message
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .goods-container{
      overflow: hidden;
  }
    .now_price{
        color:red;
        font-size:14px;
        font-weight:bold;
    }
    .price+p{
        display: flex;
        justify-content: space-around;
        line-height: 16px;
    }
    .mui-card-content-inner p:nth-child(3){
        display: flex;
        justify-content: space-around;
    }
    .mint-button{
        padding:8px;
        height:35px;


    }
</style>