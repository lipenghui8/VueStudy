// 整个项目的入口文件
// 引入Vue
import Vue from 'vue'
//引入App组件，即所有组件的父组件
import App from './App.vue'
// 引入插件
import plugins from './plugins'
//引入Vuex
import Vuex from 'vuex'
//引入store
import store from './store'
//关闭生产提示
Vue.config.productionTip = false

Vue.use(Vuex)

// 应用插件
Vue.use(plugins)
//创建Vue实例对象
new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
