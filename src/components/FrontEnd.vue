<template>
    <div id="main-container">
      <frontNav class="header"></frontNav>
      <Alert></Alert>
      <router-view style="padding:130px" class="main-view"></router-view>
      <mainFooter class="footer"></mainFooter>
    </div>
  </template>
  
  <script>
  import FrontNav from './front/FrontNav.vue';
  import MainFooter from './front/MainFooter.vue';
  import Alert from './AlertMessage';

  export default {
    components: {
      FrontNav,
      MainFooter,
      Alert,
    },
  };
  </script>
  <style scoped>
      #main-container{
        background-color: rgb(214, 211, 211);

    position:relative;  
    width:100%;
    min-height:100%; 
    /*设置padding-bottom值大于等于footer的height值，以保证main的内容能够全部显示出来而不被footer遮盖；*/  
    padding-bottom: 100px;  
    box-sizing: border-box;
      }
      .header{
    width: 100%;
}
.main-view{
  
}
.footer{
    width: 100%;
    height:100px;   /* footer的高度一定要是固定值*/ 
    position:absolute;
    bottom:0px;
    left:0px;
}
  </style>