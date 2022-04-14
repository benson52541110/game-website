<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <router-link to="/front-end/front-main" class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
        遊任有魚
      </router-link>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signout () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/logout`
      vm.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.$router.push('/admin-login')
        }
      })
    }
  }
}
</script>
