"use strict";(self["webpackChunkvue_gamewebsite_3"]=self["webpackChunkvue_gamewebsite_3"]||[]).push([[561],{3561:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row order"},[r("div",{staticClass:"order-info"},[r("label",{staticClass:"orderInfo",attrs:{for:"orderInfo"}},[r("h1",[e._v("請輸入訂單號碼：")]),r("div",{staticClass:"order-input mt-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderId,expression:"orderId"}],staticClass:"form-control",attrs:{type:"text",id:"orderInfo"},domProps:{value:e.orderId},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.toOrder.apply(null,arguments)},input:function(t){t.target.composing||(e.orderId=t.target.value)}}}),r("button",{staticClass:"btn btn-danger ml-2",attrs:{type:"button",value:"確認",name:"訂單確認"},on:{click:e.toOrder}},[e._v(" 確認 ")])])])])])])},o=[],s={data:function(){return{orderId:""}},methods:{toOrder:function(){this.$router.push("/front-end/order-review/".concat(this.orderId))}}},a=s,d=r(1001),i=(0,d.Z)(a,n,o,!1,null,"145952e3",null),u=i.exports}}]);
//# sourceMappingURL=561-legacy.8eebf14d.js.map