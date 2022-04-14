<template>
  <div class="container">
    <div
      class="modal"
      id="cartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-primary text-info">
            <h1 class="modal-title" id="exampleModalLabel">購物車清單</h1>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-dark">
            <div>
              <div
                class="col-12 my-5 cart-none"
                v-if="cartData.length < 1"
              >
                <h3 class="mb-5 text-center">您的購物車內還沒有任何商品！</h3>
                <router-link
                  class="btn btn-success cursor-pointer"
                  data-dismiss="modal"
                  to="/front-end/front-cart"
                  >快來逛逛
                </router-link>
              </div>
             <template v-if="cartData.length >= 1">
        <div
          class="col-12 test-list"
          v-for="item in cartData"
          :key="item.id"
        >
          <div class="item-image">
            <img :src="item.imageUrl" alt="product" />
            <p class="mt-2">{{ item.price | currency }}</p>
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
                class="form-control text-center"
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
            <p>{{ item.price * item.qty }}</p>
          </div>
          <DeleteProduct @deleteItem="removeLocalItem(item.product_id)"></DeleteProduct>

        </div>
        <div
          class="col-12 d-flex flex-column text-danger item-footer align-items-center"
        >

          <div class="total-price d-flex mt-4">
            <p>總計:</p>
            <p>{{ totalCart | currency }}</p>
          </div>

        </div>
      </template>
            </div>
          </div>
          <div
            class="modal-footer"
            v-if="cartData.length >= 1"
          >
            <router-link
              class="btn btn-primary cursor-pointer font-weight-bold"
              data-dismiss="modal"
              to="/front-end/order-check"
              >結帳去
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-icon">
      <a href="#" data-toggle="modal" data-target="#cartModal">
        <img src="@/assets/img/product-image/gameIcon.png" alt="shopCartIcon" />
        <span v-if="cartData.length >= 1">{{
          cartData.length
        }}</span>
      </a>
    </div>
    <div class="scrollToTop mt-4">
      <img
        src="@/assets/img/ScrollToTop.png"
        alt="ScrollToTopIcon"
        v-if="btnFlag"
        class="go-top"
        @click="backTop"
      />
    </div>
  </div>
</template>

<script>
import DeleteProduct from '@/components/front/DeleteProduct.vue'

export default {
  data () {
    return {
      cartData: JSON.parse(localStorage.getItem('cartData')) || [],
      btnFlag: true
    }
  },
  components: {
    DeleteProduct
  },
  methods: {
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
    getCartData () {
      const vm = this
      vm.cartData = JSON.parse(localStorage.getItem('cartData')) || []
    },
    backTop () {
      const vm = this
      const timer = setInterval(() => {
        const ispeed = Math.floor(-vm.scrollTop / 5)
        document.body.scrollTop = vm.scrollTop + ispeed
        document.documentElement.scrollTop = document.body.scrollTop
        if (vm.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    // 計算距離頂部的高度，高度大於60顯示圖示，小於60隱藏
    scrollToTop () {
      const vm = this
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      vm.scrollTop = scrollTop
      if (vm.scrollTop > 60) {
        vm.btnFlag = true
      } else {
        vm.btnFlag = false
      }
    }
  },
  computed: {
    totalCart () {
      return this.cartData.reduce(
        (total, item) => total + item.price * item.qty,
        0
      )
    }
  },
  created () {
    this.getCartData()
    this.$bus.$on('shopCart:update', () => {
      this.getCartData()
    })
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
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
}.test-list {
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
.go-top {
  position: fixed;
  bottom: 20px;
  right: 31px;
  z-index: 80;
  width: 45px;
  height: 45px;
  cursor: pointer;
  border-radius: 90%;
}

.modal-title {
  font-size: 20px;
}

.modal-body {
  margin: auto;

  .cart-none {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.cart-icon {
  position: fixed;
  bottom: 70px;
  right: 35px;
  z-index: 99;

  img {
    width: 50px;
    height: auto;
  }

  span {
    position: absolute;
    color: white;
    width: 1.5em;
    height: 1.5em;
    text-align: center;
    line-height: 1.5em;
    background-color: red;
    border-radius: 50%;
  }
}

.cartIcon-qty {
  display: flex;
}

@media (max-width: 576px) {
  .cartIcon-qty {
    flex-direction: column;
    width: 50%;
    margin: auto;
  }
}
</style>
