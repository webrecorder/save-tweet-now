/*! main.js is part of Webrecorder project. Copyright (C) 2020-2021, Webrecorder Software. Licensed under the Affero General Public License v3. */(()=>{var __webpack_modules__={9824:(t,e)=>{"use strict";const r="undefined"!=typeof BigUint64Array,n=Symbol(),o=1024;function i(t,e){const r=new Uint32Array(t),n=new Uint16Array(t);var i=r[e+-4>>>2]>>>1,s=e>>>1;if(i<=o)return String.fromCharCode.apply(String,n.subarray(s,s+i));const a=[];do{const t=n[s+o-1],e=t>=55296&&t<56320?1023:o;a.push(String.fromCharCode.apply(String,n.subarray(s,s+=e))),i-=e}while(i>o);return a.join("")+String.fromCharCode.apply(String,n.subarray(s,s+i))}function s(t){const e={};function r(t,e){return t?i(t.buffer,e):"<yet unknown>"}const n=t.env=t.env||{};return n.abort=n.abort||function(t,o,i,s){const a=e.memory||n.memory;throw Error("abort: "+r(a,t)+" at "+r(a,o)+":"+i+":"+s)},n.trace=n.trace||function(t,o){const i=e.memory||n.memory;console.log("trace: "+r(i,t)+(o?" ":"")+Array.prototype.slice.call(arguments,2,2+o).join(", "))},t.Math=t.Math||Math,t.Date=t.Date||Date,e}function a(t,e){const n=e.exports,o=n.memory,s=n.table,a=n.__alloc,l=n.__retain,c=n.__rtti_base||-1;function h(t){const e=new Uint32Array(o.buffer);if((t>>>=0)>=e[c>>>2])throw Error("invalid id: "+t);return e[(c+4>>>2)+2*t]}function d(t){const e=new Uint32Array(o.buffer);if((t>>>=0)>=e[c>>>2])throw Error("invalid id: "+t);return e[(c+4>>>2)+2*t+1]}function p(t){return 31-Math.clz32(t>>>5&31)}function f(t,e,r){const n=o.buffer;if(r)switch(t){case 2:return new Float32Array(n);case 3:return new Float64Array(n)}else switch(t){case 0:return new(e?Int8Array:Uint8Array)(n);case 1:return new(e?Int16Array:Uint16Array)(n);case 2:return new(e?Int32Array:Uint32Array)(n);case 3:return new(e?BigInt64Array:BigUint64Array)(n)}throw Error("unsupported align: "+t)}function b(t){const e=new Uint32Array(o.buffer),r=e[t+-8>>>2],n=h(r);if(!(1&n))throw Error("not an array: "+r);const i=p(n);var s=e[t+4>>>2];const a=2&n?e[t+12>>>2]:e[s+-4>>>2]>>>i;return f(i,1024&n,2048&n).subarray(s>>>=i,s+a)}function g(t,e,r){return new t(y(t,e,r))}function y(t,e,r){const n=o.buffer,i=new Uint32Array(n),s=i[r+4>>>2];return new t(n,s,i[s+-4>>>2]>>>e)}return t.__allocString=function(t){const e=t.length,r=a(e<<1,1),n=new Uint16Array(o.buffer);for(var i=0,s=r>>>1;i<e;++i)n[s+i]=t.charCodeAt(i);return r},t.__getString=function(t){const e=o.buffer;if(1!==new Uint32Array(e)[t+-8>>>2])throw Error("not a string: "+t);return i(e,t)},t.__allocArray=function(t,e){const r=h(t);if(!(3&r))throw Error("not an array: "+t+" @ "+r);const n=p(r),i=e.length,s=a(i<<n,0),c=a(2&r?16:12,t),u=new Uint32Array(o.buffer);u[c+0>>>2]=l(s),u[c+4>>>2]=s,u[c+8>>>2]=i<<n,2&r&&(u[c+12>>>2]=i);const d=f(n,1024&r,2048&r);if(8192&r)for(let t=0;t<i;++t)d[(s>>>n)+t]=l(e[t]);else d.set(e,s>>>n);return c},t.__getArrayView=b,t.__getArray=function(t){const e=b(t),r=e.length,n=new Array(r);for(let t=0;t<r;t++)n[t]=e[t];return n},t.__getArrayBuffer=function(t){const e=o.buffer,r=new Uint32Array(e)[t+-4>>>2];return e.slice(t,t+r)},t.__getInt8Array=g.bind(null,Int8Array,0),t.__getInt8ArrayView=y.bind(null,Int8Array,0),t.__getUint8Array=g.bind(null,Uint8Array,0),t.__getUint8ArrayView=y.bind(null,Uint8Array,0),t.__getUint8ClampedArray=g.bind(null,Uint8ClampedArray,0),t.__getUint8ClampedArrayView=y.bind(null,Uint8ClampedArray,0),t.__getInt16Array=g.bind(null,Int16Array,1),t.__getInt16ArrayView=y.bind(null,Int16Array,1),t.__getUint16Array=g.bind(null,Uint16Array,1),t.__getUint16ArrayView=y.bind(null,Uint16Array,1),t.__getInt32Array=g.bind(null,Int32Array,2),t.__getInt32ArrayView=y.bind(null,Int32Array,2),t.__getUint32Array=g.bind(null,Uint32Array,2),t.__getUint32ArrayView=y.bind(null,Uint32Array,2),r&&(t.__getInt64Array=g.bind(null,BigInt64Array,3),t.__getInt64ArrayView=y.bind(null,BigInt64Array,3),t.__getUint64Array=g.bind(null,BigUint64Array,3),t.__getUint64ArrayView=y.bind(null,BigUint64Array,3)),t.__getFloat32Array=g.bind(null,Float32Array,2),t.__getFloat32ArrayView=y.bind(null,Float32Array,2),t.__getFloat64Array=g.bind(null,Float64Array,3),t.__getFloat64ArrayView=y.bind(null,Float64Array,3),t.__instanceof=function(t,e){const r=new Uint32Array(o.buffer);var n=r[t+-8>>>2];if(n<=r[c>>>2])do{if(n==e)return!0}while(n=d(n));return!1},t.memory=t.memory||o,t.table=t.table||s,u(n,t)}function l(t){return"undefined"!=typeof Response&&t instanceof Response}async function c(t,e){return l(t=await t)?h(t,e):a(s(e||(e={})),await WebAssembly.instantiate(t instanceof WebAssembly.Module?t:await WebAssembly.compile(t),e))}async function h(t,e){return WebAssembly.instantiateStreaming?a(s(e||(e={})),(await WebAssembly.instantiateStreaming(t,e)).instance):c(l(t=await t)?t.arrayBuffer():t,e)}function u(t,e){var r=e?Object.create(e):{},o=t.__argumentsLength?function(e){t.__argumentsLength.value=e}:t.__setArgumentsLength||t.__setargc||function(){};for(let e in t){if(!Object.prototype.hasOwnProperty.call(t,e))continue;const i=t[e];let s=e.split("."),a=r;for(;s.length>1;){let t=s.shift();Object.prototype.hasOwnProperty.call(a,t)||(a[t]={}),a=a[t]}let l=s[0],c=l.indexOf("#");if(c>=0){let r=l.substring(0,c),s=a[r];if(void 0===s||!s.prototype){let t=function(...e){return t.wrap(t.prototype.constructor(0,...e))};t.prototype={valueOf:function(){return this[n]}},t.wrap=function(e){return Object.create(t.prototype,{[n]:{value:e,writable:!1}})},s&&Object.getOwnPropertyNames(s).forEach((e=>Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e)))),a[r]=t}if(l=l.substring(c+1),a=a[r].prototype,/^(get|set):/.test(l)){if(!Object.prototype.hasOwnProperty.call(a,l=l.substring(4))){let r=t[e.replace("set:","get:")],o=t[e.replace("get:","set:")];Object.defineProperty(a,l,{get:function(){return r(this[n])},set:function(t){o(this[n],t)},enumerable:!0})}}else"constructor"===l?(a[l]=(...t)=>(o(t.length),i(...t))).original=i:(a[l]=function(...t){return o(t.length),i(this[n],...t)}).original=i}else/^(get|set):/.test(l)?Object.prototype.hasOwnProperty.call(a,l=l.substring(4))||Object.defineProperty(a,l,{get:t[e.replace("set:","get:")],set:t[e.replace("get:","set:")],enumerable:!0}):"function"==typeof i&&i!==o?(a[l]=(...t)=>(o(t.length),i(...t))).original=i:a[l]=i}return r}e.instantiate=c,e.instantiateSync=function(t,e){return a(s(e||(e={})),new WebAssembly.Instance(t instanceof WebAssembly.Module?t:new WebAssembly.Module(t),e))},e.instantiateStreaming=h,e.demangle=u},4537:t=>{"use strict";t.exports=function(t,e){var r=new Array(arguments.length-1),n=0,o=2,i=!0;for(;o<arguments.length;)r[n++]=arguments[o++];return new Promise((function(o,s){r[n]=function(t){if(i)if(i=!1,t)s(t);else{for(var e=new Array(arguments.length-1),r=0;r<e.length;)e[r++]=arguments[r];o.apply(null,e)}};try{t.apply(e||null,r)}catch(t){i&&(i=!1,s(t))}}))}},7419:(t,e)=>{"use strict";var r=e;r.length=function(t){var e=t.length;if(!e)return 0;for(var r=0;--e%4>1&&"="===t.charAt(e);)++r;return Math.ceil(3*t.length)/4-r};for(var n=new Array(64),o=new Array(123),i=0;i<64;)o[n[i]=i<26?i+65:i<52?i+71:i<62?i-4:i-59|43]=i++;r.encode=function(t,e,r){for(var o,i=null,s=[],a=0,l=0;e<r;){var c=t[e++];switch(l){case 0:s[a++]=n[c>>2],o=(3&c)<<4,l=1;break;case 1:s[a++]=n[o|c>>4],o=(15&c)<<2,l=2;break;case 2:s[a++]=n[o|c>>6],s[a++]=n[63&c],l=0}a>8191&&((i||(i=[])).push(String.fromCharCode.apply(String,s)),a=0)}return l&&(s[a++]=n[o],s[a++]=61,1===l&&(s[a++]=61)),i?(a&&i.push(String.fromCharCode.apply(String,s.slice(0,a))),i.join("")):String.fromCharCode.apply(String,s.slice(0,a))};var s="invalid encoding";r.decode=function(t,e,r){for(var n,i=r,a=0,l=0;l<t.length;){var c=t.charCodeAt(l++);if(61===c&&a>1)break;if(void 0===(c=o[c]))throw Error(s);switch(a){case 0:n=c,a=1;break;case 1:e[r++]=n<<2|(48&c)>>4,n=c,a=2;break;case 2:e[r++]=(15&n)<<4|(60&c)>>2,n=c,a=3;break;case 3:e[r++]=(3&n)<<6|c,a=0}}if(1===a)throw Error(s);return r-i},r.test=function(t){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)}},9211:t=>{"use strict";function e(){this._listeners={}}t.exports=e,e.prototype.on=function(t,e,r){return(this._listeners[t]||(this._listeners[t]=[])).push({fn:e,ctx:r||this}),this},e.prototype.off=function(t,e){if(void 0===t)this._listeners={};else if(void 0===e)this._listeners[t]=[];else for(var r=this._listeners[t],n=0;n<r.length;)r[n].fn===e?r.splice(n,1):++n;return this},e.prototype.emit=function(t){var e=this._listeners[t];if(e){for(var r=[],n=1;n<arguments.length;)r.push(arguments[n++]);for(n=0;n<e.length;)e[n].fn.apply(e[n++].ctx,r)}return this}},945:t=>{"use strict";function e(t){return"undefined"!=typeof Float32Array?function(){var e=new Float32Array([-0]),r=new Uint8Array(e.buffer),n=128===r[3];function o(t,n,o){e[0]=t,n[o]=r[0],n[o+1]=r[1],n[o+2]=r[2],n[o+3]=r[3]}function i(t,n,o){e[0]=t,n[o]=r[3],n[o+1]=r[2],n[o+2]=r[1],n[o+3]=r[0]}function s(t,n){return r[0]=t[n],r[1]=t[n+1],r[2]=t[n+2],r[3]=t[n+3],e[0]}function a(t,n){return r[3]=t[n],r[2]=t[n+1],r[1]=t[n+2],r[0]=t[n+3],e[0]}t.writeFloatLE=n?o:i,t.writeFloatBE=n?i:o,t.readFloatLE=n?s:a,t.readFloatBE=n?a:s}():function(){function e(t,e,r,n){var o=e<0?1:0;if(o&&(e=-e),0===e)t(1/e>0?0:2147483648,r,n);else if(isNaN(e))t(2143289344,r,n);else if(e>34028234663852886e22)t((o<<31|2139095040)>>>0,r,n);else if(e<11754943508222875e-54)t((o<<31|Math.round(e/1401298464324817e-60))>>>0,r,n);else{var i=Math.floor(Math.log(e)/Math.LN2);t((o<<31|i+127<<23|8388607&Math.round(e*Math.pow(2,-i)*8388608))>>>0,r,n)}}function s(t,e,r){var n=t(e,r),o=2*(n>>31)+1,i=n>>>23&255,s=8388607&n;return 255===i?s?NaN:o*(1/0):0===i?1401298464324817e-60*o*s:o*Math.pow(2,i-150)*(s+8388608)}t.writeFloatLE=e.bind(null,r),t.writeFloatBE=e.bind(null,n),t.readFloatLE=s.bind(null,o),t.readFloatBE=s.bind(null,i)}(),"undefined"!=typeof Float64Array?function(){var e=new Float64Array([-0]),r=new Uint8Array(e.buffer),n=128===r[7];function o(t,n,o){e[0]=t,n[o]=r[0],n[o+1]=r[1],n[o+2]=r[2],n[o+3]=r[3],n[o+4]=r[4],n[o+5]=r[5],n[o+6]=r[6],n[o+7]=r[7]}function i(t,n,o){e[0]=t,n[o]=r[7],n[o+1]=r[6],n[o+2]=r[5],n[o+3]=r[4],n[o+4]=r[3],n[o+5]=r[2],n[o+6]=r[1],n[o+7]=r[0]}function s(t,n){return r[0]=t[n],r[1]=t[n+1],r[2]=t[n+2],r[3]=t[n+3],r[4]=t[n+4],r[5]=t[n+5],r[6]=t[n+6],r[7]=t[n+7],e[0]}function a(t,n){return r[7]=t[n],r[6]=t[n+1],r[5]=t[n+2],r[4]=t[n+3],r[3]=t[n+4],r[2]=t[n+5],r[1]=t[n+6],r[0]=t[n+7],e[0]}t.writeDoubleLE=n?o:i,t.writeDoubleBE=n?i:o,t.readDoubleLE=n?s:a,t.readDoubleBE=n?a:s}():function(){function e(t,e,r,n,o,i){var s=n<0?1:0;if(s&&(n=-n),0===n)t(0,o,i+e),t(1/n>0?0:2147483648,o,i+r);else if(isNaN(n))t(0,o,i+e),t(2146959360,o,i+r);else if(n>17976931348623157e292)t(0,o,i+e),t((s<<31|2146435072)>>>0,o,i+r);else{var a;if(n<22250738585072014e-324)t((a=n/5e-324)>>>0,o,i+e),t((s<<31|a/4294967296)>>>0,o,i+r);else{var l=Math.floor(Math.log(n)/Math.LN2);1024===l&&(l=1023),t(4503599627370496*(a=n*Math.pow(2,-l))>>>0,o,i+e),t((s<<31|l+1023<<20|1048576*a&1048575)>>>0,o,i+r)}}}function s(t,e,r,n,o){var i=t(n,o+e),s=t(n,o+r),a=2*(s>>31)+1,l=s>>>20&2047,c=4294967296*(1048575&s)+i;return 2047===l?c?NaN:a*(1/0):0===l?5e-324*a*c:a*Math.pow(2,l-1075)*(c+4503599627370496)}t.writeDoubleLE=e.bind(null,r,0,4),t.writeDoubleBE=e.bind(null,n,4,0),t.readDoubleLE=s.bind(null,o,0,4),t.readDoubleBE=s.bind(null,i,4,0)}(),t}function r(t,e,r){e[r]=255&t,e[r+1]=t>>>8&255,e[r+2]=t>>>16&255,e[r+3]=t>>>24}function n(t,e,r){e[r]=t>>>24,e[r+1]=t>>>16&255,e[r+2]=t>>>8&255,e[r+3]=255&t}function o(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0}function i(t,e){return(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}t.exports=e(e)},7199:module=>{"use strict";function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(t){}return null}module.exports=inquire},6662:t=>{"use strict";t.exports=function(t,e,r){var n=r||8192,o=n>>>1,i=null,s=n;return function(r){if(r<1||r>o)return t(r);s+r>n&&(i=t(n),s=0);var a=e.call(i,s,s+=r);return 7&s&&(s=1+(7|s)),a}}},4997:(t,e)=>{"use strict";var r=e;r.length=function(t){for(var e=0,r=0,n=0;n<t.length;++n)(r=t.charCodeAt(n))<128?e+=1:r<2048?e+=2:55296==(64512&r)&&56320==(64512&t.charCodeAt(n+1))?(++n,e+=4):e+=3;return e},r.read=function(t,e,r){if(r-e<1)return"";for(var n,o=null,i=[],s=0;e<r;)(n=t[e++])<128?i[s++]=n:n>191&&n<224?i[s++]=(31&n)<<6|63&t[e++]:n>239&&n<365?(n=((7&n)<<18|(63&t[e++])<<12|(63&t[e++])<<6|63&t[e++])-65536,i[s++]=55296+(n>>10),i[s++]=56320+(1023&n)):i[s++]=(15&n)<<12|(63&t[e++])<<6|63&t[e++],s>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,i)),s=0);return o?(s&&o.push(String.fromCharCode.apply(String,i.slice(0,s))),o.join("")):String.fromCharCode.apply(String,i.slice(0,s))},r.write=function(t,e,r){for(var n,o,i=r,s=0;s<t.length;++s)(n=t.charCodeAt(s))<128?e[r++]=n:n<2048?(e[r++]=n>>6|192,e[r++]=63&n|128):55296==(64512&n)&&56320==(64512&(o=t.charCodeAt(s+1)))?(n=65536+((1023&n)<<10)+(1023&o),++s,e[r++]=n>>18|240,e[r++]=n>>12&63|128,e[r++]=n>>6&63|128,e[r++]=63&n|128):(e[r++]=n>>12|224,e[r++]=n>>6&63|128,e[r++]=63&n|128);return r-i}},9742:(t,e)=>{"use strict";e.byteLength=function(t){var e=l(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,i=l(t),s=i[0],a=i[1],c=new o(function(t,e,r){return 3*(e+r)/4-r}(0,s,a)),h=0,u=a>0?s-4:s;for(r=0;r<u;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],c[h++]=e>>16&255,c[h++]=e>>8&255,c[h++]=255&e;2===a&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,c[h++]=255&e);1===a&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,c[h++]=e>>8&255,c[h++]=255&e);return c},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],s=16383,a=0,l=n-o;a<l;a+=s)i.push(c(t,a,a+s>l?l:a+s));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=i.length;s<a;++s)r[s]=i[s],n[i.charCodeAt(s)]=s;function l(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function c(t,e,n){for(var o,i,s=[],a=e;a<n;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},9668:(t,e,r)=>{"use strict";const{Buffer:n}=r(8764),o=Symbol.for("BufferList");function i(t){if(!(this instanceof i))return new i(t);i._init.call(this,t)}i._init=function(t){Object.defineProperty(this,o,{value:!0}),this._bufs=[],this.length=0,t&&this.append(t)},i.prototype._new=function(t){return new i(t)},i.prototype._offset=function(t){if(0===t)return[0,0];let e=0;for(let r=0;r<this._bufs.length;r++){const n=e+this._bufs[r].length;if(t<n||r===this._bufs.length-1)return[r,t-e];e=n}},i.prototype._reverseOffset=function(t){const e=t[0];let r=t[1];for(let t=0;t<e;t++)r+=this._bufs[t].length;return r},i.prototype.get=function(t){if(t>this.length||t<0)return;const e=this._offset(t);return this._bufs[e[0]][e[1]]},i.prototype.slice=function(t,e){return"number"==typeof t&&t<0&&(t+=this.length),"number"==typeof e&&e<0&&(e+=this.length),this.copy(null,0,t,e)},i.prototype.copy=function(t,e,r,o){if(("number"!=typeof r||r<0)&&(r=0),("number"!=typeof o||o>this.length)&&(o=this.length),r>=this.length)return t||n.alloc(0);if(o<=0)return t||n.alloc(0);const i=!!t,s=this._offset(r),a=o-r;let l=a,c=i&&e||0,h=s[1];if(0===r&&o===this.length){if(!i)return 1===this._bufs.length?this._bufs[0]:n.concat(this._bufs,this.length);for(let e=0;e<this._bufs.length;e++)this._bufs[e].copy(t,c),c+=this._bufs[e].length;return t}if(l<=this._bufs[s[0]].length-h)return i?this._bufs[s[0]].copy(t,e,h,h+l):this._bufs[s[0]].slice(h,h+l);i||(t=n.allocUnsafe(a));for(let e=s[0];e<this._bufs.length;e++){const r=this._bufs[e].length-h;if(!(l>r)){this._bufs[e].copy(t,c,h,h+l),c+=r;break}this._bufs[e].copy(t,c,h),c+=r,l-=r,h&&(h=0)}return t.length>c?t.slice(0,c):t},i.prototype.shallowSlice=function(t,e){if(t=t||0,e="number"!=typeof e?this.length:e,t<0&&(t+=this.length),e<0&&(e+=this.length),t===e)return this._new();const r=this._offset(t),n=this._offset(e),o=this._bufs.slice(r[0],n[0]+1);return 0===n[1]?o.pop():o[o.length-1]=o[o.length-1].slice(0,n[1]),0!==r[1]&&(o[0]=o[0].slice(r[1])),this._new(o)},i.prototype.toString=function(t,e,r){return this.slice(e,r).toString(t)},i.prototype.consume=function(t){if(t=Math.trunc(t),Number.isNaN(t)||t<=0)return this;for(;this._bufs.length;){if(!(t>=this._bufs[0].length)){this._bufs[0]=this._bufs[0].slice(t),this.length-=t;break}t-=this._bufs[0].length,this.length-=this._bufs[0].length,this._bufs.shift()}return this},i.prototype.duplicate=function(){const t=this._new();for(let e=0;e<this._bufs.length;e++)t.append(this._bufs[e]);return t},i.prototype.append=function(t){if(null==t)return this;if(t.buffer)this._appendBuffer(n.from(t.buffer,t.byteOffset,t.byteLength));else if(Array.isArray(t))for(let e=0;e<t.length;e++)this.append(t[e]);else if(this._isBufferList(t))for(let e=0;e<t._bufs.length;e++)this.append(t._bufs[e]);else"number"==typeof t&&(t=t.toString()),this._appendBuffer(n.from(t));return this},i.prototype._appendBuffer=function(t){this._bufs.push(t),this.length+=t.length},i.prototype.indexOf=function(t,e,r){if(void 0===r&&"string"==typeof e&&(r=e,e=void 0),"function"==typeof t||Array.isArray(t))throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');if("number"==typeof t?t=n.from([t]):"string"==typeof t?t=n.from(t,r):this._isBufferList(t)?t=t.slice():Array.isArray(t.buffer)?t=n.from(t.buffer,t.byteOffset,t.byteLength):n.isBuffer(t)||(t=n.from(t)),e=Number(e||0),isNaN(e)&&(e=0),e<0&&(e=this.length+e),e<0&&(e=0),0===t.length)return e>this.length?this.length:e;const o=this._offset(e);let i=o[0],s=o[1];for(;i<this._bufs.length;i++){const e=this._bufs[i];for(;s<e.length;){if(e.length-s>=t.length){const r=e.indexOf(t,s);if(-1!==r)return this._reverseOffset([i,r]);s=e.length-t.length+1}else{const e=this._reverseOffset([i,s]);if(this._match(e,t))return e;s++}}s=0}return-1},i.prototype._match=function(t,e){if(this.length-t<e.length)return!1;for(let r=0;r<e.length;r++)if(this.get(t+r)!==e[r])return!1;return!0},function(){const t={readDoubleBE:8,readDoubleLE:8,readFloatBE:4,readFloatLE:4,readInt32BE:4,readInt32LE:4,readUInt32BE:4,readUInt32LE:4,readInt16BE:2,readInt16LE:2,readUInt16BE:2,readUInt16LE:2,readInt8:1,readUInt8:1,readIntBE:null,readIntLE:null,readUIntBE:null,readUIntLE:null};for(const e in t)!function(e){i.prototype[e]=null===t[e]?function(t,r){return this.slice(t,t+r)[e](0,r)}:function(r=0){return this.slice(r,r+t[e])[e](0)}}(e)}(),i.prototype._isBufferList=function(t){return t instanceof i||i.isBufferList(t)},i.isBufferList=function(t){return null!=t&&t[o]},t.exports=i},3294:(t,e,r)=>{"use strict";const n=r(6154);t.exports=function(t){return"function"==typeof t.stream?n(t.stream()):n(new Response(t).body)}},6154:t=>{"use strict";t.exports=async function*(t,e={}){const r=t.getReader();try{for(;;){const t=await r.read();if(t.done)return;yield t.value}}finally{!0!==e.preventCancel&&r.cancel(),r.releaseLock()}}},8764:(t,e,r)=>{"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */const n=r(9742),o=r(645),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=l,e.SlowBuffer=function(t){+t!=t&&(t=0);return l.alloc(+t)},e.INSPECT_MAX_BYTES=50;const s=2147483647;function a(t){if(t>s)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,l.prototype),e}function l(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return u(t)}return c(t,e,r)}function c(t,e,r){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!l.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|b(t,e);let n=a(r);const o=n.write(t,e);o!==r&&(n=n.slice(0,o));return n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(J(t,Uint8Array)){const e=new Uint8Array(t);return p(e.buffer,e.byteOffset,e.byteLength)}return d(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(J(t,ArrayBuffer)||t&&J(t.buffer,ArrayBuffer))return p(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(J(t,SharedArrayBuffer)||t&&J(t.buffer,SharedArrayBuffer)))return p(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return l.from(n,e,r);const o=function(t){if(l.isBuffer(t)){const e=0|f(t.length),r=a(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!=typeof t.length||X(t.length)?a(0):d(t);if("Buffer"===t.type&&Array.isArray(t.data))return d(t.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return l.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function u(t){return h(t),a(t<0?0:0|f(t))}function d(t){const e=t.length<0?0:0|f(t.length),r=a(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,l.prototype),n}function f(t){if(t>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|t}function b(t,e){if(l.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||J(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return W(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return K(t).length;default:if(o)return n?-1:W(t).length;e=(""+e).toLowerCase(),o=!0}}function g(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,e,r);case"utf8":case"utf-8":return C(this,e,r);case"ascii":return $(this,e,r);case"latin1":case"binary":return T(this,e,r);case"base64":return E(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function y(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function m(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),X(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=l.from(e,n)),l.isBuffer(e))return 0===e.length?-1:w(t,e,r,n,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):w(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function w(t,e,r,n,o){let i,s=1,a=t.length,l=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,l/=2,r/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){let n=-1;for(i=r;i<a;i++)if(c(t,i)===c(e,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===l)return n*s}else-1!==n&&(i-=i-n),n=-1}else for(r+l>a&&(r=a-l),i=r;i>=0;i--){let r=!0;for(let n=0;n<l;n++)if(c(t,i+n)!==c(e,n)){r=!1;break}if(r)return i}return-1}function v(t,e,r,n){r=Number(r)||0;const o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;const i=e.length;let s;for(n>i/2&&(n=i/2),s=0;s<n;++s){const n=parseInt(e.substr(2*s,2),16);if(X(n))return s;t[r+s]=n}return s}function _(t,e,r,n){return G(W(e,t.length-r),t,r,n)}function x(t,e,r,n){return G(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function k(t,e,r,n){return G(K(e),t,r,n)}function A(t,e,r,n){return G(function(t,e){let r,n,o;const i=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function E(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function C(t,e,r){r=Math.min(t.length,r);const n=[];let o=e;for(;o<r;){const e=t[o];let i=null,s=e>239?4:e>223?3:e>191?2:1;if(o+s<=r){let r,n,a,l;switch(s){case 1:e<128&&(i=e);break;case 2:r=t[o+1],128==(192&r)&&(l=(31&e)<<6|63&r,l>127&&(i=l));break;case 3:r=t[o+1],n=t[o+2],128==(192&r)&&128==(192&n)&&(l=(15&e)<<12|(63&r)<<6|63&n,l>2047&&(l<55296||l>57343)&&(i=l));break;case 4:r=t[o+1],n=t[o+2],a=t[o+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(l=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&a,l>65535&&l<1114112&&(i=l))}}null===i?(i=65533,s=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=s}return function(t){const e=t.length;if(e<=S)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=S));return r}(n)}e.kMaxLength=s,l.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(t,e,r){return c(t,e,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(t,e,r){return function(t,e,r){return h(t),t<=0?a(t):void 0!==e?"string"==typeof r?a(t).fill(e,r):a(t).fill(e):a(t)}(t,e,r)},l.allocUnsafe=function(t){return u(t)},l.allocUnsafeSlow=function(t){return u(t)},l.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==l.prototype},l.compare=function(t,e){if(J(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),J(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(t)||!l.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},l.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return l.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=l.allocUnsafe(e);let o=0;for(r=0;r<t.length;++r){let e=t[r];if(J(e,Uint8Array))o+e.length>n.length?(l.isBuffer(e)||(e=l.from(e)),e.copy(n,o)):Uint8Array.prototype.set.call(n,e,o);else{if(!l.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,o)}o+=e.length}return n},l.byteLength=b,l.prototype._isBuffer=!0,l.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)y(this,e,e+1);return this},l.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},l.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},l.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?C(this,0,t):g.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(t){if(!l.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===l.compare(this,t)},l.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},i&&(l.prototype[i]=l.prototype.inspect),l.prototype.compare=function(t,e,r,n,o){if(J(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;let i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0);const a=Math.min(i,s),c=this.slice(n,o),h=t.slice(e,r);for(let t=0;t<a;++t)if(c[t]!==h[t]){i=c[t],s=h[t];break}return i<s?-1:s<i?1:0},l.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},l.prototype.indexOf=function(t,e,r){return m(this,t,e,r,!0)},l.prototype.lastIndexOf=function(t,e,r){return m(this,t,e,r,!1)},l.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return v(this,t,e,r);case"utf8":case"utf-8":return _(this,t,e,r);case"ascii":case"latin1":case"binary":return x(this,t,e,r);case"base64":return k(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const S=4096;function $(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function T(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function I(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=e;n<r;++n)o+=Z[t[n]];return o}function B(t,e,r){const n=t.slice(e,r);let o="";for(let t=0;t<n.length-1;t+=2)o+=String.fromCharCode(n[t]+256*n[t+1]);return o}function z(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function U(t,e,r,n,o,i){if(!l.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function O(t,e,r,n,o){F(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function D(t,e,r,n,o){F(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function L(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function N(t,e,r,n,i){return e=+e,r>>>=0,i||L(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function R(t,e,r,n,i){return e=+e,r>>>=0,i||L(t,0,r,8),o.write(t,e,r,n,52,8),r+8}l.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUintLE=l.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||z(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||z(t,e,this.length);let n=this[t+--e],o=1;for(;e>0&&(o*=256);)n+=this[t+--e]*o;return n},l.prototype.readUint8=l.prototype.readUInt8=function(t,e){return t>>>=0,e||z(t,1,this.length),this[t]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(t,e){return t>>>=0,e||z(t,2,this.length),this[t]|this[t+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(t,e){return t>>>=0,e||z(t,2,this.length),this[t]<<8|this[t+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(t,e){return t>>>=0,e||z(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(t,e){return t>>>=0,e||z(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},l.prototype.readBigUInt64LE=Y((function(t){H(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,o=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))})),l.prototype.readBigUInt64BE=Y((function(t){H(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],o=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)})),l.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||z(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},l.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||z(t,e,this.length);let n=e,o=1,i=this[t+--n];for(;n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},l.prototype.readInt8=function(t,e){return t>>>=0,e||z(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},l.prototype.readInt16LE=function(t,e){t>>>=0,e||z(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(t,e){t>>>=0,e||z(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(t,e){return t>>>=0,e||z(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},l.prototype.readInt32BE=function(t,e){return t>>>=0,e||z(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},l.prototype.readBigInt64LE=Y((function(t){H(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),l.prototype.readBigInt64BE=Y((function(t){H(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),l.prototype.readFloatLE=function(t,e){return t>>>=0,e||z(t,4,this.length),o.read(this,t,!0,23,4)},l.prototype.readFloatBE=function(t,e){return t>>>=0,e||z(t,4,this.length),o.read(this,t,!1,23,4)},l.prototype.readDoubleLE=function(t,e){return t>>>=0,e||z(t,8,this.length),o.read(this,t,!0,52,8)},l.prototype.readDoubleBE=function(t,e){return t>>>=0,e||z(t,8,this.length),o.read(this,t,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){U(this,t,e,r,Math.pow(2,8*r)-1,0)}let o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){U(this,t,e,r,Math.pow(2,8*r)-1,0)}let o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,1,255,0),this[e]=255&t,e+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},l.prototype.writeBigUInt64LE=Y((function(t,e=0){return O(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeBigUInt64BE=Y((function(t,e=0){return D(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);U(this,t,e,r,n-1,-n)}let o=0,i=1,s=0;for(this[e]=255&t;++o<r&&(i*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+r},l.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);U(this,t,e,r,n-1,-n)}let o=r-1,i=1,s=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+r},l.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},l.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},l.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},l.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},l.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},l.prototype.writeBigInt64LE=Y((function(t,e=0){return O(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeBigInt64BE=Y((function(t,e=0){return D(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeFloatLE=function(t,e,r){return N(this,t,e,!0,r)},l.prototype.writeFloatBE=function(t,e,r){return N(this,t,e,!1,r)},l.prototype.writeDoubleLE=function(t,e,r){return R(this,t,e,!0,r)},l.prototype.writeDoubleBE=function(t,e,r){return R(this,t,e,!1,r)},l.prototype.copy=function(t,e,r,n){if(!l.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},l.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{const i=l.isBuffer(t)?t:l.from(t,n),s=i.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=i[o%s]}return this};const P={};function M(t,e,r){P[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function j(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function F(t,e,r,n,o,i){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let o;throw o=i>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new P.ERR_OUT_OF_RANGE("value",o,t)}!function(t,e,r){H(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||V(e,t.length-(r+1))}(n,o,i)}function H(t,e){if("number"!=typeof t)throw new P.ERR_INVALID_ARG_TYPE(e,"number",t)}function V(t,e,r){if(Math.floor(t)!==t)throw H(t,r),new P.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new P.ERR_BUFFER_OUT_OF_BOUNDS;throw new P.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}M("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),M("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),M("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=j(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=j(o)),o+="n"),n+=` It must be ${e}. Received ${o}`,n}),RangeError);const q=/[^+/0-9A-Za-z-_]/g;function W(t,e){let r;e=e||1/0;const n=t.length;let o=null;const i=[];for(let s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function K(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(q,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function G(t,e,r,n){let o;for(o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function J(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function X(t){return t!=t}const Z=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}();function Y(t){return"undefined"==typeof BigInt?Q:t}function Q(){throw new Error("BigInt not supported")}},8970:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(8081),o=r.n(n),i=r(3645),s=r.n(i)()(o());s.push([t.id,':root,\n:host,\n.sl-theme-light {\n  --sl-color-gray-50: hsl(0 0% 97.5%);\n  --sl-color-gray-100: hsl(240 4.8% 95.9%);\n  --sl-color-gray-200: hsl(240 5.9% 90%);\n  --sl-color-gray-300: hsl(240 4.9% 83.9%);\n  --sl-color-gray-400: hsl(240 5% 64.9%);\n  --sl-color-gray-500: hsl(240 3.8% 46.1%);\n  --sl-color-gray-600: hsl(240 5.2% 33.9%);\n  --sl-color-gray-700: hsl(240 5.3% 26.1%);\n  --sl-color-gray-800: hsl(240 3.7% 15.9%);\n  --sl-color-gray-900: hsl(240 5.9% 10%);\n  --sl-color-gray-950: hsl(240 7.3% 8%);\n\n  --sl-color-red-50: hsl(0 85.7% 97.3%);\n  --sl-color-red-100: hsl(0 93.3% 94.1%);\n  --sl-color-red-200: hsl(0 96.3% 89.4%);\n  --sl-color-red-300: hsl(0 93.5% 81.8%);\n  --sl-color-red-400: hsl(0 90.6% 70.8%);\n  --sl-color-red-500: hsl(0 84.2% 60.2%);\n  --sl-color-red-600: hsl(0 72.2% 50.6%);\n  --sl-color-red-700: hsl(0 73.7% 41.8%);\n  --sl-color-red-800: hsl(0 70% 35.3%);\n  --sl-color-red-900: hsl(0 62.8% 30.6%);\n  --sl-color-red-950: hsl(0 60% 19.6%);\n\n  --sl-color-orange-50: hsl(33.3 100% 96.5%);\n  --sl-color-orange-100: hsl(34.3 100% 91.8%);\n  --sl-color-orange-200: hsl(32.1 97.7% 83.1%);\n  --sl-color-orange-300: hsl(30.7 97.2% 72.4%);\n  --sl-color-orange-400: hsl(27 96% 61%);\n  --sl-color-orange-500: hsl(24.6 95% 53.1%);\n  --sl-color-orange-600: hsl(20.5 90.2% 48.2%);\n  --sl-color-orange-700: hsl(17.5 88.3% 40.4%);\n  --sl-color-orange-800: hsl(15 79.1% 33.7%);\n  --sl-color-orange-900: hsl(15.3 74.6% 27.8%);\n  --sl-color-orange-950: hsl(15.2 69.1% 19%);\n\n  --sl-color-amber-50: hsl(48 100% 96.1%);\n  --sl-color-amber-100: hsl(48 96.5% 88.8%);\n  --sl-color-amber-200: hsl(48 96.6% 76.7%);\n  --sl-color-amber-300: hsl(45.9 96.7% 64.5%);\n  --sl-color-amber-400: hsl(43.3 96.4% 56.3%);\n  --sl-color-amber-500: hsl(37.7 92.1% 50.2%);\n  --sl-color-amber-600: hsl(32.1 94.6% 43.7%);\n  --sl-color-amber-700: hsl(26 90.5% 37.1%);\n  --sl-color-amber-800: hsl(22.7 82.5% 31.4%);\n  --sl-color-amber-900: hsl(21.7 77.8% 26.5%);\n  --sl-color-amber-950: hsl(22.9 74.1% 16.7%);\n\n  --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);\n  --sl-color-yellow-100: hsl(54.9 96.7% 88%);\n  --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);\n  --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);\n  --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);\n  --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);\n  --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);\n  --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);\n  --sl-color-yellow-800: hsl(31.8 81% 28.8%);\n  --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);\n  --sl-color-yellow-950: hsl(33.1 69% 13.9%);\n\n  --sl-color-lime-50: hsl(78.3 92% 95.1%);\n  --sl-color-lime-100: hsl(79.6 89.1% 89.2%);\n  --sl-color-lime-200: hsl(80.9 88.5% 79.6%);\n  --sl-color-lime-300: hsl(82 84.5% 67.1%);\n  --sl-color-lime-400: hsl(82.7 78% 55.5%);\n  --sl-color-lime-500: hsl(83.7 80.5% 44.3%);\n  --sl-color-lime-600: hsl(84.8 85.2% 34.5%);\n  --sl-color-lime-700: hsl(85.9 78.4% 27.3%);\n  --sl-color-lime-800: hsl(86.3 69% 22.7%);\n  --sl-color-lime-900: hsl(87.6 61.2% 20.2%);\n  --sl-color-lime-950: hsl(86.5 60.6% 13.9%);\n\n  --sl-color-green-50: hsl(138.5 76.5% 96.7%);\n  --sl-color-green-100: hsl(140.6 84.2% 92.5%);\n  --sl-color-green-200: hsl(141 78.9% 85.1%);\n  --sl-color-green-300: hsl(141.7 76.6% 73.1%);\n  --sl-color-green-400: hsl(141.9 69.2% 58%);\n  --sl-color-green-500: hsl(142.1 70.6% 45.3%);\n  --sl-color-green-600: hsl(142.1 76.2% 36.3%);\n  --sl-color-green-700: hsl(142.4 71.8% 29.2%);\n  --sl-color-green-800: hsl(142.8 64.2% 24.1%);\n  --sl-color-green-900: hsl(143.8 61.2% 20.2%);\n  --sl-color-green-950: hsl(144.3 60.7% 12%);\n\n  --sl-color-emerald-50: hsl(151.8 81% 95.9%);\n  --sl-color-emerald-100: hsl(149.3 80.4% 90%);\n  --sl-color-emerald-200: hsl(152.4 76% 80.4%);\n  --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);\n  --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);\n  --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);\n  --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);\n  --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);\n  --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);\n  --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);\n  --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);\n\n  --sl-color-teal-50: hsl(166.2 76.5% 96.7%);\n  --sl-color-teal-100: hsl(167.2 85.5% 89.2%);\n  --sl-color-teal-200: hsl(168.4 83.8% 78.2%);\n  --sl-color-teal-300: hsl(170.6 76.9% 64.3%);\n  --sl-color-teal-400: hsl(172.5 66% 50.4%);\n  --sl-color-teal-500: hsl(173.4 80.4% 40%);\n  --sl-color-teal-600: hsl(174.7 83.9% 31.6%);\n  --sl-color-teal-700: hsl(175.3 77.4% 26.1%);\n  --sl-color-teal-800: hsl(176.1 69.4% 21.8%);\n  --sl-color-teal-900: hsl(175.9 60.8% 19%);\n  --sl-color-teal-950: hsl(176.5 58.6% 11.4%);\n\n  --sl-color-cyan-50: hsl(183.2 100% 96.3%);\n  --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);\n  --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);\n  --sl-color-cyan-300: hsl(187 92.4% 69%);\n  --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);\n  --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);\n  --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);\n  --sl-color-cyan-700: hsl(192.9 82.3% 31%);\n  --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);\n  --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);\n  --sl-color-cyan-950: hsl(196.8 61% 16.1%);\n\n  --sl-color-sky-50: hsl(204 100% 97.1%);\n  --sl-color-sky-100: hsl(204 93.8% 93.7%);\n  --sl-color-sky-200: hsl(200.6 94.4% 86.1%);\n  --sl-color-sky-300: hsl(199.4 95.5% 73.9%);\n  --sl-color-sky-400: hsl(198.4 93.2% 59.6%);\n  --sl-color-sky-500: hsl(198.6 88.7% 48.4%);\n  --sl-color-sky-600: hsl(200.4 98% 39.4%);\n  --sl-color-sky-700: hsl(201.3 96.3% 32.2%);\n  --sl-color-sky-800: hsl(201 90% 27.5%);\n  --sl-color-sky-900: hsl(202 80.3% 23.9%);\n  --sl-color-sky-950: hsl(202.3 73.8% 16.5%);\n\n  --sl-color-blue-50: hsl(213.8 100% 96.9%);\n  --sl-color-blue-100: hsl(214.3 94.6% 92.7%);\n  --sl-color-blue-200: hsl(213.3 96.9% 87.3%);\n  --sl-color-blue-300: hsl(211.7 96.4% 78.4%);\n  --sl-color-blue-400: hsl(213.1 93.9% 67.8%);\n  --sl-color-blue-500: hsl(217.2 91.2% 59.8%);\n  --sl-color-blue-600: hsl(221.2 83.2% 53.3%);\n  --sl-color-blue-700: hsl(224.3 76.3% 48%);\n  --sl-color-blue-800: hsl(225.9 70.7% 40.2%);\n  --sl-color-blue-900: hsl(224.4 64.3% 32.9%);\n  --sl-color-blue-950: hsl(226.2 55.3% 18.4%);\n\n  --sl-color-indigo-50: hsl(225.9 100% 96.7%);\n  --sl-color-indigo-100: hsl(226.5 100% 93.9%);\n  --sl-color-indigo-200: hsl(228 96.5% 88.8%);\n  --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);\n  --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);\n  --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);\n  --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);\n  --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);\n  --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);\n  --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);\n  --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);\n\n  --sl-color-violet-50: hsl(250 100% 97.6%);\n  --sl-color-violet-100: hsl(251.4 91.3% 95.5%);\n  --sl-color-violet-200: hsl(250.5 95.2% 91.8%);\n  --sl-color-violet-300: hsl(252.5 94.7% 85.1%);\n  --sl-color-violet-400: hsl(255.1 91.7% 76.3%);\n  --sl-color-violet-500: hsl(258.3 89.5% 66.3%);\n  --sl-color-violet-600: hsl(262.1 83.3% 57.8%);\n  --sl-color-violet-700: hsl(263.4 70% 50.4%);\n  --sl-color-violet-800: hsl(263.4 69.3% 42.2%);\n  --sl-color-violet-900: hsl(263.5 67.4% 34.9%);\n  --sl-color-violet-950: hsl(265.1 61.5% 21.4%);\n\n  --sl-color-purple-50: hsl(270 100% 98%);\n  --sl-color-purple-100: hsl(268.7 100% 95.5%);\n  --sl-color-purple-200: hsl(268.6 100% 91.8%);\n  --sl-color-purple-300: hsl(269.2 97.4% 85.1%);\n  --sl-color-purple-400: hsl(270 95.2% 75.3%);\n  --sl-color-purple-500: hsl(270.7 91% 65.1%);\n  --sl-color-purple-600: hsl(271.5 81.3% 55.9%);\n  --sl-color-purple-700: hsl(272.1 71.7% 47.1%);\n  --sl-color-purple-800: hsl(272.9 67.2% 39.4%);\n  --sl-color-purple-900: hsl(273.6 65.6% 32%);\n  --sl-color-purple-950: hsl(276 59.5% 16.5%);\n\n  --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);\n  --sl-color-fuchsia-100: hsl(287 100% 95.5%);\n  --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);\n  --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);\n  --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);\n  --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);\n  --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);\n  --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);\n  --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);\n  --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);\n  --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);\n\n  --sl-color-pink-50: hsl(327.3 73.3% 97.1%);\n  --sl-color-pink-100: hsl(325.7 77.8% 94.7%);\n  --sl-color-pink-200: hsl(325.9 84.6% 89.8%);\n  --sl-color-pink-300: hsl(327.4 87.1% 81.8%);\n  --sl-color-pink-400: hsl(328.6 85.5% 70.2%);\n  --sl-color-pink-500: hsl(330.4 81.2% 60.4%);\n  --sl-color-pink-600: hsl(333.3 71.4% 50.6%);\n  --sl-color-pink-700: hsl(335.1 77.6% 42%);\n  --sl-color-pink-800: hsl(335.8 74.4% 35.3%);\n  --sl-color-pink-900: hsl(335.9 69% 30.4%);\n  --sl-color-pink-950: hsl(336.2 65.4% 15.9%);\n\n  --sl-color-rose-50: hsl(355.7 100% 97.3%);\n  --sl-color-rose-100: hsl(355.6 100% 94.7%);\n  --sl-color-rose-200: hsl(352.7 96.1% 90%);\n  --sl-color-rose-300: hsl(352.6 95.7% 81.8%);\n  --sl-color-rose-400: hsl(351.3 94.5% 71.4%);\n  --sl-color-rose-500: hsl(349.7 89.2% 60.2%);\n  --sl-color-rose-600: hsl(346.8 77.2% 49.8%);\n  --sl-color-rose-700: hsl(345.3 82.7% 40.8%);\n  --sl-color-rose-800: hsl(343.4 79.7% 34.7%);\n  --sl-color-rose-900: hsl(341.5 75.5% 30.4%);\n  --sl-color-rose-950: hsl(341.3 70.1% 17.1%);\n\n  --sl-color-primary-50: var(--sl-color-sky-50);\n  --sl-color-primary-100: var(--sl-color-sky-100);\n  --sl-color-primary-200: var(--sl-color-sky-200);\n  --sl-color-primary-300: var(--sl-color-sky-300);\n  --sl-color-primary-400: var(--sl-color-sky-400);\n  --sl-color-primary-500: var(--sl-color-sky-500);\n  --sl-color-primary-600: var(--sl-color-sky-600);\n  --sl-color-primary-700: var(--sl-color-sky-700);\n  --sl-color-primary-800: var(--sl-color-sky-800);\n  --sl-color-primary-900: var(--sl-color-sky-900);\n  --sl-color-primary-950: var(--sl-color-sky-950);\n\n  --sl-color-success-50: var(--sl-color-green-50);\n  --sl-color-success-100: var(--sl-color-green-100);\n  --sl-color-success-200: var(--sl-color-green-200);\n  --sl-color-success-300: var(--sl-color-green-300);\n  --sl-color-success-400: var(--sl-color-green-400);\n  --sl-color-success-500: var(--sl-color-green-500);\n  --sl-color-success-600: var(--sl-color-green-600);\n  --sl-color-success-700: var(--sl-color-green-700);\n  --sl-color-success-800: var(--sl-color-green-800);\n  --sl-color-success-900: var(--sl-color-green-900);\n  --sl-color-success-950: var(--sl-color-green-950);\n\n  --sl-color-warning-50: var(--sl-color-amber-50);\n  --sl-color-warning-100: var(--sl-color-amber-100);\n  --sl-color-warning-200: var(--sl-color-amber-200);\n  --sl-color-warning-300: var(--sl-color-amber-300);\n  --sl-color-warning-400: var(--sl-color-amber-400);\n  --sl-color-warning-500: var(--sl-color-amber-500);\n  --sl-color-warning-600: var(--sl-color-amber-600);\n  --sl-color-warning-700: var(--sl-color-amber-700);\n  --sl-color-warning-800: var(--sl-color-amber-800);\n  --sl-color-warning-900: var(--sl-color-amber-900);\n  --sl-color-warning-950: var(--sl-color-amber-950);\n\n  --sl-color-danger-50: var(--sl-color-red-50);\n  --sl-color-danger-100: var(--sl-color-red-100);\n  --sl-color-danger-200: var(--sl-color-red-200);\n  --sl-color-danger-300: var(--sl-color-red-300);\n  --sl-color-danger-400: var(--sl-color-red-400);\n  --sl-color-danger-500: var(--sl-color-red-500);\n  --sl-color-danger-600: var(--sl-color-red-600);\n  --sl-color-danger-700: var(--sl-color-red-700);\n  --sl-color-danger-800: var(--sl-color-red-800);\n  --sl-color-danger-900: var(--sl-color-red-900);\n  --sl-color-danger-950: var(--sl-color-red-950);\n\n  --sl-color-neutral-50: var(--sl-color-gray-50);\n  --sl-color-neutral-100: var(--sl-color-gray-100);\n  --sl-color-neutral-200: var(--sl-color-gray-200);\n  --sl-color-neutral-300: var(--sl-color-gray-300);\n  --sl-color-neutral-400: var(--sl-color-gray-400);\n  --sl-color-neutral-500: var(--sl-color-gray-500);\n  --sl-color-neutral-600: var(--sl-color-gray-600);\n  --sl-color-neutral-700: var(--sl-color-gray-700);\n  --sl-color-neutral-800: var(--sl-color-gray-800);\n  --sl-color-neutral-900: var(--sl-color-gray-900);\n  --sl-color-neutral-950: var(--sl-color-gray-950);\n\n  --sl-color-neutral-0: hsl(0, 0%, 100%);\n  --sl-color-neutral-1000: hsl(0, 0%, 0%);\n\n  --sl-border-radius-small: 0.1875rem;\n  --sl-border-radius-medium: 0.25rem;\n  --sl-border-radius-large: 0.5rem;\n  --sl-border-radius-x-large: 1rem;\n\n  --sl-border-radius-circle: 50%;\n  --sl-border-radius-pill: 9999px;\n\n  --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);\n  --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);\n\n  --sl-spacing-3x-small: 0.125rem;\n  --sl-spacing-2x-small: 0.25rem;\n  --sl-spacing-x-small: 0.5rem;\n  --sl-spacing-small: 0.75rem;\n  --sl-spacing-medium: 1rem;\n  --sl-spacing-large: 1.25rem;\n  --sl-spacing-x-large: 1.75rem;\n  --sl-spacing-2x-large: 2.25rem;\n  --sl-spacing-3x-large: 3rem;\n  --sl-spacing-4x-large: 4.5rem;\n\n  --sl-transition-x-slow: 1000ms;\n  --sl-transition-slow: 500ms;\n  --sl-transition-medium: 250ms;\n  --sl-transition-fast: 150ms;\n  --sl-transition-x-fast: 50ms;\n\n  --sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;\n  --sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",\n    "Segoe UI Symbol";\n  --sl-font-serif: Georgia, "Times New Roman", serif;\n\n  --sl-font-size-2x-small: 0.625rem;\n  --sl-font-size-x-small: 0.75rem;\n  --sl-font-size-small: 0.875rem;\n  --sl-font-size-medium: 1rem;\n  --sl-font-size-large: 1.25rem;\n  --sl-font-size-x-large: 1.5rem;\n  --sl-font-size-2x-large: 2.25rem;\n  --sl-font-size-3x-large: 3rem;\n  --sl-font-size-4x-large: 4.5rem;\n\n  --sl-font-weight-light: 300;\n  --sl-font-weight-normal: 400;\n  --sl-font-weight-semibold: 500;\n  --sl-font-weight-bold: 700;\n\n  --sl-letter-spacing-denser: -0.03em;\n  --sl-letter-spacing-dense: -0.015em;\n  --sl-letter-spacing-normal: normal;\n  --sl-letter-spacing-loose: 0.075em;\n  --sl-letter-spacing-looser: 0.15em;\n\n  --sl-line-height-denser: 1;\n  --sl-line-height-dense: 1.4;\n  --sl-line-height-normal: 1.8;\n  --sl-line-height-loose: 2.2;\n  --sl-line-height-looser: 2.6;\n\n  --sl-focus-ring-alpha: 40%;\n  --sl-focus-ring-width: 3px;\n  --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width)\n    hsl(198.6 88.7% 48.4% / var(--sl-focus-ring-alpha));\n\n  --sl-button-font-size-small: var(--sl-font-size-x-small);\n  --sl-button-font-size-medium: var(--sl-font-size-small);\n  --sl-button-font-size-large: var(--sl-font-size-medium);\n\n  --sl-input-height-small: 1.875rem;\n  --sl-input-height-medium: 2.5rem;\n  --sl-input-height-large: 3.125rem;\n\n  --sl-input-background-color: var(--sl-color-neutral-0);\n  --sl-input-background-color-hover: var(--sl-input-background-color);\n  --sl-input-background-color-focus: var(--sl-input-background-color);\n  --sl-input-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-border-color: var(--sl-color-neutral-300);\n  --sl-input-border-color-hover: var(--sl-color-neutral-400);\n  --sl-input-border-color-focus: var(--sl-color-primary-500);\n  --sl-input-border-color-disabled: var(--sl-color-neutral-300);\n  --sl-input-border-width: 1px;\n\n  --sl-input-border-radius-small: var(--sl-border-radius-medium);\n  --sl-input-border-radius-medium: var(--sl-border-radius-medium);\n  --sl-input-border-radius-large: var(--sl-border-radius-medium);\n\n  --sl-input-font-family: var(--sl-font-sans);\n  --sl-input-font-weight: var(--sl-font-weight-normal);\n  --sl-input-font-size-small: var(--sl-font-size-small);\n  --sl-input-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-font-size-large: var(--sl-font-size-large);\n  --sl-input-letter-spacing: var(--sl-letter-spacing-normal);\n\n  --sl-input-color: var(--sl-color-neutral-700);\n  --sl-input-color-hover: var(--sl-color-neutral-700);\n  --sl-input-color-focus: var(--sl-color-neutral-700);\n  --sl-input-color-disabled: var(--sl-color-neutral-900);\n  --sl-input-icon-color: var(--sl-color-neutral-500);\n  --sl-input-icon-color-hover: var(--sl-color-neutral-600);\n  --sl-input-icon-color-focus: var(--sl-color-neutral-600);\n  --sl-input-placeholder-color: var(--sl-color-neutral-500);\n  --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);\n  --sl-input-spacing-small: var(--sl-spacing-small);\n  --sl-input-spacing-medium: var(--sl-spacing-medium);\n  --sl-input-spacing-large: var(--sl-spacing-large);\n\n  --sl-input-filled-background-color: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-filled-color: var(--sl-color-neutral-800);\n  --sl-input-filled-color-hover: var(--sl-color-neutral-800);\n  --sl-input-filled-color-focus: var(--sl-color-neutral-700);\n  --sl-input-filled-color-disabled: var(--sl-color-neutral-800);\n\n  --sl-input-label-font-size-small: var(--sl-font-size-small);\n  --sl-input-label-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-label-font-size-large: var(--sl-font-size-large);\n\n  --sl-input-label-color: inherit;\n\n  --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);\n  --sl-input-help-text-font-size-medium: var(--sl-font-size-small);\n  --sl-input-help-text-font-size-large: var(--sl-font-size-medium);\n\n  --sl-input-help-text-color: var(--sl-color-neutral-500);\n\n  --sl-toggle-size: 1rem;\n\n  --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);\n\n  --sl-panel-background-color: var(--sl-color-neutral-0);\n  --sl-panel-border-color: var(--sl-color-neutral-200);\n  --sl-panel-border-width: 1px;\n\n  --sl-tooltip-border-radius: var(--sl-border-radius-medium);\n  --sl-tooltip-background-color: var(--sl-color-neutral-800);\n  --sl-tooltip-color: var(--sl-color-neutral-0);\n  --sl-tooltip-font-family: var(--sl-font-sans);\n  --sl-tooltip-font-weight: var(--sl-font-weight-normal);\n  --sl-tooltip-font-size: var(--sl-font-size-small);\n  --sl-tooltip-line-height: var(--sl-line-height-dense);\n  --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);\n  --sl-tooltip-arrow-size: 5px;\n  --sl-tooltip-arrow-start-end-offset: 8px;\n\n  --sl-z-index-drawer: 700;\n  --sl-z-index-dialog: 800;\n  --sl-z-index-dropdown: 900;\n  --sl-z-index-toast: 950;\n  --sl-z-index-tooltip: 1000;\n}\n',""]);const a=s},9473:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(8081),o=r.n(n),i=r(3645),s=r.n(i)()(o());s.push([t.id,"/*! tailwindcss v2.2.17 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: var(--sl-font-sans); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n\t--tw-blur: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-invert: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.container {\n\twidth: 100%;\n}\n\n@media (min-width: 640px) {\n\n\t.container {\n\t\tmax-width: 640px;\n\t}\n}\n\n@media (min-width: 768px) {\n\n\t.container {\n\t\tmax-width: 768px;\n\t}\n}\n\n@media (min-width: 1024px) {\n\n\t.container {\n\t\tmax-width: 1024px;\n\t}\n}\n\n@media (min-width: 1280px) {\n\n\t.container {\n\t\tmax-width: 1280px;\n\t}\n}\n\n@media (min-width: 1536px) {\n\n\t.container {\n\t\tmax-width: 1536px;\n\t}\n}\n\n.sr-only {\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tpadding: 0;\n\tmargin: -1px;\n\toverflow: hidden;\n\tclip: rect(0, 0, 0, 0);\n\twhite-space: nowrap;\n\tborder-width: 0;\n}\n\n.static {\n\tposition: static;\n}\n\n.absolute {\n\tposition: absolute;\n}\n\n.left-2 {\n\tleft: 0.5rem;\n}\n\n.bottom-2 {\n\tbottom: 0.5rem;\n}\n\n.m-0 {\n\tmargin: 0px;\n}\n\n.mx-auto {\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n.my-0 {\n\tmargin-top: 0px;\n\tmargin-bottom: 0px;\n}\n\n.my-8 {\n\tmargin-top: 2rem;\n\tmargin-bottom: 2rem;\n}\n\n.mt-12 {\n\tmargin-top: 3rem;\n}\n\n.mb-8 {\n\tmargin-bottom: 2rem;\n}\n\n.mt-6 {\n\tmargin-top: 1.5rem;\n}\n\n.mt-3 {\n\tmargin-top: 0.75rem;\n}\n\n.block {\n\tdisplay: block;\n}\n\n.inline {\n\tdisplay: inline;\n}\n\n.flex {\n\tdisplay: flex;\n}\n\n.table {\n\tdisplay: table;\n}\n\n.table-cell {\n\tdisplay: table-cell;\n}\n\n.h-screen {\n\theight: 100vh;\n}\n\n.w-\\[35\\.5rem\\] {\n\twidth: 35.5rem;\n}\n\n.w-full {\n\twidth: 100%;\n}\n\n.w-max {\n\twidth: max-content;\n}\n\n.max-w-full {\n\tmax-width: 100%;\n}\n\n.flex-1 {\n\tflex: 1 1 0%;\n}\n\n.flex-shrink {\n\tflex-shrink: 1;\n}\n\n.flex-grow {\n\tflex-grow: 1;\n}\n\n.border-collapse {\n\tborder-collapse: collapse;\n}\n\n.transform {\n\ttransform: var(--tw-transform);\n}\n\n.flex-col {\n\tflex-direction: column;\n}\n\n.items-center {\n\talign-items: center;\n}\n\n.justify-between {\n\tjustify-content: space-between;\n}\n\n.overflow-hidden {\n\toverflow: hidden;\n}\n\n.break-all {\n\tword-break: break-all;\n}\n\n.border {\n\tborder-width: 1px;\n}\n\n.p-8 {\n\tpadding: 2rem;\n}\n\n.px-2 {\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\n\n.pb-8 {\n\tpadding-bottom: 2rem;\n}\n\n.text-center {\n\ttext-align: center;\n}\n\n.text-xs {\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\n\n.text-\\[2rem\\] {\n\tfont-size: 2rem;\n}\n\n.text-\\[1\\.25rem\\] {\n\tfont-size: 1.25rem;\n}\n\n.text-\\[7rem\\] {\n\tfont-size: 7rem;\n}\n\n.text-sm {\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n\n.font-semibold {\n\tfont-weight: 600;\n}\n\n.leading-none {\n\tline-height: 1;\n}\n\n.leading-tight {\n\tline-height: 1.25;\n}\n\n.text-gray-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.text-blue-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n.text-gray-400 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-text-opacity));\n}\n\n.shadow-sm {\n\t--tw-shadow: var(--sl-shadow-small);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.blur {\n\t--tw-blur: blur(8px);\n\tfilter: var(--tw-filter);\n}\n\n.filter {\n\tfilter: var(--tw-filter);\n}\n\n.transition {\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n\n.transition-colors {\n\ttransition-property: background-color, border-color, color, fill, stroke;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n\n.hover\\:text-blue-600:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(37, 99, 235, var(--tw-text-opacity));\n}\n\n@media (min-width: 768px) {\n\n\t.md\\:pb-0 {\n\t\tpadding-bottom: 0px;\n\t}\n}\n",""]);const a=s},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<t.length;c++){var h=[].concat(t[c]);n&&s[h[0]]||(void 0!==i&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=i),r&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=r):h[2]=r),o&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=o):h[4]="".concat(o)),e.push(h))}},e}},8081:t=>{"use strict";t.exports=function(t){return t[1]}},2114:t=>{"use strict";function e(t,e){for(const r in e)Object.defineProperty(t,r,{value:e[r],enumerable:!0,configurable:!0});return t}t.exports=function(t,r,n){if(!t||"string"==typeof t)throw new TypeError("Please pass an Error to err-code");n||(n={}),"object"==typeof r&&(n=r,r=""),r&&(n.code=r);try{return e(t,n)}catch(r){n.message=t.message,n.stack=t.stack;const o=function(){};o.prototype=Object.create(Object.getPrototypeOf(t));return e(new o,n)}}},43:(t,e,r)=>{"use strict";const n=r(544),{fromString:o}=r(132);class i{constructor(t,e,r=0){this._options=t,this._popCount=0,this._parent=e,this._posAtParent=r,this._children=new n,this.key=null}async put(t,e){const r=await this._findNewBucketAndPos(t);await r.bucket._putAt(r,t,e)}async get(t){const e=await this._findChild(t);if(e)return e.value}async del(t){const e=await this._findPlace(t),r=e.bucket._at(e.pos);r&&r.key===t&&e.bucket._delAt(e.pos)}leafCount(){return this._children.compactArray().reduce(((t,e)=>e instanceof i?t+e.leafCount():t+1),0)}childrenCount(){return this._children.length}onlyChild(){return this._children.get(0)}*eachLeafSeries(){const t=this._children.compactArray();for(const e of t)e instanceof i?yield*e.eachLeafSeries():yield e;return[]}serialize(t,e){return e(this._children.reduce(((r,n,o)=>(n&&(n instanceof i?r.push(n.serialize(t,e)):r.push(t(n,o))),r)),[]))}asyncTransform(t,e){return c(this,t,e)}toJSON(){return this.serialize(a,l)}prettyPrint(){return JSON.stringify(this.toJSON(),null,"  ")}tableSize(){return Math.pow(2,this._options.bits)}async _findChild(t){const e=await this._findPlace(t),r=e.bucket._at(e.pos);if(!(r instanceof i))return r&&r.key===t?r:void 0}async _findPlace(t){const e=this._options.hash("string"==typeof t?o(t):t),r=await e.take(this._options.bits),n=this._children.get(r);return n instanceof i?n._findPlace(e):{bucket:this,pos:r,hash:e,existingChild:n}}async _findNewBucketAndPos(t){const e=await this._findPlace(t);if(e.existingChild&&e.existingChild.key!==t){const t=new i(this._options,e.bucket,e.pos);e.bucket._putObjectAt(e.pos,t);const r=await t._findPlace(e.existingChild.hash);return r.bucket._putAt(r,e.existingChild.key,e.existingChild.value),t._findNewBucketAndPos(e.hash)}return e}_putAt(t,e,r){this._putObjectAt(t.pos,{key:e,value:r,hash:t.hash})}_putObjectAt(t,e){this._children.get(t)||this._popCount++,this._children.set(t,e)}_delAt(t){if(-1===t)throw new Error("Invalid position");this._children.get(t)&&this._popCount--,this._children.unset(t),this._level()}_level(){if(this._parent&&this._popCount<=1)if(1===this._popCount){const t=this._children.find(s);if(t&&!(t instanceof i)){const e=t.hash;e.untake(this._options.bits);const r={pos:this._posAtParent,hash:e,bucket:this._parent};this._parent._putAt(r,t.key,t.value)}}else this._parent._delAt(this._posAtParent)}_at(t){return this._children.get(t)}}function s(t){return Boolean(t)}function a(t,e){return t.key}function l(t){return t}async function c(t,e,r){const n=[];for(const o of t._children.compactArray())if(o instanceof i)await c(o,e,r);else{const r=await e(o);n.push({bitField:t._children.bitField(),children:r})}return r(n)}t.exports=i},1536:t=>{"use strict";const e=[255,254,252,248,240,224,192,128],r=[1,3,7,15,31,63,127,255];function n(t,n,o){const i=function(t,n){return e[t]&r[Math.min(n+t-1,7)]}(n,o);return(t&i)>>>n}t.exports=class{constructor(t){this._value=t,this._currentBytePos=t.length-1,this._currentBitPos=7}availableBits(){return this._currentBitPos+1+8*this._currentBytePos}totalBits(){return 8*this._value.length}take(t){let e=t,r=0;for(;e&&this._haveBits();){const t=this._value[this._currentBytePos],o=this._currentBitPos+1,i=Math.min(o,e);r=(r<<i)+n(t,o-i,i),e-=i,this._currentBitPos-=i,this._currentBitPos<0&&(this._currentBitPos=7,this._currentBytePos--)}return r}untake(t){for(this._currentBitPos+=t;this._currentBitPos>7;)this._currentBitPos-=8,this._currentBytePos+=1}_haveBits(){return this._currentBytePos>=0}}},1712:(t,e,r)=>{"use strict";const n=r(1536),{concat:o}=r(605);class i{constructor(t,e){if(!(t instanceof Uint8Array))throw new Error("can only hash Uint8Arrays");this._value=t,this._hashFn=e,this._depth=-1,this._availableBits=0,this._currentBufferIndex=0,this._buffers=[]}async take(t){let e=t;for(;this._availableBits<e;)await this._produceMoreBits();let r=0;for(;e>0;){const t=this._buffers[this._currentBufferIndex],n=Math.min(t.availableBits(),e);r=(r<<n)+t.take(n),e-=n,this._availableBits-=n,0===t.availableBits()&&this._currentBufferIndex++}return r}untake(t){let e=t;for(;e>0;){const t=this._buffers[this._currentBufferIndex],r=Math.min(t.totalBits()-t.availableBits(),e);t.untake(r),e-=r,this._availableBits+=r,this._currentBufferIndex>0&&t.totalBits()===t.availableBits()&&(this._depth--,this._currentBufferIndex--)}}async _produceMoreBits(){this._depth++;const t=this._depth?o([this._value,Uint8Array.from([this._depth])]):this._value,e=await this._hashFn(t),r=new n(e);this._buffers.push(r),this._availableBits+=r.availableBits()}}t.exports=function(t){return function(e){return e instanceof i?e:new i(e,t)}},t.exports.InfiniteHash=i},4563:(t,e,r)=>{"use strict";const n=r(43),o=r(1712);t.exports={createHAMT:function(t){if(!t||!t.hashFn)throw new Error("please define an options.hashFn");const e={bits:t.bits||8,hash:o(t.hashFn)};return new n(e)},Bucket:n}},645:(t,e)=>{
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
e.read=function(t,e,r,n,o){var i,s,a=8*o-n-1,l=(1<<a)-1,c=l>>1,h=-7,u=r?o-1:0,d=r?-1:1,p=t[e+u];for(u+=d,i=p&(1<<-h)-1,p>>=-h,h+=a;h>0;i=256*i+t[e+u],u+=d,h-=8);for(s=i&(1<<-h)-1,i>>=-h,h+=n;h>0;s=256*s+t[e+u],u+=d,h-=8);if(0===i)i=1-c;else{if(i===l)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),i-=c}return(p?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,a,l,c=8*i-o-1,h=(1<<c)-1,u=h>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,f=n?1:-1,b=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),(e+=s+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(s++,l/=2),s+u>=h?(a=0,s=h):s+u>=1?(a=(e*l-1)*Math.pow(2,o),s+=u):(a=e*Math.pow(2,u-1)*Math.pow(2,o),s=0));o>=8;t[r+p]=255&a,p+=f,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;t[r+p]=255&s,p+=f,s/=256,c-=8);t[r+p-f]|=128*b}},1303:t=>{"use strict";t.exports=async t=>{const e=[];for await(const r of t)e.push(r);return e}},8165:t=>{"use strict";t.exports=async function*(t,e=1){let r=[];e<1&&(e=1);for await(const n of t)for(r.push(n);r.length>=e;)yield r.slice(0,e),r=r.slice(e);for(;r.length;)yield r.slice(0,e),r=r.slice(e)}},4593:t=>{"use strict";t.exports=async t=>{for await(const e of t);}},5565:t=>{"use strict";t.exports=async function*(t,e){for await(const r of t)await e(r)&&(yield r)}},3093:t=>{"use strict";t.exports=async t=>{let e;for await(const r of t)e=r;return e}},2121:t=>{"use strict";t.exports=async function*(t,e){for await(const r of t)yield e(r)}},4810:(t,e,r)=>{"use strict";const n=r(8165);t.exports=async function*(t,e=1){for await(const r of n(t,e)){const t=r.map((t=>t().then((t=>({ok:!0,value:t})),(t=>({ok:!1,err:t})))));for(let e=0;e<t.length;e++){const r=await t[e];if(!r.ok)throw r.err;yield r.value}}}},8132:t=>{"use strict";t.exports=function(t){const[e,r]=t[Symbol.asyncIterator]?[t[Symbol.asyncIterator](),Symbol.asyncIterator]:[t[Symbol.iterator](),Symbol.iterator],n=[];return{peek:()=>e.next(),push:t=>{n.push(t)},next:()=>n.length?{done:!1,value:n.shift()}:e.next(),[r](){return this}}}},618:t=>{const e=(...t)=>{let e;for(;t.length;)e=t.shift()(e);return e},r=t=>t&&("function"==typeof t[Symbol.asyncIterator]||"function"==typeof t[Symbol.iterator]||"function"==typeof t.next),n=t=>t&&"function"==typeof t.sink&&r(t.source),o=t=>e=>(t.sink(e),t.source),i=(...t)=>{if(n(t[0])){const e=t[0];t[0]=()=>e.source}else if(r(t[0])){const e=t[0];t[0]=()=>e}if(t.length>1&&n(t[t.length-1])&&(t[t.length-1]=t[t.length-1].sink),t.length>2)for(let e=1;e<t.length-1;e++)n(t[e])&&(t[e]=o(t[e]));return e(...t)};t.exports=i,t.exports.pipe=i,t.exports.rawPipe=e,t.exports.isIterable=r,t.exports.isDuplex=n},7939:t=>{"use strict";t.exports=async function*(t,e){let r=0;if(!(e<1))for await(const n of t)if(yield n,r++,r===e)return}},942:function(t,e,r){"use strict";const n=r(9727),{hasOwnProperty:o}=Object.prototype,{propertyIsEnumerable:i}=Object,s=(t,e,r)=>Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!0,configurable:!0}),a=this,l={concatArrays:!1,ignoreUndefined:!1},c=t=>{const e=[];for(const r in t)o.call(t,r)&&e.push(r);if(Object.getOwnPropertySymbols){const r=Object.getOwnPropertySymbols(t);for(const n of r)i.call(t,n)&&e.push(n)}return e};function h(t){return Array.isArray(t)?function(t){const e=t.slice(0,0);return c(t).forEach((r=>{s(e,r,h(t[r]))})),e}(t):n(t)?function(t){const e=null===Object.getPrototypeOf(t)?Object.create(null):{};return c(t).forEach((r=>{s(e,r,h(t[r]))})),e}(t):t}const u=(t,e,r,n)=>(r.forEach((r=>{void 0===e[r]&&n.ignoreUndefined||(r in t&&t[r]!==Object.getPrototypeOf(t)?s(t,r,d(t[r],e[r],n)):s(t,r,h(e[r])))})),t);function d(t,e,r){return r.concatArrays&&Array.isArray(t)&&Array.isArray(e)?((t,e,r)=>{let n=t.slice(0,0),i=0;return[t,e].forEach((e=>{const a=[];for(let r=0;r<e.length;r++)o.call(e,r)&&(a.push(String(r)),s(n,i++,e===t?e[r]:h(e[r])));n=u(n,e,c(e).filter((t=>!a.includes(t))),r)})),n})(t,e,r):n(e)&&n(t)?u(t,e,c(e),r):h(e)}t.exports=function(...t){const e=d(h(l),this!==a&&this||{},l);let r={_:{}};for(const o of t)if(void 0!==o){if(!n(o))throw new TypeError("`"+o+"` is not an Option Object");r=d(r,{_:o},e)}return r._}},9727:t=>{"use strict";t.exports=t=>{if("[object Object]"!==Object.prototype.toString.call(t))return!1;const e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}},469:(t,e,r)=>{t.exports=r(8027)},8027:function(t,e){!function(r,n){"use strict";var o={version:"3.0.0",x86:{},x64:{},inputValidation:!0};function i(t){if(!Array.isArray(t)&&!ArrayBuffer.isView(t))return!1;for(var e=0;e<t.length;e++)if(!Number.isInteger(t[e])||t[e]<0||t[e]>255)return!1;return!0}function s(t,e){return(65535&t)*e+(((t>>>16)*e&65535)<<16)}function a(t,e){return t<<e|t>>>32-e}function l(t){return t=s(t^=t>>>16,2246822507),t=s(t^=t>>>13,3266489909),t^=t>>>16}function c(t,e){t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]],e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]];var r=[0,0,0,0];return r[3]+=t[3]+e[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=t[2]+e[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=t[1]+e[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=t[0]+e[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]}function h(t,e){t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]],e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]];var r=[0,0,0,0];return r[3]+=t[3]*e[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=t[2]*e[3],r[1]+=r[2]>>>16,r[2]&=65535,r[2]+=t[3]*e[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=t[1]*e[3],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=t[2]*e[2],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=t[3]*e[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=t[0]*e[3]+t[1]*e[2]+t[2]*e[1]+t[3]*e[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]}function u(t,e){return 32===(e%=64)?[t[1],t[0]]:e<32?[t[0]<<e|t[1]>>>32-e,t[1]<<e|t[0]>>>32-e]:(e-=32,[t[1]<<e|t[0]>>>32-e,t[0]<<e|t[1]>>>32-e])}function d(t,e){return 0===(e%=64)?t:e<32?[t[0]<<e|t[1]>>>32-e,t[1]<<e]:[t[1]<<e-32,0]}function p(t,e){return[t[0]^e[0],t[1]^e[1]]}function f(t){return t=p(t,[0,t[0]>>>1]),t=p(t=h(t,[4283543511,3981806797]),[0,t[0]>>>1]),t=p(t=h(t,[3301882366,444984403]),[0,t[0]>>>1])}o.x86.hash32=function(t,e){if(o.inputValidation&&!i(t))return n;e=e||0;for(var r=t.length%4,c=t.length-r,h=e,u=0,d=3432918353,p=461845907,f=0;f<c;f+=4)u=s(u=t[f]|t[f+1]<<8|t[f+2]<<16|t[f+3]<<24,d),u=s(u=a(u,15),p),h=s(h=a(h^=u,13),5)+3864292196;switch(u=0,r){case 3:u^=t[f+2]<<16;case 2:u^=t[f+1]<<8;case 1:u=s(u^=t[f],d),h^=u=s(u=a(u,15),p)}return(h=l(h^=t.length))>>>0},o.x86.hash128=function(t,e){if(o.inputValidation&&!i(t))return n;e=e||0;for(var r=t.length%16,c=t.length-r,h=e,u=e,d=e,p=e,f=0,b=0,g=0,y=0,m=597399067,w=2869860233,v=951274213,_=2716044179,x=0;x<c;x+=16)f=t[x]|t[x+1]<<8|t[x+2]<<16|t[x+3]<<24,b=t[x+4]|t[x+5]<<8|t[x+6]<<16|t[x+7]<<24,g=t[x+8]|t[x+9]<<8|t[x+10]<<16|t[x+11]<<24,y=t[x+12]|t[x+13]<<8|t[x+14]<<16|t[x+15]<<24,f=a(f=s(f,m),15),h=a(h^=f=s(f,w),19),h=s(h+=u,5)+1444728091,b=a(b=s(b,w),16),u=a(u^=b=s(b,v),17),u=s(u+=d,5)+197830471,g=a(g=s(g,v),17),d=a(d^=g=s(g,_),15),d=s(d+=p,5)+2530024501,y=a(y=s(y,_),18),p=a(p^=y=s(y,m),13),p=s(p+=h,5)+850148119;switch(f=0,b=0,g=0,y=0,r){case 15:y^=t[x+14]<<16;case 14:y^=t[x+13]<<8;case 13:y=s(y^=t[x+12],_),p^=y=s(y=a(y,18),m);case 12:g^=t[x+11]<<24;case 11:g^=t[x+10]<<16;case 10:g^=t[x+9]<<8;case 9:g=s(g^=t[x+8],v),d^=g=s(g=a(g,17),_);case 8:b^=t[x+7]<<24;case 7:b^=t[x+6]<<16;case 6:b^=t[x+5]<<8;case 5:b=s(b^=t[x+4],w),u^=b=s(b=a(b,16),v);case 4:f^=t[x+3]<<24;case 3:f^=t[x+2]<<16;case 2:f^=t[x+1]<<8;case 1:f=s(f^=t[x],m),h^=f=s(f=a(f,15),w)}return h^=t.length,h+=u^=t.length,h+=d^=t.length,u+=h+=p^=t.length,d+=h,p+=h,h=l(h),h+=u=l(u),h+=d=l(d),u+=h+=p=l(p),d+=h,p+=h,("00000000"+(h>>>0).toString(16)).slice(-8)+("00000000"+(u>>>0).toString(16)).slice(-8)+("00000000"+(d>>>0).toString(16)).slice(-8)+("00000000"+(p>>>0).toString(16)).slice(-8)},o.x64.hash128=function(t,e){if(o.inputValidation&&!i(t))return n;e=e||0;for(var r=t.length%16,s=t.length-r,a=[0,e],l=[0,e],b=[0,0],g=[0,0],y=[2277735313,289559509],m=[1291169091,658871167],w=0;w<s;w+=16)b=[t[w+4]|t[w+5]<<8|t[w+6]<<16|t[w+7]<<24,t[w]|t[w+1]<<8|t[w+2]<<16|t[w+3]<<24],g=[t[w+12]|t[w+13]<<8|t[w+14]<<16|t[w+15]<<24,t[w+8]|t[w+9]<<8|t[w+10]<<16|t[w+11]<<24],b=u(b=h(b,y),31),a=c(a=u(a=p(a,b=h(b,m)),27),l),a=c(h(a,[0,5]),[0,1390208809]),g=u(g=h(g,m),33),l=c(l=u(l=p(l,g=h(g,y)),31),a),l=c(h(l,[0,5]),[0,944331445]);switch(b=[0,0],g=[0,0],r){case 15:g=p(g,d([0,t[w+14]],48));case 14:g=p(g,d([0,t[w+13]],40));case 13:g=p(g,d([0,t[w+12]],32));case 12:g=p(g,d([0,t[w+11]],24));case 11:g=p(g,d([0,t[w+10]],16));case 10:g=p(g,d([0,t[w+9]],8));case 9:g=h(g=p(g,[0,t[w+8]]),m),l=p(l,g=h(g=u(g,33),y));case 8:b=p(b,d([0,t[w+7]],56));case 7:b=p(b,d([0,t[w+6]],48));case 6:b=p(b,d([0,t[w+5]],40));case 5:b=p(b,d([0,t[w+4]],32));case 4:b=p(b,d([0,t[w+3]],24));case 3:b=p(b,d([0,t[w+2]],16));case 2:b=p(b,d([0,t[w+1]],8));case 1:b=h(b=p(b,[0,t[w]]),y),a=p(a,b=h(b=u(b,31),m))}return a=c(a=p(a,[0,t.length]),l=p(l,[0,t.length])),l=c(l,a),a=c(a=f(a),l=f(l)),l=c(l,a),("00000000"+(a[0]>>>0).toString(16)).slice(-8)+("00000000"+(a[1]>>>0).toString(16)).slice(-8)+("00000000"+(l[0]>>>0).toString(16)).slice(-8)+("00000000"+(l[1]>>>0).toString(16)).slice(-8)},t.exports&&(e=t.exports=o),e.murmurHash3=o}()},2693:(t,e,r)=>{"use strict";const n=r(9353),o=["Failed to fetch","NetworkError when attempting to fetch resource.","The Internet connection appears to be offline.","Network request failed"];class i extends Error{constructor(t){super(),t instanceof Error?(this.originalError=t,({message:t}=t)):(this.originalError=new Error(t),this.originalError.stack=this.stack),this.name="AbortError",this.message=t}}const s=(t,e)=>new Promise(((r,s)=>{e={onFailedAttempt:()=>{},retries:10,...e};const a=n.operation(e);a.attempt((async n=>{try{r(await t(n))}catch(t){if(!(t instanceof Error))return void s(new TypeError(`Non-error was thrown: "${t}". You should only throw errors.`));if(t instanceof i)a.stop(),s(t.originalError);else if(t instanceof TypeError&&(l=t.message,!o.includes(l)))a.stop(),s(t);else{((t,e,r)=>{const n=r.retries-(e-1);t.attemptNumber=e,t.retriesLeft=n})(t,n,e);try{await e.onFailedAttempt(t)}catch(t){return void s(t)}a.retry(t)||s(a.mainError())}}var l}))}));t.exports=s,t.exports.default=s,t.exports.AbortError=i},4155:t=>{var e,r,n=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var a,l=[],c=!1,h=-1;function u(){c&&a&&(c=!1,a.length?l=a.concat(l):h=-1,l.length&&d())}function d(){if(!c){var t=s(u);c=!0;for(var e=l.length;e;){for(a=l,l=[];++h<e;)a&&a[h].run();h=-1,e=l.length}a=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function f(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];l.push(new p(t,e)),1!==l.length||c||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},2100:(t,e,r)=>{"use strict";t.exports=r(9482)},9482:(t,e,r)=>{"use strict";var n=e;function o(){n.util._configure(),n.Writer._configure(n.BufferWriter),n.Reader._configure(n.BufferReader)}n.build="minimal",n.Writer=r(1173),n.BufferWriter=r(3155),n.Reader=r(1408),n.BufferReader=r(593),n.util=r(9693),n.rpc=r(5994),n.roots=r(5054),n.configure=o,o()},1408:(t,e,r)=>{"use strict";t.exports=l;var n,o=r(9693),i=o.LongBits,s=o.utf8;function a(t,e){return RangeError("index out of range: "+t.pos+" + "+(e||1)+" > "+t.len)}function l(t){this.buf=t,this.pos=0,this.len=t.length}var c,h="undefined"!=typeof Uint8Array?function(t){if(t instanceof Uint8Array||Array.isArray(t))return new l(t);throw Error("illegal buffer")}:function(t){if(Array.isArray(t))return new l(t);throw Error("illegal buffer")},u=function(){return o.Buffer?function(t){return(l.create=function(t){return o.Buffer.isBuffer(t)?new n(t):h(t)})(t)}:h};function d(){var t=new i(0,0),e=0;if(!(this.len-this.pos>4)){for(;e<3;++e){if(this.pos>=this.len)throw a(this);if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*e)>>>0,this.buf[this.pos++]<128)return t}return t.lo=(t.lo|(127&this.buf[this.pos++])<<7*e)>>>0,t}for(;e<4;++e)if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*e)>>>0,this.buf[this.pos++]<128)return t;if(t.lo=(t.lo|(127&this.buf[this.pos])<<28)>>>0,t.hi=(t.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return t;if(e=0,this.len-this.pos>4){for(;e<5;++e)if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*e+3)>>>0,this.buf[this.pos++]<128)return t}else for(;e<5;++e){if(this.pos>=this.len)throw a(this);if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*e+3)>>>0,this.buf[this.pos++]<128)return t}throw Error("invalid varint encoding")}function p(t,e){return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0}function f(){if(this.pos+8>this.len)throw a(this,8);return new i(p(this.buf,this.pos+=4),p(this.buf,this.pos+=4))}l.create=u(),l.prototype._slice=o.Array.prototype.subarray||o.Array.prototype.slice,l.prototype.uint32=(c=4294967295,function(){if(c=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128)return c;if(c=(c|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128)return c;if(c=(c|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128)return c;if(c=(c|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128)return c;if(c=(c|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128)return c;if((this.pos+=5)>this.len)throw this.pos=this.len,a(this,10);return c}),l.prototype.int32=function(){return 0|this.uint32()},l.prototype.sint32=function(){var t=this.uint32();return t>>>1^-(1&t)|0},l.prototype.bool=function(){return 0!==this.uint32()},l.prototype.fixed32=function(){if(this.pos+4>this.len)throw a(this,4);return p(this.buf,this.pos+=4)},l.prototype.sfixed32=function(){if(this.pos+4>this.len)throw a(this,4);return 0|p(this.buf,this.pos+=4)},l.prototype.float=function(){if(this.pos+4>this.len)throw a(this,4);var t=o.float.readFloatLE(this.buf,this.pos);return this.pos+=4,t},l.prototype.double=function(){if(this.pos+8>this.len)throw a(this,4);var t=o.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,t},l.prototype.bytes=function(){var t=this.uint32(),e=this.pos,r=this.pos+t;if(r>this.len)throw a(this,t);return this.pos+=t,Array.isArray(this.buf)?this.buf.slice(e,r):e===r?new this.buf.constructor(0):this._slice.call(this.buf,e,r)},l.prototype.string=function(){var t=this.bytes();return s.read(t,0,t.length)},l.prototype.skip=function(t){if("number"==typeof t){if(this.pos+t>this.len)throw a(this,t);this.pos+=t}else do{if(this.pos>=this.len)throw a(this)}while(128&this.buf[this.pos++]);return this},l.prototype.skipType=function(t){switch(t){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;4!=(t=7&this.uint32());)this.skipType(t);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+t+" at offset "+this.pos)}return this},l._configure=function(t){n=t,l.create=u(),n._configure();var e=o.Long?"toLong":"toNumber";o.merge(l.prototype,{int64:function(){return d.call(this)[e](!1)},uint64:function(){return d.call(this)[e](!0)},sint64:function(){return d.call(this).zzDecode()[e](!1)},fixed64:function(){return f.call(this)[e](!0)},sfixed64:function(){return f.call(this)[e](!1)}})}},593:(t,e,r)=>{"use strict";t.exports=i;var n=r(1408);(i.prototype=Object.create(n.prototype)).constructor=i;var o=r(9693);function i(t){n.call(this,t)}i._configure=function(){o.Buffer&&(i.prototype._slice=o.Buffer.prototype.slice)},i.prototype.string=function(){var t=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+t,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+t,this.len))},i._configure()},5054:t=>{"use strict";t.exports={}},5994:(t,e,r)=>{"use strict";e.Service=r(7948)},7948:(t,e,r)=>{"use strict";t.exports=o;var n=r(9693);function o(t,e,r){if("function"!=typeof t)throw TypeError("rpcImpl must be a function");n.EventEmitter.call(this),this.rpcImpl=t,this.requestDelimited=Boolean(e),this.responseDelimited=Boolean(r)}(o.prototype=Object.create(n.EventEmitter.prototype)).constructor=o,o.prototype.rpcCall=function t(e,r,o,i,s){if(!i)throw TypeError("request must be specified");var a=this;if(!s)return n.asPromise(t,a,e,r,o,i);if(a.rpcImpl)try{return a.rpcImpl(e,r[a.requestDelimited?"encodeDelimited":"encode"](i).finish(),(function(t,r){if(t)return a.emit("error",t,e),s(t);if(null!==r){if(!(r instanceof o))try{r=o[a.responseDelimited?"decodeDelimited":"decode"](r)}catch(t){return a.emit("error",t,e),s(t)}return a.emit("data",r,e),s(null,r)}a.end(!0)}))}catch(t){return a.emit("error",t,e),void setTimeout((function(){s(t)}),0)}else setTimeout((function(){s(Error("already ended"))}),0)},o.prototype.end=function(t){return this.rpcImpl&&(t||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}},1945:(t,e,r)=>{"use strict";t.exports=o;var n=r(9693);function o(t,e){this.lo=t>>>0,this.hi=e>>>0}var i=o.zero=new o(0,0);i.toNumber=function(){return 0},i.zzEncode=i.zzDecode=function(){return this},i.length=function(){return 1};var s=o.zeroHash="\0\0\0\0\0\0\0\0";o.fromNumber=function(t){if(0===t)return i;var e=t<0;e&&(t=-t);var r=t>>>0,n=(t-r)/4294967296>>>0;return e&&(n=~n>>>0,r=~r>>>0,++r>4294967295&&(r=0,++n>4294967295&&(n=0))),new o(r,n)},o.from=function(t){if("number"==typeof t)return o.fromNumber(t);if(n.isString(t)){if(!n.Long)return o.fromNumber(parseInt(t,10));t=n.Long.fromString(t)}return t.low||t.high?new o(t.low>>>0,t.high>>>0):i},o.prototype.toNumber=function(t){if(!t&&this.hi>>>31){var e=1+~this.lo>>>0,r=~this.hi>>>0;return e||(r=r+1>>>0),-(e+4294967296*r)}return this.lo+4294967296*this.hi},o.prototype.toLong=function(t){return n.Long?new n.Long(0|this.lo,0|this.hi,Boolean(t)):{low:0|this.lo,high:0|this.hi,unsigned:Boolean(t)}};var a=String.prototype.charCodeAt;o.fromHash=function(t){return t===s?i:new o((a.call(t,0)|a.call(t,1)<<8|a.call(t,2)<<16|a.call(t,3)<<24)>>>0,(a.call(t,4)|a.call(t,5)<<8|a.call(t,6)<<16|a.call(t,7)<<24)>>>0)},o.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},o.prototype.zzEncode=function(){var t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this},o.prototype.zzDecode=function(){var t=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this},o.prototype.length=function(){var t=this.lo,e=(this.lo>>>28|this.hi<<4)>>>0,r=this.hi>>>24;return 0===r?0===e?t<16384?t<128?1:2:t<2097152?3:4:e<16384?e<128?5:6:e<2097152?7:8:r<128?9:10}},9693:function(t,e,r){"use strict";var n=e;function o(t,e,r){for(var n=Object.keys(e),o=0;o<n.length;++o)void 0!==t[n[o]]&&r||(t[n[o]]=e[n[o]]);return t}function i(t){function e(t,r){if(!(this instanceof e))return new e(t,r);Object.defineProperty(this,"message",{get:function(){return t}}),Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:(new Error).stack||""}),r&&o(this,r)}return(e.prototype=Object.create(Error.prototype)).constructor=e,Object.defineProperty(e.prototype,"name",{get:function(){return t}}),e.prototype.toString=function(){return this.name+": "+this.message},e}n.asPromise=r(4537),n.base64=r(7419),n.EventEmitter=r(9211),n.float=r(945),n.inquire=r(7199),n.utf8=r(4997),n.pool=r(6662),n.LongBits=r(1945),n.isNode=Boolean(void 0!==r.g&&r.g&&r.g.process&&r.g.process.versions&&r.g.process.versions.node),n.global=n.isNode&&r.g||"undefined"!=typeof window&&window||"undefined"!=typeof self&&self||this,n.emptyArray=Object.freeze?Object.freeze([]):[],n.emptyObject=Object.freeze?Object.freeze({}):{},n.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},n.isString=function(t){return"string"==typeof t||t instanceof String},n.isObject=function(t){return t&&"object"==typeof t},n.isset=n.isSet=function(t,e){var r=t[e];return!(null==r||!t.hasOwnProperty(e))&&("object"!=typeof r||(Array.isArray(r)?r.length:Object.keys(r).length)>0)},n.Buffer=function(){try{var t=n.inquire("buffer").Buffer;return t.prototype.utf8Write?t:null}catch(t){return null}}(),n._Buffer_from=null,n._Buffer_allocUnsafe=null,n.newBuffer=function(t){return"number"==typeof t?n.Buffer?n._Buffer_allocUnsafe(t):new n.Array(t):n.Buffer?n._Buffer_from(t):"undefined"==typeof Uint8Array?t:new Uint8Array(t)},n.Array="undefined"!=typeof Uint8Array?Uint8Array:Array,n.Long=n.global.dcodeIO&&n.global.dcodeIO.Long||n.global.Long||n.inquire("long"),n.key2Re=/^true|false|0|1$/,n.key32Re=/^-?(?:0|[1-9][0-9]*)$/,n.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,n.longToHash=function(t){return t?n.LongBits.from(t).toHash():n.LongBits.zeroHash},n.longFromHash=function(t,e){var r=n.LongBits.fromHash(t);return n.Long?n.Long.fromBits(r.lo,r.hi,e):r.toNumber(Boolean(e))},n.merge=o,n.lcFirst=function(t){return t.charAt(0).toLowerCase()+t.substring(1)},n.newError=i,n.ProtocolError=i("ProtocolError"),n.oneOfGetter=function(t){for(var e={},r=0;r<t.length;++r)e[t[r]]=1;return function(){for(var t=Object.keys(this),r=t.length-1;r>-1;--r)if(1===e[t[r]]&&void 0!==this[t[r]]&&null!==this[t[r]])return t[r]}},n.oneOfSetter=function(t){return function(e){for(var r=0;r<t.length;++r)t[r]!==e&&delete this[t[r]]}},n.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},n._configure=function(){var t=n.Buffer;t?(n._Buffer_from=t.from!==Uint8Array.from&&t.from||function(e,r){return new t(e,r)},n._Buffer_allocUnsafe=t.allocUnsafe||function(e){return new t(e)}):n._Buffer_from=n._Buffer_allocUnsafe=null}},1173:(t,e,r)=>{"use strict";t.exports=u;var n,o=r(9693),i=o.LongBits,s=o.base64,a=o.utf8;function l(t,e,r){this.fn=t,this.len=e,this.next=void 0,this.val=r}function c(){}function h(t){this.head=t.head,this.tail=t.tail,this.len=t.len,this.next=t.states}function u(){this.len=0,this.head=new l(c,0,0),this.tail=this.head,this.states=null}var d=function(){return o.Buffer?function(){return(u.create=function(){return new n})()}:function(){return new u}};function p(t,e,r){e[r]=255&t}function f(t,e){this.len=t,this.next=void 0,this.val=e}function b(t,e,r){for(;t.hi;)e[r++]=127&t.lo|128,t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7;for(;t.lo>127;)e[r++]=127&t.lo|128,t.lo=t.lo>>>7;e[r++]=t.lo}function g(t,e,r){e[r]=255&t,e[r+1]=t>>>8&255,e[r+2]=t>>>16&255,e[r+3]=t>>>24}u.create=d(),u.alloc=function(t){return new o.Array(t)},o.Array!==Array&&(u.alloc=o.pool(u.alloc,o.Array.prototype.subarray)),u.prototype._push=function(t,e,r){return this.tail=this.tail.next=new l(t,e,r),this.len+=e,this},f.prototype=Object.create(l.prototype),f.prototype.fn=function(t,e,r){for(;t>127;)e[r++]=127&t|128,t>>>=7;e[r]=t},u.prototype.uint32=function(t){return this.len+=(this.tail=this.tail.next=new f((t>>>=0)<128?1:t<16384?2:t<2097152?3:t<268435456?4:5,t)).len,this},u.prototype.int32=function(t){return t<0?this._push(b,10,i.fromNumber(t)):this.uint32(t)},u.prototype.sint32=function(t){return this.uint32((t<<1^t>>31)>>>0)},u.prototype.uint64=function(t){var e=i.from(t);return this._push(b,e.length(),e)},u.prototype.int64=u.prototype.uint64,u.prototype.sint64=function(t){var e=i.from(t).zzEncode();return this._push(b,e.length(),e)},u.prototype.bool=function(t){return this._push(p,1,t?1:0)},u.prototype.fixed32=function(t){return this._push(g,4,t>>>0)},u.prototype.sfixed32=u.prototype.fixed32,u.prototype.fixed64=function(t){var e=i.from(t);return this._push(g,4,e.lo)._push(g,4,e.hi)},u.prototype.sfixed64=u.prototype.fixed64,u.prototype.float=function(t){return this._push(o.float.writeFloatLE,4,t)},u.prototype.double=function(t){return this._push(o.float.writeDoubleLE,8,t)};var y=o.Array.prototype.set?function(t,e,r){e.set(t,r)}:function(t,e,r){for(var n=0;n<t.length;++n)e[r+n]=t[n]};u.prototype.bytes=function(t){var e=t.length>>>0;if(!e)return this._push(p,1,0);if(o.isString(t)){var r=u.alloc(e=s.length(t));s.decode(t,r,0),t=r}return this.uint32(e)._push(y,e,t)},u.prototype.string=function(t){var e=a.length(t);return e?this.uint32(e)._push(a.write,e,t):this._push(p,1,0)},u.prototype.fork=function(){return this.states=new h(this),this.head=this.tail=new l(c,0,0),this.len=0,this},u.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new l(c,0,0),this.len=0),this},u.prototype.ldelim=function(){var t=this.head,e=this.tail,r=this.len;return this.reset().uint32(r),r&&(this.tail.next=t.next,this.tail=e,this.len+=r),this},u.prototype.finish=function(){for(var t=this.head.next,e=this.constructor.alloc(this.len),r=0;t;)t.fn(t.val,e,r),r+=t.len,t=t.next;return e},u._configure=function(t){n=t,u.create=d(),n._configure()}},3155:(t,e,r)=>{"use strict";t.exports=i;var n=r(1173);(i.prototype=Object.create(n.prototype)).constructor=i;var o=r(9693);function i(){n.call(this)}function s(t,e,r){t.length<40?o.utf8.write(t,e,r):e.utf8Write?e.utf8Write(t,r):e.write(t,r)}i._configure=function(){i.alloc=o._Buffer_allocUnsafe,i.writeBytesBuffer=o.Buffer&&o.Buffer.prototype instanceof Uint8Array&&"set"===o.Buffer.prototype.set.name?function(t,e,r){e.set(t,r)}:function(t,e,r){if(t.copy)t.copy(e,r,0,t.length);else for(var n=0;n<t.length;)e[r++]=t[n++]}},i.prototype.bytes=function(t){o.isString(t)&&(t=o._Buffer_from(t,"base64"));var e=t.length>>>0;return this.uint32(e),e&&this._push(i.writeBytesBuffer,e,t),this},i.prototype.string=function(t){var e=o.Buffer.byteLength(t);return this.uint32(e),e&&this._push(s,e,t),this},i._configure()},3286:(t,e,r)=>{const{instantiate:n}=r(9824);function o(t={}){if(!o.supported)return null;var e=new Uint8Array([0,97,115,109,1,0,0,0,1,78,14,96,2,127,126,0,96,1,127,1,126,96,2,127,127,0,96,1,127,1,127,96,1,127,0,96,2,127,127,1,127,96,3,127,127,127,1,127,96,0,0,96,3,127,127,127,0,96,0,1,127,96,4,127,127,127,127,0,96,5,127,127,127,127,127,1,127,96,1,126,1,127,96,2,126,126,1,126,2,13,1,3,101,110,118,5,97,98,111,114,116,0,10,3,54,53,2,2,8,9,3,5,2,8,6,5,3,4,2,6,9,12,13,2,5,11,3,2,3,2,3,2,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,6,7,7,4,4,5,3,1,0,1,6,47,9,127,1,65,0,11,127,1,65,0,11,127,0,65,3,11,127,0,65,4,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,0,65,240,2,11,127,0,65,6,11,7,240,5,41,6,109,101,109,111,114,121,2,0,7,95,95,97,108,108,111,99,0,10,8,95,95,114,101,116,97,105,110,0,11,9,95,95,114,101,108,101,97,115,101,0,12,9,95,95,99,111,108,108,101,99,116,0,51,11,95,95,114,116,116,105,95,98,97,115,101,3,7,13,73,110,116,51,50,65,114,114,97,121,95,73,68,3,2,13,85,105,110,116,56,65,114,114,97,121,95,73,68,3,3,6,100,101,103,114,101,101,0,16,3,109,111,100,0,17,5,82,97,98,105,110,3,8,16,82,97,98,105,110,35,103,101,116,58,119,105,110,100,111,119,0,21,16,82,97,98,105,110,35,115,101,116,58,119,105,110,100,111,119,0,22,21,82,97,98,105,110,35,103,101,116,58,119,105,110,100,111,119,95,115,105,122,101,0,23,21,82,97,98,105,110,35,115,101,116,58,119,105,110,100,111,119,95,115,105,122,101,0,24,14,82,97,98,105,110,35,103,101,116,58,119,112,111,115,0,25,14,82,97,98,105,110,35,115,101,116,58,119,112,111,115,0,26,15,82,97,98,105,110,35,103,101,116,58,99,111,117,110,116,0,27,15,82,97,98,105,110,35,115,101,116,58,99,111,117,110,116,0,28,13,82,97,98,105,110,35,103,101,116,58,112,111,115,0,29,13,82,97,98,105,110,35,115,101,116,58,112,111,115,0,30,15,82,97,98,105,110,35,103,101,116,58,115,116,97,114,116,0,31,15,82,97,98,105,110,35,115,101,116,58,115,116,97,114,116,0,32,16,82,97,98,105,110,35,103,101,116,58,100,105,103,101,115,116,0,33,16,82,97,98,105,110,35,115,101,116,58,100,105,103,101,115,116,0,34,21,82,97,98,105,110,35,103,101,116,58,99,104,117,110,107,95,115,116,97,114,116,0,35,21,82,97,98,105,110,35,115,101,116,58,99,104,117,110,107,95,115,116,97,114,116,0,36,22,82,97,98,105,110,35,103,101,116,58,99,104,117,110,107,95,108,101,110,103,116,104,0,37,22,82,97,98,105,110,35,115,101,116,58,99,104,117,110,107,95,108,101,110,103,116,104,0,38,31,82,97,98,105,110,35,103,101,116,58,99,104,117,110,107,95,99,117,116,95,102,105,110,103,101,114,112,114,105,110,116,0,39,31,82,97,98,105,110,35,115,101,116,58,99,104,117,110,107,95,99,117,116,95,102,105,110,103,101,114,112,114,105,110,116,0,40,20,82,97,98,105,110,35,103,101,116,58,112,111,108,121,110,111,109,105,97,108,0,41,20,82,97,98,105,110,35,115,101,116,58,112,111,108,121,110,111,109,105,97,108,0,42,17,82,97,98,105,110,35,103,101,116,58,109,105,110,115,105,122,101,0,43,17,82,97,98,105,110,35,115,101,116,58,109,105,110,115,105,122,101,0,44,17,82,97,98,105,110,35,103,101,116,58,109,97,120,115,105,122,101,0,45,17,82,97,98,105,110,35,115,101,116,58,109,97,120,115,105,122,101,0,46,14,82,97,98,105,110,35,103,101,116,58,109,97,115,107,0,47,14,82,97,98,105,110,35,115,101,116,58,109,97,115,107,0,48,17,82,97,98,105,110,35,99,111,110,115,116,114,117,99,116,111,114,0,20,17,82,97,98,105,110,35,102,105,110,103,101,114,112,114,105,110,116,0,49,8,1,50,10,165,31,53,199,1,1,4,127,32,1,40,2,0,65,124,113,34,2,65,128,2,73,4,127,32,2,65,4,118,33,4,65,0,5,32,2,65,31,32,2,103,107,34,3,65,4,107,118,65,16,115,33,4,32,3,65,7,107,11,33,3,32,1,40,2,20,33,2,32,1,40,2,16,34,5,4,64,32,5,32,2,54,2,20,11,32,2,4,64,32,2,32,5,54,2,16,11,32,1,32,0,32,4,32,3,65,4,116,106,65,2,116,106,40,2,96,70,4,64,32,0,32,4,32,3,65,4,116,106,65,2,116,106,32,2,54,2,96,32,2,69,4,64,32,0,32,3,65,2,116,106,32,0,32,3,65,2,116,106,40,2,4,65,1,32,4,116,65,127,115,113,34,1,54,2,4,32,1,69,4,64,32,0,32,0,40,2,0,65,1,32,3,116,65,127,115,113,54,2,0,11,11,11,11,226,2,1,6,127,32,1,40,2,0,33,3,32,1,65,16,106,32,1,40,2,0,65,124,113,106,34,4,40,2,0,34,5,65,1,113,4,64,32,3,65,124,113,65,16,106,32,5,65,124,113,106,34,2,65,240,255,255,255,3,73,4,64,32,0,32,4,16,1,32,1,32,2,32,3,65,3,113,114,34,3,54,2,0,32,1,65,16,106,32,1,40,2,0,65,124,113,106,34,4,40,2,0,33,5,11,11,32,3,65,2,113,4,64,32,1,65,4,107,40,2,0,34,2,40,2,0,34,6,65,124,113,65,16,106,32,3,65,124,113,106,34,7,65,240,255,255,255,3,73,4,64,32,0,32,2,16,1,32,2,32,7,32,6,65,3,113,114,34,3,54,2,0,32,2,33,1,11,11,32,4,32,5,65,2,114,54,2,0,32,4,65,4,107,32,1,54,2,0,32,0,32,3,65,124,113,34,2,65,128,2,73,4,127,32,2,65,4,118,33,4,65,0,5,32,2,65,31,32,2,103,107,34,2,65,4,107,118,65,16,115,33,4,32,2,65,7,107,11,34,3,65,4,116,32,4,106,65,2,116,106,40,2,96,33,2,32,1,65,0,54,2,16,32,1,32,2,54,2,20,32,2,4,64,32,2,32,1,54,2,16,11,32,0,32,4,32,3,65,4,116,106,65,2,116,106,32,1,54,2,96,32,0,32,0,40,2,0,65,1,32,3,116,114,54,2,0,32,0,32,3,65,2,116,106,32,0,32,3,65,2,116,106,40,2,4,65,1,32,4,116,114,54,2,4,11,119,1,1,127,32,2,2,127,32,0,40,2,160,12,34,2,4,64,32,2,32,1,65,16,107,70,4,64,32,2,40,2,0,33,3,32,1,65,16,107,33,1,11,11,32,1,11,107,34,2,65,48,73,4,64,15,11,32,1,32,3,65,2,113,32,2,65,32,107,65,1,114,114,54,2,0,32,1,65,0,54,2,16,32,1,65,0,54,2,20,32,1,32,2,106,65,16,107,34,2,65,2,54,2,0,32,0,32,2,54,2,160,12,32,0,32,1,16,2,11,155,1,1,3,127,35,0,34,0,69,4,64,65,1,63,0,34,0,74,4,127,65,1,32,0,107,64,0,65,0,72,5,65,0,11,4,64,0,11,65,176,3,34,0,65,0,54,2,0,65,208,15,65,0,54,2,0,3,64,32,1,65,23,73,4,64,32,1,65,2,116,65,176,3,106,65,0,54,2,4,65,0,33,2,3,64,32,2,65,16,73,4,64,32,1,65,4,116,32,2,106,65,2,116,65,176,3,106,65,0,54,2,96,32,2,65,1,106,33,2,12,1,11,11,32,1,65,1,106,33,1,12,1,11,11,65,176,3,65,224,15,63,0,65,16,116,16,3,65,176,3,36,0,11,32,0,11,45,0,32,0,65,240,255,255,255,3,79,4,64,65,32,65,224,0,65,201,3,65,29,16,0,0,11,32,0,65,15,106,65,112,113,34,0,65,16,32,0,65,16,75,27,11,169,1,1,1,127,32,0,32,1,65,128,2,73,4,127,32,1,65,4,118,33,1,65,0,5,32,1,65,248,255,255,255,1,73,4,64,32,1,65,1,65,27,32,1,103,107,116,106,65,1,107,33,1,11,32,1,65,31,32,1,103,107,34,2,65,4,107,118,65,16,115,33,1,32,2,65,7,107,11,34,2,65,2,116,106,40,2,4,65,127,32,1,116,113,34,1,4,127,32,0,32,1,104,32,2,65,4,116,106,65,2,116,106,40,2,96,5,32,0,40,2,0,65,127,32,2,65,1,106,116,113,34,1,4,127,32,0,32,0,32,1,104,34,0,65,2,116,106,40,2,4,104,32,0,65,4,116,106,65,2,116,106,40,2,96,5,65,0,11,11,11,111,1,1,127,63,0,34,2,32,1,65,248,255,255,255,1,73,4,127,32,1,65,1,65,27,32,1,103,107,116,65,1,107,106,5,32,1,11,65,16,32,0,40,2,160,12,32,2,65,16,116,65,16,107,71,116,106,65,255,255,3,106,65,128,128,124,113,65,16,118,34,1,32,2,32,1,74,27,64,0,65,0,72,4,64,32,1,64,0,65,0,72,4,64,0,11,11,32,0,32,2,65,16,116,63,0,65,16,116,16,3,11,113,1,2,127,32,1,40,2,0,34,3,65,124,113,32,2,107,34,4,65,32,79,4,64,32,1,32,2,32,3,65,2,113,114,54,2,0,32,2,32,1,65,16,106,106,34,1,32,4,65,16,107,65,1,114,54,2,0,32,0,32,1,16,2,5,32,1,32,3,65,126,113,54,2,0,32,1,65,16,106,32,1,40,2,0,65,124,113,106,32,1,65,16,106,32,1,40,2,0,65,124,113,106,40,2,0,65,125,113,54,2,0,11,11,91,1,2,127,32,0,32,1,16,5,34,4,16,6,34,3,69,4,64,65,1,36,1,65,0,36,1,32,0,32,4,16,6,34,3,69,4,64,32,0,32,4,16,7,32,0,32,4,16,6,33,3,11,11,32,3,65,0,54,2,4,32,3,32,2,54,2,8,32,3,32,1,54,2,12,32,0,32,3,16,1,32,0,32,3,32,4,16,8,32,3,11,13,0,16,4,32,0,32,1,16,9,65,16,106,11,33,1,1,127,32,0,65,172,3,75,4,64,32,0,65,16,107,34,1,32,1,40,2,4,65,1,106,54,2,4,11,32,0,11,18,0,32,0,65,172,3,75,4,64,32,0,65,16,107,16,52,11,11,140,3,1,1,127,2,64,32,1,69,13,0,32,0,65,0,58,0,0,32,0,32,1,106,65,1,107,65,0,58,0,0,32,1,65,2,77,13,0,32,0,65,1,106,65,0,58,0,0,32,0,65,2,106,65,0,58,0,0,32,0,32,1,106,34,2,65,2,107,65,0,58,0,0,32,2,65,3,107,65,0,58,0,0,32,1,65,6,77,13,0,32,0,65,3,106,65,0,58,0,0,32,0,32,1,106,65,4,107,65,0,58,0,0,32,1,65,8,77,13,0,32,1,65,0,32,0,107,65,3,113,34,1,107,33,2,32,0,32,1,106,34,0,65,0,54,2,0,32,0,32,2,65,124,113,34,1,106,65,4,107,65,0,54,2,0,32,1,65,8,77,13,0,32,0,65,4,106,65,0,54,2,0,32,0,65,8,106,65,0,54,2,0,32,0,32,1,106,34,2,65,12,107,65,0,54,2,0,32,2,65,8,107,65,0,54,2,0,32,1,65,24,77,13,0,32,0,65,12,106,65,0,54,2,0,32,0,65,16,106,65,0,54,2,0,32,0,65,20,106,65,0,54,2,0,32,0,65,24,106,65,0,54,2,0,32,0,32,1,106,34,2,65,28,107,65,0,54,2,0,32,2,65,24,107,65,0,54,2,0,32,2,65,20,107,65,0,54,2,0,32,2,65,16,107,65,0,54,2,0,32,0,32,0,65,4,113,65,24,106,34,2,106,33,0,32,1,32,2,107,33,1,3,64,32,1,65,32,79,4,64,32,0,66,0,55,3,0,32,0,65,8,106,66,0,55,3,0,32,0,65,16,106,66,0,55,3,0,32,0,65,24,106,66,0,55,3,0,32,1,65,32,107,33,1,32,0,65,32,106,33,0,12,1,11,11,11,11,178,1,1,3,127,32,1,65,240,255,255,255,3,32,2,118,75,4,64,65,144,1,65,192,1,65,23,65,56,16,0,0,11,32,1,32,2,116,34,3,65,0,16,10,34,2,32,3,16,13,32,0,69,4,64,65,12,65,2,16,10,34,0,65,172,3,75,4,64,32,0,65,16,107,34,1,32,1,40,2,4,65,1,106,54,2,4,11,11,32,0,65,0,54,2,0,32,0,65,0,54,2,4,32,0,65,0,54,2,8,32,2,34,1,32,0,40,2,0,34,4,71,4,64,32,1,65,172,3,75,4,64,32,1,65,16,107,34,5,32,5,40,2,4,65,1,106,54,2,4,11,32,4,16,12,11,32,0,32,1,54,2,0,32,0,32,2,54,2,4,32,0,32,3,54,2,8,32,0,11,46,1,2,127,65,12,65,5,16,10,34,0,65,172,3,75,4,64,32,0,65,16,107,34,1,32,1,40,2,4,65,1,106,54,2,4,11,32,0,65,128,2,65,3,16,14,11,9,0,65,63,32,0,121,167,107,11,49,1,2,127,65,63,32,1,121,167,107,33,2,3,64,65,63,32,0,121,167,107,32,2,107,34,3,65,0,78,4,64,32,0,32,1,32,3,172,134,133,33,0,12,1,11,11,32,0,11,40,0,32,1,32,0,40,2,8,79,4,64,65,128,2,65,192,2,65,163,1,65,44,16,0,0,11,32,1,32,0,40,2,4,106,65,0,58,0,0,11,38,0,32,1,32,0,40,2,8,79,4,64,65,128,2,65,192,2,65,152,1,65,44,16,0,0,11,32,1,32,0,40,2,4,106,45,0,0,11,254,5,2,1,127,4,126,32,0,69,4,64,65,232,0,65,6,16,10,34,0,65,172,3,75,4,64,32,0,65,16,107,34,5,32,5,40,2,4,65,1,106,54,2,4,11,11,32,0,65,0,54,2,0,32,0,65,0,54,2,4,32,0,65,0,54,2,8,32,0,66,0,55,3,16,32,0,66,0,55,3,24,32,0,66,0,55,3,32,32,0,66,0,55,3,40,32,0,66,0,55,3,48,32,0,66,0,55,3,56,32,0,66,0,55,3,64,32,0,66,0,55,3,72,32,0,66,0,55,3,80,32,0,66,0,55,3,88,32,0,66,0,55,3,96,32,0,32,2,173,55,3,80,32,0,32,3,173,55,3,88,65,12,65,4,16,10,34,2,65,172,3,75,4,64,32,2,65,16,107,34,3,32,3,40,2,4,65,1,106,54,2,4,11,32,2,32,4,65,0,16,14,33,2,32,0,40,2,0,16,12,32,0,32,2,54,2,0,32,0,32,4,54,2,4,32,0,66,1,32,1,173,134,66,1,125,55,3,96,32,0,66,243,130,183,218,216,230,232,30,55,3,72,35,4,69,4,64,65,0,33,2,3,64,32,2,65,128,2,72,4,64,32,2,65,255,1,113,173,33,6,32,0,41,3,72,34,7,33,8,65,63,32,7,121,167,107,33,1,3,64,65,63,32,6,121,167,107,32,1,107,34,3,65,0,78,4,64,32,6,32,8,32,3,172,134,133,33,6,12,1,11,11,65,0,33,4,3,64,32,4,32,0,40,2,4,65,1,107,72,4,64,32,6,66,8,134,33,6,32,0,41,3,72,34,7,33,8,65,63,32,7,121,167,107,33,1,3,64,65,63,32,6,121,167,107,32,1,107,34,3,65,0,78,4,64,32,6,32,8,32,3,172,134,133,33,6,12,1,11,11,32,4,65,1,106,33,4,12,1,11,11,35,6,40,2,4,32,2,65,3,116,106,32,6,55,3,0,32,2,65,1,106,33,2,12,1,11,11,65,63,32,0,41,3,72,121,167,107,172,33,7,65,0,33,2,3,64,32,2,65,128,2,72,4,64,35,5,33,1,32,2,172,32,7,134,34,8,33,6,65,63,32,0,41,3,72,34,9,121,167,107,33,3,3,64,65,63,32,6,121,167,107,32,3,107,34,4,65,0,78,4,64,32,6,32,9,32,4,172,134,133,33,6,12,1,11,11,32,1,40,2,4,32,2,65,3,116,106,32,6,32,8,132,55,3,0,32,2,65,1,106,33,2,12,1,11,11,65,1,36,4,11,32,0,66,0,55,3,24,32,0,66,0,55,3,32,65,0,33,2,3,64,32,2,32,0,40,2,4,72,4,64,32,0,40,2,0,32,2,16,18,32,2,65,1,106,33,2,12,1,11,11,32,0,66,0,55,3,40,32,0,65,0,54,2,8,32,0,66,0,55,3,16,32,0,66,0,55,3,40,32,0,40,2,0,32,0,40,2,8,16,19,33,1,32,0,40,2,8,32,0,40,2,0,40,2,4,106,65,1,58,0,0,32,0,32,0,41,3,40,35,6,40,2,4,32,1,65,3,116,106,41,3,0,133,55,3,40,32,0,32,0,40,2,8,65,1,106,32,0,40,2,4,111,54,2,8,32,0,35,5,40,2,4,32,0,41,3,40,34,6,66,45,136,167,65,3,116,106,41,3,0,32,6,66,8,134,66,1,132,133,55,3,40,32,0,11,38,1,1,127,32,0,40,2,0,34,0,65,172,3,75,4,64,32,0,65,16,107,34,1,32,1,40,2,4,65,1,106,54,2,4,11,32,0,11,55,1,2,127,32,1,32,0,40,2,0,34,2,71,4,64,32,1,65,172,3,75,4,64,32,1,65,16,107,34,3,32,3,40,2,4,65,1,106,54,2,4,11,32,2,16,12,11,32,0,32,1,54,2,0,11,7,0,32,0,40,2,4,11,9,0,32,0,32,1,54,2,4,11,7,0,32,0,40,2,8,11,9,0,32,0,32,1,54,2,8,11,7,0,32,0,41,3,16,11,9,0,32,0,32,1,55,3,16,11,7,0,32,0,41,3,24,11,9,0,32,0,32,1,55,3,24,11,7,0,32,0,41,3,32,11,9,0,32,0,32,1,55,3,32,11,7,0,32,0,41,3,40,11,9,0,32,0,32,1,55,3,40,11,7,0,32,0,41,3,48,11,9,0,32,0,32,1,55,3,48,11,7,0,32,0,41,3,56,11,9,0,32,0,32,1,55,3,56,11,7,0,32,0,41,3,64,11,9,0,32,0,32,1,55,3,64,11,7,0,32,0,41,3,72,11,9,0,32,0,32,1,55,3,72,11,7,0,32,0,41,3,80,11,9,0,32,0,32,1,55,3,80,11,7,0,32,0,41,3,88,11,9,0,32,0,32,1,55,3,88,11,7,0,32,0,41,3,96,11,9,0,32,0,32,1,55,3,96,11,172,4,2,5,127,1,126,32,2,65,172,3,75,4,64,32,2,65,16,107,34,4,32,4,40,2,4,65,1,106,54,2,4,11,32,2,33,4,65,0,33,2,32,1,40,2,8,33,5,32,1,40,2,4,33,6,3,64,2,127,65,0,33,3,3,64,32,3,32,5,72,4,64,32,3,32,6,106,45,0,0,33,1,32,0,40,2,0,32,0,40,2,8,16,19,33,7,32,0,40,2,8,32,0,40,2,0,40,2,4,106,32,1,58,0,0,32,0,32,0,41,3,40,35,6,40,2,4,32,7,65,3,116,106,41,3,0,133,55,3,40,32,0,32,0,40,2,8,65,1,106,32,0,40,2,4,111,54,2,8,32,0,35,5,40,2,4,32,0,41,3,40,34,8,66,45,136,167,65,3,116,106,41,3,0,32,1,173,32,8,66,8,134,132,133,55,3,40,32,0,32,0,41,3,16,66,1,124,55,3,16,32,0,32,0,41,3,24,66,1,124,55,3,24,32,0,41,3,16,32,0,41,3,80,90,4,127,32,0,41,3,40,32,0,41,3,96,131,80,5,65,0,11,4,127,65,1,5,32,0,41,3,16,32,0,41,3,88,90,11,4,64,32,0,32,0,41,3,32,55,3,48,32,0,32,0,41,3,16,55,3,56,32,0,32,0,41,3,40,55,3,64,65,0,33,1,3,64,32,1,32,0,40,2,4,72,4,64,32,0,40,2,0,32,1,16,18,32,1,65,1,106,33,1,12,1,11,11,32,0,66,0,55,3,40,32,0,65,0,54,2,8,32,0,66,0,55,3,16,32,0,66,0,55,3,40,32,0,40,2,0,32,0,40,2,8,16,19,33,1,32,0,40,2,8,32,0,40,2,0,40,2,4,106,65,1,58,0,0,32,0,32,0,41,3,40,35,6,40,2,4,32,1,65,3,116,106,41,3,0,133,55,3,40,32,0,32,0,40,2,8,65,1,106,32,0,40,2,4,111,54,2,8,32,0,35,5,40,2,4,32,0,41,3,40,34,8,66,45,136,167,65,3,116,106,41,3,0,32,8,66,8,134,66,1,132,133,55,3,40,32,3,65,1,106,12,3,11,32,3,65,1,106,33,3,12,1,11,11,65,127,11,34,1,65,0,78,4,64,32,5,32,1,107,33,5,32,1,32,6,106,33,6,32,2,34,1,65,1,106,33,2,32,4,40,2,4,32,1,65,2,116,106,32,0,41,3,56,62,2,0,12,1,11,11,32,4,11,10,0,16,15,36,5,16,15,36,6,11,3,0,1,11,73,1,2,127,32,0,40,2,4,34,1,65,255,255,255,255,0,113,34,2,65,1,70,4,64,32,0,65,16,106,16,53,32,0,32,0,40,2,0,65,1,114,54,2,0,35,0,32,0,16,2,5,32,0,32,2,65,1,107,32,1,65,128,128,128,128,127,113,114,54,2,4,11,11,58,0,2,64,2,64,2,64,32,0,65,8,107,40,2,0,14,7,0,0,1,1,1,1,1,2,11,15,11,32,0,40,2,0,34,0,4,64,32,0,65,172,3,79,4,64,32,0,65,16,107,16,52,11,11,15,11,0,11,11,137,3,7,0,65,16,11,55,40,0,0,0,1,0,0,0,1,0,0,0,40,0,0,0,97,0,108,0,108,0,111,0,99,0,97,0,116,0,105,0,111,0,110,0,32,0,116,0,111,0,111,0,32,0,108,0,97,0,114,0,103,0,101,0,65,208,0,11,45,30,0,0,0,1,0,0,0,1,0,0,0,30,0,0,0,126,0,108,0,105,0,98,0,47,0,114,0,116,0,47,0,116,0,108,0,115,0,102,0,46,0,116,0,115,0,65,128,1,11,43,28,0,0,0,1,0,0,0,1,0,0,0,28,0,0,0,73,0,110,0,118,0,97,0,108,0,105,0,100,0,32,0,108,0,101,0,110,0,103,0,116,0,104,0,65,176,1,11,53,38,0,0,0,1,0,0,0,1,0,0,0,38,0,0,0,126,0,108,0,105,0,98,0,47,0,97,0,114,0,114,0,97,0,121,0,98,0,117,0,102,0,102,0,101,0,114,0,46,0,116,0,115,0,65,240,1,11,51,36,0,0,0,1,0,0,0,1,0,0,0,36,0,0,0,73,0,110,0,100,0,101,0,120,0,32,0,111,0,117,0,116,0,32,0,111,0,102,0,32,0,114,0,97,0,110,0,103,0,101,0,65,176,2,11,51,36,0,0,0,1,0,0,0,1,0,0,0,36,0,0,0,126,0,108,0,105,0,98,0,47,0,116,0,121,0,112,0,101,0,100,0,97,0,114,0,114,0,97,0,121,0,46,0,116,0,115,0,65,240,2,11,53,7,0,0,0,16,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,145,4,0,0,2,0,0,0,49,0,0,0,2,0,0,0,17,1,0,0,2,0,0,0,16,0,34,16,115,111,117,114,99,101,77,97,112,112,105,110,103,85,82,76,16,46,47,114,97,98,105,110,46,119,97,115,109,46,109,97,112]);return n(new Response(new Blob([e],{type:"application/wasm"})),t)}o.supported="undefined"!=typeof WebAssembly,t.exports=o},3060:(t,e,r)=>{const n=r(7118),o=r(3286);t.exports={Rabin:n,create:async(t,e,r,i,s)=>{const a=await o();return new n(a,t,e,r,i,s)}}},7118:t=>{t.exports=class{constructor(t,e=12,r=8192,n=32768,o=64,i){this.bits=e,this.min=r,this.max=n,this.asModule=t,this.rabin=new t.Rabin(e,r,n,o,i),this.polynomial=i}fingerprint(t){const{__retain:e,__release:r,__allocArray:n,__getInt32Array:o,Int32Array_ID:i,Uint8Array_ID:s}=this.asModule,a=e(n(i,new Int32Array(Math.ceil(t.length/this.min)))),l=e(n(s,t)),c=o(this.rabin.fingerprint(l,a));r(l),r(a);const h=c.indexOf(0);return h>=0?c.subarray(0,h):c}}},9353:(t,e,r)=>{t.exports=r(1846)},1846:(t,e,r)=>{var n=r(1960);e.operation=function(t){var r=e.timeouts(t);return new n(r,{forever:t&&(t.forever||t.retries===1/0),unref:t&&t.unref,maxRetryTime:t&&t.maxRetryTime})},e.timeouts=function(t){if(t instanceof Array)return[].concat(t);var e={retries:10,factor:2,minTimeout:1e3,maxTimeout:1/0,randomize:!1};for(var r in t)e[r]=t[r];if(e.minTimeout>e.maxTimeout)throw new Error("minTimeout is greater than maxTimeout");for(var n=[],o=0;o<e.retries;o++)n.push(this.createTimeout(o,e));return t&&t.forever&&!n.length&&n.push(this.createTimeout(o,e)),n.sort((function(t,e){return t-e})),n},e.createTimeout=function(t,e){var r=e.randomize?Math.random()+1:1,n=Math.round(r*Math.max(e.minTimeout,1)*Math.pow(e.factor,t));return n=Math.min(n,e.maxTimeout)},e.wrap=function(t,r,n){if(r instanceof Array&&(n=r,r=null),!n)for(var o in n=[],t)"function"==typeof t[o]&&n.push(o);for(var i=0;i<n.length;i++){var s=n[i],a=t[s];t[s]=function(n){var o=e.operation(r),i=Array.prototype.slice.call(arguments,1),s=i.pop();i.push((function(t){o.retry(t)||(t&&(arguments[0]=o.mainError()),s.apply(this,arguments))})),o.attempt((function(){n.apply(t,i)}))}.bind(t,a),t[s].options=r}}},1960:t=>{function e(t,e){"boolean"==typeof e&&(e={forever:e}),this._originalTimeouts=JSON.parse(JSON.stringify(t)),this._timeouts=t,this._options=e||{},this._maxRetryTime=e&&e.maxRetryTime||1/0,this._fn=null,this._errors=[],this._attempts=1,this._operationTimeout=null,this._operationTimeoutCb=null,this._timeout=null,this._operationStart=null,this._timer=null,this._options.forever&&(this._cachedTimeouts=this._timeouts.slice(0))}t.exports=e,e.prototype.reset=function(){this._attempts=1,this._timeouts=this._originalTimeouts.slice(0)},e.prototype.stop=function(){this._timeout&&clearTimeout(this._timeout),this._timer&&clearTimeout(this._timer),this._timeouts=[],this._cachedTimeouts=null},e.prototype.retry=function(t){if(this._timeout&&clearTimeout(this._timeout),!t)return!1;var e=(new Date).getTime();if(t&&e-this._operationStart>=this._maxRetryTime)return this._errors.push(t),this._errors.unshift(new Error("RetryOperation timeout occurred")),!1;this._errors.push(t);var r=this._timeouts.shift();if(void 0===r){if(!this._cachedTimeouts)return!1;this._errors.splice(0,this._errors.length-1),r=this._cachedTimeouts.slice(-1)}var n=this;return this._timer=setTimeout((function(){n._attempts++,n._operationTimeoutCb&&(n._timeout=setTimeout((function(){n._operationTimeoutCb(n._attempts)}),n._operationTimeout),n._options.unref&&n._timeout.unref()),n._fn(n._attempts)}),r),this._options.unref&&this._timer.unref(),!0},e.prototype.attempt=function(t,e){this._fn=t,e&&(e.timeout&&(this._operationTimeout=e.timeout),e.cb&&(this._operationTimeoutCb=e.cb));var r=this;this._operationTimeoutCb&&(this._timeout=setTimeout((function(){r._operationTimeoutCb()}),r._operationTimeout)),this._operationStart=(new Date).getTime(),this._fn(this._attempts)},e.prototype.try=function(t){console.log("Using RetryOperation.try() is deprecated"),this.attempt(t)},e.prototype.start=function(t){console.log("Using RetryOperation.start() is deprecated"),this.attempt(t)},e.prototype.start=e.prototype.try,e.prototype.errors=function(){return this._errors},e.prototype.attempts=function(){return this._attempts},e.prototype.mainError=function(){if(0===this._errors.length)return null;for(var t={},e=null,r=0,n=0;n<this._errors.length;n++){var o=this._errors[n],i=o.message,s=(t[i]||0)+1;t[i]=s,s>=r&&(e=o,r=s)}return e}},544:t=>{"use strict";function e(t,e){return t+r(e)}function r(t){let e=t;return e-=e>>1&1431655765,e=(858993459&e)+(e>>2&858993459),16843009*(e+(e>>4)&252645135)>>24}function n(t,e){return t[0]-e[0]}function o(t){return t[1]}t.exports=class{constructor(){this._bitArrays=[],this._data=[],this._length=0,this._changedLength=!1,this._changedData=!1}set(t,e){let r=this._internalPositionFor(t,!1);if(void 0===e)-1!==r&&(this._unsetInternalPos(r),this._unsetBit(t),this._changedLength=!0,this._changedData=!0);else{let n=!1;-1===r?(r=this._data.length,this._setBit(t),this._changedData=!0):n=!0,this._setInternalPos(r,t,e,n),this._changedLength=!0}}unset(t){this.set(t,void 0)}get(t){this._sortData();const e=this._internalPositionFor(t,!0);if(-1!==e)return this._data[e][1]}push(t){return this.set(this.length,t),this.length}get length(){if(this._sortData(),this._changedLength){const t=this._data[this._data.length-1];this._length=t?t[0]+1:0,this._changedLength=!1}return this._length}forEach(t){let e=0;for(;e<this.length;)t(this.get(e),e,this),e++}map(t){let e=0,r=new Array(this.length);for(;e<this.length;)r[e]=t(this.get(e),e,this),e++;return r}reduce(t,e){let r=0,n=e;for(;r<this.length;){n=t(n,this.get(r),r),r++}return n}find(t){let e,r,n=0;for(;n<this.length&&!e;)r=this.get(n),e=t(r),n++;return e?r:void 0}_internalPositionFor(t,n){const o=this._bytePosFor(t,n);if(o>=this._bitArrays.length)return-1;const i=this._bitArrays[o],s=t-7*o;if(!((i&1<<s)>0))return-1;return this._bitArrays.slice(0,o).reduce(e,0)+r(i&~(4294967295<<s+1))-1}_bytePosFor(t,e){const r=Math.floor(t/7),n=r+1;for(;!e&&this._bitArrays.length<n;)this._bitArrays.push(0);return r}_setBit(t){const e=this._bytePosFor(t,!1);this._bitArrays[e]|=1<<t-7*e}_unsetBit(t){const e=this._bytePosFor(t,!1);this._bitArrays[e]&=~(1<<t-7*e)}_setInternalPos(t,e,r,n){const o=this._data,i=[e,r];if(n)this._sortData(),o[t]=i;else{if(o.length)if(o[o.length-1][0]>=e)o.push(i);else if(o[0][0]<=e)o.unshift(i);else{const t=Math.round(o.length/2);this._data=o.slice(0,t).concat(i).concat(o.slice(t))}else this._data.push(i);this._changedData=!0,this._changedLength=!0}}_unsetInternalPos(t){this._data.splice(t,1)}_sortData(){this._changedData&&this._data.sort(n),this._changedData=!1}bitField(){const t=[];let e,r=8,n=0,o=0;const i=this._bitArrays.slice();for(;i.length||n;){0===n&&(e=i.shift(),n=7);const s=Math.min(n,r);o|=(e&~(255<<s))<<8-r,e>>>=s,n-=s,r-=s,r&&(n||i.length)||(t.push(o),o=0,r=8)}for(var s=t.length-1;s>0;s--){if(0!==t[s])break;t.pop()}return t}compactArray(){return this._sortData(),this._data.map(o)}}},3379:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},s=[],a=0;a<t.length;a++){var l=t[a],c=n.base?l[0]+n.base:l[0],h=i[c]||0,u="".concat(c," ").concat(h);i[c]=h+1;var d=r(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var f=o(p,n);n.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(t,e){var r=e.domAPI(e);r.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=r(i[s]);e[a].references--}for(var l=n(t,o),c=0;c<i.length;c++){var h=r(i[c]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}i=l}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},9216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},7795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},6988:t=>{t.exports=function t(e,r){var n,o=0,i=0,s=r=r||0,a=e.length;do{if(s>=a||i>49)throw t.bytes=0,new RangeError("Could not decode varint");n=e[s++],o+=i<28?(127&n)<<i:(127&n)*Math.pow(2,i),i+=7}while(n>=128);return t.bytes=s-r,o}},1312:t=>{t.exports=function t(r,n,o){if(Number.MAX_SAFE_INTEGER&&r>Number.MAX_SAFE_INTEGER)throw t.bytes=0,new RangeError("Could not encode varint");n=n||[];var i=o=o||0;for(;r>=e;)n[o++]=255&r|128,r/=128;for(;-128&r;)n[o++]=255&r|128,r>>>=7;return n[o]=0|r,t.bytes=o-i+1,n};var e=Math.pow(2,31)},4676:(t,e,r)=>{t.exports={encode:r(1312),decode:r(6988),encodingLength:r(82)}},82:t=>{var e=Math.pow(2,7),r=Math.pow(2,14),n=Math.pow(2,21),o=Math.pow(2,28),i=Math.pow(2,35),s=Math.pow(2,42),a=Math.pow(2,49),l=Math.pow(2,56),c=Math.pow(2,63);t.exports=function(t){return t<e?1:t<r?2:t<n?3:t<o?4:t<i?5:t<s?6:t<a?7:t<l?8:t<c?9:10}},9880:(t,e,r)=>{"use strict";r.d(e,{kU:()=>u,Dp:()=>h,ET:()=>d});var n=function(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var o=0;o<t.length;o++){var i=t.charAt(o),s=i.charCodeAt(0);if(255!==r[s])throw new TypeError(i+" is ambiguous");r[s]=o}var a=t.length,l=t.charAt(0),c=Math.log(a)/Math.log(256),h=Math.log(256)/Math.log(a);function u(t){if("string"!=typeof t)throw new TypeError("Expected String");if(0===t.length)return new Uint8Array;var e=0;if(" "!==t[e]){for(var n=0,o=0;t[e]===l;)n++,e++;for(var i=(t.length-e)*c+1>>>0,s=new Uint8Array(i);t[e];){var h=r[t.charCodeAt(e)];if(255===h)return;for(var u=0,d=i-1;(0!==h||u<o)&&-1!==d;d--,u++)h+=a*s[d]>>>0,s[d]=h%256>>>0,h=h/256>>>0;if(0!==h)throw new Error("Non-zero carry");o=u,e++}if(" "!==t[e]){for(var p=i-o;p!==i&&0===s[p];)p++;for(var f=new Uint8Array(n+(i-p)),b=n;p!==i;)f[b++]=s[p++];return f}}}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===e.length)return"";for(var r=0,n=0,o=0,i=e.length;o!==i&&0===e[o];)o++,r++;for(var s=(i-o)*h+1>>>0,c=new Uint8Array(s);o!==i;){for(var u=e[o],d=0,p=s-1;(0!==u||d<n)&&-1!==p;p--,d++)u+=256*c[p]>>>0,c[p]=u%a>>>0,u=u/a>>>0;if(0!==u)throw new Error("Non-zero carry");n=d,o++}for(var f=s-n;f!==s&&0===c[f];)f++;for(var b=l.repeat(r);f<s;++f)b+=t.charAt(c[f]);return b},decodeUnsafe:u,decode:function(t){var r=u(t);if(r)return r;throw new Error(`Non-${e} character`)}}};const o=n;var i=r(5934);class s{constructor(t,e,r){this.name=t,this.prefix=e,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class a{constructor(t,e,r){this.name=t,this.prefix=e,this.baseDecode=r}decode(t){if("string"==typeof t){if(t[0]===this.prefix)return this.baseDecode(t.slice(1));throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`)}throw Error("Can only multibase decode strings")}or(t){const e={[this.prefix]:this,...t.decoders||{[t.prefix]:t}};return new l(e)}}class l{constructor(t){this.decoders=t}or(t){const e=t.decoders||{[t.prefix]:t};return new l({...this.decoders,...e})}decode(t){const e=t[0],r=this.decoders[e];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}class c{constructor(t,e,r,n){this.name=t,this.prefix=e,this.baseEncode=r,this.baseDecode=n,this.encoder=new s(t,e,r),this.decoder=new a(t,e,n)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}const h=({name:t,prefix:e,encode:r,decode:n})=>new c(t,e,r,n),u=({prefix:t,name:e,alphabet:r})=>{const{encode:n,decode:s}=o(r,e);return h({prefix:t,name:e,encode:n,decode:t=>(0,i.coerce)(s(t))})},d=({name:t,prefix:e,bitsPerChar:r,alphabet:n})=>h({prefix:e,name:t,encode:t=>((t,e,r)=>{const n="="===e[e.length-1],o=(1<<r)-1;let i="",s=0,a=0;for(let n=0;n<t.length;++n)for(a=a<<8|t[n],s+=8;s>r;)s-=r,i+=e[o&a>>s];if(s&&(i+=e[o&a<<r-s]),n)for(;i.length*r&7;)i+="=";return i})(t,n,r),decode:e=>((t,e,r,n)=>{const o={};for(let t=0;t<e.length;++t)o[e[t]]=t;let i=t.length;for(;"="===t[i-1];)--i;const s=new Uint8Array(i*r/8|0);let a=0,l=0,c=0;for(let e=0;e<i;++e){const i=o[t[e]];if(void 0===i)throw new SyntaxError(`Non-${n} character`);l=l<<r|i,a+=r,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=r||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s})(e,n,r,t)})},2817:(t,e,r)=>{"use strict";r.r(e),r.d(e,{base32:()=>o,base32hex:()=>l,base32hexpad:()=>h,base32hexpadupper:()=>u,base32hexupper:()=>c,base32pad:()=>s,base32padupper:()=>a,base32upper:()=>i,base32z:()=>d});var n=r(9880);const o=(0,n.ET)({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),i=(0,n.ET)({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),s=(0,n.ET)({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),a=(0,n.ET)({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),l=(0,n.ET)({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),c=(0,n.ET)({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),h=(0,n.ET)({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),u=(0,n.ET)({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),d=(0,n.ET)({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5})},9086:(t,e,r)=>{"use strict";r.r(e),r.d(e,{base58btc:()=>o,base58flickr:()=>i});var n=r(9880);const o=(0,n.kU)({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),i=(0,n.kU)({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"})},5934:(t,e,r)=>{"use strict";r.r(e),r.d(e,{coerce:()=>a,empty:()=>n,equals:()=>s,fromHex:()=>i,fromString:()=>c,isBinary:()=>l,toHex:()=>o,toString:()=>h});const n=new Uint8Array(0),o=t=>t.reduce(((t,e)=>t+e.toString(16).padStart(2,"0")),""),i=t=>{const e=t.match(/../g);return e?new Uint8Array(e.map((t=>parseInt(t,16)))):n},s=(t,e)=>{if(t===e)return!0;if(t.byteLength!==e.byteLength)return!1;for(let r=0;r<t.byteLength;r++)if(t[r]!==e[r])return!1;return!0},a=t=>{if(t instanceof Uint8Array&&"Uint8Array"===t.constructor.name)return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},l=t=>t instanceof ArrayBuffer||ArrayBuffer.isView(t),c=t=>(new TextEncoder).encode(t),h=t=>(new TextDecoder).decode(t)},1362:(t,e,r)=>{"use strict";r.d(e,{k:()=>l});var n=r(4714),o=r(8924),i=r(9086),s=r(2817),a=r(5934);class l{constructor(t,e,r,n){this.code=e,this.version=t,this.multihash=r,this.bytes=n,this.byteOffset=n.byteOffset,this.byteLength=n.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:y,byteLength:y,code:g,version:g,multihash:g,bytes:g,_baseCache:y,asCID:y})}toV0(){if(0===this.version)return this;{const{code:t,multihash:e}=this;if(t!==d)throw new Error("Cannot convert a non dag-pb CID to CIDv0");if(e.code!==p)throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");return l.createV0(e)}}toV1(){switch(this.version){case 0:{const{code:t,digest:e}=this.multihash,r=o.Ue(t,e);return l.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(t){return t&&this.code===t.code&&this.version===t.version&&o.fS(this.multihash,t.multihash)}toString(t){const{bytes:e,version:r,_baseCache:n}=this;return 0===r?h(e,n,t||i.base58btc.encoder):u(e,n,t||s.base32.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(t){return m(/^0\.0/,w),!(!t||!t[b]&&t.asCID!==t)}get toBaseEncodedString(){throw new Error("Deprecated, use .toString()")}get codec(){throw new Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw new Error('"multibaseName" property is deprecated')}get prefix(){throw new Error('"prefix" property is deprecated')}static asCID(t){if(t instanceof l)return t;if(null!=t&&t.asCID===t){const{version:e,code:r,multihash:n,bytes:o}=t;return new l(e,r,n,o||f(e,r,n.bytes))}if(null!=t&&!0===t[b]){const{version:e,multihash:r,code:n}=t,i=o.Jx(r);return l.create(e,n,i)}return null}static create(t,e,r){if("number"!=typeof e)throw new Error("String codecs are no longer supported");switch(t){case 0:if(e!==d)throw new Error(`Version 0 CID must use dag-pb (code: ${d}) block encoding`);return new l(t,e,r,r.bytes);case 1:{const n=f(t,e,r.bytes);return new l(t,e,r,n)}default:throw new Error("Invalid version")}}static createV0(t){return l.create(0,d,t)}static createV1(t,e){return l.create(1,t,e)}static decode(t){const[e,r]=l.decodeFirst(t);if(r.length)throw new Error("Incorrect length");return e}static decodeFirst(t){const e=l.inspectBytes(t),r=e.size-e.multihashSize,n=(0,a.coerce)(t.subarray(r,r+e.multihashSize));if(n.byteLength!==e.multihashSize)throw new Error("Incorrect length");const i=n.subarray(e.multihashSize-e.digestSize),s=new o.zZ(e.multihashCode,e.digestSize,i,n);return[0===e.version?l.createV0(s):l.createV1(e.codec,s),t.subarray(e.size)]}static inspectBytes(t){let e=0;const r=()=>{const[r,o]=n.Jx(t.subarray(e));return e+=o,r};let o=r(),i=d;if(18===o?(o=0,e=0):1===o&&(i=r()),0!==o&&1!==o)throw new RangeError(`Invalid CID version ${o}`);const s=e,a=r(),l=r(),c=e+l;return{version:o,codec:i,multihashCode:a,digestSize:l,multihashSize:c-s,size:c}}static parse(t,e){const[r,n]=c(t,e),o=l.decode(n);return o._baseCache.set(r,t),o}}const c=(t,e)=>{switch(t[0]){case"Q":{const r=e||i.base58btc;return[i.base58btc.prefix,r.decode(`${i.base58btc.prefix}${t}`)]}case i.base58btc.prefix:{const r=e||i.base58btc;return[i.base58btc.prefix,r.decode(t)]}case s.base32.prefix:{const r=e||s.base32;return[s.base32.prefix,r.decode(t)]}default:if(null==e)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[t[0],e.decode(t)]}},h=(t,e,r)=>{const{prefix:n}=r;if(n!==i.base58btc.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);const o=e.get(n);if(null==o){const o=r.encode(t).slice(1);return e.set(n,o),o}return o},u=(t,e,r)=>{const{prefix:n}=r,o=e.get(n);if(null==o){const o=r.encode(t);return e.set(n,o),o}return o},d=112,p=18,f=(t,e,r)=>{const o=n.P$(t),i=o+n.P$(e),s=new Uint8Array(i+r.byteLength);return n.mL(t,s,0),n.mL(e,s,o),s.set(r,i),s},b=Symbol.for("@ipld/js-cid/CID"),g={writable:!1,configurable:!1,enumerable:!0},y={writable:!1,enumerable:!1,configurable:!1},m=(t,e)=>{if(!t.test("0.0.0-dev"))throw new Error(e);console.warn(e)},w="CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n"},6945:(t,e,r)=>{"use strict";r.r(e),r.d(e,{code:()=>i,decode:()=>a,encode:()=>s,name:()=>o});var n=r(5934);const o="raw",i=85,s=t=>(0,n.coerce)(t),a=t=>(0,n.coerce)(t)},8924:(t,e,r)=>{"use strict";r.d(e,{Jx:()=>s,Ue:()=>i,fS:()=>a,zZ:()=>l});var n=r(5934),o=r(4714);const i=(t,e)=>{const r=e.byteLength,n=o.P$(t),i=n+o.P$(r),s=new Uint8Array(i+r);return o.mL(t,s,0),o.mL(r,s,n),s.set(e,i),new l(t,r,e,s)},s=t=>{const e=(0,n.coerce)(t),[r,i]=o.Jx(e),[s,a]=o.Jx(e.subarray(i)),c=e.subarray(i+a);if(c.byteLength!==s)throw new Error("Incorrect length");return new l(r,s,c,e)},a=(t,e)=>t===e||t.code===e.code&&t.size===e.size&&(0,n.equals)(t.bytes,e.bytes);class l{constructor(t,e,r,n){this.code=t,this.size=e,this.digest=r,this.bytes=n}}},7225:(t,e,r)=>{"use strict";r.d(e,{D:()=>o});var n=r(8924);const o=({name:t,code:e,encode:r})=>new i(t,e,r);class i{constructor(t,e,r){this.name=t,this.code=e,this.encode=r}async digest(t){if(t instanceof Uint8Array){const e=await this.encode(t);return n.Ue(this.code,e)}throw Error("Unknown type, must be binary type")}}},8103:(t,e,r)=>{"use strict";r.r(e),r.d(e,{identity:()=>i});var n=r(7225),o=r(5934);const i=(0,n.D)({name:"identity",code:0,encode:t=>(0,o.coerce)(t)})},6155:(t,e,r)=>{"use strict";r.r(e),r.d(e,{sha256:()=>i,sha512:()=>s});var n=r(7225);const o=t=>async e=>new Uint8Array(await crypto.subtle.digest(t,e)),i=(0,n.D)({name:"sha2-256",code:18,encode:o("SHA-256")}),s=(0,n.D)({name:"sha2-512",code:19,encode:o("SHA-512")})},6441:(t,e,r)=>{"use strict";r.d(e,{aI:()=>o,k0:()=>n.k});var n=r(1362),o=(r(4714),r(5934));r(7225),r(8924)},4714:(t,e,r)=>{"use strict";r.d(e,{Jx:()=>g,mL:()=>y,P$:()=>m});var n=function t(e,r,n){r=r||[];var i=n=n||0;for(;e>=o;)r[n++]=255&e|128,e/=128;for(;-128&e;)r[n++]=255&e|128,e>>>=7;return r[n]=0|e,t.bytes=n-i+1,r},o=Math.pow(2,31);var i=function t(e,r){var n,o=0,i=0,s=r=r||0,a=e.length;do{if(s>=a)throw t.bytes=0,new RangeError("Could not decode varint");n=e[s++],o+=i<28?(127&n)<<i:(127&n)*Math.pow(2,i),i+=7}while(n>=128);return t.bytes=s-r,o};var s=Math.pow(2,7),a=Math.pow(2,14),l=Math.pow(2,21),c=Math.pow(2,28),h=Math.pow(2,35),u=Math.pow(2,42),d=Math.pow(2,49),p=Math.pow(2,56),f=Math.pow(2,63);const b={encode:n,decode:i,encodingLength:function(t){return t<s?1:t<a?2:t<l?3:t<c?4:t<h?5:t<u?6:t<d?7:t<p?8:t<f?9:10}},g=t=>[b.decode(t),b.decode.bytes],y=(t,e,r=0)=>(b.encode(t,e,r),e),m=t=>b.encodingLength(t)},605:(t,e,r)=>{"use strict";function n(t,e){e||(e=t.reduce(((t,e)=>t+e.length),0));const r=new Uint8Array(e);let n=0;for(const e of t)r.set(e,n),n+=e.length;return r}r.r(e),r.d(e,{concat:()=>n})},132:(t,e,r)=>{"use strict";r.r(e),r.d(e,{fromString:()=>M});var n={};r.r(n),r.d(n,{identity:()=>p});var o={};r.r(o),r.d(o,{base2:()=>f});var i={};r.r(i),r.d(i,{base8:()=>b});var s={};r.r(s),r.d(s,{base10:()=>g});var a={};r.r(a),r.d(a,{base16:()=>y,base16upper:()=>m});var l={};r.r(l),r.d(l,{base36:()=>v,base36upper:()=>_});var c={};r.r(c),r.d(c,{base64:()=>k,base64pad:()=>A,base64url:()=>E,base64urlpad:()=>C});var h={};r.r(h),r.d(h,{code:()=>z,decode:()=>O,encode:()=>U,name:()=>B});var u=r(9880),d=r(5934);const p=(0,u.Dp)({prefix:"\0",name:"identity",encode:t=>(0,d.toString)(t),decode:t=>(0,d.fromString)(t)}),f=(0,u.ET)({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),b=(0,u.ET)({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),g=(0,u.kU)({prefix:"9",name:"base10",alphabet:"0123456789"}),y=(0,u.ET)({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),m=(0,u.ET)({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var w=r(2817);const v=(0,u.kU)({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),_=(0,u.kU)({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var x=r(9086);const k=(0,u.ET)({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),A=(0,u.ET)({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),E=(0,u.ET)({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),C=(0,u.ET)({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var S=r(6155),$=r(8103);r(6945);const T=new TextEncoder,I=new TextDecoder,B="json",z=512,U=t=>T.encode(JSON.stringify(t)),O=t=>JSON.parse(I.decode(t));r(6441);const D={...n,...o,...i,...s,...a,...w,...l,...x,...c};function L(t,e,r,n){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:r},decoder:{decode:n}}}const N=L("utf8","u",(t=>"u"+new TextDecoder("utf8").decode(t)),(t=>(new TextEncoder).encode(t.substring(1)))),R=L("ascii","a",(t=>{let e="a";for(let r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e}),(t=>{t=t.substring(1);const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e})),P={utf8:N,"utf-8":N,hex:D.base16,latin1:R,ascii:R,binary:R,...D};function M(t,e="utf8"){const r=P[e];if(!r)throw new Error(`Unsupported encoding "${e}"`);return r.decoder.decode(`${r.prefix}${t}`)}}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[t]={id:t,exports:{}};return __webpack_modules__[t].call(r.exports,r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(t,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),__webpack_require__.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},__webpack_require__.nc=void 0;var __webpack_exports__={};(()=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>kf});var t={};__webpack_require__.r(t),__webpack_require__.d(t,{code:()=>Ic,createLink:()=>$c,createNode:()=>Sc,decode:()=>zc,encode:()=>Bc,name:()=>Tc,prepare:()=>Ec,validate:()=>Cc});var e={};__webpack_require__.r(e),__webpack_require__.d(e,{abortedError:()=>vu,notFoundError:()=>wu});var r={};__webpack_require__.r(r),__webpack_require__.d(r,{code:()=>gp,decode:()=>mp,encode:()=>yp,name:()=>bp});var n=__webpack_require__(3379),o=__webpack_require__.n(n),i=__webpack_require__(7795),s=__webpack_require__.n(i),a=__webpack_require__(569),l=__webpack_require__.n(a),c=__webpack_require__(3565),h=__webpack_require__.n(c),u=__webpack_require__(9216),d=__webpack_require__.n(u),p=__webpack_require__(4589),f=__webpack_require__.n(p),b=__webpack_require__(9473),g={};g.styleTagTransform=f(),g.setAttributes=h(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=d();o()(b.Z,g);b.Z&&b.Z.locals&&b.Z.locals;var y=__webpack_require__(8970),m={};m.styleTagTransform=f(),m.setAttributes=h(),m.insert=l().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=d();o()(y.Z,m);y.Z&&y.Z.locals&&y.Z.locals;var w,v,_=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,x=Symbol(),k=new Map,A=class{constructor(t,e){if(this._$cssResult$=!0,e!==x)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=k.get(this.cssText);return _&&void 0===t&&(k.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},E=t=>new A("string"==typeof t?t:t+"",x),C=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1]),t[0]);return new A(r,x)},S=_?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return E(e)})(t):t,$=window.trustedTypes,T=$?$.emptyScript:"",I=window.reactiveElementPolyfillSupport,B={toAttribute(t,e){switch(e){case Boolean:t=t?T:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},z=(t,e)=>e!==t&&(e==e||t==t),U={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:z},O=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const n=this._$Eh(r,e);void 0!==n&&(this._$Eu.set(n,r),t.push(n))})),t}static createProperty(t,e=U){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||U}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(S(t))}else void 0!==t&&e.push(S(t));return e}static _$Eh(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return r=e,n=this.constructor.elementStyles,_?r.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const e=document.createElement("style"),n=window.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=t.cssText,r.appendChild(e)})),e;var r,n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=U){var n,o;const i=this.constructor._$Eh(t,r);if(void 0!==i&&!0===r.reflect){const s=(null!==(o=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:B.toAttribute)(e,r.type);this._$Ei=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(t,e){var r,n,o;const i=this.constructor,s=i._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=i.getPropertyOptions(s),a=t.converter,l=null!==(o=null!==(n=null===(r=a)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==o?o:B.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||z)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};O.finalized=!0,O.elementProperties=new Map,O.elementStyles=[],O.shadowRootOptions={mode:"open"},null==I||I({ReactiveElement:O}),(null!==(w=globalThis.reactiveElementVersions)&&void 0!==w?w:globalThis.reactiveElementVersions=[]).push("1.0.2");var D=globalThis.trustedTypes,L=D?D.createPolicy("lit-html",{createHTML:t=>t}):void 0,N=`lit$${(Math.random()+"").slice(9)}$`,R="?"+N,P=`<${R}>`,M=document,j=(t="")=>M.createComment(t),F=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,W=/>/g,K=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,G=/'/g,J=/"/g,X=/^(?:script|style|textarea)$/i,Z=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Y=Z(1),Q=(Z(2),Symbol.for("lit-noChange")),tt=Symbol.for("lit-nothing"),et=new WeakMap,rt=M.createTreeWalker(M,129,null,!1),nt=class{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,i=0;const s=t.length-1,a=this.parts,[l,c]=((t,e)=>{const r=t.length-1,n=[];let o,i=2===e?"<svg>":"",s=V;for(let e=0;e<r;e++){const r=t[e];let a,l,c=-1,h=0;for(;h<r.length&&(s.lastIndex=h,l=s.exec(r),null!==l);)h=s.lastIndex,s===V?"!--"===l[1]?s=q:void 0!==l[1]?s=W:void 0!==l[2]?(X.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=K):void 0!==l[3]&&(s=K):s===K?">"===l[0]?(s=null!=o?o:V,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?K:'"'===l[3]?J:G):s===J||s===G?s=K:s===q||s===W?s=V:(s=K,o=void 0);const u=s===K&&t[e+1].startsWith("/>")?" ":"";i+=s===V?r+P:c>=0?(n.push(a),r.slice(0,c)+"$lit$"+r.slice(c)+N+u):r+N+(-2===c?(n.push(void 0),e):u)}const a=i+(t[r]||"<?>")+(2===e?"</svg>":"");return[void 0!==L?L.createHTML(a):a,n]})(t,e);if(this.el=nt.createElement(l,r),rt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=rt.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(N)){const r=c[i++];if(t.push(e),void 0!==r){const t=n.getAttribute(r.toLowerCase()+"$lit$").split(N),e=/([.?@])?(.*)/.exec(r);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?ct:"?"===e[1]?ut:"@"===e[1]?dt:lt})}else a.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(X.test(n.tagName)){const t=n.textContent.split(N),e=t.length-1;if(e>0){n.textContent=D?D.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],j()),rt.nextNode(),a.push({type:2,index:++o});n.append(t[e],j())}}}else if(8===n.nodeType)if(n.data===R)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(N,t+1));)a.push({type:7,index:o}),t+=N.length-1}o++}}static createElement(t,e){const r=M.createElement("template");return r.innerHTML=t,r}};function ot(t,e,r=t,n){var o,i,s,a;if(e===Q)return e;let l=void 0!==n?null===(o=r._$Cl)||void 0===o?void 0:o[n]:r._$Cu;const c=F(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,r,n)),void 0!==n?(null!==(s=(a=r)._$Cl)&&void 0!==s?s:a._$Cl=[])[n]=l:r._$Cu=l),void 0!==l&&(e=ot(t,l._$AS(t,e.values),l,n)),e}var it,st,at=class{constructor(t,e,r,n){var o;this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),F(t)?t===tt||null==t||""===t?(this._$AH!==tt&&this._$AR(),this._$AH=tt):t!==this._$AH&&t!==Q&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return H(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==tt&&F(this._$AH)?this._$AA.nextSibling.data=t:this.S(M.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=nt.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(r);else{const t=new class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:M).importNode(r,!0);rt.currentNode=o;let i=rt.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new at(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new pt(i,this,t)),this.v.push(e),l=n[++a]}s!==(null==l?void 0:l.index)&&(i=rt.nextNode(),s++)}return o}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}(o,this),e=t.p(this.options);t.m(r),this.S(e),this._$AH=t}}_$AC(t){let e=et.get(t.strings);return void 0===e&&et.set(t.strings,e=new nt(t)),e}M(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const o of t)n===e.length?e.push(r=new at(this.A(j()),this.A(j()),this,this.options)):r=e[n],r._$AI(o),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},lt=class{constructor(t,e,r,n,o){this.type=1,this._$AH=tt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=tt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const o=this.strings;let i=!1;if(void 0===o)t=ot(this,t,e,0),i=!F(t)||t!==this._$AH&&t!==Q,i&&(this._$AH=t);else{const n=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=ot(this,n[r+s],e,s),a===Q&&(a=this._$AH[s]),i||(i=!F(a)||a!==this._$AH[s]),a===tt?t=tt:t!==tt&&(t+=(null!=a?a:"")+o[s+1]),this._$AH[s]=a}i&&!n&&this.k(t)}k(t){t===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},ct=class extends lt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===tt?void 0:t}},ht=D?D.emptyScript:"",ut=class extends lt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==tt?this.element.setAttribute(this.name,ht):this.element.removeAttribute(this.name)}},dt=class extends lt{constructor(t,e,r,n,o){super(t,e,r,n,o),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=ot(this,t,e,0))&&void 0!==r?r:tt)===Q)return;const n=this._$AH,o=t===tt&&n!==tt||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==tt&&(n===tt||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}},pt=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}},ft=window.litHtmlPolyfillSupport;null==ft||ft(nt,at),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.0.2");var bt=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,r)=>{var n,o;const i=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:e;let s=i._$litPart$;if(void 0===s){const t=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:null;i._$litPart$=s=new at(e.insertBefore(j(),t),t,void 0,null!=r?r:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return Q}};bt.finalized=!0,bt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:bt});var gt=globalThis.litElementPolyfillSupport;null==gt||gt({LitElement:bt}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.0.2");var yt=C`
  .sl-scroll-lock {
    overflow: hidden !important;
  }

  .sl-toast-stack {
    position: fixed;
    top: 0;
    right: 0;
    z-index: var(--sl-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .sl-toast-stack sl-alert {
    --box-shadow: var(--sl-shadow-large);
    margin: var(--sl-spacing-medium);
  }
`,mt=C`
  :host {
    position: relative;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,wt=document.createElement("style");wt.textContent=yt.toString(),document.head.append(wt);var vt=C`
  ${mt}

  :host {
    display: block;
  }
`;function _t(t,e,r){const n=new CustomEvent(e,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return t.dispatchEvent(n),n}function xt(t,e){return new Promise((r=>{t.addEventListener(e,(function n(o){o.target===t&&(t.removeEventListener(e,n),r())}))}))}Object.create;var kt=Object.defineProperty,At=Object.defineProperties,Et=Object.getOwnPropertyDescriptor,Ct=Object.getOwnPropertyDescriptors,St=(Object.getOwnPropertyNames,Object.getOwnPropertySymbols),$t=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),Tt=Object.prototype.propertyIsEnumerable,It=(t,e,r)=>e in t?kt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Bt=(t,e)=>{for(var r in e||(e={}))$t.call(e,r)&&It(t,r,e[r]);if(St)for(var r of St(e))Tt.call(e,r)&&It(t,r,e[r]);return t},zt=(t,e)=>At(t,Ct(e)),Ut=(t,e,r,n)=>{for(var o,i=n>1?void 0:n?Et(e,r):e,s=t.length-1;s>=0;s--)(o=t[s])&&(i=(n?o(e,r,i):o(i))||i);return n&&i&&kt(e,r,i),i},Ot=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:n}=e;return{kind:r,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),Dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?zt(Bt({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function Lt(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):Dt(t,e)}function Nt(t){return Lt(zt(Bt({},t),{state:!0}))}var Rt=({finisher:t,descriptor:e})=>(r,n)=>{var o;if(void 0===n){const n=null!==(o=r.originalKey)&&void 0!==o?o:r.key,i=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(r.key)}:zt(Bt({},r),{key:n});return null!=t&&(i.finisher=function(e){t(e,n)}),i}{const o=r.constructor;void 0!==e&&Object.defineProperty(r,n,e(n)),null==t||t(o,n)}};function Pt(t,e){return Rt({descriptor:r=>{const n={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():"__"+r;n.get=function(){var r,n;return void 0===this[e]&&(this[e]=null!==(n=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}var Mt=class extends bt{constructor(){super(...arguments),this.novalidate=!1}connectedCallback(){super.connectedCallback(),this.formControls=[{tag:"button",serialize:(t,e)=>t.name&&!t.disabled?e.append(t.name,t.value):null,click:t=>{"submit"===t.target.type&&this.submit()}},{tag:"input",serialize:(t,e)=>{t.name&&!t.disabled&&("checkbox"!==t.type&&"radio"!==t.type||t.checked)&&("file"!==t.type?e.append(t.name,t.value):[...t.files].map((r=>e.append(t.name,r))))},click:t=>{"submit"===t.target.type&&this.submit()},keyDown:t=>{const e=t.target;"Enter"!==t.key||t.defaultPrevented||["checkbox","file","radio"].includes(e.type)||this.submit()}},{tag:"select",serialize:(t,e)=>{if(t.name&&!t.disabled)if(t.multiple){const r=[...t.querySelectorAll("option:checked")];r.length?r.map((r=>e.append(t.name,r.value))):e.append(t.name,"")}else e.append(t.name,t.value)}},{tag:"sl-button",serialize:(t,e)=>t.name&&!t.disabled?e.append(t.name,t.value):null,click:t=>{t.target.submit&&this.submit()}},{tag:"sl-checkbox",serialize:(t,e)=>t.name&&t.checked&&!t.disabled?e.append(t.name,t.value):null},{tag:"sl-color-picker",serialize:(t,e)=>t.name&&!t.disabled?e.append(t.name,t.value):null},{tag:"sl-input",serialize:(t,e)=>t.name&&!t.disabled?e.append(t.name,t.value):null,keyDown:t=>{"Enter"!==t.key||t.defaultPrevented||this.submit()}},{tag:"sl-radio",serialize:(t,e)=>t.name&&t.checked&&!t.disabled?e.append(t.name,t.value):null},{tag:"sl-range",serialize:(t,e)=>{t.name&&!t.disabled&&e.append(t.name,t.value+"")}},{tag:"sl-select",serialize:(t,e)=>{if(t.name&&!t.disabled)if(t.multiple){const r=[...t.value];r.length?r.map((r=>e.append(t.name,r))):e.append(t.name,"")}else e.append(t.name,t.value+"")}},{tag:"sl-switch",serialize:(t,e)=>t.name&&t.checked&&!t.disabled?e.append(t.name,t.value):null},{tag:"sl-textarea",serialize:(t,e)=>t.name&&!t.disabled?e.append(t.name,t.value):null},{tag:"textarea",serialize:(t,e)=>t.name&&!t.disabled?e.append(t.name,t.value):null}]}getFormData(){const t=new FormData;return this.getFormControls().map((e=>this.serializeElement(e,t))),t}getFormControls(){const t=this.form.querySelector("slot"),e=this.formControls.map((t=>t.tag));return t.assignedElements({flatten:!0}).reduce(((t,e)=>t.concat(e,[...e.querySelectorAll("*")])),[]).filter((t=>e.includes(t.tagName.toLowerCase())))}submit(){const t=this.getFormData(),e=this.getFormControls(),r=e.filter((t=>"function"==typeof t.reportValidity));if(!this.novalidate)for(const t of r){if(!t.reportValidity())return!1}return _t(this,"sl-submit",{detail:{formData:t,formControls:e}}),!0}handleClick(t){const e=t.target.tagName.toLowerCase();for(const r of this.formControls)r.tag===e&&r.click&&r.click(t)}handleKeyDown(t){const e=t.target.tagName.toLowerCase();for(const r of this.formControls)r.tag===e&&r.keyDown&&r.keyDown(t)}serializeElement(t,e){const r=t.tagName.toLowerCase();for(const n of this.formControls)if(n.tag===r)return n.serialize(t,e);return null}render(){return Y`
      <div part="base" class="form" role="form" @click=${this.handleClick} @keydown=${this.handleKeyDown}>
        <slot></slot>
      </div>
    `}};function jt(t){const e=t?t.assignedNodes({flatten:!0}):[];let r="";return[...e].map((t=>{t.nodeType===Node.TEXT_NODE&&(r+=t.textContent)})),r}function Ft(t,e){return e?null!==t.querySelector(`:scope > [slot="${e}"]`):[...t.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){if(!t.hasAttribute("slot"))return!0}return!1}))}Mt.styles=vt,Ut([Pt(".form")],Mt.prototype,"form",2),Ut([Lt({type:Boolean,reflect:!0})],Mt.prototype,"novalidate",2),Mt=Ut([Ot("sl-form")],Mt);var Ht=(()=>{const t=document.createElement("style");let e;try{document.head.appendChild(t),t.sheet.insertRule(":focus-visible { color: inherit }"),e=!0}catch(t){e=!1}finally{t.remove()}return e})(),Vt=E(Ht?":focus-visible":":focus"),qt=C`
  ${mt}

  :host {
    display: inline-block;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-fast) background-color, var(--sl-transition-fast) color,
      var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  /* Clicks on icons shouldn't prevent the button from gaining focus */
  .button::slotted(sl-icon) {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default${Vt}:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary${Vt}:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success${Vt}:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral${Vt}:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning${Vt}:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger${Vt}:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default${Vt}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary${Vt}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success${Vt}:not(.button--disabled) {
    border-color: var(--sl-color-success-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral${Vt}:not(.button--disabled) {
    border-color: var(--sl-color-neutral-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning${Vt}:not(.button--disabled) {
    border-color: var(--sl-color-warning-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger${Vt}:not(.button--disabled) {
    border-color: var(--sl-color-danger-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text${Vt}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-right: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [type='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump focused buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus) {
    z-index: 2;
  }
`,Wt=1,Kt=2,Gt=3,Jt=4,Xt=t=>(...e)=>({_$litDirective$:t,values:e}),Zt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},Yt=Xt(class extends Zt{constructor(t){var e;if(super(t),t.type!==Wt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,n;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(r=this.et)||void 0===r?void 0:r.has(t))&&this.st.add(t);return this.render(e)}const o=t.element.classList;this.st.forEach((t=>{t in e||(o.remove(t),this.st.delete(t))}));for(const t in e){const r=!!e[t];r===this.st.has(t)||(null===(n=this.et)||void 0===n?void 0:n.has(t))||(r?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return Q}}),Qt=t=>null!=t?t:tt
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,te=class extends bt{constructor(){super(...arguments),this.hasFocus=!1,this.hasLabel=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.type="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.submit=!1}connectedCallback(){super.connectedCallback(),this.handleSlotChange()}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleSlotChange(){this.hasLabel=Ft(this),this.hasPrefix=Ft(this,"prefix"),this.hasSuffix=Ft(this,"suffix")}handleBlur(){this.hasFocus=!1,_t(this,"sl-blur")}handleFocus(){this.hasFocus=!0,_t(this,"sl-focus")}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=Y`
      <span part="prefix" class="button__prefix">
        <slot @slotchange=${this.handleSlotChange} name="prefix"></slot>
      </span>
      <span part="label" class="button__label">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </span>
      <span part="suffix" class="button__suffix">
        <slot @slotchange=${this.handleSlotChange} name="suffix"></slot>
      </span>
      ${this.caret?Y`
            <span part="caret" class="button__caret">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          `:""}
      ${this.loading?Y`<sl-spinner></sl-spinner>`:""}
    `;return t?Y`
          <a
            part="base"
            class=${Yt({button:!0,"button--default":"default"===this.type,"button--primary":"primary"===this.type,"button--success":"success"===this.type,"button--neutral":"neutral"===this.type,"button--warning":"warning"===this.type,"button--danger":"danger"===this.type,"button--text":"text"===this.type,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasLabel,"button--has-prefix":this.hasPrefix,"button--has-suffix":this.hasSuffix})}
            href=${Qt(this.href)}
            target=${Qt(this.target)}
            download=${Qt(this.download)}
            rel=${Qt(this.target?"noreferrer noopener":void 0)}
            role="button"
            aria-disabled=${this.disabled?"true":"false"}
            tabindex=${this.disabled?"-1":"0"}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @click=${this.handleClick}
          >
            ${e}
          </a>
        `:Y`
          <button
            part="base"
            class=${Yt({button:!0,"button--default":"default"===this.type,"button--primary":"primary"===this.type,"button--success":"success"===this.type,"button--neutral":"neutral"===this.type,"button--warning":"warning"===this.type,"button--danger":"danger"===this.type,"button--text":"text"===this.type,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--has-label":this.hasLabel,"button--has-prefix":this.hasPrefix,"button--has-suffix":this.hasSuffix})}
            ?disabled=${this.disabled}
            type=${this.submit?"submit":"button"}
            name=${Qt(this.name)}
            value=${Qt(this.value)}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @click=${this.handleClick}
          >
            ${e}
          </button>
        `}};te.styles=qt,Ut([Pt(".button")],te.prototype,"button",2),Ut([Nt()],te.prototype,"hasFocus",2),Ut([Nt()],te.prototype,"hasLabel",2),Ut([Nt()],te.prototype,"hasPrefix",2),Ut([Nt()],te.prototype,"hasSuffix",2),Ut([Lt({reflect:!0})],te.prototype,"type",2),Ut([Lt({reflect:!0})],te.prototype,"size",2),Ut([Lt({type:Boolean,reflect:!0})],te.prototype,"caret",2),Ut([Lt({type:Boolean,reflect:!0})],te.prototype,"disabled",2),Ut([Lt({type:Boolean,reflect:!0})],te.prototype,"loading",2),Ut([Lt({type:Boolean,reflect:!0})],te.prototype,"outline",2),Ut([Lt({type:Boolean,reflect:!0})],te.prototype,"pill",2),Ut([Lt({type:Boolean,reflect:!0})],te.prototype,"circle",2),Ut([Lt({type:Boolean,reflect:!0})],te.prototype,"submit",2),Ut([Lt()],te.prototype,"name",2),Ut([Lt()],te.prototype,"value",2),Ut([Lt()],te.prototype,"href",2),Ut([Lt()],te.prototype,"target",2),Ut([Lt()],te.prototype,"download",2),te=Ut([Ot("sl-button")],te);var ee=C`
  ${mt}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2.5s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform: rotate(90deg);
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(0deg);
    }

    50% {
      stroke-dasharray: 2.2em 3em;
      transform: rotate(450deg);
    }

    100% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(1080deg);
    }
  }
`,re=class extends bt{render(){return Y`
      <svg part="base" class="spinner" aria-busy="true" aria-live="polite">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};re.styles=ee,re=Ut([Ot("sl-spinner")],re);var ne=C`
  ${mt}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,oe=class extends bt{constructor(){super(...arguments),this.hasFooter=!1,this.hasImage=!1,this.hasHeader=!1}handleSlotChange(){this.hasFooter=Ft(this,"footer"),this.hasImage=Ft(this,"image"),this.hasHeader=Ft(this,"header")}render(){return Y`
      <div
        part="base"
        class=${Yt({card:!0,"card--has-footer":this.hasFooter,"card--has-image":this.hasImage,"card--has-header":this.hasHeader})}
      >
        <div part="image" class="card__image">
          <slot name="image" @slotchange=${this.handleSlotChange}></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header" @slotchange=${this.handleSlotChange}></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
        </div>
      </div>
    `}};oe.styles=ne,Ut([Nt()],oe.prototype,"hasFooter",2),Ut([Nt()],oe.prototype,"hasImage",2),Ut([Nt()],oe.prototype,"hasHeader",2),oe=Ut([Ot("sl-card")],oe);var ie={},se=Xt(class extends Zt{constructor(t){if(super(t),t.type!==Gt&&t.type!==Wt&&t.type!==Jt)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Q||e===tt)return e;const r=t.element,n=t.name;if(t.type===Gt){if(e===r[n])return Q}else if(t.type===Jt){if(!!e===r.hasAttribute(n))return Q}else if(t.type===Wt&&r.getAttribute(n)===e+"")return Q;return((t,e=ie)=>{t._$AH=e})(t),e}}),ae=C`
  ${mt}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled)
    .checkbox__input${Vt}
    ~ .checkbox__control {
    border-color: var(--sl-input-border-color-focus);
    background-color: var(--sl-input-background-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input${Vt} ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled)
    .checkbox__input${Vt}
    ~ .checkbox__control {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    line-height: var(--sl-toggle-size);
    margin-left: 0.5em;
    user-select: none;
  }
`;function le(t,e){return(r,n)=>{const{update:o}=r;e=Object.assign({waitUntilFirstUpdate:!1},e),r.update=function(r){if(r.has(t)){const o=r.get(t),i=this[t];o!==i&&((null==e?void 0:e.waitUntilFirstUpdate)&&!this.hasUpdated||this[n].call(this,o,i))}o.call(this,r)}}}var ce=0,he=class extends bt{constructor(){super(...arguments),this.inputId="checkbox-"+ ++ce,this.labelId=`checkbox-label-${ce}`,this.hasFocus=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.indeterminate=!1,this.invalid=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,_t(this,"sl-change")}handleBlur(){this.hasFocus=!1,_t(this,"sl-blur")}handleDisabledChange(){this.input&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}handleFocus(){this.hasFocus=!0,_t(this,"sl-focus")}handleStateChange(){this.invalid=!this.input.checkValidity()}render(){return Y`
      <label
        part="base"
        class=${Yt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate})}
        for=${this.inputId}
      >
        <input
          id=${this.inputId}
          class="checkbox__input"
          type="checkbox"
          name=${Qt(this.name)}
          value=${Qt(this.value)}
          .indeterminate=${se(this.indeterminate)}
          .checked=${se(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="checkbox"
          aria-checked=${this.checked?"true":"false"}
          aria-labelledby=${this.labelId}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="checkbox__control">
          ${this.checked?Y`
                <span part="checked-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(3.428571, 3.428571)">
                          <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                          <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              `:""}
          ${!this.checked&&this.indeterminate?Y`
                <span part="indeterminate-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(2.285714, 6.857143)">
                          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              `:""}
        </span>

        <span part="label" id=${this.labelId} class="checkbox__label">
          <slot></slot>
        </span>
      </label>
    `}};he.styles=ae,Ut([Pt('input[type="checkbox"]')],he.prototype,"input",2),Ut([Nt()],he.prototype,"hasFocus",2),Ut([Lt()],he.prototype,"name",2),Ut([Lt()],he.prototype,"value",2),Ut([Lt({type:Boolean,reflect:!0})],he.prototype,"disabled",2),Ut([Lt({type:Boolean,reflect:!0})],he.prototype,"required",2),Ut([Lt({type:Boolean,reflect:!0})],he.prototype,"checked",2),Ut([Lt({type:Boolean,reflect:!0})],he.prototype,"indeterminate",2),Ut([Lt({type:Boolean,reflect:!0})],he.prototype,"invalid",2),Ut([le("disabled")],he.prototype,"handleDisabledChange",1),Ut([le("checked",{waitUntilFirstUpdate:!0}),le("indeterminate",{waitUntilFirstUpdate:!0})],he.prototype,"handleStateChange",1),he=Ut([Ot("sl-checkbox")],he);var ue=C`
  ${mt}

  :host {
    display: inline-block;
  }

  .radio {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__input${Vt} ~ .radio__control {
    border-color: var(--sl-input-border-color-focus);
    background-color: var(--sl-input-background-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  .radio.radio--checked:not(.radio--disabled) .radio__input${Vt} ~ .radio__control {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    line-height: var(--sl-toggle-size);
    margin-left: 0.5em;
    user-select: none;
  }
`,de=0,pe=class extends bt{constructor(){super(...arguments),this.inputId="radio-"+ ++de,this.labelId=`radio-label-${de}`,this.hasFocus=!1,this.disabled=!1,this.checked=!1,this.invalid=!1}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}getAllRadios(){const t=this.closest("sl-radio-group");return t?[...t.querySelectorAll("sl-radio")].filter((t=>t.name===this.name)):[this]}getSiblingRadios(){return this.getAllRadios().filter((t=>t!==this))}handleBlur(){this.hasFocus=!1,_t(this,"sl-blur")}handleCheckedChange(){this.checked&&this.getSiblingRadios().map((t=>t.checked=!1))}handleClick(){this.checked=!0,_t(this,"sl-change")}handleDisabledChange(){this.input&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}handleFocus(){this.hasFocus=!0,_t(this,"sl-focus")}handleKeyDown(t){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.key)){const e=this.getAllRadios().filter((t=>!t.disabled)),r=["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let n=e.indexOf(this)+r;n<0&&(n=e.length-1),n>e.length-1&&(n=0),this.getAllRadios().map((t=>t.checked=!1)),e[n].focus(),e[n].checked=!0,_t(e[n],"sl-change"),t.preventDefault()}}render(){return Y`
      <label
        part="base"
        class=${Yt({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus})}
        for=${this.inputId}
        @keydown=${this.handleKeyDown}
      >
        <input
          id=${this.inputId}
          class="radio__input"
          type="radio"
          name=${Qt(this.name)}
          value=${Qt(this.value)}
          .checked=${se(this.checked)}
          .disabled=${this.disabled}
          aria-checked=${this.checked?"true":"false"}
          aria-disabled=${this.disabled?"true":"false"}
          aria-labelledby=${this.labelId}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="radio__control">
          <span part="checked-icon" class="radio__icon">
            <svg viewBox="0 0 16 16">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor">
                  <circle cx="8" cy="8" r="3.42857143"></circle>
                </g>
              </g>
            </svg>
          </span>
        </span>

        <span part="label" id=${this.labelId} class="radio__label">
          <slot></slot>
        </span>
      </label>
    `}};pe.styles=ue,Ut([Pt('input[type="radio"]')],pe.prototype,"input",2),Ut([Nt()],pe.prototype,"hasFocus",2),Ut([Lt()],pe.prototype,"name",2),Ut([Lt()],pe.prototype,"value",2),Ut([Lt({type:Boolean,reflect:!0})],pe.prototype,"disabled",2),Ut([Lt({type:Boolean,reflect:!0})],pe.prototype,"checked",2),Ut([Lt({type:Boolean,reflect:!0})],pe.prototype,"invalid",2),Ut([le("checked",{waitUntilFirstUpdate:!0})],pe.prototype,"handleCheckedChange",1),Ut([le("disabled")],pe.prototype,"handleDisabledChange",1),pe=Ut([Ot("sl-radio")],pe);var fe=C`
  ${mt}

  :host {
    display: block;
  }

  .radio-group {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-large);
    padding-top: var(--sl-spacing-x-small);
  }

  .radio-group .radio-group__label {
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    padding: 0 var(--sl-spacing-2x-small);
  }

  ::slotted(sl-radio:not(:last-of-type)) {
    display: block;
    margin-bottom: var(--sl-spacing-2x-small);
  }

  .radio-group:not(.radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .radio-group:not(.radio-group--has-fieldset) .radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`,be=class extends bt{constructor(){super(...arguments),this.label="",this.fieldset=!1}handleFocusIn(){requestAnimationFrame((()=>{const t=[...this.defaultSlot.assignedElements({flatten:!0})].find((t=>"sl-radio"===t.tagName.toLowerCase()&&t.checked));t&&t.focus()}))}render(){return Y`
      <fieldset
        part="base"
        class=${Yt({"radio-group":!0,"radio-group--has-fieldset":this.fieldset})}
        role="radiogroup"
        @focusin=${this.handleFocusIn}
      >
        <legend part="label" class="radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        <slot></slot>
      </fieldset>
    `}};be.styles=fe,Ut([Pt("slot:not([name])")],be.prototype,"defaultSlot",2),Ut([Lt()],be.prototype,"label",2),Ut([Lt({type:Boolean,attribute:"fieldset"})],be.prototype,"fieldset",2),be=Ut([Ot("sl-radio-group")],be);var ge,ye=new Set,me=new MutationObserver(_e),we=new Map,ve=document.documentElement.lang||navigator.language;function _e(){ve=document.documentElement.lang||navigator.language,[...ye.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}me.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});var xe=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ye.add(this.host)}hostDisconnected(){ye.delete(this.host)}term(t,...e){return function(t,e,...r){const n=t.toLowerCase().slice(0,2),o=t.length>2?t.toLowerCase():"",i=we.get(o),s=we.get(n);let a;if(i&&i[e])a=i[e];else if(s&&s[e])a=s[e];else{if(!ge||!ge[e])return console.error(`No translation found for: ${e}`),e;a=ge[e]}return"function"==typeof a?a(...r):a}(this.host.lang||ve,t,...e)}date(t,e){return function(t,e,r){return e=new Date(e),new Intl.DateTimeFormat(t,r).format(e)}(this.host.lang||ve,t,e)}number(t,e){return function(t,e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(t,r).format(e)}(this.host.lang||ve,t,e)}relativeTime(t,e,r){return function(t,e,r,n){return new Intl.RelativeTimeFormat(t,n).format(e,r)}(this.host.lang||ve,t,e,r)}},ke={$code:"en",$name:"English",$dir:"ltr",close:"Close",copy:"Copy",progress:"Progress",scroll_to_end:"Scroll to end",scroll_to_start:"Scroll to start",select_a_color_from_the_screen:"Select a color from the screen",toggle_color_format:"Toggle color format"};!function(...t){t.map((t=>{const e=t.$code.toLowerCase();we.set(e,t),ge||(ge=t)})),_e()}(ke);var Ae=class extends bt{constructor(){super(...arguments),this.localize=new xe(this),this.value=0,this.unit="bytes"}render(){return function(t,e){e=Object.assign({unit:"bytes",formatter:t=>t.toLocaleString()},e);const r="bytes"===e.unit?["B","kB","MB","GB","TB","PB","EB","ZB","YB"]:["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],n=t<0;if(0===(t=Math.abs(t)))return"0 B";const o=Math.min(Math.floor(Math.log10(t)/3),r.length-1),i=Number((t/Math.pow(1e3,o)).toPrecision(3));return`${n?"-":""}${e.formatter?e.formatter(i):i} ${r[o]}`}(this.value,{unit:this.unit,formatter:t=>this.localize.number(t)})}};Ut([Lt({type:Number})],Ae.prototype,"value",2),Ut([Lt()],Ae.prototype,"unit",2),Ut([Lt()],Ae.prototype,"lang",2),Ae=Ut([Ot("sl-format-bytes")],Ae);var Ee=C`
  ${mt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ce="";function Se(t){Ce=t}var $e=[...document.getElementsByTagName("script")],Te=$e.find((t=>t.hasAttribute("data-shoelace")));if(Te)Se(Te.getAttribute("data-shoelace"));else{const t=$e.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)));let e="";t&&(e=t.getAttribute("src")),Se(e.split("/").slice(0,-1).join("/"))}var Ie={check:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">\n      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',x:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Be=[{name:"default",resolver:t=>`${Ce.replace(/\/$/,"")}/assets/icons/${t}.svg`},{name:"system",resolver:t=>Ie[t]?`data:image/svg+xml,${encodeURIComponent(Ie[t])}`:""}],ze=[];function Ue(t){return Be.filter((e=>e.name===t))[0]}var Oe=new Map,De=class extends Zt{constructor(t){if(super(t),this.it=tt,t.type!==Kt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===tt||null==t)return this.vt=void 0,this.it=t;if(t===Q)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.vt;this.it=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};De.directiveName="unsafeHTML",De.resultType=1;Xt(De);var Le=class extends De{};Le.directiveName="unsafeSVG",Le.resultType=2;var Ne=Xt(Le),Re=new DOMParser,Pe=class extends bt{constructor(){super(...arguments),this.svg="",this.library="default"}connectedCallback(){var t;super.connectedCallback(),t=this,ze.push(t)}firstUpdated(){this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,ze=ze.filter((e=>e!==t))}getUrl(){const t=Ue(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){const t=Ue(this.library),e=this.getUrl();if(e)try{const r=await(t=>{if(Oe.has(t))return Oe.get(t);{const e=fetch(t).then((async t=>{if(t.ok){const e=document.createElement("div");e.innerHTML=await t.text();const r=e.firstElementChild;return{ok:t.ok,status:t.status,svg:r&&"svg"===r.tagName.toLowerCase()?r.outerHTML:""}}return{ok:t.ok,status:t.status,svg:null}}));return Oe.set(t,e),e}})(e);if(e!==this.getUrl())return;if(r.ok){const e=Re.parseFromString(r.svg,"text/html").body.querySelector("svg");e?(t&&t.mutator&&t.mutator(e),this.svg=e.outerHTML,_t(this,"sl-load")):(this.svg="",_t(this,"sl-error",{detail:{status:r.status}}))}else this.svg="",_t(this,"sl-error",{detail:{status:r.status}})}catch(t){_t(this,"sl-error",{detail:{status:-1}})}else this.svg&&(this.svg="")}handleChange(){this.setIcon()}render(){const t="string"==typeof this.label&&this.label.length>0;return Y` <div
      part="base"
      class="icon"
      role=${Qt(t?"img":void 0)}
      aria-label=${Qt(t?this.label:void 0)}
      aria-hidden=${Qt(t?void 0:"true")}
    >
      ${Ne(this.svg)}
    </div>`}};Pe.styles=Ee,Ut([Nt()],Pe.prototype,"svg",2),Ut([Lt()],Pe.prototype,"name",2),Ut([Lt()],Pe.prototype,"src",2),Ut([Lt()],Pe.prototype,"label",2),Ut([Lt()],Pe.prototype,"library",2),Ut([le("name"),le("src"),le("library")],Pe.prototype,"setIcon",1),Pe=Ut([Ot("sl-icon")],Pe);var Me=C`
  ${mt}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button${Vt} {
    box-shadow: var(--sl-focus-ring);
  }
`,je=class extends bt{constructor(){super(...arguments),this.label="",this.disabled=!1}render(){const t=!!this.href,e=Y`
      <sl-icon
        name=${Qt(this.name)}
        library=${Qt(this.library)}
        src=${Qt(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;return t?Y`
          <a
            part="base"
            class="icon-button"
            href=${Qt(this.href)}
            target=${Qt(this.target)}
            download=${Qt(this.download)}
            rel=${Qt(this.target?"noreferrer noopener":void 0)}
            role="button"
            aria-disabled=${this.disabled?"true":"false"}
            aria-label="${this.label}"
            tabindex=${this.disabled?"-1":"0"}
          >
            ${e}
          </a>
        `:Y`
          <button
            part="base"
            class=${Yt({"icon-button":!0,"icon-button--disabled":this.disabled})}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${e}
          </button>
        `}};je.styles=Me,Ut([Pt("button")],je.prototype,"button",2),Ut([Lt()],je.prototype,"name",2),Ut([Lt()],je.prototype,"library",2),Ut([Lt()],je.prototype,"src",2),Ut([Lt()],je.prototype,"href",2),Ut([Lt()],je.prototype,"target",2),Ut([Lt()],je.prototype,"download",2),Ut([Lt()],je.prototype,"label",2),Ut([Lt({type:Boolean,reflect:!0})],je.prototype,"disabled",2),je=Ut([Ot("sl-icon-button")],je);var Fe=(t,e)=>{const r=!!t.label||!!t.hasLabelSlot,n=!!t.helpText||!!t.hasHelpTextSlot;return Y`
    <div
      part="form-control"
      class=${Yt({"form-control":!0,"form-control--small":"small"===t.size,"form-control--medium":"medium"===t.size,"form-control--large":"large"===t.size,"form-control--has-label":r,"form-control--has-help-text":n})}
    >
      <label
        part="label"
        id=${Qt(t.labelId)}
        class="form-control__label"
        for=${t.inputId}
        aria-hidden=${r?"false":"true"}
        @click=${e=>t.onLabelClick?t.onLabelClick(e):null}
      >
        <slot name="label">${t.label}</slot>
      </label>

      <div class="form-control__input">${Y`${e}`}</div>

      <div
        part="help-text"
        id=${Qt(t.helpTextId)}
        class="form-control__help-text"
        aria-hidden=${n?"false":"true"}
      >
        <slot name="help-text">${t.helpText}</slot>
      </div>
    </div>
  `};function He(t){return[t.label||t.hasLabelSlot?t.labelId:"",t.helpText||t.hasHelpTextSlot?t.helpTextId:""].filter((t=>t)).join(" ")||void 0}var Ve=C`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`,qe=C`
  ${mt}
  ${Ve}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    margin: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    margin-right: var(--sl-input-spacing-small);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    margin: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    margin-right: var(--sl-input-spacing-medium);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    margin: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    margin-right: var(--sl-input-spacing-large);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }
`,We=0,Ke=class extends bt{constructor(){super(...arguments),this.inputId="input-"+ ++We,this.helpTextId=`input-help-text-${We}`,this.labelId=`input-label-${We}`,this.hasFocus=!1,this.hasHelpTextSlot=!1,this.hasLabelSlot=!1,this.isPasswordVisible=!1,this.type="text",this.size="medium",this.value="",this.filled=!1,this.pill=!1,this.helpText="",this.clearable=!1,this.togglePassword=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),this.handleSlotChange=this.handleSlotChange.bind(this),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){return this.input.select()}setSelectionRange(t,e,r="none"){return this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,n="preserve"){this.input.setRangeText(t,e,r,n),this.value!==this.input.value&&(this.value=this.input.value,_t(this,"sl-input"),_t(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,_t(this,"sl-blur")}handleChange(){this.value=this.input.value,_t(this,"sl-change")}handleClearClick(t){this.value="",_t(this,"sl-clear"),_t(this,"sl-input"),_t(this,"sl-change"),this.input.focus(),t.stopPropagation()}handleDisabledChange(){this.input&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}handleFocus(){this.hasFocus=!0,_t(this,"sl-focus")}handleInput(){this.value=this.input.value,_t(this,"sl-input")}handleInvalid(){this.invalid=!0}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleSlotChange(){this.hasHelpTextSlot=Ft(this,"help-text"),this.hasLabelSlot=Ft(this,"label")}handleValueChange(){this.input&&(this.invalid=!this.input.checkValidity())}render(){var t,e;return Fe({inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:this.hasHelpTextSlot,size:this.size},Y`
        <div
          part="base"
          class=${Yt({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":0===(null==(t=this.value)?void 0:t.length),"input--invalid":this.invalid})}
        >
          <span part="prefix" class="input__prefix">
            <slot name="prefix"></slot>
          </span>

          <input
            part="input"
            id=${this.inputId}
            class="input__control"
            type=${"password"===this.type&&this.isPasswordVisible?"text":this.type}
            name=${Qt(this.name)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            placeholder=${Qt(this.placeholder)}
            minlength=${Qt(this.minlength)}
            maxlength=${Qt(this.maxlength)}
            min=${Qt(this.min)}
            max=${Qt(this.max)}
            step=${Qt(this.step)}
            .value=${se(this.value)}
            autocapitalize=${Qt(this.autocapitalize)}
            autocomplete=${Qt(this.autocomplete)}
            autocorrect=${Qt(this.autocorrect)}
            ?autofocus=${this.autofocus}
            spellcheck=${Qt(this.spellcheck)}
            pattern=${Qt(this.pattern)}
            inputmode=${Qt(this.inputmode)}
            aria-labelledby=${Qt(He({label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpText:this.helpText,helpTextId:this.helpTextId,hasHelpTextSlot:this.hasHelpTextSlot}))}
            aria-invalid=${this.invalid?"true":"false"}
            @change=${this.handleChange}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />

          ${this.clearable&&(null==(e=this.value)?void 0:e.length)>0?Y`
                <button
                  part="clear-button"
                  class="input__clear"
                  type="button"
                  @click=${this.handleClearClick}
                  tabindex="-1"
                >
                  <slot name="clear-icon">
                    <sl-icon name="x-circle-fill" library="system"></sl-icon>
                  </slot>
                </button>
              `:""}
          ${this.togglePassword?Y`
                <button
                  part="password-toggle-button"
                  class="input__password-toggle"
                  type="button"
                  @click=${this.handlePasswordToggle}
                  tabindex="-1"
                >
                  ${this.isPasswordVisible?Y`
                        <slot name="show-password-icon">
                          <sl-icon name="eye-slash" library="system"></sl-icon>
                        </slot>
                      `:Y`
                        <slot name="hide-password-icon">
                          <sl-icon name="eye" library="system"></sl-icon>
                        </slot>
                      `}
                </button>
              `:""}

          <span part="suffix" class="input__suffix">
            <slot name="suffix"></slot>
          </span>
        </div>
      `)}};Ke.styles=qe,Ut([Pt(".input__control")],Ke.prototype,"input",2),Ut([Nt()],Ke.prototype,"hasFocus",2),Ut([Nt()],Ke.prototype,"hasHelpTextSlot",2),Ut([Nt()],Ke.prototype,"hasLabelSlot",2),Ut([Nt()],Ke.prototype,"isPasswordVisible",2),Ut([Lt({reflect:!0})],Ke.prototype,"type",2),Ut([Lt({reflect:!0})],Ke.prototype,"size",2),Ut([Lt()],Ke.prototype,"name",2),Ut([Lt()],Ke.prototype,"value",2),Ut([Lt({type:Boolean,reflect:!0})],Ke.prototype,"filled",2),Ut([Lt({type:Boolean,reflect:!0})],Ke.prototype,"pill",2),Ut([Lt()],Ke.prototype,"label",2),Ut([Lt({attribute:"help-text"})],Ke.prototype,"helpText",2),Ut([Lt({type:Boolean})],Ke.prototype,"clearable",2),Ut([Lt({attribute:"toggle-password",type:Boolean})],Ke.prototype,"togglePassword",2),Ut([Lt()],Ke.prototype,"placeholder",2),Ut([Lt({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2),Ut([Lt({type:Boolean,reflect:!0})],Ke.prototype,"readonly",2),Ut([Lt({type:Number})],Ke.prototype,"minlength",2),Ut([Lt({type:Number})],Ke.prototype,"maxlength",2),Ut([Lt()],Ke.prototype,"min",2),Ut([Lt()],Ke.prototype,"max",2),Ut([Lt({type:Number})],Ke.prototype,"step",2),Ut([Lt()],Ke.prototype,"pattern",2),Ut([Lt({type:Boolean,reflect:!0})],Ke.prototype,"required",2),Ut([Lt({type:Boolean,reflect:!0})],Ke.prototype,"invalid",2),Ut([Lt()],Ke.prototype,"autocapitalize",2),Ut([Lt()],Ke.prototype,"autocorrect",2),Ut([Lt()],Ke.prototype,"autocomplete",2),Ut([Lt({type:Boolean})],Ke.prototype,"autofocus",2),Ut([Lt({type:Boolean})],Ke.prototype,"spellcheck",2),Ut([Lt()],Ke.prototype,"inputmode",2),Ut([le("disabled")],Ke.prototype,"handleDisabledChange",1),Ut([le("helpText"),le("label")],Ke.prototype,"handleSlotChange",1),Ut([le("value")],Ke.prototype,"handleValueChange",1),Ke=Ut([Ot("sl-input")],Ke);var Ge=C`
  ${mt}

  :host {
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);

    display: block;
  }

  .tab-group {
    display: flex;
    border: solid 1px transparent;
    border-radius: 0;
  }

  .tab-group .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group .tab-group__indicator {
    position: absolute;
    left: 0;
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid 2px var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: -2px;
    border-bottom: solid 2px var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid 2px var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * 2px);
    border-top: solid 2px var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-right: solid 2px var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * 2px);
    border-right: solid 2px var(--indicator-color);
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid 2px var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * 2px);
    border-left: solid 2px var(--indicator-color);
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function Je(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Xe=new Set;function Ze(t){Xe.add(t),document.body.classList.add("sl-scroll-lock")}function Ye(t){Xe.delete(t),0===Xe.size&&document.body.classList.remove("sl-scroll-lock")}function Qe(t,e,r="vertical",n="smooth"){const o=Je(t,e),i=o.top+e.scrollTop,s=o.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,h=e.scrollTop+e.offsetHeight;"horizontal"!==r&&"both"!==r||(s<a?e.scrollTo({left:s,behavior:n}):s+t.clientWidth>l&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:n})),"vertical"!==r&&"both"!==r||(i<c?e.scrollTo({top:i,behavior:n}):i+t.clientHeight>h&&e.scrollTo({top:i-e.offsetHeight+t.clientHeight,behavior:n}))}var tr=class extends bt{constructor(){super(...arguments),this.localize=new xe(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()})),this.mutationObserver=new MutationObserver((t=>{t.some((t=>!["aria-labelledby","aria-controls"].includes(t.attributeName)))&&setTimeout((()=>this.setAriaLabels())),t.some((t=>"disabled"===t.attributeName))&&this.syncTabsAndPanels()})),this.updateComplete.then((()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav);new IntersectionObserver(((t,e)=>{t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()||this.tabs[0],{emitEvents:!1}),e.unobserve(t[0].target))})).observe(this.tabGroup)}))}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(t){const e=this.tabs.find((e=>e.panel===t));e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}getAllTabs(t=!1){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter((e=>t?"sl-tab"===e.tagName.toLowerCase():"sl-tab"===e.tagName.toLowerCase()&&!e.disabled))}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter((t=>"sl-tab-panel"===t.tagName.toLowerCase()))}getActiveTab(){return this.tabs.find((t=>t.active))}handleClick(t){const e=t.target.closest("sl-tab");(null==e?void 0:e.closest("sl-tab-group"))===this&&e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("sl-tab");if((null==e?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const e=document.activeElement;if(e&&"sl-tab"===e.tagName.toLowerCase()){let r=this.tabs.indexOf(e);"Home"===t.key?r=0:"End"===t.key?r=this.tabs.length-1:["top","bottom"].includes(this.placement)&&"ArrowLeft"===t.key||["start","end"].includes(this.placement)&&"ArrowUp"===t.key?r=Math.max(0,r-1):(["top","bottom"].includes(this.placement)&&"ArrowRight"===t.key||["start","end"].includes(this.placement)&&"ArrowDown"===t.key)&&(r=Math.min(this.tabs.length-1,r+1)),this.tabs[r].focus({preventScroll:!0}),"auto"===this.activation&&this.setActiveTab(this.tabs[r],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&Qe(this.tabs[r],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.nav&&(this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth)}setActiveTab(t,e){if(e=Object.assign({emitEvents:!0,scrollBehavior:"auto"},e),t&&t!==this.activeTab&&!t.disabled){const r=this.activeTab;this.activeTab=t,this.tabs.map((t=>t.active=t===this.activeTab)),this.panels.map((t=>t.active=t.name===this.activeTab.panel)),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Qe(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(r&&_t(this,"sl-tab-hide",{detail:{name:r.panel}}),_t(this,"sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.map((t=>{const e=this.panels.find((e=>e.name===t.panel));e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))}))}syncIndicator(){if(this.indicator){if(!this.getActiveTab())return void(this.indicator.style.display="none");this.indicator.style.display="block",this.repositionIndicator()}}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,r=t.clientHeight,n=Je(t,this.nav),o=n.top+this.nav.scrollTop,i=n.left+this.nav.scrollLeft;switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.transform=`translateX(${i}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.transform=`translateY(${o}px)`}}preventIndicatorTransition(){const t=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame((()=>{this.indicator.style.transition=t}))}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels(),this.syncIndicator()}render(){return Y`
      <div
        part="base"
        class=${Yt({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?Y`
                <sl-icon-button
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  exportparts="base:scroll-button"
                  name="chevron-left"
                  library="system"
                  label=${this.localize.term("scroll_to_start")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?Y`
                <sl-icon-button
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  exportparts="base:scroll-button"
                  name="chevron-right"
                  library="system"
                  label=${this.localize.term("scroll_to_end")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <div part="body" class="tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `}};tr.styles=Ge,Ut([Pt(".tab-group")],tr.prototype,"tabGroup",2),Ut([Pt(".tab-group__body")],tr.prototype,"body",2),Ut([Pt(".tab-group__nav")],tr.prototype,"nav",2),Ut([Pt(".tab-group__indicator")],tr.prototype,"indicator",2),Ut([Nt()],tr.prototype,"hasScrollControls",2),Ut([Lt()],tr.prototype,"placement",2),Ut([Lt()],tr.prototype,"activation",2),Ut([Lt({attribute:"no-scroll-controls",type:Boolean})],tr.prototype,"noScrollControls",2),Ut([Lt()],tr.prototype,"lang",2),Ut([le("noScrollControls")],tr.prototype,"updateScrollControls",1),Ut([le("placement")],tr.prototype,"syncIndicator",1),tr=Ut([Ot("sl-tab-group")],tr);var er=C`
  ${mt}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: var(--padding);
  }
`,rr=0,nr=class extends bt{constructor(){super(...arguments),this.componentId="tab-panel-"+ ++rr,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id||this.componentId}render(){return this.style.display=this.active?"block":"none",Y`
      <div part="base" class="tab-panel" role="tabpanel" aria-hidden=${this.active?"false":"true"}>
        <slot></slot>
      </div>
    `}};nr.styles=er,Ut([Lt({reflect:!0})],nr.prototype,"name",2),Ut([Lt({type:Boolean,reflect:!0})],nr.prototype,"active",2),nr=Ut([Ot("sl-tab-panel")],nr);var or=C`
  ${mt}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab${Vt}:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
    box-shadow: inset var(--sl-focus-ring);
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-right: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-large);
    margin-left: var(--sl-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }
`,ir=0,sr=class extends bt{constructor(){super(...arguments),this.localize=new xe(this),this.componentId="tab-"+ ++ir,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}handleCloseClick(){_t(this,"sl-close")}render(){return this.id=this.id||this.componentId,Y`
      <div
        part="base"
        class=${Yt({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.active?"true":"false"}
        tabindex=${this.disabled||!this.active?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?Y`
              <sl-icon-button
                name="x"
                library="system"
                label=${this.localize.term("close")}
                exportparts="base:close-button"
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};sr.styles=or,Ut([Pt(".tab")],sr.prototype,"tab",2),Ut([Lt({reflect:!0})],sr.prototype,"panel",2),Ut([Lt({type:Boolean,reflect:!0})],sr.prototype,"active",2),Ut([Lt({type:Boolean})],sr.prototype,"closable",2),Ut([Lt({type:Boolean,reflect:!0})],sr.prototype,"disabled",2),Ut([Lt()],sr.prototype,"lang",2),sr=Ut([Ot("sl-tab")],sr);var ar=C`
  ${mt}
  ${Ve}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select__menu {
    max-height: 50vh;
    overflow: auto;
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    color: var(--sl-input-color);
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
    color: var(--sl-input-color-hover);
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: var(--sl-focus-ring);
    outline: none;
    color: var(--sl-input-color-focus);
  }

  .select--standard.select--disabled .select__control {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    outline: none;
    background-color: var(--sl-input-filled-background-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  .select--filled.select--disabled .select__control {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-left: var(--sl-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-left: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--sl-input-height-large);
  }
`,lr=0,cr=class extends bt{constructor(){super(...arguments),this.inputId="select-"+ ++lr,this.helpTextId=`select-help-text-${lr}`,this.labelId=`select-label-${lr}`,this.hasFocus=!1,this.hasHelpTextSlot=!1,this.hasLabelSlot=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.size="medium",this.hoist=!1,this.value="",this.filled=!1,this.pill=!1,this.required=!1,this.clearable=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),this.handleSlotChange=this.handleSlotChange.bind(this),this.resizeObserver=new ResizeObserver((()=>this.resizeMenu())),this.updateComplete.then((()=>{this.resizeObserver.observe(this),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange),this.syncItemsFromValue()}))}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}getItemLabel(t){return jt(t.shadowRoot.querySelector("slot:not([name])"))}getItems(){return[...this.querySelectorAll("sl-menu-item")]}getValueAsArray(){return this.multiple&&""===this.value?[]:Array.isArray(this.value)?this.value:[this.value]}handleBlur(){this.isOpen||(this.hasFocus=!1,_t(this,"sl-blur"))}handleClearClick(t){t.stopPropagation(),this.value=this.multiple?[]:"",_t(this,"sl-clear"),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}handleFocus(){this.hasFocus||(this.hasFocus=!0,_t(this,"sl-focus"))}handleKeyDown(t){const e=t.target,r=this.getItems(),n=r[0],o=r[r.length-1];if("sl-tag"!==e.tagName.toLowerCase())if("Tab"!==t.key){if(["ArrowDown","ArrowUp"].includes(t.key)){if(t.preventDefault(),this.isOpen||this.dropdown.show(),"ArrowDown"===t.key&&n)return this.menu.setCurrentItem(n),void n.focus();if("ArrowUp"===t.key&&o)return this.menu.setCurrentItem(o),void o.focus()}t.ctrlKey||t.metaKey||this.isOpen||1!==t.key.length||(t.stopPropagation(),t.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(t.key))}else this.isOpen&&this.dropdown.hide()}handleLabelClick(){var t;(null==(t=this.shadowRoot)?void 0:t.querySelector(".select__control")).focus()}handleMenuSelect(t){var e;const r=t.detail.item;this.multiple?this.value=(null==(e=this.value)?void 0:e.includes(r.value))?this.value.filter((t=>t!==r.value)):[...this.value,r.value]:this.value=r.value,this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMultipleChange(){const t=this.getValueAsArray();this.value=this.multiple?t:t[0]||"",this.syncItemsFromValue()}async handleSlotChange(){this.hasHelpTextSlot=Ft(this,"help-text"),this.hasLabelSlot=Ft(this,"label");const t=this.getItems(),e=[];t.map((t=>{e.includes(t.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${t.value}'`,t),e.push(t.value)})),await Promise.all(t.map((t=>t.render))).then((()=>this.syncItemsFromValue()))}handleTagInteraction(t){t.composedPath().find((t=>{if(t instanceof HTMLElement){return t.classList.contains("tag__remove")}return!1}))&&t.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity(),_t(this,"sl-change")}resizeMenu(){var t;const e=null==(t=this.shadowRoot)?void 0:t.querySelector(".select__control");this.menu.style.width=`${e.clientWidth}px`,this.dropdown&&this.dropdown.reposition()}syncItemsFromValue(){const t=this.getItems(),e=this.getValueAsArray();if(t.map((t=>t.checked=e.includes(t.value))),this.multiple){const r=t.filter((t=>e.includes(t.value)));if(this.displayLabel=r[0]?this.getItemLabel(r[0]):"",this.displayTags=r.map((t=>Y`
          <sl-tag
            exportparts="base:tag"
            type="neutral"
            size=${this.size}
            ?pill=${this.pill}
            removable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-remove=${e=>{e.stopPropagation(),this.disabled||(t.checked=!1,this.syncValueFromItems())}}
          >
            ${this.getItemLabel(t)}
          </sl-tag>
        `)),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const t=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(Y`
          <sl-tag exportparts="base:tag" type="neutral" size=${this.size}> +${t-this.maxTagsVisible} </sl-tag>
        `)}}else{const r=t.filter((t=>t.value===e[0]))[0];this.displayLabel=r?this.getItemLabel(r):"",this.displayTags=[]}}syncValueFromItems(){const t=this.getItems().filter((t=>t.checked)).map((t=>t.value));this.multiple?this.value=this.value.filter((e=>t.includes(e))):this.value=t.length>0?t[0]:""}render(){var t,e;const r=this.multiple?(null==(t=this.value)?void 0:t.length)>0:""!==this.value;return Fe({inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:this.hasHelpTextSlot,size:this.size,onLabelClick:()=>this.handleLabelClick()},Y`
        <sl-dropdown
          part="base"
          .hoist=${this.hoist}
          .stayOpenOnSelect=${this.multiple}
          .containingElement=${this}
          ?disabled=${this.disabled}
          class=${Yt({select:!0,"select--open":this.isOpen,"select--empty":0===(null==(e=this.value)?void 0:e.length),"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--standard":!this.filled,"select--filled":this.filled,"select--has-tags":this.multiple&&this.displayTags.length>0,"select--placeholder-visible":""===this.displayLabel,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size,"select--pill":this.pill,"select--invalid":this.invalid})}
          @sl-show=${this.handleMenuShow}
          @sl-hide=${this.handleMenuHide}
        >
          <div
            part="control"
            slot="trigger"
            id=${this.inputId}
            class="select__control"
            role="combobox"
            aria-labelledby=${Qt(He({label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpText:this.helpText,helpTextId:this.helpTextId,hasHelpTextSlot:this.hasHelpTextSlot}))}
            aria-haspopup="true"
            aria-expanded=${this.isOpen?"true":"false"}
            tabindex=${this.disabled?"-1":"0"}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          >
            <span part="prefix" class="select__prefix">
              <slot name="prefix"></slot>
            </span>

            <div class="select__label">
              ${this.displayTags.length?Y` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel||this.placeholder}
            </div>

            ${this.clearable&&r?Y`
                  <button
                    part="clear-button"
                    class="select__clear"
                    library="system"
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}

            <span part="suffix" class="select__suffix">
              <slot name="suffix"></slot>
            </span>

            <span part="icon" class="select__icon" aria-hidden="true">
              <sl-icon name="chevron-down" library="system"></sl-icon>
            </span>

            <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
            instead of a select because, otherwise, iOS will show a list of options during validation. -->
            <input
              class="select__hidden-select"
              aria-hidden="true"
              ?required=${this.required}
              .value=${r?"1":""}
              tabindex="-1"
            />
          </div>

          <sl-menu part="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
            <slot @slotchange=${this.handleSlotChange}></slot>
          </sl-menu>
        </sl-dropdown>
      `)}};cr.styles=ar,Ut([Pt(".select")],cr.prototype,"dropdown",2),Ut([Pt(".select__control")],cr.prototype,"control",2),Ut([Pt(".select__hidden-select")],cr.prototype,"input",2),Ut([Pt(".select__menu")],cr.prototype,"menu",2),Ut([Nt()],cr.prototype,"hasFocus",2),Ut([Nt()],cr.prototype,"hasHelpTextSlot",2),Ut([Nt()],cr.prototype,"hasLabelSlot",2),Ut([Nt()],cr.prototype,"isOpen",2),Ut([Nt()],cr.prototype,"displayLabel",2),Ut([Nt()],cr.prototype,"displayTags",2),Ut([Lt({type:Boolean,reflect:!0})],cr.prototype,"multiple",2),Ut([Lt({attribute:"max-tags-visible",type:Number})],cr.prototype,"maxTagsVisible",2),Ut([Lt({type:Boolean,reflect:!0})],cr.prototype,"disabled",2),Ut([Lt()],cr.prototype,"name",2),Ut([Lt()],cr.prototype,"placeholder",2),Ut([Lt()],cr.prototype,"size",2),Ut([Lt({type:Boolean})],cr.prototype,"hoist",2),Ut([Lt()],cr.prototype,"value",2),Ut([Lt({type:Boolean,reflect:!0})],cr.prototype,"filled",2),Ut([Lt({type:Boolean,reflect:!0})],cr.prototype,"pill",2),Ut([Lt()],cr.prototype,"label",2),Ut([Lt({attribute:"help-text"})],cr.prototype,"helpText",2),Ut([Lt({type:Boolean,reflect:!0})],cr.prototype,"required",2),Ut([Lt({type:Boolean})],cr.prototype,"clearable",2),Ut([Lt({type:Boolean,reflect:!0})],cr.prototype,"invalid",2),Ut([le("disabled")],cr.prototype,"handleDisabledChange",1),Ut([le("multiple")],cr.prototype,"handleMultipleChange",1),Ut([le("helpText"),le("label")],cr.prototype,"handleSlotChange",1),Ut([le("value",{waitUntilFirstUpdate:!0})],cr.prototype,"handleValueChange",1),cr=Ut([Ot("sl-select")],cr);var hr=C`
  ${mt}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Type modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-left: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag__remove {
    margin-left: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-2x-small));
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-left: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,ur=class extends bt{constructor(){super(...arguments),this.type="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){_t(this,"sl-remove")}render(){return Y`
      <span
        part="base"
        class=${Yt({tag:!0,"tag--primary":"primary"===this.type,"tag--success":"success"===this.type,"tag--neutral":"neutral"===this.type,"tag--warning":"warning"===this.type,"tag--danger":"danger"===this.type,"tag--text":"text"===this.type,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable?Y`
              <sl-icon-button
                exportparts="base:remove-button"
                name="x"
                library="system"
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></sl-icon-button>
            `:""}
      </span>
    `}};ur.styles=hr,Ut([Lt({reflect:!0})],ur.prototype,"type",2),Ut([Lt({reflect:!0})],ur.prototype,"size",2),Ut([Lt({type:Boolean,reflect:!0})],ur.prototype,"pill",2),Ut([Lt({type:Boolean})],ur.prototype,"removable",2),ur=Ut([Ot("sl-tag")],ur);var dr=C`
  ${mt}

  :host {
    display: block;
  }

  .menu {
    padding: var(--sl-spacing-x-small) 0;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,pr=class extends bt{constructor(){super(...arguments),this.typeToSelectString=""}firstUpdated(){this.setAttribute("role","menu")}getAllItems(t={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>"menuitem"===e.getAttribute("role")&&!(!(null==t?void 0:t.includeDisabled)&&e.disabled)))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find((t=>"0"===t.getAttribute("tabindex")))}setCurrentItem(t){const e=this.getAllItems({includeDisabled:!1});let r=t.disabled?e[0]:t;e.map((t=>t.setAttribute("tabindex",t===r?"0":"-1")))}typeToSelect(t){const e=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=setTimeout((()=>this.typeToSelectString=""),750),this.typeToSelectString+=t.toLowerCase(),Ht||e.map((t=>t.classList.remove("sl-focus-invisible")));for(const t of e){if(jt(t.shadowRoot.querySelector("slot:not([name])")).toLowerCase().trim().substring(0,this.typeToSelectString.length)===this.typeToSelectString){this.setCurrentItem(t),t.focus();break}}}handleClick(t){const e=t.target.closest("sl-menu-item");e&&!e.disabled&&_t(this,"sl-select",{detail:{item:e}})}handleKeyUp(){if(!Ht){this.getAllItems().map((t=>t.classList.remove("sl-focus-invisible")))}}handleKeyDown(t){if("Enter"===t.key){const e=this.getCurrentItem();t.preventDefault(),e&&e.click()}if(" "===t.key&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems({includeDisabled:!1}),r=this.getCurrentItem();let n=r?e.indexOf(r):0;if(e.length)return t.preventDefault(),"ArrowDown"===t.key?n++:"ArrowUp"===t.key?n--:"Home"===t.key?n=0:"End"===t.key&&(n=e.length-1),n<0&&(n=0),n>e.length-1&&(n=e.length-1),this.setCurrentItem(e[n]),void e[n].focus()}this.typeToSelect(t.key)}handleMouseDown(t){const e=t.target;"menuitem"===e.getAttribute("role")&&(this.setCurrentItem(e),Ht||e.classList.add("sl-focus-invisible"))}handleSlotChange(){const t=this.getAllItems({includeDisabled:!1});t.length&&this.setCurrentItem(t[0])}render(){return Y`
      <div
        part="base"
        class="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function fr(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function br(t){return t instanceof fr(t).Element||t instanceof Element}function gr(t){return t instanceof fr(t).HTMLElement||t instanceof HTMLElement}function yr(t){return"undefined"!=typeof ShadowRoot&&(t instanceof fr(t).ShadowRoot||t instanceof ShadowRoot)}pr.styles=dr,Ut([Pt(".menu")],pr.prototype,"menu",2),Ut([Pt("slot")],pr.prototype,"defaultSlot",2),pr=Ut([Ot("sl-menu")],pr);var mr=Math.max,wr=Math.min,vr=Math.round;function _r(t,e){void 0===e&&(e=!1);var r=t.getBoundingClientRect(),n=1,o=1;if(gr(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(n=vr(r.width)/s||1),i>0&&(o=vr(r.height)/i||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function xr(t){var e=fr(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function kr(t){return t?(t.nodeName||"").toLowerCase():null}function Ar(t){return((br(t)?t.ownerDocument:t.document)||window.document).documentElement}function Er(t){return _r(Ar(t)).left+xr(t).scrollLeft}function Cr(t){return fr(t).getComputedStyle(t)}function Sr(t){var e=Cr(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function $r(t,e,r){void 0===r&&(r=!1);var n,o,i=gr(e),s=gr(e)&&function(t){var e=t.getBoundingClientRect(),r=vr(e.width)/t.offsetWidth||1,n=vr(e.height)/t.offsetHeight||1;return 1!==r||1!==n}(e),a=Ar(e),l=_r(t,s),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(i||!i&&!r)&&(("body"!==kr(e)||Sr(a))&&(c=(n=e)!==fr(n)&&gr(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:xr(n)),gr(e)?((h=_r(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Er(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function Tr(t){var e=_r(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function Ir(t){return"html"===kr(t)?t:t.assignedSlot||t.parentNode||(yr(t)?t.host:null)||Ar(t)}function Br(t){return["html","body","#document"].indexOf(kr(t))>=0?t.ownerDocument.body:gr(t)&&Sr(t)?t:Br(Ir(t))}function zr(t,e){var r;void 0===e&&(e=[]);var n=Br(t),o=n===(null==(r=t.ownerDocument)?void 0:r.body),i=fr(n),s=o?[i].concat(i.visualViewport||[],Sr(n)?n:[]):n,a=e.concat(s);return o?a:a.concat(zr(Ir(s)))}function Ur(t){return["table","td","th"].indexOf(kr(t))>=0}function Or(t){return gr(t)&&"fixed"!==Cr(t).position?t.offsetParent:null}function Dr(t){for(var e=fr(t),r=Or(t);r&&Ur(r)&&"static"===Cr(r).position;)r=Or(r);return r&&("html"===kr(r)||"body"===kr(r)&&"static"===Cr(r).position)?e:r||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&gr(t)&&"fixed"===Cr(t).position)return null;for(var r=Ir(t);gr(r)&&["html","body"].indexOf(kr(r))<0;){var n=Cr(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(t)||e}var Lr="top",Nr="bottom",Rr="right",Pr="left",Mr="auto",jr=[Lr,Nr,Rr,Pr],Fr="start",Hr="end",Vr="viewport",qr="popper",Wr=jr.reduce((function(t,e){return t.concat([e+"-"+Fr,e+"-"+Hr])}),[]),Kr=[].concat(jr,[Mr]).reduce((function(t,e){return t.concat([e,e+"-"+Fr,e+"-"+Hr])}),[]),Gr=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Jr(t){var e=new Map,r=new Set,n=[];function o(t){r.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!r.has(t)){var n=e.get(t);n&&o(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){r.has(t.name)||o(t)})),n}function Xr(t){return t.split("-")[0]}function Zr(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&yr(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Yr(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Qr(t,e){return e===Vr?Yr(function(t){var e=fr(t),r=Ar(t),n=e.visualViewport,o=r.clientWidth,i=r.clientHeight,s=0,a=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=n.offsetLeft,a=n.offsetTop)),{width:o,height:i,x:s+Er(t),y:a}}(t)):br(e)?function(t){var e=_r(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Yr(function(t){var e,r=Ar(t),n=xr(t),o=null==(e=t.ownerDocument)?void 0:e.body,i=mr(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=mr(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+Er(t),l=-n.scrollTop;return"rtl"===Cr(o||r).direction&&(a+=mr(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}(Ar(t)))}function tn(t,e,r){var n="clippingParents"===e?function(t){var e=zr(Ir(t)),r=["absolute","fixed"].indexOf(Cr(t).position)>=0,n=r&&gr(t)?Dr(t):t;return br(n)?e.filter((function(t){return br(t)&&Zr(t,n)&&"body"!==kr(t)&&(!r||"static"!==Cr(t).position)})):[]}(t):[].concat(e),o=[].concat(n,[r]),i=o[0],s=o.reduce((function(e,r){var n=Qr(t,r);return e.top=mr(n.top,e.top),e.right=wr(n.right,e.right),e.bottom=wr(n.bottom,e.bottom),e.left=mr(n.left,e.left),e}),Qr(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function en(t){return t.split("-")[1]}function rn(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function nn(t){var e,r=t.reference,n=t.element,o=t.placement,i=o?Xr(o):null,s=o?en(o):null,a=r.x+r.width/2-n.width/2,l=r.y+r.height/2-n.height/2;switch(i){case Lr:e={x:a,y:r.y-n.height};break;case Nr:e={x:a,y:r.y+r.height};break;case Rr:e={x:r.x+r.width,y:l};break;case Pr:e={x:r.x-n.width,y:l};break;default:e={x:r.x,y:r.y}}var c=i?rn(i):null;if(null!=c){var h="y"===c?"height":"width";switch(s){case Fr:e[c]=e[c]-(r[h]/2-n[h]/2);break;case Hr:e[c]=e[c]+(r[h]/2-n[h]/2)}}return e}function on(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function sn(t,e){return e.reduce((function(e,r){return e[r]=t,e}),{})}function an(t,e){void 0===e&&(e={});var r=e,n=r.placement,o=void 0===n?t.placement:n,i=r.boundary,s=void 0===i?"clippingParents":i,a=r.rootBoundary,l=void 0===a?Vr:a,c=r.elementContext,h=void 0===c?qr:c,u=r.altBoundary,d=void 0!==u&&u,p=r.padding,f=void 0===p?0:p,b=on("number"!=typeof f?f:sn(f,jr)),g=h===qr?"reference":qr,y=t.rects.popper,m=t.elements[d?g:h],w=tn(br(m)?m:m.contextElement||Ar(t.elements.popper),s,l),v=_r(t.elements.reference),_=nn({reference:v,element:y,strategy:"absolute",placement:o}),x=Yr(Object.assign({},y,_)),k=h===qr?x:v,A={top:w.top-k.top+b.top,bottom:k.bottom-w.bottom+b.bottom,left:w.left-k.left+b.left,right:k.right-w.right+b.right},E=t.modifiersData.offset;if(h===qr&&E){var C=E[o];Object.keys(A).forEach((function(t){var e=[Rr,Nr].indexOf(t)>=0?1:-1,r=[Lr,Nr].indexOf(t)>=0?"y":"x";A[t]+=C[r]*e}))}return A}var ln={placement:"bottom",modifiers:[],strategy:"absolute"};function cn(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function hn(t){void 0===t&&(t={});var e=t,r=e.defaultModifiers,n=void 0===r?[]:r,o=e.defaultOptions,i=void 0===o?ln:o;return function(t,e,r){void 0===r&&(r=i);var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ln,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(r){var o="function"==typeof r?r(a.options):r;u(),a.options=Object.assign({},i,a.options,o),a.scrollParents={reference:br(t)?zr(t):t.contextElement?zr(t.contextElement):[],popper:zr(e)};var s=function(t){var e=Jr(t);return Gr.reduce((function(t,r){return t.concat(e.filter((function(t){return t.phase===r})))}),[])}(function(t){var e=t.reduce((function(t,e){var r=t[e.name];return t[e.name]=r?Object.assign({},r,e,{options:Object.assign({},r.options,e.options),data:Object.assign({},r.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(n,a.options.modifiers)));return a.orderedModifiers=s.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,r=t.options,n=void 0===r?{}:r,o=t.effect;if("function"==typeof o){var i=o({state:a,name:e,instance:h,options:n}),s=function(){};l.push(i||s)}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,r=t.popper;if(cn(e,r)){a.rects={reference:$r(e,Dr(r),"fixed"===a.options.strategy),popper:Tr(r)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var o=a.orderedModifiers[n],i=o.fn,s=o.options,l=void 0===s?{}:s,u=o.name;"function"==typeof i&&(a=i({state:a,options:l,name:u,instance:h})||a)}else a.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(o())}))}))),s}),destroy:function(){u(),c=!0}};if(!cn(t,e))return h;function u(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(r).then((function(t){!c&&r.onFirstUpdate&&r.onFirstUpdate(t)})),h}}var un={passive:!0};var dn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,r=t.instance,n=t.options,o=n.scroll,i=void 0===o||o,s=n.resize,a=void 0===s||s,l=fr(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach((function(t){t.addEventListener("scroll",r.update,un)})),a&&l.addEventListener("resize",r.update,un),function(){i&&c.forEach((function(t){t.removeEventListener("scroll",r.update,un)})),a&&l.removeEventListener("resize",r.update,un)}},data:{}};var pn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fn(t){var e,r=t.popper,n=t.popperRect,o=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,u=t.isFixed,d=!0===h?function(t){var e=t.x,r=t.y,n=window.devicePixelRatio||1;return{x:vr(e*n)/n||0,y:vr(r*n)/n||0}}(s):"function"==typeof h?h(s):s,p=d.x,f=void 0===p?0:p,b=d.y,g=void 0===b?0:b,y=s.hasOwnProperty("x"),m=s.hasOwnProperty("y"),w=Pr,v=Lr,_=window;if(c){var x=Dr(r),k="clientHeight",A="clientWidth";if(x===fr(r)&&"static"!==Cr(x=Ar(r)).position&&"absolute"===a&&(k="scrollHeight",A="scrollWidth"),x=x,o===Lr||(o===Pr||o===Rr)&&i===Hr)v=Nr,g-=(u&&_.visualViewport?_.visualViewport.height:x[k])-n.height,g*=l?1:-1;if(o===Pr||(o===Lr||o===Nr)&&i===Hr)w=Rr,f-=(u&&_.visualViewport?_.visualViewport.width:x[A])-n.width,f*=l?1:-1}var E,C=Object.assign({position:a},c&&pn);return l?Object.assign({},C,((E={})[v]=m?"0":"",E[w]=y?"0":"",E.transform=(_.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",E)):Object.assign({},C,((e={})[v]=m?g+"px":"",e[w]=y?f+"px":"",e.transform="",e))}var bn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,r=t.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,s=void 0===i||i,a=r.roundOffsets,l=void 0===a||a,c={placement:Xr(e.placement),variation:en(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,fn(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,fn(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var gn={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var r=e.styles[t]||{},n=e.attributes[t]||{},o=e.elements[t];gr(o)&&kr(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(t){var e=n[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],o=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:r[t]).reduce((function(t,e){return t[e]="",t}),{});gr(n)&&kr(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};var yn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,r=t.options,n=t.name,o=r.offset,i=void 0===o?[0,0]:o,s=Kr.reduce((function(t,r){return t[r]=function(t,e,r){var n=Xr(t),o=[Pr,Lr].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},e,{placement:t})):r,s=i[0],a=i[1];return s=s||0,a=(a||0)*o,[Pr,Rr].indexOf(n)>=0?{x:a,y:s}:{x:s,y:a}}(r,e.rects,i),t}),{}),a=s[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=s}},mn={left:"right",right:"left",bottom:"top",top:"bottom"};function wn(t){return t.replace(/left|right|bottom|top/g,(function(t){return mn[t]}))}var vn={start:"end",end:"start"};function _n(t){return t.replace(/start|end/g,(function(t){return vn[t]}))}var xn={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,s=r.altAxis,a=void 0===s||s,l=r.fallbackPlacements,c=r.padding,h=r.boundary,u=r.rootBoundary,d=r.altBoundary,p=r.flipVariations,f=void 0===p||p,b=r.allowedAutoPlacements,g=e.options.placement,y=Xr(g),m=l||(y===g||!f?[wn(g)]:function(t){if(Xr(t)===Mr)return[];var e=wn(t);return[_n(t),e,_n(e)]}(g)),w=[g].concat(m).reduce((function(t,r){return t.concat(Xr(r)===Mr?function(t,e){void 0===e&&(e={});var r=e,n=r.placement,o=r.boundary,i=r.rootBoundary,s=r.padding,a=r.flipVariations,l=r.allowedAutoPlacements,c=void 0===l?Kr:l,h=en(n),u=h?a?Wr:Wr.filter((function(t){return en(t)===h})):jr,d=u.filter((function(t){return c.indexOf(t)>=0}));0===d.length&&(d=u);var p=d.reduce((function(e,r){return e[r]=an(t,{placement:r,boundary:o,rootBoundary:i,padding:s})[Xr(r)],e}),{});return Object.keys(p).sort((function(t,e){return p[t]-p[e]}))}(e,{placement:r,boundary:h,rootBoundary:u,padding:c,flipVariations:f,allowedAutoPlacements:b}):r)}),[]),v=e.rects.reference,_=e.rects.popper,x=new Map,k=!0,A=w[0],E=0;E<w.length;E++){var C=w[E],S=Xr(C),$=en(C)===Fr,T=[Lr,Nr].indexOf(S)>=0,I=T?"width":"height",B=an(e,{placement:C,boundary:h,rootBoundary:u,altBoundary:d,padding:c}),z=T?$?Rr:Pr:$?Nr:Lr;v[I]>_[I]&&(z=wn(z));var U=wn(z),O=[];if(i&&O.push(B[S]<=0),a&&O.push(B[z]<=0,B[U]<=0),O.every((function(t){return t}))){A=C,k=!1;break}x.set(C,O)}if(k)for(var D=function(t){var e=w.find((function(e){var r=x.get(e);if(r)return r.slice(0,t).every((function(t){return t}))}));if(e)return A=e,"break"},L=f?3:1;L>0;L--){if("break"===D(L))break}e.placement!==A&&(e.modifiersData[n]._skip=!0,e.placement=A,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function kn(t,e,r){return mr(t,wr(e,r))}var An={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,r=t.options,n=t.name,o=r.mainAxis,i=void 0===o||o,s=r.altAxis,a=void 0!==s&&s,l=r.boundary,c=r.rootBoundary,h=r.altBoundary,u=r.padding,d=r.tether,p=void 0===d||d,f=r.tetherOffset,b=void 0===f?0:f,g=an(e,{boundary:l,rootBoundary:c,padding:u,altBoundary:h}),y=Xr(e.placement),m=en(e.placement),w=!m,v=rn(y),_="x"===v?"y":"x",x=e.modifiersData.popperOffsets,k=e.rects.reference,A=e.rects.popper,E="function"==typeof b?b(Object.assign({},e.rects,{placement:e.placement})):b,C="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),S=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,$={x:0,y:0};if(x){if(i){var T,I="y"===v?Lr:Pr,B="y"===v?Nr:Rr,z="y"===v?"height":"width",U=x[v],O=U+g[I],D=U-g[B],L=p?-A[z]/2:0,N=m===Fr?k[z]:A[z],R=m===Fr?-A[z]:-k[z],P=e.elements.arrow,M=p&&P?Tr(P):{width:0,height:0},j=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},F=j[I],H=j[B],V=kn(0,k[z],M[z]),q=w?k[z]/2-L-V-F-C.mainAxis:N-V-F-C.mainAxis,W=w?-k[z]/2+L+V+H+C.mainAxis:R+V+H+C.mainAxis,K=e.elements.arrow&&Dr(e.elements.arrow),G=K?"y"===v?K.clientTop||0:K.clientLeft||0:0,J=null!=(T=null==S?void 0:S[v])?T:0,X=U+W-J,Z=kn(p?wr(O,U+q-J-G):O,U,p?mr(D,X):D);x[v]=Z,$[v]=Z-U}if(a){var Y,Q="x"===v?Lr:Pr,tt="x"===v?Nr:Rr,et=x[_],rt="y"===_?"height":"width",nt=et+g[Q],ot=et-g[tt],it=-1!==[Lr,Pr].indexOf(y),st=null!=(Y=null==S?void 0:S[_])?Y:0,at=it?nt:et-k[rt]-A[rt]-st+C.altAxis,lt=it?et+k[rt]+A[rt]-st-C.altAxis:ot,ct=p&&it?function(t,e,r){var n=kn(t,e,r);return n>r?r:n}(at,et,lt):kn(p?at:nt,et,p?lt:ot);x[_]=ct,$[_]=ct-et}e.modifiersData[n]=$}},requiresIfExists:["offset"]};var En={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,r=t.state,n=t.name,o=t.options,i=r.elements.arrow,s=r.modifiersData.popperOffsets,a=Xr(r.placement),l=rn(a),c=[Pr,Rr].indexOf(a)>=0?"height":"width";if(i&&s){var h=function(t,e){return on("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:sn(t,jr))}(o.padding,r),u=Tr(i),d="y"===l?Lr:Pr,p="y"===l?Nr:Rr,f=r.rects.reference[c]+r.rects.reference[l]-s[l]-r.rects.popper[c],b=s[l]-r.rects.reference[l],g=Dr(i),y=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,m=f/2-b/2,w=h[d],v=y-u[c]-h[p],_=y/2-u[c]/2+m,x=kn(w,_,v),k=l;r.modifiersData[n]=((e={})[k]=x,e.centerOffset=x-_,e)}},effect:function(t){var e=t.state,r=t.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Zr(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Cn(t,e,r){return void 0===r&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Sn(t){return[Lr,Rr,Nr,Pr].some((function(e){return t[e]>=0}))}var $n=hn({defaultModifiers:[dn,{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,r=t.name;e.modifiersData[r]=nn({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},bn,gn,yn,xn,An,En,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,r=t.name,n=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,s=an(e,{elementContext:"reference"}),a=an(e,{altBoundary:!0}),l=Cn(s,n),c=Cn(a,o,i),h=Sn(l),u=Sn(c);e.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:u},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":u})}}]}),Tn=C`
  ${mt}

  :host {
    display: inline-block;
  }

  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__positioner {
    position: absolute;
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown__panel {
    max-height: 75vh;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-popper-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-popper-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-popper-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-popper-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`;function In(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(!!t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}function Bn(t){const e=[];!function t(r){r instanceof HTMLElement&&(e.push(r),r.shadowRoot&&"open"===r.shadowRoot.mode&&t(r.shadowRoot)),[...r.querySelectorAll("*")].map((e=>t(e)))}(t);return{start:e.find((t=>In(t)))||null,end:e.reverse().find((t=>In(t)))||null}}function zn(t,e,r){return new Promise((async n=>{if((null==r?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,zt(Bt({},r),{duration:Un()?0:r.duration}));o.addEventListener("cancel",n,{once:!0}),o.addEventListener("finish",n,{once:!0})}))}function Un(){const t=window.matchMedia("(prefers-reduced-motion: reduce)");return null==t?void 0:t.matches}function On(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const r=requestAnimationFrame(e);t.addEventListener("cancel",(()=>r),{once:!0}),t.addEventListener("finish",(()=>r),{once:!0}),t.cancel()})))))}function Dn(t,e){return t.map((t=>Object.assign({},t,{height:"auto"===t.height?`${e}px`:t.height})))}var Ln=new Map,Nn=new WeakMap;function Rn(t){return null!=t?t:{keyframes:[],options:{duration:0}}}function Pn(t,e){Ln.set(t,Rn(e))}function Mn(t,e){const r=Nn.get(t);if(r&&r[e])return r[e];const n=Ln.get(e);return n||{keyframes:[],options:{duration:0}}}var jn=0,Fn=class extends bt{constructor(){super(...arguments),this.componentId="dropdown-"+ ++jn,this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this),this.updateComplete.then((()=>{this.popover=$n(this.trigger,this.positioner,{placement:this.placement,strategy:this.hoist?"fixed":"absolute",modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.skidding,this.distance]}}]})}))}firstUpdated(){this.panel.hidden=!this.open}disconnectedCallback(){super.disconnectedCallback(),this.hide(),this.popover&&this.popover.destroy()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];t&&"function"==typeof t.focus&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).filter((t=>"sl-menu"===t.tagName.toLowerCase()))[0]}handleDocumentKeyDown(t){var e;if("Escape"===t.key)return this.hide(),void this.focusOnTrigger();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var t,e;const r=this.containingElement.getRootNode()instanceof ShadowRoot?null==(e=null==(t=document.activeElement)?void 0:t.shadowRoot)?void 0:e.activeElement:document.activeElement;(null==r?void 0:r.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}}handleDocumentMouseDown(t){t.composedPath().includes(this.containingElement)||this.hide()}handleMenuItemActivate(t){Qe(t.target,this.panel)}handlePanelSelect(t){const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}handlePopoverOptionsChange(){this.popover&&this.popover.setOptions({placement:this.placement,strategy:this.hoist?"fixed":"absolute",modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.skidding,this.distance]}}]})}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){const e=this.getMenu(),r=e?[...e.querySelectorAll("sl-menu-item")]:[],n=r[0],o=r[r.length-1];if("Escape"===t.key)return this.focusOnTrigger(),void this.hide();if([" ","Enter"].includes(t.key))return t.preventDefault(),void(this.open?this.hide():this.show());if(["ArrowDown","ArrowUp"].includes(t.key)){if(t.preventDefault(),this.open||this.show(),"ArrowDown"===t.key&&n){return this.getMenu().setCurrentItem(n),void n.focus()}if("ArrowUp"===t.key&&o)return e.setCurrentItem(o),void o.focus()}this.open&&e&&!["Tab","Shift","Meta","Ctrl","Alt"].includes(t.key)&&e.typeToSelect(t.key)}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){if(this.trigger){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find((t=>Bn(t).start));t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}reposition(){this.open&&this.popover.update()}async handleOpenChange(){if(!this.disabled)if(this.updateAccessibleTrigger(),this.open){_t(this,"sl-show"),this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),await On(this),this.popover.update(),this.panel.hidden=!1;const{keyframes:t,options:e}=Mn(this,"dropdown.show");await zn(this.panel,t,e),_t(this,"sl-after-show")}else{_t(this,"sl-hide"),this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),await On(this);const{keyframes:t,options:e}=Mn(this,"dropdown.hide");await zn(this.panel,t,e),this.panel.hidden=!0,_t(this,"sl-after-hide")}}render(){return Y`
      <div
        part="base"
        id=${this.componentId}
        class=${Yt({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="dropdown__positioner">
          <div
            part="panel"
            class="dropdown__panel"
            aria-hidden=${this.open?"false":"true"}
            aria-labelledby=${this.componentId}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `}};Fn.styles=Tn,Ut([Pt(".dropdown__trigger")],Fn.prototype,"trigger",2),Ut([Pt(".dropdown__panel")],Fn.prototype,"panel",2),Ut([Pt(".dropdown__positioner")],Fn.prototype,"positioner",2),Ut([Lt({type:Boolean,reflect:!0})],Fn.prototype,"open",2),Ut([Lt()],Fn.prototype,"placement",2),Ut([Lt({type:Boolean})],Fn.prototype,"disabled",2),Ut([Lt({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Fn.prototype,"stayOpenOnSelect",2),Ut([Lt({attribute:!1})],Fn.prototype,"containingElement",2),Ut([Lt({type:Number})],Fn.prototype,"distance",2),Ut([Lt({type:Number})],Fn.prototype,"skidding",2),Ut([Lt({type:Boolean})],Fn.prototype,"hoist",2),Ut([le("distance"),le("hoist"),le("placement"),le("skidding")],Fn.prototype,"handlePopoverOptionsChange",1),Ut([le("open",{waitUntilFirstUpdate:!0})],Fn.prototype,"handleOpenChange",1),Fn=Ut([Ot("sl-dropdown")],Fn),Pn("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}}),Pn("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var Hn=C`
  ${mt}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    text-align: left;
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--sl-color-neutral-400);
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-right: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-left: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${Vt}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check {
    display: flex;
    position: absolute;
    left: 0.5em;
    top: calc(50% - 0.5em);
    visibility: hidden;
    align-items: center;
    font-size: inherit;
  }

  .menu-item--checked .menu-item__check {
    visibility: visible;
  }
`,Vn=class extends bt{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}handleCheckedChange(){this.setAttribute("aria-checked",String(this.checked))}handleDisabledChange(){this.setAttribute("aria-disabled",String(this.disabled))}render(){return Y`
      <div
        part="base"
        class=${Yt({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled})}
      >
        <sl-icon
          part="checked-icon"
          class="menu-item__check"
          name="check"
          library="system"
          aria-hidden="true"
        ></sl-icon>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `}};Vn.styles=Hn,Ut([Pt(".menu-item")],Vn.prototype,"menuItem",2),Ut([Lt({type:Boolean,reflect:!0})],Vn.prototype,"checked",2),Ut([Lt()],Vn.prototype,"value",2),Ut([Lt({type:Boolean,reflect:!0})],Vn.prototype,"disabled",2),Ut([le("checked")],Vn.prototype,"handleCheckedChange",1),Ut([le("disabled")],Vn.prototype,"handleDisabledChange",1),Vn=Ut([Ot("sl-menu-item")],Vn);var qn=C`
  ${mt}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header${Vt} {
    box-shadow: var(--sl-focus-ring);
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header${Vt} {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) transform ease;
  }

  .details--open .details__summary-icon {
    transform: rotate(90deg);
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    padding: var(--sl-spacing-medium);
  }
`,Wn=0,Kn=class extends bt{constructor(){super(...arguments),this.componentId="details-"+ ++Wn,this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==t.key&&"ArrowLeft"!==t.key||(t.preventDefault(),this.hide()),"ArrowDown"!==t.key&&"ArrowRight"!==t.key||(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){_t(this,"sl-show"),await On(this),this.body.hidden=!1;const{keyframes:t,options:e}=Mn(this,"details.show");await zn(this.body,Dn(t,this.body.scrollHeight),e),this.body.style.height="auto",_t(this,"sl-after-show")}else{_t(this,"sl-hide"),await On(this);const{keyframes:t,options:e}=Mn(this,"details.hide");await zn(this.body,Dn(t,this.body.scrollHeight),e),this.body.hidden=!0,this.body.style.height="auto",_t(this,"sl-after-hide")}}render(){return Y`
      <div
        part="base"
        class=${Yt({details:!0,"details--open":this.open,"details--disabled":this.disabled})}
      >
        <header
          part="header"
          id=${`${this.componentId}-header`}
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls=${`${this.componentId}-content`}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <div part="summary" class="details__summary">
            <slot name="summary">${this.summary}</slot>
          </div>

          <span part="summary-icon" class="details__summary-icon">
            <sl-icon name="chevron-right" library="system"></sl-icon>
          </span>
        </header>

        <div class="details__body">
          <div
            part="content"
            id=${`${this.componentId}-content`}
            class="details__content"
            role="region"
            aria-labelledby=${`${this.componentId}-header`}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `}};Kn.styles=qn,Ut([Pt(".details")],Kn.prototype,"details",2),Ut([Pt(".details__header")],Kn.prototype,"header",2),Ut([Pt(".details__body")],Kn.prototype,"body",2),Ut([Lt({type:Boolean,reflect:!0})],Kn.prototype,"open",2),Ut([Lt()],Kn.prototype,"summary",2),Ut([Lt({type:Boolean,reflect:!0})],Kn.prototype,"disabled",2),Ut([le("open",{waitUntilFirstUpdate:!0})],Kn.prototype,"handleOpenChange",1),Kn=Ut([Ot("sl-details")],Kn),Pn("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),Pn("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var Gn=C`
  ${mt}

  :host {
    --height: var(--sl-toggle-size);
    --thumb-size: calc(var(--sl-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    transform: translateX(calc((var(--width) - var(--height)) / -2));
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input${Vt} ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled)
    .switch__input${Vt}
    ~ .switch__control
    .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    box-shadow: var(--sl-focus-ring);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    transform: translateX(calc((var(--width) - var(--height)) / 2));
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input${Vt} ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled)
    .switch__input${Vt}
    ~ .switch__control
    .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    box-shadow: var(--sl-focus-ring);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    line-height: var(--height);
    margin-left: 0.5em;
    user-select: none;
  }
`,Jn=0,Xn=class extends bt{constructor(){super(...arguments),this.switchId="switch-"+ ++Jn,this.labelId=`switch-label-${Jn}`,this.hasFocus=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.invalid=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,_t(this,"sl-blur")}handleCheckedChange(){this.input&&(this.input.checked=this.checked,this.invalid=!this.input.checkValidity())}handleClick(){this.checked=!this.checked,_t(this,"sl-change")}handleDisabledChange(){this.input&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}handleFocus(){this.hasFocus=!0,_t(this,"sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,_t(this,"sl-change")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,_t(this,"sl-change"))}render(){return Y`
      <label
        part="base"
        for=${this.switchId}
        class=${Yt({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus})}
      >
        <input
          id=${this.switchId}
          class="switch__input"
          type="checkbox"
          name=${Qt(this.name)}
          value=${Qt(this.value)}
          .checked=${se(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          aria-labelledby=${this.labelId}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <span part="label" id=${this.labelId} class="switch__label">
          <slot></slot>
        </span>
      </label>
    `}};Xn.styles=Gn,Ut([Pt('input[type="checkbox"]')],Xn.prototype,"input",2),Ut([Nt()],Xn.prototype,"hasFocus",2),Ut([Lt()],Xn.prototype,"name",2),Ut([Lt()],Xn.prototype,"value",2),Ut([Lt({type:Boolean,reflect:!0})],Xn.prototype,"disabled",2),Ut([Lt({type:Boolean,reflect:!0})],Xn.prototype,"required",2),Ut([Lt({type:Boolean,reflect:!0})],Xn.prototype,"checked",2),Ut([Lt({type:Boolean,reflect:!0})],Xn.prototype,"invalid",2),Ut([le("checked")],Xn.prototype,"handleCheckedChange",1),Ut([le("disabled")],Xn.prototype,"handleDisabledChange",1),Xn=Ut([Ot("sl-switch")],Xn);var Zn=[],Yn=C`
  ${mt}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-left: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }
`,Qn=function(){let t=!1;return document.createElement("div").focus({get preventScroll(){return t=!0,!1}}),t}(),to=0,eo=class extends bt{constructor(){super(...arguments),this.componentId="dialog-"+ ++to,this.hasFooter=!1,this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activate(){Zn.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown)}deactivate(){Zn=Zn.filter((t=>t!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown)}isActive(){return Zn[Zn.length-1]===this.element}handleFocusIn(t){const e=t.composedPath();if(this.isActive()&&!e.includes(this.element)){const{start:t,end:e}=Bn(this.element),r="forward"===this.tabDirection?t:e;"function"==typeof(null==r?void 0:r.focus)&&r.focus({preventScroll:!0})}}handleKeyDown(t){"Tab"===t.key&&t.shiftKey&&(this.tabDirection="backward",setTimeout((()=>this.tabDirection="forward")))}}(this),this.handleSlotChange()}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),Ze(this))}disconnectedCallback(){super.disconnectedCallback(),Ye(this)}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}requestClose(){if(_t(this,"sl-request-close",{cancelable:!0}).defaultPrevented){const t=Mn(this,"dialog.denyClose");zn(this.panel,t.keyframes,t.options)}else this.hide()}handleKeyDown(t){"Escape"===t.key&&(t.stopPropagation(),this.requestClose())}async handleOpenChange(){if(this.open){if(_t(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),Ze(this),await Promise.all([On(this.dialog),On(this.overlay)]),this.dialog.hidden=!1,Qn){_t(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||this.panel.focus({preventScroll:!0})}const t=Mn(this,"dialog.show"),e=Mn(this,"dialog.overlay.show");if(await Promise.all([zn(this.panel,t.keyframes,t.options),zn(this.overlay,e.keyframes,e.options)]),!Qn){_t(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||this.panel.focus({preventScroll:!0})}_t(this,"sl-after-show")}else{_t(this,"sl-hide"),this.modal.deactivate(),await Promise.all([On(this.dialog),On(this.overlay)]);const t=Mn(this,"dialog.hide"),e=Mn(this,"dialog.overlay.hide");await Promise.all([zn(this.panel,t.keyframes,t.options),zn(this.overlay,e.keyframes,e.options)]),this.dialog.hidden=!0,Ye(this);const r=this.originalTrigger;r&&"function"==typeof r.focus&&setTimeout((()=>r.focus())),_t(this,"sl-after-hide")}}handleSlotChange(){this.hasFooter=Ft(this,"footer")}render(){return Y`
      <div
        part="base"
        class=${Yt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasFooter})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${this.requestClose} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Qt(this.noHeader?this.label:void 0)}
          aria-labelledby=${Qt(this.noHeader?void 0:`${this.componentId}-title`)}
          tabindex="0"
        >
          ${this.noHeader?"":Y`
                <header part="header" class="dialog__header">
                  <span part="title" class="dialog__title" id=${`${this.componentId}-title`}>
                    <slot name="label"> ${this.label||String.fromCharCode(65279)} </slot>
                  </span>
                  <sl-icon-button
                    exportparts="base:close-button"
                    class="dialog__close"
                    name="x"
                    library="system"
                    @click="${this.requestClose}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
          </footer>
        </div>
      </div>
    `}};eo.styles=Yn,Ut([Pt(".dialog")],eo.prototype,"dialog",2),Ut([Pt(".dialog__panel")],eo.prototype,"panel",2),Ut([Pt(".dialog__overlay")],eo.prototype,"overlay",2),Ut([Nt()],eo.prototype,"hasFooter",2),Ut([Lt({type:Boolean,reflect:!0})],eo.prototype,"open",2),Ut([Lt({reflect:!0})],eo.prototype,"label",2),Ut([Lt({attribute:"no-header",type:Boolean,reflect:!0})],eo.prototype,"noHeader",2),Ut([le("open",{waitUntilFirstUpdate:!0})],eo.prototype,"handleOpenChange",1),eo=Ut([Ot("sl-dialog")],eo),Pn("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),Pn("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}}),Pn("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}}),Pn("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Pn("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var ro=C`
  ${mt}
  ${Ve}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: var(--sl-focus-ring);
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    box-shadow: var(--sl-focus-ring);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`,no=0,oo=class extends bt{constructor(){super(...arguments),this.inputId="textarea-"+ ++no,this.helpTextId=`textarea-help-text-${no}`,this.labelId=`textarea-label-${no}`,this.hasFocus=!1,this.hasHelpTextSlot=!1,this.hasLabelSlot=!1,this.size="medium",this.value="",this.filled=!1,this.helpText="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),this.handleSlotChange=this.handleSlotChange.bind(this),this.resizeObserver=new ResizeObserver((()=>this.setTextareaHeight())),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange),this.handleSlotChange(),this.updateComplete.then((()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)}))}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){return this.input.select()}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,r="none"){return this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,n="preserve"){this.input.setRangeText(t,e,r,n),this.value!==this.input.value&&(this.value=this.input.value,_t(this,"sl-input")),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight(),_t(this,"sl-input"),_t(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,_t(this,"sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),_t(this,"sl-change")}handleDisabledChange(){this.input&&(this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity())}handleFocus(){this.hasFocus=!0,_t(this,"sl-focus")}handleInput(){this.value=this.input.value,this.setTextareaHeight(),_t(this,"sl-input")}handleRowsChange(){this.setTextareaHeight()}handleSlotChange(){this.hasHelpTextSlot=Ft(this,"help-text"),this.hasLabelSlot=Ft(this,"label")}handleValueChange(){this.input&&(this.invalid=!this.input.checkValidity())}setTextareaHeight(){this.input&&("auto"===this.resize?(this.input.style.height="auto",this.input.style.height=this.input.scrollHeight+"px"):this.input.style.height=void 0)}render(){var t;return Fe({inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:this.hasHelpTextSlot,size:this.size},Y`
        <div
          part="base"
          class=${Yt({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":0===(null==(t=this.value)?void 0:t.length),"textarea--invalid":this.invalid,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
        >
          <textarea
            part="textarea"
            id=${this.inputId}
            class="textarea__control"
            name=${Qt(this.name)}
            .value=${se(this.value)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            placeholder=${Qt(this.placeholder)}
            rows=${Qt(this.rows)}
            minlength=${Qt(this.minlength)}
            maxlength=${Qt(this.maxlength)}
            autocapitalize=${Qt(this.autocapitalize)}
            autocorrect=${Qt(this.autocorrect)}
            ?autofocus=${this.autofocus}
            spellcheck=${Qt(this.spellcheck)}
            inputmode=${Qt(this.inputmode)}
            aria-labelledby=${Qt(He({label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpText:this.helpText,helpTextId:this.helpTextId,hasHelpTextSlot:this.hasHelpTextSlot}))}
            @change=${this.handleChange}
            @input=${this.handleInput}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          ></textarea>
        </div>
      `)}};oo.styles=ro,Ut([Pt(".textarea__control")],oo.prototype,"input",2),Ut([Nt()],oo.prototype,"hasFocus",2),Ut([Nt()],oo.prototype,"hasHelpTextSlot",2),Ut([Nt()],oo.prototype,"hasLabelSlot",2),Ut([Lt({reflect:!0})],oo.prototype,"size",2),Ut([Lt()],oo.prototype,"name",2),Ut([Lt()],oo.prototype,"value",2),Ut([Lt({type:Boolean,reflect:!0})],oo.prototype,"filled",2),Ut([Lt()],oo.prototype,"label",2),Ut([Lt({attribute:"help-text"})],oo.prototype,"helpText",2),Ut([Lt()],oo.prototype,"placeholder",2),Ut([Lt({type:Number})],oo.prototype,"rows",2),Ut([Lt()],oo.prototype,"resize",2),Ut([Lt({type:Boolean,reflect:!0})],oo.prototype,"disabled",2),Ut([Lt({type:Boolean,reflect:!0})],oo.prototype,"readonly",2),Ut([Lt({type:Number})],oo.prototype,"minlength",2),Ut([Lt({type:Number})],oo.prototype,"maxlength",2),Ut([Lt()],oo.prototype,"pattern",2),Ut([Lt({type:Boolean,reflect:!0})],oo.prototype,"required",2),Ut([Lt({type:Boolean,reflect:!0})],oo.prototype,"invalid",2),Ut([Lt()],oo.prototype,"autocapitalize",2),Ut([Lt()],oo.prototype,"autocorrect",2),Ut([Lt()],oo.prototype,"autocomplete",2),Ut([Lt({type:Boolean})],oo.prototype,"autofocus",2),Ut([Lt({type:Boolean})],oo.prototype,"spellcheck",2),Ut([Lt()],oo.prototype,"inputmode",2),Ut([le("disabled")],oo.prototype,"handleDisabledChange",1),Ut([le("rows")],oo.prototype,"handleRowsChange",1),Ut([le("helpText"),le("label")],oo.prototype,"handleSlotChange",1),Ut([le("value")],oo.prototype,"handleValueChange",1),oo=Ut([Ot("sl-textarea")],oo);var io=C`
  ${mt}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }
`,so=Xt(class extends Zt{constructor(t){var e;if(super(t),t.type!==Wt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const n=t[r];return null==n?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:r}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?r.removeProperty(t):r[t]="")}));for(const t in e){const n=e[t];null!=n&&(this.ut.add(t),t.includes("-")?r.setProperty(t,n):r[t]=n)}return Q}}),ao=class extends bt{constructor(){super(...arguments),this.localize=new xe(this),this.value=0,this.indeterminate=!1}render(){return Y`
      <div
        part="base"
        class=${Yt({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate})}
        role="progressbar"
        title=${Qt(this.title)}
        aria-label=${this.label||this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${so({width:this.value+"%"})}>
          ${this.indeterminate?"":Y`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              `}
        </div>
      </div>
    `}};ao.styles=io,Ut([Lt({type:Number,reflect:!0})],ao.prototype,"value",2),Ut([Lt({type:Boolean,reflect:!0})],ao.prototype,"indeterminate",2),Ut([Lt()],ao.prototype,"label",2),Ut([Lt()],ao.prototype,"lang",2),ao=Ut([Ot("sl-progress-bar")],ao),Se("./shoelace");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lo=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,co=Symbol(),ho=new Map;class uo{constructor(t,e){if(this._$cssResult$=!0,e!==co)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=ho.get(this.cssText);return lo&&void 0===t&&(ho.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const po=lo?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new uo("string"==typeof t?t:t+"",co))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var fo;const bo=window.reactiveElementPolyfillSupport,go={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},yo=(t,e)=>e!==t&&(e==e||t==t),mo={attribute:!0,type:String,converter:go,reflect:!1,hasChanged:yo};class wo extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const n=this._$Eh(r,e);void 0!==n&&(this._$Eu.set(n,r),t.push(n))})),t}static createProperty(t,e=mo){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||mo}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(po(t))}else void 0!==t&&e.push(po(t));return e}static _$Eh(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{lo?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),n=window.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=e.cssText,t.appendChild(r)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$Eg(t,e,r=mo){var n,o;const i=this.constructor._$Eh(t,r);if(void 0!==i&&!0===r.reflect){const s=(null!==(o=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:go.toAttribute)(e,r.type);this._$Ei=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(t,e){var r,n,o;const i=this.constructor,s=i._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=i.getPropertyOptions(s),a=t.converter,l=null!==(o=null!==(n=null===(r=a)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==o?o:go.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||yo)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var vo;wo.finalized=!0,wo.elementProperties=new Map,wo.elementStyles=[],wo.shadowRootOptions={mode:"open"},null==bo||bo({ReactiveElement:wo}),(null!==(fo=globalThis.reactiveElementVersions)&&void 0!==fo?fo:globalThis.reactiveElementVersions=[]).push("1.0.1");const _o=globalThis.trustedTypes,xo=_o?_o.createPolicy("lit-html",{createHTML:t=>t}):void 0,ko=`lit$${(Math.random()+"").slice(9)}$`,Ao="?"+ko,Eo=`<${Ao}>`,Co=document,So=(t="")=>Co.createComment(t),$o=t=>null===t||"object"!=typeof t&&"function"!=typeof t,To=Array.isArray,Io=t=>{var e;return To(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},Bo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zo=/-->/g,Uo=/>/g,Oo=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Do=/'/g,Lo=/"/g,No=/^(?:script|style|textarea)$/i,Ro=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Po=Ro(1),Mo=(Ro(2),Symbol.for("lit-noChange")),jo=Symbol.for("lit-nothing"),Fo=new WeakMap,Ho=Co.createTreeWalker(Co,129,null,!1),Vo=(t,e)=>{const r=t.length-1,n=[];let o,i=2===e?"<svg>":"",s=Bo;for(let e=0;e<r;e++){const r=t[e];let a,l,c=-1,h=0;for(;h<r.length&&(s.lastIndex=h,l=s.exec(r),null!==l);)h=s.lastIndex,s===Bo?"!--"===l[1]?s=zo:void 0!==l[1]?s=Uo:void 0!==l[2]?(No.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=Oo):void 0!==l[3]&&(s=Oo):s===Oo?">"===l[0]?(s=null!=o?o:Bo,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?Oo:'"'===l[3]?Lo:Do):s===Lo||s===Do?s=Oo:s===zo||s===Uo?s=Bo:(s=Oo,o=void 0);const u=s===Oo&&t[e+1].startsWith("/>")?" ":"";i+=s===Bo?r+Eo:c>=0?(n.push(a),r.slice(0,c)+"$lit$"+r.slice(c)+ko+u):r+ko+(-2===c?(n.push(void 0),e):u)}const a=i+(t[r]||"<?>")+(2===e?"</svg>":"");return[void 0!==xo?xo.createHTML(a):a,n]};class qo{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,i=0;const s=t.length-1,a=this.parts,[l,c]=Vo(t,e);if(this.el=qo.createElement(l,r),Ho.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=Ho.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(ko)){const r=c[i++];if(t.push(e),void 0!==r){const t=n.getAttribute(r.toLowerCase()+"$lit$").split(ko),e=/([.?@])?(.*)/.exec(r);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Xo:"?"===e[1]?Zo:"@"===e[1]?Yo:Jo})}else a.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(No.test(n.tagName)){const t=n.textContent.split(ko),e=t.length-1;if(e>0){n.textContent=_o?_o.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],So()),Ho.nextNode(),a.push({type:2,index:++o});n.append(t[e],So())}}}else if(8===n.nodeType)if(n.data===Ao)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(ko,t+1));)a.push({type:7,index:o}),t+=ko.length-1}o++}}static createElement(t,e){const r=Co.createElement("template");return r.innerHTML=t,r}}function Wo(t,e,r=t,n){var o,i,s,a;if(e===Mo)return e;let l=void 0!==n?null===(o=r._$Cl)||void 0===o?void 0:o[n]:r._$Cu;const c=$o(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,r,n)),void 0!==n?(null!==(s=(a=r)._$Cl)&&void 0!==s?s:a._$Cl=[])[n]=l:r._$Cu=l),void 0!==l&&(e=Wo(t,l._$AS(t,e.values),l,n)),e}class Ko{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Co).importNode(r,!0);Ho.currentNode=o;let i=Ho.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new Go(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new Qo(i,this,t)),this.v.push(e),l=n[++a]}s!==(null==l?void 0:l.index)&&(i=Ho.nextNode(),s++)}return o}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Go{constructor(t,e,r,n){var o;this.type=2,this._$AH=jo,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Wo(this,t,e),$o(t)?t===jo||null==t||""===t?(this._$AH!==jo&&this._$AR(),this._$AH=jo):t!==this._$AH&&t!==Mo&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):Io(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==jo&&$o(this._$AH)?this._$AA.nextSibling.data=t:this.S(Co.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=qo.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(r);else{const t=new Ko(o,this),e=t.p(this.options);t.m(r),this.S(e),this._$AH=t}}_$AC(t){let e=Fo.get(t.strings);return void 0===e&&Fo.set(t.strings,e=new qo(t)),e}M(t){To(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const o of t)n===e.length?e.push(r=new Go(this.A(So()),this.A(So()),this,this.options)):r=e[n],r._$AI(o),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Jo{constructor(t,e,r,n,o){this.type=1,this._$AH=jo,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=jo}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const o=this.strings;let i=!1;if(void 0===o)t=Wo(this,t,e,0),i=!$o(t)||t!==this._$AH&&t!==Mo,i&&(this._$AH=t);else{const n=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=Wo(this,n[r+s],e,s),a===Mo&&(a=this._$AH[s]),i||(i=!$o(a)||a!==this._$AH[s]),a===jo?t=jo:t!==jo&&(t+=(null!=a?a:"")+o[s+1]),this._$AH[s]=a}i&&!n&&this.k(t)}k(t){t===jo?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Xo extends Jo{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===jo?void 0:t}}class Zo extends Jo{constructor(){super(...arguments),this.type=4}k(t){t&&t!==jo?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Yo extends Jo{constructor(t,e,r,n,o){super(t,e,r,n,o),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=Wo(this,t,e,0))&&void 0!==r?r:jo)===Mo)return;const n=this._$AH,o=t===jo&&n!==jo||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==jo&&(n===jo||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class Qo{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Wo(this,t)}}const ti=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ei,ri;null==ti||ti(qo,Go),(null!==(vo=globalThis.litHtmlVersions)&&void 0!==vo?vo:globalThis.litHtmlVersions=[]).push("2.0.1");class ni extends wo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,r)=>{var n,o;const i=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:e;let s=i._$litPart$;if(void 0===s){const t=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:null;i._$litPart$=s=new Go(e.insertBefore(So(),t),t,void 0,null!=r?r:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return Mo}}ni.finalized=!0,ni._$litElement$=!0,null===(ei=globalThis.litElementHydrateSupport)||void 0===ei||ei.call(globalThis,{LitElement:ni});const oi=globalThis.litElementPolyfillSupport;null==oi||oi({LitElement:ni});(null!==(ri=globalThis.litElementVersions)&&void 0!==ri?ri:globalThis.litElementVersions=[]).push("3.0.1");__webpack_require__(4155);Symbol("TIMEOUT");function ii(t){if("function"==typeof t.next)return t;if("function"==typeof t[Symbol.iterator])return t[Symbol.iterator]();if("function"==typeof t[Symbol.asyncIterator])return t[Symbol.asyncIterator]();throw new TypeError('"values" does not to conform to any of the iterator or iterable protocols')}function si(){let t,e;return{promise:new Promise(((r,n)=>{e=r,t=n})),reject:t,resolve:e}}function ai(t,e,r){const n=ii(r),o=[],i=[];let s=!1,a=!1,l=0,c=null;function h(){for(;i.length>0&&o.length>0;){const{resolve:t}=i.shift();t({done:!1,value:o.shift()})}for(;i.length>0&&0===l&&s;){const{resolve:t,reject:e}=i.shift();c?(e(c),c=null):t({done:!0,value:void 0})}}async function u(){if(s)h();else if(!(a||l+o.length>=t)){a=!0,l++;try{const{done:t,value:r}=await n.next();t?(s=!0,l--,h()):async function(t){try{const r=await e(t);o.push(r)}catch(t){s=!0,c=t}l--,h(),u()}(r)}catch(t){s=!0,l--,c=t,h()}a=!1,u()}}const d={next:async function(){if(0===o.length){const t=si();return i.push(t),u(),t.promise}const t=o.shift();return u(),{done:!1,value:t}},[Symbol.asyncIterator]:()=>d};return d}function li(t,e,r){return void 0===e?(e,r)=>r?li(t,e,r):li(t,e):void 0===r?r=>li(t,e,r):ai(t,e,r)}var ci=__webpack_require__(2693),hi=__webpack_require__(3093),ui=__webpack_require__(618),di=__webpack_require__(4676),pi=function t(e,r,n){r=r||[];var o=n=n||0;for(;e>=fi;)r[n++]=255&e|128,e/=128;for(;-128&e;)r[n++]=255&e|128,e>>>=7;return r[n]=0|e,t.bytes=n-o+1,r},fi=Math.pow(2,31);var bi=function t(e,r){var n,o=0,i=0,s=r=r||0,a=e.length;do{if(s>=a)throw t.bytes=0,new RangeError("Could not decode varint");n=e[s++],o+=i<28?(127&n)<<i:(127&n)*Math.pow(2,i),i+=7}while(n>=128);return t.bytes=s-r,o};var gi=Math.pow(2,7),yi=Math.pow(2,14),mi=Math.pow(2,21),wi=Math.pow(2,28),vi=Math.pow(2,35),_i=Math.pow(2,42),xi=Math.pow(2,49),ki=Math.pow(2,56),Ai=Math.pow(2,63);const Ei={encode:pi,decode:bi,encodingLength:function(t){return t<gi?1:t<yi?2:t<mi?3:t<wi?4:t<vi?5:t<_i?6:t<xi?7:t<ki?8:t<Ai?9:10}},Ci=t=>[Ei.decode(t),Ei.decode.bytes],Si=(t,e,r=0)=>(Ei.encode(t,e,r),e),$i=t=>Ei.encodingLength(t),Ti=(new Uint8Array(0),t=>{if(t instanceof Uint8Array&&"Uint8Array"===t.constructor.name)return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")}),Ii=t=>{const e=Ti(t),[r,n]=Ci(e),[o,i]=Ci(e.subarray(n)),s=e.subarray(n+i);if(s.byteLength!==o)throw new Error("Incorrect length");return new Bi(r,o,s,e)};class Bi{constructor(t,e,r,n){this.code=t,this.size=e,this.digest=r,this.bytes=n}}var zi=function(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var o=0;o<t.length;o++){var i=t.charAt(o),s=i.charCodeAt(0);if(255!==r[s])throw new TypeError(i+" is ambiguous");r[s]=o}var a=t.length,l=t.charAt(0),c=Math.log(a)/Math.log(256),h=Math.log(256)/Math.log(a);function u(t){if("string"!=typeof t)throw new TypeError("Expected String");if(0===t.length)return new Uint8Array;var e=0;if(" "!==t[e]){for(var n=0,o=0;t[e]===l;)n++,e++;for(var i=(t.length-e)*c+1>>>0,s=new Uint8Array(i);t[e];){var h=r[t.charCodeAt(e)];if(255===h)return;for(var u=0,d=i-1;(0!==h||u<o)&&-1!==d;d--,u++)h+=a*s[d]>>>0,s[d]=h%256>>>0,h=h/256>>>0;if(0!==h)throw new Error("Non-zero carry");o=u,e++}if(" "!==t[e]){for(var p=i-o;p!==i&&0===s[p];)p++;for(var f=new Uint8Array(n+(i-p)),b=n;p!==i;)f[b++]=s[p++];return f}}}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===e.length)return"";for(var r=0,n=0,o=0,i=e.length;o!==i&&0===e[o];)o++,r++;for(var s=(i-o)*h+1>>>0,c=new Uint8Array(s);o!==i;){for(var u=e[o],d=0,p=s-1;(0!==u||d<n)&&-1!==p;p--,d++)u+=256*c[p]>>>0,c[p]=u%a>>>0,u=u/a>>>0;if(0!==u)throw new Error("Non-zero carry");n=d,o++}for(var f=s-n;f!==s&&0===c[f];)f++;for(var b=l.repeat(r);f<s;++f)b+=t.charAt(c[f]);return b},decodeUnsafe:u,decode:function(t){var r=u(t);if(r)return r;throw new Error(`Non-${e} character`)}}};const Ui=zi;class Oi{constructor(t,e,r){this.name=t,this.prefix=e,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class Di{constructor(t,e,r){this.name=t,this.prefix=e,this.baseDecode=r}decode(t){if("string"==typeof t){if(t[0]===this.prefix)return this.baseDecode(t.slice(1));throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`)}throw Error("Can only multibase decode strings")}or(t){return Ni(this,t)}}class Li{constructor(t){this.decoders=t}or(t){return Ni(this,t)}decode(t){const e=t[0],r=this.decoders[e];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const Ni=(t,e)=>new Li({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class Ri{constructor(t,e,r,n){this.name=t,this.prefix=e,this.baseEncode=r,this.baseDecode=n,this.encoder=new Oi(t,e,r),this.decoder=new Di(t,e,n)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}const Pi=({name:t,prefix:e,encode:r,decode:n})=>new Ri(t,e,r,n),Mi=({prefix:t,name:e,alphabet:r})=>{const{encode:n,decode:o}=Ui(r,e);return Pi({prefix:t,name:e,encode:n,decode:t=>Ti(o(t))})},ji=({name:t,prefix:e,bitsPerChar:r,alphabet:n})=>Pi({prefix:e,name:t,encode:t=>((t,e,r)=>{const n="="===e[e.length-1],o=(1<<r)-1;let i="",s=0,a=0;for(let n=0;n<t.length;++n)for(a=a<<8|t[n],s+=8;s>r;)s-=r,i+=e[o&a>>s];if(s&&(i+=e[o&a<<r-s]),n)for(;i.length*r&7;)i+="=";return i})(t,n,r),decode:e=>((t,e,r,n)=>{const o={};for(let t=0;t<e.length;++t)o[e[t]]=t;let i=t.length;for(;"="===t[i-1];)--i;const s=new Uint8Array(i*r/8|0);let a=0,l=0,c=0;for(let e=0;e<i;++e){const i=o[t[e]];if(void 0===i)throw new SyntaxError(`Non-${n} character`);l=l<<r|i,a+=r,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=r||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s})(e,n,r,t)}),Fi=Mi({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Hi=(Mi({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),ji({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}));ji({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),ji({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),ji({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),ji({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),ji({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),ji({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),ji({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),ji({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});class Vi{constructor(t,e,r,n){this.code=e,this.version=t,this.multihash=r,this.bytes=n,this.byteOffset=n.byteOffset,this.byteLength=n.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:Qi,byteLength:Qi,code:Yi,version:Yi,multihash:Yi,bytes:Yi,_baseCache:Qi,asCID:Qi})}toV0(){if(0===this.version)return this;{const{code:t,multihash:e}=this;if(t!==Gi)throw new Error("Cannot convert a non dag-pb CID to CIDv0");if(e.code!==Ji)throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");return Vi.createV0(e)}}toV1(){switch(this.version){case 0:{const{code:t,digest:e}=this.multihash,r=((t,e)=>{const r=e.byteLength,n=$i(t),o=n+$i(r),i=new Uint8Array(o+r);return Si(t,i,0),Si(r,i,n),i.set(e,o),new Bi(t,r,e,i)})(t,e);return Vi.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(t){return t&&this.code===t.code&&this.version===t.version&&((t,e)=>t===e||t.code===e.code&&t.size===e.size&&((t,e)=>{if(t===e)return!0;if(t.byteLength!==e.byteLength)return!1;for(let r=0;r<t.byteLength;r++)if(t[r]!==e[r])return!1;return!0})(t.bytes,e.bytes))(this.multihash,t.multihash)}toString(t){const{bytes:e,version:r,_baseCache:n}=this;return 0===r?Wi(e,n,t||Fi.encoder):Ki(e,n,t||Hi.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(t){return ts(/^0\.0/,es),!(!t||!t[Zi]&&t.asCID!==t)}get toBaseEncodedString(){throw new Error("Deprecated, use .toString()")}get codec(){throw new Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw new Error('"multibaseName" property is deprecated')}get prefix(){throw new Error('"prefix" property is deprecated')}static asCID(t){if(t instanceof Vi)return t;if(null!=t&&t.asCID===t){const{version:e,code:r,multihash:n,bytes:o}=t;return new Vi(e,r,n,o||Xi(e,r,n.bytes))}if(null!=t&&!0===t[Zi]){const{version:e,multihash:r,code:n}=t,o=Ii(r);return Vi.create(e,n,o)}return null}static create(t,e,r){if("number"!=typeof e)throw new Error("String codecs are no longer supported");switch(t){case 0:if(e!==Gi)throw new Error(`Version 0 CID must use dag-pb (code: ${Gi}) block encoding`);return new Vi(t,e,r,r.bytes);case 1:{const n=Xi(t,e,r.bytes);return new Vi(t,e,r,n)}default:throw new Error("Invalid version")}}static createV0(t){return Vi.create(0,Gi,t)}static createV1(t,e){return Vi.create(1,t,e)}static decode(t){const[e,r]=Vi.decodeFirst(t);if(r.length)throw new Error("Incorrect length");return e}static decodeFirst(t){const e=Vi.inspectBytes(t),r=e.size-e.multihashSize,n=Ti(t.subarray(r,r+e.multihashSize));if(n.byteLength!==e.multihashSize)throw new Error("Incorrect length");const o=n.subarray(e.multihashSize-e.digestSize),i=new Bi(e.multihashCode,e.digestSize,o,n);return[0===e.version?Vi.createV0(i):Vi.createV1(e.codec,i),t.subarray(e.size)]}static inspectBytes(t){let e=0;const r=()=>{const[r,n]=Ci(t.subarray(e));return e+=n,r};let n=r(),o=Gi;if(18===n?(n=0,e=0):1===n&&(o=r()),0!==n&&1!==n)throw new RangeError(`Invalid CID version ${n}`);const i=e,s=r(),a=r(),l=e+a;return{version:n,codec:o,multihashCode:s,digestSize:a,multihashSize:l-i,size:l}}static parse(t,e){const[r,n]=qi(t,e),o=Vi.decode(n);return o._baseCache.set(r,t),o}}const qi=(t,e)=>{switch(t[0]){case"Q":{const r=e||Fi;return[Fi.prefix,r.decode(`${Fi.prefix}${t}`)]}case Fi.prefix:{const r=e||Fi;return[Fi.prefix,r.decode(t)]}case Hi.prefix:{const r=e||Hi;return[Hi.prefix,r.decode(t)]}default:if(null==e)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[t[0],e.decode(t)]}},Wi=(t,e,r)=>{const{prefix:n}=r;if(n!==Fi.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);const o=e.get(n);if(null==o){const o=r.encode(t).slice(1);return e.set(n,o),o}return o},Ki=(t,e,r)=>{const{prefix:n}=r,o=e.get(n);if(null==o){const o=r.encode(t);return e.set(n,o),o}return o},Gi=112,Ji=18,Xi=(t,e,r)=>{const n=$i(t),o=n+$i(e),i=new Uint8Array(o+r.byteLength);return Si(t,i,0),Si(e,i,n),i.set(r,o),i},Zi=Symbol.for("@ipld/js-cid/CID"),Yi={writable:!1,configurable:!1,enumerable:!0},Qi={writable:!1,enumerable:!1,configurable:!1},ts=(t,e)=>{if(!t.test("0.0.0-dev"))throw new Error(e);console.warn(e)},es="CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n",rs=["string","number","bigint","symbol"],ns=["Function","Generator","AsyncGenerator","GeneratorFunction","AsyncGeneratorFunction","AsyncFunction","Observable","Array","Buffer","Object","RegExp","Date","Error","Map","Set","WeakMap","WeakSet","ArrayBuffer","SharedArrayBuffer","DataView","Promise","URL","HTMLElement","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array"];function os(t){if(null===t)return"null";if(void 0===t)return"undefined";if(!0===t||!1===t)return"boolean";const e=typeof t;if(rs.includes(e))return e;if("function"===e)return"Function";if(Array.isArray(t))return"Array";if(function(t){return t&&t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer.call(null,t)}(t))return"Buffer";const r=function(t){const e=Object.prototype.toString.call(t).slice(8,-1);if(ns.includes(e))return e;return}(t);return r||"Object"}class is{constructor(t,e,r){this.major=t,this.majorEncoded=t<<5,this.name=e,this.terminal=r}toString(){return`Type[${this.major}].${this.name}`}compare(t){return this.major<t.major?-1:this.major>t.major?1:0}}is.uint=new is(0,"uint",!0),is.negint=new is(1,"negint",!0),is.bytes=new is(2,"bytes",!0),is.string=new is(3,"string",!0),is.array=new is(4,"array",!1),is.map=new is(5,"map",!1),is.tag=new is(6,"tag",!1),is.float=new is(7,"float",!0),is.false=new is(7,"false",!0),is.true=new is(7,"true",!0),is.null=new is(7,"null",!0),is.undefined=new is(7,"undefined",!0),is.break=new is(7,"break",!0);class ss{constructor(t,e,r){this.type=t,this.value=e,this.encodedLength=r,this.encodedBytes=void 0}toString(){return`Token[${this.type}].${this.value}`}}const as=globalThis.process&&!globalThis.process.browser&&globalThis.Buffer&&"function"==typeof globalThis.Buffer.isBuffer,ls=new TextDecoder,cs=new TextEncoder;function hs(t){return as&&globalThis.Buffer.isBuffer(t)}function us(t){return t instanceof Uint8Array?hs(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t:Uint8Array.from(t)}const ds=as?(t,e,r)=>r-e>64?globalThis.Buffer.from(t.subarray(e,r)).toString("utf8"):ws(t,e,r):(t,e,r)=>r-e>64?ls.decode(t.subarray(e,r)):ws(t,e,r),ps=as?t=>t.length>64?globalThis.Buffer.from(t):ms(t):t=>t.length>64?cs.encode(t):ms(t),fs=t=>Uint8Array.from(t),bs=as?(t,e,r)=>hs(t)?new Uint8Array(t.subarray(e,r)):t.slice(e,r):(t,e,r)=>t.slice(e,r),gs=as?(t,e)=>(t=t.map((t=>t instanceof Uint8Array?t:globalThis.Buffer.from(t))),us(globalThis.Buffer.concat(t,e))):(t,e)=>{const r=new Uint8Array(e);let n=0;for(let e of t)n+e.length>r.length&&(e=e.subarray(0,r.length-n)),r.set(e,n),n+=e.length;return r},ys=as?t=>globalThis.Buffer.allocUnsafe(t):t=>new Uint8Array(t);function ms(t,e=1/0){let r;const n=t.length;let o=null;const i=[];for(let s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function ws(t,e,r){const n=[];for(;e<r;){const o=t[e];let i=null,s=o>239?4:o>223?3:o>191?2:1;if(e+s<=r){let r,n,a,l;switch(s){case 1:o<128&&(i=o);break;case 2:r=t[e+1],128==(192&r)&&(l=(31&o)<<6|63&r,l>127&&(i=l));break;case 3:r=t[e+1],n=t[e+2],128==(192&r)&&128==(192&n)&&(l=(15&o)<<12|(63&r)<<6|63&n,l>2047&&(l<55296||l>57343)&&(i=l));break;case 4:r=t[e+1],n=t[e+2],a=t[e+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(l=(15&o)<<18|(63&r)<<12|(63&n)<<6|63&a,l>65535&&l<1114112&&(i=l))}}null===i?(i=65533,s=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),e+=s}return function(t){const e=t.length;if(e<=vs)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=vs));return r}(n)}const vs=4096;class _s{constructor(t=256){this.chunkSize=t,this.cursor=0,this.maxCursor=-1,this.chunks=[],this._initReuseChunk=null}reset(){this.chunks=[],this.cursor=0,this.maxCursor=-1,null!==this._initReuseChunk&&(this.chunks.push(this._initReuseChunk),this.maxCursor=this._initReuseChunk.length-1)}push(t){let e=this.chunks[this.chunks.length-1];if(this.cursor+t.length<=this.maxCursor+1){const r=e.length-(this.maxCursor-this.cursor)-1;e.set(t,r)}else{if(e){const t=e.length-(this.maxCursor-this.cursor)-1;t<e.length&&(this.chunks[this.chunks.length-1]=e.subarray(0,t),this.maxCursor=this.cursor-1)}t.length<64&&t.length<this.chunkSize?(e=ys(this.chunkSize),this.chunks.push(e),this.maxCursor+=e.length,null===this._initReuseChunk&&(this._initReuseChunk=e),e.set(t,0)):(this.chunks.push(t),this.maxCursor+=t.length)}this.cursor+=t.length}toBytes(t=!1){let e;if(1===this.chunks.length){const r=this.chunks[0];t&&this.cursor>r.length/2?(e=this.cursor===r.length?r:r.subarray(0,this.cursor),this._initReuseChunk=null,this.chunks=[]):e=bs(r,0,this.cursor)}else e=gs(this.chunks,this.cursor);return t&&this.reset(),e}}const xs=[];function ks(t,e,r){if(t.length-e<r)throw new Error("CBOR decode error: not enough data for type")}xs[23]=1,xs[24]=2,xs[25]=3,xs[26]=5,xs[27]=9;const As=[24,256,65536,4294967296,BigInt("18446744073709551616")];function Es(t,e,r){ks(t,e,1);const n=t[e];if(!0===r.strict&&n<As[0])throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");return n}function Cs(t,e,r){ks(t,e,2);const n=t[e]<<8|t[e+1];if(!0===r.strict&&n<As[1])throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");return n}function Ss(t,e,r){ks(t,e,4);const n=16777216*t[e]+(t[e+1]<<16)+(t[e+2]<<8)+t[e+3];if(!0===r.strict&&n<As[2])throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");return n}function $s(t,e,r){ks(t,e,8);const n=16777216*t[e]+(t[e+1]<<16)+(t[e+2]<<8)+t[e+3],o=16777216*t[e+4]+(t[e+5]<<16)+(t[e+6]<<8)+t[e+7],i=(BigInt(n)<<BigInt(32))+BigInt(o);if(!0===r.strict&&i<As[3])throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");if(i<=Number.MAX_SAFE_INTEGER)return Number(i);if(!0===r.allowBigInt)return i;throw new Error("CBOR decode error: integers outside of the safe integer range are not supported")}function Ts(t,e){return Is(t,0,e.value)}function Is(t,e,r){if(r<As[0]){const n=Number(r);t.push([e|n])}else if(r<As[1]){const n=Number(r);t.push([24|e,n])}else if(r<As[2]){const n=Number(r);t.push([25|e,n>>>8,255&n])}else if(r<As[3]){const n=Number(r);t.push([26|e,n>>>24&255,n>>>16&255,n>>>8&255,255&n])}else{const n=BigInt(r);if(!(n<As[4]))throw new Error("CBOR decode error: encountered BigInt larger than allowable range");{const r=[27|e,0,0,0,0,0,0,0];let o=Number(n&BigInt(4294967295)),i=Number(n>>BigInt(32)&BigInt(4294967295));r[8]=255&o,o>>=8,r[7]=255&o,o>>=8,r[6]=255&o,o>>=8,r[5]=255&o,r[4]=255&i,i>>=8,r[3]=255&i,i>>=8,r[2]=255&i,i>>=8,r[1]=255&i,t.push(r)}}}Ts.encodedSize=function(t){return Is.encodedSize(t.value)},Is.encodedSize=function(t){return t<As[0]?1:t<As[1]?2:t<As[2]?3:t<As[3]?5:9},Ts.compareTokens=function(t,e){return t.value<e.value?-1:t.value>e.value?1:0};const Bs=BigInt(-1),zs=BigInt(1);function Us(t,e){const r=e.value,n="bigint"==typeof r?r*Bs-zs:-1*r-1;Is(t,e.type.majorEncoded,n)}function Os(t,e,r,n){ks(t,e,r+n);const o=bs(t,e+r,e+r+n);return new ss(is.bytes,o,r+n)}function Ds(t,e,r,n){return Os(t,e,1,r)}function Ls(t){return void 0===t.encodedBytes&&(t.encodedBytes=t.type===is.string?ps(t.value):t.value),t.encodedBytes}function Ns(t,e){const r=Ls(e);Is(t,e.type.majorEncoded,r.length),t.push(r)}function Rs(t,e,r,n){const o=r+n;return ks(t,e,o),new ss(is.string,ds(t,e+r,e+o),o)}function Ps(t,e,r,n){return Rs(t,e,1,r)}Us.encodedSize=function(t){const e=t.value,r="bigint"==typeof e?e*Bs-zs:-1*e-1;return r<As[0]?1:r<As[1]?2:r<As[2]?3:r<As[3]?5:9},Us.compareTokens=function(t,e){return t.value<e.value?1:t.value>e.value?-1:0},Ns.encodedSize=function(t){const e=Ls(t);return Is.encodedSize(e.length)+e.length},Ns.compareTokens=function(t,e){return r=Ls(t),n=Ls(e),r.length<n.length?-1:r.length>n.length?1:function(t,e){if(hs(t)&&hs(e))return t.compare(e);for(let r=0;r<t.length;r++)if(t[r]!==e[r])return t[r]<e[r]?-1:1;return 0}(r,n);var r,n};const Ms=Ns;function js(t,e,r,n){return new ss(is.array,n,r)}function Fs(t,e,r,n){return js(0,0,1,r)}function Hs(t,e){Is(t,is.array.majorEncoded,e.value)}function Vs(t,e,r,n){return new ss(is.map,n,r)}function qs(t,e,r,n){return Vs(0,0,1,r)}function Ws(t,e){Is(t,is.map.majorEncoded,e.value)}function Ks(t,e,r,n){return new ss(is.tag,r,1)}function Gs(t,e){Is(t,is.tag.majorEncoded,e.value)}Hs.compareTokens=Ts.compareTokens,Ws.compareTokens=Ts.compareTokens,Gs.compareTokens=Ts.compareTokens;function Js(t,e,r){if(r){if(!1===r.allowNaN&&Number.isNaN(t))throw new Error("CBOR decode error: NaN values are not supported");if(!1===r.allowInfinity&&(t===1/0||t===-1/0))throw new Error("CBOR decode error: Infinity values are not supported")}return new ss(is.float,t,e)}function Xs(t,e,r){const n=e.value;if(!1===n)t.push([20|is.float.majorEncoded]);else if(!0===n)t.push([21|is.float.majorEncoded]);else if(null===n)t.push([22|is.float.majorEncoded]);else if(void 0===n)t.push([23|is.float.majorEncoded]);else{let e,i=!1;r&&!0===r.float64||(ta(n),e=ea(Qs,1),n===e||Number.isNaN(n)?(Qs[0]=249,t.push(Qs.slice(0,3)),i=!0):(ra(n),e=na(Qs,1),n===e&&(Qs[0]=250,t.push(Qs.slice(0,5)),i=!0))),i||(o=n,Ys.setFloat64(0,o,!1),e=oa(Qs,1),Qs[0]=251,t.push(Qs.slice(0,9)))}var o}Xs.encodedSize=function(t,e){const r=t.value;if(!1===r||!0===r||null==r)return 1;let n;if(!e||!0!==e.float64){if(ta(r),n=ea(Qs,1),r===n||Number.isNaN(r))return 3;if(ra(r),n=na(Qs,1),r===n)return 5}return 9};const Zs=new ArrayBuffer(9),Ys=new DataView(Zs,1),Qs=new Uint8Array(Zs,0);function ta(t){if(t===1/0)Ys.setUint16(0,31744,!1);else if(t===-1/0)Ys.setUint16(0,64512,!1);else if(Number.isNaN(t))Ys.setUint16(0,32256,!1);else{Ys.setFloat32(0,t);const e=Ys.getUint32(0),r=(2139095040&e)>>23,n=8388607&e;if(255===r)Ys.setUint16(0,31744,!1);else if(0===r)Ys.setUint16(0,(2147483648&t)>>16|n>>13,!1);else{const t=r-127;t<-24?Ys.setUint16(0,0):t<-14?Ys.setUint16(0,(2147483648&e)>>16|1<<24+t,!1):Ys.setUint16(0,(2147483648&e)>>16|t+15<<10|n>>13,!1)}}}function ea(t,e){if(t.length-e<2)throw new Error("CBOR decode error: not enough data for float16");const r=(t[e]<<8)+t[e+1];if(31744===r)return 1/0;if(64512===r)return-1/0;if(32256===r)return NaN;const n=r>>10&31,o=1023&r;let i;return i=0===n?o*2**-24:31!==n?(o+1024)*2**(n-25):0===o?1/0:NaN,32768&r?-i:i}function ra(t){Ys.setFloat32(0,t,!1)}function na(t,e){if(t.length-e<4)throw new Error("CBOR decode error: not enough data for float32");const r=(t.byteOffset||0)+e;return new DataView(t.buffer,r,4).getFloat32(0,!1)}function oa(t,e){if(t.length-e<8)throw new Error("CBOR decode error: not enough data for float64");const r=(t.byteOffset||0)+e;return new DataView(t.buffer,r,8).getFloat64(0,!1)}function ia(t,e,r){throw new Error(`CBOR decode error: encountered invalid minor (${r}) for major ${t[e]>>>5}`)}function sa(t){return()=>{throw new Error(`CBOR decode error: ${t}`)}}Xs.compareTokens=Ts.compareTokens;const aa=[];for(let t=0;t<=23;t++)aa[t]=ia;aa[24]=function(t,e,r,n){return new ss(is.uint,Es(t,e+1,n),2)},aa[25]=function(t,e,r,n){return new ss(is.uint,Cs(t,e+1,n),3)},aa[26]=function(t,e,r,n){return new ss(is.uint,Ss(t,e+1,n),5)},aa[27]=function(t,e,r,n){return new ss(is.uint,$s(t,e+1,n),9)},aa[28]=ia,aa[29]=ia,aa[30]=ia,aa[31]=ia;for(let t=32;t<=55;t++)aa[t]=ia;aa[56]=function(t,e,r,n){return new ss(is.negint,-1-Es(t,e+1,n),2)},aa[57]=function(t,e,r,n){return new ss(is.negint,-1-Cs(t,e+1,n),3)},aa[58]=function(t,e,r,n){return new ss(is.negint,-1-Ss(t,e+1,n),5)},aa[59]=function(t,e,r,n){const o=$s(t,e+1,n);if("bigint"!=typeof o){const t=-1-o;if(t>=Number.MIN_SAFE_INTEGER)return new ss(is.negint,t,9)}if(!0!==n.allowBigInt)throw new Error("CBOR decode error: integers outside of the safe integer range are not supported");return new ss(is.negint,Bs-BigInt(o),9)},aa[60]=ia,aa[61]=ia,aa[62]=ia,aa[63]=ia;for(let t=64;t<=87;t++)aa[t]=Ds;aa[88]=function(t,e,r,n){return Os(t,e,2,Es(t,e+1,n))},aa[89]=function(t,e,r,n){return Os(t,e,3,Cs(t,e+1,n))},aa[90]=function(t,e,r,n){return Os(t,e,5,Ss(t,e+1,n))},aa[91]=function(t,e,r,n){const o=$s(t,e+1,n);if("bigint"==typeof o)throw new Error("CBOR decode error: 64-bit integer bytes lengths not supported");return Os(t,e,9,o)},aa[92]=ia,aa[93]=ia,aa[94]=ia,aa[95]=sa("indefinite length bytes/strings are not supported");for(let t=96;t<=119;t++)aa[t]=Ps;aa[120]=function(t,e,r,n){return Rs(t,e,2,Es(t,e+1,n))},aa[121]=function(t,e,r,n){return Rs(t,e,3,Cs(t,e+1,n))},aa[122]=function(t,e,r,n){return Rs(t,e,5,Ss(t,e+1,n))},aa[123]=function(t,e,r,n){const o=$s(t,e+1,n);if("bigint"==typeof o)throw new Error("CBOR decode error: 64-bit integer string lengths not supported");return Rs(t,e,9,o)},aa[124]=ia,aa[125]=ia,aa[126]=ia,aa[127]=sa("indefinite length bytes/strings are not supported");for(let t=128;t<=151;t++)aa[t]=Fs;aa[152]=function(t,e,r,n){return js(0,0,2,Es(t,e+1,n))},aa[153]=function(t,e,r,n){return js(0,0,3,Cs(t,e+1,n))},aa[154]=function(t,e,r,n){return js(0,0,5,Ss(t,e+1,n))},aa[155]=function(t,e,r,n){const o=$s(t,e+1,n);if("bigint"==typeof o)throw new Error("CBOR decode error: 64-bit integer array lengths not supported");return js(0,0,9,o)},aa[156]=ia,aa[157]=ia,aa[158]=ia,aa[159]=function(t,e,r,n){if(!1===n.allowIndefinite)throw new Error("CBOR decode error: indefinite length items not allowed");return js(0,0,1,1/0)};for(let t=160;t<=183;t++)aa[t]=qs;aa[184]=function(t,e,r,n){return Vs(0,0,2,Es(t,e+1,n))},aa[185]=function(t,e,r,n){return Vs(0,0,3,Cs(t,e+1,n))},aa[186]=function(t,e,r,n){return Vs(0,0,5,Ss(t,e+1,n))},aa[187]=function(t,e,r,n){const o=$s(t,e+1,n);if("bigint"==typeof o)throw new Error("CBOR decode error: 64-bit integer map lengths not supported");return Vs(0,0,9,o)},aa[188]=ia,aa[189]=ia,aa[190]=ia,aa[191]=function(t,e,r,n){if(!1===n.allowIndefinite)throw new Error("CBOR decode error: indefinite length items not allowed");return Vs(0,0,1,1/0)};for(let t=192;t<=215;t++)aa[t]=Ks;aa[216]=function(t,e,r,n){return new ss(is.tag,Es(t,e+1,n),2)},aa[217]=function(t,e,r,n){return new ss(is.tag,Cs(t,e+1,n),3)},aa[218]=function(t,e,r,n){return new ss(is.tag,Ss(t,e+1,n),5)},aa[219]=function(t,e,r,n){return new ss(is.tag,$s(t,e+1,n),9)},aa[220]=ia,aa[221]=ia,aa[222]=ia,aa[223]=ia;for(let t=224;t<=243;t++)aa[t]=sa("simple values are not supported");aa[244]=ia,aa[245]=ia,aa[246]=ia,aa[247]=function(t,e,r,n){if(!1===n.allowUndefined)throw new Error("CBOR decode error: undefined values are not supported");return!0===n.coerceUndefinedToNull?new ss(is.null,null,1):new ss(is.undefined,void 0,1)},aa[248]=sa("simple values are not supported"),aa[249]=function(t,e,r,n){return Js(ea(t,e+1),3,n)},aa[250]=function(t,e,r,n){return Js(na(t,e+1),5,n)},aa[251]=function(t,e,r,n){return Js(oa(t,e+1),9,n)},aa[252]=ia,aa[253]=ia,aa[254]=ia,aa[255]=function(t,e,r,n){if(!1===n.allowIndefinite)throw new Error("CBOR decode error: indefinite length items not allowed");return new ss(is.break,void 0,1)};const la=[];for(let t=0;t<24;t++)la[t]=new ss(is.uint,t,1);for(let t=-1;t>=-24;t--)la[31-t]=new ss(is.negint,t,1);la[64]=new ss(is.bytes,new Uint8Array(0),1),la[96]=new ss(is.string,"",1),la[128]=new ss(is.array,0,1),la[160]=new ss(is.map,0,1),la[244]=new ss(is.false,!1,1),la[245]=new ss(is.true,!0,1),la[246]=new ss(is.null,null,1);const ca={float64:!1,mapSorter:function(t,e){const r=Array.isArray(t[0])?t[0][0]:t[0],n=Array.isArray(e[0])?e[0][0]:e[0];if(r.type!==n.type)return r.type.compare(n.type);const o=r.type.major,i=ha[o].compareTokens(r,n);0===i&&console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone");return i},quickEncodeToken:function(t){switch(t.type){case is.false:return fs([244]);case is.true:return fs([245]);case is.null:return fs([246]);case is.bytes:return t.value.length?void 0:fs([64]);case is.string:return""===t.value?fs([96]):void 0;case is.array:return 0===t.value?fs([128]):void 0;case is.map:return 0===t.value?fs([160]):void 0;case is.uint:return t.value<24?fs([Number(t.value)]):void 0;case is.negint:if(t.value>=-24)return fs([31-Number(t.value)])}}},ha=[];ha[is.uint.major]=Ts,ha[is.negint.major]=Us,ha[is.bytes.major]=Ns,ha[is.string.major]=Ms,ha[is.array.major]=Hs,ha[is.map.major]=Ws,ha[is.tag.major]=Gs,ha[is.float.major]=Xs;const ua=new _s;class da{constructor(t,e){this.obj=t,this.parent=e}includes(t){let e=this;do{if(e.obj===t)return!0}while(e=e.parent);return!1}static createCheck(t,e){if(t&&t.includes(e))throw new Error("CBOR encode error: object contains circular references");return new da(e,t)}}const pa={null:new ss(is.null,null),undefined:new ss(is.undefined,void 0),true:new ss(is.true,!0),false:new ss(is.false,!1),emptyArray:new ss(is.array,0),emptyMap:new ss(is.map,0)},fa={number:(t,e,r,n)=>Number.isInteger(t)&&Number.isSafeInteger(t)?new ss(t>=0?is.uint:is.negint,t):new ss(is.float,t),bigint:(t,e,r,n)=>t>=BigInt(0)?new ss(is.uint,t):new ss(is.negint,t),Uint8Array:(t,e,r,n)=>new ss(is.bytes,t),string:(t,e,r,n)=>new ss(is.string,t),boolean:(t,e,r,n)=>t?pa.true:pa.false,null:(t,e,r,n)=>pa.null,undefined:(t,e,r,n)=>pa.undefined,ArrayBuffer:(t,e,r,n)=>new ss(is.bytes,new Uint8Array(t)),DataView:(t,e,r,n)=>new ss(is.bytes,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),Array(t,e,r,n){if(!t.length)return!0===r.addBreakTokens?[pa.emptyArray,new ss(is.break)]:pa.emptyArray;n=da.createCheck(n,t);const o=[];let i=0;for(const e of t)o[i++]=ba(e,r,n);return r.addBreakTokens?[new ss(is.array,t.length),o,new ss(is.break)]:[new ss(is.array,t.length),o]},Object(t,e,r,n){const o="Object"!==e,i=o?t.keys():Object.keys(t),s=o?t.size:i.length;if(!s)return!0===r.addBreakTokens?[pa.emptyMap,new ss(is.break)]:pa.emptyMap;n=da.createCheck(n,t);const a=[];let l=0;for(const e of i)a[l++]=[ba(e,r,n),ba(o?t.get(e):t[e],r,n)];return function(t,e){e.mapSorter&&t.sort(e.mapSorter)}(a,r),r.addBreakTokens?[new ss(is.map,s),a,new ss(is.break)]:[new ss(is.map,s),a]}};fa.Map=fa.Object,fa.Buffer=fa.Uint8Array;for(const t of"Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" "))fa[`${t}Array`]=fa.DataView;function ba(t,e={},r){const n=os(t),o=e&&e.typeEncoders&&e.typeEncoders[n]||fa[n];if("function"==typeof o){const i=o(t,n,e,r);if(null!=i)return i}const i=fa[n];if(!i)throw new Error(`CBOR encode error: unsupported type: ${n}`);return i(t,n,e,r)}function ga(t,e,r,n){if(Array.isArray(e))for(const o of e)ga(t,o,r,n);else r[e.type.major](t,e,n)}function ya(t,e,r){const n=ba(t,r);if(!Array.isArray(n)&&r.quickEncodeToken){const t=r.quickEncodeToken(n);if(t)return t;const o=e[n.type.major];if(o.encodedSize){const t=o.encodedSize(n,r),e=new _s(t);if(o(e,n,r),1!==e.chunks.length)throw new Error(`Unexpected error: pre-calculated length for ${n} was wrong`);return us(e.chunks[0])}}return ga(ua,n,e,r),ua.toBytes(!0)}const ma={strict:!1,allowIndefinite:!0,allowUndefined:!0,allowBigInt:!0};class wa{constructor(t,e={}){this.pos=0,this.data=t,this.options=e}done(){return this.pos>=this.data.length}next(){const t=this.data[this.pos];let e=la[t];if(void 0===e){const r=aa[t];if(!r)throw new Error(`CBOR decode error: no decoder for major type ${t>>>5} (byte 0x${t.toString(16).padStart(2,"0")})`);const n=31&t;e=r(this.data,this.pos,n,this.options)}return this.pos+=e.encodedLength,e}}const va=Symbol.for("DONE"),_a=Symbol.for("BREAK");function xa(t,e){if(t.done())return va;const r=t.next();if(r.type===is.break)return _a;if(r.type.terminal)return r.value;if(r.type===is.array)return function(t,e,r){const n=[];for(let o=0;o<t.value;o++){const i=xa(e,r);if(i===_a){if(t.value===1/0)break;throw new Error("CBOR decode error: got unexpected break to lengthed array")}if(i===va)throw new Error(`CBOR decode error: found array but not enough entries (got ${o}, expected ${t.value})`);n[o]=i}return n}(r,t,e);if(r.type===is.map)return function(t,e,r){const n=!0===r.useMaps,o=n?void 0:{},i=n?new Map:void 0;for(let s=0;s<t.value;s++){const a=xa(e,r);if(a===_a){if(t.value===1/0)break;throw new Error("CBOR decode error: got unexpected break to lengthed map")}if(a===va)throw new Error(`CBOR decode error: found map but not enough entries (got ${s} [no key], expected ${t.value})`);if(!0!==n&&"string"!=typeof a)throw new Error(`CBOR decode error: non-string keys not supported (got ${typeof a})`);const l=xa(e,r);if(l===va)throw new Error(`CBOR decode error: found map but not enough entries (got ${s} [no value], expected ${t.value})`);n?i.set(a,l):o[a]=l}return n?i:o}(r,t,e);if(r.type===is.tag){if(e.tags&&"function"==typeof e.tags[r.value]){const n=xa(t,e);return e.tags[r.value](n)}throw new Error(`CBOR decode error: tag not supported (${r.value})`)}throw new Error("unsupported")}var ka=function t(e,r,n){r=r||[];var o=n=n||0;for(;e>=Aa;)r[n++]=255&e|128,e/=128;for(;-128&e;)r[n++]=255&e|128,e>>>=7;return r[n]=0|e,t.bytes=n-o+1,r},Aa=Math.pow(2,31);var Ea=function t(e,r){var n,o=0,i=0,s=r=r||0,a=e.length;do{if(s>=a)throw t.bytes=0,new RangeError("Could not decode varint");n=e[s++],o+=i<28?(127&n)<<i:(127&n)*Math.pow(2,i),i+=7}while(n>=128);return t.bytes=s-r,o};var Ca=Math.pow(2,7),Sa=Math.pow(2,14),$a=Math.pow(2,21),Ta=Math.pow(2,28),Ia=Math.pow(2,35),Ba=Math.pow(2,42),za=Math.pow(2,49),Ua=Math.pow(2,56),Oa=Math.pow(2,63);const Da={encode:ka,decode:Ea,encodingLength:function(t){return t<Ca?1:t<Sa?2:t<$a?3:t<Ta?4:t<Ia?5:t<Ba?6:t<za?7:t<Ua?8:t<Oa?9:10}},La=t=>[Da.decode(t),Da.decode.bytes],Na=(t,e,r=0)=>(Da.encode(t,e,r),e),Ra=t=>Da.encodingLength(t),Pa=(new Uint8Array(0),t=>{if(t instanceof Uint8Array&&"Uint8Array"===t.constructor.name)return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")});class Ma{constructor(t,e,r,n){this.code=t,this.size=e,this.digest=r,this.bytes=n}}var ja=function(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var o=0;o<t.length;o++){var i=t.charAt(o),s=i.charCodeAt(0);if(255!==r[s])throw new TypeError(i+" is ambiguous");r[s]=o}var a=t.length,l=t.charAt(0),c=Math.log(a)/Math.log(256),h=Math.log(256)/Math.log(a);function u(t){if("string"!=typeof t)throw new TypeError("Expected String");if(0===t.length)return new Uint8Array;var e=0;if(" "!==t[e]){for(var n=0,o=0;t[e]===l;)n++,e++;for(var i=(t.length-e)*c+1>>>0,s=new Uint8Array(i);t[e];){var h=r[t.charCodeAt(e)];if(255===h)return;for(var u=0,d=i-1;(0!==h||u<o)&&-1!==d;d--,u++)h+=a*s[d]>>>0,s[d]=h%256>>>0,h=h/256>>>0;if(0!==h)throw new Error("Non-zero carry");o=u,e++}if(" "!==t[e]){for(var p=i-o;p!==i&&0===s[p];)p++;for(var f=new Uint8Array(n+(i-p)),b=n;p!==i;)f[b++]=s[p++];return f}}}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===e.length)return"";for(var r=0,n=0,o=0,i=e.length;o!==i&&0===e[o];)o++,r++;for(var s=(i-o)*h+1>>>0,c=new Uint8Array(s);o!==i;){for(var u=e[o],d=0,p=s-1;(0!==u||d<n)&&-1!==p;p--,d++)u+=256*c[p]>>>0,c[p]=u%a>>>0,u=u/a>>>0;if(0!==u)throw new Error("Non-zero carry");n=d,o++}for(var f=s-n;f!==s&&0===c[f];)f++;for(var b=l.repeat(r);f<s;++f)b+=t.charAt(c[f]);return b},decodeUnsafe:u,decode:function(t){var r=u(t);if(r)return r;throw new Error(`Non-${e} character`)}}};const Fa=ja;class Ha{constructor(t,e,r){this.name=t,this.prefix=e,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class Va{constructor(t,e,r){this.name=t,this.prefix=e,this.baseDecode=r}decode(t){if("string"==typeof t){if(t[0]===this.prefix)return this.baseDecode(t.slice(1));throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`)}throw Error("Can only multibase decode strings")}or(t){return Wa(this,t)}}class qa{constructor(t){this.decoders=t}or(t){return Wa(this,t)}decode(t){const e=t[0],r=this.decoders[e];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const Wa=(t,e)=>new qa({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class Ka{constructor(t,e,r,n){this.name=t,this.prefix=e,this.baseEncode=r,this.baseDecode=n,this.encoder=new Ha(t,e,r),this.decoder=new Va(t,e,n)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}const Ga=({name:t,prefix:e,encode:r,decode:n})=>new Ka(t,e,r,n),Ja=({prefix:t,name:e,alphabet:r})=>{const{encode:n,decode:o}=Fa(r,e);return Ga({prefix:t,name:e,encode:n,decode:t=>Pa(o(t))})},Xa=({name:t,prefix:e,bitsPerChar:r,alphabet:n})=>Ga({prefix:e,name:t,encode:t=>((t,e,r)=>{const n="="===e[e.length-1],o=(1<<r)-1;let i="",s=0,a=0;for(let n=0;n<t.length;++n)for(a=a<<8|t[n],s+=8;s>r;)s-=r,i+=e[o&a>>s];if(s&&(i+=e[o&a<<r-s]),n)for(;i.length*r&7;)i+="=";return i})(t,n,r),decode:e=>((t,e,r,n)=>{const o={};for(let t=0;t<e.length;++t)o[e[t]]=t;let i=t.length;for(;"="===t[i-1];)--i;const s=new Uint8Array(i*r/8|0);let a=0,l=0,c=0;for(let e=0;e<i;++e){const i=o[t[e]];if(void 0===i)throw new SyntaxError(`Non-${n} character`);l=l<<r|i,a+=r,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=r||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s})(e,n,r,t)}),Za=Ja({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Ya=(Ja({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),Xa({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}));Xa({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),Xa({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),Xa({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),Xa({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),Xa({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),Xa({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),Xa({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),Xa({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});class Qa{constructor(t,e,r,n){this.code=e,this.version=t,this.multihash=r,this.bytes=n,this.byteOffset=n.byteOffset,this.byteLength=n.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:ll,byteLength:ll,code:al,version:al,multihash:al,bytes:al,_baseCache:ll,asCID:ll})}toV0(){if(0===this.version)return this;{const{code:t,multihash:e}=this;if(t!==nl)throw new Error("Cannot convert a non dag-pb CID to CIDv0");if(e.code!==ol)throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");return Qa.createV0(e)}}toV1(){switch(this.version){case 0:{const{code:t,digest:e}=this.multihash,r=((t,e)=>{const r=e.byteLength,n=Ra(t),o=n+Ra(r),i=new Uint8Array(o+r);return Na(t,i,0),Na(r,i,n),i.set(e,o),new Ma(t,r,e,i)})(t,e);return Qa.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(t){return t&&this.code===t.code&&this.version===t.version&&((t,e)=>t===e||t.code===e.code&&t.size===e.size&&((t,e)=>{if(t===e)return!0;if(t.byteLength!==e.byteLength)return!1;for(let r=0;r<t.byteLength;r++)if(t[r]!==e[r])return!1;return!0})(t.bytes,e.bytes))(this.multihash,t.multihash)}toString(t){const{bytes:e,version:r,_baseCache:n}=this;return 0===r?el(e,n,t||Za.encoder):rl(e,n,t||Ya.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(t){return cl(/^0\.0/,hl),!(!t||!t[sl]&&t.asCID!==t)}get toBaseEncodedString(){throw new Error("Deprecated, use .toString()")}get codec(){throw new Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw new Error('"multibaseName" property is deprecated')}get prefix(){throw new Error('"prefix" property is deprecated')}static asCID(t){if(t instanceof Qa)return t;if(null!=t&&t.asCID===t){const{version:e,code:r,multihash:n,bytes:o}=t;return new Qa(e,r,n,o||il(e,r,n.bytes))}if(null!=t&&!0===t[sl]){const{version:e,multihash:r,code:n}=t,o=(t=>{const e=Pa(t),[r,n]=La(e),[o,i]=La(e.subarray(n)),s=e.subarray(n+i);if(s.byteLength!==o)throw new Error("Incorrect length");return new Ma(r,o,s,e)})(r);return Qa.create(e,n,o)}return null}static create(t,e,r){if("number"!=typeof e)throw new Error("String codecs are no longer supported");switch(t){case 0:if(e!==nl)throw new Error(`Version 0 CID must use dag-pb (code: ${nl}) block encoding`);return new Qa(t,e,r,r.bytes);case 1:{const n=il(t,e,r.bytes);return new Qa(t,e,r,n)}default:throw new Error("Invalid version")}}static createV0(t){return Qa.create(0,nl,t)}static createV1(t,e){return Qa.create(1,t,e)}static decode(t){const[e,r]=Qa.decodeFirst(t);if(r.length)throw new Error("Incorrect length");return e}static decodeFirst(t){const e=Qa.inspectBytes(t),r=e.size-e.multihashSize,n=Pa(t.subarray(r,r+e.multihashSize));if(n.byteLength!==e.multihashSize)throw new Error("Incorrect length");const o=n.subarray(e.multihashSize-e.digestSize),i=new Ma(e.multihashCode,e.digestSize,o,n);return[0===e.version?Qa.createV0(i):Qa.createV1(e.codec,i),t.subarray(e.size)]}static inspectBytes(t){let e=0;const r=()=>{const[r,n]=La(t.subarray(e));return e+=n,r};let n=r(),o=nl;if(18===n?(n=0,e=0):1===n&&(o=r()),0!==n&&1!==n)throw new RangeError(`Invalid CID version ${n}`);const i=e,s=r(),a=r(),l=e+a;return{version:n,codec:o,multihashCode:s,digestSize:a,multihashSize:l-i,size:l}}static parse(t,e){const[r,n]=tl(t,e),o=Qa.decode(n);return o._baseCache.set(r,t),o}}const tl=(t,e)=>{switch(t[0]){case"Q":{const r=e||Za;return[Za.prefix,r.decode(`${Za.prefix}${t}`)]}case Za.prefix:{const r=e||Za;return[Za.prefix,r.decode(t)]}case Ya.prefix:{const r=e||Ya;return[Ya.prefix,r.decode(t)]}default:if(null==e)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[t[0],e.decode(t)]}},el=(t,e,r)=>{const{prefix:n}=r;if(n!==Za.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);const o=e.get(n);if(null==o){const o=r.encode(t).slice(1);return e.set(n,o),o}return o},rl=(t,e,r)=>{const{prefix:n}=r,o=e.get(n);if(null==o){const o=r.encode(t);return e.set(n,o),o}return o},nl=112,ol=18,il=(t,e,r)=>{const n=Ra(t),o=n+Ra(e),i=new Uint8Array(o+r.byteLength);return Na(t,i,0),Na(e,i,n),i.set(r,o),i},sl=Symbol.for("@ipld/js-cid/CID"),al={writable:!1,configurable:!1,enumerable:!0},ll={writable:!1,enumerable:!1,configurable:!1},cl=(t,e)=>{if(!t.test("0.0.0-dev"))throw new Error(e);console.warn(e)},hl="CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n";const ul={float64:!0,typeEncoders:{Object:function(t){if(t.asCID!==t)return null;const e=Qa.asCID(t);if(!e)return null;const r=new Uint8Array(e.bytes.byteLength+1);return r.set(e.bytes,1),[new ss(is.tag,42),new ss(is.bytes,r)]},undefined:function(){throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded")},number:function(t){if(Number.isNaN(t))throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");if(t===1/0||t===-1/0)throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");return null}}};const dl={allowIndefinite:!1,coerceUndefinedToNull:!0,allowNaN:!1,allowInfinity:!1,allowBigInt:!0,strict:!0,useMaps:!1,tags:[]};dl.tags[42]=function(t){if(0!==t[0])throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");return Qa.decode(t.subarray(1))};const pl=t=>function(t,e){return e=Object.assign({},ca,e),ya(t,ha,e)}(t,ul),fl=t=>function(t,e){if(!(t instanceof Uint8Array))throw new Error("CBOR decode error: data to decode must be a Uint8Array");const r=(e=Object.assign({},ma,e)).tokenizer||new wa(t,e),n=xa(r,e);if(n===va)throw new Error("CBOR decode error: did not find any content to decode");if(n===_a)throw new Error("CBOR decode error: got unexpected break");if(!r.done())throw new Error("CBOR decode error: too many terminals, data makes no sense");return n}(t,dl),bl=18,gl=32,yl=112;async function ml(t){const e=await t.upTo(8),r=di.decode(e);return t.seek(di.decode.bytes),r}async function wl(t){const e=await ml(t);if(0===e)throw new Error("Invalid CAR header (zero length)");const r=await t.exactly(e);t.seek(e);const n=fl(r);if(null==n||Array.isArray(n)||"object"!=typeof n)throw new Error("Invalid CAR header format");if(1!==n.version){if("string"==typeof n.version)throw new Error(`Invalid CAR version: "${n.version}"`);throw new Error(`Invalid CAR version: ${n.version}`)}if(!Array.isArray(n.roots))throw new Error("Invalid CAR header format");if(Object.keys(n).filter((t=>"roots"!==t&&"version"!==t)).length)throw new Error("Invalid CAR header format");return n}async function vl(t){const e=await t.exactly(2);if(e[0]===bl&&e[1]===gl){const e=await t.exactly(34);t.seek(34);const r=Ii(e);return Vi.create(0,yl,r)}const r=await ml(t);if(1!==r)throw new Error(`Unexpected CID version (${r})`);const n=await ml(t),o=await async function(t){const e=await t.upTo(8);di.decode(e);const r=di.decode.bytes,n=di.decode(e.subarray(di.decode.bytes)),o=r+di.decode.bytes+n,i=await t.exactly(o);return t.seek(o),i}(t),i=Ii(o);return Vi.create(r,n,i)}async function _l(t){const e=t.pos;let r=await ml(t);if(0===r)throw new Error("Invalid CAR section (zero length)");r+=t.pos-e;return{cid:await vl(t),length:r,blockLength:r-(t.pos-e)}}async function xl(t){const{cid:e,blockLength:r}=await _l(t),n=await t.exactly(r);return t.seek(r),{bytes:n,cid:e}}async function kl(t){const e=t.pos,{cid:r,length:n,blockLength:o}=await _l(t),i={cid:r,length:n,blockLength:o,offset:e,blockOffset:t.pos};return t.seek(i.blockLength),i}function Al(t){let e=0;return{upTo:async r=>t.subarray(e,e+Math.min(r,t.length-e)),async exactly(r){if(r>t.length-e)throw new Error("Unexpected end of data");return t.subarray(e,e+r)},seek(t){e+=t},get pos(){return e}}}function El(t){const e=t[Symbol.asyncIterator]();return function(t){let e=0,r=0,n=0,o=new Uint8Array(0);const i=async e=>{r=o.length-n;const i=[o.subarray(n)];for(;r<e;){const e=await t();if(null==e)break;r<0?e.length>r&&i.push(e.subarray(-r)):i.push(e),r+=e.length}o=new Uint8Array(i.reduce(((t,e)=>t+e.length),0));let s=0;for(const t of i)o.set(t,s),s+=t.length;n=0};return{upTo:async t=>(o.length-n<t&&await i(t),o.subarray(n,n+Math.min(o.length-n,t))),async exactly(t){if(o.length-n<t&&await i(t),o.length-n<t)throw new Error("Unexpected end of data");return o.subarray(n,n+t)},seek(t){e+=t,n+=t},get pos(){return e}}}((async function(){const t=await e.next();return t.done?null:t.value}))}Symbol.asyncIterator;class Cl{constructor(t,e,r){this._version=t,this._roots=e,this._iterable=r,this._decoded=!1}get version(){return this._version}async getRoots(){return this._roots}}class Sl extends Cl{[Symbol.asyncIterator](){if(this._decoded)throw new Error("Cannot decode more than once");if(!this._iterable)throw new Error("Block iterable not found");return this._decoded=!0,this._iterable[Symbol.asyncIterator]()}static async fromBytes(t){const{version:e,roots:r,iterator:n}=await $l(t);return new Sl(e,r,n)}static async fromIterable(t){const{version:e,roots:r,iterator:n}=await Tl(t);return new Sl(e,r,n)}}Symbol.asyncIterator;async function $l(t){if(!(t instanceof Uint8Array))throw new TypeError("fromBytes() requires a Uint8Array");return Il(Al(t))}async function Tl(t){if(!t||"function"!=typeof t[Symbol.asyncIterator])throw new TypeError("fromIterable() requires an async iterable");return Il(El(t))}async function Il(t){const e=function(t){const e=wl(t);return{header:()=>e,async*blocks(){for(await e;(await t.upTo(8)).length>0;)yield await xl(t)},async*blocksIndex(){for(await e;(await t.upTo(8)).length>0;)yield await kl(t)}}}(t),{version:r,roots:n}=await e.header();return{version:r,roots:n,iterator:e.blocks()}}function Bl(t){const e=pl({version:1,roots:t}),r=di.encode(e.length),n=new Uint8Array(r.length+e.length);return n.set(r,0),n.set(e,r.length),n}function zl(){}class Ul{constructor(t,e){this._encoder=e,this._mutex=e.setRoots(t),this._ended=!1}async put(t){if(!(t.bytes instanceof Uint8Array&&t.cid))throw new TypeError("Can only write {cid, bytes} objects");if(this._ended)throw new Error("Already closed");const e=Vi.asCID(t.cid);if(!e)throw new TypeError("Can only write {cid, bytes} objects");return this._mutex=this._mutex.then((()=>this._encoder.writeBlock({cid:e,bytes:t.bytes}))),this._mutex}async close(){if(this._ended)throw new Error("Already closed");return await this._mutex,this._ended=!0,this._encoder.close()}static create(t){t=function(t){if(void 0===t)return[];if(!Array.isArray(t)){const e=Vi.asCID(t);if(!e)throw new TypeError("roots must be a single CID or an array of CIDs");return[e]}const e=[];for(const r of t){const t=Vi.asCID(r);if(!t)throw new TypeError("roots must be a single CID or an array of CIDs");e.push(t)}return e}(t);const{encoder:e,iterator:r}=Dl();return{writer:new Ul(t,e),out:new Ol(r)}}static createAppender(){const{encoder:t,iterator:e}=Dl();t.setRoots=()=>Promise.resolve();return{writer:new Ul([],t),out:new Ol(e)}}static async updateRootsInBytes(t,e){const r=Al(t);await wl(r);const n=Bl(e);if(r.pos!==n.length)throw new Error(`updateRoots() can only overwrite a header of the same length (old header is ${r.pos} bytes, new header is ${n.length} bytes)`);return t.set(n,0),t}}class Ol{constructor(t){this._iterator=t}[Symbol.asyncIterator](){if(this._iterating)throw new Error("Multiple iterator not supported");return this._iterating=!0,this._iterator}}function Dl(){const t=function(){const t=[];let e=null,r=zl,n=!1,o=null,i=zl;const s=()=>(e||(e=new Promise((t=>{r=()=>{e=null,r=zl,t()}}))),e),a={write(e){t.push(e);const r=s();return i(),r},async end(){n=!0;const t=s();return i(),t}},l={async next(){const e=t.shift();return e?(0===t.length&&r(),{done:!1,value:e}):n?(r(),{done:!0,value:void 0}):(o||(o=new Promise((t=>{i=()=>(o=null,i=zl,t(l.next()))}))),o)}};return{writer:a,iterator:l}}(),{writer:e,iterator:r}=t,n=function(t){return{async setRoots(e){const r=Bl(e);await t.write(r)},async writeBlock(e){const{cid:r,bytes:n}=e;await t.write(new Uint8Array(di.encode(r.bytes.length+n.length))),await t.write(r.bytes),n.length&&await t.write(n)},close:async()=>t.end()}}(e);return{encoder:n,iterator:r}}var Ll=__webpack_require__(4810);const Nl=__webpack_require__(942);var Rl=__webpack_require__(6155),Pl=__webpack_require__(7225),Ml=__webpack_require__(6441),jl=__webpack_require__(469);(0,Pl.D)({name:"murmur3-32",code:35,encode:t=>function(t){const e=new Array(4);for(let r=0;r<4;r++)e[r]=255&t,t>>=8;return new Uint8Array(e)}(jl.x86.hash32(t))});const Fl=(0,Pl.D)({name:"murmur3-128",code:34,encode:t=>Ml.aI.fromHex(jl.x64.hash128(t))});const Hl={chunker:"fixed",strategy:"balanced",rawLeaves:!1,onlyHash:!1,reduceSingleLeafToSelf:!0,hasher:Rl.sha256,leafType:"file",cidVersion:0,progress:()=>()=>{},shardSplitThreshold:1e3,fileImportConcurrency:50,blockWriteConcurrency:10,minChunkSize:262144,maxChunkSize:262144,avgChunkSize:262144,window:16,polynomial:0x3df305dfb2a804,maxChildrenPerNode:174,layerRepeat:4,wrapWithDirectory:!1,recursive:!1,hidden:!1,timeout:void 0,hamtHashFn:async function(t){return(await Fl.encode(t)).slice(0,8).reverse()},hamtHashCode:34,hamtBucketBits:8};var Vl=__webpack_require__(2114),ql=__webpack_require__(2100);const Wl=ql.Reader,Kl=ql.Writer,Gl=ql.util,Jl=ql.roots["ipfs-unixfs"]||(ql.roots["ipfs-unixfs"]={}),Xl=Jl.Data=(()=>{function t(t){if(this.blocksizes=[],t)for(var e=Object.keys(t),r=0;r<e.length;++r)null!=t[e[r]]&&(this[e[r]]=t[e[r]])}return t.prototype.Type=0,t.prototype.Data=Gl.newBuffer([]),t.prototype.filesize=Gl.Long?Gl.Long.fromBits(0,0,!0):0,t.prototype.blocksizes=Gl.emptyArray,t.prototype.hashType=Gl.Long?Gl.Long.fromBits(0,0,!0):0,t.prototype.fanout=Gl.Long?Gl.Long.fromBits(0,0,!0):0,t.prototype.mode=0,t.prototype.mtime=null,t.encode=function(t,e){if(e||(e=Kl.create()),e.uint32(8).int32(t.Type),null!=t.Data&&Object.hasOwnProperty.call(t,"Data")&&e.uint32(18).bytes(t.Data),null!=t.filesize&&Object.hasOwnProperty.call(t,"filesize")&&e.uint32(24).uint64(t.filesize),null!=t.blocksizes&&t.blocksizes.length)for(var r=0;r<t.blocksizes.length;++r)e.uint32(32).uint64(t.blocksizes[r]);return null!=t.hashType&&Object.hasOwnProperty.call(t,"hashType")&&e.uint32(40).uint64(t.hashType),null!=t.fanout&&Object.hasOwnProperty.call(t,"fanout")&&e.uint32(48).uint64(t.fanout),null!=t.mode&&Object.hasOwnProperty.call(t,"mode")&&e.uint32(56).uint32(t.mode),null!=t.mtime&&Object.hasOwnProperty.call(t,"mtime")&&Jl.UnixTime.encode(t.mtime,e.uint32(66).fork()).ldelim(),e},t.decode=function(t,e){t instanceof Wl||(t=Wl.create(t));for(var r=void 0===e?t.len:t.pos+e,n=new Jl.Data;t.pos<r;){var o=t.uint32();switch(o>>>3){case 1:n.Type=t.int32();break;case 2:n.Data=t.bytes();break;case 3:n.filesize=t.uint64();break;case 4:if(n.blocksizes&&n.blocksizes.length||(n.blocksizes=[]),2==(7&o))for(var i=t.uint32()+t.pos;t.pos<i;)n.blocksizes.push(t.uint64());else n.blocksizes.push(t.uint64());break;case 5:n.hashType=t.uint64();break;case 6:n.fanout=t.uint64();break;case 7:n.mode=t.uint32();break;case 8:n.mtime=Jl.UnixTime.decode(t,t.uint32());break;default:t.skipType(7&o)}}if(!n.hasOwnProperty("Type"))throw Gl.ProtocolError("missing required 'Type'",{instance:n});return n},t.fromObject=function(t){if(t instanceof Jl.Data)return t;var e=new Jl.Data;switch(t.Type){case"Raw":case 0:e.Type=0;break;case"Directory":case 1:e.Type=1;break;case"File":case 2:e.Type=2;break;case"Metadata":case 3:e.Type=3;break;case"Symlink":case 4:e.Type=4;break;case"HAMTShard":case 5:e.Type=5}if(null!=t.Data&&("string"==typeof t.Data?Gl.base64.decode(t.Data,e.Data=Gl.newBuffer(Gl.base64.length(t.Data)),0):t.Data.length&&(e.Data=t.Data)),null!=t.filesize&&(Gl.Long?(e.filesize=Gl.Long.fromValue(t.filesize)).unsigned=!0:"string"==typeof t.filesize?e.filesize=parseInt(t.filesize,10):"number"==typeof t.filesize?e.filesize=t.filesize:"object"==typeof t.filesize&&(e.filesize=new Gl.LongBits(t.filesize.low>>>0,t.filesize.high>>>0).toNumber(!0))),t.blocksizes){if(!Array.isArray(t.blocksizes))throw TypeError(".Data.blocksizes: array expected");e.blocksizes=[];for(var r=0;r<t.blocksizes.length;++r)Gl.Long?(e.blocksizes[r]=Gl.Long.fromValue(t.blocksizes[r])).unsigned=!0:"string"==typeof t.blocksizes[r]?e.blocksizes[r]=parseInt(t.blocksizes[r],10):"number"==typeof t.blocksizes[r]?e.blocksizes[r]=t.blocksizes[r]:"object"==typeof t.blocksizes[r]&&(e.blocksizes[r]=new Gl.LongBits(t.blocksizes[r].low>>>0,t.blocksizes[r].high>>>0).toNumber(!0))}if(null!=t.hashType&&(Gl.Long?(e.hashType=Gl.Long.fromValue(t.hashType)).unsigned=!0:"string"==typeof t.hashType?e.hashType=parseInt(t.hashType,10):"number"==typeof t.hashType?e.hashType=t.hashType:"object"==typeof t.hashType&&(e.hashType=new Gl.LongBits(t.hashType.low>>>0,t.hashType.high>>>0).toNumber(!0))),null!=t.fanout&&(Gl.Long?(e.fanout=Gl.Long.fromValue(t.fanout)).unsigned=!0:"string"==typeof t.fanout?e.fanout=parseInt(t.fanout,10):"number"==typeof t.fanout?e.fanout=t.fanout:"object"==typeof t.fanout&&(e.fanout=new Gl.LongBits(t.fanout.low>>>0,t.fanout.high>>>0).toNumber(!0))),null!=t.mode&&(e.mode=t.mode>>>0),null!=t.mtime){if("object"!=typeof t.mtime)throw TypeError(".Data.mtime: object expected");e.mtime=Jl.UnixTime.fromObject(t.mtime)}return e},t.toObject=function(t,e){e||(e={});var r={};if((e.arrays||e.defaults)&&(r.blocksizes=[]),e.defaults){if(r.Type=e.enums===String?"Raw":0,e.bytes===String?r.Data="":(r.Data=[],e.bytes!==Array&&(r.Data=Gl.newBuffer(r.Data))),Gl.Long){var n=new Gl.Long(0,0,!0);r.filesize=e.longs===String?n.toString():e.longs===Number?n.toNumber():n}else r.filesize=e.longs===String?"0":0;if(Gl.Long){n=new Gl.Long(0,0,!0);r.hashType=e.longs===String?n.toString():e.longs===Number?n.toNumber():n}else r.hashType=e.longs===String?"0":0;if(Gl.Long){n=new Gl.Long(0,0,!0);r.fanout=e.longs===String?n.toString():e.longs===Number?n.toNumber():n}else r.fanout=e.longs===String?"0":0;r.mode=0,r.mtime=null}if(null!=t.Type&&t.hasOwnProperty("Type")&&(r.Type=e.enums===String?Jl.Data.DataType[t.Type]:t.Type),null!=t.Data&&t.hasOwnProperty("Data")&&(r.Data=e.bytes===String?Gl.base64.encode(t.Data,0,t.Data.length):e.bytes===Array?Array.prototype.slice.call(t.Data):t.Data),null!=t.filesize&&t.hasOwnProperty("filesize")&&("number"==typeof t.filesize?r.filesize=e.longs===String?String(t.filesize):t.filesize:r.filesize=e.longs===String?Gl.Long.prototype.toString.call(t.filesize):e.longs===Number?new Gl.LongBits(t.filesize.low>>>0,t.filesize.high>>>0).toNumber(!0):t.filesize),t.blocksizes&&t.blocksizes.length){r.blocksizes=[];for(var o=0;o<t.blocksizes.length;++o)"number"==typeof t.blocksizes[o]?r.blocksizes[o]=e.longs===String?String(t.blocksizes[o]):t.blocksizes[o]:r.blocksizes[o]=e.longs===String?Gl.Long.prototype.toString.call(t.blocksizes[o]):e.longs===Number?new Gl.LongBits(t.blocksizes[o].low>>>0,t.blocksizes[o].high>>>0).toNumber(!0):t.blocksizes[o]}return null!=t.hashType&&t.hasOwnProperty("hashType")&&("number"==typeof t.hashType?r.hashType=e.longs===String?String(t.hashType):t.hashType:r.hashType=e.longs===String?Gl.Long.prototype.toString.call(t.hashType):e.longs===Number?new Gl.LongBits(t.hashType.low>>>0,t.hashType.high>>>0).toNumber(!0):t.hashType),null!=t.fanout&&t.hasOwnProperty("fanout")&&("number"==typeof t.fanout?r.fanout=e.longs===String?String(t.fanout):t.fanout:r.fanout=e.longs===String?Gl.Long.prototype.toString.call(t.fanout):e.longs===Number?new Gl.LongBits(t.fanout.low>>>0,t.fanout.high>>>0).toNumber(!0):t.fanout),null!=t.mode&&t.hasOwnProperty("mode")&&(r.mode=t.mode),null!=t.mtime&&t.hasOwnProperty("mtime")&&(r.mtime=Jl.UnixTime.toObject(t.mtime,e)),r},t.prototype.toJSON=function(){return this.constructor.toObject(this,ql.util.toJSONOptions)},t.DataType=function(){const t={},e=Object.create(t);return e[t[0]="Raw"]=0,e[t[1]="Directory"]=1,e[t[2]="File"]=2,e[t[3]="Metadata"]=3,e[t[4]="Symlink"]=4,e[t[5]="HAMTShard"]=5,e}(),t})(),Zl=(Jl.UnixTime=(()=>{function t(t){if(t)for(var e=Object.keys(t),r=0;r<e.length;++r)null!=t[e[r]]&&(this[e[r]]=t[e[r]])}return t.prototype.Seconds=Gl.Long?Gl.Long.fromBits(0,0,!1):0,t.prototype.FractionalNanoseconds=0,t.encode=function(t,e){return e||(e=Kl.create()),e.uint32(8).int64(t.Seconds),null!=t.FractionalNanoseconds&&Object.hasOwnProperty.call(t,"FractionalNanoseconds")&&e.uint32(21).fixed32(t.FractionalNanoseconds),e},t.decode=function(t,e){t instanceof Wl||(t=Wl.create(t));for(var r=void 0===e?t.len:t.pos+e,n=new Jl.UnixTime;t.pos<r;){var o=t.uint32();switch(o>>>3){case 1:n.Seconds=t.int64();break;case 2:n.FractionalNanoseconds=t.fixed32();break;default:t.skipType(7&o)}}if(!n.hasOwnProperty("Seconds"))throw Gl.ProtocolError("missing required 'Seconds'",{instance:n});return n},t.fromObject=function(t){if(t instanceof Jl.UnixTime)return t;var e=new Jl.UnixTime;return null!=t.Seconds&&(Gl.Long?(e.Seconds=Gl.Long.fromValue(t.Seconds)).unsigned=!1:"string"==typeof t.Seconds?e.Seconds=parseInt(t.Seconds,10):"number"==typeof t.Seconds?e.Seconds=t.Seconds:"object"==typeof t.Seconds&&(e.Seconds=new Gl.LongBits(t.Seconds.low>>>0,t.Seconds.high>>>0).toNumber())),null!=t.FractionalNanoseconds&&(e.FractionalNanoseconds=t.FractionalNanoseconds>>>0),e},t.toObject=function(t,e){e||(e={});var r={};if(e.defaults){if(Gl.Long){var n=new Gl.Long(0,0,!1);r.Seconds=e.longs===String?n.toString():e.longs===Number?n.toNumber():n}else r.Seconds=e.longs===String?"0":0;r.FractionalNanoseconds=0}return null!=t.Seconds&&t.hasOwnProperty("Seconds")&&("number"==typeof t.Seconds?r.Seconds=e.longs===String?String(t.Seconds):t.Seconds:r.Seconds=e.longs===String?Gl.Long.prototype.toString.call(t.Seconds):e.longs===Number?new Gl.LongBits(t.Seconds.low>>>0,t.Seconds.high>>>0).toNumber():t.Seconds),null!=t.FractionalNanoseconds&&t.hasOwnProperty("FractionalNanoseconds")&&(r.FractionalNanoseconds=t.FractionalNanoseconds),r},t.prototype.toJSON=function(){return this.constructor.toObject(this,ql.util.toJSONOptions)},t})(),Jl.Metadata=(()=>{function t(t){if(t)for(var e=Object.keys(t),r=0;r<e.length;++r)null!=t[e[r]]&&(this[e[r]]=t[e[r]])}return t.prototype.MimeType="",t.encode=function(t,e){return e||(e=Kl.create()),null!=t.MimeType&&Object.hasOwnProperty.call(t,"MimeType")&&e.uint32(10).string(t.MimeType),e},t.decode=function(t,e){t instanceof Wl||(t=Wl.create(t));for(var r=void 0===e?t.len:t.pos+e,n=new Jl.Metadata;t.pos<r;){var o=t.uint32();if(o>>>3==1)n.MimeType=t.string();else t.skipType(7&o)}return n},t.fromObject=function(t){if(t instanceof Jl.Metadata)return t;var e=new Jl.Metadata;return null!=t.MimeType&&(e.MimeType=String(t.MimeType)),e},t.toObject=function(t,e){e||(e={});var r={};return e.defaults&&(r.MimeType=""),null!=t.MimeType&&t.hasOwnProperty("MimeType")&&(r.MimeType=t.MimeType),r},t.prototype.toJSON=function(){return this.constructor.toObject(this,ql.util.toJSONOptions)},t})(),Xl),Yl=["raw","directory","file","metadata","symlink","hamt-sharded-directory"],Ql=["directory","hamt-sharded-directory"],tc=parseInt("0644",8),ec=parseInt("0755",8);function rc(t){if(null!=t)return"number"==typeof t?4095&t:"0"===(t=t.toString()).substring(0,1)?4095&parseInt(t,8):4095&parseInt(t,10)}function nc(t){if(null==t)return;let e;if(null!=t.secs&&(e={secs:t.secs,nsecs:t.nsecs}),null!=t.Seconds&&(e={secs:t.Seconds,nsecs:t.FractionalNanoseconds}),Array.isArray(t)&&(e={secs:t[0],nsecs:t[1]}),t instanceof Date){const r=t.getTime(),n=Math.floor(r/1e3);e={secs:n,nsecs:1e3*(r-1e3*n)}}if(Object.prototype.hasOwnProperty.call(e,"secs")){if(null!=e&&null!=e.nsecs&&(e.nsecs<0||e.nsecs>999999999))throw Vl(new Error("mtime-nsecs must be within the range [0,999999999]"),"ERR_INVALID_MTIME_NSECS");return e}}class oc{static unmarshal(t){const e=Zl.decode(t),r=Zl.toObject(e,{defaults:!1,arrays:!0,longs:Number,objects:!1}),n=new oc({type:Yl[r.Type],data:r.Data,blockSizes:r.blocksizes,mode:r.mode,mtime:r.mtime?{secs:r.mtime.Seconds,nsecs:r.mtime.FractionalNanoseconds}:void 0});return n._originalMode=r.mode||0,n}constructor(t={type:"file"}){const{type:e,data:r,blockSizes:n,hashType:o,fanout:i,mtime:s,mode:a}=t;if(e&&!Yl.includes(e))throw Vl(new Error("Type: "+e+" is not valid"),"ERR_INVALID_TYPE");this.type=e||"file",this.data=r,this.hashType=o,this.fanout=i,this.blockSizes=n||[],this._originalMode=0,this.mode=rc(a),s&&(this.mtime=nc(s),this.mtime&&!this.mtime.nsecs&&(this.mtime.nsecs=0))}set mode(t){this._mode=this.isDirectory()?ec:tc;const e=rc(t);void 0!==e&&(this._mode=e)}get mode(){return this._mode}isDirectory(){return Boolean(this.type&&Ql.includes(this.type))}addBlockSize(t){this.blockSizes.push(t)}removeBlockSize(t){this.blockSizes.splice(t,1)}fileSize(){if(this.isDirectory())return 0;let t=0;return this.blockSizes.forEach((e=>{t+=e})),this.data&&(t+=this.data.length),t}marshal(){let t;switch(this.type){case"raw":t=Zl.DataType.Raw;break;case"directory":t=Zl.DataType.Directory;break;case"file":t=Zl.DataType.File;break;case"metadata":t=Zl.DataType.Metadata;break;case"symlink":t=Zl.DataType.Symlink;break;case"hamt-sharded-directory":t=Zl.DataType.HAMTShard;break;default:throw Vl(new Error("Type: "+t+" is not valid"),"ERR_INVALID_TYPE")}let e,r,n=this.data;if(this.data&&this.data.length||(n=void 0),null!=this.mode&&(e=4294963200&this._originalMode|(rc(this.mode)||0),e!==tc||this.isDirectory()||(e=void 0),e===ec&&this.isDirectory()&&(e=void 0)),null!=this.mtime){const t=nc(this.mtime);t&&(r={Seconds:t.secs,FractionalNanoseconds:t.nsecs},0===r.FractionalNanoseconds&&delete r.FractionalNanoseconds)}const o={Type:t,Data:n,filesize:this.isDirectory()?void 0:this.fileSize(),blocksizes:this.blockSizes,hashType:this.hashType,fanout:this.fanout,mode:e,mtime:r};return Zl.encode(o).finish()}}var ic=__webpack_require__(1362);const sc=new TextDecoder;function ac(t,e){let r=0;for(let n=0;;n+=7){if(n>=64)throw new Error("protobuf: varint overflow");if(e>=t.length)throw new Error("protobuf: unexpected end of data");const o=t[e++];if(r+=n<28?(127&o)<<n:(127&o)*2**n,o<128)break}return[r,e]}function lc(t,e){let r;[r,e]=ac(t,e);const n=e+r;if(r<0||n<0)throw new Error("protobuf: invalid length");if(n>t.length)throw new Error("protobuf: unexpected end of data");return[t.subarray(e,n),n]}function cc(t,e){let r;return[r,e]=ac(t,e),[7&r,r>>3,e]}function hc(t){const e={},r=t.length;let n=0;for(;n<r;){let r,o;if([r,o,n]=cc(t,n),1===o){if(e.Hash)throw new Error("protobuf: (PBLink) duplicate Hash section");if(2!==r)throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Hash`);if(void 0!==e.Name)throw new Error("protobuf: (PBLink) invalid order, found Name before Hash");if(void 0!==e.Tsize)throw new Error("protobuf: (PBLink) invalid order, found Tsize before Hash");[e.Hash,n]=lc(t,n)}else if(2===o){if(void 0!==e.Name)throw new Error("protobuf: (PBLink) duplicate Name section");if(2!==r)throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Name`);if(void 0!==e.Tsize)throw new Error("protobuf: (PBLink) invalid order, found Tsize before Name");let o;[o,n]=lc(t,n),e.Name=sc.decode(o)}else{if(3!==o)throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${o}`);if(void 0!==e.Tsize)throw new Error("protobuf: (PBLink) duplicate Tsize section");if(0!==r)throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Tsize`);[e.Tsize,n]=ac(t,n)}}if(n>r)throw new Error("protobuf: (PBLink) unexpected end of data");return e}const uc=new TextEncoder,dc=2**32;function pc(t,e){let r=e.length;if("number"==typeof t.Tsize){if(t.Tsize<0)throw new Error("Tsize cannot be negative");if(!Number.isSafeInteger(t.Tsize))throw new Error("Tsize too large for encoding");r=gc(e,r,t.Tsize)-1,e[r]=24}if("string"==typeof t.Name){const n=uc.encode(t.Name);r-=n.length,e.set(n,r),r=gc(e,r,n.length)-1,e[r]=18}return t.Hash&&(r-=t.Hash.length,e.set(t.Hash,r),r=gc(e,r,t.Hash.length)-1,e[r]=10),e.length-r}function fc(t){const e=function(t){let e=0;if(t.Data){const r=t.Data.length;e+=1+r+yc(r)}if(t.Links)for(const r of t.Links){const t=bc(r);e+=1+t+yc(t)}return e}(t),r=new Uint8Array(e);let n=e;if(t.Data&&(n-=t.Data.length,r.set(t.Data,n),n=gc(r,n,t.Data.length)-1,r[n]=10),t.Links)for(let e=t.Links.length-1;e>=0;e--){const o=pc(t.Links[e],r.subarray(0,n));n-=o,n=gc(r,n,o)-1,r[n]=18}return r}function bc(t){let e=0;if(t.Hash){const r=t.Hash.length;e+=1+r+yc(r)}if("string"==typeof t.Name){const r=uc.encode(t.Name).length;e+=1+r+yc(r)}return"number"==typeof t.Tsize&&(e+=1+yc(t.Tsize)),e}function gc(t,e,r){const n=e-=yc(r);for(;r>=2147483648;)t[e++]=127&r|128,r/=128;for(;r>=128;)t[e++]=127&r|128,r>>>=7;return t[e]=r,n}function yc(t){return t%2==0&&t++,Math.floor((function(t){let e=0;t>=dc&&(t=Math.floor(t/dc),e=32);t>=65536&&(t>>>=16,e+=16);t>=256&&(t>>>=8,e+=8);return e+mc[t]}(t)+6)/7)}const mc=[0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],wc=["Data","Links"],vc=["Hash","Name","Tsize"],_c=new TextEncoder;function xc(t,e){if(t===e)return 0;const r=t.Name?_c.encode(t.Name):[],n=e.Name?_c.encode(e.Name):[];let o=r.length,i=n.length;for(let t=0,e=Math.min(o,i);t<e;++t)if(r[t]!==n[t]){o=r[t],i=n[t];break}return o<i?-1:i<o?1:0}function kc(t,e){return!Object.keys(t).some((t=>!e.includes(t)))}function Ac(t){if("object"==typeof t.asCID){const e=ic.k.asCID(t);if(!e)throw new TypeError("Invalid DAG-PB form");return{Hash:e}}if("object"!=typeof t||Array.isArray(t))throw new TypeError("Invalid DAG-PB form");const e={};if(t.Hash){let r=ic.k.asCID(t.Hash);try{r||("string"==typeof t.Hash?r=ic.k.parse(t.Hash):t.Hash instanceof Uint8Array&&(r=ic.k.decode(t.Hash)))}catch(t){throw new TypeError(`Invalid DAG-PB form: ${t.message}`)}r&&(e.Hash=r)}if(!e.Hash)throw new TypeError("Invalid DAG-PB form");return"string"==typeof t.Name&&(e.Name=t.Name),"number"==typeof t.Tsize&&(e.Tsize=t.Tsize),e}function Ec(t){if((t instanceof Uint8Array||"string"==typeof t)&&(t={Data:t}),"object"!=typeof t||Array.isArray(t))throw new TypeError("Invalid DAG-PB form");const e={};if(void 0!==t.Data)if("string"==typeof t.Data)e.Data=_c.encode(t.Data);else{if(!(t.Data instanceof Uint8Array))throw new TypeError("Invalid DAG-PB form");e.Data=t.Data}if(void 0!==t.Links){if(!Array.isArray(t.Links))throw new TypeError("Invalid DAG-PB form");e.Links=t.Links.map(Ac),e.Links.sort(xc)}else e.Links=[];return e}function Cc(t){if(!t||"object"!=typeof t||Array.isArray(t))throw new TypeError("Invalid DAG-PB form");if(!kc(t,wc))throw new TypeError("Invalid DAG-PB form (extraneous properties)");if(void 0!==t.Data&&!(t.Data instanceof Uint8Array))throw new TypeError("Invalid DAG-PB form (Data must be a Uint8Array)");if(!Array.isArray(t.Links))throw new TypeError("Invalid DAG-PB form (Links must be an array)");for(let e=0;e<t.Links.length;e++){const r=t.Links[e];if(!r||"object"!=typeof r||Array.isArray(r))throw new TypeError("Invalid DAG-PB form (bad link object)");if(!kc(r,vc))throw new TypeError("Invalid DAG-PB form (extraneous properties on link object)");if(!r.Hash)throw new TypeError("Invalid DAG-PB form (link must have a Hash)");if(r.Hash.asCID!==r.Hash)throw new TypeError("Invalid DAG-PB form (link Hash must be a CID)");if(void 0!==r.Name&&"string"!=typeof r.Name)throw new TypeError("Invalid DAG-PB form (link Name must be a string)");if(void 0!==r.Tsize&&("number"!=typeof r.Tsize||r.Tsize%1!=0))throw new TypeError("Invalid DAG-PB form (link Tsize must be an integer)");if(e>0&&-1===xc(r,t.Links[e-1]))throw new TypeError("Invalid DAG-PB form (links must be sorted by Name bytes)")}}function Sc(t,e=[]){return Ec({Data:t,Links:e})}function $c(t,e,r){return Ac({Hash:r,Name:t,Tsize:e})}const Tc="dag-pb",Ic=112;function Bc(t){Cc(t);const e={};return t.Links&&(e.Links=t.Links.map((t=>{const e={};return t.Hash&&(e.Hash=t.Hash.bytes),void 0!==t.Name&&(e.Name=t.Name),void 0!==t.Tsize&&(e.Tsize=t.Tsize),e}))),t.Data&&(e.Data=t.Data),fc(e)}function zc(t){const e=function(t){const e=t.length;let r,n,o=0,i=!1;for(;o<e;){let e,s;if([e,s,o]=cc(t,o),2!==e)throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${e}`);if(1===s){if(n)throw new Error("protobuf: (PBNode) duplicate Data section");[n,o]=lc(t,o),r&&(i=!0)}else{if(2!==s)throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${s}`);{if(i)throw new Error("protobuf: (PBNode) duplicate Links section");let e;r||(r=[]),[e,o]=lc(t,o),r.push(hc(e))}}}if(o>e)throw new Error("protobuf: (PBNode) unexpected end of data");const s={};return n&&(s.Data=n),s.Links=r||[],s}(t),r={};return e.Data&&(r.Data=e.Data),e.Links&&(r.Links=e.Links.map((t=>{const e={};try{e.Hash=ic.k.decode(t.Hash)}catch(t){}if(!e.Hash)throw new Error("Invalid Hash field found in link, expected CID");return void 0!==t.Name&&(e.Name=t.Name),void 0!==t.Tsize&&(e.Tsize=t.Tsize),e}))),r}const Uc=async(e,r,n)=>{n.codec||(n.codec=t),n.hasher||(n.hasher=Rl.sha256),void 0===n.cidVersion&&(n.cidVersion=1),n.codec===t&&n.hasher!==Rl.sha256&&(n.cidVersion=1);const o=await n.hasher.digest(e),i=ic.k.create(n.cidVersion,n.codec.code,o);return n.onlyHash||await r.put(i,e,{signal:n.signal}),i},Oc=async(t,e,r)=>{const n=new oc({type:"directory",mtime:t.mtime,mode:t.mode}),o=Bc(Ec({Data:n.marshal()}));return{cid:await Uc(o,e,r),path:t.path,unixfs:n,size:o.length}};var Dc=__webpack_require__(6945),Lc=__webpack_require__(1303);const Nc=async function(t,e){return e(await Lc(t))};var Rc=__webpack_require__(8165);async function Pc(t,e,r){const n=[];for await(const o of Rc(t,r.maxChildrenPerNode))n.push(await e(o));return n.length>1?Pc(n,e,r):n[0]}const Mc=function(t,e,r){return Pc(t,e,r)};const jc=async function(t,e,r){const n=new Hc(r.layerRepeat);let o=0,i=1,s=n;for await(const a of Rc(t,r.maxChildrenPerNode))s.isFull()&&(s!==n&&n.addChild(await s.reduce(e)),o&&o%r.layerRepeat==0&&i++,s=new Fc(i,r.layerRepeat,o),o++),s.append(a);return s&&s!==n&&n.addChild(await s.reduce(e)),n.reduce(e)};class Fc{constructor(t,e,r=0){this.maxDepth=t,this.layerRepeat=e,this.currentDepth=1,this.iteration=r,this.root=this.node=this.parent={children:[],depth:this.currentDepth,maxDepth:t,maxChildren:(this.maxDepth-this.currentDepth)*this.layerRepeat}}isFull(){if(!this.root.data)return!1;if(this.currentDepth<this.maxDepth&&this.node.maxChildren)return this._addNextNodeToParent(this.node),!1;const t=this._findParent(this.node,this.currentDepth);return!t||(this._addNextNodeToParent(t),!1)}_addNextNodeToParent(t){this.parent=t;const e={children:[],depth:t.depth+1,parent:t,maxDepth:this.maxDepth,maxChildren:Math.floor(t.children.length/this.layerRepeat)*this.layerRepeat};t.children.push(e),this.currentDepth=e.depth,this.node=e}append(t){this.node.data=t}reduce(t){return this._reduce(this.root,t)}async _reduce(t,e){let r=[];return t.children.length&&(r=await Promise.all(t.children.filter((t=>t.data)).map((t=>this._reduce(t,e))))),e((t.data||[]).concat(r))}_findParent(t,e){const r=t.parent;if(r&&0!==r.depth)return r.children.length!==r.maxChildren&&r.maxChildren?r:this._findParent(r,e)}}class Hc extends Fc{constructor(t){super(0,t),this.root.depth=0,this.currentDepth=1}addChild(t){this.root.children.push(t)}reduce(t){return t((this.root.data||[]).concat(this.root.children))}}const Vc=async function*(e,r,n){for await(let o of e.content)yield async()=>{let i;n.progress(o.length,e.path);const s={codec:t,cidVersion:n.cidVersion,hasher:n.hasher,onlyHash:n.onlyHash};return n.rawLeaves?(s.codec=Dc,s.cidVersion=1):(i=new oc({type:n.leafType,data:o,mtime:e.mtime,mode:e.mode}),o=Bc({Data:i.marshal(),Links:[]})),{cid:await Uc(o,r,s),unixfs:i,size:o.length}}},qc={flat:Nc,balanced:Mc,trickle:jc};const Wc=function(e,r,n){const o=qc[n.strategy];if(!o)throw Vl(new Error(`Unknown importer build strategy name: ${n.strategy}`),"ERR_BAD_STRATEGY");return o(async function*(t,e,r){let n,o,i=-1;o="function"==typeof r.bufferImporter?r.bufferImporter:Vc;for await(const s of Ll(o(t,e,r),r.blockWriteConcurrency))i++,0!==i?(1===i&&n&&(yield n,n=null),yield s):n=s;n&&(n.single=!0,yield n)}(e,r,n),((e,r,n)=>async function(o){if(1===o.length&&o[0].single&&n.reduceSingleLeafToSelf){const i=o[0];if(i.cid.code===Dc.code&&(void 0!==e.mtime||void 0!==e.mode)){let o=await r.get(i.cid);i.unixfs=new oc({type:"file",mtime:e.mtime,mode:e.mode,data:o}),o=Bc(Ec({Data:i.unixfs.marshal()})),i.cid=await Uc(o,r,{...n,codec:t,hasher:n.hasher,cidVersion:n.cidVersion}),i.size=o.length}return{cid:i.cid,path:e.path,unixfs:i.unixfs,size:i.size}}const i=new oc({type:"file",mtime:e.mtime,mode:e.mode}),s=o.filter((t=>!(t.cid.code!==Dc.code||!t.size)||!(!t.unixfs||t.unixfs.data||!t.unixfs.fileSize())||Boolean(t.unixfs&&t.unixfs.data&&t.unixfs.data.length))).map((t=>t.cid.code===Dc.code?(i.addBlockSize(t.size),{Name:"",Tsize:t.size,Hash:t.cid}):(t.unixfs&&t.unixfs.data?i.addBlockSize(t.unixfs.data.length):i.addBlockSize(t.unixfs&&t.unixfs.fileSize()||0),{Name:"",Tsize:t.size,Hash:t.cid}))),a={Data:i.marshal(),Links:s},l=Bc(Ec(a));return{cid:await Uc(l,r,n),path:e.path,unixfs:i,size:l.length+a.Links.reduce(((t,e)=>t+e.Tsize),0)}})(e,r,n),n)};var Kc=__webpack_require__(9668),Gc=__webpack_require__(3060);const Jc=async function*(t,e){let r,n,o;if(e.minChunkSize&&e.maxChunkSize&&e.avgChunkSize)o=e.avgChunkSize,r=e.minChunkSize,n=e.maxChunkSize;else{if(!e.avgChunkSize)throw Vl(new Error("please specify an average chunk size"),"ERR_INVALID_AVG_CHUNK_SIZE");o=e.avgChunkSize,r=o/3,n=o+o/2}if(r<16)throw Vl(new Error("rabin min must be greater than 16"),"ERR_INVALID_MIN_CHUNK_SIZE");n<r&&(n=r),o<r&&(o=r);const i=Math.floor(Math.log2(o));for await(const o of async function*(t,e){const r=await(0,Gc.create)(e.bits,e.min,e.max,e.window),n=new Kc;for await(const e of t){n.append(e);const t=r.fingerprint(e);for(let e=0;e<t.length;e++){const r=t[e],o=n.slice(0,r);n.consume(r),yield o}}n.length&&(yield n.slice(0))}(t,{min:r,max:n,bits:i,window:e.window,polynomial:e.polynomial}))yield o};const Xc=async function*(t,e){let r=new Kc,n=0,o=!1;const i=e.maxChunkSize;for await(const e of t)for(r.append(e),n+=e.length;n>=i;)if(yield r.slice(0,i),o=!0,i===r.length)r=new Kc,n=0;else{const t=new Kc;t.append(r.shallowSlice(i)),r=t,n-=i}o&&!n||(yield r.slice(0,n))};var Zc=__webpack_require__(132);const Yc=async function*(t){for await(const e of t){if(void 0===e.length)throw Vl(new Error("Content was invalid"),"ERR_INVALID_CONTENT");if("string"==typeof e||e instanceof String)yield(0,Zc.fromString)(e.toString());else if(Array.isArray(e))yield Uint8Array.from(e);else{if(!(e instanceof Uint8Array))throw Vl(new Error("Content was invalid"),"ERR_INVALID_CONTENT");yield e}}};function Qc(t){try{if(t instanceof Uint8Array)return async function*(){yield t}();if(e=t,Symbol.iterator in e)return async function*(){yield*t}();if(function(t){return Symbol.asyncIterator in t}(t))return t}catch{throw Vl(new Error("Content was invalid"),"ERR_INVALID_CONTENT")}var e;throw Vl(new Error("Content was invalid"),"ERR_INVALID_CONTENT")}const th=async function*(t,e,r){for await(const n of t)if(n.path&&("./"===n.path.substring(0,2)&&(r.wrapWithDirectory=!0),n.path=n.path.split("/").filter((t=>t&&"."!==t)).join("/")),n.content){let t,o;t="function"==typeof r.chunker?r.chunker:"rabin"===r.chunker?Jc:Xc,o="function"==typeof r.chunkValidator?r.chunkValidator:Yc;const i={path:n.path,mtime:n.mtime,mode:n.mode,content:t(o(Qc(n.content),r),r)};yield()=>Wc(i,e,r)}else{if(!n.path)throw new Error("Import candidate must have content or path or both");{const t={path:n.path,mtime:n.mtime,mode:n.mode};yield()=>Oc(t,e,r)}}};const eh=class{constructor(t,e){this.options=e||{},this.root=t.root,this.dir=t.dir,this.path=t.path,this.dirty=t.dirty,this.flat=t.flat,this.parent=t.parent,this.parentKey=t.parentKey,this.unixfs=t.unixfs,this.mode=t.mode,this.mtime=t.mtime,this.cid=void 0,this.size=void 0}async put(t,e){}get(t){return Promise.resolve(this)}async*eachChildSeries(){}async*flush(t){}};const rh=class extends eh{constructor(t,e){super(t,e),this._children={}}async put(t,e){this.cid=void 0,this.size=void 0,this._children[t]=e}get(t){return Promise.resolve(this._children[t])}childCount(){return Object.keys(this._children).length}directChildrenCount(){return this.childCount()}onlyChild(){return this._children[Object.keys(this._children)[0]]}async*eachChildSeries(){const t=Object.keys(this._children);for(let e=0;e<t.length;e++){const r=t[e];yield{key:r,child:this._children[r]}}}async*flush(t){const e=Object.keys(this._children),r=[];for(let n=0;n<e.length;n++){let o=this._children[e[n]];if(o instanceof eh)for await(const e of o.flush(t))o=e,yield o;null!=o.size&&o.cid&&r.push({Name:e[n],Tsize:o.size,Hash:o.cid})}const n=new oc({type:"directory",mtime:this.mtime,mode:this.mode}),o={Data:n.marshal(),Links:r},i=Bc(Ec(o)),s=await Uc(i,t,this.options),a=i.length+o.Links.reduce(((t,e)=>t+(null==e.Tsize?0:e.Tsize)),0);this.cid=s,this.size=a,yield{cid:s,unixfs:n,path:this.path,size:a}}};var nh=__webpack_require__(4563);const oh=class extends eh{constructor(t,e){super(t,e),this._bucket=(0,nh.createHAMT)({hashFn:e.hamtHashFn,bits:e.hamtBucketBits})}async put(t,e){await this._bucket.put(t,e)}get(t){return this._bucket.get(t)}childCount(){return this._bucket.leafCount()}directChildrenCount(){return this._bucket.childrenCount()}onlyChild(){return this._bucket.onlyChild()}async*eachChildSeries(){for await(const{key:t,value:e}of this._bucket.eachLeafSeries())yield{key:t,child:e}}async*flush(t){for await(const e of ih(this._bucket,t,this,this.options))yield{...e,path:this.path}}};async function*ih(t,e,r,n){const o=t._children,i=[];let s=0;for(let t=0;t<o.length;t++){const r=o.get(t);if(!r)continue;const a=t.toString(16).toUpperCase().padStart(2,"0");if(r instanceof nh.Bucket){let t;for await(const o of await ih(r,e,null,n))t=o;if(!t)throw new Error("Could not flush sharded directory, no subshard found");i.push({Name:a,Tsize:t.size,Hash:t.cid}),s+=t.size}else if("function"==typeof r.value.flush){const t=r.value;let n;for await(const r of t.flush(e))n=r,yield n;const o=a+r.key;i.push({Name:o,Tsize:n.size,Hash:n.cid}),s+=n.size}else{const t=r.value;if(!t.cid)continue;const e=a+r.key,n=t.size;i.push({Name:e,Tsize:n,Hash:t.cid}),s+=n}}const a=Uint8Array.from(o.bitField().reverse()),l=new oc({type:"hamt-sharded-directory",data:a,fanout:t.tableSize(),hashType:n.hamtHashCode,mtime:r&&r.mtime,mode:r&&r.mode}),c=Bc(Ec({Data:l.marshal(),Links:i})),h=await Uc(c,e,n),u=c.length+s;yield{cid:h,unixfs:l,size:u}}const sh=async function t(e,r,n,o){let i=r;r instanceof rh&&r.directChildrenCount()>=n&&(i=await async function(t,e){const r=new oh({root:t.root,dir:!0,parent:t.parent,parentKey:t.parentKey,path:t.path,dirty:t.dirty,flat:!1,mtime:t.mtime,mode:t.mode},e);for await(const{key:e,child:n}of t.eachChildSeries())await r.put(e,n);return r}(r,o));const s=i.parent;if(s){if(i!==r){if(e&&(e.parent=i),!i.parentKey)throw new Error("No parent key found");await s.put(i.parentKey,i)}return t(i,s,n,o)}return i},ah=(t="")=>(t.trim().match(/([^\\^/]|\\\/)+/g)||[]).filter(Boolean);async function lh(t,e,r){const n=ah(t.path||""),o=n.length-1;let i=e,s="";for(let a=0;a<n.length;a++){const l=n[a];s+=`${s?"/":""}${l}`;const c=a===o;if(i.dirty=!0,i.cid=void 0,i.size=void 0,c)await i.put(l,t),e=await sh(null,i,r.shardSplitThreshold,r);else{let t=await i.get(l);t&&t instanceof eh||(t=new rh({root:!1,dir:!0,parent:i,parentKey:l,path:s,dirty:!0,flat:!0,mtime:t&&t.unixfs&&t.unixfs.mtime,mode:t&&t.unixfs&&t.unixfs.mode},r)),await i.put(l,t),i=t}}return e}async function*ch(t,e){t instanceof eh?yield*t.flush(e):t&&t.unixfs&&t.unixfs.isDirectory()&&(yield t)}const hh=async function*(t,e,r){let n=new rh({root:!0,dir:!0,path:"",dirty:!0,flat:!0},r);for await(const e of t)e&&(n=await lh(e,n,r),e.unixfs&&e.unixfs.isDirectory()||(yield e));if(r.wrapWithDirectory)yield*ch(n,e);else for await(const t of n.eachChildSeries())t&&(yield*ch(t.child,e))};async function*uh(t,e,r={}){const n=((t={})=>Nl.bind({ignoreUndefined:!0})(Hl,t))(r);let o,i,s;o="function"==typeof r.dagBuilder?r.dagBuilder:th,i="function"==typeof r.treeBuilder?r.treeBuilder:hh,s=Symbol.asyncIterator in t||Symbol.iterator in t?t:[t];for await(const t of i(Ll(o(s,e,n),n.fileImportConcurrency),e,n))yield{cid:t.cid,path:t.path,unixfs:t.unixfs,size:t.size}}var dh=__webpack_require__(6154),ph=__webpack_require__(3294),fh=__webpack_require__(8132),bh=__webpack_require__(2121);function gh(t){return ArrayBuffer.isView(t)||t instanceof ArrayBuffer}function yh(t){return t.constructor&&("Blob"===t.constructor.name||"File"===t.constructor.name)&&"function"==typeof t.stream}function mh(t){return"object"==typeof t&&(t.path||t.content)}const wh=t=>t&&"function"==typeof t.getReader;async function*vh(t){yield t}async function _h(t){if(gh(t))return vh(xh(t));if("string"==typeof t||t instanceof String)return vh(xh(t.toString()));if(yh(t))return ph(t);if(wh(t)&&(t=dh(t)),Symbol.iterator in t||Symbol.asyncIterator in t){const e=fh(t),{value:r,done:n}=await e.peek();if(n)return vh(new Uint8Array(0));if(e.push(r),Number.isInteger(r))return vh(Uint8Array.from(await Lc(e)));if(gh(r)||"string"==typeof r||r instanceof String)return bh(e,xh)}throw Vl(new Error(`Unexpected input: ${t}`),"ERR_UNEXPECTED_INPUT")}function xh(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t instanceof ArrayBuffer?new Uint8Array(t):Array.isArray(t)?Uint8Array.from(t):(0,Zc.fromString)(t.toString())}async function kh(t,e){const{path:r,mode:n,mtime:o,content:i}=t,s={path:r||"",mode:rc(n),mtime:nc(o)};return i?s.content=await e(i):r||(s.content=await e(t)),s}function Ah(t){return async function*(t,e){if(null==t)throw Vl(new Error(`Unexpected input: ${t}`),"ERR_UNEXPECTED_INPUT");if("string"==typeof t||t instanceof String)yield kh(t.toString(),e);else if(gh(t)||yh(t))yield kh(t,e);else{if(wh(t)&&(t=dh(t)),Symbol.iterator in t||Symbol.asyncIterator in t){const r=fh(t),{value:n,done:o}=await r.peek();if(o)return void(yield{content:[]});if(r.push(n),Number.isInteger(n)||gh(n)||"string"==typeof n||n instanceof String)return void(yield kh(r,e));throw Vl(new Error("Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead"),"ERR_UNEXPECTED_INPUT")}if(!mh(t))throw Vl(new Error('Unexpected input: cannot convert "'+typeof t+'" into ImportCandidate'),"ERR_UNEXPECTED_INPUT");yield kh(t,e)}}(t,_h)}async function Eh(t,e){const{path:r,mode:n,mtime:o,content:i}=t,s={path:r||"",mode:rc(n),mtime:nc(o)};return i?s.content=await e(i):r||(s.content=await e(t)),s}function Ch(t){return async function*(t,e){if("string"==typeof t||t instanceof String||gh(t)||yh(t)||t._readableState)throw Vl(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"),"ERR_UNEXPECTED_INPUT");if(wh(t)&&(t=dh(t)),Symbol.iterator in t||Symbol.asyncIterator in t){const r=fh(t),{value:n,done:o}=await r.peek();if(o)return void(yield*[]);if(r.push(n),Number.isInteger(n))throw Vl(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"),"ERR_UNEXPECTED_INPUT");if(n._readableState)return void(yield*bh(r,(t=>Eh({content:t},e))));if(gh(n))return void(yield Eh({content:r},e));if(mh(n)||n[Symbol.iterator]||n[Symbol.asyncIterator]||wh(n)||yh(n))return void(yield*bh(r,(t=>Eh(t,e))))}if(mh(t))throw Vl(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"),"ERR_UNEXPECTED_INPUT");throw Vl(new Error("Unexpected input: "+typeof t),"ERR_UNEXPECTED_INPUT")}(t,_h)}function Sh(t){return"string"==typeof t||t instanceof String||(e=t,ArrayBuffer.isView(e)||e instanceof ArrayBuffer)||function(t){return Boolean(t.constructor)&&("Blob"===t.constructor.name||"File"===t.constructor.name)&&"function"==typeof t.stream}(t)||"_readableState"in t;var e}var $h=function t(e,r,n){r=r||[];var o=n=n||0;for(;e>=Th;)r[n++]=255&e|128,e/=128;for(;-128&e;)r[n++]=255&e|128,e>>>=7;return r[n]=0|e,t.bytes=n-o+1,r},Th=Math.pow(2,31);var Ih=function t(e,r){var n,o=0,i=0,s=r=r||0,a=e.length;do{if(s>=a)throw t.bytes=0,new RangeError("Could not decode varint");n=e[s++],o+=i<28?(127&n)<<i:(127&n)*Math.pow(2,i),i+=7}while(n>=128);return t.bytes=s-r,o};var Bh=Math.pow(2,7),zh=Math.pow(2,14),Uh=Math.pow(2,21),Oh=Math.pow(2,28),Dh=Math.pow(2,35),Lh=Math.pow(2,42),Nh=Math.pow(2,49),Rh=Math.pow(2,56),Ph=Math.pow(2,63);const Mh={encode:$h,decode:Ih,encodingLength:function(t){return t<Bh?1:t<zh?2:t<Uh?3:t<Oh?4:t<Dh?5:t<Lh?6:t<Nh?7:t<Rh?8:t<Ph?9:10}},jh=t=>[Mh.decode(t),Mh.decode.bytes],Fh=(t,e,r=0)=>(Mh.encode(t,e,r),e),Hh=t=>Mh.encodingLength(t),Vh=(new Uint8Array(0),t=>{if(t instanceof Uint8Array&&"Uint8Array"===t.constructor.name)return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")}),qh=(t,e)=>{const r=e.byteLength,n=Hh(t),o=n+Hh(r),i=new Uint8Array(o+r);return Fh(t,i,0),Fh(r,i,n),i.set(e,o),new Wh(t,r,e,i)};class Wh{constructor(t,e,r,n){this.code=t,this.size=e,this.digest=r,this.bytes=n}}var Kh=function(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var o=0;o<t.length;o++){var i=t.charAt(o),s=i.charCodeAt(0);if(255!==r[s])throw new TypeError(i+" is ambiguous");r[s]=o}var a=t.length,l=t.charAt(0),c=Math.log(a)/Math.log(256),h=Math.log(256)/Math.log(a);function u(t){if("string"!=typeof t)throw new TypeError("Expected String");if(0===t.length)return new Uint8Array;var e=0;if(" "!==t[e]){for(var n=0,o=0;t[e]===l;)n++,e++;for(var i=(t.length-e)*c+1>>>0,s=new Uint8Array(i);t[e];){var h=r[t.charCodeAt(e)];if(255===h)return;for(var u=0,d=i-1;(0!==h||u<o)&&-1!==d;d--,u++)h+=a*s[d]>>>0,s[d]=h%256>>>0,h=h/256>>>0;if(0!==h)throw new Error("Non-zero carry");o=u,e++}if(" "!==t[e]){for(var p=i-o;p!==i&&0===s[p];)p++;for(var f=new Uint8Array(n+(i-p)),b=n;p!==i;)f[b++]=s[p++];return f}}}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===e.length)return"";for(var r=0,n=0,o=0,i=e.length;o!==i&&0===e[o];)o++,r++;for(var s=(i-o)*h+1>>>0,c=new Uint8Array(s);o!==i;){for(var u=e[o],d=0,p=s-1;(0!==u||d<n)&&-1!==p;p--,d++)u+=256*c[p]>>>0,c[p]=u%a>>>0,u=u/a>>>0;if(0!==u)throw new Error("Non-zero carry");n=d,o++}for(var f=s-n;f!==s&&0===c[f];)f++;for(var b=l.repeat(r);f<s;++f)b+=t.charAt(c[f]);return b},decodeUnsafe:u,decode:function(t){var r=u(t);if(r)return r;throw new Error(`Non-${e} character`)}}};const Gh=Kh;class Jh{constructor(t,e,r){this.name=t,this.prefix=e,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class Xh{constructor(t,e,r){this.name=t,this.prefix=e,this.baseDecode=r}decode(t){if("string"==typeof t){if(t[0]===this.prefix)return this.baseDecode(t.slice(1));throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`)}throw Error("Can only multibase decode strings")}or(t){return Yh(this,t)}}class Zh{constructor(t){this.decoders=t}or(t){return Yh(this,t)}decode(t){const e=t[0],r=this.decoders[e];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const Yh=(t,e)=>new Zh({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class Qh{constructor(t,e,r,n){this.name=t,this.prefix=e,this.baseEncode=r,this.baseDecode=n,this.encoder=new Jh(t,e,r),this.decoder=new Xh(t,e,n)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}const tu=({name:t,prefix:e,encode:r,decode:n})=>new Qh(t,e,r,n),eu=({prefix:t,name:e,alphabet:r})=>{const{encode:n,decode:o}=Gh(r,e);return tu({prefix:t,name:e,encode:n,decode:t=>Vh(o(t))})},ru=({name:t,prefix:e,bitsPerChar:r,alphabet:n})=>tu({prefix:e,name:t,encode:t=>((t,e,r)=>{const n="="===e[e.length-1],o=(1<<r)-1;let i="",s=0,a=0;for(let n=0;n<t.length;++n)for(a=a<<8|t[n],s+=8;s>r;)s-=r,i+=e[o&a>>s];if(s&&(i+=e[o&a<<r-s]),n)for(;i.length*r&7;)i+="=";return i})(t,n,r),decode:e=>((t,e,r,n)=>{const o={};for(let t=0;t<e.length;++t)o[e[t]]=t;let i=t.length;for(;"="===t[i-1];)--i;const s=new Uint8Array(i*r/8|0);let a=0,l=0,c=0;for(let e=0;e<i;++e){const i=o[t[e]];if(void 0===i)throw new SyntaxError(`Non-${n} character`);l=l<<r|i,a+=r,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=r||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s})(e,n,r,t)}),nu=eu({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),ou=(eu({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),ru({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}));ru({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),ru({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),ru({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),ru({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),ru({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),ru({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),ru({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),ru({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});class iu{constructor(t,e,r,n){this.code=e,this.version=t,this.multihash=r,this.bytes=n,this.byteOffset=n.byteOffset,this.byteLength=n.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:fu,byteLength:fu,code:pu,version:pu,multihash:pu,bytes:pu,_baseCache:fu,asCID:fu})}toV0(){if(0===this.version)return this;{const{code:t,multihash:e}=this;if(t!==cu)throw new Error("Cannot convert a non dag-pb CID to CIDv0");if(e.code!==hu)throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");return iu.createV0(e)}}toV1(){switch(this.version){case 0:{const{code:t,digest:e}=this.multihash,r=qh(t,e);return iu.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(t){return t&&this.code===t.code&&this.version===t.version&&((t,e)=>t===e||t.code===e.code&&t.size===e.size&&((t,e)=>{if(t===e)return!0;if(t.byteLength!==e.byteLength)return!1;for(let r=0;r<t.byteLength;r++)if(t[r]!==e[r])return!1;return!0})(t.bytes,e.bytes))(this.multihash,t.multihash)}toString(t){const{bytes:e,version:r,_baseCache:n}=this;return 0===r?au(e,n,t||nu.encoder):lu(e,n,t||ou.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(t){return bu(/^0\.0/,gu),!(!t||!t[du]&&t.asCID!==t)}get toBaseEncodedString(){throw new Error("Deprecated, use .toString()")}get codec(){throw new Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw new Error('"multibaseName" property is deprecated')}get prefix(){throw new Error('"prefix" property is deprecated')}static asCID(t){if(t instanceof iu)return t;if(null!=t&&t.asCID===t){const{version:e,code:r,multihash:n,bytes:o}=t;return new iu(e,r,n,o||uu(e,r,n.bytes))}if(null!=t&&!0===t[du]){const{version:e,multihash:r,code:n}=t,o=(t=>{const e=Vh(t),[r,n]=jh(e),[o,i]=jh(e.subarray(n)),s=e.subarray(n+i);if(s.byteLength!==o)throw new Error("Incorrect length");return new Wh(r,o,s,e)})(r);return iu.create(e,n,o)}return null}static create(t,e,r){if("number"!=typeof e)throw new Error("String codecs are no longer supported");switch(t){case 0:if(e!==cu)throw new Error(`Version 0 CID must use dag-pb (code: ${cu}) block encoding`);return new iu(t,e,r,r.bytes);case 1:{const n=uu(t,e,r.bytes);return new iu(t,e,r,n)}default:throw new Error("Invalid version")}}static createV0(t){return iu.create(0,cu,t)}static createV1(t,e){return iu.create(1,t,e)}static decode(t){const[e,r]=iu.decodeFirst(t);if(r.length)throw new Error("Incorrect length");return e}static decodeFirst(t){const e=iu.inspectBytes(t),r=e.size-e.multihashSize,n=Vh(t.subarray(r,r+e.multihashSize));if(n.byteLength!==e.multihashSize)throw new Error("Incorrect length");const o=n.subarray(e.multihashSize-e.digestSize),i=new Wh(e.multihashCode,e.digestSize,o,n);return[0===e.version?iu.createV0(i):iu.createV1(e.codec,i),t.subarray(e.size)]}static inspectBytes(t){let e=0;const r=()=>{const[r,n]=jh(t.subarray(e));return e+=n,r};let n=r(),o=cu;if(18===n?(n=0,e=0):1===n&&(o=r()),0!==n&&1!==n)throw new RangeError(`Invalid CID version ${n}`);const i=e,s=r(),a=r(),l=e+a;return{version:n,codec:o,multihashCode:s,digestSize:a,multihashSize:l-i,size:l}}static parse(t,e){const[r,n]=su(t,e),o=iu.decode(n);return o._baseCache.set(r,t),o}}const su=(t,e)=>{switch(t[0]){case"Q":{const r=e||nu;return[nu.prefix,r.decode(`${nu.prefix}${t}`)]}case nu.prefix:{const r=e||nu;return[nu.prefix,r.decode(t)]}case ou.prefix:{const r=e||ou;return[ou.prefix,r.decode(t)]}default:if(null==e)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[t[0],e.decode(t)]}},au=(t,e,r)=>{const{prefix:n}=r;if(n!==nu.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);const o=e.get(n);if(null==o){const o=r.encode(t).slice(1);return e.set(n,o),o}return o},lu=(t,e,r)=>{const{prefix:n}=r,o=e.get(n);if(null==o){const o=r.encode(t);return e.set(n,o),o}return o},cu=112,hu=18,uu=(t,e,r)=>{const n=Hh(t),o=n+Hh(e),i=new Uint8Array(o+r.byteLength);return Fh(t,i,0),Fh(e,i,n),i.set(r,o),i},du=Symbol.for("@ipld/js-cid/CID"),pu={writable:!1,configurable:!1,enumerable:!0},fu={writable:!1,enumerable:!1,configurable:!1},bu=(t,e)=>{if(!t.test("0.0.0-dev"))throw new Error(e);console.warn(e)},gu="CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n",yu=({name:t,code:e,encode:r})=>new mu(t,e,r);class mu{constructor(t,e,r){this.name=t,this.code=e,this.encode=r}digest(t){if(t instanceof Uint8Array){const e=this.encode(t);return e instanceof Uint8Array?qh(this.code,e):e.then((t=>qh(this.code,t)))}throw Error("Unknown type, must be binary type")}}function wu(t){return t=t||new Error("Not Found"),Vl(t,"ERR_NOT_FOUND")}function vu(t){return t=t||new Error("Aborted"),Vl(t,"ERR_ABORTED")}var _u=__webpack_require__(4593),xu=__webpack_require__(5565),ku=__webpack_require__(7939);const Au=(t,e)=>async function*(){const r=await Lc(t);yield*r.sort(e)}();class Eu{open(){return Promise.reject(new Error(".open is not implemented"))}close(){return Promise.reject(new Error(".close is not implemented"))}put(t,e,r){return Promise.reject(new Error(".put is not implemented"))}get(t,e){return Promise.reject(new Error(".get is not implemented"))}has(t,e){return Promise.reject(new Error(".has is not implemented"))}delete(t,e){return Promise.reject(new Error(".delete is not implemented"))}async*putMany(t,e={}){for await(const{key:r,value:n}of t)await this.put(r,n,e),yield{key:r,value:n}}async*getMany(t,e={}){for await(const r of t)yield this.get(r,e)}async*deleteMany(t,e={}){for await(const r of t)await this.delete(r,e),yield r}batch(){let t=[],e=[];return{put(e,r){t.push({key:e,value:r})},delete(t){e.push(t)},commit:async r=>{await _u(this.putMany(t,r)),t=[],await _u(this.deleteMany(e,r)),e=[]}}}async*_all(t,e){throw new Error("._all is not implemented")}async*_allKeys(t,e){throw new Error("._allKeys is not implemented")}query(t,e){let r=this._all(t,e);if(null!=t.prefix&&(r=xu(r,(e=>e.key.toString().startsWith(t.prefix||"")))),Array.isArray(t.filters)&&(r=t.filters.reduce(((t,e)=>xu(t,e)),r)),Array.isArray(t.orders)&&(r=t.orders.reduce(((t,e)=>Au(t,e)),r)),null!=t.offset){let e=0;r=xu(r,(()=>e++>=(t.offset||0)))}return null!=t.limit&&(r=ku(r,t.limit)),r}queryKeys(t,e){let r=this._allKeys(t,e);if(null!=t.prefix&&(r=xu(r,(e=>e.toString().startsWith(t.prefix||"")))),Array.isArray(t.filters)&&(r=t.filters.reduce(((t,e)=>xu(t,e)),r)),Array.isArray(t.orders)&&(r=t.orders.reduce(((t,e)=>Au(t,e)),r)),null!=t.offset){let e=0;r=xu(r,(()=>e++>=t.offset))}return null!=t.limit&&(r=ku(r,t.limit)),r}}var Cu=function(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var o=0;o<t.length;o++){var i=t.charAt(o),s=i.charCodeAt(0);if(255!==r[s])throw new TypeError(i+" is ambiguous");r[s]=o}var a=t.length,l=t.charAt(0),c=Math.log(a)/Math.log(256),h=Math.log(256)/Math.log(a);function u(t){if("string"!=typeof t)throw new TypeError("Expected String");if(0===t.length)return new Uint8Array;var e=0;if(" "!==t[e]){for(var n=0,o=0;t[e]===l;)n++,e++;for(var i=(t.length-e)*c+1>>>0,s=new Uint8Array(i);t[e];){var h=r[t.charCodeAt(e)];if(255===h)return;for(var u=0,d=i-1;(0!==h||u<o)&&-1!==d;d--,u++)h+=a*s[d]>>>0,s[d]=h%256>>>0,h=h/256>>>0;if(0!==h)throw new Error("Non-zero carry");o=u,e++}if(" "!==t[e]){for(var p=i-o;p!==i&&0===s[p];)p++;for(var f=new Uint8Array(n+(i-p)),b=n;p!==i;)f[b++]=s[p++];return f}}}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===e.length)return"";for(var r=0,n=0,o=0,i=e.length;o!==i&&0===e[o];)o++,r++;for(var s=(i-o)*h+1>>>0,c=new Uint8Array(s);o!==i;){for(var u=e[o],d=0,p=s-1;(0!==u||d<n)&&-1!==p;p--,d++)u+=256*c[p]>>>0,c[p]=u%a>>>0,u=u/a>>>0;if(0!==u)throw new Error("Non-zero carry");n=d,o++}for(var f=s-n;f!==s&&0===c[f];)f++;for(var b=l.repeat(r);f<s;++f)b+=t.charAt(c[f]);return b},decodeUnsafe:u,decode:function(t){var r=u(t);if(r)return r;throw new Error(`Non-${e} character`)}}};const Su=Cu;new Uint8Array(0);class $u{constructor(t,e,r){this.name=t,this.prefix=e,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class Tu{constructor(t,e,r){this.name=t,this.prefix=e,this.baseDecode=r}decode(t){if("string"==typeof t){if(t[0]===this.prefix)return this.baseDecode(t.slice(1));throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`)}throw Error("Can only multibase decode strings")}or(t){return Bu(this,t)}}class Iu{constructor(t){this.decoders=t}or(t){return Bu(this,t)}decode(t){const e=t[0],r=this.decoders[e];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const Bu=(t,e)=>new Iu({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class zu{constructor(t,e,r,n){this.name=t,this.prefix=e,this.baseEncode=r,this.baseDecode=n,this.encoder=new $u(t,e,r),this.decoder=new Tu(t,e,n)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}const Uu=({name:t,prefix:e,encode:r,decode:n})=>new zu(t,e,r,n),Ou=({prefix:t,name:e,alphabet:r})=>{const{encode:n,decode:o}=Su(r,e);return Uu({prefix:t,name:e,encode:n,decode:t=>(t=>{if(t instanceof Uint8Array&&"Uint8Array"===t.constructor.name)return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")})(o(t))})},Du=({name:t,prefix:e,bitsPerChar:r,alphabet:n})=>Uu({prefix:e,name:t,encode:t=>((t,e,r)=>{const n="="===e[e.length-1],o=(1<<r)-1;let i="",s=0,a=0;for(let n=0;n<t.length;++n)for(a=a<<8|t[n],s+=8;s>r;)s-=r,i+=e[o&a>>s];if(s&&(i+=e[o&a<<r-s]),n)for(;i.length*r&7;)i+="=";return i})(t,n,r),decode:e=>((t,e,r,n)=>{const o={};for(let t=0;t<e.length;++t)o[e[t]]=t;let i=t.length;for(;"="===t[i-1];)--i;const s=new Uint8Array(i*r/8|0);let a=0,l=0,c=0;for(let e=0;e<i;++e){const i=o[t[e]];if(void 0===i)throw new SyntaxError(`Non-${n} character`);l=l<<r|i,a+=r,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=r||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s})(e,n,r,t)});Du({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),Du({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),Du({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),Du({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),Du({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),Du({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),Du({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),Du({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),Du({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});Math.pow(2,31);Math.pow(2,7),Math.pow(2,14),Math.pow(2,21),Math.pow(2,28),Math.pow(2,35),Math.pow(2,42),Math.pow(2,49),Math.pow(2,56),Math.pow(2,63);Ou({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Ou({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});Symbol.toStringTag,Symbol.for("nodejs.util.inspect.custom");Symbol.for("@ipld/js-cid/CID");class Lu extends Eu{constructor(){super(),this.store=new Map}async*blocks(){for(const[t,e]of this.store.entries())yield{cid:iu.parse(t),bytes:e}}put(t,e){return this.store.set(t.toString(),e),Promise.resolve()}get(t){const e=this.store.get(t.toString());if(!e)throw new Error(`block with cid ${t.toString()} no found`);return Promise.resolve(e)}has(t){return Promise.resolve(this.store.has(t.toString()))}close(){return this.store.clear(),Promise.resolve()}}const Nu=t=>async e=>new Uint8Array(await crypto.subtle.digest(t,e)),Ru=yu({name:"sha2-256",code:18,encode:Nu("SHA-256")}),Pu=(yu({name:"sha2-512",code:19,encode:Nu("SHA-512")}),{cidVersion:1,chunker:"fixed",maxChunkSize:262144,hasher:Ru,rawLeaves:!0,wrapWithDirectory:!0,maxChildrenPerNode:174});async function Mu({input:t,blockstore:e,hasher:r,maxChunkSize:n,maxChildrenPerNode:o,wrapWithDirectory:i,rawLeaves:s}){if(!t||Array.isArray(t)&&!t.length)throw new Error("missing input file(s)");const a=e||new Lu,l=await hi(ui(function(t){return Sh(t)?Ah(t):Ch(t)}(t),(t=>uh(t,a,{...Pu,hasher:r||Pu.hasher,maxChunkSize:n||Pu.maxChunkSize,maxChildrenPerNode:o||Pu.maxChildrenPerNode,wrapWithDirectory:!1!==i&&Pu.wrapWithDirectory,rawLeaves:null==s?Pu.rawLeaves:s}))));if(!l||!l.cid)throw new Error("given input could not be parsed correctly");const c=l.cid,{writer:h,out:u}=await Ul.create([c]),d=u[Symbol.asyncIterator]();let p;return{root:c,out:{[Symbol.asyncIterator](){if(null!=p)throw new Error("Multiple iterator not supported");return p=(async()=>{for await(const t of a.blocks())await h.put(t);await h.close(),e||await a.close()})(),{async next(){const t=await d.next();return t.done&&await p,t}}}}}}function ju(t){return t&&t.rel}function Fu(t,e){return e.rel.split(/\s+/).forEach((function(r){t[r]=Object.assign({},e,{rel:r})})),t}function Hu(t,e){const r=e.match(/\s*(.+)\s*=\s*"?([^"]+)"?/);return r&&(t[r[1]]=r[2]),t}function Vu(t){try{const e=t.match(/<?([^>]*)>(.*)/),r=e[1],n=e[2].split(";"),o={},i=new URL(r,"https://example.com");for(const[t,e]of i.searchParams)o[t]=e;n.shift();let s=n.reduce(Hu,{});return s=Object.assign({},o,s),s.url=r,s}catch{return null}}function qu(t,e){return function(t,e){if(!t)return!1;const r=(e=e||{}).maxHeaderLength||2e3,n=e.throwOnMaxHeaderLengthExceeded||!1;if(t.length>r){if(n)throw new Error("Input string too long, it should be under "+r+" characters.");return!1}return!0}(t,e)?t.split(/,\s*</).map(Vu).filter(ju).reduce(Fu,{}):null}const Wu=["string","number","bigint","symbol"],Ku=["Function","Generator","AsyncGenerator","GeneratorFunction","AsyncGeneratorFunction","AsyncFunction","Observable","Array","Buffer","Object","RegExp","Date","Error","Map","Set","WeakMap","WeakSet","ArrayBuffer","SharedArrayBuffer","DataView","Promise","URL","HTMLElement","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array"];function Gu(t){if(null===t)return"null";if(void 0===t)return"undefined";if(!0===t||!1===t)return"boolean";const e=typeof t;if(Wu.includes(e))return e;if("function"===e)return"Function";if(Array.isArray(t))return"Array";if(function(t){return t&&t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer.call(null,t)}(t))return"Buffer";const r=function(t){const e=Object.prototype.toString.call(t).slice(8,-1);if(Ku.includes(e))return e;return}(t);return r||"Object"}class Ju{constructor(t,e,r){this.major=t,this.majorEncoded=t<<5,this.name=e,this.terminal=r}toString(){return`Type[${this.major}].${this.name}`}compare(t){return this.major<t.major?-1:this.major>t.major?1:0}}Ju.uint=new Ju(0,"uint",!0),Ju.negint=new Ju(1,"negint",!0),Ju.bytes=new Ju(2,"bytes",!0),Ju.string=new Ju(3,"string",!0),Ju.array=new Ju(4,"array",!1),Ju.map=new Ju(5,"map",!1),Ju.tag=new Ju(6,"tag",!1),Ju.float=new Ju(7,"float",!0),Ju.false=new Ju(7,"false",!0),Ju.true=new Ju(7,"true",!0),Ju.null=new Ju(7,"null",!0),Ju.undefined=new Ju(7,"undefined",!0),Ju.break=new Ju(7,"break",!0);class Xu{constructor(t,e,r){this.type=t,this.value=e,this.encodedLength=r,this.encodedBytes=void 0}toString(){return`Token[${this.type}].${this.value}`}}const Zu=globalThis.process&&!globalThis.process.browser&&globalThis.Buffer&&"function"==typeof globalThis.Buffer.isBuffer,Yu=new TextDecoder,Qu=new TextEncoder;function td(t){return Zu&&globalThis.Buffer.isBuffer(t)}function ed(t){return t instanceof Uint8Array?td(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t:Uint8Array.from(t)}const rd=Zu?(t,e,r)=>r-e>64?globalThis.Buffer.from(t.subarray(e,r)).toString("utf8"):cd(t,e,r):(t,e,r)=>r-e>64?Yu.decode(t.subarray(e,r)):cd(t,e,r),nd=Zu?t=>t.length>64?globalThis.Buffer.from(t):ld(t):t=>t.length>64?Qu.encode(t):ld(t),od=t=>Uint8Array.from(t),id=Zu?(t,e,r)=>td(t)?new Uint8Array(t.subarray(e,r)):t.slice(e,r):(t,e,r)=>t.slice(e,r),sd=Zu?(t,e)=>(t=t.map((t=>t instanceof Uint8Array?t:globalThis.Buffer.from(t))),ed(globalThis.Buffer.concat(t,e))):(t,e)=>{const r=new Uint8Array(e);let n=0;for(let e of t)n+e.length>r.length&&(e=e.subarray(0,r.length-n)),r.set(e,n),n+=e.length;return r},ad=Zu?t=>globalThis.Buffer.allocUnsafe(t):t=>new Uint8Array(t);function ld(t,e=1/0){let r;const n=t.length;let o=null;const i=[];for(let s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function cd(t,e,r){const n=[];for(;e<r;){const o=t[e];let i=null,s=o>239?4:o>223?3:o>191?2:1;if(e+s<=r){let r,n,a,l;switch(s){case 1:o<128&&(i=o);break;case 2:r=t[e+1],128==(192&r)&&(l=(31&o)<<6|63&r,l>127&&(i=l));break;case 3:r=t[e+1],n=t[e+2],128==(192&r)&&128==(192&n)&&(l=(15&o)<<12|(63&r)<<6|63&n,l>2047&&(l<55296||l>57343)&&(i=l));break;case 4:r=t[e+1],n=t[e+2],a=t[e+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(l=(15&o)<<18|(63&r)<<12|(63&n)<<6|63&a,l>65535&&l<1114112&&(i=l))}}null===i?(i=65533,s=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),e+=s}return function(t){const e=t.length;if(e<=hd)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=hd));return r}(n)}const hd=4096;class ud{constructor(t=256){this.chunkSize=t,this.cursor=0,this.maxCursor=-1,this.chunks=[],this._initReuseChunk=null}reset(){this.chunks=[],this.cursor=0,this.maxCursor=-1,null!==this._initReuseChunk&&(this.chunks.push(this._initReuseChunk),this.maxCursor=this._initReuseChunk.length-1)}push(t){let e=this.chunks[this.chunks.length-1];if(this.cursor+t.length<=this.maxCursor+1){const r=e.length-(this.maxCursor-this.cursor)-1;e.set(t,r)}else{if(e){const t=e.length-(this.maxCursor-this.cursor)-1;t<e.length&&(this.chunks[this.chunks.length-1]=e.subarray(0,t),this.maxCursor=this.cursor-1)}t.length<64&&t.length<this.chunkSize?(e=ad(this.chunkSize),this.chunks.push(e),this.maxCursor+=e.length,null===this._initReuseChunk&&(this._initReuseChunk=e),e.set(t,0)):(this.chunks.push(t),this.maxCursor+=t.length)}this.cursor+=t.length}toBytes(t=!1){let e;if(1===this.chunks.length){const r=this.chunks[0];t&&this.cursor>r.length/2?(e=this.cursor===r.length?r:r.subarray(0,this.cursor),this._initReuseChunk=null,this.chunks=[]):e=id(r,0,this.cursor)}else e=sd(this.chunks,this.cursor);return t&&this.reset(),e}}const dd=[];function pd(t,e,r){if(t.length-e<r)throw new Error("CBOR decode error: not enough data for type")}dd[23]=1,dd[24]=2,dd[25]=3,dd[26]=5,dd[27]=9;const fd=[24,256,65536,4294967296,BigInt("18446744073709551616")];function bd(t,e,r){pd(t,e,1);const n=t[e];if(!0===r.strict&&n<fd[0])throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");return n}function gd(t,e,r){pd(t,e,2);const n=t[e]<<8|t[e+1];if(!0===r.strict&&n<fd[1])throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");return n}function yd(t,e,r){pd(t,e,4);const n=16777216*t[e]+(t[e+1]<<16)+(t[e+2]<<8)+t[e+3];if(!0===r.strict&&n<fd[2])throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");return n}function md(t,e,r){pd(t,e,8);const n=16777216*t[e]+(t[e+1]<<16)+(t[e+2]<<8)+t[e+3],o=16777216*t[e+4]+(t[e+5]<<16)+(t[e+6]<<8)+t[e+7],i=(BigInt(n)<<BigInt(32))+BigInt(o);if(!0===r.strict&&i<fd[3])throw new Error("CBOR decode error: integer encoded in more bytes than necessary (strict decode)");if(i<=Number.MAX_SAFE_INTEGER)return Number(i);if(!0===r.allowBigInt)return i;throw new Error("CBOR decode error: integers outside of the safe integer range are not supported")}function wd(t,e){return vd(t,0,e.value)}function vd(t,e,r){if(r<fd[0]){const n=Number(r);t.push([e|n])}else if(r<fd[1]){const n=Number(r);t.push([24|e,n])}else if(r<fd[2]){const n=Number(r);t.push([25|e,n>>>8,255&n])}else if(r<fd[3]){const n=Number(r);t.push([26|e,n>>>24&255,n>>>16&255,n>>>8&255,255&n])}else{const n=BigInt(r);if(!(n<fd[4]))throw new Error("CBOR decode error: encountered BigInt larger than allowable range");{const r=[27|e,0,0,0,0,0,0,0];let o=Number(n&BigInt(4294967295)),i=Number(n>>BigInt(32)&BigInt(4294967295));r[8]=255&o,o>>=8,r[7]=255&o,o>>=8,r[6]=255&o,o>>=8,r[5]=255&o,r[4]=255&i,i>>=8,r[3]=255&i,i>>=8,r[2]=255&i,i>>=8,r[1]=255&i,t.push(r)}}}wd.encodedSize=function(t){return vd.encodedSize(t.value)},vd.encodedSize=function(t){return t<fd[0]?1:t<fd[1]?2:t<fd[2]?3:t<fd[3]?5:9},wd.compareTokens=function(t,e){return t.value<e.value?-1:t.value>e.value?1:0};const _d=BigInt(-1),xd=BigInt(1);function kd(t,e){const r=e.value,n="bigint"==typeof r?r*_d-xd:-1*r-1;vd(t,e.type.majorEncoded,n)}function Ad(t,e,r,n){pd(t,e,r+n);const o=id(t,e+r,e+r+n);return new Xu(Ju.bytes,o,r+n)}function Ed(t,e,r,n){return Ad(t,e,1,r)}function Cd(t){return void 0===t.encodedBytes&&(t.encodedBytes=t.type===Ju.string?nd(t.value):t.value),t.encodedBytes}function Sd(t,e){const r=Cd(e);vd(t,e.type.majorEncoded,r.length),t.push(r)}function $d(t,e,r,n){const o=r+n;return pd(t,e,o),new Xu(Ju.string,rd(t,e+r,e+o),o)}function Td(t,e,r,n){return $d(t,e,1,r)}kd.encodedSize=function(t){const e=t.value,r="bigint"==typeof e?e*_d-xd:-1*e-1;return r<fd[0]?1:r<fd[1]?2:r<fd[2]?3:r<fd[3]?5:9},kd.compareTokens=function(t,e){return t.value<e.value?1:t.value>e.value?-1:0},Sd.encodedSize=function(t){const e=Cd(t);return vd.encodedSize(e.length)+e.length},Sd.compareTokens=function(t,e){return r=Cd(t),n=Cd(e),r.length<n.length?-1:r.length>n.length?1:function(t,e){if(td(t)&&td(e))return t.compare(e);for(let r=0;r<t.length;r++)if(t[r]!==e[r])return t[r]<e[r]?-1:1;return 0}(r,n);var r,n};const Id=Sd;function Bd(t,e,r,n){return new Xu(Ju.array,n,r)}function zd(t,e,r,n){return Bd(0,0,1,r)}function Ud(t,e){vd(t,Ju.array.majorEncoded,e.value)}function Od(t,e,r,n){return new Xu(Ju.map,n,r)}function Dd(t,e,r,n){return Od(0,0,1,r)}function Ld(t,e){vd(t,Ju.map.majorEncoded,e.value)}function Nd(t,e,r,n){return new Xu(Ju.tag,r,1)}function Rd(t,e){vd(t,Ju.tag.majorEncoded,e.value)}Ud.compareTokens=wd.compareTokens,Ld.compareTokens=wd.compareTokens,Rd.compareTokens=wd.compareTokens;function Pd(t,e,r){if(r){if(!1===r.allowNaN&&Number.isNaN(t))throw new Error("CBOR decode error: NaN values are not supported");if(!1===r.allowInfinity&&(t===1/0||t===-1/0))throw new Error("CBOR decode error: Infinity values are not supported")}return new Xu(Ju.float,t,e)}function Md(t,e,r){const n=e.value;if(!1===n)t.push([20|Ju.float.majorEncoded]);else if(!0===n)t.push([21|Ju.float.majorEncoded]);else if(null===n)t.push([22|Ju.float.majorEncoded]);else if(void 0===n)t.push([23|Ju.float.majorEncoded]);else{let e,i=!1;r&&!0===r.float64||(Vd(n),e=qd(Hd,1),n===e||Number.isNaN(n)?(Hd[0]=249,t.push(Hd.slice(0,3)),i=!0):(Wd(n),e=Kd(Hd,1),n===e&&(Hd[0]=250,t.push(Hd.slice(0,5)),i=!0))),i||(o=n,Fd.setFloat64(0,o,!1),e=Gd(Hd,1),Hd[0]=251,t.push(Hd.slice(0,9)))}var o}Md.encodedSize=function(t,e){const r=t.value;if(!1===r||!0===r||null==r)return 1;let n;if(!e||!0!==e.float64){if(Vd(r),n=qd(Hd,1),r===n||Number.isNaN(r))return 3;if(Wd(r),n=Kd(Hd,1),r===n)return 5}return 9};const jd=new ArrayBuffer(9),Fd=new DataView(jd,1),Hd=new Uint8Array(jd,0);function Vd(t){if(t===1/0)Fd.setUint16(0,31744,!1);else if(t===-1/0)Fd.setUint16(0,64512,!1);else if(Number.isNaN(t))Fd.setUint16(0,32256,!1);else{Fd.setFloat32(0,t);const e=Fd.getUint32(0),r=(2139095040&e)>>23,n=8388607&e;if(255===r)Fd.setUint16(0,31744,!1);else if(0===r)Fd.setUint16(0,(2147483648&t)>>16|n>>13,!1);else{const t=r-127;t<-24?Fd.setUint16(0,0):t<-14?Fd.setUint16(0,(2147483648&e)>>16|1<<24+t,!1):Fd.setUint16(0,(2147483648&e)>>16|t+15<<10|n>>13,!1)}}}function qd(t,e){if(t.length-e<2)throw new Error("CBOR decode error: not enough data for float16");const r=(t[e]<<8)+t[e+1];if(31744===r)return 1/0;if(64512===r)return-1/0;if(32256===r)return NaN;const n=r>>10&31,o=1023&r;let i;return i=0===n?o*2**-24:31!==n?(o+1024)*2**(n-25):0===o?1/0:NaN,32768&r?-i:i}function Wd(t){Fd.setFloat32(0,t,!1)}function Kd(t,e){if(t.length-e<4)throw new Error("CBOR decode error: not enough data for float32");const r=(t.byteOffset||0)+e;return new DataView(t.buffer,r,4).getFloat32(0,!1)}function Gd(t,e){if(t.length-e<8)throw new Error("CBOR decode error: not enough data for float64");const r=(t.byteOffset||0)+e;return new DataView(t.buffer,r,8).getFloat64(0,!1)}function Jd(t,e,r){throw new Error(`CBOR decode error: encountered invalid minor (${r}) for major ${t[e]>>>5}`)}function Xd(t){return()=>{throw new Error(`CBOR decode error: ${t}`)}}Md.compareTokens=wd.compareTokens;const Zd=[];for(let t=0;t<=23;t++)Zd[t]=Jd;Zd[24]=function(t,e,r,n){return new Xu(Ju.uint,bd(t,e+1,n),2)},Zd[25]=function(t,e,r,n){return new Xu(Ju.uint,gd(t,e+1,n),3)},Zd[26]=function(t,e,r,n){return new Xu(Ju.uint,yd(t,e+1,n),5)},Zd[27]=function(t,e,r,n){return new Xu(Ju.uint,md(t,e+1,n),9)},Zd[28]=Jd,Zd[29]=Jd,Zd[30]=Jd,Zd[31]=Jd;for(let t=32;t<=55;t++)Zd[t]=Jd;Zd[56]=function(t,e,r,n){return new Xu(Ju.negint,-1-bd(t,e+1,n),2)},Zd[57]=function(t,e,r,n){return new Xu(Ju.negint,-1-gd(t,e+1,n),3)},Zd[58]=function(t,e,r,n){return new Xu(Ju.negint,-1-yd(t,e+1,n),5)},Zd[59]=function(t,e,r,n){const o=md(t,e+1,n);if("bigint"!=typeof o){const t=-1-o;if(t>=Number.MIN_SAFE_INTEGER)return new Xu(Ju.negint,t,9)}if(!0!==n.allowBigInt)throw new Error("CBOR decode error: integers outside of the safe integer range are not supported");return new Xu(Ju.negint,_d-BigInt(o),9)},Zd[60]=Jd,Zd[61]=Jd,Zd[62]=Jd,Zd[63]=Jd;for(let t=64;t<=87;t++)Zd[t]=Ed;Zd[88]=function(t,e,r,n){return Ad(t,e,2,bd(t,e+1,n))},Zd[89]=function(t,e,r,n){return Ad(t,e,3,gd(t,e+1,n))},Zd[90]=function(t,e,r,n){return Ad(t,e,5,yd(t,e+1,n))},Zd[91]=function(t,e,r,n){const o=md(t,e+1,n);if("bigint"==typeof o)throw new Error("CBOR decode error: 64-bit integer bytes lengths not supported");return Ad(t,e,9,o)},Zd[92]=Jd,Zd[93]=Jd,Zd[94]=Jd,Zd[95]=Xd("indefinite length bytes/strings are not supported");for(let t=96;t<=119;t++)Zd[t]=Td;Zd[120]=function(t,e,r,n){return $d(t,e,2,bd(t,e+1,n))},Zd[121]=function(t,e,r,n){return $d(t,e,3,gd(t,e+1,n))},Zd[122]=function(t,e,r,n){return $d(t,e,5,yd(t,e+1,n))},Zd[123]=function(t,e,r,n){const o=md(t,e+1,n);if("bigint"==typeof o)throw new Error("CBOR decode error: 64-bit integer string lengths not supported");return $d(t,e,9,o)},Zd[124]=Jd,Zd[125]=Jd,Zd[126]=Jd,Zd[127]=Xd("indefinite length bytes/strings are not supported");for(let t=128;t<=151;t++)Zd[t]=zd;Zd[152]=function(t,e,r,n){return Bd(0,0,2,bd(t,e+1,n))},Zd[153]=function(t,e,r,n){return Bd(0,0,3,gd(t,e+1,n))},Zd[154]=function(t,e,r,n){return Bd(0,0,5,yd(t,e+1,n))},Zd[155]=function(t,e,r,n){const o=md(t,e+1,n);if("bigint"==typeof o)throw new Error("CBOR decode error: 64-bit integer array lengths not supported");return Bd(0,0,9,o)},Zd[156]=Jd,Zd[157]=Jd,Zd[158]=Jd,Zd[159]=function(t,e,r,n){if(!1===n.allowIndefinite)throw new Error("CBOR decode error: indefinite length items not allowed");return Bd(0,0,1,1/0)};for(let t=160;t<=183;t++)Zd[t]=Dd;Zd[184]=function(t,e,r,n){return Od(0,0,2,bd(t,e+1,n))},Zd[185]=function(t,e,r,n){return Od(0,0,3,gd(t,e+1,n))},Zd[186]=function(t,e,r,n){return Od(0,0,5,yd(t,e+1,n))},Zd[187]=function(t,e,r,n){const o=md(t,e+1,n);if("bigint"==typeof o)throw new Error("CBOR decode error: 64-bit integer map lengths not supported");return Od(0,0,9,o)},Zd[188]=Jd,Zd[189]=Jd,Zd[190]=Jd,Zd[191]=function(t,e,r,n){if(!1===n.allowIndefinite)throw new Error("CBOR decode error: indefinite length items not allowed");return Od(0,0,1,1/0)};for(let t=192;t<=215;t++)Zd[t]=Nd;Zd[216]=function(t,e,r,n){return new Xu(Ju.tag,bd(t,e+1,n),2)},Zd[217]=function(t,e,r,n){return new Xu(Ju.tag,gd(t,e+1,n),3)},Zd[218]=function(t,e,r,n){return new Xu(Ju.tag,yd(t,e+1,n),5)},Zd[219]=function(t,e,r,n){return new Xu(Ju.tag,md(t,e+1,n),9)},Zd[220]=Jd,Zd[221]=Jd,Zd[222]=Jd,Zd[223]=Jd;for(let t=224;t<=243;t++)Zd[t]=Xd("simple values are not supported");Zd[244]=Jd,Zd[245]=Jd,Zd[246]=Jd,Zd[247]=function(t,e,r,n){if(!1===n.allowUndefined)throw new Error("CBOR decode error: undefined values are not supported");return new Xu(Ju.undefined,void 0,1)},Zd[248]=Xd("simple values are not supported"),Zd[249]=function(t,e,r,n){return Pd(qd(t,e+1),3,n)},Zd[250]=function(t,e,r,n){return Pd(Kd(t,e+1),5,n)},Zd[251]=function(t,e,r,n){return Pd(Gd(t,e+1),9,n)},Zd[252]=Jd,Zd[253]=Jd,Zd[254]=Jd,Zd[255]=function(t,e,r,n){if(!1===n.allowIndefinite)throw new Error("CBOR decode error: indefinite length items not allowed");return new Xu(Ju.break,void 0,1)};const Yd=[];for(let t=0;t<24;t++)Yd[t]=new Xu(Ju.uint,t,1);for(let t=-1;t>=-24;t--)Yd[31-t]=new Xu(Ju.negint,t,1);Yd[64]=new Xu(Ju.bytes,new Uint8Array(0),1),Yd[96]=new Xu(Ju.string,"",1),Yd[128]=new Xu(Ju.array,0,1),Yd[160]=new Xu(Ju.map,0,1),Yd[244]=new Xu(Ju.false,!1,1),Yd[245]=new Xu(Ju.true,!0,1),Yd[246]=new Xu(Ju.null,null,1);const Qd={float64:!1,mapSorter:function(t,e){const r=Array.isArray(t[0])?t[0][0]:t[0],n=Array.isArray(e[0])?e[0][0]:e[0];if(r.type!==n.type)return r.type.compare(n.type);const o=r.type.major,i=tp[o].compareTokens(r,n);0===i&&console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone");return i},quickEncodeToken:function(t){switch(t.type){case Ju.false:return od([244]);case Ju.true:return od([245]);case Ju.null:return od([246]);case Ju.bytes:return t.value.length?void 0:od([64]);case Ju.string:return""===t.value?od([96]):void 0;case Ju.array:return 0===t.value?od([128]):void 0;case Ju.map:return 0===t.value?od([160]):void 0;case Ju.uint:return t.value<24?od([Number(t.value)]):void 0;case Ju.negint:if(t.value>=-24)return od([31-Number(t.value)])}}},tp=[];tp[Ju.uint.major]=wd,tp[Ju.negint.major]=kd,tp[Ju.bytes.major]=Sd,tp[Ju.string.major]=Id,tp[Ju.array.major]=Ud,tp[Ju.map.major]=Ld,tp[Ju.tag.major]=Rd,tp[Ju.float.major]=Md;const ep=new ud;class rp{constructor(t,e){this.obj=t,this.parent=e}includes(t){let e=this;do{if(e.obj===t)return!0}while(e=e.parent);return!1}static createCheck(t,e){if(t&&t.includes(e))throw new Error("CBOR encode error: object contains circular references");return new rp(e,t)}}const np={null:new Xu(Ju.null,null),undefined:new Xu(Ju.undefined,void 0),true:new Xu(Ju.true,!0),false:new Xu(Ju.false,!1),emptyArray:new Xu(Ju.array,0),emptyMap:new Xu(Ju.map,0)},op={number:(t,e,r,n)=>Number.isInteger(t)&&Number.isSafeInteger(t)?new Xu(t>=0?Ju.uint:Ju.negint,t):new Xu(Ju.float,t),bigint:(t,e,r,n)=>t>=BigInt(0)?new Xu(Ju.uint,t):new Xu(Ju.negint,t),Uint8Array:(t,e,r,n)=>new Xu(Ju.bytes,t),string:(t,e,r,n)=>new Xu(Ju.string,t),boolean:(t,e,r,n)=>t?np.true:np.false,null:(t,e,r,n)=>np.null,undefined:(t,e,r,n)=>np.undefined,ArrayBuffer:(t,e,r,n)=>new Xu(Ju.bytes,new Uint8Array(t)),DataView:(t,e,r,n)=>new Xu(Ju.bytes,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),Array(t,e,r,n){if(!t.length)return!0===r.addBreakTokens?[np.emptyArray,new Xu(Ju.break)]:np.emptyArray;n=rp.createCheck(n,t);const o=[];let i=0;for(const e of t)o[i++]=ip(e,r,n);return r.addBreakTokens?[new Xu(Ju.array,t.length),o,new Xu(Ju.break)]:[new Xu(Ju.array,t.length),o]},Object(t,e,r,n){const o="Object"!==e,i=o?t.keys():Object.keys(t),s=o?t.size:i.length;if(!s)return!0===r.addBreakTokens?[np.emptyMap,new Xu(Ju.break)]:np.emptyMap;n=rp.createCheck(n,t);const a=[];let l=0;for(const e of i)a[l++]=[ip(e,r,n),ip(o?t.get(e):t[e],r,n)];return function(t,e){e.mapSorter&&t.sort(e.mapSorter)}(a,r),r.addBreakTokens?[new Xu(Ju.map,s),a,new Xu(Ju.break)]:[new Xu(Ju.map,s),a]}};op.Map=op.Object,op.Buffer=op.Uint8Array;for(const t of"Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" "))op[`${t}Array`]=op.DataView;function ip(t,e={},r){const n=Gu(t),o=e&&e.typeEncoders&&e.typeEncoders[n]||op[n];if("function"==typeof o){const i=o(t,n,e,r);if(null!=i)return i}const i=op[n];if(!i)throw new Error(`CBOR encode error: unsupported type: ${n}`);return i(t,n,e,r)}function sp(t,e,r,n){if(Array.isArray(e))for(const o of e)sp(t,o,r,n);else r[e.type.major](t,e,n)}function ap(t,e,r){const n=ip(t,r);if(!Array.isArray(n)&&r.quickEncodeToken){const t=r.quickEncodeToken(n);if(t)return t;const o=e[n.type.major];if(o.encodedSize){const t=o.encodedSize(n,r),e=new ud(t);if(o(e,n,r),1!==e.chunks.length)throw new Error(`Unexpected error: pre-calculated length for ${n} was wrong`);return ed(e.chunks[0])}}return sp(ep,n,e,r),ep.toBytes(!0)}const lp={strict:!1,allowIndefinite:!0,allowUndefined:!0,allowBigInt:!0};class cp{constructor(t,e={}){this.pos=0,this.data=t,this.options=e}done(){return this.pos>=this.data.length}next(){const t=this.data[this.pos];let e=Yd[t];if(void 0===e){const r=Zd[t];if(!r)throw new Error(`CBOR decode error: no decoder for major type ${t>>>5} (byte 0x${t.toString(16).padStart(2,"0")})`);const n=31&t;e=r(this.data,this.pos,n,this.options)}return this.pos+=e.encodedLength,e}}const hp=Symbol.for("DONE"),up=Symbol.for("BREAK");function dp(t,e){if(t.done())return hp;const r=t.next();if(r.type===Ju.break)return up;if(r.type.terminal)return r.value;if(r.type===Ju.array)return function(t,e,r){const n=[];for(let o=0;o<t.value;o++){const i=dp(e,r);if(i===up){if(t.value===1/0)break;throw new Error("CBOR decode error: got unexpected break to lengthed array")}if(i===hp)throw new Error(`CBOR decode error: found array but not enough entries (got ${o}, expected ${t.value})`);n[o]=i}return n}(r,t,e);if(r.type===Ju.map)return function(t,e,r){const n=!0===r.useMaps,o=n?void 0:{},i=n?new Map:void 0;for(let s=0;s<t.value;s++){const a=dp(e,r);if(a===up){if(t.value===1/0)break;throw new Error("CBOR decode error: got unexpected break to lengthed map")}if(a===hp)throw new Error(`CBOR decode error: found map but not enough entries (got ${s} [no key], expected ${t.value})`);if(!0!==n&&"string"!=typeof a)throw new Error(`CBOR decode error: non-string keys not supported (got ${typeof a})`);const l=dp(e,r);if(l===hp)throw new Error(`CBOR decode error: found map but not enough entries (got ${s} [no value], expected ${t.value})`);n?i.set(a,l):o[a]=l}return n?i:o}(r,t,e);if(r.type===Ju.tag){if(e.tags&&"function"==typeof e.tags[r.value]){const n=dp(t,e);return e.tags[r.value](n)}throw new Error(`CBOR decode error: tag not supported (${r.value})`)}throw new Error("unsupported")}const pp={float64:!0,typeEncoders:{Object:function(t){if(t.asCID!==t)return null;const e=ic.k.asCID(t);if(!e)return null;const r=new Uint8Array(e.bytes.byteLength+1);return r.set(e.bytes,1),[new Xu(Ju.tag,42),new Xu(Ju.bytes,r)]},undefined:function(){throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded")},number:function(t){if(Number.isNaN(t))throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");if(t===1/0||t===-1/0)throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");return null}}};const fp={allowIndefinite:!1,allowUndefined:!1,allowNaN:!1,allowInfinity:!1,allowBigInt:!0,strict:!0,useMaps:!1,tags:[]};fp.tags[42]=function(t){if(0!==t[0])throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");return ic.k.decode(t.subarray(1))};const bp="dag-cbor",gp=113,yp=t=>function(t,e){return e=Object.assign({},Qd,e),ap(t,tp,e)}(t,pp),mp=t=>function(t,e){if(!(t instanceof Uint8Array))throw new Error("CBOR decode error: data to decode must be a Uint8Array");const r=(e=Object.assign({},lp,e)).tokenizer||new cp(t,e),n=dp(r,e);if(n===hp)throw new Error("CBOR decode error: did not find any content to decode");if(n===up)throw new Error("CBOR decode error: got unexpected break");if(!r.done())throw new Error("CBOR decode error: too many terminals, data makes no sense");return n}(t,fp);var wp=__webpack_require__(8103);const vp=async function(t){return(await Fl.encode(t)).slice(0,8).reverse()},_p=t=>t.toString(16).toUpperCase().padStart(2,"0").substring(0,2),xp=async(t,e,r,n,o)=>{if(!n){const t=(0,nh.createHAMT)({hashFn:vp});n={rootBucket:t,hamtDepth:1,lastBucket:t}}await((t,e,r)=>Promise.all(t.map((t=>{if(null==t.Name)throw new Error("Unexpected Link without a Name");if(2===t.Name.length){const n=parseInt(t.Name,16);return e._putObjectAt(n,new nh.Bucket({hash:r._options.hash,bits:r._options.bits},e,n))}return r.put(t.Name.substring(2),!0)}))))(t.Links,n.lastBucket,n.rootBucket);const i=await n.rootBucket._findNewBucketAndPos(e);let s=_p(i.pos);const a=(t=>{let e=t.bucket;const r=[];for(;e._parent;)r.push(e),e=e._parent;return r.push(e),r.reverse()})(i);a.length>n.hamtDepth&&(n.lastBucket=a[n.hamtDepth],s=_p(n.lastBucket._posAtParent));const l=t.Links.find((t=>{if(null==t.Name)return!1;const r=t.Name.substring(0,2),n=t.Name.substring(2);return r===s&&(!n||n===e)}));if(!l)return null;if(null!=l.Name&&l.Name.substring(2)===e)return l.Hash;n.hamtDepth++;return t=zc(await r.get(l.Hash,o)),xp(t,e,r,n,o)},kp=xp;const Ap=function(t,e,r,n){const o=e+t.length;return r>=o||n<e?new Uint8Array(0):(n>=e&&n<o&&(t=t.slice(0,n-e)),r>=e&&r<o&&(t=t.slice(r-e)),t)},Ep=(t,e,r)=>{if(e||(e=0),e<0)throw Vl(new Error("Offset must be greater than or equal to 0"),"ERR_INVALID_PARAMS");if(e>t)throw Vl(new Error("Offset must be less than the file size"),"ERR_INVALID_PARAMS");if(r||0===r||(r=t-e),r<0)throw Vl(new Error("Length must be greater than or equal to 0"),"ERR_INVALID_PARAMS");return e+r>t&&(r=t-e),{offset:e,length:r}};async function*Cp(t,e,r,n,o=0,i){if(e instanceof Uint8Array){const t=Ap(e,o,r,n);return t.length&&(yield t),o+=t.length,o}if(null==e.Data)throw Vl(new Error("no data in PBNode"),"ERR_NOT_UNIXFS");let s;try{s=oc.unmarshal(e.Data)}catch(t){throw Vl(t,"ERR_NOT_UNIXFS")}if(s.data&&s.data.length){const t=Ap(s.data,o,r,n);t.length&&(yield t),o+=s.data.length}let a=o;for(let l=0;l<e.Links.length;l++){const c=e.Links[l],h=o+s.blockSizes[l];if(r>=a&&r<h||n>a&&n<=h||r<a&&n>h){const e=await t.get(c.Hash,{signal:i.signal});let s;switch(c.Hash.code){case Ic:s=await zc(e);break;case Dc.code:s=e;break;case gp:s=await mp(e);break;default:throw Error(`Unsupported codec: ${c.Hash.code}`)}for await(const e of Cp(t,s,r,n,o,i))o+=e.length,yield e}o=h,a=h+1}}const Sp=(t,e,r,n,o,i,s)=>function(t={}){const n=r.fileSize();if(void 0===n)throw new Error("File was a directory");const{offset:o,length:i}=Ep(n,t.offset,t.length);return Cp(s,e,o,o+i,0,t)},$p=(t,e,r,n,o,i,s)=>async function*(t={}){const r=t.offset||0,a=t.length||e.Links.length,l=e.Links.slice(r,a);for(const e of l){const r=await o(e.Hash,e.Name||"",`${n}/${e.Name||""}`,[],i+1,s,t);r.entry&&(yield r.entry)}};async function*Tp(t,e,r,n,o,i){const s=t.Links;for(const a of s){const s=null!=a.Name?a.Name.substring(2):null;if(s){const t=await r(a.Hash,s,`${e}/${s}`,[],n+1,o,i);yield t.entry}else{t=zc(await o.get(a.Hash));for await(const s of Tp(t,e,r,n,o,i))yield s}}}const Ip=(t,e,r,n,o,i,s)=>function(t={}){return Tp(e,n,o,i,s,t)},Bp={raw:Sp,file:Sp,directory:$p,"hamt-sharded-directory":Ip,metadata:(t,e,r,n,o,i,s)=>()=>[],symlink:(t,e,r,n,o,i,s)=>()=>[]},zp=async(t,e,r,n,o,i,s,a)=>{const l=zc(await s.get(t,a));let c,h;if(e||(e=t.toString()),null==l.Data)throw Vl(new Error("no data in PBNode"),"ERR_NOT_UNIXFS");try{c=oc.unmarshal(l.Data)}catch(t){throw Vl(t,"ERR_NOT_UNIXFS")}if(r||(r=e),n.length){let t;if(t=c&&"hamt-sharded-directory"===c.type?await kp(l,n[0],s):((t,e)=>{const r=t.Links.find((t=>t.Name===e));return r&&r.Hash})(l,n[0]),!t)throw Vl(new Error("file does not exist"),"ERR_NOT_FOUND");const e=n.shift();h={cid:t,toResolve:n,name:e||"",path:`${r}/${e}`}}return{entry:{type:c.isDirectory()?"directory":"file",name:e,path:r,cid:t,content:Bp[c.type](t,l,c,r,o,i,s),unixfs:c,depth:i,node:l,size:c.fileSize()},next:h}},Up=async(t,e,r,n,o,i,s,a)=>{if(n.length)throw Vl(new Error(`No link named ${r} found in raw node ${t}`),"ERR_NOT_FOUND");const l=await s.get(t,a);return{entry:{type:"raw",name:e,path:r,cid:t,content:(c=l,async function*(t={}){const{offset:e,length:r}=Ep(c.length,t.offset,t.length);yield Ap(c,0,e,e+r)}),depth:i,size:l.length,node:l}};var c},Op=async(t,e,r,n,o,i,s,a)=>{const l=await s.get(t),c=mp(l);let h=c,u=r;for(;n.length;){const o=n[0];if(!(o in h))throw Vl(new Error(`No property named ${o} found in cbor node ${t}`),"ERR_NO_PROP");{n.shift(),u=`${u}/${o}`;const s=ic.k.asCID(h[o]);if(s)return{entry:{type:"object",name:e,path:r,cid:t,node:l,depth:i,size:l.length,content:async function*(){yield c}},next:{cid:s,name:o,path:u,toResolve:n}};h=h[o]}}return{entry:{type:"object",name:e,path:r,cid:t,node:l,depth:i,size:l.length,content:async function*(){yield c}}}};var Dp=__webpack_require__(8924);const Lp=async(t,e,r,n,o,i,s,a)=>{if(n.length)throw Vl(new Error(`No link named ${r} found in raw node ${t}`),"ERR_NOT_FOUND");const l=await Dp.Jx(t.multihash.bytes);return{entry:{type:"identity",name:e,path:r,cid:t,content:(c=l.digest,async function*(t={}){const{offset:e,length:r}=Ep(c.length,t.offset,t.length);yield Ap(c,0,e,e+r)}),depth:i,size:l.digest.length,node:l.digest}};var c},Np={[Ic]:zp,[Dc.code]:Up,[gp]:Op,[wp.identity.code]:Lp};const Rp=function t(e,r,n,o,i,s,a){const l=Np[e.code];if(!l)throw Vl(new Error(`No resolver for code ${e.code}`),"ERR_NO_RESOLVER");return l(e,r,n,o,t,i,s,a)},Pp=t=>{if(t instanceof Uint8Array)return{cid:ic.k.decode(t),toResolve:[]};const e=ic.k.asCID(t);if(e)return{cid:e,toResolve:[]};if("string"==typeof t){0===t.indexOf("/ipfs/")&&(t=t.substring(6));const e=((t="")=>(t.trim().match(/([^\\^/]|\\\/)+/g)||[]).filter(Boolean))(t);return{cid:ic.k.parse(e[0]),toResolve:e.slice(1)}}throw Vl(new Error(`Unknown path type ${t}`),"ERR_BAD_PATH")};async function Mp(t,e,r={}){const n=await hi(async function*(t,e,r={}){let{cid:n,toResolve:o}=Pp(t),i=n.toString(),s=i;const a=o.length;for(;;){const l=await Rp(n,i,s,o,a,e,r);if(!l.entry&&!l.next)throw Vl(new Error(`Could not resolve ${t}`),"ERR_NOT_FOUND");if(l.entry&&(yield l.entry),!l.next)return;o=l.next.toResolve,n=l.next.cid,i=l.next.name,s=l.next.path}}(t,e,r));if(!n)throw Vl(new Error(`Could not resolve ${t}`),"ERR_NOT_FOUND");return n}async function*jp(t,e,r={}){const n=await Mp(t,e,r);if(n&&(yield n,"directory"===n.type))for await(const t of async function*t(e,r){for await(const n of e.content(r))yield n,n instanceof Uint8Array||"directory"===n.type&&(yield*t(n,r))}(n,r))yield t}class Fp extends Eu{constructor(t){super(),this.store=t}async get(t){const e=await this.store.get(t);if(!e)throw new Error(`Incomplete CAR. Block missing for CID ${t}`);if(!async function({cid:t,bytes:e}){return function(t,e){if(t===e)return!0;if(t.byteLength!==e.byteLength)return!1;for(let r=0;r<t.byteLength;r++)if(t[r]!==e[r])return!1;return!0}((await Ru.digest(e)).digest,t.multihash.digest)}({cid:t,bytes:e}))throw new Error(`Invalid CAR. Hash of block data does not match CID ${t}`);return e}static fromBlockstore(t){return new Fp(t)}static fromCarReader(t){return new Fp({get:async e=>{const r=await t.get(e);return null==r?void 0:r.bytes}})}}async function*Hp(t,{roots:e,blockstore:r}={}){const n=await Sl.fromIterable(function(t){return Symbol.asyncIterator in t?t:dh(t)}(t)),o=r||new Lu;for await(const t of n)await o.put(t.cid,t.bytes);const i=Fp.fromBlockstore(o);e&&0!==e.length||(e=await n.getRoots());for(const t of e)yield*jp(t,i)}const Vp=18,qp=32,Wp=112;async function Kp(t){const e=await t.upTo(8),r=di.decode(e);return t.seek(di.decode.bytes),r}async function Gp(t){const e=await Kp(t);if(0===e)throw new Error("Invalid CAR header (zero length)");const r=await t.exactly(e);t.seek(e);const n=mp(r);if(null==n||Array.isArray(n)||"object"!=typeof n)throw new Error("Invalid CAR header format");if(1!==n.version){if("string"==typeof n.version)throw new Error(`Invalid CAR version: "${n.version}"`);throw new Error(`Invalid CAR version: ${n.version}`)}if(!Array.isArray(n.roots))throw new Error("Invalid CAR header format");if(Object.keys(n).filter((t=>"roots"!==t&&"version"!==t)).length)throw new Error("Invalid CAR header format");return n}async function Jp(t){const e=await t.exactly(2);if(e[0]===Vp&&e[1]===qp){const e=await t.exactly(34);t.seek(34);const r=Dp.Jx(e);return ic.k.create(0,Wp,r)}const r=await Kp(t);if(1!==r)throw new Error(`Unexpected CID version (${r})`);const n=await Kp(t),o=await async function(t){const e=await t.upTo(8);di.decode(e);const r=di.decode.bytes,n=di.decode(e.subarray(di.decode.bytes)),o=r+di.decode.bytes+n,i=await t.exactly(o);return t.seek(o),i}(t),i=Dp.Jx(o);return ic.k.create(r,n,i)}async function Xp(t){const e=t.pos;let r=await Kp(t);if(0===r)throw new Error("Invalid CAR section (zero length)");r+=t.pos-e;return{cid:await Jp(t),length:r,blockLength:r-(t.pos-e)}}async function Zp(t){const{cid:e,blockLength:r}=await Xp(t),n=await t.exactly(r);return t.seek(r),{bytes:n,cid:e}}async function Yp(t){const e=t.pos,{cid:r,length:n,blockLength:o}=await Xp(t),i={cid:r,length:n,blockLength:o,offset:e,blockOffset:t.pos};return t.seek(i.blockLength),i}function Qp(t){let e=0;return{upTo:async r=>t.subarray(e,e+Math.min(r,t.length-e)),async exactly(r){if(r>t.length-e)throw new Error("Unexpected end of data");return t.subarray(e,e+r)},seek(t){e+=t},get pos(){return e}}}function tf(t){const e=t[Symbol.asyncIterator]();return function(t){let e=0,r=0,n=0,o=new Uint8Array(0);const i=async e=>{r=o.length-n;const i=[o.subarray(n)];for(;r<e;){const e=await t();if(null==e)break;r<0?e.length>r&&i.push(e.subarray(-r)):i.push(e),r+=e.length}o=new Uint8Array(i.reduce(((t,e)=>t+e.length),0));let s=0;for(const t of i)o.set(t,s),s+=t.length;n=0};return{upTo:async t=>(o.length-n<t&&await i(t),o.subarray(n,n+Math.min(o.length-n,t))),async exactly(t){if(o.length-n<t&&await i(t),o.length-n<t)throw new Error("Unexpected end of data");return o.subarray(n,n+t)},seek(t){e+=t,n+=t},get pos(){return e}}}((async function(){const t=await e.next();return t.done?null:t.value}))}class ef{constructor(t,e,r){this._version=t,this._roots=e,this._blocks=r,this._keys=r.map((t=>t.cid.toString()))}get version(){return this._version}async getRoots(){return this._roots}async has(t){return this._keys.indexOf(t.toString())>-1}async get(t){const e=this._keys.indexOf(t.toString());return e>-1?this._blocks[e]:void 0}async*blocks(){for(const t of this._blocks)yield t}async*cids(){for(const t of this._blocks)yield t.cid}static async fromBytes(t){if(!(t instanceof Uint8Array))throw new TypeError("fromBytes() requires a Uint8Array");return rf(Qp(t))}static async fromIterable(t){if(!t||"function"!=typeof t[Symbol.asyncIterator])throw new TypeError("fromIterable() requires an async iterable");return rf(tf(t))}}async function rf(t){const e=function(t){const e=Gp(t);return{header:()=>e,async*blocks(){for(await e;(await t.upTo(8)).length>0;)yield await Zp(t)},async*blocksIndex(){for(await e;(await t.upTo(8)).length>0;)yield await Yp(t)}}}(t),{version:r,roots:n}=await e.header(),o=[];for await(const t of e.blocks())o.push(t);return new ef(r,n,o)}Symbol.asyncIterator;Symbol.asyncIterator;Symbol.asyncIterator;function nf(t){const e=yp({version:1,roots:t}),r=di.encode(e.length),n=new Uint8Array(r.length+e.length);return n.set(r,0),n.set(e,r.length),n}function of(){}class sf{constructor(t,e){this._encoder=e,this._mutex=e.setRoots(t),this._ended=!1}async put(t){if(!(t.bytes instanceof Uint8Array&&t.cid))throw new TypeError("Can only write {cid, bytes} objects");if(this._ended)throw new Error("Already closed");const e=ic.k.asCID(t.cid);if(!e)throw new TypeError("Can only write {cid, bytes} objects");return this._mutex=this._mutex.then((()=>this._encoder.writeBlock({cid:e,bytes:t.bytes}))),this._mutex}async close(){if(this._ended)throw new Error("Already closed");return await this._mutex,this._ended=!0,this._encoder.close()}static create(t){t=function(t){if(void 0===t)return[];if(!Array.isArray(t)){const e=ic.k.asCID(t);if(!e)throw new TypeError("roots must be a single CID or an array of CIDs");return[e]}const e=[];for(const r of t){const t=ic.k.asCID(r);if(!t)throw new TypeError("roots must be a single CID or an array of CIDs");e.push(t)}return e}(t);const{encoder:e,iterator:r}=lf();return{writer:new sf(t,e),out:new af(r)}}static createAppender(){const{encoder:t,iterator:e}=lf();t.setRoots=()=>Promise.resolve();return{writer:new sf([],t),out:new af(e)}}static async updateRootsInBytes(t,e){const r=Qp(t);await Gp(r);const n=nf(e);if(r.pos!==n.length)throw new Error(`updateRoots() can only overwrite a header of the same length (old header is ${r.pos} bytes, new header is ${n.length} bytes)`);return t.set(n,0),t}}class af{constructor(t){this._iterator=t}[Symbol.asyncIterator](){if(this._iterating)throw new Error("Multiple iterator not supported");return this._iterating=!0,this._iterator}}function lf(){const t=function(){const t=[];let e=null,r=of,n=!1,o=null,i=of;const s=()=>(e||(e=new Promise((t=>{r=()=>{e=null,r=of,t()}}))),e),a={write(e){t.push(e);const r=s();return i(),r},async end(){n=!0;const t=s();return i(),t}},l={async next(){const e=t.shift();return e?(0===t.length&&r(),{done:!1,value:e}):n?(r(),{done:!0,value:void 0}):(o||(o=new Promise((t=>{i=()=>(o=null,i=of,t(l.next()))}))),o)}};return{writer:a,iterator:l}}(),{writer:e,iterator:r}=t,n=function(t){return{async setRoots(e){const r=nf(e);await t.write(r)},async writeBlock(e){const{cid:r,bytes:n}=e;await t.write(new Uint8Array(di.encode(r.bytes.length+n.length))),await t.write(r.bytes),n.length&&await t.write(n)},close:async()=>t.end()}}(e);return{encoder:n,iterator:r}}const cf=({enumerable:t=!0,configurable:e=!1}={})=>({enumerable:t,configurable:e,writable:!1}),hf=function*(t,e){if(null!=t&&!(t instanceof Uint8Array))for(const[r,n]of Object.entries(t)){const t=[...e,r];if(null!=n&&"object"==typeof n)if(Array.isArray(n))for(const[e,r]of n.entries()){const n=[...t,e],o=Ml.k0.asCID(r);o?yield[n.join("/"),o]:"object"==typeof r&&(yield*hf(r,n))}else{const e=Ml.k0.asCID(n);e?yield[t.join("/"),e]:yield*hf(n,t)}}},uf=function*(t,e){if(null!=t)for(const[r,n]of Object.entries(t)){const t=[...e,r];if(yield t.join("/"),!(null==n||n instanceof Uint8Array||"object"!=typeof n||Ml.k0.asCID(n)))if(Array.isArray(n))for(const[e,r]of n.entries()){const n=[...t,e];yield n.join("/"),"object"!=typeof r||Ml.k0.asCID(r)||(yield*uf(r,n))}else yield*uf(n,t)}};class df{constructor({cid:t,bytes:e,value:r}){if(!t||!e||void 0===r)throw new Error("Missing required argument");this.cid=t,this.bytes=e,this.value=r,this.asBlock=this,Object.defineProperties(this,{cid:cf(),bytes:cf(),value:cf(),asBlock:cf()})}links(){return hf(this.value,[])}tree(){return uf(this.value,[])}get(t="/"){return((t,e)=>{let r=t;for(const[t,n]of e.entries()){if(r=r[n],null==r)throw new Error(`Object has no property at ${e.slice(0,t+1).map((t=>`[${JSON.stringify(t)}]`)).join("")}`);const o=Ml.k0.asCID(r);if(o)return{value:o,remaining:e.slice(t+1).join("/")}}return{value:r}})(this.value,t.split("/").filter(Boolean))}}class pf{constructor(e,n,o={}){if("number"!=typeof n||n<=0)throw new Error("invalid target chunk size");this._reader=e,this._targetSize=n,this._decoders=[t,Dc,r,...o.decoders||[]]}async*cars(){const t=await this._reader.getRoots();if(1!==t.length)throw new Error(`unexpected number of roots: ${t.length}`);let e;for await(const r of this._cars(t[0]))e=r.channel,r.out&&(yield r.out);if(!e)throw new Error("missing CAR writer channel");e.writer.close(),yield e.out}async _get(t){const e=await this._reader.get(t);if(!e)throw new Error(`missing block for ${t}`);const{bytes:r}=e,n=this._decoders.find((e=>e.code===t.code));if(!n)throw new Error(`missing decoder for ${t.code}`);return new df({cid:t,bytes:r,value:n.decode(r)})}async*_cars(t,e=[],r){const n=await this._get(t);if((r=r||Object.assign(sf.create(t),{size:0})).size>0&&r.size+n.bytes.byteLength>=this._targetSize){r.writer.close();const{out:t}=r;r=function(t){const e=Object.assign(sf.create(t[0].cid),{size:t.reduce(((t,e)=>t+e.bytes.byteLength),0)});for(const r of t)e.writer.put(r);return e}(e),yield{channel:r,out:t}}e=e.concat(n),r.size+=n.bytes.byteLength,r.writer.put(n);for(const[,t]of n.links())for await(const n of this._cars(t,e,r))r=n.channel,yield n;if(!r)throw new Error("missing CAR writer channel");yield{channel:r}}static async fromIterable(t,e,r){const n=await ef.fromIterable(t);return new pf(n,e,r)}static async fromBlob(t,e,r){const n=await t.arrayBuffer(),o=await ef.fromBytes(new Uint8Array(n));return new pf(o,e,r)}}const ff=globalThis.fetch,bf=(globalThis.Request,globalThis.Response,globalThis.Blob),gf=globalThis.File,yf=Lu;class mf{constructor({token:t,endpoint:e=new URL("https://api.web3.storage")}){this.token=t,this.endpoint=e}static headers(t){if(!t)throw new Error("missing token");return{Authorization:`Bearer ${t}`,"X-Client":"web3.storage/js"}}static async put({endpoint:t,token:e},r,{onRootCidReady:n,onStoredChunk:o,maxRetries:i=5,wrapWithDirectory:s=!0,name:a}={}){const l=new yf;try{const{out:c,root:h}=await Mu({input:Array.from(r).map((t=>({path:t.name,content:t.stream()}))),blockstore:l,wrapWithDirectory:s,maxChunkSize:1048576,maxChildrenPerNode:1024});n&&n(h.toString());const u=await ef.fromIterable(c);return await mf.putCar({endpoint:t,token:e},u,{onStoredChunk:o,maxRetries:i,name:a})}finally{await l.close()}}static async putCar({endpoint:t,token:e},r,{name:n,onStoredChunk:o,maxRetries:i=5,decoders:s}={}){const a=new URL("car",t);let l=mf.headers(e);n&&(l={...l,"X-Name":encodeURIComponent(n)});const c=await r.getRoots();if(null==c[0])throw new Error("missing root CID");if(c.length>1)throw new Error("too many roots");const h=c[0].toString(),u=new pf(r,10485760,{decoders:s}),d=li(3,(async t=>{const e=[];for await(const r of t)e.push(r);const r=new bf(e,{type:"application/car"}),n=await ci((async()=>{const t=await ff(a.toString(),{method:"POST",headers:l,body:r}),e=await t.json();if(!t.ok)throw new Error(e.message);if(e.cid!==h)throw new Error(`root CID mismatch, expected: ${h}, received: ${e.cid}`);return e.cid}),{retries:i});return o&&o(r.size),n}));for await(const t of d(u.cars()));return h}static async get({endpoint:t,token:e},r){const n=new URL(`car/${r}`,t);return function(t){const e=Object.assign(t,{unixFsIterator:async function*(){if(!t.ok)throw new Error(`Response was not ok: ${t.status} ${t.statusText} - Check for { "ok": false } on the Response object before calling .unixFsIterator`);if(!t.body)throw new Error("No body on response");const e=new yf;try{for await(const r of Hp(t.body,{blockstore:e}))yield r}finally{await e.close()}},files:async()=>{if(!t.ok)throw new Error(`Response was not ok: ${t.status} ${t.statusText} - Check for { "ok": false } on the Response object before calling .files`);const r=[];for await(const t of e.unixFsIterator()){if("directory"===t.type)continue;const e=await wf(t);r.push(e)}return r}});return e}(await ff(n.toString(),{method:"GET",headers:mf.headers(e)}))}static async delete({endpoint:t,token:e},r){throw console.log("Not deleting",r,t,e),Error(".delete not implemented yet")}static async status({endpoint:t,token:e},r){const n=new URL(`status/${r}`,t),o=await ff(n.toString(),{method:"GET",headers:mf.headers(e)});if(404!==o.status){if(!o.ok)throw new Error(o.statusText);return o.json()}}static async*list(t,{before:e=(new Date).toISOString(),maxResults:r=1/0}={}){let n=0;const o=r>100?100:r;for await(const i of async function*(t,e,r){let n=await t(e,r);yield n;let o=qu(n.headers.get("Link")||"");for(;o&&o.next;)n=await t(e,o.next),yield n,o=qu(n.headers.get("Link")||"")}((function({endpoint:t,token:e},{before:r,size:n}){const o=new URLSearchParams({before:r,size:n.toString()}),i=new URL(`user/uploads?${o}`,t);return ff(i.toString(),{method:"GET",headers:{...mf.headers(e),"Access-Control-Request-Headers":"Link"}})}),t,{before:e,size:o})){if(!i.ok){const t=await i.json();throw new Error(`${i.status} ${i.statusText} ${t?"- "+t.message:""}`)}const t=await i.json();for(const e of t){if(++n>r)return;yield e}}}put(t,e){return mf.put(this,t,e)}putCar(t,e){return mf.putCar(this,t,e)}get(t){return mf.get(this,t)}delete(t){return mf.delete(this,t)}status(t){return mf.status(this,t)}list(t){return mf.list(this,t)}}async function wf({content:t,path:e,cid:r}){const n=[];for await(const e of t())n.push(e);const o=new gf(n,function(t){const e=t.indexOf("/");return-1===e?t:t.substring(e+1)}(e));return Object.assign(o,{cid:r.toString()})}const vf="https://cdn.jsdelivr.net/npm/replaywebpage@1.7.2/";class _f{constructor(t){const e=t||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDREMEMxYjlCNzdDOTYxMTA4NkU2NDMzOTI0NDM3Rjc1MGRBNjVlNTciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDYyOTExMjU3MzAsIm5hbWUiOiJhd3BleHByZXNzIn0.oxSNKwda3IhOxfyjaq8Jva7RblPilsPMa9vV8bkzWVI";this.web3=new mf({token:e})}async uploadWACZ(t,e,r,n){const o=[this.createIndex(t,e),await this.fetchFile("replay/sw.js",vf+"sw.js"),await this.fetchFile("ui.js",vf+"ui.js"),await this.fetchFile("webarchive.wacz",r)],i=await this.web3.put(o,{onStoredChunk:n});return console.log("cid: "+i),i}createIndex(t,e){console.log(e);const r=new Blob([`<!doctype html>\n<html class="no-overflow">\n<head>\n  <title>ReplayWeb.page</title>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <script src="./ui.js"><\/script>\n  <style>\n    html, body, replay-web-page {\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      margin: 0px;\n      padding: 0px;\n    }\n  </style>\n</head>\n<body>\n  <replay-web-page deepLink="true" url="${t}" embed="replay-with-info" src="./webarchive.wacz"></replay-web-page>\n</body>\n</html>\n`],{type:"text/html"});return new xf("index.html",r.stream())}async fetchFile(t,e){const r=await fetch(e);return new xf(t,r.body)}}class xf{constructor(t,e){this.name=t,this.rs=e}stream(){return this.rs}}class kf extends ni{constructor(){super(),this.proxyPrefix="https://wabac-cors-proxy.webrecorder.workers.dev/proxy/",this.oembedPrefix="https://oembed.link/",this.lastUrl=null,this.lastTs=null,this.lastTitle=null,this.size=0,this.uploadProgress=0,this.autoupload=!1,this.collReady=!1,this.collAwait=null,this.hashUpdate=!1,this.isDone=!1}static get properties(){return{url:{type:String},isInvalidUrl:{type:Boolean},loading:{type:Boolean},uploading:{type:Boolean},autoupload:{type:Boolean},isDone:{type:Boolean},opts:{type:Object},inited:{type:Boolean},iframeUrl:{type:String},collReady:{type:Boolean},collId:{type:String},size:{type:Number},uploadProgress:{type:Number},cidLink:{type:String},archivePrefix:{type:String},proxyPrefix:{type:String},publicKey:{type:String}}}firstUpdated(){document.addEventListener("fullscreenchange",(()=>{this.fullscreen=!!document.fullscreenElement})),this.showAbout="?about"===window.location.search,this.getPublicKey(),window.addEventListener("message",(t=>this.onReplayMessage(t))),this.initSW();const t=()=>{if(this.hashUpdate)return void(this.hashUpdate=!1);const t=new URLSearchParams(window.location.hash.slice(1));this.handleHashChange(t)};window.addEventListener("hashchange",(()=>t())),t(),window.addEventListener("beforeunload",(()=>{this.deleteColl(this.collId)})),setInterval((()=>this.updateSize()),5e3)}async getPublicKey(){try{const t=await fetch("w/api/publicKey"),e=await t.json();e.publicKey&&(this.publicKey=e.publicKey)}catch(t){console.error(t)}}handleHashChange(t){this.url=this.validateUrl(t.get("url")||""),this.isInvalidUrl=!this.url,this.autoupload="1"===t.get("autoupload"),this.url&&this.initCollection()}async updateSize(){if(!this.collId)return;const t=await fetch(`w/api/c/${this.collId}`),e=await t.json();this.size=e.size,this.isDone||this.uploading||(this.waitForDoneId&&clearTimeout(this.waitForDoneId),this.waitForDoneId=setTimeout((()=>{this.size>1e6&&this.markAsDone()}),2e3))}markAsDone(){console.log("done?"),this.isDone=!0,this.autoupload&&this.onUpload()}async initSW(){await navigator.serviceWorker.register("./sw.js",{scope:"./"}),navigator.serviceWorker.addEventListener("message",(t=>{"collAdded"===t.data.msg_type&&t.data.name===this.collId&&this.collAwait&&this.collAwait()}))}initCollection(){console.log("init");const t=new URL(window.location);t.hash="",this.deleteColl(this.collId),this.collId=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),this.cidLink=null,this.uploading=!1;const e={msg_type:"addColl",name:this.collId,type:"recordingproxy",file:{sourceUrl:`proxy://${this.collId}`},skipExisting:!1,extraConfig:{prefix:this.proxyPrefix,isLive:!1,archivePrefix:this.archivePrefix,baseUrl:t.href,baseUrlHashReplay:!0,recording:!0,noPostToGet:!0}};this.url&&this.url.startsWith("https://twitter.com/")?this.iframeUrl=`w/${this.collId}/mp_/${this.oembedPrefix}${this.url}`:this.iframeUrl="",this.hashUpdate=!0;const r=new URLSearchParams;r.set("url",this.url),this.autoupload&&r.set("autoupload","1"),window.location.hash=`#${r.toString()}`,this.collReady=!1,this.loading=!0,new Promise((t=>{this.collAwait=t})).then((()=>{this.collReady=!0,this.hashUpdate=!1})),navigator.serviceWorker.controller?navigator.serviceWorker.controller.postMessage(e):navigator.serviceWorker.addEventListener("controllerchange",(()=>{navigator.serviceWorker.controller.postMessage(e)}))}createRenderRoot(){return this}render(){return Po`
    <div class="flex flex-col h-screen overflow-hidden pb-8 md:pb-0">
      <header class="flex-0 mt-12 mb-8 x-2">
        <h1 class="my-0 leading-none font-semibold text-[2rem] text-center">Save Tweet Now</h1>
      </header>
      <div class="flex-0 px-2 mb-8">
        <div class="panel p-8 shadow-sm flex flex-col items-center">
          ${this.renderControls()}
        </div>
      </div>
      <div class="flex-1 overflow-hidden tweetWrapper">
        ${this.renderContent()}
      </div>
    </div>
    `}renderURLInput(){return Po`
      <sl-form @sl-submit="${this.onUpdateUrl}" class="block w-full text-center">
        <sl-input class="w-full" id="url" placeholder="Enter Twitter URL (https://twitter.com/...) to load Tweet" .value="${this.url}" required>
        </sl-input>
        <div class="mt-6">
          <sl-button type="primary" size="large" submit>Archive Tweet!</sl-button>
        </div>
      </sl-form>
    `}renderControls(){return this.url?this.cidLink?Po`
      <div class="mt-6 font-semibold text-[1.25rem] leading-none">Tweet Pinned!</div>
      <div class="mt-3 leading-tight break-all text-center">
        <a href=${this.cidLink} target="_blank" class="text-blue-500 hover:text-blue-600 transition-colors">
          ${this.cidLink}
        </a>
      </div>
      <div class="mt-3 leading-tight text-center text-gray-400">
        Note: It may take a few minutes for the tweet to become available on the IPFS network.
      </div>
      <div class="mt-6">
        <sl-button size="large" @click=${this.reset}>
          Save Another Tweet
        </sl-button>
      </div>
      `:this.uploading?Po`
      <div>
        <sl-spinner class="text-[7rem]"></sl-spinner>
      </div>
      <div class="mt-6 font-semibold text-[1.25rem] leading-none">Pinning Tweet</div>
      <div class="mt-3 text-sm leading-none text-neutral-700">Pinning to IPFS</div>
      `:this.isDone?Po`
    <div class="mt-3 font-semibold text-[1.25rem] leading-none">Tweet Archived!</div>
      <div class="mt-3 leading-tight text-center text-gray-400">
        Total Size: <sl-format-bytes value="${this.size||0}"></sl-format-bytes>
      </div>
      <div class="mt-3 leading-tight break-all text-center">
        <a href="w/api/c/${this.collId}/dl?pages=all&format=wacz" @click="${this.onDownload}" target="_blank" class="text-blue-500 hover:text-blue-600 transition-colors">
          Download Archived Tweet
        </a>
      </div>
      <div class="mt-6 w-max">
        <sl-button class="block w-full" type="primary" size="large" @click=${this.onUpload}>Pin Tweet to IPFS</sl-button>
        <sl-button class="block w-full mt-3" size="large" @click=${this.reset}>
          Archive Another Tweet
        </sl-button>
      </div>
      
    `:Po`
      <div>
        <sl-spinner class="text-[7rem]"></sl-spinner>
      </div>
      <div class="mt-6 font-semibold text-[1.25rem] leading-none">Archiving Tweet</div>
      <div class="mt-3 leading-tight text-center text-gray-400">
        Size Loaded: <sl-format-bytes value="${this.size||0}"></sl-format-bytes>
      </div>
       `:this.renderURLInput()}renderContent(){if(this.url)return this.isInvalidUrl?Po`<div class="my-8 text-gray-500">Sorry, only Twitter URLs can be loaded</div>`:this.collReady&&this.iframeUrl?Po`
      <iframe name="" src="${this.iframeUrl}"
      @load="${this.onFrameLoad}" allow="autoplay 'self'; fullscreen" allowfullscreen
      ></iframe>
      `:""}onDownload(t){return setTimeout((()=>this.getPublicKey()),1e3),!0}onShowResult(t,e){t.show=e,this.searchResults=[...this.searchResults]}onUpdateUrl(t){t&&t.preventDefault();const e=this.renderRoot.querySelector("#url").value,r=e&&e!==this.actualUrl;this.url=this.validateUrl(e),this.isInvalidUrl=!this.url,r&&this.initCollection()}onFrameLoad(t){try{const e=t.currentTarget.contentWindow.WB_wombat_location;e?(this.actualUrl=e.url,this.updateSize(),this.loading=!1):this.actualUrl=null}catch(t){console.log(t),this.actualUrl=null}}async onReplayMessage(t){const e=this.renderRoot.querySelector("iframe");if(e&&t.source===e.contentWindow&&"load"===t.data.wb_type){const e=t.data.ts,r=t.data.url,n=t.data.title;if(this.lastUrl!==r){const t={url:r,ts:e,title:n};if(this.lastTs=e,this.lastUrl=r,this.lastTitle=n,r.startsWith(this.oembedPrefix)&&(this.url=this.validateUrl(r.slice(this.oembedPrefix.length)),this.isInvalidUrl=!this.url),n&&n!==r)try{await fetch(`w/api/c/${this.collId}/pageTitle`,{method:"POST",body:JSON.stringify(t)})}catch(t){console.warn(t)}}this.updateSize()}}async onUpload(){this.uploading=!0;const t=new _f,e=this.url,r=this.lastTs;this.uploadProgress=0;const n=await t.uploadWACZ(this.oembedPrefix+e,r,`w/api/c/${this.collId}/dl?pages=all&format=wacz`,(t=>{this.uploadProgress=this.size?Math.round(100*t/this.size):0}));this.cidLink=`https://w3s.link/ipfs/${n}/`,window.dispatchEvent(new CustomEvent("archive-done",{detail:{cid:n}})),this.uploading=!1}async deleteColl(t){t&&await fetch(`w/api/c/${t}`,{method:"DELETE"})}validateUrl(t){if(!t)return"";t.startsWith(this.oembedPrefix)&&(t=t.slice(this.oembedPrefix.length));const e=new URL(t);return"twitter.com"!==e.host?t:(e.protocol="https",e.search="",e.href)}reset(){window.location.hash="",this.cidLink=void 0,this.collReady=void 0}}customElements.define("live-web-proxy",kf)})();var __webpack_export_target__=self;for(var i in __webpack_exports__)__webpack_export_target__[i]=__webpack_exports__[i];__webpack_exports__.__esModule&&Object.defineProperty(__webpack_export_target__,"__esModule",{value:!0})})();