"use strict";(self["webpackChunkvue_gamewebsite_3"]=self["webpackChunkvue_gamewebsite_3"]||[]).push([[564],{3564:function(s,e,t){t.r(e),t.d(e,{default:function(){return l}});var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"login"},[t("div",{staticClass:"login-container"},[t("form",{staticClass:"form-signIn",on:{submit:function(e){return e.preventDefault(),s.signIn.apply(null,arguments)}}},[t("h3",{staticClass:"mb-3 font-weight-normal"},[s._v("管理員登入")]),t("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[s._v("Email address")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:s.user.username},on:{input:function(e){e.target.composing||s.$set(s.user,"username",e.target.value)}}}),t("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[s._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:s.user.password},on:{input:function(e){e.target.composing||s.$set(s.user,"password",e.target.value)}}}),t("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[s._v(" 登入 ")])])])])},r=[],n={data(){return{user:{username:"",password:""}}},methods:{signIn(){const s=this,e="https://vue-course-api.hexschool.io/admin/signin";s.$http.post(e,s.user).then((e=>{if(e.data.success){const{token:t}=e.data,{expired:a}=e.data;document.cookie=`hexToken=${t};expires=${new Date(a)};`,s.$router.push("/admin/admin-products")}}))}}},o=n,i=t(1001),u=(0,i.Z)(o,a,r,!1,null,null,null),l=u.exports}}]);
//# sourceMappingURL=564.cff43cfb.js.map