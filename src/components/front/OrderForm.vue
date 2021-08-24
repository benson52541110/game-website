<template>
    <div>
        <div class="my-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="createOrder">
              <div class="form-group">
                <label for="useremail" class="mb-2">電子信箱</label>
                <input type="email" class="form-control" name="email" id="useremail"
                  v-validate="'required|email'"
                  :class="{'is-invalid': errors.has('email')}"
                  v-model="form.user.email" placeholder="請輸入 Email">
                <span class="text-danger" v-if="errors.has('email')">
                  {{ errors.first('email') }}
                </span>
              </div>
      
              <div class="form-group">
                <label for="username" class="mb-2">收件人姓名</label>
                <input type="text" class="form-control" name="name" id="username"
                  :class="{'is-invalid': errors.has('name')}"
                  v-model="form.user.name" v-validate="'required'" placeholder="輸入姓名">
                <span class="text-danger" v-if="errors.has('name')">請輸入姓名</span>
              </div>
      
              <div class="form-group">
                <label for="usertel" class="mb-2">收件人電話</label>
                <input type="tel" class="form-control" id="usertel"
                  v-model="form.user.tel" placeholder="請輸入電話">
                  <span class="text-danger" v-if="errors.has('address')">請輸入電話欄位</span>
              </div>
      
              <div class="form-group">
                <label for="useraddress" class="mb-2">收件人地址</label>
                <input type="address" class="form-control" name="address"
                  :class="{'is-invalid': errors.has('address')}"
                  id="useraddress" v-model="form.user.address" v-validate="'required'"
                  placeholder="請輸入地址">
                <span class="text-danger" v-if="errors.has('address')">請輸入地址欄位</span>
              </div>
      
              <div class="form-group">
                <label for="useraddress" class="mb-2">留言</label>
                <textarea name="" id="" class="form-control" cols="30" rows="10"
                  v-model="form.message"></textarea>
              </div>
              <div class="text-right">
                <button class="btn btn-danger">送出訂單</button>
              </div>
            </form>
          </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery';
    
    export default {
      data() {
        return {
          form: {
            user: {
              name: '',
              email: '',
              tel: '',
              address: '',
            },
            message: '',
          },
        };
      },
      methods: {
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
    };
    </script>
    