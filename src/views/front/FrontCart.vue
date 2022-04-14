<template>
  <div class="container">
    <PreLoading />
    <button
      type="button"
      class="btn btn-primary filter-btn mb-3 btn-outline-dark"
      data-toggle="modal"
      data-target="#productModal"
    >
      篩選條件
    </button>
    <div
      class="modal"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content border-0">
          <div>
            <div class="search-areal-modal">
              <div class="modal-header bg-primary d-flex align-items-center">
                <font-awesome-icon
                  icon="fa-solid fa-magnifying-glass"
                  class="mr-2"
                />
                <h4
                  class="section-title modal-title text-info"
                  id="exampleModalLabel"
                >
                  條件搜尋
                </h4>
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
                <label for="game-name">遊戲名稱</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="filter.title"
                  placeholder="請輸入遊戲名稱"
                />
                <div class="row">
                  <div class="form-group col-xs-6 col-sm-12">
                    <h5 class="mt-2">類型</h5>
                    <div class="filter-type">
                      <input
                        type="radio"
                        id="all"
                        value=""
                        v-model="filter.category"
                        @change="filterProducts"
                      />
                      <label class="mx-auto" for="all"> 全部 </label>
                    </div>
                    <div
                      class="filter-type"
                      v-for="(item, index) in categoryTag"
                      :key="item"
                    >
                      <input
                        type="radio"
                        :id="`category${index}`"
                        :value="item"
                        v-model="filter.category"
                        @change="filterProducts"
                      />
                      <label class="mx-auto" :for="`category${index}`">{{
                        item
                      }}</label>
                    </div>
                  </div>
                  <div class="form-group col-xs-6 col-sm-12">
                    <h4>價錢</h4>
                    <div class="filter-type">
                      <input
                        type="checkbox"
                        id="onSale"
                        value="onSale"
                        v-model="filter.onSale"
                        @change="filterProducts"
                      />
                      <label for="onSale" class="mx-auto"> 特價 </label>
                    </div>
                    <div class="filter-type">
                      <input
                        type="radio"
                        name="filter_price"
                        id="0up"
                        :value="0"
                        v-model="filter.price"
                        @change="filterProducts"
                      />
                      <label for="0up" class="mx-auto"> 價格不限 </label>
                    </div>
                    <div class="filter-type">
                      <input
                        type="radio"
                        name="filter_price"
                        id="1500low"
                        :value="1500"
                        v-model="filter.price"
                        @change="filterProducts"
                      />
                      <label for="1500low" class="mx-auto"> 1500元以下 </label>
                    </div>
                    <div class="filter-type">
                      <input
                        type="radio"
                        name="filter_price"
                        id="1000low"
                        :value="1000"
                        v-model="filter.price"
                        @change="filterProducts"
                      />
                      <label for="1000low" class="mx-auto"> 1000元以下 </label>
                    </div>
                    <div class="filter-type">
                      <input
                        type="radio"
                        name="filter_price"
                        id="800low"
                        :value="800"
                        v-model="filter.price"
                        @change="filterProducts"
                      />
                      <label for="800low" class="mx-auto"> 800元以下 </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary btn-block"
                  @click="filterProducts"
                  data-dismiss="modal"
                >
                  篩選
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gameCart">
      <div class="row search">
        <div class="col-lg-2 search-area">
          <div class="search-title">
            <h2 class="section-title fas fa-search">條件搜尋</h2>
            <div>
              <label for="game-name">遊戲名稱</label>
              <input
                type="text"
                class="form-control"
                v-model="filter.title"
                placeholder="請輸入遊戲名稱"
              />
            </div>
          </div>

          <div class="row form-group-row mt-2">
            <div class="form-group col-sm-6 col-md-12">
              <h4 class="mt-2">類型</h4>
              <div>
                <div
                  class="filter-type"
                  @click="
                    filterProducts;
                    categoryActive = '';
                  "
                  :class="{ active: categoryActive === '' }"
                >
                  <label class="mx-auto" for="all"> 全部 </label>
                </div>
                <div
                  class="filter-type"
                  v-for="(item, index) in categoryTag"
                  :key="item"
                  @click="
                    filterProducts;
                    categoryActive = item;
                  "
                  :class="{ active: categoryActive === item }"
                >
                  <label class="mx-auto" :for="`category${index}`">{{
                    item
                  }}</label>
                </div>
              </div>
            </div>
            <div class="form-group col-sm-6 col-md-12">
              <h4>價錢</h4>
              <div
                class="filter-type"
                @click="
                  filterProducts;
                  priceActive = 'onSale';
                "
                :class="{ active: priceActive === 'onSale' }"
              >
                <label for="onSale"> 特價 </label>
              </div>
              <div
                class="filter-type"
                @click="
                  filterProducts;
                  priceActive = '0up';
                "
                :class="{ active: priceActive === '0up' }"
              >
                <label for="0up"> 價格不限 </label>
              </div>
              <div
                class="filter-type"
                @click="
                  filterProducts;
                  priceActive = '1500low';
                "
                :class="{ active: priceActive === '1500low' }"
              >
                <label for="1500low"> 1500元以下 </label>
              </div>
              <div
                class="filter-type"
                @click="
                  filterProducts;
                  priceActive = '1000low';
                "
                :class="{ active: priceActive === '1000low' }"
              >
                <label for="1000low"> 1000元以下 </label>
              </div>
              <div
                class="filter-type"
                @click="
                  filterProducts;
                  priceActive = '800low';
                "
                :class="{ active: priceActive === '800low' }"
              >
                <label for="800low"> 800元以下 </label>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-9 col-md-12 offset-lg-1"
          v-if="filteredProducts.length >= 1"
        >
          <template
            v-if="
              filter.title == '' &&
              filter.category == '' &&
              !filter.onSale &&
              filter.price == 0 &&
              type == ''
            "
          >
            <div class="row" v-if="filteredProducts.length >= 1">
              <div
                class="col-md-6 mb-4 product-filter"
                v-for="item in productPage"
                :key="item.id"
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
                    <h4>{{ item.title }}</h4>
                  </div>
                  <div class="product-price">
                    <span class="mb-2 text-danger">特價:{{ item.price }}</span>
                    <small>
                      <strike class="text-muted"
                        >售價:{{ item.origin_price }}</strike
                      >
                    </small>
                  </div>
                  <button
                    v-if="item.is_enabled"
                    type="button"
                    class="btn cart-btn btn-sm ml-auto"
                    @click.stop="addToCart(item)"
                  >
                    <font-awesome-icon icon="fas fa-shopping-cart" />
                  </button>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="row">
              <div
                class="col-md-6 mb-4 product-filter"
                v-for="item in filteredProducts"
                :key="item.id"
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
                    <span class="mb-2">特價:{{ item.price }}</span>
                    <small>
                      <strike class="text-muted"
                        >售價:{{ item.origin_price }}</strike
                      >
                    </small>
                  </div>
                  <button
                    v-if="item.is_enabled"
                    type="button"
                    class="btn cart-btn btn-sm ml-auto"
                    @click.stop="addToCart(item)"
                    :disabled="isDisable"
                  >
                    <font-awesome-icon icon="fas fa-shopping-cart" />
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div
          class="col-lg-10 col-md-12 d-flex flex-column justify-content-center align-items-center"
          v-if="filteredProducts.length < 1"
        >
          <div class="d-flex justify-content-center">
            <img
              src="@/assets/img/product-image/sorry.png"
              alt="noProduct"
              class="w-50"
            />
          </div>
          <h1 class="mt-4">無符合條件的商品</h1>
        </div>
      </div>
    </div>
    <CartIconModal />
    <Pagination
      :pages="pagination"
      @emitPages="getProductPage"
      v-if="
        filter.title == '' &&
        filter.category == '' &&
        !filter.onSale &&
        filter.price == 0
      "
    />
  </div>
