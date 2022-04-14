<template>
  <div>
    <PreLoading />
    <div class="homeBanner d-flex align-items-center">
      <div
        class="container-md text-center d-flex flex-column align-items-center"
      >
        <h2 class="typing">帶你找回童年的悸動...</h2>
        <h4 class="title mt-2">歡迎來到我的遊戲網站</h4>
        <router-link
          to="/front-end/new-product"
          class="text-white btn btn-outline-light px-4 mt-2 new-btn"
        >
          新作評測
        </router-link>
      </div>
    </div>
    <div class="container">
      <CartIconModal />
    </div>
    <div class="container">
      <div class="about" data-aos="fade-up" data-aos-duration="2000">
        <h2>關於我們</h2>
        <p>我們致力於提供第一手的遊戲資訊，以及最優惠的價格</p>
      </div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <ol class="carousel-indicators my-auto">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img
              src="@/assets/img/swiper-images/1.jpg"
              class="d-block w-100"
              alt="swiperImage1"
            />
            <router-link to="/front-end/new-product">
              <div
                class="carousel-text d-flex flex-column justify-content-center"
              >
                <h2>最新評論</h2>
                <h3>給你最即時的遊戲資訊</h3>
              </div>
            </router-link>
            <div class="line"></div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img
              src="@/assets/img/swiper-images/2.jpg"
              class="d-block w-100"
              alt="swiperImage2"
            />
            <router-link to="/front-end/front-cart">
              <div
                class="carousel-text d-flex flex-column justify-content-center"
              >
                <h2>購物資訊</h2>
                <h3>提供優惠多樣的產品資訊</h3>
              </div>
            </router-link>
            <div class="line"></div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img
              src="@/assets/img/swiper-images/3.jpg"
              class="d-block w-100"
              alt="swiperImage3"
            />
            <div
              class="carousel-text d-flex flex-column justify-content-center"
            >
              <h2>訂閱電子報</h2>
              <h3>訂閱我們，收到第一手的遊戲快報</h3>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="news">
        <h2 data-aos="fade-up" data-aos-duration="2000">最新消息</h2>
        <div class="row" data-aos="fade-up" data-aos-duration="2000">
          <div class="col-12 col-lg-5">
            <img
              class="w-100"
              src="@/assets/img/news-images/mario.jpg"
              alt="marioNews"
            />
          </div>
          <div class="col-12 col-lg-7 d-flex flex-column">
            <h3>超級瑪利歐派對 收錄歷代破百小遊戲</h3>
            <h5 class="my-3">
              <font-awesome-icon
                icon="fa-solid fa-calendar-days"
                class="mr-1"
              />
              2021年6月16日
              <font-awesome-icon icon="fa-solid fa-tags" class="ml-1" />
              動作冒險、友情破壞
            </h5>
            <p>
              任天堂於今（16）日的「Nintendo Direct E3」上， 公開了
              《超級瑪利歐派對》系列最新作《超級瑪利歐派對 超級巨星》（Mario
              Party Superstars）。 《超級瑪利歐派對
              超級巨星》玩法也和歷代一樣，使用類似「大富翁」的玩法，四人之前彼此搶奪與賺取金幣和星星，以星星最多者獲勝。
            </p>
            <button
              type="button"
              class="btn btn-secondary align-self-end align-self-lg-start"
            >
              閱讀更多
            </button>
          </div>
        </div>
        <div class="row mt-4" data-aos="fade-up" data-aos-duration="2000">
          <div class="col-12 col-lg-5">
            <img
              class="w-100"
              src="@/assets/img/news-images/destiny 2.png"
              alt="destiny2News"
            />
          </div>
          <div class="col-12 col-lg-7 d-flex flex-column">
            <h3>索尼36億美元收購《天命》開發商 Bungie</h3>
            <h5 class="my-3">
              <font-awesome-icon
                icon="fa-solid fa-calendar-days"
                class="mr-1"
              />
              2020年12月1日
              <font-awesome-icon icon="fa-solid fa-tags" class="ml-1" />
              遊戲資訊、收購
            </h5>
            <p>
              微軟買誰換誰買？換索尼買。索尼稍早宣布收購《天命》（Destiny）開發商
              Bungie，收購價 36 億美元（折合新台幣約 1,000 億元）。
              根據新聞稿指出，索尼將在 Bungie
              被收購之後，將維持獨立營運，包括保有自行發行能力，讓玩家得以選擇他們想要遊玩的地方。
            </p>
            <button
              type="button"
              class="btn btn-secondary align-self-end align-self-lg-start"
            >
              閱讀更多
            </button>
          </div>
        </div>
        <div class="row mt-4" data-aos="fade-up" data-aos-duration="2000">
          <div class="col-12 col-lg-5">
            <img
              class="w-100"
              src="@/assets/img/news-images/final fantasy.jpg"
              alt="final fantasy News"
            />
          </div>
          <div class="col-12 col-lg-7 d-flex flex-column">
            <h3>《FF14》HXD延燒，中國玩家連署官方道歉</h3>
            <h5 class="my-3">
              <font-awesome-icon
                icon="fa-solid fa-calendar-days"
                class="mr-1"
              />
              2020年4月13日
              <font-awesome-icon icon="fa-solid fa-tags" class="ml-1" />
              遊戲資訊、道歉
            </h5>
            <p>
              Square Enix 旗下作品《Final Fantasy
              XIV》，近期因為有玩家發起連署「要求日本 Square Enix 為了 HXD
              事件道歉」再掀話題。 《Final Fantasy XIV》在 6.0
              資料片「曉月的終焉」上市後，在全球各地掀起一波「光之戰士」熱潮，不少中國玩家入駐遊戲後對原本的遊戲生態造成變化。
            </p>
            <button
              type="button"
              class="btn btn-secondary align-self-end align-self-lg-start"
            >
              閱讀更多
            </button>
          </div>
        </div>
      </div>
      <div class="new-product">
        <h2 data-aos="fade-up" data-aos-duration="2000">新品上市</h2>
        <div class="row no-gutters" data-aos="fade-up" data-aos-duration="2000">
          <div
            class="col-12 col-md-6 product-type"
            value="動作冒險"
            @click="productType"
          >
            <img src="@/assets/img/product-type/動作冒險.png" alt="動作冒險" />
            <h3>動作冒險</h3>
          </div>
          <div
            class="col-12 col-md-6 product-type"
            value="恐怖"
            @click="productType"
          >
            <img src="@/assets/img/product-type/恐怖.jpg" alt="恐怖" />
            <h3>恐怖</h3>
          </div>
          <div
            class="col-12 col-md-6 product-type"
            value="角色扮演"
            @click="productType"
          >
            <img src="@/assets/img/product-type/角色扮演.png" alt="角色扮演" />
            <h3>角色扮演</h3>
          </div>
          <div
            class="col-12 col-md-6 product-type"
            value="射擊"
            @click="productType"
          >
            <img src="@/assets/img/product-type/射擊.png" alt="射擊" />
            <h3>射擊</h3>
          </div>
        </div>
        <SessionSwiper
          data-aos="fade-up"
          data-aos-duration="2000"
          class="mt-5"
        />
      </div>
      <div class="recommend">
        <h2 data-aos="fade-up" data-aos-duration="2000">本周推薦</h2>
        <div class="row section">
          <div
            class="col-lg-6 col-sm-12 mb-4"
            v-for="(item, index) in randomProducts"
            :key="item.id"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div class="card bg-secondary" @click="clickProduct(item)">
              <div class="card-img">
                <img :src="item.imageUrl" class="img-fluid" :alt="item.title" />
              </div>
              <div class="card-header">
                <h5>
                  <font-awesome-icon
                    icon="fa-solid fa-calendar-days"
                    class="mr-1"
                  />{{ randomDate[index] }}
                </h5>
                <h5>
                  <font-awesome-icon icon="fa-solid fa-eye" class="mr-1" />{{
                    randomView[index]
                  }}
                </h5>
              </div>
              <h3 class="card-title text-info">{{ item.title }}</h3>
              <p class="card-text text-info">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SessionSwiper from '@/components/front/SessionSwiper.vue'
