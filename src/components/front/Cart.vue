<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="gameCart">
      <div class="gameRow">
        <div class="col-lg-2">
          <div class="sticky-top search-area">
            <h4 class="section-title">
              <i class="search fas fa-search"></i>條件搜尋</i>
            </h4>
            <div class="form-group">
              <label for="game-name">遊戲名稱</label>
              <input type="text" class="form-control" v-model="filter.title" placeholder="請輸入遊戲名稱" />
            </div>
            <div class="form-group">
              <label for="">類型</label>
              <div class="filter-type"  v-for="(item,index) in categoryTag" :key="item">
                <input type="checkbox" :id="`category${index}`" :value="item" v-model="filter.category">
                <label class="form-check pl-2" :for="`category${index}`">{{item}}</label>
              </div>
            </div>
            <div class="form-group">
              <label for="">價錢</label>
              <div class="filter-type">
                <label for="form-check">
                  <input type="checkbox" name id="onsale" value="onSale" v-model="filter.onSale" />
                  特價
                </label>
              </div>
              <div class="filter-type">
                <label for="form-check">
                  <input type="radio" name="filter_price" id="0up" :value="0" v-model="filter.price" /> 價格不限
                </label>
              </div>
              <div class="filter-type">
                <label for="form-check">
                  <input type="radio" name="filter_price" id="500low" :value="500" v-model="filter.price" /> 500元以下
                </label>
              </div>
              <div class="filter-type">
                <label for="form-check">
                  <input type="radio" name="filter_price" id="300low" :value="300" v-model="filter.price" /> 300元以下
                </label>
              </div>
              <div class="filter-type">
                <label for="form-check">
                  <input type="radio" name="filter_price" id="150low" :value="150" v-model="filter.price" /> 150元以下
                </label>
              </div>
            </div>
            <button type="button" class="btn btn-secondary btn-block" @click="filterProducts">篩選</button>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="form-row">
            <div class="col-lg-4 mb-4 product-filter" v-for="item in filteredProducts" :key="item.id">
              <div class="product-wrapper" :class="{'product-disabled':!item.is_enabled}"
                :style="{backgroundImage: 'url(' + item.imageUrl + ')'}" @click="clickProduct(item)">
                <span class="product-tag" v-if="item.is_enabled">{{item.category}}</span>
                <span class="product-tag" v-else>尚無現貨</span>
                <div class="product-title mt-1">
                  <h5>{{item.title}}</h5>
                </div>
                <div class="product-price">
                  <span class="mb-2">特價:{{item.price}}</span>
                  <small>
                    <s class="text-muted">售價:{{item.origin_price}}</s>
                  </small>
                </div>
                <button v-if="item.is_enabled" type="button" class="btn btn-outline-primary btn-sm ml-auto"
                  @click.stop="addtoCart(item.id)">
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  export default {
    data() {
      return {
        categoryTag: [],
        products: [],
        filteredProducts: [],
        isLoading: false,
        filter: {
          title: '',
          category: [],
          onSale: false,
          price: 0,
        },
      }
    },
    methods: {
      getProducts() {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
        vm.isLoading = true;
        this.$http.get(url).then((response) => {
          vm.products = response.data.products;
          const categories = response.data.products.map((item) => item.category);
          vm.categoryTag = categories.filter(
            (item, index, array) => array.indexOf(item) === index,
          );
          vm.filterProducts();
          vm.isLoading = false;
        });
      },
      filterProducts() {
        const vm = this;
        const filterData = vm.filter;
        vm.filteredProducts = vm.products;

        // 篩選名字
        if (filterData.title !== '') {
          vm.filteredProducts = vm.filteredProducts.filter((item) => item.title.toLowerCase().includes(filterData.title
            .toLowerCase()));
        }

        // 篩選分類
        if (filterData.category.length > 0) {
          vm.filteredProducts = vm.filteredProducts.filter((item) => filterData.category.some((categoryTag) =>
            categoryTag === item.category));
        }

        // 篩選特價
        if (filterData.onSale) {
          vm.filteredProducts = vm.filteredProducts.filter(
            (item) => item.origin_price !== item.price,
          );
        }

        // 篩選價格
        if (filterData.price > 0) {
          vm.filteredProducts = vm.filteredProducts.filter(
            (item) => filterData.price > item.price,
          );
        }
      },
      getCart() {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.isLoading = true;
        this.$http.get(url).then((response) => {
          vm.cart = response.data.data;
          vm.isLoading = false;
        });
      },

      addtoCart(id, qty = 1) {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        const cart = {
          product_id: id,
          qty,
        };
        this.$http.post(url, {
          data: cart
        }).then((response) => {
          vm.getCart();
          $('#productModal').modal('hide');
        });
      },
      clickProduct(product) {
        if (product.is_enabled) {
          this.$router.push(`/frontEnd/Cart/${product.id}`);
        } else {
          this.$bus.$emit('messsage:push', '商品已售完', 'danger');
        }
      },
    },
    created() {
      this.getProducts();
      this.getCart();
    },
  };

</script>

<style scoped>
  .gameCart {
    width: 80%;
    margin: 0 auto;
  }

  .gameRow {
    display: flex;
    justify-content: center;
  }

  .search-area {
    line-height: 2;
  }

  .product-filter {
    transition: all .5s cubic-bezier(.645,.045,.355,1) 0s;
    opacity: 1;
    transform: scale(1) translateY(0);
}

  .product-wrapper {
    position: relative;
    padding-bottom: 46.5%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 15px -2px rgb(0 0 0 / 30%);
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    background-image: url('~@/assets/swiper-images/1.jpg');
  }

  .product-wrapper::before {
    background: #12112e;
    background: linear-gradient(0deg, rgba(18, 17, 46, .7) 15%, rgba(18, 17, 46, 0) 80%);
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  .product-wrapper .product-tag {
    padding: .15em .35em;
    border-radius: 5.33333px;
    background-color: #6527a0;
    color: #fff;
    position: absolute;
    right: .5rem;
    top: .5rem;
    font-size: 1rem;
  }


  .product-wrapper .product-title {
    position: absolute;
    left: 0;
    top: 0;
    padding: .5em .8em;
    color: #fff;
    font-size: 20px;
  }


  .product-wrapper .product-price {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: .5em .8em;
    color: rgb(248, 192, 192);
  }

  .btn-outline-primary {
    position: absolute;
    right: .5em;
    bottom: .5em;
    padding: .5em 1em;
    color: #20c997;
    border-color: #20c997;
  }

  .filter-type {
    display: flex;
    align-items: center;
  }

</style>
