<template>
    <div>
      <ul>
          <li v-for="img in imglist">
              <img :src="img.src" alt="">
          </li>
      </ul>
    </div>
</template>
<script>
    import Axios from 'axios'
   export default {
       data(){
           return {
               imglist:[]
           }
       },
       created(){
           Axios.get('data/photodata.json')
               .then((res)=>{
                   this.imglist=res.data.photoData
               })
       }
   }
</script>
<style scoped>
li{
    width: 50%;
    float: left;
}
</style>