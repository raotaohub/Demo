import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index.vue'
import Account from '@/views/account/account.vue'
import Stores from '@/views/stores/stores.vue'
import Menu from '@/views/menu/menu.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
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
          component: Menu
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
