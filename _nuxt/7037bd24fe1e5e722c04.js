(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{505:function(e,t,r){"use strict";r.r(t);r(12),r(10),r(8),r(5),r(11),r(25),r(43);var n=r(13),o=r(1),l=r(149);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={middleware:"authenticated",data:function(){return{headers:[{text:this.$t("votingListManager.votersTable.voterName"),sortable:!0,value:"name"},{text:this.$t("votingListManager.votersTable.voterEmail"),sortable:!0,value:"email"},{text:this.$t("votingListManager.votersTable.voterQes"),sortable:!0,value:"file"},{text:this.$t("votingListManager.votersTable.actions"),sortable:!1,value:"actions",width:300}],listName:"",listId:null,voters:[],dialog:!1,isPublic:!1,voter:{isRegistered:!0,email:"",file:null,isQes:!0}}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)("listManager",["performAddList","performAssignVoterToList"]),{},Object(l.b)("voter",["performAddVoter"]),{handleUserAnswerChange:function(e,t){this.userAnwers[e]=t},addUsers:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.performAddList({name:e.listName,isPublic:e.isPublic});case 2:r=t.sent,e.listId=r.voterListId;case 4:case"end":return t.stop()}}),t)})))()},createAndAttachUser:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.voter.isRegistered){t.next=3;break}return t.next=3,e.performAddVoter({email:e.voter.email,file:e.voter.file,isQes:e.voter.isQes});case 3:return t.next=5,e.performAssignVoterToList({userEmail:e.voter.email,voterListId:e.listId});case 5:(r=t.sent)&&(n="?",o=!1,r.voter&&(n=r.voter.name,o=r.voter.isQes),e.voters.push({email:e.voter.email,name:n,isQes:o,id:r.voterId})),e.voter.email="",e.voter.file=null,e.dialog=!1,e.voter.isQes=!0;case 11:case"end":return t.stop()}}),t)})))()}})},d=r(60),f=r(68),m=r.n(f),h=r(185),_=r(424),x=r(423),w=r(492),L=r(472),O=r(171),V=r(487),y=r(407),$=r(415),j=r(475),k=r(86),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[r("v-card",{attrs:{width:"100%"}},[r("form",[r("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[e._v("\n        "+e._s(e.$t("votingListManager.createNewVoterList"))+"\n      ")]),e._v(" "),r("v-divider",{staticClass:"mb-10"}),e._v(" "),r("div",{staticClass:"px-5"},[r("v-text-field",{attrs:{label:e.$t("votingListManager.labelListName"),outlined:""},model:{value:e.listName,callback:function(t){e.listName=t},expression:"listName"}}),e._v(" "),r("v-switch",{attrs:{label:e.$t("votingListManager.labelIsPublic")},model:{value:e.isPublic,callback:function(t){e.isPublic=t},expression:"isPublic"}})],1),e._v(" "),r("div",{staticClass:"d-flex flex-row justify-center px-12 mb-6 body"},[r("v-btn",{attrs:{"x-large":"",color:"primary"},on:{click:e.addUsers}},[e._v(e._s(e.$t("votingListManager.continue")))])],1),e._v(" "),null!==e.listId?r("div",{staticClass:"pa-5"},[r("h2",{staticClass:"mb-3 text-center"},[e._v(e._s(e.$t("votingListManager.voters")))]),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.voters,"items-per-page":-1,"hide-default-footer":!0}}),e._v(" "),r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({staticClass:"mt-5",attrs:{color:"red lighten-2",dark:""}},n),[e._v("\n              "+e._s(e.$t("votingListManager.addVoter"))+"\n            ")])]}}],null,!1,2905708609),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("\n              "+e._s(e.$t("votingListManager.addVoter"))+"\n            ")]),e._v(" "),r("v-card-text",{staticClass:"pt-5"},[r("v-text-field",{attrs:{label:e.$t("votingListManager.labelVoterEmail"),outlined:""},model:{value:e.voter.email,callback:function(t){e.$set(e.voter,"email",t)},expression:"voter.email"}}),e._v(" "),r("v-switch",{attrs:{label:e.$t("votingListManager.labelVoterSubmittedGDPR")},model:{value:e.voter.isRegistered,callback:function(t){e.$set(e.voter,"isRegistered",t)},expression:"voter.isRegistered"}}),e._v(" "),e.voter.isRegistered?e._e():r("v-file-input",{attrs:{label:e.$t("votingListManager.labelSignFile"),outlined:""},model:{value:e.voter.file,callback:function(t){e.$set(e.voter,"file",t)},expression:"voter.file"}}),e._v(" "),e.voter.isRegistered?e._e():r("v-switch",{attrs:{label:e.$t("votingListManager.labelIsQes")},model:{value:e.voter.isQes,callback:function(t){e.$set(e.voter,"isQes",t)},expression:"voter.isQes"}})],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:e.createAndAttachUser}},[e._v("\n                "+e._s(e.$t("votingListManager.addVoter"))+"\n              ")])],1)],1)],1)],1):e._e()],1)])],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:h.a,VCard:_.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c,VDataTable:w.a,VDialog:L.a,VDivider:O.a,VFileInput:V.a,VRow:y.a,VSpacer:$.a,VSwitch:j.a,VTextField:k.a})}}]);