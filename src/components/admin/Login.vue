<template>
  <div class="login">
     <div class="container">
      <form class="form-signin" @submit.prevent="signin">
        <h3 class="mb-3 font-weight-normal">管理員登入</h3>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control"
          placeholder="Email address" v-model="user.username" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword"
          class="form-control" v-model="user.password" placeholder="Password" required>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" class="remember"><a> </a>
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
      </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.APIPATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/admin/products');
        }
      });
    },
  },
};
</script>
