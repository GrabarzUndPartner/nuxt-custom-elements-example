(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{227:function(e,t,n){"use strict";n.r(t);n(56),n(28),n(43),n(15),n(70),n(37),n(71);var o=n(35),r=n(2),c=n(236),l=(n(237),n(234));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}r.a.use(c.a);var v={shadow:!0,beforeCreateVueInstance:function(e){var t=e.el.getRootNode();return t instanceof ShadowRoot?e.shadowRoot=t:e.shadowRoot=document.head,e}};r.a.customElement("custom-element-vuex","function"==typeof l.a?(new l.a).$options:l.a,f(f({},void 0),v)),r.a.component("NuxtLink",{extends:r.a.component("RouterLink")})},229:function(e,t,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(100).default)("64c2ca25",content,!0,{sourceMap:!1})},230:function(e,t,n){"use strict";n(229)},231:function(e,t,n){var o=n(99)((function(i){return i[1]}));o.push([e.i,'.example[data-v-aacd5204]{position:relative;padding:10px;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;color:#35495e;text-align:center;background:#35495e;border-radius:4px}span[data-v-aacd5204]{font-size:28px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}p[data-v-aacd5204]{font-size:30px;font-weight:700}a[data-v-aacd5204]{display:block;color:#fff;text-decoration:none;text-transform:uppercase;cursor:pointer}.nuxt-link-exact-active.nuxt-link-active[data-v-aacd5204],.router-link-exact-active.router-link-active[data-v-aacd5204]{font-weight:700}.content[data-v-aacd5204]{padding:5px;overflow:hidden;line-height:1.6;color:#35495e;background:#fff}.content>div[data-v-aacd5204]{position:relative;overflow:hidden}.content[data-v-aacd5204] h2{margin:0 0 10px;font-size:24px;font-weight:700;text-transform:uppercase}.router-view-change-enter-active[data-v-aacd5204],.router-view-change-leave-active[data-v-aacd5204]{transition:opacity 0s linear .15s}.router-view-change-enter[data-v-aacd5204],.router-view-change-leave-to[data-v-aacd5204]{position:absolute;width:100%;opacity:0;transition:opacity .15s linear .15s}',""]),o.locals={},e.exports=o},232:function(e,t,n){"use strict";var o={},r=(n(230),n(42)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example"},[n("div",{staticClass:"content"},[n("span",{on:{click:function(t){return e.$store.dispatch("example/increment")}}},[e._v("You have pressed "),n("strong",[e._v(e._s(e.$store.getters["example/count"]))]),e._v(" times on the text!")])])])}),[],!1,null,"aacd5204",null);t.a=component.exports},233:function(e,t,n){var map={"./example.js":175};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=233},234:function(e,t,n){"use strict";var o=n(232),r=(n(15),n(29),n(25),n(57),n(2)),c=n(69);r.a.use(c.b);var l,d={store:new c.a({modules:(l=n(233),l.keys().reduce((function(e,t){var n=t.replace(/\.\/(.*)\.js/,"$1");return e[String(n)]=Object.assign({namespaced:!0},l(t)),e}),{}))}),components:{Example:o.a}},f=n(42),component=Object(f.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Example")],1)}),[],!1,null,null,null);t.a=component.exports}}]);