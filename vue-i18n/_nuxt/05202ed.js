(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{227:function(e,t,n){var content=n(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(93).default)("2af8b958",content,!0,{sourceMap:!1})},228:function(e,t,n){"use strict";t.a={locales:[{code:"en",name:"English"},{code:"de",name:"Deutsch"},{code:"ja",name:"日本語"}],defaultLocale:"en",vueI18n:{messages:{de:{message:{hello:"hallo welt"}},en:{message:{hello:"hello world"}},ja:{message:{hello:"こんにちは、世界"}}}}}},229:function(e,t,n){"use strict";n(227)},230:function(e,t,n){var o=n(92)((function(i){return i[1]}));o.push([e.i,'.example[data-v-2fb10f92]{padding:10px;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;color:#35495e;text-align:center;background:#35495e;border-radius:4px}nav[data-v-2fb10f92]{display:flex;padding:5px 10px;margin-bottom:10px;color:#fff;background:#3b8070}nav>span[data-v-2fb10f92]{padding-right:10px}ul[data-v-2fb10f92]{display:flex;flex:1;padding:0;list-style:none}ul li[data-v-2fb10f92]{padding:0 5px}a[data-v-2fb10f92]{display:block;color:#fff;text-decoration:none;text-transform:uppercase;cursor:pointer}.nuxt-link-exact-active.nuxt-link-active[data-v-2fb10f92],.router-link-exact-active.router-link-active[data-v-2fb10f92],.title[data-v-2fb10f92]{font-weight:700}.title[data-v-2fb10f92]{margin-bottom:10px;font-size:24px;text-transform:uppercase}.content[data-v-2fb10f92],.title[data-v-2fb10f92]{padding:5px;line-height:1.6;color:#35495e;background:#fff}.fade-leave-active[data-v-2fb10f92]{transition:opacity .35s}.fade-enter[data-v-2fb10f92],.fade-leave-to[data-v-2fb10f92]{opacity:0}',""]),e.exports=o},231:function(e,t,n){"use strict";n(33),n(20);var o=n(228),l={computed:{links:function(){var e=this;return(this.$i18n.locales||o.a.locales).map((function(t){var n=t.name,code=t.code;return{code:code,class:code===e.$i18n.locale?"router-link-exact-active router-link-active":"",title:n}}))}}},r=(n(229),n(51)),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example"},[n("nav",{staticClass:"navigation"},[n("span",[e._v("Locales:")]),e._v(" "),n("ul",e._l(e.links,(function(link){return n("li",{key:link.title},[e.$nuxt?n("nuxt-link",{attrs:{to:e.switchLocalePath(link.code),title:link.title}},[e._v("\n          "+e._s(link.title)+"\n        ")]):n("a",{class:link.class,attrs:{title:link.title},on:{click:function(t){t.preventDefault(),e.$i18n.locale=link.code}}},[e._v("\n          "+e._s(link.title)+"\n        ")])],1)})),0)]),e._v(" "),n("div",{staticClass:"content"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("span",{key:e.$i18n.locale},[e._v(e._s(e.$t("message").hello))])])],1)])}),[],!1,null,"2fb10f92",null);t.a=component.exports},235:function(e,t,n){"use strict";var o=n(231),l=(n(41),n(23),n(34),n(46),n(29),n(47),n(17)),r=n(1),c=n(121),f=n(228);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}r.a.use(c.a);var v={i18n:new c.a(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({locale:f.a.defaultLocale},f.a.vueI18n)),components:{Example:o.a}},x=n(51),component=Object(x.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Example")],1)}),[],!1,null,null,null);t.a=component.exports}}]);