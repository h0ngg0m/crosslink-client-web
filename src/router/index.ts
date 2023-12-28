import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import NaverCallback from '@/views/auth/NaverCallback.vue'
import GoogleCallback from '@/views/auth/GoogleCallback.vue'
import BoxList from '@/views/box/BoxListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth/login',
      component: LoginView,
      meta: {
        layout: 'auth'
      }
    },
    {
      path: '/auth/login/naver/callback',
      component: NaverCallback
    },
    {
      path: '/auth/login/google/callback',
      component: GoogleCallback
    },
    {
      path: '/boxes',
      component: BoxList
    }
  ]
})

export default router
