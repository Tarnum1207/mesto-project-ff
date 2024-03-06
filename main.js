/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new P(n||[]);return a(i,"_invoke",{value:C(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var y="suspendedStart",d="suspendedYield",v="executing",m="completed",g={};function w(){}function _(){}function b(){}var x={};f(x,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(A([])));E&&E!==o&&i.call(E,u)&&(x=E);var S=b.prototype=w.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,r){function n(o,a,c,u){var s=h(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function C(t,e,n){var o=y;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(t,e,n);if("normal"===s.type){if(o=n.done?m:d,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return _.prototype=b,a(S,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:_,configurable:!0}),_.displayName=f(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},k(j.prototype),f(j.prototype,s,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new j(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(S),f(S,l,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=A,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-7",headers:{authorization:"1bfc1549-f875-4034-870b-38d795fda2ac","Content-Type":"application/json"}};function i(){return fetch("".concat(o.baseUrl,"/users/me"),{headers:{authorization:o.headers.authorization,"Content-Type":o.headers["Content-Type"]}}).then((function(t){return t.json()})).then((function(t){return console.log(t),t})).catch((function(t){throw console.error("Ошибка при загрузке информации о пользователе:",t),t}))}function a(t){return c.apply(this,arguments)}function c(){return(c=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:{authorization:o.headers.authorization,"Content-Type":o.headers["Content-Type"]}});case 3:if((n=t.sent).ok){t.next=6;break}throw new Error("Ошибка при удалении карточки: ".concat(n.status));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Ошибка при удалении карточки:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function u(){return s.apply(this,arguments)}function s(){return(s=n(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o.baseUrl,"/cards"),{headers:{authorization:o.headers.authorization,"Content-Type":o.headers["Content-Type"]}});case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,console.log(n),t.abrupt("return",n);case 11:throw t.prev=11,t.t0=t.catch(0),console.error("Ошибка при загрузке карточек:",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function l(t){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(t._id),{method:"PUT",headers:{authorization:o.headers.authorization,"Content-Type":o.headers["Content-Type"]}})}function f(t){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(t._id),{method:"DELETE",headers:{authorization:o.headers.authorization,"Content-Type":o.headers["Content-Type"]}})}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function h(){h=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:C(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var y="suspendedStart",d="suspendedYield",v="executing",m="completed",g={};function w(){}function _(){}function b(){}var x={};s(x,a,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(A([])));E&&E!==r&&n.call(E,a)&&(x=E);var S=b.prototype=w.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==p(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,r,n){var o=y;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?m:d,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(p(e)+" is not iterable")}return _.prototype=b,o(S,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:_,configurable:!0}),_.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},k(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function y(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){y(i,n,o,a,c,"next",t)}function c(t){y(i,n,o,a,c,"throw",t)}a(void 0)}))}}var v=document.getElementById("card-template"),m=document.querySelector(".places__list");function g(t,e,r,n,o){var i,a,c=v.content.cloneNode(!0).querySelector(".places__item"),u=c.querySelector(".card__title"),s=c.querySelector(".card__image"),l=c.querySelector(".card__delete-button"),f=c.querySelector(".card__like-button");return u.textContent=t.name,s.src=t.link,s.alt=t.name,f.addEventListener("click",(function(){!function(t,e,r){var n=r.querySelector(".card__likes-counter");t.classList.contains("card__like-button_is-active")?function(t,e){return L.apply(this,arguments)}(e,n).then((function(){t.classList.remove("card__like-button_is-active")})).catch((function(t){console.error("Ошибка при снятии лайка:",t)})):function(t,e){return S.apply(this,arguments)}(e,n).then((function(){t.classList.add("card__like-button_is-active")})).catch((function(t){console.error("Ошибка при постановке лайка:",t)}))}(f,t,c),r(f)})),l.addEventListener("click",(function(){e(c)})),s.addEventListener("click",(function(){return n(t.link,t.name)})),null==t||null===(i=t.likes)||void 0===i||i.forEach((function(t){t._id===o&&x(f)})),w(l,null==t||null===(a=t.owner)||void 0===a?void 0:a._id,o,null==t?void 0:t._id),c}function w(t,e,r,n){e===r&&(t.style.display="block",t.addEventListener("click",d(h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(n);case 2:t.closest(".card").remove();case 3:case"end":return e.stop()}}),e)})))))}function _(){return b.apply(this,arguments)}function b(){return(b=d(h().mark((function t(){var e;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i();case 3:e=t.sent,u().then((function(t){m.innerHTML="",t.forEach((function(t){var r=g(t,j,x,M,e._id);m.appendChild(r)}))})),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),console.error("Ошибка при загрузке карточек:",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function x(t){t.classList.toggle("card__like-button_is-active")}function L(){return(L=d(h().mark((function t(e,r){var n,o;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(e);case 3:if((n=t.sent).ok){t.next=6;break}throw new Error("Ошибка при снятии лайка: ".concat(n.status));case 6:return t.next=8,n.json();case 8:o=t.sent,k(r,o),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error("Ошибка при снятии лайка:",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function E(){return(E=d(h().mark((function t(){var e,r,n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o.baseUrl,"/cards"),{method:"GET",headers:{authorization:o.headers.authorization,"Content-Type":o.headers["Content-Type"]}});case 3:if((e=t.sent).ok){t.next=6;break}throw new Error("Ошибка при получении данных карточки: ".concat(e.status));case 6:return t.next=8,e.json();case 8:r=t.sent,n=document.querySelectorAll(".card__likes-counter"),r.forEach((function(t,e){n[e].textContent=t.likes.length||0})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error("Ошибка при получении данных карточки",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function S(){return(S=d(h().mark((function t(e,r){var n,o;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l(e);case 3:if((n=t.sent).ok){t.next=6;break}throw new Error("Ошибка при постановке лайка");case 6:return t.next=8,n.json();case 8:o=t.sent,k(r,o),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error("Ошибка при постановке лайка:",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function k(t,e){t.textContent=e.likes.length}function j(t){t.remove()}function C(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",q)}function O(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",q)}function q(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");e&&O(e)}}_();function T(t,e,r){var n=document.querySelector(".".concat(e.id,"-error"));e.classList.add(t.inputErrorClass),n.classList.add(t.errorClass),n.textContent=r}function P(t,e){var r=document.querySelector(".".concat(e.id,"-error"));e.classList.remove(t.inputErrorClass),r.classList.remove(t.errorClass),r.textContent=""}var A,N,G=function(t,e){e.querySelectorAll(t.inputSelector).forEach((function(e){P(t,e)}))},z=function(t,e,r){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=n.some((function(t){return!t.validity.valid}));o||n.forEach((function(t){t.validity.valid||(o=!0)})),o?r.classList.add(t.inactiveButtonClass):r.classList.remove(t.inactiveButtonClass)};function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function F(){F=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new q(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="suspendedYield",y="executing",d="completed",v={};function m(){}function g(){}function w(){}var _={};s(_,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(T([])));x&&x!==r&&n.call(x,a)&&(_=x);var L=w.prototype=m.prototype=Object.create(_);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==I(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=p;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?d:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(I(e)+" is not iterable")}return g.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(S.prototype),s(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function U(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function B(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){U(i,n,o,a,c,"next",t)}function c(t){U(i,n,o,a,c,"throw",t)}a(void 0)}))}}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function M(t,e){var r=document.querySelector(".popup_type_image"),n=r.querySelector(".popup__image"),o=r.querySelector(".popup__caption");n.src=t,n.alt=e,o.textContent=e,C(r)}function Y(){return document.querySelector(".popup__input_type_avatar").value.trim()}function H(){return(H=B(F().mark((function t(){return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Y(),t.next=3,(e=Y(),fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:o.headers.authorization,"Content-Type":o.headers["Content-Type"]},body:JSON.stringify({avatar:e})})).then((function(t){if(!t.ok)throw new Error("Ошибка обновления аватара");console.log("Аватар успешно обновлен"),document.getElementById("userAvatar").style.backgroundImage="url('".concat(Y(),"')")})).catch((function(t){console.error("Ошибка при обновлении аватара:",t)})).finally((function(){J.textContent="Сохранить"}));case 3:case"end":return t.stop()}var e}),t)})))).apply(this,arguments)}Promise.all([i(),u()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];!function(){E.apply(this,arguments)}(),function(t){document.getElementById("userName").textContent=t.name,document.getElementById("userAbout").textContent=t.about,document.getElementById("userAvatar").style.backgroundImage="url('".concat(t.avatar,"')")}(o),function(t,e){var r=t._id;e.forEach((function(t,e){w(document.querySelectorAll(".card__delete-button")[e],t.owner._id,r,t._id)}))}(o,i)})).catch((function(t){console.error("Ошибка при загрузке данных:",t)})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".profile__edit-button"),e=document.querySelector(".profile__add-button"),r=document.querySelector(".profile__image"),n=document.querySelector(".popup_type_edit"),o=document.querySelector(".popup_type_new-card"),a=document.querySelectorAll(".popup__close"),c=document.querySelector(".popup_type_edit .popup__form"),u=document.querySelector(".popup_type_new-card .popup__form"),s=document.querySelector(".profile__title"),l=document.querySelector(".profile__description"),f=document.querySelector(".places__list");function p(){return(p=B(F().mark((function t(e){var r,n,a,c;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,i();case 3:r=t.sent,n=u.elements["place-name"].value,a=u.elements.link.value,c=g({name:n,link:a},j,x,M,r._id),f.prepend(c),O(o),u.reset();case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.addEventListener("submit",(function(t){t.preventDefault();var e=c.querySelector(".popup__input_type_name").value,r=c.querySelector(".popup__input_type_description").value;s.textContent=e,l.textContent=r,O(n),c.reset()})),u.addEventListener("submit",(function(t){return p.apply(this,arguments)})),t.addEventListener("click",(function(){var t=s.textContent,e=l.textContent,r=n.querySelector(".popup__input_type_name"),o=n.querySelector(".popup__input_type_description"),i=n.querySelector(".popup__form");r.value=t,o.value=e,C(n),G(Q,i);var a=i.querySelector(".popup__button");a.classList.contains("submit-disabled")&&a.classList.remove("submit-disabled")})),e.addEventListener("click",(function(){G(Q,u),C(o);var t=u.querySelector(".popup__button");t.classList.contains("submit-disabled")&&t.classList.remove("submit-disabled")})),r.addEventListener("click",(function(t){t.stopPropagation()})),a.forEach((function(t){t.addEventListener("click",(function(){O(t.closest(".popup"))}))}))})),A=document.querySelector(".popup_type_edit .popup__form"),N=A.querySelector(".popup__button"),A.addEventListener("submit",(function(t){t.preventDefault();var e=A.querySelector(".popup__input_type_name").value,r=A.querySelector(".popup__input_type_description").value;N.textContent="Сохранение...",function(t,e){return fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:o.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})})}(e,r).then((function(t){if(!t.ok)throw new Error("Ошибка: ".concat(t.status));return t.json()})).then((function(t){console.log("Данные профиля успешно обновлены:",t)})).catch((function(t){console.error("Ошибка при обновлении данных профиля:",t)})).finally((function(){N.textContent="Сохранить"}))})),function(){var t=document.querySelector(".popup_type_new-card .popup__form"),e=t.querySelector(".popup__button");t.addEventListener("submit",(function(r){r.preventDefault();var n=t.querySelector(".popup__input_type_card-name").value,i=t.querySelector(".popup__input_type_url").value;e.textContent="Сохранение...",function(t,e){return fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:{authorization:o.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})})}(n,i).then((function(t){if(!t.ok)throw new Error("Ошибка: ".concat(t.status));return t.json()})).then((function(t){console.log("Новая карточка успешно создана:",t)})).catch((function(t){console.error("Ошибка при создании новой карточки:",t)})).finally((function(){e.textContent="Сохранить",_()}))}))}(),document.addEventListener("click",(function(t){t.target.classList.contains("popup")&&O(t.target)}));var J=document.querySelector(".popup_type_avatar .popup__button");function $(t,e){t.preventDefault(),J.textContent="Сохранение...",function(){H.apply(this,arguments)}(),O(e)}J.addEventListener("click",(function(t){$(t,K)})),document.forms["edit-avatar"].addEventListener("submit",(function(t){$(t,popup)}));var V=document.getElementById("userAvatar"),K=document.querySelector(".popup_type_avatar");V.addEventListener("click",(function(){C(K)}));var Q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"submit-disabled",inputErrorClass:"input_type-invalid",errorClass:"input_span"};!function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(t,e){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);r.forEach((function(r){r.addEventListener("input",(function(){!function(t,e){var r;if(e.hasAttribute("data-validate-url"))return r=e.value.trim(),void(/^(ftp|http|https):\/\/[^ "]+$/.test(r)?P(t,e):T(t,e,e.validationMessage));""==e.value.trim()?T(t,e,e.validationMessage):/^[a-zа-я\s\-]+$/i.test(e.value)?(e.setCustomValidity(""),P(t,e)):(e.setCustomValidity("Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы"),T(t,e,e.validationMessage)),e.validity.valid?P(t,e):T(t,e,e.validationMessage)}(t,r),z(t,e,n)}))}))}(t,e)}))}(Q)})();