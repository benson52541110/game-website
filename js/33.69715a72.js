"use strict";(self["webpackChunkvue_gamewebsite_3"]=self["webpackChunkvue_gamewebsite_3"]||[]).push([[33],{8265:function(t,a,s){s.d(a,{Z:function(){return d}});var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"modal",attrs:{id:"cartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(0),e("div",{staticClass:"modal-body text-dark"},[e("div",[t.cartData.length<1?e("div",{staticClass:"col-12 my-5 cart-none"},[e("h3",{staticClass:"mb-5 text-center"},[t._v("您的購物車內還沒有任何商品！")]),e("router-link",{staticClass:"btn btn-success cursor-pointer",attrs:{"data-dismiss":"modal",to:"/front-end/front-cart"}},[t._v("快來逛逛 ")])],1):t._e(),t.cartData.length>=1?[t._l(t.cartData,(function(a){return e("div",{key:a.id,staticClass:"col-12 test-list"},[e("div",{staticClass:"item-image"},[e("img",{attrs:{src:a.imageUrl,alt:"product"}}),e("p",{staticClass:"mt-2"},[t._v(t._s(t._f("currency")(a.price)))])]),e("div",{staticClass:"item-info d-flex flex-column align-items-center"},[e("p",[t._v(t._s(a.name))]),e("div",{staticClass:"qty justify-content-center d-flex"},[e("button",{staticClass:"btn btn-light",attrs:{disabled:a.qty<=1,type:"button"},on:{click:function(s){a.qty--,t.updateQty(a.product_id)}}},[e("font-awesome-icon",{attrs:{icon:"minus"}})],1),e("input",{directives:[{name:"model",rawName:"v-model.number",value:a.qty,expression:"item.qty",modifiers:{number:!0}}],staticClass:"form-control text-center",attrs:{type:"number",min:"0"},domProps:{value:a.qty},on:{input:function(s){s.target.composing||t.$set(a,"qty",t._n(s.target.value))},blur:function(a){return t.$forceUpdate()}}}),e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(s){a.qty++,t.updateQty(a.product_id)}}},[e("font-awesome-icon",{attrs:{icon:"plus"}})],1)])]),e("div",{staticClass:"item-price"},[e("p",[t._v("小計")]),e("p",[t._v(t._s(a.price*a.qty))])]),e("DeleteProduct",{on:{deleteItem:function(s){return t.removeLocalItem(a.product_id)}}})],1)})),e("div",{staticClass:"col-12 d-flex flex-column text-danger item-footer align-items-center"},[e("div",{staticClass:"total-price d-flex mt-4"},[e("p",[t._v("總計:")]),e("p",[t._v(t._s(t._f("currency")(t.totalCart)))])])])]:t._e()],2)]),t.cartData.length>=1?e("div",{staticClass:"modal-footer"},[e("router-link",{staticClass:"btn btn-primary cursor-pointer font-weight-bold",attrs:{"data-dismiss":"modal",to:"/front-end/order-check"}},[t._v("結帳去 ")])],1):t._e()])])]),e("div",{staticClass:"cart-icon"},[e("a",{attrs:{href:"#","data-toggle":"modal","data-target":"#cartModal"}},[e("img",{attrs:{src:s(97),alt:"shopCartIcon"}}),t.cartData.length>=1?e("span",[t._v(t._s(t.cartData.length))]):t._e()])]),e("div",{staticClass:"scrollToTop mt-4"},[t.btnFlag?e("img",{staticClass:"go-top",attrs:{src:s(8901),alt:"ScrollToTopIcon"},on:{click:t.backTop}}):t._e()])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header bg-primary text-info"},[s("h1",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("購物車清單")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=s(7300),r={data(){return{cartData:JSON.parse(localStorage.getItem("cartData"))||[],btnFlag:!0}},components:{DeleteProduct:o.Z},methods:{removeLocalItem(t){this.cartData.forEach(((a,s)=>{a.product_id===t&&(this.cartData.splice(s,1),localStorage.setItem("cartData",JSON.stringify(this.cartData)),this.$bus.$emit("message:push","已刪除商品","danger"))})),this.$bus.$emit("localData:update")},updateQty(t){this.cartData.forEach(((a,s)=>{if(a.product_id===t){const t={category:a.category,content:a.content,description:a.description,imageUrl:a.imageUrl,is_enabled:a.is_enabled,product_id:a.id,qty:a.qty,name:a.name,origin_price:a.origin_price,price:a.price};this.cartData.splice(s,1,t),localStorage.setItem("cartData",JSON.stringify(this.cartData))}}))},getCartData(){const t=this;t.cartData=JSON.parse(localStorage.getItem("cartData"))||[]},backTop(){const t=this,a=setInterval((()=>{const s=Math.floor(-t.scrollTop/5);document.body.scrollTop=t.scrollTop+s,document.documentElement.scrollTop=document.body.scrollTop,0===t.scrollTop&&clearInterval(a)}),16)},scrollToTop(){const t=this,a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.scrollTop=a,t.scrollTop>60?t.btnFlag=!0:t.btnFlag=!1}},computed:{totalCart(){return this.cartData.reduce(((t,a)=>t+a.price*a.qty),0)}},created(){this.getCartData(),this.$bus.$on("shopCart:update",(()=>{this.getCartData()}))},mounted(){window.addEventListener("scroll",this.scrollToTop)},destroyed(){window.removeEventListener("scroll",this.scrollToTop)}},c=r,n=s(1001),l=(0,n.Z)(c,e,i,!1,null,"73b7ec72",null),d=l.exports},7300:function(t,a,s){s.d(a,{Z:function(){return l}});var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"deleteItem"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeItem()}}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash-can"}})],1)])},i=[],o={props:[],data(){return{}},methods:{removeItem(){this.$emit("deleteItem")}}},r=o,c=s(1001),n=(0,c.Z)(r,e,i,!1,null,null,null),l=n.exports},8477:function(t,a,s){s.d(a,{Z:function(){return l}});var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("preLoading",{staticStyle:{"background-color":"white"},attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("div",{staticClass:"sk-chase"},[s("div",{staticClass:"sk-chase-dot"}),s("div",{staticClass:"sk-chase-dot"}),s("div",{staticClass:"sk-chase-dot"}),s("div",{staticClass:"sk-chase-dot"}),s("div",{staticClass:"sk-chase-dot"}),s("div",{staticClass:"sk-chase-dot"})])])],1)},i=[],o={data(){return{}},computed:{isLoading(){return this.$store.state.isLoading}}},r=o,c=s(1001),n=(0,c.Z)(r,e,i,!1,null,null,null),l=n.exports},3422:function(t,a,s){s.d(a,{Z:function(){return l}});var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("swiper",{attrs:{options:t.swiperOptions}},t._l(t.productsAll,(function(a){return s("swiper-slide",{key:a.id,staticClass:"slide product-filter"},[s("div",{staticClass:"product-wrapper",class:{"product-disabled":!a.is_enabled},style:{backgroundImage:"url("+a.imageUrl+")"},on:{click:function(s){return t.clickProduct(a)}}},[s("span",{staticClass:"product-tag-category"},[t._v(t._s(a.category))]),a.is_enabled?t._e():s("span",{staticClass:"product-tag-stock"},[t._v("尚無現貨")]),s("div",{staticClass:"product-title mt-1"},[s("h5",[t._v(t._s(a.title))])]),s("div",{staticClass:"product-price"},[s("span",{staticClass:"mb-2 text-danger"},[t._v("特價:"+t._s(a.price))]),s("small",[s("strike",{staticClass:"text-muted"},[t._v("售價:"+t._s(a.origin_price))])],1)]),a.is_enabled?s("button",{staticClass:"btn btn-outline-primary btn-sm ml-auto",attrs:{type:"button",disabled:t.isDisable},on:{click:function(s){return s.stopPropagation(),t.addToCart(a)}}},[s("font-awesome-icon",{attrs:{icon:"fas fa-shopping-cart"}})],1):t._e()])])})),1)],1)},i=[],o={data(){return{isDisable:!1,cartData:JSON.parse(localStorage.getItem("cartData"))||[],swiperOptions:{autoplay:{delay:3e3},loop:!1,breakpoints:{2560:{slidesPerView:2,spaceBetween:15,slidesPerGroup:2},1366:{slidesPerView:2,spaceBetween:15,slidesPerGroup:2},1024:{slidesPerView:2.5,spaceBetween:15,slidesPerGroup:2},768:{slidesPerView:1.5,spaceBetween:10,slidesPerGroup:1},576:{slidesPerView:1.2,spaceBetween:10}}}}},methods:{getProductAll(){this.$store.dispatch("getProductAll")},clickProduct(t){t.is_enabled?this.$router.push(`/front-end/front-cart/${t.id}`):this.$bus.$emit("message:push","商品已售完","danger")},addToCart(t){const a=[];if(this.cartData.forEach((t=>{a.push(t.product_id)})),-1===a.indexOf(t.id)){const a={category:t.category,content:t.content,description:t.description,imageUrl:t.imageUrl,is_enabled:t.is_enabled,product_id:t.id,qty:1,name:t.title,origin_price:t.origin_price,price:t.price};this.cartData.push(a),localStorage.setItem("cartData",JSON.stringify(this.cartData)),this.$bus.$emit("shopCart:update"),this.$bus.$emit("message:push","加入購物車","success")}else{let a={};this.cartData.forEach(((s,e)=>{if(s.product_id===t.id){let{qty:i}=s;a={category:t.category,content:t.content,description:t.description,imageUrl:t.imageUrl,is_enabled:t.is_enabled,product_id:t.id,qty:i+=1,name:t.title,origin_price:t.origin_price,price:t.price},this.cartData.splice(e,1,a)}})),localStorage.setItem("cartData",JSON.stringify(this.cartData)),this.$bus.$emit("shopCart:update"),this.$bus.$emit("message:push","加入購物車","success")}},getcartData(){const t=this;t.cartData=JSON.parse(localStorage.getItem("cartData"))||[]}},computed:{productsAll(){return this.$store.state.productsAll}},created(){this.getProductAll(),this.$bus.$on("localData:update",(()=>{this.getcartData()}))}},r=o,c=s(1001),n=(0,c.Z)(r,e,i,!1,null,"53de7d56",null),l=n.exports},4033:function(t,a,s){s.r(a),s.d(a,{default:function(){return p}});var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("PreLoading"),e("div",{staticClass:"homeBanner d-flex align-items-center"},[e("div",{staticClass:"container-md text-center d-flex flex-column align-items-center"},[e("h2",{staticClass:"typing"},[t._v("帶你找回童年的悸動...")]),e("h4",{staticClass:"title mt-2"},[t._v("歡迎來到我的遊戲網站")]),e("router-link",{staticClass:"text-white btn btn-outline-light px-4 mt-2 new-btn",attrs:{to:"/front-end/new-product"}},[t._v(" 新作評測 ")])],1)]),e("div",{staticClass:"container"},[e("CartIconModal")],1),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleCaptions","data-ride":"carousel","data-aos":"fade-up","data-aos-duration":"2000"}},[t._m(1),e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active",attrs:{"data-bs-interval":"3000"}},[e("img",{staticClass:"d-block w-100",attrs:{src:s(2485),alt:"swiperImage1"}}),e("router-link",{attrs:{to:"/front-end/new-product"}},[e("div",{staticClass:"carousel-text d-flex flex-column justify-content-center"},[e("h2",[t._v("最新評論")]),e("h3",[t._v("給你最即時的遊戲資訊")])])]),e("div",{staticClass:"line"})],1),e("div",{staticClass:"carousel-item",attrs:{"data-bs-interval":"3000"}},[e("img",{staticClass:"d-block w-100",attrs:{src:s(2901),alt:"swiperImage2"}}),e("router-link",{attrs:{to:"/front-end/front-cart"}},[e("div",{staticClass:"carousel-text d-flex flex-column justify-content-center"},[e("h2",[t._v("購物資訊")]),e("h3",[t._v("提供優惠多樣的產品資訊")])])]),e("div",{staticClass:"line"})],1),t._m(2)])]),e("div",{staticClass:"news"},[e("h2",{attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[t._v("最新消息")]),e("div",{staticClass:"row",attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[t._m(3),e("div",{staticClass:"col-12 col-lg-7 d-flex flex-column"},[e("h3",[t._v("超級瑪利歐派對 收錄歷代破百小遊戲")]),e("h5",{staticClass:"my-3"},[e("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"fa-solid fa-calendar-days"}}),t._v(" 2021年6月16日 "),e("font-awesome-icon",{staticClass:"ml-1",attrs:{icon:"fa-solid fa-tags"}}),t._v(" 動作冒險、友情破壞 ")],1),e("p",[t._v(" 任天堂於今（16）日的「Nintendo Direct E3」上， 公開了 《超級瑪利歐派對》系列最新作《超級瑪利歐派對 超級巨星》（Mario Party Superstars）。 《超級瑪利歐派對 超級巨星》玩法也和歷代一樣，使用類似「大富翁」的玩法，四人之前彼此搶奪與賺取金幣和星星，以星星最多者獲勝。 ")]),e("button",{staticClass:"btn btn-secondary align-self-end align-self-lg-start",attrs:{type:"button"}},[t._v(" 閱讀更多 ")])])]),e("div",{staticClass:"row mt-4",attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[t._m(4),e("div",{staticClass:"col-12 col-lg-7 d-flex flex-column"},[e("h3",[t._v("索尼36億美元收購《天命》開發商 Bungie")]),e("h5",{staticClass:"my-3"},[e("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"fa-solid fa-calendar-days"}}),t._v(" 2020年12月1日 "),e("font-awesome-icon",{staticClass:"ml-1",attrs:{icon:"fa-solid fa-tags"}}),t._v(" 遊戲資訊、收購 ")],1),e("p",[t._v(" 微軟買誰換誰買？換索尼買。索尼稍早宣布收購《天命》（Destiny）開發商 Bungie，收購價 36 億美元（折合新台幣約 1,000 億元）。 根據新聞稿指出，索尼將在 Bungie 被收購之後，將維持獨立營運，包括保有自行發行能力，讓玩家得以選擇他們想要遊玩的地方。 ")]),e("button",{staticClass:"btn btn-secondary align-self-end align-self-lg-start",attrs:{type:"button"}},[t._v(" 閱讀更多 ")])])]),e("div",{staticClass:"row mt-4",attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[t._m(5),e("div",{staticClass:"col-12 col-lg-7 d-flex flex-column"},[e("h3",[t._v("《FF14》HXD延燒，中國玩家連署官方道歉")]),e("h5",{staticClass:"my-3"},[e("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"fa-solid fa-calendar-days"}}),t._v(" 2020年4月13日 "),e("font-awesome-icon",{staticClass:"ml-1",attrs:{icon:"fa-solid fa-tags"}}),t._v(" 遊戲資訊、道歉 ")],1),e("p",[t._v(" Square Enix 旗下作品《Final Fantasy XIV》，近期因為有玩家發起連署「要求日本 Square Enix 為了 HXD 事件道歉」再掀話題。 《Final Fantasy XIV》在 6.0 資料片「曉月的終焉」上市後，在全球各地掀起一波「光之戰士」熱潮，不少中國玩家入駐遊戲後對原本的遊戲生態造成變化。 ")]),e("button",{staticClass:"btn btn-secondary align-self-end align-self-lg-start",attrs:{type:"button"}},[t._v(" 閱讀更多 ")])])])]),e("div",{staticClass:"new-product"},[e("h2",{attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[t._v("新品上市")]),e("div",{staticClass:"row no-gutters",attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[e("div",{staticClass:"col-12 col-md-6 product-type",attrs:{value:"動作冒險"},on:{click:t.productType}},[e("img",{attrs:{src:s(4286),alt:"動作冒險"}}),e("h3",[t._v("動作冒險")])]),e("div",{staticClass:"col-12 col-md-6 product-type",attrs:{value:"恐怖"},on:{click:t.productType}},[e("img",{attrs:{src:s(2925),alt:"恐怖"}}),e("h3",[t._v("恐怖")])]),e("div",{staticClass:"col-12 col-md-6 product-type",attrs:{value:"角色扮演"},on:{click:t.productType}},[e("img",{attrs:{src:s(2449),alt:"角色扮演"}}),e("h3",[t._v("角色扮演")])]),e("div",{staticClass:"col-12 col-md-6 product-type",attrs:{value:"射擊"},on:{click:t.productType}},[e("img",{attrs:{src:s(3344),alt:"射擊"}}),e("h3",[t._v("射擊")])])]),e("SessionSwiper",{staticClass:"mt-5",attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}})],1),e("div",{staticClass:"recommend"},[e("h2",{attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[t._v("本周推薦")]),e("div",{staticClass:"row section"},t._l(t.randomProducts,(function(a,s){return e("div",{key:a.id,staticClass:"col-lg-6 col-sm-12 mb-4",attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[e("div",{staticClass:"card bg-secondary",on:{click:function(s){return t.clickProduct(a)}}},[e("div",{staticClass:"card-img"},[e("img",{staticClass:"img-fluid",attrs:{src:a.imageUrl,alt:a.title}})]),e("div",{staticClass:"card-header"},[e("h5",[e("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"fa-solid fa-calendar-days"}}),t._v(t._s(t.randomDate[s])+" ")],1),e("h5",[e("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"fa-solid fa-eye"}}),t._v(t._s(t.randomView[s])+" ")],1)]),e("h3",{staticClass:"card-title text-info"},[t._v(t._s(a.title))]),e("p",{staticClass:"card-text text-info"},[t._v(t._s(a.description))])])])})),0)])])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about",attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[s("h2",[t._v("關於我們")]),s("p",[t._v("我們致力於提供第一手的遊戲資訊，以及最優惠的價格")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ol",{staticClass:"carousel-indicators my-auto"},[s("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"2"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"carousel-item",attrs:{"data-bs-interval":"3000"}},[e("img",{staticClass:"d-block w-100",attrs:{src:s(418),alt:"swiperImage3"}}),e("div",{staticClass:"carousel-text d-flex flex-column justify-content-center"},[e("h2",[t._v("訂閱電子報")]),e("h3",[t._v("訂閱我們，收到第一手的遊戲快報")])]),e("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-12 col-lg-5"},[e("img",{staticClass:"w-100",attrs:{src:s(5891),alt:"marioNews"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-12 col-lg-5"},[e("img",{staticClass:"w-100",attrs:{src:s(718),alt:"destiny2News"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-12 col-lg-5"},[e("img",{staticClass:"w-100",attrs:{src:s(9972),alt:"final fantasy News"}})])}],o=s(3422),r=s(8265),c=s(8477),n={data(){return{products:{},randomProducts:[],randomView:[],randomDate:[]}},components:{SessionSwiper:o.Z,CartIconModal:r.Z,PreLoading:c.Z},methods:{clickProduct(t){this.$router.push(`/front-end/front-cart/${t.id}`)},getRandomDate(){const t=this;for(let a=0;a<4;a+=1){const a=String(Math.floor(10*Math.random())+2010),s=String(Math.floor(12*Math.random())+1),e=String(Math.floor(28*Math.random())+1),i=`${a}/${s}/${e}`;t.randomDate.push(i)}},getRandomView(){const t=this;for(let a=0;a<4;a+=1)t.randomView.push(Math.floor(1e3*Math.random())+100)},weekRecommend(){const t=this,a="https://vue-course-api.hexschool.io/api/benson/products/all";t.$store.dispatch("updateLoading",!0),t.$http.get(a).then((a=>{t.productsAll=a.data.products;const s=[];for(let e=0;e<4;e+=1){const a=Math.floor(Math.random()*t.productsAll.length);s.includes(a)?e-=1:s.push(a)}for(let e=0;e<s.length;e+=1)t.randomProducts.push(t.productsAll[s[e]]);t.$store.dispatch("updateLoading",!1)}))},productType(t){if("IMG"===t.target.nodeName){const a=t.target.alt;localStorage.setItem("type",JSON.stringify(a)),this.$router.push("/front-end/front-cart")}else if("H2"===t.target.nodeName){const a=t.target.innerText;localStorage.setItem("type",JSON.stringify(a)),this.$router.push("/front-end/front-cart")}}},created(){this.weekRecommend(),this.getRandomView(),this.getRandomDate()}},l=n,d=s(1001),u=(0,d.Z)(l,e,i,!1,null,null,null),p=u.exports},8901:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEE0lEQVRoQ92ayUsrQRCHa9S4axT0ICqagwui4r4dBJf/2IOXJIIH44aGKOJycMeDgnvcncevoMMkmSQ9Mz2T5xQMPHyd6v66qqurakbTdV0nBfL29kZ3d3f08PBAr6+v/Hx9fdH39zdrLysro0AgQDU1Nfw0NDRQU1MTVVVVKZidSHMCkkwm6erqih8s3I4Aqq2tjZ/q6mo7Kvg3tkAeHx/p5OSEbm5ubE9s9sOWlhbq6uqiYDBoWa8lkI+PDzo4OGALuCmwTl9fH1VUVEhPIw1yfX1Ne3t77PdeCM7TwMAAtba2Sk1XEOT395f29/fp/PxcSqHqQR0dHdTf308lJSV5VecFQcTZ2triaFRMQXQbHx/nyJdLcoIAIhaLcTj9HwThenp6OieMKQjcaWNjo+iWyNxAWGZyctLUzUxBEolE0c5EIevjzAwODmYNywJBdNrZ2Smkr6j/PzIykhXN0kBwT6ysrHgWYu3uBkLz3Nxc2j2TBrK7u2vpskOeVCgsyi4W5xL5mqzg0hweHk4NT4Eg7VhdXZXVQ729vZxOqBSkPYeHh9IqZ2dnU+lMCmR7e9tS7tTT00Pd3d3Sk8oMPD4+pqOjI5mhPAa52djYGP+bQZDFRiIRaQViIHIhla6FM2pVFhYWOGtmEKs7YWUyAYoz4IYIz2CQaDRqu57It7i6ujqampriIevr6/T8/KycBfXM/Pw8aclkUg+Hw8onqK+v55SivLycdX9+ftLa2porMIuLi6RdXFzo8XhcKUgmhFAOGORvT09PSucbGhoiLZFI6GdnZ8oUo7qDO8ESOBfijPz8/FBpaSlbBm6GcK9KOjs7SYvFYvrt7a0SnchQAYGbFwtGITY6Osq6Nzc3CTsHQBRnsIwqmObmZtLC4TCHX6dihEAYxULRoEEqAcE5RD2Bc4OwDRhYRkWZwOF3eXlZd1q+NjY2cnoNSwgIRKja2to0EKQgiGRGGJQL9/f3jvYR82pLS0tOOkIECLgTdvv9/Z0t8fLywgszAxF/B0xlZSX3vWAZJzCapjkDMVZtgEB4Nfa3coGYwTipRhnEiWuhKRAKhdgSmRD5LCL8CJfZzMwMW+b09JSbHHaEXcvJYccC2tvbOfU3S8HzWUQsGKUAUvLLy0veEDvCh11l+M1chAyInYVn/obDr+oL0TiJVyB8IbqRoggYr0A4RXEraZQ57CrcCjo4aXQzjffCIqk03s3CyguQtMLKbqlbyDW8AEkrdbEgq82HQhBenJGs5gMmtdoOkgFB6jAxMcF1Cbr6qsW0HYRJrDboVC/Mir6cDToo8U3LFDC+aGIL0/ritQJgfPOiBzC+ePUmXMwXL0MFjC9eTxvj+p//YMAI44tPOIxAf/6jmswU4s9/5mSWExX7w7N/RVwpTJxVLTkAAAAASUVORK5CYII="},718:function(t,a,s){t.exports=s.p+"img/destiny 2.9a6fd31f.png"},9972:function(t,a,s){t.exports=s.p+"img/final fantasy.4f3a2f7e.jpg"},5891:function(t,a,s){t.exports=s.p+"img/mario.4107e605.jpg"},97:function(t){t.exports="data:image/png;base64,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"},4286:function(t,a,s){t.exports=s.p+"img/動作冒險.cbfc35c7.png"},3344:function(t,a,s){t.exports=s.p+"img/射擊.4d9d62f4.png"},2925:function(t,a,s){t.exports=s.p+"img/恐怖.05fb035a.jpg"},2449:function(t,a,s){t.exports=s.p+"img/角色扮演.65d8ea98.png"},2485:function(t,a,s){t.exports=s.p+"img/1.35820907.jpg"},2901:function(t,a,s){t.exports=s.p+"img/2.4ee8c109.jpg"},418:function(t,a,s){t.exports=s.p+"img/3.03c5b34d.jpg"}}]);
//# sourceMappingURL=33.69715a72.js.map