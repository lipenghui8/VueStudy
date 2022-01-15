<!-- 组件采用大驼峰命名 -->
<template>
    <div>
        <h2 class="school">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <h3>年龄：{{age}}</h3>
        <h3>校训：{{idea}}</h3>
        <button @click="addAge">点击年龄加一</button>
    </div>
</template>

<script>
    //引入一个混入,复用配置,所有的配置除生命周期函数全要之外，其他的就近原则
    import {maxin} from '../maxin.js'
    
    export default {
        data() {
            return {
                name:'河南大学',
                address:'开封',
                age:20,
                idea:'明德新民'
            }
        },
        //配置混入
        mixins:[maxin]
    }
</script>
<style scoped>
/* @import url(); 引入css类 */
    .school{
        color:red;
    }
</style>