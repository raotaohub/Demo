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


import account from '@/views/account/account.vue'
import accountIndex from '@/views/account/accountIndex.vue'
import register from '@/views/account/register.vue'
import starbucksrewards from '@/views/account/starbucks-rewards.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      // 左右布局 利用视图命名 ，这里我写了三个 留一个防止日后生变！
      components: {
        default: index,
        indexleft: indexleft,
        indexright: indexright
      },
      // 其他的路由都是 / 的子孙路由 这样点其他路由地址页面就不会消失 但是因此DOM树也比较庞大
      children: [
        {
          path: '/stores',
          name: 'stores',
          component: stores
        },
        {
          path: '/menu',
          name: 'menu',
          // 由于每个子路由都有后代路由，所以每个相对而已的父路所在的组件 仅作为子路由的出口来使用
          component: menu,
          children: [
            {
              // 因此需要多一个视图 用来渲染父路由的默认视图，可以减少一环 v-show的判断
              path: '/menu',
              name: 'menuIndex',
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
          component: account,
          children: [
            {
              path: '/account',
              name: 'accountIndex',
              component: accountIndex,
            },
            {
              path: 'register',
              name: 'register',
              component: register,
            },
            {
              path: 'starbucks-rewards',
              name: 'starbucksrewards',
              component: starbucksrewards,
            }
          ]
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
