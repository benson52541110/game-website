<template>
  <div>
  <div class="my-5 row justify-content-center">
    <div class="col-md-6">
      <table class="table">
        <thead>
          <th>品項</th>
          <th>數量</th>
          <th>單價</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
            
            <td class="align-middle">
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">
                已套用優惠券
              </div>
            </td>
            <td>
              <div class="input-group">
                <div class="input-group-prepend">
                  <button
                    class="btn btn-light"
                    :disabled="item.qty <= 1"
                    type="button"
                    @click="item.qty--"
                  >
                    <font-awesome-icon icon="minus" />
                  </button>
                </div>
                <input type="number" class="form-control" min="0" v-model.number="item.qty" style="width:2px;"/>
                <div class="input-group-append">
                  <button class="btn btn-light" type="button" @click="item.qty++">
                    <font-awesome-icon icon="plus" />
                  </button>
                </div>
              </div>
            </td>
            <td class="align-middle" >{{ item.product.price | currency}}</td>
            <td class="align-middle">
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item.id)">
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
            
          </tr>
        </tbody>
        <tfoot >
          <tr >
            <td colspan="2" class="text-right">總計</td>
            <td class="">{{ totalCart | currency}}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-right text-success">折扣價</td>
            <td class="text-right text-success">{{ cart.final_total | currency}}</td>
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
        cart: {},
        cartItem:[],
        isLoading: false,
        coupon_code: '',
      };
    },
    methods: {
      getCart() {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.isLoading = true;
        this.$http.get(url).then((response) => {
          vm.cart = response.data.data;
          vm.cartItem = vm.cart.carts;
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
          vm.getCart();
          vm.isLoading = false;
        });
      },
    },
    computed: {
    totalCart() {
      return this.cartItem.reduce(
        (total, item) => total + item.product.price * item.qty,
        0,
      );
    },
  },
    created() {
      this.getCart();
    },
  };
  </script>
  
