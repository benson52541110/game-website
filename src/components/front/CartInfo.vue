<template>
    <div class="main-wrapper">
      <section class="p-4 mb-3 main-content">
        <div class="product-info-wrapper">
        <img :src="product.imageUrl" class="img-fluid mb-3" :alt="product.title" />
          <!-- 產品資訊面板 -->
          <div class="product-info-panel">
            <div class="scroller-wrapper">
              <h1 class="section-title">{{product.title}}</h1>
              <p class="description-wrapper">{{product.description}}</p>
              <h3 v-if="product.price === product.origin_price">售價${{product.price}}</h3>
              <h3 v-else>
                <span class="text-primary mr-1">優惠${{product.price}}</span>
                <small>
                  <s class="text-muted">${{product.origin_price}}</s>
                </small>
              </h3>
              <div class="form-group">
                <label for>購買數量</label>
                <div class="input-group">
                  <input type="number" class="form-control" v-model.number="qty" min="1" max="10" />
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary"
                      :class="{'disabled': btnLoading}"
                      @click="addToCart"
                    >
                      <i v-if="btnLoading" icon="circle-notch" class="fa-spin" />加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 展開按鈕 -->
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
      isWatching: false,
      btnLoading: false,
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
        console.log(vm.product);
        vm.isLoading = false;
      });
    },
    addToCart() {
      this.$bus.$emit('cart:addToCart', this.product, this.qty);
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style scoped>
    .main-wrapper{
        width: 70%;
        margin: 0 auto;
    }
    .product-info-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    background-color: #e3d2f4;
    }
    .main-content{
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
    background-color: hsla(0,0%,100%,.85);
    transition: all .7s cubic-bezier(.645,.045,.355,1) 0s;
}
.section-title {
    position: relative;
    font-weight: 700;
}
.img-fluid, .img-thumbnail {
    width: 100%;
    height: auto;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 20px;
}
h3{
  display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
</style>