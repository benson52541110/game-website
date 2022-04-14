import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'

import './bus'
import Vuex from 'vuex'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

import VueClipboard from 'vue-clipboard2'
import Clipboard from 'clipboard'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

import currencyFilter from './filters/currency'
import dateFilter from './filters/date'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueClipboard, Clipboard)
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas, fab)
VeeValidate.Validator.localize('zh_TW', zhTWValidate)
Vue.use(VeeValidate)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('preLoading', VueLoading)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)
/* 跨域存取 */
axios.defaults.withCredentials = true

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    AOS.init({})
  },
  render: (h) => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next({})
  }
})
router.afterEach(() => {
  window.scrollTo(0, 0)
})
