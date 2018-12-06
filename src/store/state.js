import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '北京'
try {
  if (localStorage.getItem('city')) {
    defaultCity = localStorage.getItem('city')
  }
} catch (e) {

}

export default {
  city: defaultCity
}
