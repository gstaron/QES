(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{464:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l}));var n=r(513),o=r(508);function c(t){var e=new Date(t);return Object(n.a)(e,"dd. MM. yyyy HH:mm")}function l(t,e){return Object(o.a)(new Date(t),new Date(e))<=0}},517:function(t,e,r){"use strict";r.r(e);r(15),r(12),r(9),r(7),r(13),r(41);var n=r(10),o=(r(166),r(2)),c=r(73),l=r(464);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{formatDate:l.a,isAfter:l.b,headers:[{text:"Form List Name",sortable:!1,value:"name"},{text:"Open From",sortable:!1,value:"open_from"},{text:"Open Until",sortable:!1,value:"open_until"},{text:"Voter List",sortable:!1,value:"voterList.voterListName"},{text:"Action",sortable:!1,value:"actions",width:300}],items:[],isLoading:!1}},computed:{currentDate:function(){return(new Date).toISOString()}},mounted:function(){this.fetchList()},methods:d(d({},Object(c.b)("public",["performFetchAllPublicForms"])),{},{handlePublish:function(t){var e=this.desserts.findIndex((function(e){return e.id===t}));this.desserts[e].isPublished=!this.desserts[e].isPublished},fetchList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.performFetchAllPublicForms();case 3:data=e.sent,t.items=data.filter((function(e){return Object(l.b)(e.openUntil,t.currentDate)})),t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}})},v=r(67),h=r(77),O=r.n(h),y=r(204),w=r(454),j=r(453),_=r(515),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("div",{staticClass:"d-flex flex-row justify-space-between pt-5 px-5"},[r("div",{staticClass:"display-1"},[t._v(t._s(t.$t("anonym.title")))])]),t._v(" "),r("v-card-text",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,loading:t.isLoading},scopedSlots:t._u([{key:"item.open_from",fn:function(e){var r=e.item;return[t._v(t._s(t.formatDate(r.openFrom)))]}},{key:"item.open_until",fn:function(e){var r=e.item;return[t._v(t._s(t.formatDate(r.openUntil)))]}},{key:"item.actions",fn:function(e){var n=e.item;return[[r("v-btn",{attrs:{color:"secondary",to:"/anonym/results/"+n.votingFormId}},[t._v(t._s(t.$t("anonym.showResults")))])]]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBtn:y.a,VCard:w.a,VCardText:j.b,VDataTable:_.a})}}]);