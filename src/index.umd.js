!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r():"function"==typeof define&&define.amd?define(r):r()}(0,function(){function t(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function r(r){return function n(e){return 0===arguments.length||t(e)?n:r.apply(this,arguments)}}function n(n){return function e(u,o){switch(arguments.length){case 0:return e;case 1:return t(u)?e:r(function(t){return n(u,t)});default:return t(u)&&t(o)?e:t(u)?r(function(t){return n(t,o)}):t(o)?r(function(t){return n(u,t)}):n(u,o)}}}function e(t,r){switch(t){case 0:return function(){return r.apply(this,arguments)};case 1:return function(t){return r.apply(this,arguments)};case 2:return function(t,n){return r.apply(this,arguments)};case 3:return function(t,n,e){return r.apply(this,arguments)};case 4:return function(t,n,e,u){return r.apply(this,arguments)};case 5:return function(t,n,e,u,o){return r.apply(this,arguments)};case 6:return function(t,n,e,u,o,i){return r.apply(this,arguments)};case 7:return function(t,n,e,u,o,i,c){return r.apply(this,arguments)};case 8:return function(t,n,e,u,o,i,c,f){return r.apply(this,arguments)};case 9:return function(t,n,e,u,o,i,c,f,a){return r.apply(this,arguments)};case 10:return function(t,n,e,u,o,i,c,f,a,l){return r.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function u(e){return function u(o,i,c){switch(arguments.length){case 0:return u;case 1:return t(o)?u:n(function(t,r){return e(o,t,r)});case 2:return t(o)&&t(i)?u:t(o)?n(function(t,r){return e(t,i,r)}):t(i)?n(function(t,r){return e(o,t,r)}):r(function(t){return e(o,i,t)});default:return t(o)&&t(i)&&t(c)?u:t(o)&&t(i)?n(function(t,r){return e(t,r,c)}):t(o)&&t(c)?n(function(t,r){return e(t,i,r)}):t(i)&&t(c)?n(function(t,r){return e(o,t,r)}):t(o)?r(function(t){return e(t,i,c)}):t(i)?r(function(t){return e(o,t,c)}):t(c)?r(function(t){return e(o,i,t)}):e(o,i,c)}}}var o=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function i(t,r,n){return function(){if(0===arguments.length)return n();var e=Array.prototype.slice.call(arguments,0),u=e.pop();if(!o(u)){for(var i=0;i<t.length;){if("function"==typeof u[t[i]])return u[t[i]].apply(u,e);i+=1}if(function(t){return"function"==typeof t["@@transducer/step"]}(u))return r.apply(null,e)(u)}return n.apply(this,arguments)}}var c={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}};function f(t){return"[object String]"===Object.prototype.toString.call(t)}var a=r(function(t){return!!o(t)||!!t&&("object"==typeof t&&(!f(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))}),l=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,r){return this.f(t,r)},t}();function p(t){return new l(t)}var s=n(function(t,r){return e(t.length,function(){return t.apply(r,arguments)})});function y(t,r,n){for(var e=n.next();!e.done;){if((r=t["@@transducer/step"](r,e.value))&&r["@@transducer/reduced"]){r=r["@@transducer/value"];break}e=n.next()}return t["@@transducer/result"](r)}function h(t,r,n,e){return t["@@transducer/result"](n[e](s(t["@@transducer/step"],t),r))}var d="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function g(t,r,n){if("function"==typeof t&&(t=p(t)),a(n))return function(t,r,n){for(var e=0,u=n.length;e<u;){if((r=t["@@transducer/step"](r,n[e]))&&r["@@transducer/reduced"]){r=r["@@transducer/value"];break}e+=1}return t["@@transducer/result"](r)}(t,r,n);if("function"==typeof n["fantasy-land/reduce"])return h(t,r,n,"fantasy-land/reduce");if(null!=n[d])return y(t,r,n[d]());if("function"==typeof n.next)return y(t,r,n);if("function"==typeof n.reduce)return h(t,r,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}function b(t,r){return Object.prototype.hasOwnProperty.call(r,t)}var v=Object.prototype.toString,j=!{toString:null}.propertyIsEnumerable("toString"),m=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],w=function(){return arguments.propertyIsEnumerable("length")}(),O=function(t,r){for(var n=0;n<t.length;){if(t[n]===r)return!0;n+=1}return!1},S=r("function"!=typeof Object.keys||w?function(t){if(Object(t)!==t)return[];var r,n,e=[],u=w&&function(){return"[object Arguments]"===v.call(arguments)?function(t){return"[object Arguments]"===v.call(t)}:function(t){return b("callee",t)}}(t);for(r in t)!b(r,t)||u&&"length"===r||(e[e.length]=r);if(j)for(n=m.length-1;n>=0;)b(r=m[n],t)&&!O(e,r)&&(e[e.length]=r),n-=1;return e}:function(t){return Object(t)!==t?[]:Object.keys(t)}),A=u(g);function E(t,r){return function(){return r.call(this,t.apply(this,arguments))}}function x(t,r){return function(){var n=arguments.length;if(0===n)return r();var e=arguments[n-1];return o(e)||"function"!=typeof e[t]?r.apply(this,arguments):e[t].apply(e,Array.prototype.slice.call(arguments,0,n-1))}}var P=u(x("slice",function(t,r,n){return Array.prototype.slice.call(n,t,r)})),k=r(x("tail",P(1,Infinity)));var I=r(function(t){return f(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()});function T(){if(0===arguments.length)throw new Error("compose requires at least one argument");return function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return e(arguments[0].length,A(E,arguments[0],k(arguments)))}.apply(this,I(arguments))}var q=function(t){return(t<10?"0":"")+t};Date;var B=function(){function t(t,r){this.xf=r,this.f=t}return t.prototype["@@transducer/init"]=c.init,t.prototype["@@transducer/result"]=c.result,t.prototype["@@transducer/step"]=function(t,r){return this.f(r)?this.xf["@@transducer/step"](t,r):t},t}(),D=n(i(["filter"],n(function(t,r){return new B(t,r)}),function(t,r){return"[object Object]"===Object.prototype.toString.call(r)?g(function(n,e){return t(r[e])&&(n[e]=r[e]),n},{},S(r)):function(t,r){for(var n=0,e=r.length,u=[];n<e;)t(r[n])&&(u[u.length]=r[n]),n+=1;return u}(t,r)}));function F(t){return"[object Number]"===Object.prototype.toString.call(t)}var L,N=n(function(t,r){if(!F(t)||!F(r))throw new TypeError("Both arguments to range must be numbers");for(var n=[],e=t;e<r;)n.push(e),e+=1;return n}),W="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";String;function X(t){return t%2==0}console.log((L=10,T(D(X),N(2))(L)))});
//# sourceMappingURL=index.umd.js.map
