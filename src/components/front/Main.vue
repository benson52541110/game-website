<template>
  <div>
    <home-swiper></home-swiper>
    <Section></Section>
  </div>
</template>

<script>
  import HomeSwiper from './Swiper.vue';
  import Section from './Section.vue';
  export default {
    components: {
      HomeSwiper,
      Section,
    },
  };

</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
    background-color:gray;

  }

.main{
  display: flex;
  flex-direction: column;
}

  .main-navigation {
    position: relative;
    background-color: black;
    display: flex;
    justify-content: space-around;
  }

  .navbar-brand {
    padding: 15px 15px;
    font-size: 25px;
    line-height: 40px;
    color: #fff;
    font-weight: bold;
  }

  .main-navigation .nav-list {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    text-align: right;
    justify-content: center;
  }

  .nav-list li.nav-list-item {
    display: inline-block;
    line-height: 40px;
    margin-left: 30px;
    margin-top: 15px;
  }

  .nav-link {
    position: relative;
    text-decoration: none;
    font-size: 18px;
    font-family: sans-serif;
    font-weight: 500;
    cursor: pointer;
    color: #fff;
    transition: .3s;
  }

  .nav-list-item a::after {
    content: '';
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 0.8em;
    border-bottom: 1px solid white;
    transition: .3s;
  }

  .nav-list-item a:hover::after {
    left: 0;
    right: 0;
  }

  .nav-link:hover {
    color: yellow;
    transform: translateY(-8px);
  }

  @keyframes FadeIn {
    0% {
      opacity: 0;
      -webkit-transition-duration: 0.8s;
      transition-duration: 0.8s;
      -webkit-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      transform: translateY(-10px);
    }


    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
      pointer-events: auto;
      transition: cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .nav-list li {
    animation: FadeIn 1s cubic-bezier(0.65, 0.05, 0.36, 1);
    animation-fill-mode: both;
  }

  .nav-list li:nth-child(1) {
    animation-delay: .3s;
  }

  .nav-list li:nth-child(2) {
    animation-delay: .6s;
  }

  .nav-list li:nth-child(3) {
    animation-delay: .9s;
  }

  .nav-list li:nth-child(4) {
    animation-delay: 1.2s;
  }

  .nav-list li:nth-child(5) {
    animation-delay: 1.5s;
  }

  /* Animation */

  @keyframes fadeInUp {
    from {
      transform: translate3d(0, 40px, 0)
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1
    }
  }

  @-webkit-keyframes fadeInUp {
    from {
      transform: translate3d(0, 40px, 0)
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1
    }
  }

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: both
  }

  .animatedFadeInUp {
    opacity: 0
  }

  .fadeInUp {
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
  }

</style>
