<template>
  <div class="container">
    <PreLoading />
    <div class="row my-5 justify-content-center ">
      <div class="col-md-7 col-12">
        <div class="row step">
          <div class="col-6 col-lg text-center step-point-line step-point">
            <span
              class="bg-deepGrass px-4 py-2 rounded-pill text-dark mb-3 d-inline-block"
            >
              STEP 1
            </span>
            <p>填寫訂單</p>
          </div>
          <div class="col-6 col-lg text-center step-point-line ">
            <span
              class="border bg-grass px-4 py-2 rounded-pill text-info mb-3 d-inline-block"
            >
              STEP 2
            </span>
            <p>送出訂單</p>
          </div>
          <div class="col-6 col-lg text-center step-point-line ">
            <span
              class="border bg-grass px-4 py-2 rounded-pill text-info mb-3 d-inline-block"
            >
              STEP 3
            </span>
            <p>確認付款</p>
          </div>
          <div class="col-6 col-lg text-center ">
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
    <div class="my-5 row justify-content-center">
      <div
        class="col-12 my-5 no-cart d-flex flex-column align-items-center"
        v-if="cartData.length < 1"
      >
        <h1 class="mb-5 font-letter font-weight-bold text-center">
          您的購物車內還沒有任何商品！
        </h1>
        <router-link to="/front-end/front-cart">
          <button
            class="btn btn-success cursor-pointer font-weight-bold"
            type="button"
          >
            快來逛逛
          </button>
        </router-link>
      </div>
      <template v-if="cartData !== undefined && cartData.length >= 1">
        <h2 class="font-letter font-weight-bold bg-secondary mb-0 col-11 py-3">
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
                @click="item.qty--;updateQty(item.product_id)"
              >
                <font-awesome-icon icon="minus" />
              </button>
              <input
                type="number"
                class="form-control"
                min="0"
                v-model.number="item.qty"
              />
              <button class="btn btn-light" type="button" @click="item.qty++;updateQty(item.product_id)">
                <font-awesome-icon icon="plus" />
              </button>
            </div>
          </div>
          <div class="item-price">
            <p>小計</p>
            <p>{{ (item.price * item.qty) | currency }}</p>
          </div>
          <DeleteProduct @deleteItem="removeLocalItem(item.product_id)"></DeleteProduct>
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
          <div class="coupon mb-3">
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                type="button"
                class="btn btn-outline-secondary mt-2"
                @click="useCouponCode"
              >
                套用優惠碼
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary mt-2 ml-2 getCoupon"
                v-clipboard="value"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                取得優惠碼
              </button>
            </div>
          </div>
        </div>
      </template>

      <div
        class="col-11 customer-info bg-yellow mt-5"
        v-if="cartData !== undefined && cartData.length >= 1"
      >
        <h2 class="font-letter font-weight-bold bg-secondary py-3">客戶資料</h2>
        <form @submit.prevent="createOrder">
          <div class="form-group">
            <label for="username" class="mb-2"
              ><span style="color: red">*</span> 收件人姓名</label
            >
            <input
              type="text"
              class="form-control mb-2"
              name="name"
              id="username"
              :class="{ 'is-invalid': errors.has('name') }"
              v-model="form.user.name"
              v-validate="'required'"
              placeholder="輸入姓名"
            />
            <span class="text-danger" v-if="errors.has('name')"
              >請輸入姓名欄位</span
            >
          </div>
          <div class="form-group">
            <label for="usertel" class="mb-2"
              ><span style="color: red">*</span> 聯絡電話</label
            >
            <input
              type="tel"
              class="form-control mb-2"
              name="tel"
              :class="{ 'is-invalid': errors.has('tel') }"
              id="usertel"
              v-model="form.user.tel"
              v-validate="'required'"
              placeholder="請輸入電話"
            />
            <span class="text-danger" v-if="errors.has('tel')"
              >請輸入電話欄位</span
            >
          </div>
          <div class="form-group">
            <label for="useraddress" class="mb-2"
              ><span style="color: red">*</span> 收件人地址</label
            >
            <input
              type="address"
              class="form-control mb-2"
              name="address"
              :class="{ 'is-invalid': errors.has('address') }"
              id="useraddress"
              v-model="form.user.address"
              v-validate="'required'"
              placeholder="請輸入地址"
            />
            <span class="text-danger" v-if="errors.has('address')"
              >請輸入地址欄位</span
            >
          </div>
          <div class="form-group">
            <label for="useremail" class="mb-2">電子信箱</label>
            <input
              type="email"
              class="form-control mb-2"
              name="email"
              id="useremail"
              v-validate="'email'"
              :class="{ 'is-invalid': errors.has('email') }"
              v-model="form.user.email"
              placeholder="請輸入 Email"
            />
            <span class="text-danger" v-if="errors.has('email')"
              >電子信箱格式錯誤
            </span>
          </div>
          <div class="form-group">
            <label for="useraddress" class="mb-2">備註留言</label>
            <textarea
              name=""
              id=""
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-right">
            <button type="button" class="btn btn-danger" @click="postCarts()">
              確認訂單
            </button>
          </div>
        </form>
      </div>
      <div class="col-12 mt-5">
        <div class="row">
          <div class="col-12">
            <h2>你可能還會喜歡...</h2>
            <SessionSwiper></SessionSwiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SessionSwiper from '@/components/front/SessionSwiper.vue'
import PreLoading from '@/components/front/PreLoading.vue'
import DeleteProduct from '@/components/front/DeleteProduct.vue'

