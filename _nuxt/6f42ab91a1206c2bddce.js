(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{449:function(t,e,r){var content=r(450);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("7c06aa28",content,!0,{sourceMap:!1})},450:function(t,e,r){(e=r(17)(!1)).push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table thead tr:last-child th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table thead tr th{color:rgba(0,0,0,.6)}.theme--light.v-data-table tbody tr:not(:last-child) td:last-child,.theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row),.theme--light.v-data-table tbody tr:not(:last-child) th:last-child,.theme--light.v-data-table tbody tr:not(:last-child) th:not(.v-data-table__mobile-row){border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table tbody tr.active{background:#f5f5f5}.theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table thead tr:last-child th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table thead tr th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table tbody tr:not(:last-child) td:last-child,.theme--dark.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row),.theme--dark.v-data-table tbody tr:not(:last-child) th:last-child,.theme--dark.v-data-table tbody tr:not(:last-child) th:not(.v-data-table__mobile-row){border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table tbody tr.active{background:#505050}.theme--dark.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.v-data-table{max-width:100%}.v-data-table table{width:100%;border-spacing:0}.v-data-table td,.v-data-table th{padding:0 16px}.v-data-table th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table th{text-align:left}.v-application--is-rtl .v-data-table th{text-align:right}.v-data-table td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress .v-progress-linear{position:absolute}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense td{height:24px}.v-data-table--dense th{height:32px}.v-data-table--fixed-header .v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header thead th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header thead tr:nth-child(2) th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed.v-data-table--dense thead tr:nth-child(2) th{top:32px}",""]),t.exports=e},456:function(t,e,r){"use strict";r(15),r(11),r(9),r(6),r(12);var n=r(1),d=(r(20),r(449),r(0)),l=r(16),h=r(8);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(h.a)(l.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(d.g)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},498:function(t,e,r){"use strict";r.r(e);var n={},d=r(64),l=r(72),h=r.n(l),o=r(456),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Qesadila Auth")]),t._v(" "),r("p",[t._v("Qesadila auth is authentication and signature system.")]),t._v(" "),this.$store.state.signalR.signalRIdentity?r("div",[r("h2",[t._v("Current identity")]),t._v(" "),r("v-simple-table",[r("tr",[r("td",[t._v("Identity:")]),t._v(" "),r("td",[t._v(t._s(this.$store.state.signalR.signalRIdentity))])]),t._v(" "),r("tr",[r("td",[t._v("Certificate:")]),t._v(" "),r("td",[t._v(t._s(this.$store.state.signalR.signalRCertHash))])]),t._v(" "),r("tr",[r("td",[t._v("Status:")]),t._v(" "),r("td",[t._v(t._s(this.$store.state.signalR.signalRStatusText))])])])],1):t._e(),t._v(" "),r("h2",[t._v("Download")]),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("Signature system")]),t._v(" "),r("p",[t._v("Supported signature standards:")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("\n    Qesadila Auth receives JSON file readable by human, so he knows what he is\n    signing. After signature the file is encapsulated in other json file, and\n    human can see or check original content, signature, and hash of the signed\n    message.\n  ")]),t._v(" "),r("h2",[t._v("Authentication system")]),t._v(" "),r("p",[t._v("\n    By signing the message with private key user authenticate against the\n    website.\n  ")]),t._v(" "),t._m(2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{target:"_blank",href:"https://apps.scholtz.sk/QesadilaAuth/win/publish.zip"}},[this._v("Windows")])]),this._v(" "),e("li",[e("a",{attrs:{target:"_blank",href:"https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip"}},[this._v("Linux")])]),this._v(" "),e("li",[e("a",{attrs:{target:"_blank",href:"https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip"}},[this._v("OSX")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("\n      eID cards with X509Certificates with detached private key on smart cards\n      or identification cards using PKCS#11 library\n    ")]),this._v(" "),e("li",[this._v("System or custom X509Certificates with private key")]),this._v(" "),e("li",[this._v("PGP private and public key")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("\n      Session is requested from website. Session is one time authorisation\n      token with validity of few minutes.\n    ")]),this._v(" "),e("li",[this._v("\n      User signs message stating that he wants to authenticate to specific\n      website. Current time is included this message.\n    ")]),this._v(" "),e("li",[this._v("\n      QesadilaAuth sends the message to the website. Website sends the message\n      to the server.\n    ")]),this._v(" "),e("li",[this._v("\n      Server verifies the authentication with previous registration and\n      validity of authentication session.\n    ")])])}],!1,null,null,null);e.default=component.exports;h()(component,{VSimpleTable:o.a})}}]);