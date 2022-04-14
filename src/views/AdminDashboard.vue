<template>
  <div>
    <AdminNavbar />
    <AlertMessage />
    <div class="container-fluid">
      <div class="row">
        <AdminSidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from '../components/admin/AdminSidebar.vue'
import AdminNavbar from '../components/admin/AdminNavbar.vue'
import AlertMessage from '../views/AlertMessage.vue'

export default {
  components: {
    AdminSidebar,
    AdminNavbar,
    AlertMessage
  },
  created () {
    /* 將在前端存放的cookie往後端發送 */
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = myCookie
  }
}
</script>
