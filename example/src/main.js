import Vue from 'vue'
import App from './App.vue'
import ViewMore from '../../src/viewMore.js'

Vue.component(ViewMore.name, ViewMore)

new Vue({
  el: '#app',
  render: h => h(App)
})
