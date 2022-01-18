<!-- 组件采用大驼峰命名 -->
<template>
    <div>
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>
<!-- 使用nanoid可以生产全球唯一的字符串 -->
<script>    
    export default {
        data() {
            return {
                name:'河南大学',
                address:'开封'
            }
        },
        methods: {
            sayHello(data){
                console.log('我是School组件，收到了数据',data)
            }
        },
        mounted() {
            //将函数sayHello挂载到bus上，命名为hello
            this.$bus.$on('hello',this.sayHello)
        },
        //销毁之前用$off解绑当前组件所用到的事件
        beforeDestroy() {
            this.$bus.$off('hello')
        },
        }
</script>
<style scoped>
/* @import url(); 引入css类 */
    .school{
        color:red;
    }
</style>