(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{464:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(513),o=n(508);function c(t){var e=new Date(t);return Object(r.a)(e,"dd. MM. yyyy HH:mm")}function l(t,e){return Object(o.a)(new Date(t),new Date(e))<=0}},517:function(t,e,n){"use strict";n.r(e);n(15),n(12),n(10),n(7),n(13),n(41);var r=n(9),o=(n(166),n(2)),c=n(73),l=n(464);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{formatDate:l.a,isAfter:l.b,headers:[{text:"Form List Name",sortable:!1,value:"name"},{text:"Open From",sortable:!1,value:"open_from"},{text:"Open Until",sortable:!1,value:"open_until"},{text:"Voter List",sortable:!1,value:"voterList.voterListName"},{text:"Action",sortable:!1,value:"actions",width:300}],items:[],isLoading:!1}},computed:{currentDate:function(){return(new Date).toISOString()}},mounted:function(){this.fetchList()},methods:d(d({},Object(c.b)("public",["performFetchAllPublicForms"])),{},{handlePublish:function(t){var e=this.desserts.findIndex((function(e){return e.id===t}));this.desserts[e].isPublished=!this.desserts[e].isPublished},fetchList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.performFetchAllPublicForms();case 3:data=e.sent,t.items=data.filter((function(e){return Object(l.b)(e.openUntil,t.currentDate)})),t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}})},v=n(67),h=n(77),O=n.n(h),y=n(204),w=n(454),j=n(453),_=n(515),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("div",{staticClass:"d-flex flex-row justify-space-between pt-5 px-5"},[n("div",{staticClass:"display-1"},[t._v(t._s(t.$t("anonym.title")))])]),t._v(" "),n("v-card-text",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,loading:t.isLoading},scopedSlots:t._u([{key:"item.open_from",fn:function(e){var n=e.item;return[t._v(t._s(t.formatDate(n.openFrom)))]}},{key:"item.open_until",fn:function(e){var n=e.item;return[t._v(t._s(t.formatDate(n.openUntil)))]}},{key:"item.actions",fn:function(e){var r=e.item;return[[n("v-btn",{attrs:{color:"secondary",to:"/anonym/results/"+r.votingFormId}},[t._v(t._s(t.$t("anonym.showResults")))])]]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBtn:y.a,VCard:w.a,VCardText:j.b,VDataTable:_.a})}}]);