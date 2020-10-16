import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index.vue'
import Account from '@/views/account/account.vue'
import Stores from '@/views/stores/stores.vue'
import Menu from '@/views/menu/menu.vue'
import beverages from '@/views/menu/beverages.vue'
import food from '@/views/menu/food.vue'
import coffee from '@/views/menu/coffee.vue'
import merchandise from '@/views/menu/merchandise.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/stores',
      name: 'stores',
      component: Stores
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      children: [
        {
          path: 'beverages',
          name: 'beverages',
          component: beverages
        }, {
          path: 'food',
          name: 'food',
          component: food
        }, {
          path: 'coffee',
          name: 'coffee',
          component: coffee
        }, {
          path: 'merchandise',
          name: 'merchandise',
          component: merchandise
        },
      ]
    },
    {
      // 重定向至home
      path: '',
      redirect: '/'
    },
  ]
})
