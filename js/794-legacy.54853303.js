"use strict";(self["webpackChunkvue_gamewebsite_3"]=self["webpackChunkvue_gamewebsite_3"]||[]).push([[794],{8477:function(t,e,o){o.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("preLoading",{staticStyle:{"background-color":"white"},attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[o("div",{staticClass:"sk-chase"},[o("div",{staticClass:"sk-chase-dot"}),o("div",{staticClass:"sk-chase-dot"}),o("div",{staticClass:"sk-chase-dot"}),o("div",{staticClass:"sk-chase-dot"}),o("div",{staticClass:"sk-chase-dot"}),o("div",{staticClass:"sk-chase-dot"})])])],1)},a=[],s={data:function(){return{}},computed:{isLoading:function(){return this.$store.state.isLoading}}},r=s,i=o(1001),c=(0,i.Z)(r,n,a,!1,null,null,null),u=c.exports},7794:function(t,e,o){o.r(e),o.d(e,{default:function(){return _}});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("PreLoading"),o("div",{staticClass:"text-right mt-4"},[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.openCouponModal(!0)}}},[t._v(" 建立新的優惠券 ")])]),o("table",{staticClass:"table mt-4"},[t._m(0),o("tbody",t._l(t.coupons,(function(e,n){return o("tr",{key:n},[o("td",[t._v(t._s(e.title))]),o("td",[t._v(t._s(e.percent)+"%")]),o("td",[t._v(t._s(t._f("date")(e.due_date)))]),o("td",[1===e.is_enabled?o("span",{staticClass:"text-success"},[t._v("可使用")]):o("span",{staticClass:"text-muted"},[t._v("已過期")])]),o("td",[o("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(o){return t.openCouponModal(!1,e)}}},[t._v(" 編輯 ")]),o("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(o){return t.delCoupon(e.id)}}},[t._v(" 刪除 ")])])])})),0)]),o("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(1),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("標題")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"coupon_code"}},[t._v("優惠碼")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"coupon_code",placeholder:"請輸入優惠碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"due_date"}},[t._v("到期日")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.due_date,expression:"due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date"},domProps:{value:t.due_date},on:{input:function(e){e.target.composing||(t.due_date=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"price"}},[t._v("折扣百分比")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入折扣百分比"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var o=t.tempCoupon.is_enabled,n=e.target,a=n.checked?1:0;if(Array.isArray(o)){var s=null,r=t._i(o,s);n.checked?r<0&&t.$set(t.tempCoupon,"is_enabled",o.concat([s])):r>-1&&t.$set(t.tempCoupon,"is_enabled",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.tempCoupon,"is_enabled",a)}}}),o("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 可否使用 ")])])])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" Close ")]),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupon}},[t._v(" 更新優惠券 ")])])])])])],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("名稱")]),o("th",[t._v("折扣百分比")]),o("th",[t._v("到期日")]),o("th",[t._v("是否過期")]),o("th",[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Modal title")]),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}];function s(t){if(Array.isArray(t))return t}o(2526),o(1817),o(1539),o(2165),o(8783),o(3948);function r(t,e){var o=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var n,a,s=[],r=!0,i=!1;try{for(o=o.call(t);!(r=(n=o.next()).done);r=!0)if(s.push(n.value),e&&s.length===e)break}catch(c){i=!0,a=c}finally{try{r||null==o["return"]||o["return"]()}finally{if(i)throw a}}return s}}o(7042),o(8309),o(1038),o(4916),o(7601);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function c(t,e){if(t){if("string"===typeof t)return i(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(t,e):void 0}}o(1703);function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){return s(t)||r(t,e)||c(t,e)||u()}var d=o(3019),p=(o(3123),o(2222),o(4029)),m=o.n(p),v=o(8477),f={props:{config:Object},data:function(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,due_date:0,code:""},due_date:new Date,isNew:!1}},components:{PreLoading:v.Z},watch:{due_date:function(){var t=this,e=Math.floor(new Date(t.due_date)/1e3);t.tempCoupon.due_date=e}},methods:{openCouponModal:function(t,e){var o=this;if(m()("#couponModal").modal("show"),o.isNew=t,o.isNew)o.tempCoupon={};else{o.tempCoupon=(0,d.Z)({},e);var n=new Date(1e3*o.tempCoupon.due_date).toISOString().split("T"),a=l(n,1);o.due_date=a[0]}},getCoupons:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("benson","/admin/coupons");t.$store.dispatch("updateLoading",!0),t.$http.get(e).then((function(e){t.coupons=e.data.coupons,t.$store.dispatch("updateLoading",!1)}))},delCoupon:function(t){var e=this,o=this,n="".concat("https://vue-course-api.hexschool.io","/api/").concat("benson","/admin/coupon/").concat(t);o.$http.delete(n).then((function(){e.$bus.$emit("message:push","刪除成功","success"),e.getCoupons()}))},updateCoupon:function(){var t=this,e=this;if(e.isNew){var o="".concat("https://vue-course-api.hexschool.io","/api/").concat("benson","/admin/coupon");e.$http.post(o,{data:e.tempCoupon}).then((function(){m()("#couponModal").modal("hide"),t.getCoupons()}))}else{var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("benson","/admin/coupon/").concat(e.tempCoupon.id);e.due_date=new Date(1e3*e.tempCoupon.due_date),e.$http.put(n,{data:e.tempCoupon}).then((function(){m()("#couponModal").modal("hide"),t.getCoupons()}))}}},created:function(){this.getCoupons()}},b=f,h=o(1001),C=(0,h.Z)(b,n,a,!1,null,null,null),_=C.exports},3019:function(t,e,o){o.d(e,{Z:function(){return s}});o(7941),o(2526),o(7327),o(1539),o(5003),o(4747),o(9337);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}}}]);
//# sourceMappingURL=794-legacy.54853303.js.map