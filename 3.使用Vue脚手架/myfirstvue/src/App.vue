<template>
    <div class="container">
        <!-- 默认插槽，在组件标签中插入内容 -->
        <Category title="美食">
            <img style="width:200px" src="https://news.liph.top/resources/upload/image/20211226/1640507841027038512.jpg">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls autoplay="autoplay" loop width="200px" src="https://www.liph.top/skin/movie.mp4"></video>
        </Category>
    </div>
</template>

<script>
    
    import Category from './components/Category.vue'
    //引入组件
    export default {
        name:'App',
        components:{
            Category
        },
        data() {
            return {
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
                films:['《教父》','《战狼》','《创业》','《三国演义》']
            }
        },
    }
</script>
<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>