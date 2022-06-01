import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/view',
            name: 'View',
            component: () => import('./views/View.vue')
        },
    ]
  })