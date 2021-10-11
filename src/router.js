import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Sources from '@/views/Sources.vue'
import Categories from '@/views/Categories.vue'
import Articles from '@/views/Articles.vue'


const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/sources/',
        name: "Sources",
        component: Sources
    },
    {
        path: '/categories',
        name: "Categories",
        component: Categories,
        props: true
    },
    {
        path: '/articles',
        name: "Articles",
        component: Articles,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;