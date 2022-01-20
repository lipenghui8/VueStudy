<template>
    <!-- Vue动画效果 -->
    <div>
        <button @click="isShow=!isShow">显示/隐藏</button>
        <!-- 动画用transition标签包裹 -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊!</h1>
        </transition>
    </div>
</template>

<script>
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
}
/* 动画必须命名为name-enter-active和name-leave-active */
.hello-enter-active{
    animation: huige 0.5s linear;
}
.hello-leave-active{
    animation: huige 0.5s linear reverse;
}
@keyframes huige {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>