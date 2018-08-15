<template>
    <div>
        <ul>
            <li v-for="arr in movie">
               电影名称：{{arr.name}}
                    <br/>
                    价格{{arr.price}}

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
                        name: '爱你伊娃年',
                        price: 99
                    },
                    {
                        name: '爱你伊娃年2',
                        price: 199
                    },
                    {
                        name: '爱你伊娃年3',
                        price: 299
                    }
                ]
            }
            }
        }
</script>