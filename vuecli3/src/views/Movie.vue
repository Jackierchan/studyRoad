<template>
    <div>
        <ul>
            <li v-for="arr in movie" @click="detail(arr.id)">
                <!--<router-link :to="'/moviedetail/'+arr.id">-->//为什么加字符串拼接
               电影名称：{{arr.name}} ；价格：{{arr.price}};
                <!--</router-link>-->
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                movie: [
                    {
                        id:4,
                        name: '爱你伊娃年',
                        price: 99
                    },
                    {
                        id:3,
                        name: '爱你伊娃年2',
                        price: 199
                    },
                    {
                        id:2,
                        name: '爱你伊娃年3',
                        price: 299
                    }
                ]
            }
            },
        methods:{
            detail(a){
                this.$router.push('/moviedetail/'+a)//为什么这么写
            }
        }

        }
</script>