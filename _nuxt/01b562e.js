(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{464:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l}));var n=r(513),o=r(508);function c(t){var e=new Date(t);return Object(n.a)(e,"dd. MM. yyyy HH:mm")}function l(t,e){return Object(o.a)(new Date(t),new Date(e))<=0}},522:function(t,e,r){"use strict";r.r(e);r(15),r(12),r(10),r(7),r(13),r(41);var n=r(9),o=(r(166),r(2)),c=r(73),l=r(464);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={middleware:"authenticated",data:function(){return{formatDate:l.a,isAfter:l.b,headers:[{text:this.$t("voter.table.formListName"),sortable:!1,value:"name"},{text:this.$t("voter.table.openFrom"),sortable:!1,value:"open_from"},{text:this.$t("voter.table.openUntil"),sortable:!1,value:"open_until"},{text:this.$t("voter.table.voterList"),sortable:!1,value:"voterList.voterListName"},{text:this.$t("voter.table.actions"),sortable:!1,value:"actions",width:300}],items:[],isLoading:!1}},computed:{currentDate:function(){return(new Date).toISOString()}},mounted:function(){this.fetchList()},methods:v(v({},Object(c.b)("voter",["performFetchAllVoterForms"])),{},{handlePublish:function(t){var e=this.desserts.findIndex((function(e){return e.id===t}));this.desserts[e].isPublished=!this.desserts[e].isPublished},fetchList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.performFetchAllVoterForms();case 3:data=e.sent,t.items=data,t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}})},m=r(67),h=r(77),y=r.n(h),O=r(204),w=r(454),_=r(453),j=r(189),x=r(515),D=r(155),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("div",{staticClass:"d-flex flex-row justify-space-between pt-5 px-5"},[r("div",{staticClass:"display-1"},[t._v(t._s(t.$t("voter.title")))]),t._v(" "),r("v-btn",{attrs:{icon:"",color:"primary","x-large":"",to:"/voting-form-manager/form/create"}},[r("v-icon",[t._v("mdi-plus")])],1)],1),t._v(" "),r("v-card-text",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,loading:t.isLoading},scopedSlots:t._u([{key:"item.published",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:n.isPublished?"green":"",dark:""},on:{click:function(e){return t.handlePublish(n.id)}}},[t._v(t._s(n.isPublished?"published":"unpublished"))])]}},{key:"item.open_from",fn:function(e){var r=e.item;return[t._v(t._s(t.formatDate(r.openFrom)))]}},{key:"item.open_until",fn:function(e){var r=e.item;return[t._v(t._s(t.formatDate(r.openUntil)))]}},{key:"item.actions",fn:function(e){var n=e.item;return[t.isAfter(n.openUntil,t.currentDate)?[r("v-btn",{attrs:{color:"secondary",to:"/voter/results/"+n.votingFormId}},[t._v(t._s(t.$t("voter.showResults")))])]:[r("v-btn",{attrs:{color:"primary",to:"/voter/form/"+n.votingFormId}},[t._v(t._s(t.$t("voter.vote")))])]]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBtn:O.a,VCard:w.a,VCardText:_.b,VChip:j.a,VDataTable:x.a,VIcon:D.a})}}]);