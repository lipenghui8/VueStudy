<template>
    <div class="student">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'//引入消息订阅系统
    export default {
        data() {
            return {
                name:'辉哥',
                sex:'男'
            }
        },
        methods: {
            sendStudentName(){
                pubsub.publish('hello',this.name)
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