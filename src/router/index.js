import Vue from 'vue';
import VueRouter from 'vue-router'

/*import Main from '../pages/main/main.vue'
import Search from '../pages/search/search.vue'
import Category from '../pages/category/category.vue'
import Cart from '../pages/cart/cart.vue'
import Personal from '../pages/personal/personal.vue'
import Login from '../pages/login/login.vue'
import On from '../pages/on/on.vue'*/

const Main = () => import('../pages/main/main.vue')
const Search = () => import('../pages/search/search.vue')
const Category = () => import('../pages/category/category.vue')
const Cart = () => import('../pages/cart/cart.vue')
const Personal = () => import('../pages/personal/personal.vue')
const Login = () => import('../pages/login/login.vue')
const On = () => import('../pages/on/on.vue')

Vue.use(VueRouter)
export default new VueRouter({
  routes : [
    {
      path : '/main',
      component: Main
    },
    {
      path : '/search',
      component: Search
    },
    {
      path : '/category',
      component: Category
    },
    {
      path : '/cart',
      component: Cart
    },
    {
      path : '/personal',
      component: Personal
    },
    {
      path : '/login',
      component: Login
    },
    {
      path : '/on',
      component: On ,
    },
    {
      path : '/',
      redirect : '/on'
    }
  ]
})

