import { createRouter, createWebHistory } from "vue-router";

const routes =[
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/About.vue')
    },
    {
        path: '/data',
        name: 'data',
        component: () => import('@/pages/Data.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/Contact.vue')
    },
    {
        path: '/charm',
        name: 'charm',
        component: () => import('@/pages/Charm.vue')
    },
    {
        path: '/bright',
        name: 'bright',
        component: () => import('@/pages/Bright.vue')
    },
    {
        path: '/arcane',
        name: 'arcane',
        component: () => import('@/pages/Arcane.vue')
    },
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

export default router;