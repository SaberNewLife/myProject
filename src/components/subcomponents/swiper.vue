<template>
    <!--轮播图组件-->
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="" :class="{full:isFull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>


</template>

<script>
    export default {
        name: "swiper",
        props:['lunbotuList','isFull']
    }
</script>

<style scoped>
    .mint-swipe{
        height:200px;
        text-align: center;
    }
    .mint-swipe-item img{
        height:100%;
    }
    .full{
        width:100%;
    }
</style>