import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'

const routes = [
    {
        path: '/',
        name: 'Homse',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    }
]

const router = createRouter({
    base: "/studio-web/",
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
})

console.log(router)

export default router