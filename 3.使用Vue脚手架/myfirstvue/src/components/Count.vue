<template>
    <div class="category">
        <h1>Vuex示例</h1>
        <h3>当前的求和为:{{sum}}</h3>
        <button @click="increment(n)">点击相加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

    export default {
        name:'Category',
        props:['title'],
        data() {
            return {
                n:1
            }
        },
        methods: {
            // increment(){
            //     // dispatch提交给action
            //     this.$store.dispatch('jia',this.n)
            //     // commit直接提交给mutation
            //     this.$store.commit('JIA',this.n)
            // },

            //借助mapMutation生成对应的方法调用Mutation，调用函数时需传参
            ...mapMutations({increment:'JIA',}),
            //借助mapMutation生成对应的方法调用Action
            ...mapActions({increment:'jia'})

        },
        computed:{
            //借助mapState生成计算属性，从state获取数据(数组写法)
            ...mapState(['sum']),
            //借助mapGetters生成计算属性，从state获取数据(数组写法)
            ...mapGetters(['bigSum'])
            // ...mapState(['sum','school','subject'])
        },
        mounted() {
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