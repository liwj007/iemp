import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import state from './state'
import actions from './actions'
import getters from './getters'

 import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {
     user
  }
})
