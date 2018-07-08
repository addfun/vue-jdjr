import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/index.vue'
import MakeMoney from '../components/makeMoney/index.vue'
import BorrowMoney from '../components/borrowMoney/index.vue'
import Members from '../components/members/index.vue'

import "../assets/css/reset.scss"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/makemoney',
      name: 'makemoney',
      component: MakeMoney
    },
    {
      path: '/borrowmoney',
      name: 'borrowmoney',
      component: BorrowMoney
    },
    {
      path: '/savemoney',
      name: 'savemoney',
      component: MakeMoney
    },
    {
      path: '/members',
      name: 'members',
      component: Members
    }
  ]
})
