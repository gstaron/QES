(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{517:function(e,t,r){"use strict";r.r(t);r(15),r(12),r(9),r(7),r(13),r(41);var n=r(10),o=r(1),l=r(86);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={data:function(){return{userAnwers:{},selectedForm:{},voterTableHeaders:[{text:"Voter name",sortable:!0,value:"voter.name"},{text:"Answers",sortable:!0,value:"votingFormItemOption.option"}],answersTableHeaders:[{text:"Option",sortable:!0,value:"option"},{text:"Sum of positive answers",sortable:!0,value:"sumOfPositiveAnswers"},{text:"Sum of negative answers",sortable:!0,value:"sumOfNegativeAnswers"}]}},mounted:function(){this.fetchVotingForm()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)("voterForm",["getSinglePublicVoting"]),{fetchVotingForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$route.params.id,t.next=3,e.getSinglePublicVoting({votingFormId:r});case 3:data=t.sent,e.selectedForm=data;case 5:case"end":return t.stop()}}),t)})))()}})},m=r(64),f=r(72),d=r.n(f),_=r(193),w=r(436),y=r(497),h=r(157),O=r(419),F=r(452),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[e.selectedForm?r("v-card",{staticClass:"pa-5",attrs:{width:"100%"}},[r("h1",[e._v("Voting result")]),e._v(" "),r("h2",[e._v("Votes by voter")]),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.voterTableHeaders,items:e.selectedForm.votersChoices,"items-per-page":-1,"hide-default-footer":!0,loading:e.isLoading},scopedSlots:e._u([{key:"item.open_from",fn:function(t){var r=t.item;return[e._v(e._s(e.formatDate(r.openFrom)))]}},{key:"item.open_until",fn:function(t){var r=t.item;return[e._v(e._s(e.formatDate(r.openUntil)))]}},{key:"item.actions",fn:function(t){var n=t.item;return[[r("v-btn",{attrs:{color:"secondary",to:"/anonym/results/"+n.votingFormId}},[e._v(e._s(e.$t("anonym.showResults")))])]]}}],null,!1,866009969)}),e._v(" "),r("h2",[e._v("Votes by question")]),e._v(" "),e._l(e.selectedForm.votingFormItems,(function(t){return r("div",{key:t},[r("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[r("tbody",[r("tr",[r("th",[e._v("Question")]),e._v(" "),r("td",[e._v("\n                "+e._s(t.question)+"\n              ")])]),e._v(" "),r("tr",[r("th",[e._v("Number of positive answers")]),e._v(" "),r("td",[e._v("\n                "+e._s(t.numberOfPositiveAnswers)+"\n              ")])]),e._v(" "),r("tr",[r("th",[e._v("Number of negative answers")]),e._v(" "),r("td",[e._v("\n                "+e._s(t.numberOfNegativeAnswers)+"\n              ")])])])]},proxy:!0}],null,!0)}),e._v(" "),e._l(t.votingFormItemResults,(function(t){return r("div",{key:t},[r("h3",[e._v(e._s(t.question))])])})),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.answersTableHeaders,items:t.votingFormItemResult.votingFormItemOptionResults,"items-per-page":-1,"hide-default-footer":!0,loading:e.isLoading},scopedSlots:e._u([{key:"item.open_from",fn:function(t){var r=t.item;return[e._v(e._s(e.formatDate(r.openFrom)))]}},{key:"item.open_until",fn:function(t){var r=t.item;return[e._v(e._s(e.formatDate(r.openUntil)))]}},{key:"item.actions",fn:function(t){var n=t.item;return[[r("v-btn",{attrs:{color:"secondary",to:"/anonym/results/"+n.votingFormId}},[e._v(e._s(e.$t("anonym.showResults")))])]]}}],null,!0)})],2)}))],2):r("div",[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:_.a,VCard:w.a,VDataTable:y.a,VProgressCircular:h.a,VRow:O.a,VSimpleTable:F.a})}}]);