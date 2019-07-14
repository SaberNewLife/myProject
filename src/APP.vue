<template>
    <div class="app-container">
        <!--顶部Header区域-->
        <mt-header fixed title="草帽商城">
        </mt-header>
        <!--底部Tabbar区域-->
        <!--路由显示区域-->
        <transition>
            <router-view></router-view>
        </transition>


        <!--下面的按钮要改成router-link-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" href="#tabbar" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" href="#tabbar-with-chat" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" href="#tabbar-with-contact" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" href="#tabbar-with-map" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .app-container{
      padding-top:40px;
      overflow: hidden;
  }
    .v-enter
    {
        opacity: 0;
        transform: translateX(100%);
    }
    /*//向右移动消失*/
  .v-leave-to{
      opacity: 0;
      transform: translateX(-100%);
      /*加上position解决页面位移的问题*/
      position: absolute;
  }
    .v-enter-active,
    .v-leave-active{
        transition:all 0.4s ease-in-out;
    }
</style>