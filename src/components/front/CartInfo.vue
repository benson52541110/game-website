<template>
  <div class="main-wrapper">
    <section class="main-content">
      <div class="product-info-wrapper">
        <img :src="product.imageUrl" class="img-fluid" :alt="product.title" />
        <!-- 產品資訊面板 -->
        <div class="product-info-panel">
          <div class="scroller-wrapper">
            <h1 class="section-title">{{product.title}}</h1>
            <p class="description-wrapper">{{product.description}}</p>
            <h3 class="product-price">
              <span class="text-primary">優惠${{product.price}}</span>
              <small>
                <s class="text-muted ml-2">${{product.origin_price}}</s>
              </small>
            </h3>
            <div class="form-group">
              <label for>購買數量</label>
              <div class="input-group mt-2">
                <input type="number" class="form-control" v-model.number="qty" min="1" max="10" />
                <div class="input-group-append">
                  <button class="btn btn-primary" @click.stop="addtoCart(product.id,qty)">
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        product: {},
        isLoading: false,
        qty: 1,
      };
    },
    methods: {
      getProduct() {
        const vm = this;
        const id = vm.$route.params.cardId;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
        this.$http.get(api).then((res) => {
          vm.product = res.data.product;
          vm.isLoading = false;
        });
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
      addtoCart(id, qty) {
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
        });
      },
    },
    created() {
      this.getProduct();
      this.getCart();
    }
  };

</script>

<style scoped>
  .main-wrapper {
    width: 80%;
    margin: 0 auto;
  }

  .product-info-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    background-color: #e3d2f4;
  }

  .main-content {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .product-info-wrapper .product-info-panel {
    position: absolute;
    width: 40%;
    max-width: 450px;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 1.5rem;
    background-color: hsla(0, 0%, 100%, .85);
    transition: all .7s cubic-bezier(.645, .045, .355, 1) 0s;
  }

  .section-title {
    position: relative;
    font-weight: 700;
    font-size: 24px;
  }

  .img-fluid,
  .img-thumbnail {
    width: 100%;
    height: auto;
  }

  .scroller-wrapper p {
    display: block;
    margin: 1em 0;
    font-size: 22px;
    line-height: 1.5rem;
  }

  h3 {
    display: block;
    margin: 1em 0;
    font-weight: bold;
  }

  .product-price{
    font-size: 30px;
  }
</style>
