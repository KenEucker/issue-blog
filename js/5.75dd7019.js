(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"617f":function(t,e,a){},7985:function(t,e,a){"use strict";var r=a("617f"),s=a.n(r);s.a},f241:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:"bg-cyan-9",attrs:{elevated:"",reveal:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[a("router-link",{staticStyle:{color:"#fff"},attrs:{to:"/"}},[t._v(t._s(t.$store.getters.blogName))])],1),a("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user="+this.$store.getters.username+"&repo="+this.$store.getters.repository+"&type=star&count=true",frameborder:"0",scrolling:"0",width:"100px",height:"20px"}})],1)],1),t.user.id?a("q-drawer",{attrs:{"show-if-above":"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticStyle:{height:"calc(100% - 250px)","margin-top":"250px","border-right":"1px solid #ddd"}},[a("q-list",{staticClass:"q-pa-md q-mb-lg"},[a("q-item-label",{attrs:{header:""}},[t._v("Links")]),t._l(t.links,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.index,attrs:{clickable:"",tag:"a",target:"_blank",href:e.url}},[a("q-item-section",{staticClass:"text-grey-10",attrs:{avatar:""}},[a("q-icon",{attrs:{size:"30px",color:"cyan-9",name:e.icon}})],1),a("q-item-section",[a("q-item-label",{staticClass:"text-cyan-9"},[t._v(t._s(e.title))]),a("q-item-label",{staticStyle:{"text-decoration":"underline"},attrs:{caption:""}},[t._v("\n              "+t._s(e.subTile)+"\n            ")])],1)],1)}))],2)],1),a("q-img",{staticClass:"absolute-top",staticStyle:{height:"250px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[a("div",{staticClass:"absolute-center bg-transparent text-center",staticStyle:{width:"100%"}},[a("q-avatar",{attrs:{size:"80px"}},[a("img",{attrs:{alt:"ttop5-avatar",src:t.user.avatar_url}})]),a("div",{staticClass:"q-pt-md text-h5"},[t._v(t._s(t.user.name))]),a("div",{staticClass:"text-h5"},[t._v(t._s(t.user.login))]),a("div",{staticClass:"q-pt-sm"},[t._v(t._s(t.user.bio))])],1)])],1):t._e(),a("q-page-container",{staticClass:"q-mb-xl"},[a("router-view"),a("br"),a("br"),a("div",{staticClass:"absolute-bottom text-center text-grey-6"},[t._v("\n      © "+t._s(t.year)+" "),a("a",{staticClass:"text-grey-6",attrs:{href:"https://ttop5.net/issue-blog"}},[t._v("ttop5")])])],1),a("q-page-sticky",{attrs:{elevated:"",reveal:"",position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-fab",{attrs:{icon:"unfold_more",color:"cyan-9",direction:"up"}},[a("q-fab-action",{attrs:{icon:"home",color:"cyan-9"},on:{click:function(e){return t.$router.push("/")}}}),a("q-fab-action",{attrs:{icon:"keyboard_arrow_up",color:"cyan-9"},on:{click:t.backToTop}})],1)],1)],1)},s=[],o=a("bd4c"),n=a("758b"),i={name:"MyLayout",data:function(){return{user:{},links:this.$store.getters.links,year:o["a"].formatDate(new Date,"YYYY")}},methods:{getUserInfo:function(){var t=this;n["a"].get("https://api.github.com/users/".concat(this.$store.getters.username)).then((function(e){t.$set(t,"user",e.data)}))},backToTop:function(){var t,e=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e-=100,e>0?window.scrollTo(0,e):(window.scrollTo(0,0),clearInterval(t),t=null)};t=setInterval(e,1)}},created:function(){this.getUserInfo()}},l=i,c=(a("7985"),a("2877")),u=Object(c["a"])(l,r,s,!1,null,"97d2192c",null);e["default"]=u.exports}}]);