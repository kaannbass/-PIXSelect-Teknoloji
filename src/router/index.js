import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/film-detay/:id',
    name: 'FilmsDetail',
    component: () => import('../views/FilmsDetail.vue'),
  },
  {
    path: '/favoriler',
    name: 'Favorites',
    component: () => import('../views/Favorites.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
