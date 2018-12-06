import Vuex from 'vuex'
import state from './state'
import mutation from './mutation'

export default new Vuex.Store({
  state: state,
  mutations: mutation
})
