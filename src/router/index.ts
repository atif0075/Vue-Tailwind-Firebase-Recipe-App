import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        meta: { title: 'Home' },
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/about',
        meta: { title: 'About' },
        component: () => import('../views/About.vue'),
    },
    {
        path: '/recipe/:slug',
        name: 'Recipe',
        meta: { title: 'recipe' },
        component: () => import('../views/Recipe.vue'),
    },
    {
        path: '/signin',
        name: 'Signin',
        meta: { title: 'signin' },
        component: () => import('../views/Signin.vue'),
    },
    {
        path: '/signup',
        name: 'Signup',
        meta: { title: 'signup' },
        component: () => import('../views/Signup.vue'),
    },
    {
        path: '/addrecipe',
        name: 'AddRecipe',
        meta: { title: 'Add Recipe' },
        component: () => import('../views/AddRecipe.vue'),
    },
    {
        path: '/:catchAll(.*)*',
        name: '404',
        meta: { title: '404' },
        component: () => import('../views/404.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'text-secondary font-semibold',
})

export default router
