(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{434:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l}));var n=r(490),o=r(486);function c(t){var e=new Date(t);return Object(n.a)(e,"dd. MM. yyyy HH:mm")}function l(t,e){return Object(o.a)(new Date(t),new Date(e))<=0}},498:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(8),r(5),r(11),r(43);var n=r(13),o=r(1),c=r(149),l=r(434);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={middleware:"authenticated",data:function(){return{formatDate:l.a,headers:[{text:this.$t("votingListManager.indexTable.voterListName"),sortable:!0,value:"voterListName"},{text:this.$t("votingListManager.indexTable.actions"),sortable:!1,align:"right",value:"actions"}],items:[],isLoading:!1}},mounted:function(){this.fetchList()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("listManager",["performFetchList"]),{fetchList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.performFetchList();case 3:data=e.sent,t.items=data,t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}})},f=r(60),m=r(68),h=r.n(m),O=r(185),w=r(424),y=r(423),j=r(172),L=r(492),x=r(139),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("div",{staticClass:"d-flex flex-row justify-space-between pt-5 px-5"},[r("div",{staticClass:"display-1"},[t._v("\n      "+t._s(t.$t("votingListManager.title"))+"\n    ")]),t._v(" "),r("v-btn",{attrs:{icon:"",color:"primary","x-large":"",to:"/voting-list-manager/form/create"}},[r("v-icon",[t._v("mdi-plus")])],1)],1),t._v(" "),r("v-card-text",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,loading:t.isLoading},scopedSlots:t._u([{key:"item.published",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:n.isPublished?"green":"",dark:""}},[t._v(t._s(n.isPublished?t.$t("votingListManager.published"):t.$t("votingListManager.unpublished")))])]}},{key:"item.actions",fn:function(e){var n=e.item;return[r("v-btn",{attrs:{color:"secondary",to:"/voting-list-manager/form/"+n.voterListId}},[t._v(t._s(t.$t("votingListManager.showDetails")))])]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:O.a,VCard:w.a,VCardText:y.b,VChip:j.a,VDataTable:L.a,VIcon:x.a})}}]);