<template>
  <div class="container mt-5">
    <div class="row news-comment fadeInRight">
      <div class="col-lg-5 image-left">
        <img
          src="@/assets/img/product-image/NewProduct-1.jpg"
          alt="瓦羅蘭評論"
        />
      </div>
      <div class="col-lg-7 d-flex flex-column align-items-center">
        <div class="content-header">
          <h2 class="text-center">瓦羅蘭</h2>
          <h4>作者:蘿涵</h4>
        </div>
        <h4>發布於 2021-04-25</h4>
        <p class="text-column text-center">
          人類最偉大的精神，莫過於執著堅持理想永不放棄。而斑鳩的男主角森羅也說過這樣的話：
          "不留遺憾地繼續走下去直至盡頭。
        </p>
        <button type="button" class="btn btn-secondary align-self-end">
          查看內文
        </button>
      </div>
    </div>
    <div class="row news-comment fadeInLeft justify-content-end">
      <div class="col-lg-7 d-flex flex-column align-items-center">
        <div class="content-header">
          <h2>要塞英雄</h2>
          <h4>作者:老吳</h4>
        </div>
        <h4>發布於 2021-04-11</h4>
        <p class="text-column text-center">
          Epic Games 旗下熱門免費大逃殺遊戲《要塞英雄》（Fortnite）在今年 8
          月推出全新遊玩模式「Impostors」。
        </p>
        <button type="button" class="btn btn-secondary align-self-end">
          查看內文
        </button>
      </div>
      <div class="col-lg-5 image-right">
        <img
          src="@/assets/img/product-image/NewProduct-2.png"
          alt="要塞英雄評論"
        />
      </div>
    </div>
    <div class="row news-comment fadeInRight">
      <div class="col-lg-5 image-left">
        <img
          src="@/assets/img/product-image/NewProduct-3.jpg"
          alt="Minecraft評論"
        />
      </div>
      <div class="col-lg-7 d-flex flex-column align-items-center">
        <div class="content-header">
          <h2>Minecraft</h2>
          <h4>作者:謝雷</h4>
        </div>
        <h4>發布於 2020-05-30</h4>
        <p class="text-column text-center">
          即他認為兩者的最大區別是開放世界遊戲讓你探索世界的每一個角落，而沙盒遊戲讓你切實建造並管理你所處的這個世界。
        </p>
        <button type="button" class="btn btn-secondary align-self-end">
          查看內文
        </button>
      </div>
    </div>
    <div class="row news-comment fadeInLeft justify-content-end">
      <div class="col-lg-7 d-flex flex-column align-items-center">
        <div class="content-header">
          <h2>寶可夢</h2>
          <h4>作者:benson</h4>
        </div>
        <h4>發布於 2019-03-20</h4>
        <p class="text-column text-center">
          即他認為兩者的最大區別是開放世界遊戲讓你探索世界的每一個角落，而沙盒遊戲讓你切實建造並管理你所處的這個世界。
        </p>
        <button type="button" class="btn btn-secondary align-self-end">
          查看內文
        </button>
      </div>
      <div class="col-lg-5 image-right">
        <img
          src="@/assets/img/product-image/NewProduct-4.png"
          alt="寶可夢評論"
        />
      </div>
    </div>
    <CartIconModal />
  </div>
</template>

<script>
import CartIconModal from '@/components/front/CartIconModal.vue'

export default {
  components: {
    CartIconModal
  }

}
</script>

<style lang="scss" scoped>
.news-comment {
  margin: 50px 0;
  padding-bottom: 30px;
  border-bottom: 5px dashed black;
  .image-left {
    margin: auto 0;
    transform: skew(2deg);
    img {
      max-width: 100%;
    }
  }
  .image-right {
    margin: auto 0;
    transform: skew(-2deg);
    img {
      max-width: 100%;
    }
  }

  .content-header {
    margin-top: 10px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    h2 {
      font-weight: 700;
      font-size: 2.5rem;
      text-align: center;
      margin-right: 40px;
    }
    h4 {
      margin: 5px 0;
    }
  }

  .text-column {
    margin: 10px 0;
    font-size: 1.5rem;
    line-height: 1.5em;
  }
}

.news-comment:nth-child(4) {
  border-bottom: none;
}
.fadeInRight {
  animation: 1s fadeInRight;
}

.fadeInLeft {
  animation: 1s fadeInLeft;
}

@media (max-width: 992px) {
  .fadeInLeft {
    margin: 30px 0;
  }
  .fadeInLeft > div:nth-child(2){
    order: 1;
  }
  .fadeInLeft > div:nth-child(1){
    order: 2;
  }
  .content-header
  .news-comment {
    .content-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 0;
      h2 {
        margin-right: 0;
      }
    }
  }

  .timeline:after,
  .timeline:before {
    display: none;
  }
}

@media (max-width: 576px) {
  .content-header {
    display: flex;
    align-items: center;
  }
}

@keyframes fadeInLeft {
  from {
    transform: translateX(-300px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes fadeInRight {
  from {
    transform: translateX(300px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
