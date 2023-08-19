import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/Home.vue'
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import('../views/Basket.vue')
    }
  ]
})

export default router
