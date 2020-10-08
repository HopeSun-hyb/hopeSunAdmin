import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
  },
  // computed
  getters:{
    isCollapse: function(state) {
      return state.isCollapse;
    }

  },
  // 同步
  mutations: {
    SET_COLLAPSE: function(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
  },
  modules: {
  }
})
