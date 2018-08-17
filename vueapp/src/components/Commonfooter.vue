<template>
           <ul class="common-footer" :style="{background:bgColor}">
               <li v-for="menu in menulist " @click="changebg(menu)">
                  <router-link :to="menu.path">{{menu.name}}</router-link>
               </li>
           </ul>
</template>
<script>
import {mapState} from 'vuex';
export default {
    props:['menulist'],
    data(){
        return {

        }
    },
    methods:{
        changebg(menu){
              this.$store.dispatch('change',menu)
        }
    },
    computed:mapState(['bgColor']),
}
</script>
<style scoped>
    .common-footer{
        height: 1rem;
        /*background: rgb(33, 150, 243);*/
        position: fixed;
        line-height: 1rem;
        bottom: 0px;
        width: 100%;
        color: honeydew;
        display: flex;
    }
    .common-footer li{
        flex-grow: 1;
        text-align: center;
    }
    .common-footer li a {
        outline: none;
        color: #cccccc;

    }
    .common-footer li a.router-link-active{
            color: white;
        font-size: 20px;

    }

</style>