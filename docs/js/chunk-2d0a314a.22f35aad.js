(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a314a"],{"013f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"h-100 bg-plum-plate bg-animation"},[a("div",{staticClass:"d-flex h-100 justify-content-center align-items-center"},[a("b-col",{staticClass:"mx-auto app-login-box",attrs:{md:"8"}},[a("div",{staticClass:"app-logo-inverse mx-auto mb-3"}),a("div",{staticClass:"modal-dialog w-100 mx-auto"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"h5 modal-title text-center"},[a("h4",{staticClass:"mt-2"},[a("div",[t._v("Welcome back,")]),a("span",[t._v("Please sign in to your account below.")])])]),a("b-form-group",{attrs:{id:"exampleInputGroup1","label-for":"exampleInput1",description:"We'll never share your email with anyone else."}},[a("b-form-input",{attrs:{id:"exampleInput1",type:"email",required:"",placeholder:"Enter email..."},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{id:"exampleInputGroup2","label-for":"exampleInput2"}},[a("b-form-input",{attrs:{id:"exampleInput2",type:"password",required:"",placeholder:"Enter password..."},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-form-checkbox",{attrs:{name:"check",id:"exampleCheck"}},[t._v("\n                Keep me logged in\n              ")]),a("div",{staticClass:"divider"}),a("h6",{staticClass:"mb-0"},[t._v("\n                No account?\n                "),a("router-link",{staticClass:"text-primary",attrs:{to:"/register"}},[t._v("Sign up now")])],1)],1),t.message?a("div",{staticStyle:{"text-align":"center",color:"red"}},[t._v("\n              "+t._s(t.message)+"\n            ")]):t._e(),a("div",{staticClass:"modal-footer clearfix"},[a("div",{staticClass:"float-left"},[a("a",{staticClass:"btn-lg btn btn-link",attrs:{href:"javascript:void(0);"}},[t._v("Recover Password")])]),a("div",{staticClass:"float-left"},[a("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.loginAnonymous}},[t._v("Anonymous Login")])],1),a("div",{staticClass:"float-right"},[a("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.login}},[t._v("Login")])],1)])])]),a("div",{staticClass:"text-center text-white opacity-8 mt-3"},[t._v("\n          Copyright © ArchitectUI 2019\n        ")])])],1)])])},o=[],r=a("f499"),i=a.n(r),n=(a("96cf"),a("3b8d")),l=(a("a481"),a("69f2")),c=a.n(l),m={data:function(){return{form:{email:"",password:""},message:""}},methods:{loginAnonymous:function(){localStorage.setItem("loggedIn",!0),localStorage.setItem("role","Anonymous"),this.$router.replace(this.$route.query.redirect||"/voting")},login:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.form.email||!this.form.password){t.next=20;break}return t.prev=1,e=new FormData,e.append("email",this.form.email),e.append("passwordSHA256Hash",c()("sha256").update(this.form.password).digest("hex")),t.next=7,this.$http.post("http://qesadila.azurewebsites.net/v1/Authorize/Login",e);case 7:a=t.sent,s=a.data,localStorage.setItem("token",s.token),localStorage.setItem("loggedIn",!0),localStorage.setItem("user",i()(s.user)),this.$router.push("/"),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](1),console.log(t.t0);case 18:t.next=21;break;case 20:console.log("Musíte zadat přihlašovací údaje");case 21:case"end":return t.stop()}}),t,this,[[1,15]])})));function e(){return t.apply(this,arguments)}return e}()}},p=m,d=a("2877"),u=Object(d["a"])(p,s,o,!1,null,null,null);e["default"]=u.exports}}]);