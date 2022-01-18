<!-- 组件采用大驼峰命名 -->
<template>
    <div>
        <h2 class="school">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <h3>年龄：{{age}}</h3>
        <h3>校训：{{idea}}</h3>
        <button>点击年龄加一</button>
    </div>
</template>
<!-- 使用nanoid可以生产全球唯一的字符串 -->
<script>    
    export default {
        data() {
            return {
                name:'河南大学',
                address:'开封',
                age:20,
                idea:'明德新民'
            }
        }
    }
</script>
<style scoped>
/* @import url(); 引入css类 */
    .school{
        color:red;
    }
</style>