</template>

<script>
import $ from 'jquery'
import Pagination from '@/views/ThePagination.vue'
import CartIconModal from '@/components/front/CartIconModal.vue'
import PreLoading from '@/components/front/PreLoading.vue'

export default {
  data () {
    return {
      categoryTag: [],
      productsAll: [],
      cartData: JSON.parse(localStorage.getItem('cartData')) || [],
      type: JSON.parse(localStorage.getItem('type')) || [],
      categoryActive: '',
      priceActive: '',
      filteredProducts: [],
      mainFilter: '',
      isDisable: false,
      filter: {
        title: '',
        category: '',
        onSale: false,
        price: 0
      }
    }
  },
  components: {
    CartIconModal,
    Pagination,
    PreLoading
  },
  methods: {
    getProductPage (page = 1) {
      this.$store.dispatch('getProductPage', page)
    },
    getProductAllCategory () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      vm.$http.get(api).then((response) => {
        vm.productsAll = response.data.products
        const categories = vm.productsAll.map((item) => item.category)
        vm.categoryTag = categories.filter(
          (item, index, array) => array.indexOf(item) === index
        )
        vm.filterProducts()
      })
    },
    filterProducts () {
      const vm = this
      const filterData = vm.filter
      vm.filteredProducts = vm.productsAll

      if (vm.type.length > 0) {
        filterData.category = vm.type
        vm.filteredProducts = vm.filteredProducts.filter(
          (item) => filterData.category === item.category
        )
        localStorage.removeItem('type')
        vm.type = ''
      }

      if (filterData.title.trim().length > 0) {
        vm.filteredProducts = vm.filteredProducts.filter((item) =>
          item.title.toLowerCase().includes(filterData.title)
        )
        vm.type = ''
      }
      if (filterData.category.length > 0) {
        vm.filteredProducts = vm.filteredProducts.filter(
          (item) => filterData.category === item.category
        )
        vm.type = ''
      }

      if (filterData.onSale) {
        vm.filteredProducts = vm.filteredProducts.filter(
          (item) => item.origin_price !== item.price
        )
        vm.type = ''
      }
      if (filterData.price > 0) {
        vm.filteredProducts = vm.filteredProducts.filter(
          (item) => filterData.price > item.price
        )
        vm.type = ''
      }
    },
    openModal () {
      $('#productModal').modal('show')
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
        setTimeout(() => {
        }, 1000)
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
    clickProduct (product) {
      if (product.is_enabled) {
        this.$router.push(`/front-end/front-cart/${product.id}`)
      } else {
        this.$bus.$emit('message:push', '商品已售完', 'danger')
      }
    }
  },

  watch: {
    'filter.title': function filterTitle () {
      this.filterProducts()
    }
  },
  computed: {
    productPage () {
      return this.$store.state.productPage
    },
    pagination () {
      return this.$store.state.pagination
    }
  },
  created () {
    this.getProductAllCategory()
    this.getProductPage()
    this.$bus.$on('localData:update', () => {
      this.getcartData()
    })
  }
}
</script>

