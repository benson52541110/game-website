import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: 'front-end/front-main'
  },
  {
    path: '/front-end',
    name: 'front-end',
    component: () => import('../views/FrontEnd.vue'),
    children: [
      {
        path: 'front-main',
        name: 'front-main',
        component: () => import('../views/front/FrontMain.vue')
      },
      {
        path: 'new-product',
        name: 'new-product',
        component: () => import('../views/front/NewProduct.vue')
      },
      {
        path: 'front-cart',
        name: 'front-cart',
        component: () => import('../views/front/FrontCart.vue')
      },
      {
        path: 'front-cart/:cardId',
        name: 'cart-info',
        component: () => import('../views/front/CartInfo.vue')
      },
      {
        path: 'order-check',
        name: 'order-check',
        component: () => import('../views/front/OrderCheck.vue')
      },
      {
        path: 'order-confirm',
        name: 'order-confirm',
        component: () => import('../views/front/OrderConfirm.vue')
      },
      {
        path: 'order-pay/:orderId',
        name: 'order-pay',
        component: () => import('../views/front/OrderPay.vue')
      },
      {
        path: 'order-completed/:orderId',
        name: 'order-completed',
        component: () => import('../views/front/OrderCompleted.vue')
      },
      {
        path: 'order-review',
        name: 'order-review',
        component: () => import('../views/front/OrderReview.vue')
      },
      {
        path: 'order-review/:orderId',
        name: 'order-info',
        component: () => import('../views/front/OrderInfo.vue')
      }
    ]
  },

  {
    path: '/admin-login',
    name: 'admin-login',
    component: () => import('../views/admin/AdminLogin.vue')
  },
  {
    path: '/admin',
    name: 'admin-dashboard',
    component: () => import('../views/AdminDashboard.vue'),

    children: [
      {
        path: 'admin-products',
        name: 'admin-products',
        component: () => import('../views/admin/AdminProducts.vue'),

        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'admin-coupons',
        name: 'admin-coupons',
        component: () => import('../views/admin/AdminCoupons.vue'),

        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'admin-orders',
        name: 'admin-orders',
        component: () => import('../views/admin/AdminOrders.vue'),

        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
