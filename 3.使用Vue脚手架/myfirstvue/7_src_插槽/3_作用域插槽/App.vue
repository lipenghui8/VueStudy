<template>
    <div class="container">
        <Category title="游戏">
            <!-- 使用插槽中的数据，外面必须套上template -->
            <template scope="{games}">
                <ul>
                    <li v-for="(item,index) in games" :key="index">{{item}}</li>
                </ul>
            </template>
        </Category>
        <hr>
        <Category title="游戏">
            <!-- 使用插槽中的数据，外面必须套上template -->
            <template scope="lph">
                <ul>
                    <li v-for="(item,index) in lph.games" :key="index">{{item}}</li>
                </ul>
            </template>
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