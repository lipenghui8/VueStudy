<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- solt定义一个插槽等待组件的使用者进行填充 -->
        <!-- 为插槽命名 -->
        <!-- 使用作用域插槽向插槽传数据 -->
        <slot :games="games">我是默认值，当使用者没有传递具体结构时，我会出现</slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data() {
            return {
                games:['红色警戒','穿越火线','劲舞团','超级玛丽']
            }
        },
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.category{
    width: 200px;
    height: 300px;
    overflow: hidden;
}
</style>