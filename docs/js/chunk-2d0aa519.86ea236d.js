(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa519"],{1103:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ListVoterLists",{attrs:{voterListId:t.voterListId}}),n("ListVotings",{attrs:{voterListId:t.voterListId}})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.voterListId[0]?n("demo-card",{attrs:{heading:t.$t("votingsHeader")}},[n("h1",[t._v(t._s(this.voterListId))]),n("b-card",{staticClass:"main-card mb-4"},[n("b-row",[n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:t.$t("filterByName")}},[n("b-input-group",[n("b-form-input",{attrs:{placeholder:t.$t("Type to Search")},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),n("b-input-group-append",[n("b-btn",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(t._s(t.$t("Clear")))])],1)],1)],1)],1)],1)],1),n("b-card",{staticClass:"main-card mb-4"},[n("b-table",{attrs:{"show-empty":"",stacked:"md",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"sort-by":t.sortBy},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v(t._s(e.item.label))]}},{key:"openFrom",fn:function(e){return[t._v(t._s(e.item.openFrom))]}},{key:"openUntil",fn:function(e){return[t._v(t._s(e.item.openUntil))]}},{key:"active",fn:function(e){return[e.item.active?t._e():n("span",{staticStyle:{color:"green"}},[t._v("Active")]),e.item.active?n("span",[t._v("Finished")]):t._e()]}},{key:"actions",fn:function(e){return[e.item.active?t._e():n("b-button",{staticClass:"ml-2",staticStyle:{width:"80px"},attrs:{size:"sm"},on:{click:function(e){return t.redirectToResults(1)}}},[t._v("\n                        "+t._s(t.$t("Results"))+"\n                    ")])]}},{key:"row-details",fn:function(e){return[n("b-card",{staticClass:"no-shadow"},[n("ul",{staticClass:"list-group"},t._l(e.item,(function(e,s){return n("li",{key:s,staticClass:"list-group-item"},[t._v(t._s(s)+": "+t._s(e)+"\n                            ")])})),0)])]}}],null,!1,1245052129)},[n("template",{slot:"numberOfPossibleVoters"},[t._v(t._s(55))]),n("template",{slot:"numberOfVotes"},[t._v(t._s(30))])],2)],1)],1):t._e()],1)},r=[],a=n("cebc"),l=(n("c5f6"),n("e3b3")),c=n("ad6b"),u={name:"AllVotesHistory",components:{DemoCard:c["a"]},props:{voterListId:{type:String,default:""}},watch:{voterListId:function(t,e){console.log("Prop voterListId changed: ",t," | was: ",e)}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))},fields:function(){return[{key:"name",label:this.$t("Voting"),sortable:!1},{key:"openFrom",label:this.$t("votingFrom"),sortable:!0},{key:"openUntil",label:this.$t("votingTo")},{key:"numberOfPossibleVoters",label:"Počet účastníkov",class:"text-center"},{key:"numberOfVotes",label:"Počet hlasov",class:"text-center"},{key:"active",label:"Status",class:"text-center"},{key:"actions",label:this.$t("actions"),class:"text-center"}]}},data:function(){return{items:Object,currentPage:1,perPage:5,totalRows:Number,pageOptions:[5,10,15],sortBy:null,sortDesc:!1,sortDirection:"asc",filter:null}},mounted:function(){var t=this;this.voterListId&&l["a"].getAllVotings().then((function(e){var n=t.isActive(t.moment(e.data.openFrom),t.moment(e.data.openUntil));t.items=e.data.map((function(e){return Object(a["a"])({},e,{openFrom:t.moment(e.openFrom).format("MMM Do YYYY"),openUntil:t.moment(e.openUntil).format("MMM Do YYYY"),active:n,_rowVariant:n?"success":"none"})})),t.totalRows=t.items.length}))},methods:{redirectToResults:function(t){this.$router.push("/vote-results/"+t)},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},openVotingApp:function(t){alert("open app for vote "+t)},isActive:function(t,e){this.moment().isBetween(t,e)}}},f=u,m=n("2877"),p=Object(m["a"])(f,o,r,!1,null,"4b879d56",null),d=p.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("demo-card",{attrs:{link:"/voting-list/create",linkTitle:t.$t("Create your own voting list"),heading:t.$t("votingListsHeader")}},[n("b-card",{staticClass:"main-card mb-4"},[n("b-table",{attrs:{"show-empty":"",stacked:"md",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"sort-by":t.sortBy},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v(t._s(e.item.label))]}},{key:"actions",fn:function(e){return[e.item.active?t._e():n("b-button",{staticClass:"ml-2",staticStyle:{width:"80px"},attrs:{size:"sm"},on:{click:function(e){return t.redirectToResults(1)}}},[t._v("\n                        "+t._s(t.$t("Results"))+"\n                    ")])]}},{key:"row-details",fn:function(e){return[n("b-card",{staticClass:"no-shadow"},[n("ul",{staticClass:"list-group"},t._l(e.item,(function(e,s){return n("li",{key:s,staticClass:"list-group-item"},[t._v(t._s(s)+": "+t._s(e)+"\n                            ")])})),0)])]}}])})],1)],1)],1)},v=[],h=n("d225"),g=n("b0b4"),y=n("bc3a"),_=n.n(y),k=n("e190"),w=function(){function t(){Object(h["a"])(this,t)}return Object(g["a"])(t,[{key:"getPublicLists",value:function(){return _.a.get(k["a"].apiUrl+"v1/VoterList/GetPublicLists")}}]),t}(),L=new w,V={name:"ListVoterLists",components:{DemoCard:c["a"]},props:{voterListId:{type:String,default:""}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))},fields:function(){return[{key:"name",label:this.$t("VoterListName"),sortable:!0},{key:"actions",label:this.$t("actions"),class:"text-center"}]}},data:function(){return{items:Object,currentPage:1,perPage:5,totalRows:Number,pageOptions:[5,10,15],sortBy:null,sortDesc:!1,sortDirection:"asc",filter:null}},mounted:function(){var t=this;L.getPublicLists().then((function(e){var n=t.isActive(t.moment(e.data.openFrom),t.moment(e.data.openUntil));t.items=e.data.map((function(t){return Object(a["a"])({},t,{_rowVariant:n?"success":"none"})})),t.totalRows=t.items.length}))},methods:{redirectToResults:function(t){this.$router.push("/vote-results/"+t)},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},openVotingApp:function(t){alert("open app for vote "+t)},isActive:function(t,e){this.moment().isBetween(t,e)}}},$=V,P=Object(m["a"])($,b,v,!1,null,"6d9abf6b",null),C=P.exports,O={name:"AllVotesHistory",props:{voterListId:{type:String,default:""}},components:{ListVotings:d,ListVoterLists:C}},x=O,B=Object(m["a"])(x,s,i,!1,null,"f344461a",null);e["default"]=B.exports}}]);