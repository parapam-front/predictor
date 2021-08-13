import './assets/scss/main.scss'
window.Vue = require('vue')

// eslint-disable-next-line no-undef
Vue.component('mainApp', require('./app.vue').default)

// eslint-disable-next-line no-undef
const app = new Vue({
  el: '#app',
})
