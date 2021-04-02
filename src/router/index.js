import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/admin/Login';
import Products from '@/components/admin/Products';
import Coupons from '@/components/admin/Coupons';
import Orders from '@/components/admin/Orders';
import CustomerOrder from '@/components/admin/CustomerOrders';
import CustomerCheckout from '@/components/admin/CustomerCheckout';
import Main from '@/components/front/Main';

Vue.use(Router);

export default new Router({
  /* 當router-link被點擊時 添加額外的class */
  linkActiveClass: 'active',
  routes: [
    {
      /* 網頁名稱不是既定名稱時(如亂碼) 導向login頁面 */
      path: '*',
      redirect: 'login',
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/Main',
      name: 'Main',
      component: Main,
    },

    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },
      ],
    },

    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
        },
      ],
    },

  ],
});
