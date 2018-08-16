<template>
    <div>
aaaaaaa
    </div>
</template>
<script>
    import Axios from 'axios'
export default {
    data(){
          return{
              movielist:[]
          }
    },
    created(){
         Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters').then(
             (res)=>{
                 this.movielist=res.data.subjects;
                 console.log(this.movielist);
             }
         )
    }
}
</script>
<style>

</style>