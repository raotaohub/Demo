/*  
  vuex 的核心管理对象模块 ,向外暴露一个store
  state,      //状态对象
  mutations,  // 包含更新state的函数对象
  action,     // 包含对应事件回调函数的对象
  getters,    // 包含多个getter计算属性函数的对象
*/
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    // menu的开合
    isActive: false,
  },

  mutations: {
    MENUSHOW(state) {
      state.isActive = !state.isActive;
    },
  },

  actions: {//action可以直接执行异步的代码
    menuShow({ commit, state }) {
      commit('MENUSHOW')
    }
  },

  getters: {

  },
})