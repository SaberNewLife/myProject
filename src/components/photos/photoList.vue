<template>
    <div>
        <!--顶部区域-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll" >
                    <a :class="['mui-control-item',item.id === 0?'mui-active':'']"
                       v-for="item in cates" :key="item.id" @clcik="getPhotListByCateId(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>
        <!--图片区域 懒加载  mint-ui-->
        <ul>
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="img_explain">
                    <div class="img_title">
                        <h3>{{item.seo_title}}</h3></div>
                    <div class="img_content" v-html="item.seo_description"></div>
                </div>
            </router-link>
        </ul>

    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    //    报错，用了严格模式下不允许的方法
    //    webpack默认打包的bundle.js是启用严格模式了  而callee这些不是严格模式下的
    //    去掉默认webpack打包是严格模式
    });
    export default {
        name: "photoList",
        data(){
            return {
                cates:[],
                list:[]//图片列表
            }
        },
        created(){
            this.getCategory()
            this.getPhotListByCateId(0)
        },
        methods:{
            getCategory(){
                this.$http.get('api/getimgcategory').then(result=>{
                    if(result.body.status === 0){
                        this.cates=result.body.message
                        this.cates.unshift({id:0,title:'全部'})
                    }

                })
            },
            getPhotListByCateId(cateid){
                this.$http.get('api/getimages/'+cateid).then(result=>{
                    if(result.body.status===0){
                        this.list=result.body.message
                    }
                })
            }
        }
    }
</script>

<style scoped>
    *{
        touch-action: pan-y;
    }
    ul{
        margin-left:-41px;
        margin-top:13px;
    }
    li{
        list-style: none;
        text-align: center;
        margin-bottom:10px;
        box-shadow: 0 0  3px #8f8f94;
        width:100%;
        position: relative;
    }
    ul li img{
        vertical-align: middle;
        width:100%;
    }
    ul li img[lazy=loading] {
        width: 300px;
        height:40px;
        margin:auto;
    }
    .img_explain{
        position:absolute;
        bottom:0;
        color: white;
        text-align: left;
        background:rgba(199,199,204,0.5);
        z-index: 1;
        padding:5px;
        max-height: 300px;

    }
    .img_explain .img_title h3{
        font-size:15px;
        margin-bottom: 15px;

    }
    .img_explain .img_content{
        font-size: 12px;
    }

</style>