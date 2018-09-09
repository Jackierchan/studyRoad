<template>
    <div>
        <aplayer autoplay :music="musicList[0]" :list="musicList" v-if="isshow" :showLrc="true">

        </aplayer>
    </div>
</template>
<script>
    import Aplayer from 'vue-aplayer';
    import Axios from 'axios'
    export default {
    data(){
          return {
              musicList:[],
              isshow:false
          }
    },
        created(){
        Axios.get('data/musicdata.json')
            .then((res)=>{
                var data=res.data.musicData;
                console.log(this.musicList);
                data.forEach((elem)=>{
                    var obj={};
                    obj.title=elem.title;
                    obj.src=elem.src;
                    obj.artist=elem.author;
                    obj.pic = elem.musicImgSrc;
                    obj.lrc = 'http://localhost:8080/'+elem.lrc;
                    this.musicList.push(obj);
                })
                this.isshow=true;
            })
        },
        components:{
           Aplayer
        }
    }
</script>
<style scoped>

</style>