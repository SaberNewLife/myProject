<template>
    <div class="cmt-container">
        <h3>用户评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容(最多50字)" maxlength="50" v-model="comments"></textarea>
        <button type="button" class="btn btn-primary btn-md btn-block" @click="postCommits">发表评论</button>
        <div class="cmt" v-for="(item,i) in contents" :key="item.add_time">
            <div class="cmt-title">
                第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;评论时间:{{item.add_time | dateFormat }}
            </div>
            <div class="cmt-content">
                {{item.content === 'undefined' ?'该用户很懒，没有添加评论哦':item.content}}
            </div>
        </div>
        <button type="button" class="btn btn-info btn-md btn-block" @click="getMore">更多...</button>

    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        name: "commit",
        data(){
          return {
              pageIndex:1,
              contents:[],
              comments:''
          }
        },
        props:['id'],
        created(){
            this.getCmt()
        },
        methods:{
            getCmt(){
                this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result =>{
                    if(result.body.status===0){
                        //注意：每次获取到新数据时，不要把老数据清空，需要拼接到新数据上
                        // this.content=result.body.message;
                        this.contents=this.contents.concat(result.body.message)
                    }else{
                        Toast('加载评论失败！')
                    }
                })
            },
            getMore(){
                this.pageIndex++
                this.getCmt()
            },
            postCommits(){
            //    判断评论是否为空
                if(this.comments.trim().length === 0){
                    return Toast("评论不能为空!")
                }
            //    发送评论数据到服务器
                this.$http.post('api/postcomment/'+this.$route.params.id,{
                    content:this.comments.trim()
                }).then(result=>{
                    if(result.body.status === 0){
                    //    成功了将这条评论添加到数组最前面
                    //    组装评论对象
                        var cmt={
                            add_time:Date.now(),
                            content:this.comments.trim(),
                            user_name:'匿名用户'
                        }
                        this.contents.unshift(cmt)
                        this.comments=''
                    }else{
                        Toast('评论发表失败！')
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .cmt-container h3{
        font-size:15px;
        font-weight:bold;
        margin-top:6px;
        line-height: 15px;
    }
    .cmt-container textarea{
        font-size:14px;
        margin:0;
    }
    .cmt .cmt-title{
        margin-bottom:6px;
        background:#c7c7cc;
        padding:5px;
        font-size:14px;
        line-height:20px;
    }
    .cmt{
        margin: 5px 0;
    }
    .cmt-content{
        width:100%;
        padding:3px 0 3px 10px;
        /*设置内容超过容器长度时，显示为 省略号*/
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

    }



</style>