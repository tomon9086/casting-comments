import Vue from 'vue'
import Vuex from 'vuex'

import constants from './modules/constants'
import hello from './modules/hello'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    constants: {
      ...constants
    },
    hello: {
      namespaced: true,
      ...hello
    }
  }
})
