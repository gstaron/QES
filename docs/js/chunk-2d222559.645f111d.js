(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222559"],{cdbd:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("layout-wrapper",e._l(e.votings,(function(t){return n("li",{staticStyle:{"list-style-type":"none"}},[n("demo-card",{attrs:{heading:e.$t("EditVoting")}},[n("forms",{attrs:{data:t}})],1)],1)})),0)],1)},o=[],i=(n("a481"),n("8b1e")),r=n("0d97"),s=n("ad6b"),u=n("25b6"),l={components:{PageTitle:i["a"],"layout-wrapper":r["a"],"demo-card":s["a"],forms:u["a"]},data:function(){return{heading:"Form",subheading:"When it comes to form validation, Vuetify has a multitude of integrations and baked in functionality. Want to use a 3rd party validation plugin? Out of the box you can use Vee-validate and vuelidate.",icon:"pe-7s-plane icon-gradient bg-tempting-azure",votings:[[{question:"Who would you vote for a prime minister?",mandatory:!0,public_:!1,numberOfPositiveAnswers:2,numberOfNegativeAnswers:1,answers:[{text:"Igor Matovič"},{text:"Boris Kollár"},{text:"Richard Sulík"},{text:"Veronika Remišová"}]}],[{question:"What would you like to have in youth park?",mandatory:!0,public_:!0,numberOfPositiveAnswers:2,numberOfNegativeAnswers:1,answers:[{text:"Trees"},{text:"Benches"},{text:"Trashbins"}]},{question:"Are you crazy enough?",mandatory:!1,public_:!1,numberOfPositiveAnswers:2,numberOfNegativeAnswers:1,answers:[{text:"Just a little bit..."},{text:"Of course nope!"}]}]]}},methods:{},mounted:function(){void 0!==localStorage.token&&localStorage.token||this.$router.replace(this.$route.query.redirect||"/login")}},d=l,c=n("2877"),m=Object(c["a"])(d,a,o,!1,null,null,null);t["default"]=m.exports}}]);