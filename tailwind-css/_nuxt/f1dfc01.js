/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{210:function(e,n,t){"use strict";t.r(n);var o=t(1);function r(e,n){return e.__proto__=n,e}Object.setPrototypeOf=Object.setPrototypeOf||r;r.bind(Object);var l="undefined"!=typeof Symbol&&"undefined"!=typeof Reflect&&"undefined"!=typeof Proxy&&!Object.isSealed(Proxy),c=function(){function e(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function h(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function m(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!=typeof customElements){if(l){var t=function(e){function t(e){d(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),o=e?HTMLElement.call(e):n;return r.call(o),f(n,o)}return h(t,e),c(t,null,[{key:"observedAttributes",get:function(){return n.observedAttributes||[]}}]),t}(m);return t.prototype.connectedCallback=y,t.prototype.disconnectedCallback=v,t.prototype.attributeChangedCallback=w,_(e,t),t}var o=function(e){var n=e?HTMLElement.call(e):this;return r.call(n),n};return o.observedAttributes=n.observedAttributes||[],o.prototype=Object.create(HTMLElement.prototype,{constructor:{configurable:!0,writable:!0,value:o}}),o.prototype.connectedCallback=y,o.prototype.disconnectedCallback=v,o.prototype.attributeChangedCallback=w,_(e,o),o}function r(){!0===n.shadow&&HTMLElement.prototype.attachShadow&&this.attachShadow({mode:"open"}),"function"==typeof n.constructorCallback&&n.constructorCallback.call(this)}function y(){"function"==typeof n.connectedCallback&&n.connectedCallback.call(this)}function v(){"function"==typeof n.disconnectedCallback&&n.disconnectedCallback.call(this)}function w(e,t,o){"function"==typeof n.attributeChangedCallback&&n.attributeChangedCallback.call(this,e,t,o)}function _(e,n){var t=customElements.get(e);return void 0!==t?t:customElements.define(e,n)}}Object.setPrototypeOf(m.prototype,HTMLElement.prototype),Object.setPrototypeOf(m,HTMLElement);var v=/-(\w)/g,w=function(e){return e.replace(v,(function(e,n){return n?n.toUpperCase():""}))},_=/([^-])([A-Z])/g,C=function(e){return e.replace(_,"$1-$2").replace(_,"$1-$2").toLowerCase()};function x(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=e.length-n,t=new Array(i);i--;)t[i]=e[i+n];return t}var k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function E(e,n){if(null==e)return n!==Boolean&&void 0;var t=e,o=["true","false"].indexOf(e)>-1,r=parseFloat(t,10),l=!isNaN(r)&&isFinite(t)&&"string"==typeof t&&!t.match(/^0+[^.]\d*$/g);return n&&n!==Boolean&&(void 0===t?"undefined":k(t))!==n?t=n(e):o||n===Boolean?t=""===t||("true"===t||!0===t):l&&(t=r),t}function S(e,n){if(e&&e.length)e.forEach((function(e){var t=w(e);-1===n.camelCase.indexOf(t)&&n.camelCase.push(t)}));else if(e&&"object"===(void 0===e?"undefined":k(e)))for(var t in e){var o=w(t);-1===n.camelCase.indexOf(o)&&n.camelCase.push(o),e[o]&&e[o].type&&(n.types[t]=[].concat(e[o].type)[0])}}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={camelCase:[],hyphenate:[],types:{}};if(e.mixins&&e.mixins.forEach((function(e){S(e.props,n)})),e.extends&&e.extends.props){var t=e.extends.props;S(t,n)}return S(e.props,n),n.camelCase.forEach((function(e){n.hyphenate.push(C(e))})),n}function M(e){var n={};return x(e.attributes).forEach((function(e){n["vue-slot"===e.nodeName?"slot":e.nodeName]=e.nodeValue})),n}function O(e,element,n){var t=x(function(element){if(element.childNodes.length)return element.childNodes;if(element.content&&element.content.childNodes&&element.content.childNodes.length)return element.content.childNodes;var e=document.createElement("div");return e.innerHTML=element.innerHTML,e.childNodes}(element)).map((function(n){return"#text"===n.nodeName?n.nodeValue:e(n.tagName,{attrs:M(n),domProps:{innerHTML:n.innerHTML}})}));return n.slot=element.id,e("template",n,t)}function z(e,n){var t={bubbles:!1,cancelable:!1,detail:n},o=void 0;return"function"==typeof window.CustomEvent?o=new CustomEvent(e,t):(o=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}function A(element,e){for(var n=arguments.length,t=Array(n>2?n-2:0),o=2;o<n;o++)t[o-2]=arguments[o];var r=z(e,[].concat(t));element.dispatchEvent(r)}function N(element,e,n,t,o){if(element.__vue_custom_element__)return Promise.resolve(element);var r=e.util.extend({},n),l=function(element,e,n){var t=e.propsData||{};return n.hyphenate.forEach((function(e,o){var r=n.camelCase[o],l=element.attributes[e]||element[r],c=null;n.types[r]&&(c=n.types[r]),l instanceof Attr?t[r]=E(l.value,c):void 0!==l&&(t[r]=l)})),t}(element,r,t),c=e.version&&parseInt(e.version.split(".")[0],10)||0;if(r.beforeCreate=[].concat(r.beforeCreate||[],(function(){this.$emit=function(){for(var e,n=arguments.length,t=Array(n),o=0;o<n;o++)t[o]=arguments[o];A.apply(void 0,[element].concat(t)),this.__proto__&&(e=this.__proto__.$emit).call.apply(e,[this].concat(t))}})),r._compiled){var d={},f=r._Ctor;f&&(d=Object.keys(f).map((function(e){return f[e]}))[0].options),d.beforeCreate=r.beforeCreate}var h=void 0;if(c>=2){var m=element.cloneNode(!0).childNodes;h={propsData:l,props:t.camelCase,computed:{reactiveProps:function(){var e=this,n={};return t.camelCase.forEach((function(t){void 0!==e[t]&&(n[t]=e[t])})),n}},render:function(e){var data={props:this.reactiveProps};return e(r,data,function(){var e=arguments[1],n=[];return x(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(t){if("#text"===t.nodeName)t.nodeValue.trim()&&n.push(e("span",t.nodeValue));else if("#comment"!==t.nodeName){var o=M(t),r={attrs:o,domProps:{innerHTML:""===t.innerHTML?t.innerText:t.innerHTML}};o.slot&&(r.slot=o.slot,o.slot=void 0);var l="TEMPLATE"===t.tagName?O(e,t,r):e(t.tagName,r);n.push(l)}})),n}(m,e))}}}else if(1===c)(h=r).propsData=l;else{h=r;var y={};Object.keys(l).forEach((function(e){y[e]={default:l[e]}})),h.props=y}var v=c>=2?"<div></div>":("<div>"+element.innerHTML+"</div>").replace(/vue-slot=/g,"slot=");if(o.shadow&&element.shadowRoot?(element.shadowRoot.innerHTML=v,h.el=element.shadowRoot.children[0]):(element.innerHTML=v,h.el=element.children[0]),o.shadow&&o.shadowCss&&element.shadowRoot){var style=document.createElement("style");style.type="text/css",style.appendChild(document.createTextNode(o.shadowCss)),element.shadowRoot.appendChild(style)}return function(element,e){e.camelCase.forEach((function(n,t){Object.defineProperty(element,n,{get:function(){return this.__vue_custom_element__[n]},set:function(n){if("object"!==(void 0===n?"undefined":k(n))&&"function"!=typeof n||!this.__vue_custom_element__){var o=e.types[e.camelCase[t]];this.setAttribute(e.hyphenate[t],E(n,o))}else{var r=e.camelCase[t];this.__vue_custom_element__[r]=n}}})}))}(element,t),"function"==typeof o.beforeCreateVueInstance&&(h=o.beforeCreateVueInstance(h)||h),Promise.resolve(h).then((function(n){return element.__vue_custom_element__=new e(n),element.__vue_custom_element_props__=t,element.getVueInstance=function(){var e=element.__vue_custom_element__;return e.$children.length?e.$children[0]:e},element.removeAttribute("vce-cloak"),element.setAttribute("vce-ready",""),A(element,"vce-ready"),element}))}function L(e){e.customElement=function(n,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r="function"==typeof t,l=r&&{props:o.props||[]},c=T(r?l:t),d=y(n,{constructorCallback:function(){"function"==typeof o.constructorCallback&&o.constructorCallback.call(this)},connectedCallback:function(){var l=this,d=r&&t(),f=d&&d.then&&"function"==typeof d.then;if("function"==typeof o.connectedCallback&&o.connectedCallback.call(this),r&&!f)throw new Error("Async component "+n+" do not returns Promise");this.__detached__||(f?d.then((function(n){var t=T(n);N(l,e,n,t,o).then((function(){"function"==typeof o.vueInstanceCreatedCallback&&o.vueInstanceCreatedCallback.call(l)}))})):N(this,e,t,c,o).then((function(){"function"==typeof o.vueInstanceCreatedCallback&&o.vueInstanceCreatedCallback.call(l)}))),this.__detached__=!1},disconnectedCallback:function(){var e=this;this.__detached__=!0,"function"==typeof o.disconnectedCallback&&o.disconnectedCallback.call(this),null!==o.destroyTimeout&&setTimeout((function(){e.__detached__&&e.__vue_custom_element__&&(e.__detached__=!1,e.__vue_custom_element__.$destroy(!0),delete e.__vue_custom_element__,delete e.__vue_custom_element_props__)}),o.destroyTimeout||3e3)},attributeChangedCallback:function(e,n,t){if(this.__vue_custom_element__&&void 0!==t){var r=w(e);"function"==typeof o.attributeChangedCallback&&o.attributeChangedCallback.call(this,e,n,t);var l=this.__vue_custom_element_props__.types[r];this.__vue_custom_element__[r]=E(t,l)}},observedAttributes:c.hyphenate,shadow:!!o.shadow&&!!HTMLElement.prototype.attachShadow});return d}}"undefined"!=typeof window&&window.Vue&&(window.Vue.use(L),L.installed&&(L.installed=!1));var P=L,j=(t(217),t(220));o.a.use(P),o.a.customElement("custom-element-tailwind-css","function"==typeof j.a?(new j.a).$options:j.a,void 0),o.a.component("NuxtLink",{extends:o.a.component("RouterLink")})},217:function(e,n){!function(){"use strict";var e="function"==typeof Promise?Promise:function(e){var n,t=[],o=0;return e((function(e){n=e,o=1,t.splice(0).forEach(r)})),{then:r};function r(e){return o?setTimeout(e,0,n):t.push(e),this}},n=function(e,n){var t=function(e){for(var i=0,n=e.length;i<n;i++)o(e[i])},o=function(e){var n=e.target,t=e.attributeName,o=e.oldValue;n.attributeChangedCallback(t,o,n.getAttribute(t))};return function(r,l){var c=r.constructor.observedAttributes;return c&&e(l).then((function(){new n(t).observe(r,{attributes:!0,attributeOldValue:!0,attributeFilter:c});for(var i=0,e=c.length;i<e;i++)r.hasAttribute(c[i])&&o({target:r,attributeName:c[i],oldValue:null})})),r}},t=!0,o=!1,r="querySelectorAll";function l(e){this.observe(e,{subtree:t,childList:t})}var c="querySelectorAll",d=self,f=d.document,h=d.Element,m=d.MutationObserver,y=d.Set,v=d.WeakMap,w=function(element){return c in element},filter=[].filter,_=function(e){var n=new v,d=function(element,t){var o;if(t)for(var q,r=function(element){return element.matches||element.webkitMatchesSelector||element.msMatchesSelector}(element),i=0,l=C.length;i<l;i++)r.call(element,q=C[i])&&(n.has(element)||n.set(element,new y),(o=n.get(element)).has(q)||(o.add(q),e.handle(element,t,q)));else n.has(element)&&(o=n.get(element),n.delete(element),o.forEach((function(q){e.handle(element,t,q)})))},_=function(e){for(var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=0,t=e.length;i<t;i++)d(e[i],n)},C=e.query,x=e.root||f,k=function(e,n,c){var d=function n(o,l,c,d,f){for(var i=0,h=o.length;i<h;i++){var m=o[i];(f||r in m)&&(d?l.has(m)||(l.add(m),c.delete(m),e(m,d)):c.has(m)||(c.add(m),l.delete(m),e(m,d)),f||n(m[r]("*"),l,c,d,t))}},f=new(c||MutationObserver)((function(e){for(var n=new Set,r=new Set,i=0,l=e.length;i<l;i++){var c=e[i],f=c.addedNodes,h=c.removedNodes;d(h,n,r,o,o),d(f,n,r,t,o)}}));return f.add=l,f.add(n||document),f}(d,x,m),E=h.prototype.attachShadow;return E&&(h.prototype.attachShadow=function(e){var n=E.call(this,e);return k.add(n),n}),C.length&&_(x[c](C)),{drop:function(e){for(var i=0,t=e.length;i<t;i++)n.delete(e[i])},flush:function(){for(var e=k.takeRecords(),i=0,n=e.length;i<n;i++)_(filter.call(e[i].removedNodes,w),!1),_(filter.call(e[i].addedNodes,w),!0)},observer:k,parse:_}},C=self,x=C.document,k=C.Map,E=C.MutationObserver,S=C.Object,T=C.Set,M=C.WeakMap,O=C.Element,z=C.HTMLElement,A=C.Node,N=C.Error,L=C.TypeError,P=C.Reflect,j=self.Promise||e,R=S.defineProperty,I=S.keys,H=S.getOwnPropertyNames,F=S.setPrototypeOf,$=!self.customElements,U=function(element){for(var e=I(element),n=[],t=e.length,i=0;i<t;i++)n[i]=element[e[i]],delete element[e[i]];return function(){for(var o=0;o<t;o++)element[e[o]]=n[o]}};if($){var D=function(){var e=this.constructor;if(!B.has(e))throw new L("Illegal constructor");var n=B.get(e);if(K)return X(K,n);var element=V.call(x,n);return X(F(element,e.prototype),n)},V=x.createElement,B=new k,W=new k,J=new k,G=new k,Y=[],Z=_({query:Y,handle:function(element,e,n){var t=J.get(n);if(e&&!t.isPrototypeOf(element)){var o=U(element);K=F(element,t);try{new t.constructor}finally{K=null,o()}}var r="".concat(e?"":"dis","connectedCallback");r in t&&element[r]()}}).parse,K=null,Q=function(n){if(!W.has(n)){var t,o=new e((function(e){t=e}));W.set(n,{$:o,_:t})}return W.get(n).$},X=n(Q,E);R(self,"customElements",{configurable:!0,value:{define:function(e,n){if(G.has(e))throw new N('the name "'.concat(e,'" has already been used with this registry'));B.set(n,e),J.set(e,n.prototype),G.set(e,n),Y.push(e),Q(e).then((function(){Z(x.querySelectorAll(e))})),W.get(e)._(n)},get:function(e){return G.get(e)},whenDefined:Q}}),R(D.prototype=z.prototype,"constructor",{value:D}),R(self,"HTMLElement",{configurable:!0,value:D}),R(x,"createElement",{configurable:!0,value:function(e,n){var t=n&&n.is,o=t?G.get(t):G.get(e);return o?new o:V.call(x,e)}}),"isConnected"in A.prototype||R(A.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{var ee=function e(){return self.Reflect.construct(HTMLLIElement,[],e)};ee.prototype=HTMLLIElement.prototype;var ne="extends-li";self.customElements.define("extends-li",ee,{extends:"li"}),$=x.createElement("li",{is:ne}).outerHTML.indexOf(ne)<0;var te=self.customElements,oe=te.get,re=te.whenDefined;R(self.customElements,"whenDefined",{configurable:!0,value:function(e){var n=this;return re.call(this,e).then((function(t){return t||oe.call(n,e)}))}})}catch(e){$=!$}if($){var ie=function(element){var e=fe.get(element);_e(e.querySelectorAll(this),element.isConnected)},ae=self.customElements,se=O.prototype.attachShadow,le=x.createElement,ce=ae.define,ue=ae.get,de=(P||{construct:function(e){return e.call(this)}}).construct,fe=new M,he=new T,pe=new k,me=new k,be=new k,ge=new k,ye=[],ve=[],we=function(e){return ge.get(e)||ue.call(ae,e)},_e=_({query:ve,handle:function(element,e,n){var t=be.get(n);if(e&&!t.isPrototypeOf(element)){var o=U(element);Ee=F(element,t);try{new t.constructor}finally{Ee=null,o()}}var r="".concat(e?"":"dis","connectedCallback");r in t&&element[r]()}}).parse,Ce=_({query:ye,handle:function(element,e){fe.has(element)&&(e?he.add(element):he.delete(element),ve.length&&ie.call(ve,element))}}).parse,xe=function(e){if(!me.has(e)){var n,t=new j((function(e){n=e}));me.set(e,{$:t,_:n})}return me.get(e).$},ke=n(xe,E),Ee=null;H(self).filter((function(e){return/^HTML/.test(e)})).forEach((function(e){var n=self[e];function t(){var e=this.constructor;if(!pe.has(e))throw new L("Illegal constructor");var t=pe.get(e),o=t.is,r=t.tag;if(o){if(Ee)return ke(Ee,o);var element=le.call(x,r);return element.setAttribute("is",o),ke(F(element,e.prototype),o)}return de.call(this,n,[],e)}R(t.prototype=n.prototype,"constructor",{value:t}),R(self,e,{value:t})})),R(x,"createElement",{configurable:!0,value:function(e,n){var t=n&&n.is;if(t){var o=ge.get(t);if(o&&pe.get(o).tag===e)return new o}var element=le.call(x,e);return t&&element.setAttribute("is",t),element}}),se&&(O.prototype.attachShadow=function(e){var n=se.call(this,e);return fe.set(this,n),n}),R(ae,"get",{configurable:!0,value:we}),R(ae,"whenDefined",{configurable:!0,value:xe}),R(ae,"define",{configurable:!0,value:function(e,n,t){if(we(e))throw new N("'".concat(e,"' has already been defined as a custom element"));var o,r=t&&t.extends;pe.set(n,r?{is:e,tag:r}:{is:"",tag:e}),r?(o="".concat(r,'[is="').concat(e,'"]'),be.set(o,n.prototype),ge.set(e,n),ve.push(o)):(ce.apply(ae,arguments),ye.push(o=e)),xe(e).then((function(){r?(_e(x.querySelectorAll(o)),he.forEach(ie,[o])):Ce(x.querySelectorAll(o))})),me.get(e)._(n)}})}}()},218:function(e,n,t){var content=t(219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(59).default)("f04d7ace",content,!0,{sourceMap:!1})},219:function(e,n,t){var o=t(58)((function(i){return i[1]}));o.push([e.i,"/*! tailwindcss v2.2.8 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.static{\n  position:static;\n}\n\n.mr-2{\n  margin-right:0.5rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.inline-block{\n  display:inline-block;\n}\n\n.table{\n  display:table;\n}\n\n.w-full{\n  width:100%;\n}\n\n.max-w-sm{\n  max-width:24rem;\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.bg-gray-200{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n@media (prefers-color-scheme: dark){\n  .dark\\:bg-gray-700{\n    --tw-bg-opacity:1;\n    background-color:rgba(55, 65, 81, var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-gray-900{\n    --tw-bg-opacity:1;\n    background-color:rgba(17, 24, 39, var(--tw-bg-opacity));\n  }\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-6{\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n}\n\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n\n.py-4{\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\n\n.pb-2{\n  padding-bottom:0.5rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-base{\n  font-size:1rem;\n  line-height:1.5rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.text-gray-700{\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n@media (prefers-color-scheme: dark){\n  .dark\\:text-white{\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity));\n  }\n\n  .dark\\:text-gray-300{\n    --tw-text-opacity:1;\n    color:rgba(209, 213, 219, var(--tw-text-opacity));\n  }\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-lg{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}",""]),o.locals={},e.exports=o}}]);