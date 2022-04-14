
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import Detail from '../components/Detail.vue'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,  
                },
                {
                    path:'message',
                    component:Message, 
                    children:[
                        {
                            name:'msgDetail',
                            path:'detail/:id/:name',
                            component:Detail
                        }
                    ] 
                },
            ]
        },
        {
            path:'/about',
            component:About
        },

    ]
})