//改文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../components/About'
import Home from '../components/Home'

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        // 一级路由
        {
            // 命名路由，可选，路径很长时可以简化编码
            name:'guanyu',
            // 不使用params时path的写法
            path:'/about',

            // 使用params时path的写法,需要预先占位声明接收params参数
            // path:'/about/:id/:name',

            component:About
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            // 多级路由
            children:[
                {
                    name:'xinwen',
                    path:'news', //路径即为/home/news  不要写成/news
                    component:News,
                    
                    // props传参方式，可选，可以简化接收参数时的写法，用props代替直接读取
                    // props的第一种写法,只能传递死数据，基本不用，值为对象，该对象中的所有key-value都会以props的形式传给组件
                    // props:{a:1,b:'hello'}

                    // props的第二种写法,值为布尔值,若布尔值为真，就会把本路由组件收到的所有params参数，以props的形式传递给本组件
                    // props:true

                    // props的第三种写法,值为函数,返回值中的每一组key-value都会以peops形式传递给组件
                    props($route){
                        return {id:$route.id,name:$route.name}
                    }
                }
            ]
        }
    ]
})