(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{197:function(e,t,n){var content=n(201);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(78).default)("82f07252",content,!0,{sourceMap:!1})},198:function(e,t,n){"use strict";var r=n(2),o=n(55).find,l=n(108),c="find",v=!0;c in[]&&Array(1).find((function(){v=!1})),r({target:"Array",proto:!0,forced:v},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(c)},199:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l}));n(79),n(42);var r=n(1),o=n(105);function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"abstract",base=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c(),n=new o.a({mode:t,base:base,routes:e});return"abstract"===t&&n.replace("/"),n}function c(){return e.__CUSTOM_ELEMENT_ROUTER_BASE__||e.location&&e.location.pathname||"/"}r.a.use(o.a)}).call(this,n(34))},200:function(e,t,n){"use strict";n(197)},201:function(e,t,n){var r=n(77)(!1);r.push([e.i,'.example[data-v-5247ae3a]{position:relative;padding:10px;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;color:#35495e;text-align:center;background:#35495e;border-radius:4px}nav[data-v-5247ae3a]{display:flex;padding:5px 10px;margin-bottom:10px;color:#fff;background:#3b8070}nav>span[data-v-5247ae3a]{padding-right:10px}ul[data-v-5247ae3a]{display:flex;flex:1;padding:0;margin:0;list-style:none}ul li[data-v-5247ae3a]{padding:0 5px}a[data-v-5247ae3a]{display:block;color:#fff;text-decoration:none;text-transform:uppercase;cursor:pointer}.nuxt-link-exact-active.nuxt-link-active[data-v-5247ae3a],.router-link-exact-active.router-link-active[data-v-5247ae3a]{font-weight:700}.content[data-v-5247ae3a]{padding:5px;overflow:hidden;line-height:1.6;color:#35495e;background:#fff}.content>div[data-v-5247ae3a]{position:relative;overflow:hidden}.content[data-v-5247ae3a] h2{margin:0 0 10px;font-size:24px;font-weight:700;text-transform:uppercase}.router-view-change-enter-active[data-v-5247ae3a],.router-view-change-leave-active[data-v-5247ae3a]{transition:opacity 0s linear .15s}.router-view-change-enter[data-v-5247ae3a],.router-view-change-leave-to[data-v-5247ae3a]{position:absolute;width:100%;opacity:0;transition:opacity .15s linear .15s}',""]),e.exports=r},202:function(e,t,n){"use strict";n(35),n(198);var r=n(33),o=Object(r.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("View Index")]),e._v(" "),n("p",[e._v("Nonummy! Atque, sequi adipisci arcu porro suspendisse non, corrupti eiusmod orci sed dolorum rem ipsum elit! Gravida voluptatibus cum pharetra.")])])}],!1,null,null,null).exports,l=Object(r.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("View 1")]),e._v(" "),n("p",[e._v("Nonummy! Atque, sequi adipisci arcu porro suspendisse non, corrupti eiusmod orci sed dolorum rem ipsum elit! Gravida voluptatibus cum pharetra.")])])}],!1,null,null,null).exports,c=Object(r.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("View 2")]),e._v(" "),n("p",[e._v("Nonummy! Atque, sequi adipisci arcu porro suspendisse non, corrupti eiusmod orci sed dolorum rem ipsum elit! Gravida voluptatibus cum pharetra.")])])}],!1,null,null,null).exports,v=Object(r.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("View 3")]),e._v(" "),n("p",[e._v("Nonummy! Atque, sequi adipisci arcu porro suspendisse non, corrupti eiusmod orci sed dolorum rem ipsum elit! Gravida voluptatibus cum pharetra.")])])}],!1,null,null,null).exports,d=n(199),f=[{title:"Home",path:"/",component:o},{title:"View 1",path:"/view-1",component:l},{title:"View 2",path:"/view-2",component:c},{title:"View 3",path:"/view-3",component:v}],m={router:Object(d.a)(f),computed:{links:function(){return this.$router.options.routes.map((function(e){return{title:f.find((function(t){var path=t.path;return e.path===path})).title,to:e}}))}}},_=(n(200),Object(r.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example"},[n("nav",{staticClass:"navigation"},[n("span",[e._v("Views:")]),e._v(" "),n("ul",e._l(e.links,(function(link){return n("li",{key:link.title},[n("router-link",{attrs:{to:link.to,title:link.title}},[e._v("\n          "+e._s(link.title)+"\n        ")])],1)})),0)]),e._v(" "),n("div",{staticClass:"content"},[n("div",[n("transition",{attrs:{name:"router-view-change"}},[n("keep-alive",[n("router-view")],1)],1)],1)])])}),[],!1,null,"5247ae3a",null));t.a=_.exports},210:function(e,t,n){"use strict";n.r(t);var r={components:{Example:n(202).a}},o=n(33),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("fieldset",[n("legend",[e._v("Nuxt Component")]),e._v(" "),n("div",[n("client-only",[n("Example")],1)],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);