import CartIconModal from '@/components/front/CartIconModal.vue'
import PreLoading from '@/components/front/PreLoading.vue'

export default {
  data () {
    return {
      products: {},
      randomProducts: [],
      randomView: [],
      randomDate: []
    }
  },
  components: {
    SessionSwiper,
    CartIconModal,
    PreLoading
  },
  methods: {
    clickProduct (product) {
      this.$router.push(`/front-end/front-cart/${product.id}`)
    },
    getRandomDate () {
      const vm = this
      for (let i = 0; i < 4; i += 1) {
        const year = String(Math.floor(Math.random() * 10) + 2010)
        const month = String(Math.floor(Math.random() * 12) + 1)
        const day = String(Math.floor(Math.random() * 28) + 1)
        const date = `${year}/${month}/${day}`
        vm.randomDate.push(date)
      }
    },
    getRandomView () {
      const vm = this
      for (let i = 0; i < 4; i += 1) {
        vm.randomView.push(Math.floor(Math.random() * 1000) + 100)
      }
    },
    weekRecommend () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      vm.$store.dispatch('updateLoading', true)

      vm.$http.get(api).then((res) => {
        vm.productsAll = res.data.products
        const arr = []
        for (let i = 0; i < 4; i += 1) {
          const str = Math.floor(Math.random() * vm.productsAll.length)
          if (arr.includes(str)) {
            i -= 1
          } else {
            arr.push(str)
          }
        }
        for (let k = 0; k < arr.length; k += 1) {
          vm.randomProducts.push(vm.productsAll[arr[k]])
        }
        vm.$store.dispatch('updateLoading', false)
      })
    },
    productType (e) {
      if (e.target.nodeName === 'IMG') {
        const type = e.target.alt
        localStorage.setItem('type', JSON.stringify(type))
        this.$router.push('/front-end/front-cart')
      } else if (e.target.nodeName === 'H2') {
        const type = e.target.innerText
        localStorage.setItem('type', JSON.stringify(type))
        this.$router.push('/front-end/front-cart')
      }
    }
  },

  created () {
    this.weekRecommend()
    this.getRandomView()
    this.getRandomDate()
  }
}
</script>

