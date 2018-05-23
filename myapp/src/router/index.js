import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/view/login'
import me from '@/view/me'
import message from '@/view/message'
import robot from '@/view/robot'
import list from '@/view/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/robot',
      name: 'robot',
      component: robot
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
