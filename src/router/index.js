import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Todos from '@/components/Todos/Todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    }
  ]
})
