(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{435:function(e,t,n){var content=n(460);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("37cb66d6",content,!0,{sourceMap:!1})},459:function(e,t,n){"use strict";var r=n(435);n.n(r).a},460:function(e,t,n){(t=n(15)(!1)).push([e.i,".form-generator-background{background-color:rgba(0,0,0,.03)}",""]),e.exports=t},492:function(e,t,n){"use strict";n.r(t);var r=n(509),o=(n(18),{props:{answerNumber:{type:Number,required:!0}}}),l=n(60),c=n(68),d=n.n(c),v=n(185),f=n(139),m=n(86),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-row align-center pa-6"},[n("div",{staticClass:"title mr-5"},[e._v(e._s(e.answerNumber)+".")]),e._v(" "),n("v-text-field",{attrs:{"hide-details":"",outlined:""},on:{change:function(t){return e.$emit("answer-text-changed",e.value)}}}),e._v(" "),n("v-btn",{staticClass:"ml-5",attrs:{icon:"",large:""}},[n("v-icon",{attrs:{color:"red"}},[e._v("mdi-minus")])],1)],1)}),[],!1,null,null,null),_=component.exports;d()(component,{VBtn:v.a,VIcon:f.a,VTextField:m.a});var x={components:{PossibleAnswerRow:_},data:function(){return{numberOfanswers:2}},methods:{saveAnswer:function(e,t){console.log(e,t)},saveQuestion:function(){this.$emit("save-question",{})}}},w=n(417),h=n(171),k=Object(l.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{width:"100%",elevation:"0"}},[n("div",{staticClass:"px-6 pt-6"},[e._v("Possible answers")]),e._v(" "),e._l(e.numberOfanswers,(function(t){return n("div",{key:t},[n("possible-answer-row",{attrs:{"answer-number":t},on:{"answer-text-changed":function(n){return e.saveAnswer(n,t)}}})],1)})),e._v(" "),n("v-divider",{}),e._v(" "),n("div",{staticClass:"d-flex flex-row justify-space-between pa-5 form-generator-background"},[n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.numberOfanswers++}}},[n("v-icon",[e._v("mdi-plus")]),e._v("Add new possible answer")],1),e._v(" "),n("v-btn",{attrs:{color:"green"},on:{click:function(t){return e.saveQuestion()}}},[n("span",{staticClass:"white--text d-flex align-center"},[n("v-icon",{attrs:{left:""}},[e._v("mdi-check")]),e._v("Save question")],1)])],1)],2)}),[],!1,null,null,null),C=k.exports;d()(k,{VBtn:v.a,VCard:w.a,VDivider:h.a,VIcon:f.a});var y={middleware:"authenticated",components:{AddQuestionModal:C},data:function(){return{numberOfQuestions:1,numberOfanswers:2,createdForm:{votingFormId:"",name:"",openFrom:null,openUntil:null,voterListId:"",votingFormItems:[]}}},methods:{saveQuestion:function(e){console.log("Question ID saved ->",e)}},mounted:function(){this.votingFormId=Object(r.a)()}},V=(n(459),n(491)),O=n(475),F=n(400),Q=n(390),j=n(408),I=Object(l.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[n("v-card",{attrs:{width:"100%"}},[n("div",{staticClass:"d-flex flex-row justify-end mr-5 mt-5"},[n("v-btn",{attrs:{icon:"",to:"/voting-form-manager"}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[e._v("\n      Hello you can create your voting form here!\n    ")]),e._v(" "),n("div",{staticClass:"pa-12"},[n("v-divider",{staticClass:"mb-5"}),e._v(" "),n("div",[e._v("Name of the voting form")]),e._v(" "),n("v-text-field",{attrs:{outlined:"",placeholder:"Provide name of the voting form"}}),e._v(" "),n("div",[e._v("Form open from")]),e._v(" "),n("v-dialog",{ref:"dialogFrom",attrs:{"return-value":e.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-text-field",e._g({attrs:{placeholder:"Select date from","prepend-inner-icon":"mdi-calendar-range",readonly:"",outlined:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},r))]}}]),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[e._v(" "),n("v-date-picker",{attrs:{scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialogFrom.save(e.date)}}},[e._v("OK")])],1)],1),e._v(" "),n("div",[e._v("Form open until")]),e._v(" "),n("v-dialog",{ref:"dialogTo",attrs:{"return-value":e.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-text-field",e._g({attrs:{placeholder:"Select date from","prepend-inner-icon":"mdi-calendar-range",readonly:"",outlined:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},r))]}}]),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[e._v(" "),n("v-date-picker",{attrs:{scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialogTo.save(e.date)}}},[e._v("OK")])],1)],1),e._v(" "),n("div",[e._v("Voter list ID")]),e._v(" "),n("v-select",{attrs:{outlined:"",placeholder:"Select voter list"}}),e._v(" "),n("v-divider",{staticClass:"mb-5"}),e._v(" "),n("div",{staticClass:"display-1 mb-10"},[e._v("Questions:")]),e._v(" "),e._l(e.numberOfQuestions,(function(t,r){return n("div",{key:r,staticClass:"mb-12"},[n("div",{staticClass:"d-flex flex-row align-center"},[n("v-card",{attrs:{width:"100%",elevation:"3"}},[n("div",{staticClass:"pa-6"},[n("div",{staticClass:"mb-5 font-weight-bold"},[e._v("\n                "+e._s(r+1)+". Question text\n              ")]),e._v(" "),n("v-text-field",{attrs:{outlined:"","hide-details":""}})],1),e._v(" "),n("add-question-modal",{on:{"save-question":e.saveQuestion}})],1),e._v(" "),n("v-divider",{staticClass:"mb-5"}),e._v(" "),n("v-btn",{staticClass:"ml-12",attrs:{color:"red",small:"",width:"48",height:"48"}},[n("v-icon",{attrs:{color:"white"}},[e._v("mdi-minus")])],1)],1)])}))],2),e._v(" "),n("v-divider"),e._v(" "),n("div",{staticClass:"d-flex flex-row justify-space-between pa-5 form-generator-background"},[n("v-btn",{attrs:{color:"primary","x-large":""},on:{click:function(t){e.numberOfQuestions++}}},[e._v("Add new question")]),e._v(" "),n("v-btn",{attrs:{color:"green","x-large":""}},[n("span",{staticClass:"white--text d-flex align-center"},[n("v-icon",{attrs:{left:""}},[e._v("mdi-check")]),e._v("Save form")],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=I.exports;d()(I,{VBtn:v.a,VCard:w.a,VDatePicker:V.a,VDialog:O.a,VDivider:h.a,VIcon:f.a,VRow:F.a,VSelect:Q.a,VSpacer:j.a,VTextField:m.a})}}]);