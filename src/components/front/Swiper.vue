<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide class="slide" :key="item.id" v-for="item in swiperList">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-disabled" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-disabled" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: {
          delay: 3000,
          disableOnInteraction: false
          },
          effect:'fade',
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        },
        swiperList: [{
            id: '001',
            imgUrl: require('../../assets/swiper-images/1.jpg')
          },
          {
            id: '002',
            imgUrl: require('../../assets/swiper-images/2.jpg')
          },
          {
            id: '003',
            imgUrl: require('../../assets/swiper-images/3.jpg')
          },
          {
            id: '004',
            imgUrl: require('../../assets/swiper-images/4.jpg')
          },
          {
            id: '005',
            imgUrl: require('../../assets/swiper-images/5.jpg')
          },
        ],
        
      }
    },
  }

</script>

<style scoped>
  .wrapper {
    overflow: hidden;
    width: 100%;
  }

  .swiper-button-next, .swiper-button-prev {
    transition: opacity .5s;
}

.swiper-button-disabled {
     opacity: 0 !important;
}

  .slide{
    display: flex;
    justify-content: center;
  }

  .swiper-img {
    width: 50%;
  }

  .swiper-pagination{
    z-index: 99;
    bottom: 30px;
  }
  .swiper-button-prev,.swiper-button-next{
    margin: 0 430px;
  }
</style>
