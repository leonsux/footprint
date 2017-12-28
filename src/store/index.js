import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  count: 0
}

var mutations = {
  increment (state, step) {
    state.count += step
  },
  decrement (state, payload) {
    state.count -= payload.params.step
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
