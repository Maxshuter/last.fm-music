// jshint -W033
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/Music.vue')
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import('../views/Albums.vue')
  },
  {
    path: '/albumInfo',
    name: 'AlbumInfo',
    component: () => import('../views/AlbumInfo.vue')
  },

]

const router = new VueRouter({
  routes,
  mode:"history"
})


export default router
