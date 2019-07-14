<template>
    <div>
        <h3>这是Account组件</h3>
        <!--下面放account的两个自组件-->
        <router-link to="/account/login1">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <!--下面放组件占的坑-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Account"
    }
</script>

<style scoped>

</style>