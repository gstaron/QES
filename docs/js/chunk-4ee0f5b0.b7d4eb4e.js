(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ee0f5b0"],{"1a01":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"app-page-title"},[a("div",{staticClass:"page-title-wrapper"},[a("div",{staticClass:"page-title-heading"},[a("div",{staticClass:"page-title-icon"},[a("i",{class:t.icon})]),a("div",[t._v("\n                "+t._s(t.heading)+"\n                "),a("div",{staticClass:"page-title-subheading"},[t._v("\n                    "+t._s(t.subheading)+"\n                ")])])]),a("div",{staticClass:"page-title-actions"},[a("button",{staticClass:"btn-shadow mr-3 btn btn-dark",attrs:{type:"button"}},[a("font-awesome-icon",{attrs:{icon:"star"}})],1),a("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),t._v("\n                Create New\n            ")],1)])])])},e=[],r=a("ecee"),c=a("c074"),l=a("ad3d");r["c"].add(c["R"],c["L"]);var n={components:{"font-awesome-icon":l["a"]},props:{icon:String,heading:String,subheading:String}},d=n,v=a("2877"),o=Object(v["a"])(d,i,e,!1,null,null,null);s["a"]=o.exports},"63d0":function(t,s,a){"use strict";(function(t){var a={name:"vue-tabs-with-active-line",props:{currentTab:{type:String,required:!0},tabs:{type:Array,required:!0},wrapperClass:{type:String,required:!1},tabClass:{type:String,required:!1},tabActiveClass:{type:String,required:!1},lineClass:{type:String,required:!1}},watch:{currentTab:function(t){this.newTab!==t&&this.moveActiveLine(t)}},data:function(){return{activeLineWidth:0,activeLineOffset:0,newTab:""}},methods:{handleClick:function(t){this.$emit("onClick",t),this.moveActiveLine(t),this.newTab=t},moveActiveLine:function(t){var s=this.$refs[t][0];s&&(this.activeLineWidth=s.clientWidth,this.activeLineOffset=s.offsetLeft)}},mounted:function(){this.moveActiveLine(this.currentTab)}},i=a,e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"tabs",class:t.wrapperClass},[t._l(t.tabs,(function(s){return a("button",{key:s.title,ref:s.value,refInFor:!0,staticClass:"tabs__item",class:[{tabs__item_active:s.value===t.currentTab},s.value===t.currentTab&&t.tabActiveClass?t.tabActiveClass:"",t.tabClass],attrs:{type:"button",disabled:s.disabled||!1},on:{click:function(a){t.handleClick(s.value)}}},[t._v("\n    "+t._s(s.title)+"\n  ")])})),t._v(" "),a("div",{staticClass:"tabs__active-line",class:t.lineClass,style:{width:t.activeLineWidth+"px",transform:"translateX("+t.activeLineOffset+"px)"}})],2)},r=[];e._withStripped=!0;var c=void 0,l=void 0,n=void 0,d=!1;function v(t,s,a,i,e,r,c,l){var n=("function"===typeof a?a.options:a)||{};return n.__file="/Users/karambafe/job/libs/vue-tabs-with-active-line/src/VueTabsWithActiveLine.vue",n.render||(n.render=t.render,n.staticRenderFns=t.staticRenderFns,n._compiled=!0,e&&(n.functional=!0)),n._scopeId=i,n}var o=v({render:e,staticRenderFns:r},c,i,l,d,n,void 0,void 0);function g(t){g.installed||(g.installed=!0,t.component("VueTabsWithActiveLine",o))}var u={install:g},w=null;"undefined"!==typeof window?w=window.Vue:"undefined"!==typeof t&&(w=t.Vue),w&&w.use(u),s["a"]=o}).call(this,a("c8ba"))},"86df":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),a("tabs",{attrs:{tabs:t.tabs,currentTab:t.currentTab,"wrapper-class":"body-tabs shadow-tabs","tab-class":"tab-item","tab-active-class":"tab-item-active","line-class":"tab-item-line"},on:{onClick:t.handleClick}}),a("div",{staticClass:"content"},["tab1"===t.currentTab?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chart-content"},[t._m(0),a("div",{staticClass:"widget-chart-flex"},[t._m(1),a("div",{staticClass:"widget-description ml-auto text-success"},[a("font-awesome-icon",{attrs:{icon:"angle-up"}}),t._m(2)],1)])])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chart-actions"},[a("div",{staticClass:"btn-group dropdown"},[a("button",{staticClass:"btn btn-link",attrs:{type:"button","aria-haspopup":"true","aria-expanded":"false","data-toggle":"dropdown"}},[a("font-awesome-icon",{attrs:{icon:"ellipsis-h"}})],1),t._m(3)])]),a("div",{staticClass:"widget-chart-content"},[t._m(4),a("div",{staticClass:"widget-chart-flex"},[t._m(5),a("div",{staticClass:"widget-description ml-auto text-warning"},[a("span",{staticClass:"pr-2"},[t._v("66.5%")]),a("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1)])])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chart-content"},[t._m(6),a("div",{staticClass:"widget-chart-flex"},[t._m(7),a("div",{staticClass:"widget-description ml-auto text-danger"},[a("span",{staticClass:"pr-1"},[t._v("45")]),a("font-awesome-icon",{attrs:{icon:"angle-up"}})],1)])])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chart-content"},[t._m(8),a("div",{staticClass:"widget-chart-flex"},[t._m(9),a("div",{staticClass:"widget-description ml-auto text-info"},[a("font-awesome-icon",{attrs:{icon:"arrow-right"}}),a("span",{staticClass:"pl-1"},[t._v("27.2%")])],1)])])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chart-content"},[t._m(10),a("div",{staticClass:"widget-chart-flex"},[t._m(11),a("div",{staticClass:"widget-description ml-auto text-success"},[a("span",{staticClass:"pr-1"},[t._v("32")]),a("font-awesome-icon",{attrs:{icon:"angle-down"}})],1)])])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chart-content"},[t._m(12),a("div",{staticClass:"widget-chart-flex"},[t._m(13),a("div",{staticClass:"widget-description ml-auto text-info"},[a("font-awesome-icon",{attrs:{icon:"arrow-right"}}),a("span",{staticClass:"pl-1"},[t._v("17.2%")])],1)])])])])]),a("div",{staticClass:"divider mt-0",staticStyle:{"margin-bottom":"30px"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content"},[t._m(14),a("div",{staticClass:"widget-chart-flex"},[t._m(15),a("div",{staticClass:"widget-description ml-auto text-success"},[a("font-awesome-icon",{attrs:{icon:"angle-up"}}),a("span",{staticClass:"pl-1"},[t._v("175.5%")])],1)])]),t._m(16)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content"},[t._m(17),a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers"},[t._v("368")]),a("div",{staticClass:"widget-description ml-auto text-warning"},[a("span",{staticClass:"pr-2"},[t._v("66.5%")]),a("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1)])]),t._m(18)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content"},[t._m(19),a("div",{staticClass:"widget-chart-flex"},[t._m(20),a("div",{staticClass:"widget-description ml-auto text-danger"},[a("span",{staticClass:"pr-1"},[t._v("45")]),a("font-awesome-icon",{attrs:{icon:"angle-up"}})],1)])]),t._m(21)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content"},[t._m(22),a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers text-warning"},[t._v("1621")]),a("div",{staticClass:"widget-description ml-auto text-info"},[a("font-awesome-icon",{attrs:{icon:"arrow-right"}}),a("span",[t._v("27.2%")])],1)])]),t._m(23)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content"},[t._m(24),a("div",{staticClass:"widget-chart-flex"},[t._m(25),a("div",{staticClass:"widget-description ml-auto text-danger"},[a("span",{staticClass:"pr-1"},[t._v("45")]),a("font-awesome-icon",{attrs:{icon:"angle-up"}})],1)])]),t._m(26)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content"},[t._m(27),a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers text-danger"},[t._v("1621")]),a("div",{staticClass:"widget-description ml-auto text-info"},[a("font-awesome-icon",{attrs:{icon:"arrow-right"}}),a("span",[t._v("27.2%")])],1)])]),t._m(28)])])])])]):t._e(),"tab2"===t.currentTab?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-primary text-left"},[a("div",{staticClass:"widget-chart-content text-white"},[t._m(29),a("div",{staticClass:"widget-chart-flex"},[t._m(30),a("div",{staticClass:"widget-description ml-auto opacity-7"},[a("font-awesome-icon",{attrs:{icon:"angle-up"}}),a("span",{staticClass:"pl-1"},[t._v("175.5%")])],1)])])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-info text-left"},[a("div",{staticClass:"widget-chart-actions"},[a("div",{staticClass:"btn-group dropdown"},[a("button",{staticClass:"text-white btn btn-link",attrs:{type:"button","aria-haspopup":"true","aria-expanded":"false","data-toggle":"dropdown"}},[a("font-awesome-icon",{attrs:{icon:"ellipsis-h"}})],1),t._m(31)])]),a("div",{staticClass:"widget-chart-content text-white"},[t._m(32),a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers"},[t._v("368")]),a("div",{staticClass:"widget-description ml-auto opcity-5"},[a("span",{staticClass:"pr-1"},[t._v("66.5%")]),a("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1)])])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-focus text-left"},[a("div",{staticClass:"widget-chart-content text-white"},[t._m(33),a("div",{staticClass:"widget-chart-flex"},[t._m(34),a("div",{staticClass:"widget-description ml-auto text-warning"},[a("span",{staticClass:"pr-1"},[t._v("45")]),a("font-awesome-icon",{attrs:{icon:"angle-up"}})],1)])])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-vicious-stance text-left"},[a("div",{staticClass:"widget-chart-content text-white"},[t._m(35),a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers text-warning"},[t._v("357")]),a("div",{staticClass:"widget-description ml-auto text-success"},[a("font-awesome-icon",{attrs:{icon:"arrow-right"}}),a("span",{staticClass:"pl-1"},[t._v("27.2%")])],1)])])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-slick-carbon text-left"},[a("div",{staticClass:"widget-chart-content text-white"},[t._m(36),a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers text-danger"},[t._v("475")]),a("div",{staticClass:"widget-description ml-auto text-danger"},[a("font-awesome-icon",{attrs:{icon:"arrow-right"}}),a("span",{staticClass:"pl-1"},[t._v("27.2%")])],1)])])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-night-sky text-left"},[a("div",{staticClass:"widget-chart-content text-white"},[t._m(37),a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers text-white"},[t._v("345")]),a("div",{staticClass:"widget-description ml-auto text-success"},[a("font-awesome-icon",{attrs:{icon:"arrow-right"}}),a("span",{staticClass:"pr-1"},[t._v("27.2%")])],1)])])])])]),a("div",{staticClass:"divider mt-0",staticStyle:{"margin-bottom":"30px"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-warm-flame text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content text-white"},[t._m(38),a("div",{staticClass:"widget-chart-flex"},[t._m(39),a("div",{staticClass:"widget-description ml-auto text-white"},[a("font-awesome-icon",{attrs:{icon:"angle-up"}}),a("span",{staticClass:"pl-1"},[t._v("175.5%")])],1)])]),t._m(40)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-tempting-azure text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content text-dark"},[t._m(41),a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers"},[t._v("368")]),a("div",{staticClass:"widget-description ml-auto text-dark"},[a("span",{staticClass:"pr-1"},[t._v("66.5%")]),a("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1)])]),t._m(42)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-plum-plate text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content text-white"},[t._m(43),a("div",{staticClass:"widget-chart-flex"},[t._m(44),a("div",{staticClass:"widget-description ml-auto text-white"},[a("span",{staticClass:"pr-1"},[t._v("45")]),a("font-awesome-icon",{attrs:{icon:"angle-up"}})],1)])]),t._m(45)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-mixed-hopes text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content text-white"},[t._m(46),a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-numbers text-warning"},[t._v("1621")]),a("div",{staticClass:"widget-description ml-auto text-white"},[a("font-awesome-icon",{attrs:{icon:"arrow-right"}}),a("span",{staticClass:"pl-1"},[t._v("27.2%")])],1)])]),t._m(47)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-slick-carbon text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content text-white"},[t._m(48),a("div",{staticClass:"widget-chart-flex"},[t._m(49),a("div",{staticClass:"widget-description ml-auto text-white"},[a("font-awesome-icon",{attrs:{icon:"angle-up"}}),a("span",{staticClass:"pl-1"},[t._v("175.5%")])],1)])]),t._m(50)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3 widget-chart widget-chart2 bg-asteroid text-left"},[a("div",{staticClass:"widget-chat-wrapper-outer"},[a("div",{staticClass:"widget-chart-content text-white"},[t._m(51),a("div",{staticClass:"widget-chart-flex"},[t._m(52),a("div",{staticClass:"widget-description ml-auto text-white"},[a("font-awesome-icon",{attrs:{icon:"angle-up"}}),a("span",{staticClass:"pl-1"},[t._v("$4596")])],1)])]),t._m(53)])])])])]):t._e()])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Sales")]),a("div",{staticClass:"widget-subtitle text-muted"},[t._v("Monthly Goals")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[a("span",[t._v("$1283")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"pl-1"},[a("span",[t._v("176%")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dropdown-menu-lg dropdown-menu-right dropdown-menu",attrs:{tabindex:"-1",role:"menu","aria-hidden":"true"}},[a("div",{staticClass:"dropdown-menu-header"},[a("div",{staticClass:"dropdown-menu-header-inner bg-primary"},[a("div",{staticClass:"menu-header-image",staticStyle:{"background-image":"url('assets/images/dropdown-header/abstract1.jpg')"}}),a("div",{staticClass:"menu-header-content"},[a("div",[a("h5",{staticClass:"menu-header-title"},[t._v("Settings")]),a("h6",{staticClass:"menu-header-subtitle"},[t._v("Manage all of your options")])]),a("div",{staticClass:"menu-header-btn-pane"},[a("button",{staticClass:"mr-2 btn btn-dark btn-sm"},[t._v("Settings")]),a("button",{staticClass:"btn-icon btn-icon-only btn btn-warning btn-sm"},[a("i",{staticClass:"pe-7s-config btn-icon-wrapper"})])])])])]),a("ul",{staticClass:"nav flex-column"},[a("li",{staticClass:"nav-item-header nav-item"},[t._v("Activity")]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0);"}},[t._v("Chat\n                                            "),a("div",{staticClass:"ml-auto badge badge-pill badge-info"},[t._v("8")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0);"}},[t._v("Recover Password")])]),a("li",{staticClass:"nav-item-header nav-item"},[t._v("My Account")]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0);"}},[t._v("Settings\n                                            "),a("div",{staticClass:"ml-auto badge badge-success"},[t._v("New")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0);"}},[t._v("Messages\n                                            "),a("div",{staticClass:"ml-auto badge badge-warning"},[t._v("512")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0);"}},[t._v("Logs")])]),a("li",{staticClass:"nav-item-divider nav-item"}),a("li",{staticClass:"nav-item-btn nav-item"},[a("button",{staticClass:"btn-wide btn-shadow btn btn-danger btn-sm"},[t._v("Cancel")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Profiles")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers text-primary"},[a("span",[t._v("368k")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Clients")]),a("div",{staticClass:"widget-subtitle text-danger opacity-7"},[t._v("Returning")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[a("span",[t._v("87%")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Reports")]),a("div",{staticClass:"widget-subtitle text-muted"},[t._v("Bugs Fixed")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers text-warning"},[a("span",[t._v("1,621")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Support Requests")]),a("div",{staticClass:"widget-subtitle text-success opacity-7"},[t._v("Solved")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[a("span",[t._v("183")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title text-success"},[t._v("Reports")]),a("div",{staticClass:"widget-subtitle text-muted"},[t._v("Bugs Fixed")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers text-success"},[a("span",[t._v("1,621")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Sales")]),a("div",{staticClass:"widget-subtitle text-muted"},[t._v("Monthly Goals")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[a("small",[t._v("$")]),t._v("\n                                        1283\n                                    ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-sm progress-bar-animated-alt progress"},[a("div",{staticClass:"progress-bar bg-success",staticStyle:{width:"65%"},attrs:{role:"progressbar","aria-valuenow":"65","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label"},[t._v("YoY Growth")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Profiles")]),a("div",{staticClass:"widget-subtitle text-muted"},[t._v("Active Users")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-xs progress-bar-animated-alt progress"},[a("div",{staticClass:"progress-bar bg-danger",staticStyle:{width:"85%"},attrs:{role:"progressbar","aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label"},[t._v("Monthly Subscribers")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Clients")]),a("div",{staticClass:"widget-subtitle text-danger opacity-7"},[t._v("Returning")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[t._v("87\n                                        "),a("small",[t._v("%")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-sm progress-bar-animated progress"},[a("div",{staticClass:"progress-bar bg-warning",staticStyle:{width:"47%"},attrs:{role:"progressbar","aria-valuenow":"47","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label"},[t._v("Successful Payments")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Reports")]),a("div",{staticClass:"widget-subtitle text-muted"},[t._v("Bugs Fixed")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-xs progress"},[a("div",{staticClass:"progress-bar bg-primary",staticStyle:{width:"91%"},attrs:{role:"progressbar","aria-valuenow":"91","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label"},[t._v("Severe Reports")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Payments")]),a("div",{staticClass:"widget-subtitle text-danger opacity-7"},[t._v("Failed")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers text-success"},[t._v("43\n                                        "),a("small",[t._v("%")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar progress"},[a("div",{staticClass:"progress-bar progress-bar-animated bg-success progress-bar-striped",staticStyle:{width:"47%"},attrs:{role:"progressbar","aria-valuenow":"47","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label"},[t._v("Successful Payments")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title text-warning"},[t._v("Reports")]),a("div",{staticClass:"widget-subtitle text-muted"},[t._v("Bugs Fixed")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-lg progress"},[a("div",{staticClass:"progress-bar bg-danger",staticStyle:{width:"55%"},attrs:{role:"progressbar","aria-valuenow":"55","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label"},[t._v("Severe Reports")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Sales")]),a("div",{staticClass:"widget-subtitle opacity-7"},[t._v("Monthly Goals")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[a("small",[t._v("$")]),t._v("\n                                    1283\n                                ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dropdown-menu-lg dropdown-menu-right dropdown-menu",attrs:{tabindex:"-1",role:"menu","aria-hidden":"true"}},[a("div",{staticClass:"dropdown-menu-header"},[a("div",{staticClass:"dropdown-menu-header-inner bg-primary"},[a("div",{staticClass:"menu-header-image",staticStyle:{"background-image":"url('assets/images/dropdown-header/abstract1.jpg')"}}),a("div",{staticClass:"menu-header-content"},[a("div",[a("h5",{staticClass:"menu-header-title"},[t._v("Settings")]),a("h6",{staticClass:"menu-header-subtitle"},[t._v("Manage all of your options")])]),a("div",{staticClass:"menu-header-btn-pane"},[a("button",{staticClass:"mr-2 btn btn-dark btn-sm"},[t._v("Settings")]),a("button",{staticClass:"btn-icon btn-icon-only btn btn-warning btn-sm"},[a("i",{staticClass:"pe-7s-config btn-icon-wrapper"})])])])])]),a("ul",{staticClass:"nav flex-column"},[a("li",{staticClass:"nav-item-header nav-item"},[t._v("Activity")]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0);"}},[t._v("Chat\n                                            "),a("div",{staticClass:"ml-auto badge badge-pill badge-info"},[t._v("8")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0);"}},[t._v("Recover Password")])]),a("li",{staticClass:"nav-item-header nav-item"},[t._v("My Account")]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0);"}},[t._v("Settings\n                                            "),a("div",{staticClass:"ml-auto badge badge-success"},[t._v("New")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0);"}},[t._v("Messages\n                                            "),a("div",{staticClass:"ml-auto badge badge-warning"},[t._v("512")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0);"}},[t._v("Logs")])]),a("li",{staticClass:"nav-item-divider nav-item"}),a("li",{staticClass:"nav-item-btn nav-item"},[a("button",{staticClass:"btn-wide btn-shadow btn btn-danger btn-sm"},[t._v("Cancel")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Profiles")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Clients")]),a("div",{staticClass:"widget-subtitle text-warning"},[t._v("Returning")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[t._v("87\n                                    "),a("small",[t._v("%")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Reports")]),a("div",{staticClass:"widget-subtitle text-success"},[t._v("Bugs Fixed")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Payments")]),a("div",{staticClass:"widget-subtitle text-danger"},[t._v("Failed")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Requests")]),a("div",{staticClass:"widget-subtitle text-white"},[t._v("Submitted")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Sales")]),a("div",{staticClass:"widget-subtitle text-white"},[t._v("Monthly Goals")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[a("small",[t._v("$")]),t._v("\n                                        1283\n                                    ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-sm progress-bar-animated-alt progress"},[a("div",{staticClass:"progress-bar bg-success",staticStyle:{width:"65%"},attrs:{role:"progressbar","aria-valuenow":"65","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label text-white"},[t._v("YoY Growth")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Profiles")]),a("div",{staticClass:"widget-subtitle text-dark"},[t._v("Active Users")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-xs progress-bar-animated-alt progress"},[a("div",{staticClass:"progress-bar bg-danger",staticStyle:{width:"85%"},attrs:{role:"progressbar","aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label"},[t._v("Monthly Subscribers")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Clients")]),a("div",{staticClass:"widget-subtitle text-white opacity-7"},[t._v("Returning")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[t._v("87\n                                        "),a("small",[t._v("%")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-sm progress-bar-animated progress"},[a("div",{staticClass:"progress-bar bg-warning",staticStyle:{width:"47%"},attrs:{role:"progressbar","aria-valuenow":"47","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label text-white"},[t._v("Successful Payments")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title"},[t._v("Reports")]),a("div",{staticClass:"widget-subtitle text-white"},[t._v("Bugs Fixed")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-xs progress"},[a("div",{staticClass:"progress-bar bg-primary",staticStyle:{width:"91%"},attrs:{role:"progressbar","aria-valuenow":"91","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label text-white"},[t._v("Severe Reports")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title opacity-5"},[t._v("Sales")]),a("div",{staticClass:"widget-subtitle opacity-5 text-white"},[t._v("Monthly Goals")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[a("small",[t._v("$")]),t._v("\n                                        1283\n                                    ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-xs progress-bar-animated-alt progress"},[a("div",{staticClass:"progress-bar bg-warning",staticStyle:{width:"65%"},attrs:{role:"progressbar","aria-valuenow":"65","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label text-white"},[t._v("YoY Growth")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-chart-flex"},[a("div",{staticClass:"widget-title opacity-5"},[t._v("Payments")]),a("div",{staticClass:"widget-subtitle opacity-5 text-white"},[t._v("Totals")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-numbers"},[a("small",[t._v("$")]),t._v("\n                                        653\n                                    ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"widget-progress-wrapper"},[a("div",{staticClass:"progress-bar-xs progress-bar-animated-alt progress"},[a("div",{staticClass:"progress-bar bg-info",staticStyle:{width:"65%"},attrs:{role:"progressbar","aria-valuenow":"65","aria-valuemin":"0","aria-valuemax":"100"}})]),a("div",{staticClass:"progress-sub-label text-white"},[t._v("YoY Growth")])])}],r=a("1a01"),c=a("63d0"),l=a("ecee"),n=a("c074"),d=a("ad3d");l["c"].add(n["t"],n["d"],n["s"],n["E"],n["a"]);var v=[{title:"Basic",value:"tab1"},{title:"Colors",value:"tab2"}],o={components:{PageTitle:r["a"],Tabs:c["a"],"font-awesome-icon":d["a"]},data:function(){return{heading:"Chart Boxes II",subheading:"Unlimited styles are available for our chart boxes. Check out our dashboard examples for more.",icon:"pe-7s-plug icon-gradient bg-arielle-smile",tabs:v,currentTab:"tab1"}},methods:{handleClick:function(t){this.currentTab=t}}},g=o,u=a("2877"),w=Object(u["a"])(g,i,e,!1,null,null,null);s["default"]=w.exports}}]);