<template>
    <div>
    <ul id="big">
        <Movielist v-for="movie in movielist" :movie='movie' @click.native="moviedetail(movie)">
        </Movielist>
    </ul>
    <div class="loading" v-show="isshow">
        <img src="@/assets/img/loading.gif" alt="">
    </div>
        <div class="deep" v-show="isend">
            <span>已经到底了</span>
        </div>
    </div>
</template>
<script>
    import Axios from 'axios'
    import Movielist from '@/views/movie/movielist'
export default {
    data(){
          return{
              movielist:[],
              isshow:false,
              isend:false
          }
    },
    created(){
            this.detail();
                window.onscroll=()=>{
                var clientheight=document.documentElement.clientHeight;
                var scrollheight=document.documentElement.scrollHeight;
                var scrolltop=document.documentElement.scrollTop;
                if (clientheight+scrolltop==scrollheight) {
                    this.detail();
                    this.isshow=false;
                }
            }
    },
    methods:{
        detail(){
            Axios.get('/movie.json').then(
                (res)=>{
                    var arr=res.data.subjects.slice(this.movielist.length,this.movielist.length+5);
                    this.movielist=[...this.movielist,...arr];
                    this.isshow=true;
                    if (arr.length<5) {
                        this.isend=true;
                    }

                }
            )
        },
        moviedetail(movie){
            this.$router.push('/moviedetail/'+movie.id);

        }

    },
     components:{
        Movielist
    }
}
</script>
<style scoped>
    .loading{
        text-align: center;
    }
    .deep{
        text-align: center;
    }
</style>