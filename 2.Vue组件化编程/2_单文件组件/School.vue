<!-- 组件采用大驼峰命名 -->
<template>
    <div>
        <h2 class="school">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:'河南大学',
            address:'开封'
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
    .school{
        color:red;
    }
</style>