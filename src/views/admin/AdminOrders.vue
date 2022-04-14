<template>
  <div>
    <PreLoading />
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>電子信箱</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in newOrder"
          :key="key"
          :class="{ 'text-secondary': !item.is_paid }"
        >
          <td>{{ item.create_at | date }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.total | currency }}</td>
          <td>
            <strong v-if="item.is_paid" class="text-success">已付款</strong>
            <span v-else class="text-muted">未付款</span>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pages="pagination" @emitPages="getOrders"></Pagination>
  </div>
</template>

<script>
import Pagination from '@/views/ThePagination.vue'
import PreLoading from '@/components/front/PreLoading.vue'

export default {
  data () {
    return {
      orders: {},
      pagination: {},
      newOrder: []
    }
  },
  components: {
    Pagination,
    PreLoading
  },
  methods: {
    getOrders (Page = 1) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${Page}`
      vm.$store.dispatch('updateLoading', true)

      vm.$http.get(url).then((response) => {
        vm.orders = response.data.orders
        vm.pagination = response.data.pagination
        vm.$store.dispatch('updateLoading', false)
        if (vm.orders.length) {
          vm.newOrder = vm.orders.sort((a, b) => {
            const aIsPaid = a.is_paid ? 1 : 0
            const bIsPaid = b.is_paid ? 1 : 0
            return bIsPaid - aIsPaid
          })
        }
      })
    }

  },

  created () {
    this.getOrders()
    this.sortOrder()
  }
}
</script>
