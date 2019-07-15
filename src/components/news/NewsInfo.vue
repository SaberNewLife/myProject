<template>
    <div class="news-container" >
        <h3 class="title">{{newContent.title}}</h3>
        <div class="subtitle">
            <span>发布时间:{{newContent.add_time | dateFormat}}</span>
            <span>点击:{{newContent.click}}次</span>
        </div>
        <hr>
        <div class="news-content" v-html="newContent.content">
        </div>
        <commit :id="this.id"></commit>
    </div>
</template>

<script>

    import {Toast} from 'mint-ui'
    //导入子组件

    import commit from '../subcomponents/commit.vue'
    export default {
        name: "NewsInfo",
        data(){
            return {
                //获取url中的参数 id值   以/接的就用params，用?接的就用
                id:this.$route.params.id,
                newContent:{}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods:{
            getNewsInfo(){
                this.$http.get('api/getnew/'+this.id).then(response => {
                    if(response.body.status===0){
                        this.newContent=response.body.message[0]
                    }else{
                        Toast("获取详情失败！")
                    }
                })
            }
        },
        components:{
            commit:commit
        }
    }
</script>


<style >
  .news-container{
      padding:0 5px;
      margin-bottom:30px;
  }
    .title{
        margin:5px auto;
        text-align: center;
        color:red;
        font-size:16px;
        line-height:16px;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        color:lightskyblue;
        margin-top:6px;
        font-size: 13px;
    }
  .news-container .news-content p{

  }
  .news-container .news-content  img{
        width:100%;
        height:100%;
  }
</style>