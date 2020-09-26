/*
路由器对象模块
 */
import Vue from 'vue'
import Router from 'vue-router'
// 路由头
import home from '@/views/home.vue'
import kunpeng from '@/views/kunpeng.vue'
import experimentalclass from '@/views/experimentalclass.vue'
// course的子路由
import cloudclassroom from '@/views/course/cloudclassroom.vue'
import cloudlab from '@/views/course/cloudlab.vue'
import microauthentication from '@/views/course/microauthentication.vue'
import teachingmarket from '@/views/course/teachingmarket.vue'
// cloudclassroom的子路由
import hotcourse from '@/views/course/cloudclassroom/hotcourse.vue'
import hotactivity from '@/views/course/cloudclassroom/hotactivity.vue'
import cloudcourse from '@/views/course/cloudclassroom/cloudcourse.vue'
import character from '@/views/course/cloudclassroom/character.vue'

Vue.use(Router)

export default new Router({
  // 配置路由
  routes: [
    { // home
      path: '/home',
      name: 'home',
      component: home,
    },
    { // kunpeng
      path: '/kunpeng',
      name: 'kunpeng',
      component: kunpeng,
    },
    { // experimentalclass
      path: '/experimentalclass',
      name: 'experimentalclass',
      component: experimentalclass,
    },
    {
      path: '/cloudclassroom',
      name: 'cloudclassroom',
      component: cloudclassroom,
      children: [
        {
          path: 'hotcourse',
          name: 'hotcourse',
          component: hotcourse,
        },
        {
          path: 'hotactivity',
          name: 'hotactivity',
          component: hotactivity,
        },
        {
          path: 'cloudcourse',
          name: 'cloudcourse',
          component: cloudcourse,
        },
        {
          path: 'character',
          name: 'character',
          component: character,
        },
        {
          path: '',
          redirect: 'hotcourse'
        },
      ]
    },
    {
      path: '/cloudlab',
      name: 'cloudlab',
      component: cloudlab,
    },
    {
      path: '/microauthentication',
      name: 'microauthentication',
      component: microauthentication,
    },
    {
      path: '/teachingmarket',
      name: 'teachingmarket',
      component: teachingmarket,
    },
    {
      // 重定向至home
      path: '',
      redirect: '/home'
    },
  ]
})
