import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostDetails from '../views/PostDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/PostDetails/:id',
    name: 'PostDetails',
    components: PostDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  
  routes
})

export default router
