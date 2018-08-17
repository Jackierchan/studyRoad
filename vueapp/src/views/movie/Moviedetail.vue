<template>
    <div v-if="isshow">
   <h3>电影名称：{{movielist.title}}</h3>
  <img :src="movielist.images.small" alt="">
   <p> 简介：{{movielist.summary}}</p>
    </div>
</template>
<script>
    import Axios from 'axios'
export default {
    data(){
        return {
             movielist:{},
             isshow:false
        }
    },
    created(){
        console.log(111)
        var movieid=this.$route.params.id;
        Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+movieid)
            .then((res)=>{
                this.movielist=res.data;
                this.isshow=true;
            })
    }
}
</script>
<style>

</style>