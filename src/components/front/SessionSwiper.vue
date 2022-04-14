<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide
        class="slide product-filter"
        :key="item.id"
        v-for="item in productsAll"
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
      isDisable: false,
      cartData: JSON.parse(localStorage.getItem('cartData')) || [],
      swiperOptions: {
        autoplay: {
          delay: 3000
        },
        loop: false,

        breakpoints: {
          2560: {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesPerGroup: 2
          },
          1366: {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesPerGroup: 2
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 15,
            slidesPerGroup: 2
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            slidesPerGroup: 1
          },
          576: {
            slidesPerView: 1.2,
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
      } else {
        this.$bus.$emit('message:push', '商品已售完', 'danger')
      }
    },
    addToCart (data) {
      const cacheCarID = []
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
    }
  },
  computed: {
    productsAll () {
      return this.$store.state.productsAll
    }
  },
  created () {
    this.getProductAll()
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

    &:before {
      background: #12112e;
      background: linear-gradient(
        0deg,
        rgba(18, 17, 46, 0.7) 15%,
        rgba(18, 17, 46, 0) 80%
      );
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .product-price {
      display: flex;
      flex-direction: column;
      font-weight: 700;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 0.5em 0.8em;
      span {
        font-size: 1.2rem;
      }
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

    .product-tag-category {
      padding: 0.15em 0.35em;
      border-radius: 5.33333px;
      background-color: #7e9e7c;
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      font-size: 1rem;
      z-index: 99;
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
  }
  .product-disabled {
    filter: grayscale(100%);
    cursor: not-allowed;
  }
}

.swiper-button-prev,
.swiper-button-next {
  font-weight: bold;
  background-color: #fff;
  opacity: .2;
  border-radius: 50%;
  font-size: 1.5rem;
  padding: 0.4rem 1.4rem;
  color: #20c997;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  opacity: .8;
}

.swiper-button-prev:after,
.swiper-container-rtl,
.swiper-button-next:after {
  content: none;
}

@media(any-hover:none){
  .swiper-button-prev,
.swiper-button-next {
  display: none;
}
}
@media(max-width:576px){
  .product-title{
    font-size: 1rem;
    word-break: break-all;
  }
}

</style>
