(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{429:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var n=r(496),o=r(492);function c(e){var t=new Date(e);return Object(n.a)(t,"dd. MM. yyyy HH:mm")}function l(e,t){return Object(o.a)(new Date(e),new Date(t))<=0}},505:function(e,t,r){"use strict";r.r(t);r(12),r(10),r(8),r(5),r(11),r(50);var n=r(14),o=(r(150),r(1)),c=r(149),l=r(429);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={middleware:"authenticated",data:function(){return{formatDate:l.a,headers:[{text:"Form List Name",sortable:!1,value:"name"},{text:"Open From",sortable:!1,value:"open_from"},{text:"Open Until",sortable:!1,value:"open_until"},{text:"Published / Unpublished",sortable:!1,value:"isPublic"},{text:"Voter List",sortable:!1,value:"voterListId"},{text:"Action",sortable:!1,value:"actions",width:300}],items:[],isLoading:!1}},mounted:function(){this.fetchList()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("formManager",["performFetchALlForms"]),{handlePublish:function(e){var t=this.desserts.findIndex((function(t){return t.id===e}));this.desserts[t].isPublished=!this.desserts[t].isPublished},fetchList:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.performFetchALlForms();case 3:data=t.sent,e.items=data,e.isLoading=!1;case 6:case"end":return t.stop()}}),t)})))()}})},m=r(60),v=r(68),h=r.n(v),O=r(185),y=r(419),w=r(418),_=r(172),j=r(499),x=r(139),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("div",{staticClass:"d-flex flex-row justify-space-between pt-5 px-5"},[r("div",{staticClass:"display-1"},[e._v("Voter Lists")]),e._v(" "),r("v-btn",{attrs:{icon:"",color:"primary","x-large":"",to:"/voting-form-manager/form/create"}},[r("v-icon",[e._v("mdi-plus")])],1)],1),e._v(" "),r("v-card-text",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"items-per-page":-1,"hide-default-footer":!0,loading:e.isLoading},scopedSlots:e._u([{key:"item.published",fn:function(t){var n=t.item;return[r("v-chip",{attrs:{color:n.isPublished?"green":"",dark:""},on:{click:function(t){return e.handlePublish(n.id)}}},[e._v(e._s(n.isPublished?"published":"unpublished"))])]}},{key:"item.open_from",fn:function(t){var r=t.item;return[e._v(e._s(e.formatDate(r.openFrom)))]}},{key:"item.open_until",fn:function(t){var r=t.item;return[e._v(e._s(e.formatDate(r.openUntil)))]}},{key:"item.actions",fn:function(t){return[t.item.buttons?[r("v-btn",{attrs:{color:"secondary"}},[e._v("Show results")])]:[r("v-btn",{attrs:{color:"primary"}},[e._v("Edit")])]]}}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:O.a,VCard:y.a,VCardText:w.b,VChip:_.a,VDataTable:j.a,VIcon:x.a})}}]);