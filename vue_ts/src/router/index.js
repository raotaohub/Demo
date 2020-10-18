import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import indexleft from '@/components/indexleft'
import indexright from '@/components/indexright'



import stores from '../views/stores/stores.vue'

import menu from '../views/menu/menu.vue'
import menuIndex from '../views/menu/menuIndex.vue'
import beverages from '@/views/menu/beverages.vue'
import food from '@/views/menu/food.vue'
import coffee from '@/views/menu/coffee.vue'
import merchandise from '@/views/menu/merchandise.vue'


import account from '../views/account/account.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: index,
        indexleft: indexleft,
        indexright: indexright
      },
      children: [
        {
          path: '/stores',
          name: 'stores',
          component: stores
        },
        {
          path: '/menu',
          name: 'menu',
          component: menu,
          children: [
            {
              path: '/menu',
              component: menuIndex
            },
            {
              path: 'beverages',
              name: 'beverages',
              component: beverages,
            }, {
              path: 'food',
              name: 'food',
              component: food,
            }, {
              path: 'coffee',
              name: 'coffee',
              component: coffee,
            }, {
              path: 'merchandise',
              name: 'merchandise',
              component: merchandise,
            },
          ]
        },
        {
          path: '/account',
          name: 'account',
          component: account
        }
      ]
    },
    {
      // 重定向至home
      path: '',
      redirect: '/'
    },
  ]
})
