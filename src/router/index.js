import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/readQR',
      name: 'readQR',
      component: () => import('../views/readQR.vue')
    },
    {
      path: '/generateQR',
      name: 'generateQR',
      component: () => import('../views/generateQR.vue')
    }
  ]
})

export default router
