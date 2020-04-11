(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{437:function(e,t,n){var content=n(462);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("37cb66d6",content,!0,{sourceMap:!1})},461:function(e,t,n){"use strict";var r=n(437);n.n(r).a},462:function(e,t,n){(t=n(15)(!1)).push([e.i,".form-generator-background{background-color:rgba(0,0,0,.03)}",""]),e.exports=t},494:function(e,t,n){"use strict";n.r(t);n(12),n(10),n(8),n(5),n(11),n(50);var r=n(14),o=n(1),l=n(149),c=(n(18),{props:{answerNumber:{type:Number,required:!0}},data:function(){return{textFieldValue:""}},methods:{emitAnswer:function(){this.$emit("answer-text-changed",this.textFieldValue)}}}),d=n(60),v=n(68),m=n.n(v),f=n(86),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-row align-center pa-6"},[n("div",{staticClass:"title mr-5"},[e._v(e._s(e.answerNumber)+".")]),e._v(" "),n("v-text-field",{attrs:{"hide-details":"",outlined:""},on:{change:e.emitAnswer},model:{value:e.textFieldValue,callback:function(t){e.textFieldValue=t},expression:"textFieldValue"}})],1)}),[],!1,null,null,null),x=component.exports;m()(component,{VTextField:f.a});var _={components:{PossibleAnswerRow:x},props:{questionNumber:{type:Number,required:!0}},data:function(){return{numberOfOptions:2,questionData:{question:"",order:this.questionNumber+1,votingFormItemOptions:[{option:"",order:1},{option:"",order:2}]}}},methods:{saveOption:function(e,t){e-1>this.questionData.votingFormItemOptions.length&&this.questionData.votingFormItemOptions.push({}),this.questionData.votingFormItemOptions[e-1]={option:t,order:e}},saveQuestion:function(){this.$emit("save-question",this.questionData)}}},h=n(185),w=n(417),F=n(171),O=n(139),y=Object(d.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{width:"100%",elevation:"0"}},[n("div",{staticClass:"pa-6"},[n("div",{staticClass:"mb-5 font-weight-bold"},[e._v("\n      "+e._s(e.questionNumber+1)+". Question text\n    ")]),e._v(" "),n("v-text-field",{attrs:{outlined:"","hide-details":""},model:{value:e.questionData.text,callback:function(t){e.$set(e.questionData,"text",t)},expression:"questionData.text"}})],1),e._v(" "),n("div",{staticClass:"px-6 pt-6"},[e._v("Possible answers")]),e._v(" "),e._l(e.numberOfOptions,(function(t){return n("div",{key:t},[n("possible-answer-row",{attrs:{"answer-number":t},on:{"answer-text-changed":function(n){return e.saveOption(t,n)}}})],1)})),e._v(" "),n("v-divider",{}),e._v(" "),n("div",{staticClass:"d-flex flex-row justify-space-between pa-5 form-generator-background"},[n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.numberOfanswers++}}},[n("v-icon",[e._v("mdi-plus")]),e._v("Add new possible answer")],1),e._v(" "),n("v-btn",{attrs:{color:"green"},on:{click:function(t){return e.saveQuestion()}}},[n("span",{staticClass:"white--text d-flex align-center"},[n("v-icon",{attrs:{left:""}},[e._v("mdi-check")]),e._v("Save question")],1)])],1)],2)}),[],!1,null,null,null),k=y.exports;function V(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}m()(y,{VBtn:h.a,VCard:w.a,VDivider:F.a,VIcon:O.a,VTextField:f.a});var j={middleware:"authenticated",components:{AddQuestionModal:k},data:function(){return{numberOfQuestions:1,createdForm:{name:"",openFrom:null,openUntil:null,voterListId:"",votingFormItems:[]},voterLists:[]}},mounted:function(){this.fetchVoterLists()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)("listManager",["performFetchList"]),{setDateFrom:function(e){this.createdForm.openFrom=e},setDateUntil:function(e){this.createdForm.openUntil=e},saveQuestion:function(e){console.log("Question ID saved ->",e),this.createdForm.votingFormItems.push(e)},saveForm:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Form saved ->",e.createdForm),console.log("String ->",JSON.stringify(e.createdForm)),n=new FormData,r=JSON.stringify(e.createdForm),n.append("msg",r),t.next=7,e.$axios.put("v1/Voting/Form",n);case 7:case"end":return t.stop()}}),t)})))()},fetchVoterLists:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.performFetchList();case 2:n=t.sent,e.voterLists=n;case 4:case"end":return t.stop()}}),t)})))()}})},D=(n(461),n(493)),C=n(477),I=n(400),S=n(390),U=n(408),L=Object(d.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[n("v-card",{attrs:{width:"100%"}},[n("div",{staticClass:"d-flex flex-row justify-end mr-5 mt-5"},[n("v-btn",{attrs:{icon:"",to:"/voting-form-manager"}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[e._v("\n      Hello you can create your voting form here!\n    ")]),e._v(" "),n("div",{staticClass:"pa-12"},[n("v-divider",{staticClass:"mb-5"}),e._v(" "),n("div",[e._v("Name of the voting form")]),e._v(" "),n("v-text-field",{attrs:{outlined:"",placeholder:"Provide name of the voting form"},model:{value:e.createdForm.name,callback:function(t){e.$set(e.createdForm,"name",t)},expression:"createdForm.name"}}),e._v(" "),n("div",[e._v("Form open from")]),e._v(" "),n("v-dialog",{ref:"dialogFrom",attrs:{"return-value":e.dateFrom,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.dateFrom=t},"update:return-value":function(t){e.dateFrom=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-text-field",e._g({attrs:{placeholder:"Select date from","prepend-inner-icon":"mdi-calendar-range",readonly:"",outlined:""},model:{value:e.dateFrom,callback:function(t){e.dateFrom=t},expression:"dateFrom"}},r))]}}]),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[e._v(" "),n("v-date-picker",{attrs:{scrollable:""},on:{change:e.setDateFrom},model:{value:e.dateFrom,callback:function(t){e.dateFrom=t},expression:"dateFrom"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialogFrom.save(e.dateFrom)}}},[e._v("OK")])],1)],1),e._v(" "),n("div",[e._v("Form open until")]),e._v(" "),n("v-dialog",{ref:"dialogTo",attrs:{"return-value":e.dateUntil,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.dateUntil=t},"update:return-value":function(t){e.dateUntil=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-text-field",e._g({attrs:{placeholder:"Select date from","prepend-inner-icon":"mdi-calendar-range",readonly:"",outlined:""},model:{value:e.dateUntil,callback:function(t){e.dateUntil=t},expression:"dateUntil"}},r))]}}]),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[e._v(" "),n("v-date-picker",{attrs:{scrollable:""},on:{change:e.setDateUntil},model:{value:e.dateUntil,callback:function(t){e.dateUntil=t},expression:"dateUntil"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialogTo.save(e.dateUntil)}}},[e._v("OK")])],1)],1),e._v(" "),n("div",[e._v("Voter list ID")]),e._v(" "),n("v-select",{attrs:{outlined:"",items:e.voterLists,placeholder:"Select voter list","item-value":"voterListId","item-text":"voterListName"},model:{value:e.createdForm.voterListId,callback:function(t){e.$set(e.createdForm,"voterListId",t)},expression:"createdForm.voterListId"}}),e._v(" "),n("v-divider",{staticClass:"mb-5"}),e._v(" "),n("div",{staticClass:"display-1 mb-10"},[e._v("Questions:")]),e._v(" "),e._l(e.numberOfQuestions,(function(t){return n("div",{key:t,staticClass:"mb-12"},[n("div",{staticClass:"d-flex flex-row"},[n("v-card",{attrs:{width:"100%",elevation:"3"}},[n("add-question-modal",{attrs:{"question-number":t-1},on:{"save-question":e.saveQuestion}})],1)],1)])}))],2),e._v(" "),n("v-divider"),e._v(" "),n("div",{staticClass:"d-flex flex-row justify-space-between pa-5 form-generator-background"},[n("v-btn",{attrs:{color:"primary","x-large":""},on:{click:function(t){e.numberOfQuestions++}}},[e._v("Add new question")]),e._v(" "),n("v-btn",{attrs:{color:"green","x-large":""},on:{click:e.saveForm}},[n("span",{staticClass:"white--text d-flex align-center"},[n("v-icon",{attrs:{left:""}},[e._v("mdi-check")]),e._v("Save form")],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=L.exports;m()(L,{VBtn:h.a,VCard:w.a,VDatePicker:D.a,VDialog:C.a,VDivider:F.a,VIcon:O.a,VRow:I.a,VSelect:S.a,VSpacer:U.a,VTextField:f.a})}}]);