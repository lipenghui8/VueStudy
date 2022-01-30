<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header">
                    <h2>Vue Router Demo</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 原始页面中使用a标签的跳转 -->
                    <!-- <a class="list-group-item" href="./about.html">About</a>
                    <a class="list-group-item active" href="./home.html">Home</a> -->
                    
                    <!-- Vue中借助router-link标签实现路由的切换 -->
                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <!-- 使用路由名称跳转 -->
                    <!-- <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link> -->

                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                    
                    <!-- query传参 -->
                    <!-- 跳转路由并携带query参数,to的字符串写法 -->
                    <router-link class="list-group-item" active-class="active" :to="`/home?${id}`">传参</router-link>
                    <!-- 跳转路由并携带query参数,to的对象写法,推荐写法 -->
                    <!-- 
                        将path:'home'改为name:'zhuye'也可
                     --> 
                    <router-link class="list-group-item" active-class="active" :to="{
                        path:'home',
                        query:{
                            id:id,
                        }
                    }"> 
                    传参
                    </router-link>
                    
                    <!-- 跳转路由并携带param参数,to的字符串写法 -->
                    <router-link class="list-group-item" active-class="active" :to="`/home/${id}/${name}`">传参</router-link>
                    <!-- 跳转路由并携带params参数,to的对象写法 -->
                    <!-- 
                        使用params方式传参时，必须使用name，不能使用path传递路由
                     --> 
                     <router-link class="list-group-item" active-class="active" :to="{
                        name:'zhuye',
                        params:{
                            id:id,
                            name:name
                        }
                    }"> 
                    传参
                    </router-link>

                    <!-- 点击button按钮进行页面跳转并传参 -->
                    <!-- push方式,即留下历史记录，用得多 -->
                    <button @click="pushShow(id,name)">点我跳转</button>
                    <!-- replace方式，不留历史记录 -->
                    <button @click="replaceShow(id,name)">点我跳转</button>
                </div>
            </div> 
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- 指定组件的呈现位置 -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    import About from './components/About.vue'
    import Home from './components/Home.vue'

    //引入组件
    export default {
        name:'App',
        components:{
            About,
            Home
        },
        data() {
            return {
                id:3,
                name:'辉哥'
            }
        },
        methods: {
            // 历史记录push方式
            pushShow(id,name){
                this.$router.push({
                    name:'zhuye',
                    query:{
                        id:id,
                        name:name
                    }
                })
            },
            // 历史记录replace方式
            replaceShow(id,name){
                this.$router.push({
                    name:'zhuye',
                    query:{
                        id:id,
                        name:name
                    }
                })
            },
            // router身上的常用api,用来操作历史记录
            // 后退
            back(){
                this.$router.back
            },
            // 前进
            forword(){
                this.$router.forword
            },
            // 前进或后退几步
            go(){
                this.$router.go(3) // 前进三步
            }
        },
    }
</script>