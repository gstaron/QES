(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217aea"],{c887:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("layout-wrapper",t._l(t.votings,(function(t){return n("li",{staticStyle:{"list-style-type":"none"}},[n("demo-card",{attrs:{heading:"Edit the voting"}},[n("forms",{attrs:{data:t}})],1)],1)})),0)],1)},o=[],i=(n("a481"),n("8b1e")),r=n("0d97"),u=n("ad6b"),l=n("25b6"),s={components:{PageTitle:i["a"],"layout-wrapper":r["a"],"demo-card":u["a"],forms:l["a"]},data:function(){return{heading:"Form",subheading:"When it comes to form validation, Vuetify has a multitude of integrations and baked in functionality. Want to use a 3rd party validation plugin? Out of the box you can use Vee-validate and vuelidate.",icon:"pe-7s-plane icon-gradient bg-tempting-azure",votings:[[{question:"Who would you vote for a prime minister?",mandatory:!0,public_:!1,from:null,until:null,answers:[{text:"Igor Matovič"},{text:"Boris Kollár"},{text:"Richard Sulík"},{text:"Veronika Remišová"}]}],[{question:"What would you like to have in yout park?",mandatory:!0,public_:!0,from:null,until:null,answers:[{text:"Trees"},{text:"Benches"},{text:"Trashbins"}]},{question:"Are you crazy enough?",mandatory:!1,public_:!1,from:null,until:null,answers:[{text:"Just a little bit..."},{text:"Of course nope!"}]}]]}},methods:{},mounted:function(){void 0!==localStorage.token&&localStorage.token||this.$router.replace(this.$route.query.redirect||"/login")}},d=s,c=n("2877"),p=Object(c["a"])(d,a,o,!1,null,null,null);e["default"]=p.exports}}]);