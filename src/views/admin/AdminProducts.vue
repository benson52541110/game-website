<template>
  <div>
    <PreLoading />
    <div class="text-right mt-4">
      <button class="btn btn-secondary" @click="openModal(true)" type="button">
        建立新產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="150">分類</th>
          <th width="250">產品名稱</th>
          <th width="100">原價</th>
          <th width="100">售價</th>
          <th width="100">存貨</th>
          <th width="80"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productPage" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>
            {{ item.origin_price | currency }}
          </td>
          <td>
            {{ item.price | currency }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">有貨</span>
            <span v-else>缺貨</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDelProductModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emitPages="getProductPage" />
    <!-- Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control mt-2"
                    id="image"
                    v-model="tempProduct.imageUrl"
                    name="imageUrl"
                    :class="{ 'is-invalid': errors.has('imageUrl') }"
                    v-validate="'required'"
                    placeholder="請輸入圖片連結"
                  />
                  <span class="text-danger" v-if="errors.has('imageUrl')"
                    >連結不得為空</span
                  >
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control mt-2"
                    ref="files"
                    @change="uploadFile"
                  />
                </div>
                <img
                  class="img-fluid"
                  :src="tempProduct.imageUrl"
                  alt="productImage"
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control mt-2"
                    id="title"
                    v-model="tempProduct.title"
                    name="title"
                    :class="{ 'is-invalid': errors.has('title') }"
                    v-validate="'required'"
                    placeholder="請輸入標題"
                  />
                  <span class="text-danger" v-if="errors.has('title')"
                    >標題不得為空</span
                  >
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control mt-2"
                      id="category"
                      v-model="tempProduct.category"
                      name="category"
                      :class="{ 'is-invalid': errors.has('category') }"
                      v-validate="'required'"
                      placeholder="請輸入分類"
                    />
                    <span class="text-danger" v-if="errors.has('category')"
                      >分類不得為空</span
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control mt-2"
                      id="unit"
                      v-model="tempProduct.unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control mt-2"
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      name="origin_price"
                      :class="{ 'is-invalid': errors.has('origin_price') }"
                      v-validate="'required'"
                      placeholder="請輸入原價"
                    />
                    <span class="text-danger" v-if="errors.has('origin_price')"
                      >原價不得為空</span
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control mt-2"
                      id="price"
                      v-model="tempProduct.price"
                      name="price"
                      :class="{ 'is-invalid': errors.has('price') }"
                      v-validate="'required'"
                      placeholder="請輸入售價"
                    />
                    <span class="text-danger" v-if="errors.has('price')"
                      >售價不得為空</span
                    >
                  </div>
                </div>
                <hr />
                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    rows="4"
                    type="text"
                    class="form-control mt-2"
                    id="description"
                    v-model="tempProduct.description"
                    name="description"
                    :class="{ 'is-invalid': errors.has('description') }"
                    v-validate="'required'"
                    placeholder="請輸入產品描述"
                  ></textarea>
                  <span class="text-danger" v-if="errors.has('description')"
                    >產品描述不得為空</span
                  >
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    rows="4"
                    type="text"
                    class="form-control mt-2"
                    id="content"
                    v-model="tempProduct.content"
                    name="content"
                    :class="{ 'is-invalid': errors.has('content') }"
                    v-validate="'required'"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                  <span class="text-danger" v-if="errors.has('content')"
                    >說明內容不得為空</span
                  >
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否有貨
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delProduct">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Pagination from '@/views/ThePagination.vue'
import PreLoading from '@/components/front/PreLoading.vue'
export default {
  data () {
    return {
      tempProduct: {},
      isNew: false,
      status: {
        fileUploading: false
      }
    }
  },
  components: {
    Pagination,
    PreLoading
  },
  methods: {
    getProductPage (page = 1) {
      this.$store.dispatch('getProductPage', page)
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        this.tempProduct = { ...item }
        this.isNew = false
      }
      $('#productModal').modal('show')
    },
    updateProduct () {
      const vm = this
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      let httpMethod = 'post'
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
        httpMethod = 'put'
      }
      this.$validator.validate().then((result) => {
        if (result) {
          vm.$http[httpMethod](api, {
            data: vm.tempProduct
          }).then((response) => {
            if (response.data.success) {
              $('#productModal').modal('hide')
              vm.getProductPage()
              this.$bus.$emit('message:push', '編輯成功', 'success')
            } else {
              $('#productModal').modal('hide')
              vm.getProductPage()
            }
          })
        } else {
          this.$bus.$emit('message:push', '產品資訊不完整', 'danger')
        }
      })
    },
    openDelProductModal (item) {
      const vm = this
      $('#delProductModal').modal('show')
      vm.tempProduct = { ...item }
    },
    delProduct () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
      vm.$http.delete(url).then(() => {
        $('#delProductModal').modal('hide')
        this.$bus.$emit('message:push', '刪除成功', 'success')
        this.getProductPage()
      })
    },
    uploadFile () {
      const vm = this
      const uploadedFile = this.$refs.files.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      vm.status.fileUploading = true
      vm.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
          vm.status.fileUploading = false
          if (response.data.success) {
            vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl)
          } else {
            this.$bus.$emit('message:push', '上傳成功', 'success')
          }
        })
    }
  },
  computed: {
    productPage () {
      return this.$store.state.productPage
    },
    pagination () {
      return this.$store.state.pagination
    }
  },
  created () {
    this.getProductPage()
  }
}
</script>
