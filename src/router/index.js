import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestaurantView from '../views/RestaurantView.vue'
import AboutView from '../views/AboutView.vue'
import SingleRestaurantView from '../views/SingleRestaurantView.vue'
import ChartView from '../views/ChartView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/restaurants',
    name: 'Restaurants',
    component: RestaurantView
  },

  {
    path: '/about',
    name: 'About',
    component: AboutView
  },

  {
    path: '/chart',
    name: 'Chart',
    component: ChartView
  },

  {
    path: '/restaurant/:id',
    name: 'SingleRestaurant',
    component: SingleRestaurantView
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },

  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
