<template>
  <div>
    <div class="container">
      <div class="row my-5 justify-content-center">
        <div class="col-md-7 col-12">
          <div class="row step">
            <div class="col-6 col-lg text-center step-point-line ">
              <span
                class="bg-grass px-4 py-2 rounded-pill text-dark mb-3 d-inline-block"
              >
                STEP 1
              </span>
              <p>填寫訂單</p>
            </div>
            <div class="col-6 col-lg text-center step-point-line ">
              <span
                class="border bg-grass px-4 py-2 rounded-pill text-info mb-3 d-inline-block"
              >
                STEP 2
              </span>
              <p>送出訂單</p>
            </div>
            <div class="col-6 col-lg text-center step-point-line ">
              <span
                class="border bg-grass px-4 py-2 rounded-pill text-info mb-3 d-inline-block"
              >
                STEP 3
              </span>
              <p>確認付款</p>
            </div>
            <div class="col-6 col-lg text-center">
              <span
                class="border bg-deepGrass px-4 py-2 rounded-pill text-info mb-3 d-inline-block"
              >
                STEP 4
              </span>
              <p>完成付款</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-9 text-center success-block">
          <h1 class="text-success mb-5 aboutus">已成功付款！</h1>
          <label for="order" class="h5 text-center copy">
            訂單編號
            <input
              id="order"
              class="form-control mt-3 cursor-pointer pr-5"
              :class="{ 'is-valid': copydown }"
              type="text"
              v-model="orderId"
              @click="doCopy"
            />
            <p class="text-success h6 mt-2" v-if="copydown">
              已成功複製訂單編號
            </p>
            <font-awesome-icon
              icon="fa-solid fa-clipboard"
              class="clipboard mr-2"
              @click="doCopy"
              v-else
            />
          </label>
        </div>
      </div>
      <div class="row justify-content-center mb-5 checklist">
        <div class="col-12 justify-content-center d-flex">
          <div class="row no-gutters">
            <div class="col text-center">
              <router-link
                class="btn btn-info text-white"
                to="/front-end/order-review"
              >
                <h4>查看訂單</h4>
                <font-awesome-icon icon="fa-solid fa-arrow-left" />
              </router-link>
            </div>
            <div class="col text-center">
              <router-link
                class="btn btn-lake text-white"
                to="/front-end/front-cart"
              >
                <h4>繼續逛逛</h4>
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </router-link>
            </div>
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
      orderId: '',
      copydown: false
    }
  },
  methods: {
    doCopy () {
      const vm = this
      this.$copyText(this.orderId)
      vm.copydown = true
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
  }
}
</script>

<style lang="scss" scoped>
.checklist h4 {
  white-space: nowrap;
}
.copy {
  position: relative;
}

.copy i {
  position: absolute;
  right: 15px;
  bottom: 10px;
}

.copy .clipboard {
  position: absolute;
  right: 5px;
  bottom: 10px;
  cursor: pointer;
}

.success-block {
  position: relative;
  z-index: 0;
}

.cursor-pointer {
  cursor: pointer;
}

.step {
  z-index: 1;
  position: relative;

  .step-point {
    position: relative;

    &:before {
      content: "";
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
      content: "";
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

.btn-lake {
  background-color: #75b9be;
}
</style>
