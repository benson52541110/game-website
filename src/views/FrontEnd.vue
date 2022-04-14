<template>
  <div>
    <FrontNav />
    <AlertMessage />
    <Router-view class="main-view" />
    <MainFooter />
  </div>
</template>

<script>
import FrontNav from '../components/front/FrontNav.vue'
import MainFooter from '../components/front/MainFooter.vue'
import AlertMessage from '../views/AlertMessage.vue'

export default {
  components: {
    FrontNav,
    MainFooter,
    AlertMessage
  }
}
</script>

<style lang="scss" scope>
.main-view {
  margin-top: 72px;
}
</style>
