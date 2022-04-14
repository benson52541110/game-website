<template>
  <div>
    <div class="container card-info bg-yellow">
      <PreLoading />
      <div class="row content text-info">
        <div class="col-md-6 product-image align-content-center">
          <div class="row image-content justify-content-center">
            <div>
              <img
                :src="product.imageUrl"
                class="img-fluid px-2 py-2"
                :alt="product.title"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 product-info text-info">
          <h2 class="game-title">遊戲介紹</h2>
          <div class="flex-grow-1 my-auto d-flex align-items-center">
            <p class="description text-center">{{ product.description }}</p>
          </div>
        </div>
      </div>
      <div class="row price-content text-info">
        <div class="col-md-6 product-simple">
          <h1 class="product-title">{{ product.title }}</h1>
          <div class="product-price">
            <strike class="text-muted"
              >原價 ${{ product.origin_price }}元</strike
            >
            <span class="text-danger discount"
              >優惠 ${{ product.price }}元</span
            >
          </div>
        </div>
        <div class="col-md-6 qty mt-3 d-flex justify-content-center">
          <h4 class="my-auto mr-3">購買數量</h4>
          <input
            type="number"
            class="qty-input form-control w-auto my-auto mr-3 text-center"
            v-model.number="qty"
            min="1"
            max="100"
          />
          <button
            type="button"
            class="btn btn-primary align-self-end my-auto"
            @click.stop="addToCart(product, qty)"
          >
            加入購物車
          </button>
        </div>
      </div>
      <div class="row rule-content text-info">
        <div class="rule">
          <h2>【配送及相關說明】</h2>
          <p>
            線上購物的消費者，都可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀。
          </p>
          <h2>寄送時間 :</h2>
          <p>
            全島24h到貨，遲到提供100元現金積點。全年無休，週末假日照常出貨。
          </p>
          <h2>送貨方式 :</h2>
          <p>
            透過宅配送達。除網頁另有特別標示外，均為常溫配送。
            消費者訂購之商品若經配送兩次無法送達，再經本公司以電話與Email均無法聯繫逾三天者，本公司將取消該筆訂單，並且全額退款。
          </p>
          <h2>送貨範圍 :</h2>
          <p>
            限台灣本島與離島地區註，部分離島地區包括連江馬祖、綠島、蘭嶼、琉球鄉…等貨件，將送至到岸船公司碼頭，需請收貨人自行至碼頭取貨。注意！收件地址請勿為郵政信箱。
          </p>
          <h2>售後服務電話 :</h2>
          <p>02-33456789</p>
        </div>
      </div>
    </div>
    <div class="swiper">
      <h2 class="swiperTitle">類似商品:</h2>
      <ProductSwiper class="productSwiper" />
      <CartIconModal />
    </div>
  </div>
</template>

<script>
import CartIconModal from '@/components/front/CartIconModal.vue'
import ProductSwiper from '@/components/front/ProductSwiper.vue'
import PreLoading from '@/components/front/PreLoading.vue'

export default {
  data () {
    return {
      qty: 1,
      cartData: JSON.parse(localStorage.getItem('cartData')) || []
    }
  },
  components: {
    CartIconModal,
    ProductSwiper,
    PreLoading
  },
  methods: {
    getProduct () {
      this.$store.dispatch('getProduct')
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
          qty: this.qty,
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
              qty: (qty += this.qty),
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
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.getProduct()
    this.$bus.$on('localData:update', () => {
      this.getcartData()
    })
  }
}
</script>

<style lang="scss" scoped>
.card-info {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.rule-content {
  font-size: 1rem;
  padding: 1rem;

  .rule h2 {
    padding: 10px 0;
    font-weight: 600;
  }
}

.price-content {
  border-bottom: 1px solid gray;
}

.swiperTitle {
  font-size: 2rem;
  font-weight: 700;
}

.swiper {
  margin: 60px;
}

.product-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10px;

  .img-fluid {
    max-width: 100%;
    height: auto;
  }
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 10px;

  .game-title {
    font-weight: 700;
    font-size: 35px;
    text-align: center;
    padding-top: 20px;
  }

  .description {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  .qty-input {
    margin-bottom: 10px;
  }
}

.product-simple {
  .product-title {
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    padding: 20px 0;
  }

  .product-price {
    margin: 1em 0;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    .discount {
      font-size: 30px;
    }
  }
}

@media (max-width: 768px) {
  .product-title {
    margin-top: 20px;
  }

  .product-price {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    .discount {
      margin-top: 15px;
    }
  }
}
</style>
