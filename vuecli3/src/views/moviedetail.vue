<template>
    <div>
        <hi>我是详细页面</hi>
        {{this.$route.params.movieid}}
        <!--//为什么写this-->
        <router-link to="/movie">返回</router-link> |
    </div>
</template>
<script>
    export default {

    }
</script>