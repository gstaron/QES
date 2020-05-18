(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{518:function(t,e,n){"use strict";n.r(e);n(15),n(12),n(9),n(7),n(13),n(30),n(35),n(27),n(41);var r=n(10),o=n(1),c=(n(65),n(86));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=n(253),v={middleware:"authenticated",data:function(){return{signalStatusType:"warning",signalStatusText:"Detecting..",userAnwers:{},allLists:[],appRunning:!1,waitingForSign:!1}},computed:{selectedForm:function(){var t=this;return this.allLists&&this.allLists.find((function(e){return e.votingFormId===t.$route.params.id}))},openFrom:function(){var time=this.selectedForm.openFrom;return new Date(time).toLocaleString()},openUntil:function(){var time=this.selectedForm.openUntil;return new Date(time).toLocaleString()},endingType:function(){return this.selectedForm.endingType?this.$t("votingFormManager."+this.selectedForm.endingType):"Type not defined"},isPublic:function(){return this.selectedForm.isPublic?this.$t("general.yes"):this.$t("general.no")}},mounted:function(){var t=this;this.fetchList(),this.connection=(new d.HubConnectionBuilder).withUrl("http://localhost:58080/hubs/signin").build(),this.start(),this.connection.on("Status",(function(e,n,r){t.setSignalRStatus()}))},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({start:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.connection.start();case 3:t.appRunning=!0,t.getStatusFromServer(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),setTimeout((function(){return t.start()}),5e3);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getStatusFromServer:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.connection.invoke("getStatus");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.$store.dispatch("snackbar/openError",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},Object(c.b)("voter",["performFetchAllVoterForms","performSubmitVote"]),{utf8_to_b64:function(t){return window.btoa(unescape(encodeURIComponent(t)))},b64_to_utf8:function(t){return decodeURIComponent(escape(window.atob(t)))},submitForm:function(){var t={votingForm:this.selectedForm.name,answers:this.userAnwers,time:new Date,votingFormId:this.$route.params.id};this.connection.invoke("SignMessage",this.utf8_to_b64(JSON.stringify(t)),"VoterAnswerEn"),this.$store.dispatch("snackbar/openSuccess","Please open QesadilaAuth desktop application, and sign the form")},handleUserAnswerChange:function(t,e){this.userAnwers[t]=e},fetchList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.performFetchAllVoterForms();case 2:data=e.sent,t.allLists=data,t.setSignalRStatus();case 5:case"end":return e.stop()}}),e)})))()},setSignalRStatus:function(){var t=!1;switch(this.$store.state.signalR.signalRStatus){case"not-connected":this.signalStatusText="The website is not connected to the server",this.signalStatusType="warning";break;case"identity-not-selected":this.signalStatusText="Please select identity first in the QesadilaAuth",this.signalStatusType="warning";break;case"identity-selected":this.selectedForm?this.selectedForm.listOfValidCertificatesForSignature&&(this.selectedForm.listOfValidCertificatesForSignature.includes(this.$store.state.signalR.signalRCertHash)?(this.signalStatusText="You are signed in as valid voter in QesadilaAuth: "+this.$store.state.signalR.signalRIdentity,this.signalStatusType="info",t=!0):console.log("this.selectedForm.listOfValidCertificatesForSignature, hash",this.selectedForm.listOfValidCertificatesForSignature,this.$store.state.signalR.signalRCertHash)):console.log("this.selectedForm",this.selectedForm),t||(this.signalStatusText="You are not signed in as valid voter in QesadilaAuth: "+this.$store.state.signalR.signalRIdentity,this.signalStatusType="warning");break;case"reconnecting":this.signalStatusText="reconnecting",this.signalStatusType="warning";break;case"reconnected":this.signalStatusText="reconnected",this.signalStatusType="warning";break;case"disconnected":this.signalStatusText="disconnected",this.signalStatusType="warning"}}})},h=n(64),m=n(72),f=n.n(m),_=n(522),w=n(193),y=n(436),S=n(435),F=n(472),C=n(178),O=n(173),T=n(493),x=n(494),R=n(419),V=n(452),k=n(427),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-alert",{attrs:{type:t.signalStatusType}},[t._v(t._s(t.signalStatusText))]),t._v(" "),n("v-row",{staticClass:"fill-height pa-12",attrs:{"no-gutters":"",justify:"center",align:"center"}},[t.selectedForm&&t.appRunning?n("v-card",{attrs:{width:"100%"}},[n("form",[n("div",{staticClass:"d-flex flex-row justify-center py-5 display-1"},[t._v("\n          "+t._s(t.selectedForm.name)+"\n        ")]),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[n("tr",[n("th",[t._v("Is public")]),t._v(" "),n("td",[t._v("\n                  "+t._s(t.isPublic)+"\n                ")])]),t._v(" "),n("tr",[n("th",[t._v("Voting started at")]),t._v(" "),n("td",[t._v("\n                  "+t._s(t.openFrom)+"\n                ")])]),t._v(" "),n("tr",[n("th",[t._v("Voting open until")]),t._v(" "),n("td",[t._v("\n                  "+t._s(t.openUntil)+"\n                ")])]),t._v(" "),n("tr",[n("th",[t._v("Ending type")]),t._v(" "),n("td",[t._v("\n                  "+t._s(t.endingType)+"\n                ")])])])]},proxy:!0}],null,!1,387072275)}),t._v(" "),n("v-divider",{staticClass:"mb-10"}),t._v(" "),t._l(t.selectedForm.votingFormItems,(function(e,r){return n("div",{key:e.votingFormItemId,staticClass:"px-12"},[n("div",{staticClass:"body-2 mb-2"},[t._v("\n            "+t._s(t.$t("voter.question")+" "+(r+1))+"\n          ")]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.question))]),t._v(" "),n("div",{staticClass:"pl-5"},[n("v-radio-group",{on:{change:function(n){return t.handleUserAnswerChange(e.question,n)}}},[t._l(e.votingFormItemOptions,(function(option){return n("v-radio",{key:option.votingFormItemOptionId,staticClass:"my-2",attrs:{label:option.option,value:option.option}})})),t._v(" "),n("v-radio",{staticClass:"my-2",attrs:{label:t.$t("voter.labelDoNotWantToAnswer"),value:"N/A"}})],2),t._v(" "),n("v-divider",{staticClass:"mb-10"})],1)])})),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center px-12 mb-6 body"},[n("v-btn",{attrs:{"x-large":"",color:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$t("voter.submitForm")))])],1)],2)]):n("div",[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",value:!t.appRunning,width:"500"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n          "+t._s(t.$t("voter.signAppNotFound"))+"\n        ")]),t._v(" "),n("v-card-text",{staticClass:"pa-5"},[t._v("\n          "+t._s(t.$t("voter.startSignAppForProceed"))+"\n        ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"warning",to:"/voter"}},[t._v(t._s(t.$t("voter.backButton")))])],1),t._v(" "),n("v-divider")],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",value:t.waitingForSign,width:"500"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n          "+t._s(t.$t("voter.signVoteInApp"))+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VAlert:_.a,VBtn:w.a,VCard:y.a,VCardActions:S.a,VCardText:S.b,VCardTitle:S.c,VDialog:F.a,VDivider:C.a,VProgressCircular:O.a,VRadio:T.a,VRadioGroup:x.a,VRow:R.a,VSimpleTable:V.a,VSpacer:k.a})}}]);