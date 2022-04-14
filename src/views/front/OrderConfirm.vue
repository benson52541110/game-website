<template>
  <div>
    <PreLoading />
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">貼心提醒</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">一旦送出後，就無法再更改囉!</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
              @click="createOrder"
            >
              確認送出
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row my-5 justify-content-center">
        <div class="col-md-7 col-12">
          <div class="row step">
            <div class="col-6 col-lg text-center step-point-line">
              <span class="bg-grass px-4 py-2 rounded-pill mb-3 d-inline-block">
                STEP 1
              </span>
              <p>填寫訂單</p>
            </div>
            <div class="col-6 col-lg text-center step-point-line step-point">
              <span
                class="border bg-deepGrass px-4 py-2 rounded-pill text-info mb-3 d-inline-block"
              >
                STEP 2
              </span>
              <p>送出訂單</p>
            </div>
            <div class="col-6 col-lg text-center step-point-line">
              <span
                class="border bg-grass px-4 py-2 rounded-pill text-info mb-3 d-inline-block"
              >
                STEP 3
              </span>
              <p>確認付款</p>
            </div>
            <div class="col-6 col-lg text-center">
              <span
                class="border bg-grass px-4 py-2 rounded-pill text-info mb-3 d-inline-block"
              >
                STEP 4
              </span>
              <p>完成付款</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5 order-list justify-content-center">
        <template v-if="cartData !== undefined && cartData.length >= 1">
          <h2
            class="text-center font-letter font-weight-bold bg-secondary mb-0 col-11 py-3"
          >
            購物清單
          </h2>
          <div
            class="col-11 test-list bg-yellow"
            v-for="item in cartData"
            :key="item.id"
          >
            <div class="item-image">
              <img :src="item.imageUrl" alt="product" />
              <p class="mt-2">{{ item.price | currency }}</p>
              <p class="text-success" v-if="coupons">套用優惠券</p>
            </div>
            <div class="item-info d-flex flex-column align-items-center">
              <p>{{ item.name }}</p>
              <div class="qty justify-content-center d-flex">
                <button
                  class="btn btn-light"
                  :disabled="item.qty <= 1"
                  type="button"
                  @click="item.qty--"
                >
                  <font-awesome-icon icon="minus" />
                </button>
                <input
                  type="number"
                  class="form-control text-center"
                  min="0"
                  v-model.number="item.qty"
                />
                <button class="btn btn-light" type="button" @click="item.qty++">
                  <font-awesome-icon icon="plus" />
                </button>
              </div>
            </div>
            <div class="item-price">
              <p>小計</p>
              <p>{{ item.price * item.qty }}</p>
            </div>
            <div class="deleteItem">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeLocalItem(item.product_id)"
              >
                <font-awesome-icon icon="fa-solid fa-trash-can" />
              </button>
            </div>
          </div>
          <div
            class="col-11 d-flex flex-column bg-yellow text-danger item-footer align-items-center"
          >
            <div class="total-price d-flex mt-4">
              <p>總計:</p>
              <p>{{ totalCart | currency }}</p>
            </div>
            <div class="total-discount d-flex text-success" v-if="coupons">
              <p>折扣價:</p>
              <p>{{ totalDiscount | currency }}</p>
            </div>
          </div>
        </template>
        <div class="col-11 bg-yellow pb-2 mt-5">
          <h3 class="font-letter mb-3 font-weight-bold bg-secondary">
            客戶資料
          </h3>
          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ localCustomer.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ localCustomer.user.name }}</td>
              </tr>
              <tr>
                <th style="white-space: nowrap">收件人電話</th>
                <td>{{ localCustomer.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ localCustomer.user.address }}</td>
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
          <div class="text-right">
            <router-link class="mr-2" to="/front-end/order-check">
              <button
                type="button"
                class="btn btn-secondary"
                @click="clearCoupon"
              >
                取消
              </button>
            </router-link>
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              送出訂單
            </button>
          </div>
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
      cartItem: [],
      order: {
        user: {}
      },
      orderId: '',
      cartData: JSON.parse(localStorage.getItem('cartData')) || [],
      localCustomer: JSON.parse(localStorage.getItem('localCustomer')) || [],
      coupon: JSON.parse(localStorage.getItem('coupon')) || false
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
    createOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const order = vm.localCustomer
      vm.$http
        .post(url, {
          data: order
        })
        .then((response) => {
          if (response.data.success) {
            this.$bus.$emit('message:push', '送出成功', 'success')
            localStorage.clear()
            vm.orderId = response.data.orderId
            vm.$router.push(`/front-end/order-pay/${vm.orderId}`)
          } else {
            this.$bus.$emit('message:push', '送出失敗', 'danger')
          }
        })
    },
    clearCoupon () {
      localStorage.removeItem('coupon')
    }
  },
  computed: {
    totalCart () {
      return this.cartData.reduce(
        (total, item) => total + item.price * item.qty,
        0
      )
    },
    totalDiscount () {
      return this.cartData.reduce(
        (total, item) => total + item.price * item.qty * 0.8,
        0
      )
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
.order-list {
  h3 {
    margin: 0 -15px;
    text-align: center;
    padding: 15px 0;
  }
}

.test-list {
  display: flex;
  text-align: center;
  align-items: center;
  padding-top: 12px;
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
    .qty {
      width: 80%;
    }
  }
  .item-price {
    width: 15%;
  }
  .deleteItem {
    width: 10%;
    padding-left: 2.5%;
  }
}
.step {
  z-index: 1;
  position: relative;

  .step-point {
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      z-index: -1;
      right: 50px;
      top: 16px;
      width: 10px;
      height: 10px;
      background-color: rgb(168, 216, 185);
      border-radius: 500px;
      animation-name: point;
      animation-duration: 2s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
    }
  }

  .step-point-line {
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      z-index: -2;
      right: -80px;
      top: 20px;
      width: 180px;
      height: 2px;
      border-bottom: 2px solid rgb(240, 243, 241);
    }
  }
}
.lineTrough {
  text-decoration: line-through;
}

@media (max-width: 992px) {
  .step {
    .step-point {
      &:before {
        display: none;
      }
    }
    .step-point-line {
      &:after {
        display: none;
      }
    }
  }
}
.bg-grass {
  background-color: #eaffe9;
}

.cart-img {
  max-width: 100%;
  height: 70px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

@keyframes point {
  0% {
    transform: translateX(0px);
    opacity: 0;
  }

  1% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateX(9rem);
    opacity: 1;
  }
}
@media (max-width: 576px) {
  .test-list {
    .item-info {
      width: 45%;
      margin: 0 2.5%;
      .qty {
        width: 100%;
      }
    }
  }
}
</style>
