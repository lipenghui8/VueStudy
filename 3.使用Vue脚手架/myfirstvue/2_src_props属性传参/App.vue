<template>
    <div>
        <h1 ref="title">{{msg}}</h1>
        <button ref="btn" @click="showDom">点我输出上方dom元素</button>
        <School ref="sch" :age="19" idea="明德"/>
        <!-- 不能传key -->
        <School ref="sch" :age="18"/>
    </div>
</template>

<script>
    //引入组件
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{
            School
        },
        data(){
            return{
                msg:'辉哥你好'
            }
        },
        methods: {
            showDom(){
                console.log(this.$refs.title);//真实dom元素
                console.log(this.$refs.btn);//真实dom元素
                console.log(this.$refs.sch);//School组件的实例对象(vc)
            }
        },
    }
</script>