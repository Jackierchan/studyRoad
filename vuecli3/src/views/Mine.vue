<template>
    <div>
        <h1>欢迎来到饿了么</h1>
        <router-link :to="{name:'test2',params:{xx:'chen',price:15}}">
            <span>张亮麻辣烫</span>
        </router-link> |
        <router-link to="/Mine/test3/bobo/19">
            <span>韩之味拌饭</span>
        </router-link> |
        <router-view/>
        <select name="" id="">
            <option value="">新建</option>
            <option value="">打开</option>
            <option value="">另存为</option>
            <option value="">复制</option>
        </select>
    </div>
</template>
<script>

</script>
<style>
    h1{
           color: #00b262;
       }
    span{
        color: red;
        font-size: 30px;
        text-decoration: none;
    }

</style>