<template>
    <div class="app-container">
        <!--顶部Header区域-->
        <mt-header fixed title="草帽商城">
        </mt-header>
        <h1>这是一个APP组件</h1>
        <!--底部Tabbar区域-->
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
  }
</style>