<template>
    <div >
        <div class="img-detail-container">
            <!--标题-->
            <h3 class="detail-title">{{imgInfo.title}}</h3>
            <p class="sub-title">
                <span>发表时间:{{imgInfo.add_time | dateFormat}}</span>
                <span>点击数:{{imgInfo.click}}次</span>
            </p>
            <hr>
            <!--、缩略图区域-->
            <div class="thumbs">
                <vue-preview :slides="imgList" class="imgPrev"></vue-preview>
            </div>
            <!--内容区域-->
            <div class="content" v-html="imgInfo.content"></div>
            <!--评论子组件-->

        </div>
        <commit :id="this.id"></commit>
    </div>
</template>

<script>
    //导入评论子组件
    import commit from '../subcomponents/commit.vue'
    export default {
        name: "photoInfo",
        data(){
            return {
                id:this.$route.params.id,
                imgInfo:{},
                imgList:[]
            }
        },
        created(){
            this.getImgInfo()
            this.getSmallImg()
        },
        methods:{
            getImgInfo(){
                this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                    if(result.body.status === 0){
                        this.imgInfo=result.body.message[0]

                    }
                })
            },
            getSmallImg(){
                this.$http.get('api/getthumimages/'+this.id).then(result=>{

                    //    遍历每张图片，为其添加上宽高属性
                        result.body.message.forEach(item =>{
                            item.w=200
                            item.h=200
                            // item.src = item.src;  //大图
                            item.msrc = item.src//小图
                        })
                        this.imgList=result.body.message
                        console.log(result.body.message)

                })
            }

        },
        components:{
            commit:commit
        }
    }
</script>

<style scoped>
    .img-detail-container{
        padding:3px;
        margin-bottom:8px;
    }
    .img-detail-container h3{
        font-size:15px;
        line-height:15px;
        margin:7px auto 0;
        text-align: center;
        color: #e62b2b;
        font-weight:bold;
    }
    .sub-title{
        display: flex;
        justify-content:space-between;
        padding:4px;

    }
    .content{
        font-weight:400;
        font-size:12px;

    }

</style>