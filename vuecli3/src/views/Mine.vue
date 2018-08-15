<template>
    <div>
        <h1>欢迎来到饿了么</h1>
        <HelloWorld msg="Welcome to 我的个人涉设置"/>
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
import HelloWorld from '@/components/HelloWorld.vue';
export default {
    components: {
        HelloWorld,
    },
    // beforeRouteEnter (to, from, next) {
    //     // 在渲染该组件的对应路由被 confirm 前调用
    //     // 不！能！获取组件实例 `this`
    //     // 因为当守卫执行前，组件实例还没被创建
    //     console.log(1111);
    //     next();
    // },
    // beforeRouteLeave (to, from, next) {
    //     // 在渲染该组件的对应路由被 confirm 前调用
    //     // 不！能！获取组件实例 `this`
    //     // 因为当守卫执行前，组件实例还没被创建
    //     console.log(2222);
    //     next();
    // },
    beforeRouteUpdate (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.log(3333);
        next();
    },
}
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