!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{let e=document.getElementById("content");const t=document.createElement("div");t.setAttribute("id","menu"),t.innerHTML="Our restaurant serves the best spiciest & tastiest food!",e.appendChild(t)};var o=()=>{let e=document.getElementById("content");const t=document.createElement("h2");t.innerHTML="Menu Content";let n=document.createElement("img");n.setAttribute("src","https://cdn.pixabay.com/photo/2018/04/21/03/47/food-3337621_960_720.jpg"),e.appendChild(t),e.appendChild(n)};var c=()=>{const e=document.createElement("h2");e.innerHTML="Contact Us";let t=document.createElement("p"),n=document.createElement("p");t.innerHTML="Address       :221B Baker Street",n.innerHTML="Phone number : +555-555-5555",content.appendChild(e),content.appendChild(t),content.appendChild(n)};var i=()=>{document.getElementById("content").innerHTML=""};function d(){let e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","navbar");let n=document.createElement("div");n.innerHTML="Home",t.setAttribute("id","home");let r=document.createElement("div");r.innerHTML="Menu",t.setAttribute("id","menu");let o=document.createElement("div");o.innerHTML="Contact",t.setAttribute("id","contact"),t.appendChild(n),t.appendChild(r),t.appendChild(o),e.appendChild(t),n.addEventListener("click",u("homeNav")),r.addEventListener("click",u("menuNav")),o.addEventListener("click",u("contactNav"))}function u(e){return function(t){"homeNav"===e?(i(),d(),r()):"menuNav"===e?(i(),d(),o()):"contactNav"===e&&(i(),d(),c())}}d(),r()}]);