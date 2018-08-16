<template>
    <div class="common-header" :style="{background:bgColor}">
        <span>首页</span>
        <h1 >{{title}}</h1>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        computed:mapState(['bgColor','title']),

    }
</script>
<style lang="scss">
    .common-header{
        height: 1rem;
        background: rgb(33, 150, 243);
        position: fixed;
        top:0;
        width: 100%;
        line-height: 1rem;
        color: honeydew;

    }
    .common-header span{
        font-size: 16px;
    }
    .common-header h1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

    }
</style>