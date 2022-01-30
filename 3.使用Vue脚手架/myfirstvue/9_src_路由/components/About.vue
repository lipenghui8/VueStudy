<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {

        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {

        },

        // 路由组件所独有的两个新的生命周期钩子，用于捕获路由组件的激活状态
        // 组件被激活
        activated(){

        },
        // 组件失活
        deactivated() {
            
        },

        // 组件内路由守卫。通过路由规则进入该组件是被调用
        beforeRouteEnter (to, from, next) {
            // ...
            next()
        },
        // 组件内路由守卫。通过路由规则离开该组件是被调用
        beforeRouteLeave (to, from, next) {
            // ...
            next()
        }
        
    }
</script>
<style scoped>
    /* @import url(); 引入css类 */
</style>