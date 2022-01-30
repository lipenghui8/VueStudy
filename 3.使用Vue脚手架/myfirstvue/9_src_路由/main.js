// 整个项目的入口文件
// 引入Vue
import Vue from 'vue'
//引入App组件，即所有组件的父组件
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

//关闭生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  router
}).$mount('#app')
