<template>
  <div>
    <PreLoading />
    <div class="container">
      <div class="row my-5 order-list justify-content-center">
        <div class="col-11 mb-5 mb-md-0 bg-yellow" v-if="cart.carts">
          <h3 class="text-center font-letter font-weight-bold bg-secondary mb-0 py-3">
            結帳清單
          </h3>
          <div
            class="col-12 test-list bg-yellow"
            v-for="item in order.products"
            :key="item.id"
          >
            <div class="item-image">
              <img :src="item.product.imageUrl" alt="product" />
            </div>
            <div class="item-info d-flex flex-column align-items-center">
              <p>{{ item.product.title }}</p>
              <p>數量: {{ item.qty }}</p>
            </div>
            <div class="item-price">
              <p>小計</p>
              <p>{{ item.final_total }}</p>
            </div>

          </div>

          <div class="row align-items-end my-3">
            <div class="col h4 mb-0 text-center text-danger">
              總金額 {{ order.total | currency }}
            </div>
            <div
              class="col h4 text-right text-success text-center"
              v-if="coupon"
            >
              折扣價 {{ totalDiscount | currency }}
            </div>
          </div>
          <hr />
        </div>
        <div class="col-11 bg-yellow pb-2 mt-5">
          <h3 class="font-letter mb-3 font-weight-bold bg-secondary">
            客戶資料
          </h3>

          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th style="white-space: nowrap">收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid" class="text-danger"
                    >尚未付款</span
                  >
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreLoading from '@/components/front/PreLoading.vue'

export default {
  data () {
    return {
      cart: {},
      order: {
        user: {}
      },
      orderId: ''
    }
  },
  components: {
    PreLoading
  },
  methods: {
    getCart () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.$store.dispatch('updateLoading', true)

      vm.$http.get(url).then((response) => {
        vm.cart = response.data.data
        vm.cartItem = vm.cart.carts
        vm.$store.dispatch('updateLoading', false)
      })
    },
    getOrder () {
      const vm = this
      this.orderId = this.$route.params.orderId
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.$http.get(api).then((response) => {
        vm.order = response.data.order
      })
    }
  },
  computed: {
    totalDiscount () {
      return this.order.total * 0.8
    }
  },
  created () {
    this.getCart()
    this.getOrder()
  }
}
</script>

<style lang="scss" scoped>
.order-list {
  h3 {
    margin: 0 -15px;
        padding: 15px 0;
    text-align: center;
  }
}

.test-list {
  display: flex;
  text-align: center;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgb(138, 126, 126);

  h2 {
    width: 100%;
    margin-bottom: none;
  }
  .item-image {
    width: 30%;
    height: 100%;
    img {
      width: 100%;
    }
  }
  .item-info {
    width: 55%;
    margin: 0 2.5%;

  }
  .item-price {
    width: 15%;
  }

}
.bg-grass {
  background-color: #eaffe9;
}

.cart-img {
  max-width: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
