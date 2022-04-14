<template>
  <nav class="col-md-2 d-none d-md-block bg-dark sidebar">
    <div class="sidebar-sticky">
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>管理員</span>
        <a class="d-flex align-items-center text-muted" href="#" @click.prevent>
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <!-- router-link 導向到要的頁面 -->
          <router-link to="/admin/admin-products" class="nav-link">
            <i class="fas fa-box-open"></i> 產品列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/admin-orders" class="nav-link">
            <i class="far fa-list-alt"></i> 訂單列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/admin-coupons" class="nav-link">
            <i class="fas fa-ticket-alt"></i> 優惠券
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