<style lang="scss">
.container-md {
  z-index: 2;
}
.new-btn {
  letter-spacing: 2px;
  font-size: 1rem;
  border-radius: 0;
  padding: 0.8rem;
  transition: all 0.4s;
  &:hover {
    background-color: black;
  }
}

.homeBanner {
  position: relative;
  width: 100%;
  min-height: 55vh;
  background-image: url('@/assets/img/product-image/Pokemon.png');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 60px;
  margin-bottom: 120px;
  background-attachment: fixed;
  &:after {
    background: linear-gradient(180deg, #fffcf7, #5a504b);
    opacity: 0.4;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
  }
}
.typing {
  width: 10em;
  white-space: nowrap;
  border-right: 2px solid transparent;
  animation: typing 3.5s steps(9, end), blinkCursor 0.75s infinite;
  overflow: hidden;
  letter-spacing: 0;
  text-align: end;
}
@media (max-width: 576px) {
  .typing {
    font-size: 2rem;
  }
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 9em;
  }
}
@keyframes blinkCursor {
  from,
  to {
    box-shadow: 2px 0 0 0 transparent;
  }
  50% {
    box-shadow: 2px 0 0 0;
  }
}

.product-type {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(2px);

  img {
    width: 100%;
    height: auto;
    filter: contrast(40%);

    transition: all 0.5s ease-out;
    transform: scale(1, 1);
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
  h3 {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    color: white;
    font-weight: 700;
    filter: brightness(0.9);
    font-size: 2.5rem;
  }
  &:hover {
    h2 {
      filter: blur(0);

      filter: brightness(1);
    }
  }
}

.carousel-item {
  position: relative;

  &::after {
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    transition: all 0.5s ease;
    background: #ffffff;
    top: 10%;
    left: 50%;
  }

  &::before {
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    transition: all 0.5s ease;
    background: #ffffff;
    bottom: 10%;
    left: 50%;
    z-index: 3;
  }

  &:hover::after {
    left: 10%;
    width: 80%;
    height: 1px;
  }

  &:hover::before {
    left: 10%;
    width: 80%;
    height: 1px;
  }

  &:hover .line {
    &::after {
      top: 10%;
      width: 1px;
      height: 80%;
    }

    &::before {
      top: 10%;
      width: 1px;
      height: 80%;
    }
  }

  img {
    transition: all 0.4s ease;
  }

  &:hover img {
    filter: brightness(0.6);
  }

  .line {
    &::after {
      position: absolute;
      content: '';
      width: 0px;
      height: 0px;
      transition: all 0.5s ease;
      background: #ffffff;
      top: 50%;
      left: 10%;
    }

    &::before {
      position: absolute;
      content: '';
      width: 0px;
      height: 0px;
      transition: all 0.5s ease;
      background: #ffffff;
      top: 50%;
      right: 10%;
    }
  }

  .carousel-text {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    color: white;
    opacity: 0;
    transition: all 0.5s ease;
    border-radius: 3px;
    text-align: center;

    &:hover {
      opacity: 0.6;
    }
  }
}
@media (any-hover: none) {
  .carousel-item {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      left: 10%;
      width: 80%;
      height: 1px;
      transition: all 0.5s ease;
      background: #ffffff;
      top: 10%;
    }

    &::before {
      position: absolute;
      content: '';
      left: 10%;
      width: 80%;
      height: 1px;
      transition: all 0.5s ease;
      background: #ffffff;
      bottom: 10%;
    }

    img {
      transition: all 0.4s ease;
    }

    img {
      filter: brightness(0.6);
    }

    .line {
      &::after {
        position: absolute;
        content: '';
        top: 10%;
        width: 1px;
        height: 80%;
        transition: all 0.5s ease;
        background: #ffffff;
        left: 10%;
      }

      &::before {
        position: absolute;
        content: '';
        top: 10%;
        width: 1px;
        height: 80%;
        transition: all 0.5s ease;
        background: #ffffff;
        right: 10%;
      }
    }

    .carousel-text {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
      color: white;
      opacity: 0.6;
      transition: all 0.5s ease;
      border-radius: 3px;
      text-align: center;
    }
  }
}
.swiper {
  margin: 120px 0;
}

