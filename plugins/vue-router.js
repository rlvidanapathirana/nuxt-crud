import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Graphic from './components/Graphic'


const router =  new VueRouter({

    mode:'history',    //Remove # simble

    routes:[

        {path:"",component:Home},
        {path:"/about",component:About},
        {path:"/projects",component:Projects},
        {path:"/graphic",component:Graphic},
        {path:"/contact",component:Contact}
        

    ]

});

export default router



