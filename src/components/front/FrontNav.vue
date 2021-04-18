<template>
    <div class="main fixed-top">
      <nav class="main-navigation ">
        <div class="navbar-header">
          <router-link to="/frontEnd/Main">
          <i class="navbar-brand" href="">網站名稱</i>
        </router-link>
        </div>
        <ul class="nav-list">
          <li class="nav-list-item">
            <router-link to="/frontEnd/NewProduct">
            <i href="#" class="nav-link">新作評測</i>
          </router-link>
          </li>
          <router-link to="/frontEnd/Cart">
          <li class="nav-list-item">
            <i href="#" class="nav-link">遊戲商城</i>
          </li>
          <router-link to="/frontEnd/OrderCheck">
            <li class="nav-list-item">
              <i href="#" class="nav-link">結帳區</i>
            </li>
          </router-link>
        </router-link>
          <router-link to="/login">
          <li class="nav-list-item">
            <i href="#" class="nav-link">管理員登入</i>
          </li>
        </router-link>
        </ul>
      </nav>
      </div>
  </template>

  <script>
    export default{
      data(){
        return{
          
        }
      }
    }
  </script>

  <style scoped>
        body {
    margin: 0;
    padding: 0;
  }

.main{
  display: flex;
  flex-direction: column;
  background-color:gray;
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

  .nav-list-item i::after {
    content: '';
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 0.8em;
    border-bottom: 1px solid white;
    transition: .3s;
  }

  .nav-list-item i:hover::after {
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