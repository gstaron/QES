(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{519:function(t,e,r){"use strict";r.r(e);r(15),r(11),r(9),r(7),r(13),r(41);var n=r(12),o=r(1),l=(r(65),r(86));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={middleware:"authenticated",data:function(){return{allLists:[]}},computed:{selectedForm:function(){var t=this;return this.allLists&&this.allLists.find((function(e){return e.votingFormId===t.$route.params.id}))},openFrom:function(){var time=this.selectedForm.openFrom;return new Date(time).toLocaleString()},openUntil:function(){var time=this.selectedForm.openUntil;return new Date(time).toLocaleString()},endingType:function(){return this.selectedForm.endingType?this.$t("votingFormManager."+this.selectedForm.endingType):"Type not defined"},isPublic:function(){return this.selectedForm.isPublic?this.$t("general.yes"):this.$t("general.no")},allVotersHasVoted:function(){return this.selectedForm.allVotersHasVoted?this.$t("general.yes"):this.$t("general.no")}},mounted:function(){this.fetchList()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)("formManager",["stopVoting"]),{},Object(l.b)("voter",["performFetchAllVoterForms"]),{endVoting:function(){var t=this.$route.params.id;this.stopVoting({votingFormId:t})},fetchList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.performFetchAllVoterForms();case 2:data=e.sent,t.allLists=data;case 4:case"end":return e.stop()}}),e)})))()}})},d=r(64),m=r(72),f=r.n(m),_=r(193),h=r(436),y=r(178),F=r(157),O=r(493),w=r(494),V=r(419),j=r(452),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[t.selectedForm?r("v-card",{attrs:{width:"100%"}},[r("form",[r("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[t._v("\n          "+t._s(t.selectedForm.name)+"\n        ")]),t._v(" "),r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[r("tr",[r("th",[t._v("Is public")]),t._v(" "),r("td",[t._v("\n                  "+t._s(t.isPublic)+"\n                ")])]),t._v(" "),r("tr",[r("th",[t._v("Voting started at")]),t._v(" "),r("td",[t._v("\n                  "+t._s(t.openFrom)+"\n                ")])]),t._v(" "),r("tr",[r("th",[t._v("Voting open until")]),t._v(" "),r("td",[t._v("\n                  "+t._s(t.openUntil)+"\n                ")])]),t._v(" "),r("tr",[r("th",[t._v("Ending type")]),t._v(" "),r("td",[t._v("\n                  "+t._s(t.endingType)+"\n                ")])]),t._v(" "),r("tr",[r("th",[t._v("All voters has voted")]),t._v(" "),r("td",[t._v("\n                  "+t._s(t.allVotersHasVoted)+"\n                ")])])])]},proxy:!0}],null,!1,3306580995)}),t._v(" "),r("v-divider",{staticClass:"mb-10"}),t._v(" "),t._l(t.selectedForm.votingFormItems,(function(e,n){return r("div",{key:e.votingFormItemId,staticClass:"px-12"},[r("div",{staticClass:"body-2 mb-2"},[t._v("\n            "+t._s(t.$t("voter.question")+" "+(n+1))+"\n          ")]),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(e.question))]),t._v(" "),r("div",{staticClass:"pl-5"},[r("v-radio-group",[t._l(e.votingFormItemOptions,(function(option){return r("v-radio",{key:option.votingFormItemOptionId,staticClass:"my-2",attrs:{label:option.option,value:option.option}})})),t._v(" "),r("v-radio",{staticClass:"my-2",attrs:{label:t.$t("voter.labelDoNotWantToAnswer"),value:"N/A"}})],2),t._v(" "),r("v-divider",{staticClass:"mb-10"})],1)])})),t._v(" "),r("div",{staticClass:"d-flex flex-row justify-center px-12 mb-6 body"},[r("v-btn",{attrs:{"x-large":"",color:"primary"},on:{click:t.endVoting}},[t._v(t._s(t.$t("votingFormManager.stopVoting")))])],1)],2)]):r("div",[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:_.a,VCard:h.a,VDivider:y.a,VProgressCircular:F.a,VRadio:O.a,VRadioGroup:w.a,VRow:V.a,VSimpleTable:j.a})}}]);