"use strict";(self["webpackChunkvue_gamewebsite_3"]=self["webpackChunkvue_gamewebsite_3"]||[]).push([[149],{8477:function(t,s,e){e.d(s,{Z:function(){return d}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("preLoading",{staticStyle:{"background-color":"white"},attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}},[e("div",{staticClass:"sk-chase"},[e("div",{staticClass:"sk-chase-dot"}),e("div",{staticClass:"sk-chase-dot"}),e("div",{staticClass:"sk-chase-dot"}),e("div",{staticClass:"sk-chase-dot"}),e("div",{staticClass:"sk-chase-dot"}),e("div",{staticClass:"sk-chase-dot"})])])],1)},r=[],i={data:function(){return{}},computed:{isLoading:function(){return this.$store.state.isLoading}}},c=i,o=e(1001),n=(0,o.Z)(c,a,r,!1,null,null,null),d=n.exports},3149:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("PreLoading"),e("div",{staticClass:"container"},[e("div",{staticClass:"row my-5 order-list justify-content-center"},[t.cart.carts?e("div",{staticClass:"col-11 mb-5 mb-md-0 bg-yellow"},[e("h3",{staticClass:"text-center font-letter font-weight-bold bg-secondary mb-0 py-3"},[t._v(" 結帳清單 ")]),t._l(t.order.products,(function(s){return e("div",{key:s.id,staticClass:"col-12 test-list bg-yellow"},[e("div",{staticClass:"item-image"},[e("img",{attrs:{src:s.product.imageUrl,alt:"product"}})]),e("div",{staticClass:"item-info d-flex flex-column align-items-center"},[e("p",[t._v(t._s(s.product.title))]),e("p",[t._v("數量: "+t._s(s.qty))])]),e("div",{staticClass:"item-price"},[e("p",[t._v("小計")]),e("p",[t._v(t._s(s.final_total))])])])})),e("div",{staticClass:"row align-items-end my-3"},[e("div",{staticClass:"col h4 mb-0 text-center text-danger"},[t._v(" 總金額 "+t._s(t._f("currency")(t.order.total))+" ")]),t.coupon?e("div",{staticClass:"col h4 text-right text-success text-center"},[t._v(" 折扣價 "+t._s(t._f("currency")(t.totalDiscount))+" ")]):t._e()]),e("hr")],2):t._e(),e("div",{staticClass:"col-11 bg-yellow pb-2 mt-5"},[e("h3",{staticClass:"font-letter mb-3 font-weight-bold bg-secondary"},[t._v(" 客戶資料 ")]),e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("Email")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",{staticStyle:{"white-space":"nowrap"}},[t._v("收件人電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",[t._v("收件人地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",[t._v("付款狀態")]),e("td",[t.order.is_paid?e("span",{staticClass:"text-success"},[t._v("付款完成")]):e("span",{staticClass:"text-danger"},[t._v("尚未付款")])])])])])])])])],1)},r=[],i=(e(2222),e(8477)),c={data:function(){return{cart:{},order:{user:{}},orderId:""}},components:{PreLoading:i.Z},methods:{getCart:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("benson","/cart");t.$store.dispatch("updateLoading",!0),t.$http.get(s).then((function(s){t.cart=s.data.data,t.cartItem=t.cart.carts,t.$store.dispatch("updateLoading",!1)}))},getOrder:function(){var t=this;this.orderId=this.$route.params.orderId;var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("benson","/order/").concat(t.orderId);t.$http.get(s).then((function(s){t.order=s.data.order}))}},computed:{totalDiscount:function(){return.8*this.order.total}},created:function(){this.getCart(),this.getOrder()}},o=c,n=e(1001),d=(0,n.Z)(o,a,r,!1,null,"15359080",null),l=d.exports}}]);
//# sourceMappingURL=149-legacy.8fa29a44.js.map