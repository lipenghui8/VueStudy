<!-- 组件采用大驼峰命名 -->
<template>
    <div>
        <h2 class="school">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <h3>年龄：{{age}}</h3>
        <h3>校训：{{idea}}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:'河南大学',
            address:'开封',
            myage:this.age//可接受传入的参数
        }
    },
    //使用props对组件传参，传入的参数不要修改
    //简单声明接收
    // props:['age','idea']
    //接收的同时对数据进行类型限制
    // props:{
    //     age:Number,
    //     idea:String
    // }
    //最完整写法
    props:{
        age:{
            type:Number,
            required:true
        },
        idea:{
            type:String,
            default:'明德新民'
        }
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
    .school{
        color:red;
    }
</style>