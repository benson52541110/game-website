<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide
        class="slide product-filter"
        :key="item.id"
        v-for="item in filteredProducts"
      >
        <div
          class="product-wrapper"
          :class="{ 'product-disabled': !item.is_enabled }"
          :style="{ backgroundImage: `url(${item.imageUrl})` }"
          @click="clickProduct(item)"
        >
          <span class="product-tag-category">{{ item.category }}</span>
          <span class="product-tag-stock" v-if="!item.is_enabled"
            >尚無現貨</span
          >
          <div class="product-title mt-1">
            <h5>{{ item.title }}</h5>
          </div>
          <div class="product-price">
            <span class="mb-2 text-danger">特價:{{ item.price }}</span>
            <small>
              <strike class="text-muted">售價:{{ item.origin_price }}</strike>
            </small>
          </div>
          <button
            v-if="item.is_enabled"
            type="button"
            class="btn btn-outline-primary btn-sm ml-auto"
            @click.stop="addToCart(item)"
            :disabled="isDisable"
          >
            <font-awesome-icon icon="fas fa-shopping-cart" />
          </button>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filteredProducts: [],
      cartData: JSON.parse(localStorage.getItem('cartData')) || [],
      isDisable: false,
      swiperOptions: {
        autoplay: {
          delay: 3000
        },
        loop: false,

        breakpoints: {
          2560: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1366: {
            slidesPerView: 2.5,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 15
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          376: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  },
  methods: {
    getProductAll () {
      this.$store.dispatch('getProductAll')
    },
    clickProduct (product) {
      if (product.is_enabled) {
        this.$router.push(`/front-end/front-cart/${product.id}`)
        window.location.reload()
      } else {
        this.$bus.$emit('message:push', '商品已售完', 'danger')
      }
    },
    addToCart (data) {
      const cacheCarID = [] // 暫存 ID 放置處
      this.cartData.forEach((item) => {
        cacheCarID.push(item.product_id)
      })
      if (cacheCarID.indexOf(data.id) === -1) {
        const cartContent = {
          category: data.category,
          content: data.content,
          description: data.description,
          imageUrl: data.imageUrl,
          is_enabled: data.is_enabled,
          product_id: data.id,
          qty: 1,
          name: data.title,
          origin_price: data.origin_price,
          price: data.price
        }
        this.cartData.push(cartContent)
        localStorage.setItem('cartData', JSON.stringify(this.cartData))
        this.$bus.$emit('shopCart:update')
        this.$bus.$emit('message:push', '加入購物車', 'success')
      } else {
        let cache = {}
        this.cartData.forEach((item, keys) => {
          if (item.product_id === data.id) {
            let { qty } = item
            cache = {
              category: data.category,
              content: data.content,
              description: data.description,
              imageUrl: data.imageUrl,
              is_enabled: data.is_enabled,
              product_id: data.id,
              qty: (qty += 1),
              name: data.title,
              origin_price: data.origin_price,
              price: data.price
            }
            this.cartData.splice(keys, 1, cache)
          }
        })
        localStorage.setItem('cartData', JSON.stringify(this.cartData))
        this.$bus.$emit('shopCart:update')
        this.$bus.$emit('message:push', '加入購物車', 'success')
      }
    },
    getcartData () {
      const vm = this
      vm.cartData = JSON.parse(localStorage.getItem('cartData')) || []
    },

    filterProducts () {
      const vm = this
      const { cardId } = vm.$route.params
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${cardId}`
      vm.$http.get(api).then((res) => {
        vm.product = res.data.product
        vm.filteredProducts = vm.productsAll.filter(
          (item) =>
            item.category === vm.product.category &&
            item.title !== vm.product.title
        )
      })
    }
  },
  computed: {
    productsAll () {
      return this.$store.state.productsAll
    }
  },
  created () {
    this.getProductAll()
    this.filterProducts()
    this.$bus.$on('localData:update', () => {
      this.getcartData()
    })
  }
}
</script>

<style lang="scss" scoped>
.product-filter {
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  opacity: 1;
  transform: scale(1) translateY(0);

  .product-wrapper {
    color: #fff;
    position: relative;
    padding-bottom: 46.5%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 15px -2px rgb(0%, 0%, 0% / 30%);
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;

    .product-price {
      display: flex;
      flex-direction: column;
      font-weight: 700;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 0.5em 0.8em;
    }

    .product-tag-category {
      padding: 0.15em 0.35em;
      border-radius: 5.33333px;
      background-color: #7e9e7c;
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      font-size: 1rem;
      z-index: 10;
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

    &:before {
      background: #12112e;
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
      left: 0;
    }
  }

  .product-disabled {
    filter: grayscale(100%);
    cursor: not-allowed;
  }

  .btn-outline-primary {
    position: absolute;
    right: 0.5em;
    bottom: 0.5em;
    padding: 0.5em 1em;
    color: #20c997;
    border-color: #20c997;
      background-color: black;

  }
}

.swiper-button-prev,
.swiper-button-next {
  font-weight: bold;
  background-color: #fff;
  opacity: 0.2;

  border-radius: 50%;
  font-size: 1.5rem;
  padding: 0.4rem 1.4rem;
  color: #20c997;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  opacity: 0.8;
}
.swiper-button-prev:after,
.swiper-container-rtl,
.swiper-button-next:after {
  content: none;
}
@media (any-hover: none) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>
