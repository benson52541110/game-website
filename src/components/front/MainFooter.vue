<template>
  <div class="footer">
    <div class="subscribe">
      <p class="text-white subscribe-title">訂閱我們</p>
      <p class="text-white subscribe-title">獲得最新消息及優惠</p>
      <div class="subscribe-button">
        <div class="subscribe-group">
          <input
            type="email"
            class="form-control w-75"
            name="email"
            id="useremail"
            v-model="recentSubscribe"
            v-validate="'email'"
            :class="{ 'is-invalid': errors.has('email') }"
            placeholder="請輸入您的電子信箱"
          />
          <input
            type="button"
            value="訂閱"
            class="btn btn-light"
            name="訂閱按鈕"
            @click.prevent="subscribe"
          />
        </div>
      </div>
      <div class="error">
        <p class="text-danger mb-2" v-if="errors.has('email')">
          電子信箱格式錯誤
        </p>
      </div>
    </div>
    <div
      class="shop-footer d-flex flex-column justify-content-around align-items-center py-2"
    >
      <div class="shop-info">
        <h3 class="text-white mt-4">聯絡我們</h3>
        <p class="text-white mt-4">電話:0913345678</p>
        <p class="text-white mt-4">地址:新北市中和區南山路二段177巷</p>
        <p class="text-white mt-4">E-mail：benson55667788@gmail.com</p>
        <p class="text-white mt-4">營業時間：週一至週五 10:00 – 22:00</p>
        <p class="text-white mt-4">(國定假日不開放)</p>

        <ul class="icon">
          <li>
            <a href="#" @click.prevent>
              <font-awesome-icon
                class="grow"
                icon="fa-brands fa-facebook-square"
              />
            </a>
          </li>
          <li>
            <a href="#" @click.prevent>
              <font-awesome-icon class="grow" icon="fa-brands fa-line" />
            </a>
          </li>
          <li>
            <a href="#" @click.prevent>
              <font-awesome-icon
                class="grow"
                icon="fa-brands fa-instagram-square"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/benson52541110">
              <font-awesome-icon
                class="grow"
                icon="fa-brands fa-github-square"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="shop-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d904.0428824125895!2d121.5030314233426!3d24.99428679928758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5paw5YyX5biC5Lit5ZKM5Y2A5Y2X5bGx6Lev5LqM5q61!5e0!3m2!1szh-TW!2stw!4v1647432083485!5m2!1szh-TW!2stw"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      subscribeEmail: JSON.parse(localStorage.getItem('subscribe')) || [],
      recentSubscribe: ''
    }
  },
  methods: {
    subscribe () {
      this.$validator.validate().then((valid) => {
        const isReapeat = this.subscribeEmail.includes(this.recentSubscribe)
        if (this.recentSubscribe !== '' && valid && !isReapeat) {
          this.subscribeEmail.push(this.recentSubscribe)
          localStorage.setItem('subscribe', JSON.stringify(this.subscribeEmail))

          this.$bus.$emit('message:push', '訂閱成功', 'success')
        } else {
          this.$bus.$emit('message:push', '訂閱失敗', 'danger')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  .subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 25vh;
    min-height: 20rem;
    background-image: url(@/assets/img/login-background.jpg);

    .subscribe-title {
      font-size: 30px;
      font-weight: 700;
    }
    .error {
      height: 1rem;
    }
    .subscribe-button {
      display: flex;
      flex-direction: column;

      .subscribe-group {
        display: flex;
        margin-bottom: 20px;

        .form-control {
          height: 40px;
        }

        .btn {
          height: 40px;
          width: 60px;
          margin-left: 10px;
        }
      }
    }
  }
  .grow {
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
  .shop-footer {
    background-color: #212529;
    .shop-map {
      width: 70%;
      height: 0;
      padding-bottom: 30%;
      position: relative;
      iframe {
        position: absolute;
        height: 90%;
        width: 100%;
      }
    }
  }
  .shop-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;

    .icon {
      display: flex;
      padding-right: 40px;

      a {
        padding: 10px;
        margin: 0 10px;
        border-radius: 50%;
        text-decoration: none;
        color: #6c757d;
        font-size: 40px;
      }
    }
  }
}
</style>
