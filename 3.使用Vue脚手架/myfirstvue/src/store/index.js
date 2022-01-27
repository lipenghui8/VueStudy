//引入vue
import Vue from 'vue'
//用于创建Vuex中最为核心的store
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
//准备actions，用于响应组件中的动作
const actions={
    // context为上下文对象，其中包含commit
    jia(context,value) {
        context.commit('JIA',value)
    }
}
//准备mutations-用于操作数据(state)
const mutations={
    JIA(state,value){
        state.sum+=value
    }
}
//准备state，用于存储数据
const state={
    sum:0 //当前的和
}
// 准备getters，用于将state中的数据进行加工
const getters={
    bigSum(state){
        return state.sum*10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})