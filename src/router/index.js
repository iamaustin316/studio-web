console.log('yoooooooooooooooooo-vue-router')
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Work from '@/components/Work.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/work',
        name: 'Work',
        component: Work,
    }
]

const router = createRouter({
    linkActiveClass: 'text-sky-500',
    history: createWebHashHistory(),
    routes,
})

export default router