<style lang="scss" scoped>
.gameCart {
  display: flex;
  flex-direction: column;
}

.show-search {
  display: none;
}

.search-area,
.search-areal-modal {
  line-height: 2;
}

.filter-btn {
  display: none;
}

@media (max-width: 992px) {
  .show-search {
    display: block;
    height: 20px;
    width: 60px;
    color: black;
  }

  .filter-btn {
    display: block;
  }

  .search-area {
    display: none;
  }

  .modal-content {
    .form-group {
      margin-top: 10px;

      .form-check {
        margin: auto 0;
      }

      .money {
        margin: auto 0;
      }
    }
  }
}

.product-filter {
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  opacity: 1;
  transform: scale(1) translateY(0);

  .product-disabled {
    filter: grayscale(100%);
    cursor: not-allowed;
  }
}

.product-wrapper {
  color: #fff;
  position: relative;
  padding-bottom: 46.5%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 9px 15px -2px rgb(0%, 0%, 0% / 30%);
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;

  &:active {
    box-shadow: 0 9px 15px -2px rgb(0%, 0%, 0% / 30%);
    transform: translateY(6px);
  }

  &:hover {
    transform: scale(1.05);
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

  .product-price {
    display: flex;
    flex-direction: column;
    position: absolute;
    font-weight: 700;
    left: 0;
    bottom: 0;
    padding: 0.5em 0.8em;
  }

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
  }
}

.cart-btn {
  position: absolute;
  right: 0.5em;
  bottom: 0.5em;
  padding: 0.5em 1em;
  color: #20c997;
  font-size: 14px;
  background-color: black;
  border: 2px solid #20c997;

  &:hover {
    background-color: #fff;
  }
}

.filter-type.active {
  background-color: #b4a38a;
}

.filter-type {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  text-align: center;
  padding: 4px 0;
  input {
    display: none;
  }
  &:hover {
    background-color: #b4a38a;
  }

  label {
    display: block;
    width: 100%;
    margin-bottom: 0;
  }
}

.cart-icon {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 10%;
  right: 5%;

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
