<template>

        <li >
            <div class="left">
                <img :src="movie.images.medium" alt="">
            </div>
            <div class="right">
                <h3>{{movie.title}}</h3>
                主演：<span v-for="arr in movie.casts">{{arr.name}} </span>
                <br/>
                观众评：<span class="ave">{{movie.rating.average}}</span>
            </div>
        </li>

</template>
<script>
    export default {
        props:['movie'],

    }
</script>
<style scoped>
    li{
        display: flex;
        padding: 10px;
        border-bottom: 1px solid #cccccc;
    }
    li .left{
        flex-grow: 1;
        width: 0px;

    }
    li .right{
        flex-grow: 3;
        width: 0px;
        margin-left: 10px;
    }
    li .right .ave{
        font-size: 18px;
        color: #00b262;

    }
</style>