(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{416:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return v}));var n=r(417),o=r(0),c=Object(o.i)("v-card__actions"),d=Object(o.i)("v-card__subtitle"),l=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");n.a},488:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{headers:[{text:"Form List Name",sortable:!1,value:"name"},{text:"Registered Voters",sortable:!1,value:"registered_voters"},{text:"Invitations sent",sortable:!1,value:"invitations_sent"},{text:"Action",sortable:!1,value:"actions"}],desserts:[{name:"Donation distribution for schools",registered_voters:25,invitations_sent:5},{name:"Public services",registered_voters:30,invitations_sent:12}]}}},o=r(60),c=r(68),d=r.n(c),l=r(185),v=r(417),_=r(416),f=r(172),h=r(484),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("\n    Voter Lists\n  ")]),t._v(" "),r("v-card-text",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"items-per-page":-1,"hide-default-footer":!0},scopedSlots:t._u([{key:"item.published",fn:function(e){var n=e.item;return[r("v-chip",{attrs:{color:n.isPublished?"green":"",dark:""}},[t._v(t._s(n.isPublished?"published":"unpublished"))])]}},{key:"item.actions",fn:function(){return[r("v-btn",{attrs:{color:"secondary"}},[t._v("Show details")]),t._v(" "),r("v-btn",{attrs:{color:"error"}},[t._v("Delete")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:l.a,VCard:v.a,VCardText:_.b,VCardTitle:_.c,VChip:f.a,VDataTable:h.a})}}]);