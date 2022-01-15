// 整个项目的入口文件
// 引入Vue
import Vue from 'vue'
//引入App组件，即所有组件的父组件
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip = false
//所有vm都引入混入
Vue.mixin(mixin)

//创建Vue实例对象
new Vue({
  render: h => h(App),
}).$mount('#app')