.new-product h2,
.recommend h2,
.about h2,
.news h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-top: 240px;
  margin-bottom: 120px;
  position: relative;
  text-align: center;
  overflow: hidden;
  color: #999;

  &:after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    position: absolute;
    background: #ccc;
    top: 50%;
    margin-left: 10px;
  }

  &:before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    position: absolute;
    background: #ccc;
    top: 50%;
    margin-left: -10px;
    transform: translateX(-100%);
  }
}

.about {
  margin: 60px 0;

  p {
    font-size: 20px;
    text-align: center;
    padding-bottom: 20px;
  }
}

.carousel ol li {
  z-index: 200;
}

.carousel,
.new-product,
.recommend {
  margin: 60px 0;
}

.section {
  margin: 60px 0;
  display: flex;
  flex-wrap: wrap;

  .card {
    transition: 0.5s;
    cursor: pointer;
    border: 1px solid #fff;
    color: #fff;
    height: 100%;

    &:hover {
      transform: scale(1.02);
    }

    .card-img {
      max-width: 100%;
      img {
        width: 100%;
      }
    }

    .card-header {
      font-size: 1rem;
      font-weight: 300;
      display: flex;
      border-bottom: 1px solid #fff;
      justify-content: space-between;
    }

    .card-title {
      padding: auto 0;
      font-size: 2.5rem;
      font-weight: 700;
      margin: 15px 0;
      text-align: center;
      align-items: center;
    }

    .card-text {
      font-size: 1.5rem;
      font-weight: 500;
      overflow: hidden;

      padding: 0 20px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      margin-bottom: 30px;
    }
  }
}

@media (max-width: 992px) {
  .product-type {
    h2 {
      font-size: 1.5rem;
    }
  }
  .news {
    h2 {
      margin-top: 16px;
    }
    h3 {
      margin-top: 1rem;
    }
    button {
      align-self: end;
    }
  }
}
@media (max-width: 667px) {
  .product-type {
    h2 {
      font-size: 1rem;
    }
  }
  .carousel-text {
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
}
</style>
