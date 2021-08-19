import './assets/scss/main.scss'
window.Vue = require('vue')
import VueRouter from 'vue-router'
import router from '@/routes/router'

// eslint-disable-next-line no-undef
Vue.component('MainApp', require('./App.vue').default)
// eslint-disable-next-line no-undef
Vue.use(VueRouter)

// eslint-disable-next-line no-undef
const app = new Vue({
  router,
  el: '#app'
})
