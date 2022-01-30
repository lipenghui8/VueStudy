<template>
    <div class="student">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:'辉哥',
            sex:'男'
        }
    },
    methods: {
        sendStudentName(){
            // 触发bus上的事件hello
            // this.$bus.$emit('hello',this.name)
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        
    },
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.student{
    background-color: aqua;
}
</style>