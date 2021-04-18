<template>
  <div>
  <div class="my-5 row justify-content-center">
    <div class="col-md-6">
      <table class="table">
        <thead>
          <th></th>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
            <td class="align-middle">
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item.id)">
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
            <td class="align-middle">
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">
                已套用優惠券
              </div>
            </td>
            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="align-middle text-right">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-right">總計</td>
            <td class="text-right">{{ cart.total }}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-right text-success">折扣價</td>
            <td class="text-right text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group mb-3 input-group-sm">
        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
            套用優惠碼
          </button>
        </div>
      </div>
      <router-link to="/frontEnd/OrderForm">
        <button type="button" class="btn btn-primary">開始結帳</button>
      </router-link>
    </div>
  </div>
</div>
</template>
<script>
  import $ from 'jquery';
  
  export default {
    data() {
      return {
        products: [],
        product: {},
        status: {
          loadingItem: '',
        },
        form: {
          user: {
            name: '',
            email: '',
            tel: '',
            address: '',
          },
          message: '',
        },
        cart: {},
        isLoading: false,
        coupon_code: '',
      };
    },
    methods: {
      getProducts() {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
        vm.isLoading = true;
        this.$http.get(url).then((response) => {
          vm.products = response.data.products;
          console.log(response);
          vm.isLoading = false;
        });
      },
      getProduct(id) {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
        vm.status.loadingItem = id;
        this.$http.get(url).then((response) => {
          vm.product = response.data.product;
          $('#productModal').modal('show');
          console.log(response);
          vm.status.loadingItem = '';
        });
      },
      addtoCart(id, qty = 1) {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.status.loadingItem = id;
        const cart = {
          product_id: id,
          qty,
        };
        this.$http.post(url, { data: cart }).then((response) => {
          console.log(response);
          vm.status.loadingItem = '';
          vm.getCart();
          $('#productModal').modal('hide');
        });
      },
      getCart() {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.isLoading = true;
        this.$http.get(url).then((response) => {
          vm.cart = response.data.data;
          console.log(response);
          vm.isLoading = false;
        });
      },
      removeCartItem(id) {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
        vm.isLoading = true;
        this.$http.delete(url).then(() => {
          vm.getCart();
          vm.isLoading = false;
        });
      },
      addCouponCode() {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
        const coupon = {
          code: vm.coupon_code,
        };
        vm.isLoading = true;
        this.$http.post(url, { data: coupon }).then((response) => {
          console.log(response);
          vm.getCart();
          vm.isLoading = false;
        });
      },
      createOrder() {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
        const order = vm.form;
        // vm.isLoading = true;
        this.$validator.validate().then((result) => {
          if (result) {
            this.$http.post(url, { data: order }).then((response) => {
              console.log('訂單已建立', response);
              if (response.data.success) {
                vm.$router.push(`/customer_checkout/${response.data.orderId}`);
              }
              // vm.getCart();
              vm.isLoading = false;
            });
          } else {
            console.log('欄位不完整');
          }
        });
      },
    },
    created() {
      this.getProducts();
      this.getCart();
    },
  };
  </script>
  
