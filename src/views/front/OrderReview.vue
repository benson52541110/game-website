<template>
  <div class="container">
    <div class="row order">
      <div class="order-info">
        <label for="orderInfo" class="orderInfo">
          <h1>請輸入訂單號碼：</h1>
          <div class="order-input mt-2">
            <input
              type="text"
              id="orderInfo"
              class="form-control"
              v-model="orderId"
              @keyup.enter="toOrder"
            />
            <button
              type="button"
              value="確認"
              class="btn btn-danger ml-2"
              name="訂單確認"
              @click="toOrder"
            >
              確認
            </button>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: ''
    }
  },
  methods: {
    toOrder () {
      this.$router.push(`/front-end/order-review/${this.orderId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
}
.order {
  display: flex;
  flex-direction: column;
  h1 {
  font-size: 25px;
}
}
.order-info {
  display: flex;
}
.order-input {
  display: flex;
  .btn {
    height: 38px;
    width: 8rem;
  }
}
</style>
