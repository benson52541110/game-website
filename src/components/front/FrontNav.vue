<template>
  <div class="mt-4">
    <nav
      class="main-navigation bg-primary d-flex align-items-center justify-content-sm-around"
    >
      <div class="nav-logo">
        <router-link
          to="/front-end/front-main"
          class="d-flex align-items-center"
        >
          <svg
            class="navbar-brand bg-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              d="M224 160c8.836 0 16-7.164 16-16C240 135.2 232.8 128 224 128S208 135.2 208 144C208 152.8 215.2 160 224 160zM96 128C87.16 128 80 135.2 80 144C80 152.8 87.16 160 96 160s16-7.164 16-16C112 135.2 104.8 128 96 128zM474.4 64.12C466.8 63.07 460 69.07 460 76.73c0 5.959 4.188 10.1 9.991 12.36C514.2 99.46 544 160 544 192v112c0 8.844-7.156 16-16 16S512 312.8 512 304V212c0-14.87-15.65-24.54-28.94-17.89c-28.96 14.48-47.83 42.99-50.51 74.88C403.7 285.6 384 316.3 384 352v32H224c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32H132.4c-14.46 0-27.37-9.598-31.08-23.57C97.86 283.5 96 269.1 96 256V254.4C101.1 255.3 106.3 256 111.7 256c10.78 0 21.45-2.189 31.36-6.436L160 242.3l16.98 7.271C186.9 253.8 197.6 256 208.3 256c7.176 0 14.11-.9277 20.83-2.426C241.7 292 277.4 320 320 320l36.56-.0366C363.1 294.7 377.1 272.7 396.2 256H320c0-25.73 17.56-31.61 32.31-32C369.8 223.8 384 209.6 384 192c0-17.67-14.31-32-32-32c-15.09 0-32.99 4.086-49.28 13.06C303.3 168.9 304 164.7 304 160.3v-16c0-1.684-.4238-3.248-.4961-4.912C313.2 133.9 320 123.9 320 112C320 103.2 312.8 96 304 96H292.7C274.6 58.26 236.3 32 191.7 32H128.3C83.68 32 45.44 58.26 27.33 96H16C7.164 96 0 103.2 0 112c0 11.93 6.816 21.93 16.5 27.43C16.42 141.1 16 142.7 16 144.3v16c0 19.56 5.926 37.71 16 52.86V256c0 123.7 100.3 224 224 224h160c123.9-1.166 224-101.1 224-226.2C639.9 156.9 567.8 76.96 474.4 64.12zM64 160.3v-16C64 108.9 92.86 80 128.3 80h63.32C227.1 80 256 108.9 256 144.3v16C256 186.6 234.6 208 208.3 208c-4.309 0-8.502-.8608-12.46-2.558L162.1 191.4c2.586-.3066 5.207-.543 7.598-1.631l8.314-3.777C186.9 182.3 192 174.9 192 166.7V160c0-6.723-5.996-12.17-13.39-12.17H141.4C133.1 147.8 128 153.3 128 160v6.701c0 8.15 5.068 15.6 13.09 19.25l8.314 3.777c2.391 1.088 5.012 1.324 7.598 1.631l-32.88 14.08C120.2 207.1 115.1 208 111.7 208C85.38 208 64 186.6 64 160.3z"
            />
          </svg>
          <h1 class="text-dark nav-text">遊任有魚</h1>
        </router-link>
      </div>
      <ul class="nav-list my-auto bg-primary">
        <router-link to="/front-end/new-product">
          <li class="nav-list-item">
            <i class="nav-link">新作評測</i>
          </li>
        </router-link>
        <router-link to="/front-end/front-cart">
          <li class="nav-list-item">
            <i class="nav-link">遊戲商城</i>
          </li>
        </router-link>
        <router-link to="/front-end/order-check">
          <li class="nav-list-item">
            <i class="nav-link">購物車</i>
          </li>
        </router-link>
        <router-link to="/front-end/order-review">
          <li class="nav-list-item">
            <i class="nav-link">查看訂單</i>
          </li>
        </router-link>
      </ul>
      <div class="notFillSidemenu" :class="{ fillSidemenu: navOpen }"></div>
      <div id="sidemenu" :class="{ open: navOpen }">
        <button
          class="sidemenu__btn"
          type="button"
          @click="navOpen = !navOpen"
          :class="{ active: navOpen }"
        >
          <span class="top"></span>
          <span class="mid"></span>
          <span class="bottom"></span>
        </button>
        <transition name="translateX">
          <nav v-if="navOpen">
            <div class="sidemenu__wrapper">
              <ul class="sidemenu__list">
                <router-link to="/front-end/front-main">
                  <li class="sidemenu__item" @click="navOpen = !navOpen">
                    <a href="">首頁</a>
                  </li>
                </router-link>
                <router-link to="/front-end/new-product">
                  <li class="sidemenu__item" @click="navOpen = !navOpen">
                    <a href="">新作評測</a>
                  </li>
                </router-link>
                <router-link to="/front-end/front-cart">
                  <li class="sidemenu__item" @click="navOpen = !navOpen">
                    <a href="">遊戲商城</a>
                  </li>
                </router-link>
                <router-link to="/front-end/order-check">
                  <li class="sidemenu__item" @click="navOpen = !navOpen">
                    <a href="">購物車</a>
                  </li>
                </router-link>
                <router-link to="/front-end/order-review">
                  <li class="sidemenu__item" @click="navOpen = !navOpen">
                    <a href="">查看訂單</a>
                  </li>
                </router-link>
              </ul>
            </div>
          </nav>
        </transition>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
