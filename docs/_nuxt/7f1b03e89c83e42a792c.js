(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{429:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return f}));var n=r(496),o=r(492);function c(t){var e=new Date(t);return Object(n.a)(e,"dd. MM. yyyy HH:mm")}function f(t,e){return Object(o.a)(new Date(t),new Date(e))<=0}},502:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(8),r(5),r(11),r(50);var n=r(14),o=(r(150),r(1)),c=r(149),f=r(429);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={middleware:"authenticated",computed:{currentDate:function(){return(new Date).toISOString()}},data:function(){return{formatDate:f.a,isAfter:f.b,headers:[{text:"Form List Name",sortable:!1,value:"name"},{text:"Open From",sortable:!1,value:"open_from"},{text:"Open Until",sortable:!1,value:"open_until"},{text:"Voter List",sortable:!1,value:"voterListId"},{text:"Action",sortable:!1,value:"actions",width:300}],items:[],isLoading:!1}},mounted:function(){this.fetchList()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("formManager",["performFetchALlForms"]),{handlePublish:function(t){var e=this.desserts.findIndex((function(e){return e.id===t}));this.desserts[e].isPublished=!this.desserts[e].isPublished},fetchList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.performFetchALlForms();case 3:data=e.sent,t.items=data.filter((function(e){return Object(f.b)(e.openUntil,t.currentDate)})),t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}})},m=r(60),v=r(68),h=r.n(v),O=r(185),w=r(419),y=r(418),j=r(499),_=r(139),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("div",{staticClass:"d-flex flex-row justify-space-between pt-5 px-5"},[r("div",{staticClass:"display-1"},[t._v("List of Votings")]),t._v(" "),r("v-btn",{attrs:{icon:"",color:"primary","x-large":"",to:"/voting-form-manager/form/create"}},[r("v-icon",[t._v("mdi-plus")])],1)],1),t._v(" "),r("v-card-text",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,loading:t.isLoading},scopedSlots:t._u([{key:"item.open_from",fn:function(e){var r=e.item;return[t._v(t._s(t.formatDate(r.openFrom)))]}},{key:"item.open_until",fn:function(e){var r=e.item;return[t._v(t._s(t.formatDate(r.openUntil)))]}},{key:"item.actions",fn:function(e){var n=e.item;return[[r("v-btn",{attrs:{color:"secondary",to:"/voter/results/"+n.votingFormId}},[t._v("Show results")])]]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:O.a,VCard:w.a,VCardText:y.b,VDataTable:j.a,VIcon:_.a})}}]);