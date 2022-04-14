<template>
  <div class="login">
    <div class="login-container">
      <form class="form-signIn" @submit.prevent="signIn">
        <h3 class="mb-3 font-weight-normal">管理員登入</h3>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          v-model="user.username"
          required
          autofocus
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          v-model="user.password"
          placeholder="Password"
          required
        />

        <button class="btn btn-lg btn-primary btn-block" type="submit">
          登入
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          /* 將token&expired 存放在前端 */
          const { token } = response.data
          const { expired } = response.data

          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          vm.$router.push('/admin/admin-products')
        }
      })
    }
  }
}
</script>
