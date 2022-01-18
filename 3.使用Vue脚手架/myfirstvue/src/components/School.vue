<!-- 组件采用大驼峰命名 -->
<template>
    <div>
        <h2 class="school">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <h3>年龄：{{age}}</h3>
        <h3>校训：{{idea}}</h3>
        <button>点击年龄加一</button><br>
        <button @click="sendStudentName">调用组件示例自身的方法</button><br>
        <button @click="unbind">解绑自定义事件</button>
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
        },
        methods: {
            sendStudentName(){
                //触发Student组件实例身上的事件
                this.$emit('getStudentName',this.name)
            },
            unbind(){
                //解绑自定义事件getStudentName
                this.$off('getStudentName')
                //this.$off(['a','b','c'])//解绑多个自定义事件
                //this.$off()解绑所有自定义事件
            },
            death(){
                this.$destroy()//销毁当前组件的示例,销毁后所有组件实例的所有自定义事件全部不奏效
            }
        },
    }
</script>
<style scoped>
/* @import url(); 引入css类 */
    .school{
        color:red;
    }
</style>