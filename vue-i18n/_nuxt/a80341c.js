(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{262:function(e,t,n){"use strict";n.r(t);n(38),n(26),n(37),n(12),n(54),n(32),n(55);var o=n(21),r=n(2),c=n(271),l=(n(272),n(269));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}r.a.use(c.a);r.a.customElement("custom-element-vue-i18n","function"==typeof l.a?(new l.a).$options:l.a,d(d({},void 0),{})),r.a.component("NuxtLink",{extends:r.a.component("RouterLink")})},264:function(e,t,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(114).default)("0844ed0e",content,!0,{sourceMap:!1})},265:function(e,t,n){"use strict";t.a={locales:[{code:"en",name:"English"},{code:"de",name:"Deutsch"},{code:"ja",name:"日本語"}],defaultLocale:"en",vueI18n:{messages:{de:{message:{hello:"hallo welt"}},en:{message:{hello:"hello world"}},ja:{message:{hello:"こんにちは、世界"}}}}}},266:function(e,t,n){"use strict";n(264)},267:function(e,t,n){var o=n(113)((function(i){return i[1]}));o.push([e.i,'.example[data-v-32f93970]{padding:10px;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;color:#35495e;text-align:center;background:#35495e;border-radius:4px}nav[data-v-32f93970]{display:flex;padding:5px 10px;margin-bottom:10px;color:#fff;background:#3b8070}nav>span[data-v-32f93970]{padding-right:10px}ul[data-v-32f93970]{display:flex;flex:1;padding:0;list-style:none}ul li[data-v-32f93970]{padding:0 5px}a[data-v-32f93970]{display:block;color:#fff;text-decoration:none;text-transform:uppercase;cursor:pointer}.nuxt-link-exact-active.nuxt-link-active[data-v-32f93970],.router-link-exact-active.router-link-active[data-v-32f93970],.title[data-v-32f93970]{font-weight:700}.title[data-v-32f93970]{margin-bottom:10px;font-size:24px;text-transform:uppercase}.content[data-v-32f93970],.title[data-v-32f93970]{padding:5px;line-height:1.6;color:#35495e;background:#fff}.fade-leave-active[data-v-32f93970]{transition:opacity .35s}.fade-enter[data-v-32f93970],.fade-leave-to[data-v-32f93970]{opacity:0}',""]),o.locals={},e.exports=o},268:function(e,t,n){"use strict";n(39),n(27);var o=n(265),r={computed:{links:function(){var e=this;return(this.$i18n.locales||o.a.locales).map((function(t){var n=t.name,code=t.code;return{code:code,class:code===e.$i18n.locale?"router-link-exact-active router-link-active":"",title:n}}))}}},c=(n(266),n(61)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example"},[n("nav",{staticClass:"navigation"},[n("span",[e._v("Locales:")]),e._v(" "),n("ul",e._l(e.links,(function(link){return n("li",{key:link.title},[n("a",{class:link.class,attrs:{title:link.title},on:{click:function(t){t.preventDefault(),e.$i18n.locale=link.code}}},[e._v("\n          "+e._s(link.title)+"\n        ")])])})),0)]),e._v(" "),n("div",{staticClass:"content"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("span",{key:e.$i18n.locale},[e._v(e._s(e.$t("message").hello))])])],1)])}),[],!1,null,"32f93970",null);t.a=component.exports},269:function(e,t,n){"use strict";var o=n(268),r=(n(38),n(26),n(37),n(12),n(54),n(32),n(55),n(21)),c=n(2),l=n(145),f=n(265);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}c.a.use(l.a);var v=new l.a(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({locale:f.a.defaultLocale},f.a.vueI18n)),m={i18n:v,components:{Example:o.a}},O=n(61),component=Object(O.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Example")],1)}),[],!1,null,null,null);t.a=component.exports}}]);