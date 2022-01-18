<template>
    <div>
        <h1 ref="title">{{msg}}</h1>
        <button ref="btn" @click="showDom">点我输出上方dom元素</button>
        <!-- 通过props给子组件传递数据 -->

        <!-- 通过父组件给子组件绑定一个自定义事件，子给父传递事件(第一种写法，使用@或v-on) -->
        <School @getStudentName="getStudentName"/>
        
        <!-- 通过父组件给子组件绑定一个自定义事件，子给父传递事件(第二种写法，使用ref) -->
        <School ref="student"/>
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
            },
            getStudentName(name){
                console.log('APP收到学校名：',name)
            }
        },
        mounted() {
            //通过生命周期钩子函数指定组件的事件
            this.$refs.student.$on('getStudentName',this.getStudentName)
        },
    }
</script>