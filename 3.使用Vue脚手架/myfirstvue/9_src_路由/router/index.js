//改文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../components/About'
import Home from '../components/Home'

//创建并暴露一个路由器
const router = new VueRouter({
    // 路由有两种工作模式：hash和history,hash具有更好的兼容性，history美观，没有/#/
    // 开发时使用hash模式（默认）
    //上线使用history模式，404问题可以靠后端Nginx解决
    // mode:history,//设置为history模式
    routes:[
        // 一级路由
        {
            // 命名路由，可选，路径很长时可以简化编码
            name:'guanyu',
            // 不使用params时path的写法
            path:'/about',

            // 使用params时path的写法,需要预先占位声明接收params参数
            // path:'/about/:id/:name',

            component:About,

            // 可选，使用meta属性添加路由源信息,通常用来配合路由守卫
            meta:{isAuth:false}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            
            //配置独享路由守卫,只有前置，没有后置
            beforeEnter:(to,from,next)=>{
                if('judge'){
                    next()
                }else{
                    alert("无权查看！")
                }
            },

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

// 全局前置路由守卫，初始化时被调用、每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫:',to,from)
    console.log('读取路由元信息:',to.meta.title)
    document.title=to.meta.title
    if(to.meta.isAuth){
        if('判断'){
            next()
        }else{
            alert("无权查看！")
        }
    }
    else{
        next()
    }
})

//全局后置路由守卫,初始化时被调用、每次路由切换之后被调用，用的不多
router.afterEach(()=>{
    console.log("后置路由守卫:",)
    document.title=to.meta.title //修改网站标题
}) 


export default router