.main-navigation {
  display: flex;
  position: fixed;
  justify-content: space-around;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  z-index: 999;
  margin: 0 auto;
  #sidemenu {
    display: none;
  }

  .nav-logo {
    margin: auto 0;
    .nav-text {
      font-size: 1.5rem;
      font-weight: 700;
      margin: auto;
    }
    .navbar-brand {
      height: 50px;
      box-shadow: none;
    }
  }

  .show-menu {
    display: none;
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-list-item {
      list-style: none;
    }

    .nav-link {
      position: relative;
      text-decoration: none;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 500;
      cursor: pointer;
      color: #8e8d8a;
      transition: 0.3s;

      &:hover {
        transform: translateY(-8px);
        text-decoration: none;
      }

      &:after {
        content: '';
        position: absolute;
        left: 50%;
        right: 50%;
        height: 2px;
        border-bottom: 5px solid #fff;
        margin-top: 28px;
        transition: 0.3s;
      }
    }
  }
}

a:hover {
  text-decoration: none;
}

@media (max-width: 768px) {
  .main-navigation {
    .nav-logo {
      .navbar-brand {
        width: 45px;
      }
      h1 {
        font-size: 2rem;
      }
    }

    .open {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .notFillSidemenu {
      display: none;
    }

    .notFillSidemenu.fillSidemenu {
      display: block;
      width: 30px;
      height: 30px;
    }

    #sidemenu {
      display: block;
      nav {
        width: 200px;
        background: grey;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 99;
      }

      .sidemenu {
        &__btn {
          z-index: 200;
          display: block;
          width: 30px;
          height: 30px;
          background: grey;
          border: none;
          position: relative;
          appearance: none;
          cursor: pointer;
          outline: none;

          span {
            display: block;
            width: 20px;
            height: 2px;
            margin: auto;
            background: white;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            transition: all 0.4s ease;

            &.top {
              transform: translateY(-8px);
            }

            &.bottom {
              transform: translateY(8px);
            }
          }

          &.active {
            position: fixed;
            right: 2%;
            .top {
              transform: rotate(-45deg);
            }

            .mid {
              transform: translateX(-20px) rotate(360deg);
              opacity: 0;
            }

            .bottom {
              transform: rotate(45deg);
            }
          }
        }

        &__wrapper {
          padding-top: 50px;
          height: 100vh;
        }

        &__list {
          padding-top: 50px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        &__item {
          a {
            text-decoration: none;
            text-align: center;
            line-height: 1.6em;
            font-size: 1.6em;
            padding: 0.5em;
            display: block;
            color: white;
            transition: 0.4s ease;

            &:hover {
              background: lightgrey;
              color: dimgrey;
            }
          }
        }
      }
    }

    .translateX-enter {
      transform: translateX(200px);
      opacity: 0;
    }

    .translateX-enter-active,
    .translateX-leave-active {
      transform-origin: top left 0;
      transition: 0.2s ease;
    }

    .translateX-leave-to {
      transform: translateX(200px);
      opacity: 0;
    }

    .nav-list {
      display: block;
      text-align: center;
      max-height: 0px;
      overflow: hidden;
      transition: max-height 1s;
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;

      .nav-link:hover {
        transform: none;
      }
    }

    .show-menu {
      display: block;
      float: right;
      margin: 1em;
      color: white;
    }

    .menushow {
      max-height: 200px;
    }

    .nav-list-item i::after {
      content: '';
      display: none;

      &:hover {
        left: 0;
        right: 0;
      }
    }
  }
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
  animation-delay: 0.3s;
}

.nav-list li:nth-child(2) {
  animation-delay: 0.6s;
}

.nav-list li:nth-child(3) {
  animation-delay: 0.9s;
}

.nav-list li:nth-child(4) {
  animation-delay: 1.2s;
}

.nav-list li:nth-child(5) {
  animation-delay: 1.5s;
}

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@-webkit-keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
}

.animatedFadeInUp {
  opacity: 0;
}

.fadeInUp {
  opacity: 0;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
}
</style>