export default {
  data () {
    return {
      value: '80discount',
      cartData: JSON.parse(localStorage.getItem('cartData')) || [],
      localCustomer: JSON.parse(localStorage.getItem('localCustomer')) || [],
      cart: {
        carts: {}
      },
      products: [],
      coupon_code: '',
      coupons: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        }
      }
    }
  },
  components: {
    SessionSwiper,
    PreLoading,
    DeleteProduct
  },
  methods: {
    onCopy () {
      this.$bus.$emit('message:push', '複製成功', 'success')
    },
    onError () {
      this.$bus.$emit('message:push', '複製失敗', 'danger')
    },
    getcartData () {
      const vm = this
      vm.$store.dispatch('updateLoading', true)

      vm.cartData = JSON.parse(localStorage.getItem('cartData')) || []
      setTimeout(() => {
        vm.$store.dispatch('updateLoading', false)
      }, 1000)
    },
    removeLocalItem (id) {
      this.cartData.forEach((item, keys) => {
        if (item.product_id === id) {
          this.cartData.splice(keys, 1)
          localStorage.setItem('cartData', JSON.stringify(this.cartData))
          this.$bus.$emit('message:push', '已刪除商品', 'danger')
        }
      })
      this.$bus.$emit('localData:update')
    },
    updateQty (id) {
      this.cartData.forEach((item, keys) => {
        if (item.product_id === id) {
          const cartContent = {
            category: item.category,
            content: item.content,
            description: item.description,
            imageUrl: item.imageUrl,
            is_enabled: item.is_enabled,
            product_id: item.id,
            qty: item.qty,
            name: item.name,
            origin_price: item.origin_price,
            price: item.price
          }
          this.cartData.splice(keys, 1, cartContent)
          localStorage.setItem('cartData', JSON.stringify(this.cartData))
        }
      })
    },
    postCarts () {
      this.localCustomer = this.form
      localStorage.setItem('localCustomer', JSON.stringify(this.localCustomer))
      const cacheID = []
      this.$validator.validate().then((result) => {
        if (result) {
          this.axios
            .get(
              `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
            )
            .then((res) => {
              const cacheData = res.data.data.carts
              cacheData.forEach((item) => {
                cacheID.push(item.id)
              })
            })
            .then(async () => {
              await Promise.all(
                cacheID.map((item) =>
                  this.axios
                    .delete(
                      `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${item}`
                    )
                    .then(() => {})
                )
              )
            })
            .then(async () => {
              await Promise.all(
                this.cartData.map((item) => {
                  const cache = {
                    product_id: item.product_id,
                    qty: item.qty
                  }
                  return this.axios
                    .post(
                      `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`,
                      { data: cache }
                    )
                    .then(() => {
                      this.$router.push('/front-end/order-confirm')
                    })
                })
              )
            })
            .then(() => {
              this.cartData = []
              this.$bus.$emit('localData:update')
              this.$bus.$emit('message:push', '加入購物車', 'success')
            })
        }
      })
    },
    useCouponCode () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const coupon = {
        code: vm.coupon_code
      }
      vm.$http
        .post(url, {
          data: coupon
        })
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem(
              'coupon',
              JSON.stringify(response.data.success)
            )

            vm.coupons = true
            vm.getcartData()
            this.$bus.$emit('message:push', '套用成功', 'success')
          } else {
            this.$bus.$emit('message:push', '找不到優惠券', 'danger')
          }
        })
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
    this.$bus.$on('shopCart:update', () => {
      this.getcartData()
    })
    this.getcartData()
  }
}
</script>

<style lang="scss" scoped>
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
    width: 45%;
    margin: 0 2.5%;
    .qty {
      width: 60%;
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
.item-footer {
  width: 100%;
}

.product-filter .product-disabled {
  filter: grayscale(100%);
  cursor: not-allowed;
}
h2 {
  font-size: 30px;
  text-align: center;
}

input[type='number'] {
  text-align: center;
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

.product-wrapper {
  position: relative;
  padding-bottom: 46.5%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 15px -2px rgb(0%, 0%, 0% / 30%);
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  background-image: url('~@/assets/img/swiper-images/1.jpg');

  .product-tag-category {
    padding: 0.15em 0.35em;
    border-radius: 5.33333px;
    background-color: #7e9e7c;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    font-size: 1rem;
  }

  .product-tag-stock {
    padding: 0.15em 0.35em;
    border-radius: 5.33333px;
    background-color: #7e9e7c;
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    font-size: 1rem;
  }

  .product-title {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.5em 0.8em;
    font-size: 20px;
  }

  .product-price {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0.5em 0.8em;
  }

  .btn-outline-primary {
    position: absolute;
    right: 0.5em;
    bottom: 0.5em;
    padding: 0.5em 1em;
    color: #20c997;
    border-color: #20c997;
  }

  &:before {
    background: linear-gradient(
      0deg,
      rgba(18, 17, 46, 0.7) 15%,
      rgba(18, 17, 46, 0) 80%
    );
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
}

.customer-info {
  padding-bottom: 15px;
  border-radius: 0.25rem;

  h2 {
    margin: 0 -15px 15px -15px;
    padding: 0.5rem 0;
  }
}
@media (max-width: 1200px) {
  .customer-info {
    margin-top: 3rem;
  }
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
@media (max-width: 768px) {
  .no-cart {
    display: flex;
    flex-direction: column;
  }
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

@media (max-width: 1140px) {
  input[type='number'] {
    width: 100%;
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
