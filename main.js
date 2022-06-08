/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={591:(t,e,n)=>{var r=n(8).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d={};function v(){}function p(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(T([])));b&&b!==n&&i.call(b,c)&&(m=b);var w=y.prototype=v.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,a,c,s){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==r(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=y,l(w,"constructor",y),l(y,"constructor",p),p.displayName=l(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},L(x.prototype),l(x.prototype,s,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new x(h(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},757:(t,e,n)=>{var r=n(591)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=function(){function e(n,r){t(this,e),this.intenalLinks=document.querySelectorAll(n),this.options=void 0===r?{behavior:"smooth",block:"start"}:r,this.scrollToSection=this.scrollToSection.bind(this)}return r(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.intenalLinks.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.intenalLinks.length&&this.addLinkEvent(),this}}]),e}(),i=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="active"}return r(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),a=function(){function e(n,r){var o,i,a=this;t(this,e),i=function(t){a.tabContent.forEach((function(t){t.classList.remove(a.activeClass)})),a.tabContent[t].classList.add(a.activeClass)},(o="activeTab")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(r),this.activeClass="active"}return r(e,[{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}(),c=function(){function e(n,r,o){t(this,e),this.containerModal=document.querySelector(n),this.buttonOpen=document.querySelector(r),this.buttonClose=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOut=this.clickOut.bind(this)}return r(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("active")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOut",value:function(t){t.target===this.containerModal&&this.toggleModal(t)}},{key:"addModalEvents",value:function(){this.buttonOpen.addEventListener("click",this.eventToggleModal),this.buttonClose.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickOut)}},{key:"init",value:function(){return this.containerModal&&this.buttonOpen&&this.buttonClose&&this.addModalEvents(),this}}]),e}(),s=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return r(e,[{key:"createTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+200>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-200,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.createTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}]),e}();function u(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){u(i,r,o,a,c,"next",t)}function c(t){u(i,r,o,a,c,"throw",t)}a(void 0)}))}}var h=n(757),f=n.n(h),d=function(){function e(n,r,o){t(this,e),this.numbers=document.querySelectorAll(n),this.observerTarget=document.querySelector(r),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}return r(e,[{key:"animaNumbers",value:function(){var t=this;this.numbers.forEach((function(e){t.constructor.incrementNumber(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumbers())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numbers.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"incrementNumber",value:function(t){var e=+t.innerText,n=e/100,r=0,o=setInterval((function(){r+=n,t.innerText=Math.floor(r),r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}}]),e}();function v(){return v=l(f().mark((function t(e,n){var r,o,i,a,c,s;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(){return(s=l(f().mark((function t(){var n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:t.sent.forEach((function(t){i(t)})),a(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)},c=function(){return s.apply(this,arguments)},a=function(){new d("[data-number]",".numbers","active").init()},i=function(t){var e=r(t);o.appendChild(e)},r=function(t){var e=document.createElement("div");return e.classList.add("number-beast"),e.innerHTML="\n              <h3>".concat(t.specie,"</h3>\n              <span data-number>").concat(t.total,"</span>\n          "),e},o=document.querySelector(n),t.abrupt("return",c());case 7:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}var p,y,m,g,b,w,L,x,E=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.windowHalf=.6*window.innerHeight,this.animaScroll=this.animaScroll.bind(this)}return r(e,[{key:"animaScroll",value:function(){var t=this;this.sections.forEach((function(e){e.getBoundingClientRect().top-t.windowHalf<0?e.classList.add("active"):e.classList.contains("active")&&e.classList.remove("active")}))}},{key:"init",value:function(){this.animaScroll(),window.addEventListener("scroll",this.animaScroll)}}]),e}();function k(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){r.removeEventListener(t,i)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){r.addEventListener(t,i)}),0)})),t.setAttribute(o,""))}new o('.js-menu a[href^="#"]').init(),new i(".js-accordion dt").init(),new a(".js-tabmenu li",".js-tabcontent section").init(),new c('[data-modal="container"]','[data-modal="open"]','[data-modal="close"]').init(),new s("[data-tooltip]").init(),new E(".js-scroll").init(),function(){function t(t){var e=this;t.preventDefault(),this.classList.toggle("active"),k(this,["touch","click"],(function(){e.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((function(e){["touch","click"].forEach((function(n){e.addEventListener(n,t,{passive:!0})}))}))}(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["click","touch"];function r(){e.classList.add("active"),t.classList.add("active"),k(e,n,(function(){e.classList.remove("active"),t.classList.remove("active")}))}t&&n.forEach((function(e){return t.addEventListener(e,r,{passive:!0})}))}(),y=(p=document.querySelector("[data-week]")).dataset.week.split(", ").map(Number),m=p.dataset.hour.split(", ").map(Number),b=(g=new Date).getDay(),w=g.getHours(),L=-1!==y.indexOf(b),x=w>=m[0]&&w<m[1],L&&x&&p.classList.add("open"),function(t,e){v.apply(this,arguments)}("../../api-beasts.json",".numbers-grid"),function(t,e){var n=document.querySelector(".price-btc");function r(){return(r=l(f().mark((function e(){var r,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.json();case 5:o=e.sent,n.innerText=(100/o.BRL.sell).toFixed(5);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}try{!function(){r.apply(this,arguments)}()}catch(t){console.error(t.message)}}("https://blockchain.info/ticker")})()})();