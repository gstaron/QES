(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{508:function(n,t,e){"use strict";e.r(t);var o=e(253),c={data:function(){return{authenticated:"Unauthenticated",connection:null}},mounted:function(){var n=this;this.connection=(new o.HubConnectionBuilder).withUrl("http://localhost:58080/hubs/signin").configureLogging(o.LogLevel.Information).build(),this.connection.start(),this.connection.on("Authenticate",(function(t){var e=new FormData;e.append("base64message",t),n.$axios.post("v1/Voter/SubmitVote",e)})),this.connection.on("Logout",(function(t,e){n.authenticated="Unauthenticated"}))},methods:{onclick:function(){return this.connection.invoke("SignMessage",btoa('{"value": "test"}'),"EnVoterAnswer")}}},r=e(64),component=Object(r.a)(c,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("button",{staticClass:"btn btn-primary",on:{click:this.onclick}},[this._v("Click")])])}),[],!1,null,null,null);t.default=component.exports}}]);