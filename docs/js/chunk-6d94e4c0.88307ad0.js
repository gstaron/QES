(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d94e4c0"],{ad6b:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card main-card mb-3"},[n("div",{staticClass:"card-header p-3 h-auto d-block"},[n("div",{staticClass:"d-block"},[t._v(t._s(t.heading))]),n("div",{staticClass:"d-block font-weight-normal text-capitalize mt-1 grey--text"},[t._v(t._s(t.subheading))])]),n("div",{staticClass:"card-body"},[t._t("default")],2)])},o=[],a={components:{},props:["heading","subheading"]},r=a,s=n("2877"),l=Object(s["a"])(r,i,o,!1,null,null,null);e["a"]=l.exports},c58c:function(t,e,n){},c926:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("demo-card",{attrs:{heading:t.$t("votingsHeader")}},[n("b-card",{staticClass:"main-card mb-4"},[n("b-row",[n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:t.$t("filterByName")}},[n("b-input-group",[n("b-form-input",{attrs:{placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),n("b-input-group-append",[n("b-btn",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1)],1)],1),n("b-card",{staticClass:"main-card mb-4"},[n("b-table",{attrs:{"show-empty":"",stacked:"md",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"sort-by":t.sortBy},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v(t._s(e.item.label))]}},{key:"openFrom",fn:function(e){return[t._v(t._s(e.item.openFrom))]}},{key:"openUntil",fn:function(e){return[t._v(t._s(e.item.openUntil))]}},{key:"active",fn:function(e){return[e.item.active?t._e():n("i",{staticClass:"pe-7s-check",staticStyle:{"font-size":"22px",color:"green"}}),e.item.active?n("i",{staticClass:"pe-7s-attention",staticStyle:{"font-size":"22px",color:"black"}}):t._e()]}},{key:"actions",fn:function(e){return[e.item.active?n("b-button",{staticClass:"ml-2 green",staticStyle:{width:"80px"},attrs:{size:"sm"},on:{click:function(e){return t.openVotingApp(1)}}},[t._v("\n                        "+t._s(t.$t("votingAction"))+"\n                    ")]):t._e(),e.item.active?t._e():n("b-button",{staticClass:"ml-2",staticStyle:{width:"80px"},attrs:{size:"sm"},on:{click:function(e){return t.redirectToVote(1)}}},[t._v("\n                        "+t._s(t.$t("votingDetail"))+"\n                    ")])]}},{key:"row-details",fn:function(e){return[n("b-card",{staticClass:"no-shadow"},[n("ul",{staticClass:"list-group"},t._l(e.item,(function(e,i){return n("li",{key:i,staticClass:"list-group-item"},[t._v(t._s(i)+": "+t._s(e)+"\n                            ")])})),0)])]}}])})],1)],1)],1)},o=[],a=n("ad6b");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=n("85f2"),l=n.n(s);function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),l()(t,i.key,i)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var p=n("bc3a"),f=n.n(p),d={apiUrl:"http://qesadila.azurewebsites.net/"},b=function(){function t(){r(this,t)}return u(t,[{key:"getAllVotings",value:function(){return f.a.post(d.apiUrl+"/v1/Voting/GetAll")}}]),t}(),m=new b,g=[{label:"VotingForm 1",openFrom:(new Date).toDateString(),openUntil:(new Date).toDateString(),active:!0,questions:[{question:"Who would you vote for a prime minister?",mandatory:!0,public_:!1,from:null,until:null,answers:[{text:"Igor Matovič"},{text:"Boris Kollár"},{text:"Richard Sulík"},{text:"Veronika Remišová"}]}]},{label:"VotingForm 2",openFrom:(new Date).toDateString(),openUntil:(new Date).toDateString(),active:!1,questions:[{question:"What would you like to have in youth park?",mandatory:!0,public_:!0,from:null,until:null,answers:[{text:"Trees"},{text:"Benches"},{text:"Trashbins"}]},{question:"Are you crazy enough?",mandatory:!1,public_:!1,from:null,until:null,answers:[{text:"Just a little bit..."},{text:"Of course nope!"}]}]}],v={name:"VotingList",components:{DemoCard:a["a"]},data:function(){return{items:g,fields:[{key:"label",label:this.$t("Question"),sortable:!1},{key:"openFrom",label:this.$t("votingFrom"),sortable:!0},{key:"openUntil",label:this.$t("votingTo")},{key:"active",label:"Status",class:"text-center"},{key:"actions",label:this.$t("Actions"),class:"text-center"}],currentPage:1,perPage:5,totalRows:g.length,pageOptions:[5,10,15],sortBy:null,sortDesc:!1,sortDirection:"asc",filter:null}},mounted:function(){m.getAllVotings()},methods:{redirectToVote:function(t){this.$router.push("/voting/"+t)},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},openVotingApp:function(t){alert("open app for vote "+t)}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}}},h=v,y=(n("df0d"),n("2877")),k=Object(y["a"])(h,i,o,!1,null,"1f9bc626",null);e["default"]=k.exports},df0d:function(t,e,n){"use strict";var i=n("c58c"),o=n.n(i);o.a}}]);