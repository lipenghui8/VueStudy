<template>
    <div>
        <!-- Vue过渡效果 -->
        <button @click="isShow=!isShow">显示/隐藏</button>
        <!-- 动画用transition标签包裹 -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊!</h1>
        </transition>
        <!-- transition里只能放一个元素，transition-group中可以放多个元素 -->
        <!-- 集成第三方动画 -->
        <transition-group 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__bounceOutDown"
        >   
            <h1 v-show="isShow" key="1">你好!</h1>
            <h1 v-show="isShow" key="2">你好!</h1>
        </transition-group>
    </div>
</template>

<script>
    // 引入第三方动画库
    import 'animate.css'
    export default {
        data() {
            return {
                isShow:true
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
    h1{
        background-color: orange;
        transition: 0.5s linear;
    }
    /* 进入的起点 */
    .hello-enter{
        transform: translateX(-100%);
    }
    /* 进入的终点 */
    .hello-enter-to{
        transform: translateX(0);
    }
    /* 进入的起点 */
    .hello-leave{
        transform: translateX(0);
    }
    /* 进入的终点 */
    .hello-leave-to{
        transform: translateX(-100%);
    }
</style>