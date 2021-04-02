// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
/* 用來做資料處理 */
import axios from 'axios';
import VueAxios from 'vue-axios';
/* 網頁讀取動畫 */
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';
import 'bootstrap';
/* 網頁驗證及中文套件 */
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';
import App from './App';
import router from './router';
/* 用做跨組件的溝通 */
import './bus';
/* 貨幣和時間篩選 */
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

VeeValidate.Validator.localize('zh_TW', zhTWValidate);
Vue.use(VeeValidate);

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);
/* 跨域存取 */
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

/* router.beforeEach((要去的路由, 從哪個路由來, 繼續往下執行的回呼函式) */
router.beforeEach((to, from, next) => {
  /* 判斷是否需要驗證 */
  if (to.meta.requiresAuth) {
    /* 驗證用戶是否持續登入 */
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
