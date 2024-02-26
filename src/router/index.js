import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from "@/views/DetailView.vue";
import ShopView from "@/views/ShopView.vue";
import SzolgView from "@/views/SzolgView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/termekek',
    name: 'Shop',
    component: ShopView
  },
  {
    path: '/termek',
    name: 'termek',
    component: DetailView
  },
  {
    path: '/szolgaltatas',
    name: 'szolgaltatas',
    component: SzolgView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
