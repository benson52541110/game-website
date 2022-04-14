import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    product: {},
    productsAll: [],
    productPage: [],
    pagination: {},
    messages: []

  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    },
    getProduct (context) {
      const cardId = router.currentRoute.params.cardId
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${cardId}`
      context.commit('LOADING', true)

      axios.get(api).then((res) => {
        context.commit('PRODUCT', res.data.product)
        context.commit('LOADING', false)
      })
    },
    getProductAll (context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      axios.get(api).then((response) => {
        context.commit('PRODUCTALL', response.data.products)
      })
    },
    getProductPage (context, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      context.commit('LOADING', true)
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('PRODUCTPAGE', response.data.products)
          context.commit('PAGINATION', response.data.pagination)
          context.commit('LOADING', false)
        }
      })
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    PRODUCT (state, payload) {
      state.product = payload
    },
    PRODUCTALL (state, payload) {
      state.productsAll = payload
    },
    PRODUCTPAGE (state, payload) {
      state.productPage = payload
    },
    PAGINATION (state, payload) {
      state.pagination = payload
    }
  },
  getters: {},
  modules: {}
})
