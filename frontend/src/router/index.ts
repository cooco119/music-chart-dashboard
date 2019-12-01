import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Melon from '../views/Melon.vue';
import Bugs from '../views/Bugs.vue';
import Naver from '../views/Naver.vue';
import Genie from '../views/Genie.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/melon',
    name: 'melon',
    component: Melon
  },
  {
    path: '/bugs',
    name: 'bugs',
    component: Bugs
  },
  {
    path: '/naver',
    name: 'naver',
    component: Naver
  },
  {
    path: '/genie',
    name: 'genie',
    component: Genie
  },
]

const router = new VueRouter({
  routes
})

export default router
