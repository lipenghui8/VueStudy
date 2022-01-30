<template>
    <div>
        <h2>我是Home的内容</h2>
        <!-- 使用query方式传参 -->
        <h2>接收到的参数:{{$route.query.id}}</h2>
        <!-- 使用param方式传参 -->
        <h2>params方式传参:{{$route.params.id}}</h2>
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

        }
    }
</script>
<style scoped>
    /* @import url(); 引入css类 */
</style>