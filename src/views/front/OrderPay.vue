<template>
  <div class="container">
    <div class="row my-5 justify-content-center">
      <div class="col-md-7 col-12">
        <div class="row step">
          <div class="col-6 col-lg text-center step-point-line">
            <span
              class="bg-grass px-4 py-2 rounded-pill text-dark mb-3 d-inline-block"
            >
              STEP 1
            </span>
            <p>填寫訂單</p>
          </div>
          <div class="col-6 col-lg text-center step-point-line">
            <span
              class="border bg-grass px-4 py-2 rounded-pill text-info mb-3 d-inline-block"
            >
              STEP 2
            </span>
            <p>送出訂單</p>
          </div>
          <div class="col-6 col-lg text-center step-point-line step-point">
            <span
              class="border bg-deepGrass px-4 py-2 rounded-pill text-info mb-3 d-inline-block"
            >
              STEP 3
            </span>
            <p>確認付款</p>
          </div>
          <div class="col-6 col-lg text-center">
            <span
              class="border bg-grass px-4 py-2 rounded-pill text-info mb-3 d-inline-block"
            >
              STEP 4
            </span>
            <p>完成付款</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5 mb-5">
      <div class="card px-4 py-4 bg-yellow">
        <h3 class="py-3">信用卡資訊</h3>
        <div class="row gx-3">
          <div class="col-12">
            <div class="d-flex flex-column">
              <p class="text mb-1">持卡人姓名</p>
              <input
                class="form-control mb-3"
                type="text"
                placeholder="Name"
                value="Barry Allen"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="d-flex flex-column">
              <p class="text mb-1">卡片號碼</p>
              <input
                class="form-control mb-3"
                type="text"
                placeholder="1234 5678 435678"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex flex-column">
              <p class="text mb-1">到期日</p>
              <input
                class="form-control mb-3"
                type="text"
                placeholder="MM/YYYY"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex flex-column">
              <p class="text mb-1">安全碼</p>
              <input
                class="form-control mb-3 pt-2"
                type="password"
                placeholder="***"
              />
            </div>
          </div>
          <div class="col-12 text-right">
            <button
              type="button"
              @click="payOrder"
              class="btn btn-outline-secondary"
            >
              確認付款
            </button>
          </div>
        </div>
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
    payOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/front-end/order-completed/${vm.orderId}`)
          this.$bus.$emit('message:push', '付款成功', 'success')
        } else {
          this.$bus.$emit('message:push', '付款失敗', 'danger')
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
  }
}
</script>

<style lang="scss" scoped>
.step {
    position: relative;
  z-index: 1;

  .step-point {
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      z-index: -1;
      right: 50px;
      top: 16px;
      width: 10px;
      height: 10px;
      background-color: rgb(168, 216, 185);
      border-radius: 500px;
      animation-name: point;
      animation-duration: 2s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
    }
  }

  .step-point-line {
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      z-index: -2;
      right: -80px;
      top: 20px;
      width: 180px;
      height: 2px;
      border-bottom: 2px solid rgb(240, 243, 241);
    }
  }
}
.card {
  border: 1px solid black;
}
@media (max-width: 992px) {
  .step {
    .step-point {
      &:before {
        display: none;
      }
    }
    .step-point-line {
      &:after {
        display: none;
      }
    }
  }
}
.bg-grass {
  background-color: #eaffe9;
}

@keyframes point {
  0% {
    transform: translateX(0px);
    opacity: 0;
  }

  1% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateX(9rem);
    opacity: 1;
  }
}
</style>
