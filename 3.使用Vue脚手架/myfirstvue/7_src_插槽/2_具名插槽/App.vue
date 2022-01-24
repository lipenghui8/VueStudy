<template>
    <div class="container">
        <!-- 具名插槽，在组件标签中插入内容，并指定slot -->
        <Category title="美食">
            <img slot="center" style="width:200px" src="https://news.liph.top/resources/upload/image/20211226/1640507841027038512.jpg">
            <a slot="footer" href="https://www.liph.top">dainji</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
            <!-- 可在插槽中追加 -->
            <div class="footer" slot="footer">
                <a  href="">单机游戏</a>
                <a href="">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" controls autoplay="autoplay" loop width="200px" src="https://www.liph.top/skin/movie.mp4"></video>
            <template slot="footer">
                <div class="footer">
                    <a href="">经典</a>
                    <a href="">热门</a>
                    <a href="">推荐</a>
                </div>
            </template>
            <h2>欢迎前来观影</h2>
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
    .footer{
        display: flex;
        justify-content: space-between;
    }
    h2{
        text-align: center;
    }
</style>