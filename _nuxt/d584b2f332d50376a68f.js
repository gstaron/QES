(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{434:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l}));var n=r(490),o=r(486);function c(t){var e=new Date(t);return Object(n.a)(e,"dd. MM. yyyy HH:mm")}function l(t,e){return Object(o.a)(new Date(t),new Date(e))<=0}},497:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(8),r(5),r(11),r(43);var n=r(13),o=(r(150),r(1)),c=r(149),l=r(434);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={middleware:"authenticated",data:function(){return{formatDate:l.a,headers:[{text:this.$t("votingFormManager.table.formListName"),sortable:!1,value:"name"},{text:this.$t("votingFormManager.table.openFrom"),sortable:!1,value:"open_from"},{text:this.$t("votingFormManager.table.openUntil"),sortable:!1,value:"open_until"},{text:this.$t("votingFormManager.table.isPublic"),sortable:!1,value:"isPublic"},{text:this.$t("votingFormManager.table.voterList"),sortable:!1,value:"voterList.voterListName"},{text:this.$t("votingFormManager.table.actions"),sortable:!1,value:"actions",width:300}],items:[],isLoading:!1}},mounted:function(){this.fetchList()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("formManager",["performFetchAllManagerForms"]),{handlePublish:function(t){var e=this.desserts.findIndex((function(e){return e.id===t}));this.desserts[e].isPublished=!this.desserts[e].isPublished},fetchList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.performFetchAllManagerForms();case 3:data=e.sent,t.items=data,t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}})},v=r(60),d=r(68),h=r.n(d),y=r(185),O=r(424),w=r(423),_=r(172),j=r(492),x=r(139),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("div",{staticClass:"d-flex flex-row justify-space-between pt-5 px-5"},[r("div",{staticClass:"display-1"},[t._v(t._s(t.$t("votingFormManager.title")))]),t._v(" "),r("v-btn",{attrs:{icon:"",color:"primary","x-large":"",to:"/voting-form-manager/form/create"}},[r("v-icon",[t._v("mdi-plus")])],1)],1),t._v(" "),r("v-card-text",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,loading:t.isLoading},scopedSlots:t._u([{key:"item.published",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:n.Public?"green":"",dark:""},on:{click:function(e){return t.handlePublish(n.id)}}},[t._v(t._s(n.Public?"public":"private"))])]}},{key:"item.open_from",fn:function(e){var r=e.item;return[t._v(t._s(t.formatDate(r.openFrom)))]}},{key:"item.open_until",fn:function(e){var r=e.item;return[t._v(t._s(t.formatDate(r.openUntil)))]}},{key:"item.actions",fn:function(e){return[e.item.buttons?[r("v-btn",{attrs:{color:"secondary"}},[t._v(t._s(t.$t("votingFormManager.showResults")))])]:[r("v-btn",{attrs:{color:"primary"}},[t._v(t._s(t.$t("votingFormManager.edit")))])]]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:y.a,VCard:O.a,VCardText:w.b,VChip:_.a,VDataTable:j.a,VIcon:x.a})}}]);