
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import Detail from '../components/Detail.vue'

const router = new VueRouter({
    routes: [
        {
            name: 'About',
            path: '/about',
            component: About
        },
        {
            name: 'Home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'News',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true },
                    // beforeEnter(to, from, next) {
                    //     if (localStorage.getItem('user') === 'LittleChen') {
                    //         next()
                    //     } else {
                    //         alert('只有小陈才可以访问')
                    //     }


                    // }
                },
                {
                    name: 'Message',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true },
                    children: [
                        {
                            name: 'msgDetail',
                            path: 'detail/:id/:name',
                            component: Detail
                        }
                    ]
                },
            ]
        },

    ]
})


//beforeEach：前置路由守卫，初始化时执行，每次路由切换前执行
// router.beforeEach((to, from, next) => {
//     console.log(to, from)
//     if (to.meta.isAuth) {//判断当前路由是否需要权限
//         if (localStorage.getItem('user') === 'LittleChen') {
//             next()
//         } else {
//             alert('只有小陈才可以访问')
//         }
//     } else {
//         next()//放行函数
//     }

// })

//afterEach：后置路由守卫，初始化时执行，每次路由切换后执行
// router.afterEach((to, from) => {//没有next参数
//     from
//     document.title = to.name //修改网页title
// })
export default router