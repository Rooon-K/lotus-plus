import{d as b,c as C,w as J,h as E0,o as t,a as z,b as S,n as Ws,g as Gs,u as v,m as q2,e as X1,r as T,i as R2,f as A,j as V,k as H,l as i2,p as g,q as B,s as p2,t as f1,v as Xs,x as C1,y as h,z as m2,A as R,B as O0,C as U0,D as I0,T as Y2,E as Ys,F as H2,G as Ks,H as Qs,I as Zs,J as _6,K as j0,_,L as Js,M as cn,N as an,O as s4,P as Y,Q as K,R as B2,S as $3,U as Y1,V as n4,W as q0,X as en,Y as rn,Z as E2,$ as q,a0 as Q,a1 as W0,a2 as K1,a3 as G0,a4 as Q1,a5 as sn,a6 as nn,a7 as on,a8 as X0,a9 as Z1,aa as ln,ab as Y0,ac as tn,ad as fn}from"./framework.eICATqZP.js";var K0=typeof global=="object"&&global&&global.Object===Object&&global,vn=typeof self=="object"&&self&&self.Object===Object&&self,l2=K0||vn||Function("return this")(),e2=l2.Symbol,Q0=Object.prototype,mn=Q0.hasOwnProperty,un=Q0.toString,Z2=e2?e2.toStringTag:void 0;function Hn(c){var a=mn.call(c,Z2),e=c[Z2];try{c[Z2]=void 0;var r=!0}catch{}var s=un.call(c);return r&&(a?c[Z2]=e:delete c[Z2]),s}var zn=Object.prototype,hn=zn.toString;function pn(c){return hn.call(c)}var Vn="[object Null]",dn="[object Undefined]",P6=e2?e2.toStringTag:void 0;function A2(c){return c==null?c===void 0?dn:Vn:P6&&P6 in Object(c)?Hn(c):pn(c)}function u2(c){return c!=null&&typeof c=="object"}var Mn="[object Symbol]";function J1(c){return typeof c=="symbol"||u2(c)&&A2(c)==Mn}function Z0(c,a){for(var e=-1,r=c==null?0:c.length,s=Array(r);++e<r;)s[e]=a(c[e],e,c);return s}var c2=Array.isArray,Cn=1/0,T6=e2?e2.prototype:void 0,B6=T6?T6.toString:void 0;function J0(c){if(typeof c=="string")return c;if(c2(c))return Z0(c,J0)+"";if(J1(c))return B6?B6.call(c):"";var a=c+"";return a=="0"&&1/c==-Cn?"-0":a}var Ln=/\s/;function gn(c){for(var a=c.length;a--&&Ln.test(c.charAt(a)););return a}var bn=/^\s+/;function xn(c){return c&&c.slice(0,gn(c)+1).replace(bn,"")}function o2(c){var a=typeof c;return c!=null&&(a=="object"||a=="function")}var F6=NaN,Nn=/^[-+]0x[0-9a-f]+$/i,kn=/^0b[01]+$/i,yn=/^0o[0-7]+$/i,Sn=parseInt;function D3(c){if(typeof c=="number")return c;if(J1(c))return F6;if(o2(c)){var a=typeof c.valueOf=="function"?c.valueOf():c;c=o2(a)?a+"":a}if(typeof c!="string")return c===0?c:+c;c=xn(c);var e=kn.test(c);return e||yn.test(c)?Sn(c.slice(2),e?2:8):Nn.test(c)?F6:+c}function c3(c){return c}var wn="[object AsyncFunction]",An="[object Function]",_n="[object GeneratorFunction]",Pn="[object Proxy]";function a3(c){if(!o2(c))return!1;var a=A2(c);return a==An||a==_n||a==wn||a==Pn}var N3=l2["__core-js_shared__"],$6=function(){var c=/[^.]+$/.exec(N3&&N3.keys&&N3.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}();function Tn(c){return!!$6&&$6 in c}var Bn=Function.prototype,Fn=Bn.toString;function O2(c){if(c!=null){try{return Fn.call(c)}catch{}try{return c+""}catch{}}return""}var $n=/[\\^$.*+?()[\]{}|]/g,Dn=/^\[object .+?Constructor\]$/,Rn=Function.prototype,En=Object.prototype,On=Rn.toString,Un=En.hasOwnProperty,In=RegExp("^"+On.call(Un).replace($n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function jn(c){if(!o2(c)||Tn(c))return!1;var a=a3(c)?In:Dn;return a.test(O2(c))}function qn(c,a){return c==null?void 0:c[a]}function U2(c,a){var e=qn(c,a);return jn(e)?e:void 0}var R3=U2(l2,"WeakMap");function Wn(c,a,e){switch(e.length){case 0:return c.call(a);case 1:return c.call(a,e[0]);case 2:return c.call(a,e[0],e[1]);case 3:return c.call(a,e[0],e[1],e[2])}return c.apply(a,e)}var Gn=800,Xn=16,Yn=Date.now;function Kn(c){var a=0,e=0;return function(){var r=Yn(),s=Xn-(r-e);if(e=r,s>0){if(++a>=Gn)return arguments[0]}else a=0;return c.apply(void 0,arguments)}}function Qn(c){return function(){return c}}var D1=function(){try{var c=U2(Object,"defineProperty");return c({},"",{}),c}catch{}}(),Zn=D1?function(c,a){return D1(c,"toString",{configurable:!0,enumerable:!1,value:Qn(a),writable:!0})}:c3,c8=Kn(Zn);function a8(c,a){for(var e=-1,r=c==null?0:c.length;++e<r&&a(c[e],e,c)!==!1;);return c}function Jn(c,a,e,r){for(var s=c.length,n=e+-1;++n<s;)if(a(c[n],n,c))return n;return-1}var ci=9007199254740991,ai=/^(?:0|[1-9]\d*)$/;function i4(c,a){var e=typeof c;return a=a??ci,!!a&&(e=="number"||e!="symbol"&&ai.test(c))&&c>-1&&c%1==0&&c<a}function e8(c,a,e){a=="__proto__"&&D1?D1(c,a,{configurable:!0,enumerable:!0,value:e,writable:!0}):c[a]=e}function o4(c,a){return c===a||c!==c&&a!==a}var ei=Object.prototype,ri=ei.hasOwnProperty;function l4(c,a,e){var r=c[a];(!(ri.call(c,a)&&o4(r,e))||e===void 0&&!(a in c))&&e8(c,a,e)}function si(c,a,e,r){var s=!e;e||(e={});for(var n=-1,i=a.length;++n<i;){var o=a[n],l=void 0;l===void 0&&(l=c[o]),s?e8(e,o,l):l4(e,o,l)}return e}var D6=Math.max;function r8(c,a,e){return a=D6(a===void 0?c.length-1:a,0),function(){for(var r=arguments,s=-1,n=D6(r.length-a,0),i=Array(n);++s<n;)i[s]=r[a+s];s=-1;for(var o=Array(a+1);++s<a;)o[s]=r[s];return o[a]=e(i),Wn(c,this,o)}}function ni(c,a){return c8(r8(c,a,c3),c+"")}var ii=9007199254740991;function t4(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=ii}function f4(c){return c!=null&&t4(c.length)&&!a3(c)}var oi=Object.prototype;function s8(c){var a=c&&c.constructor,e=typeof a=="function"&&a.prototype||oi;return c===e}function li(c,a){for(var e=-1,r=Array(c);++e<c;)r[e]=a(e);return r}var ti="[object Arguments]";function R6(c){return u2(c)&&A2(c)==ti}var n8=Object.prototype,fi=n8.hasOwnProperty,vi=n8.propertyIsEnumerable,v4=R6(function(){return arguments}())?R6:function(c){return u2(c)&&fi.call(c,"callee")&&!vi.call(c,"callee")};function mi(){return!1}var i8=typeof exports=="object"&&exports&&!exports.nodeType&&exports,E6=i8&&typeof module=="object"&&module&&!module.nodeType&&module,ui=E6&&E6.exports===i8,O6=ui?l2.Buffer:void 0,Hi=O6?O6.isBuffer:void 0,R1=Hi||mi,zi="[object Arguments]",hi="[object Array]",pi="[object Boolean]",Vi="[object Date]",di="[object Error]",Mi="[object Function]",Ci="[object Map]",Li="[object Number]",gi="[object Object]",bi="[object RegExp]",xi="[object Set]",Ni="[object String]",ki="[object WeakMap]",yi="[object ArrayBuffer]",Si="[object DataView]",wi="[object Float32Array]",Ai="[object Float64Array]",_i="[object Int8Array]",Pi="[object Int16Array]",Ti="[object Int32Array]",Bi="[object Uint8Array]",Fi="[object Uint8ClampedArray]",$i="[object Uint16Array]",Di="[object Uint32Array]",U={};U[wi]=U[Ai]=U[_i]=U[Pi]=U[Ti]=U[Bi]=U[Fi]=U[$i]=U[Di]=!0;U[zi]=U[hi]=U[yi]=U[pi]=U[Si]=U[Vi]=U[di]=U[Mi]=U[Ci]=U[Li]=U[gi]=U[bi]=U[xi]=U[Ni]=U[ki]=!1;function Ri(c){return u2(c)&&t4(c.length)&&!!U[A2(c)]}function m4(c){return function(a){return c(a)}}var o8=typeof exports=="object"&&exports&&!exports.nodeType&&exports,c1=o8&&typeof module=="object"&&module&&!module.nodeType&&module,Ei=c1&&c1.exports===o8,k3=Ei&&K0.process,G2=function(){try{var c=c1&&c1.require&&c1.require("util").types;return c||k3&&k3.binding&&k3.binding("util")}catch{}}(),U6=G2&&G2.isTypedArray,l8=U6?m4(U6):Ri,Oi=Object.prototype,Ui=Oi.hasOwnProperty;function t8(c,a){var e=c2(c),r=!e&&v4(c),s=!e&&!r&&R1(c),n=!e&&!r&&!s&&l8(c),i=e||r||s||n,o=i?li(c.length,String):[],l=o.length;for(var f in c)(a||Ui.call(c,f))&&!(i&&(f=="length"||s&&(f=="offset"||f=="parent")||n&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||i4(f,l)))&&o.push(f);return o}function f8(c,a){return function(e){return c(a(e))}}var Ii=f8(Object.keys,Object),ji=Object.prototype,qi=ji.hasOwnProperty;function Wi(c){if(!s8(c))return Ii(c);var a=[];for(var e in Object(c))qi.call(c,e)&&e!="constructor"&&a.push(e);return a}function u4(c){return f4(c)?t8(c):Wi(c)}function Gi(c){var a=[];if(c!=null)for(var e in Object(c))a.push(e);return a}var Xi=Object.prototype,Yi=Xi.hasOwnProperty;function Ki(c){if(!o2(c))return Gi(c);var a=s8(c),e=[];for(var r in c)r=="constructor"&&(a||!Yi.call(c,r))||e.push(r);return e}function Qi(c){return f4(c)?t8(c,!0):Ki(c)}var Zi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ji=/^\w*$/;function H4(c,a){if(c2(c))return!1;var e=typeof c;return e=="number"||e=="symbol"||e=="boolean"||c==null||J1(c)?!0:Ji.test(c)||!Zi.test(c)||a!=null&&c in Object(a)}var r1=U2(Object,"create");function co(){this.__data__=r1?r1(null):{},this.size=0}function ao(c){var a=this.has(c)&&delete this.__data__[c];return this.size-=a?1:0,a}var eo="__lodash_hash_undefined__",ro=Object.prototype,so=ro.hasOwnProperty;function no(c){var a=this.__data__;if(r1){var e=a[c];return e===eo?void 0:e}return so.call(a,c)?a[c]:void 0}var io=Object.prototype,oo=io.hasOwnProperty;function lo(c){var a=this.__data__;return r1?a[c]!==void 0:oo.call(a,c)}var to="__lodash_hash_undefined__";function fo(c,a){var e=this.__data__;return this.size+=this.has(c)?0:1,e[c]=r1&&a===void 0?to:a,this}function F2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}F2.prototype.clear=co;F2.prototype.delete=ao;F2.prototype.get=no;F2.prototype.has=lo;F2.prototype.set=fo;function vo(){this.__data__=[],this.size=0}function e3(c,a){for(var e=c.length;e--;)if(o4(c[e][0],a))return e;return-1}var mo=Array.prototype,uo=mo.splice;function Ho(c){var a=this.__data__,e=e3(a,c);if(e<0)return!1;var r=a.length-1;return e==r?a.pop():uo.call(a,e,1),--this.size,!0}function zo(c){var a=this.__data__,e=e3(a,c);return e<0?void 0:a[e][1]}function ho(c){return e3(this.__data__,c)>-1}function po(c,a){var e=this.__data__,r=e3(e,c);return r<0?(++this.size,e.push([c,a])):e[r][1]=a,this}function L2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}L2.prototype.clear=vo;L2.prototype.delete=Ho;L2.prototype.get=zo;L2.prototype.has=ho;L2.prototype.set=po;var s1=U2(l2,"Map");function Vo(){this.size=0,this.__data__={hash:new F2,map:new(s1||L2),string:new F2}}function Mo(c){var a=typeof c;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?c!=="__proto__":c===null}function r3(c,a){var e=c.__data__;return Mo(a)?e[typeof a=="string"?"string":"hash"]:e.map}function Co(c){var a=r3(this,c).delete(c);return this.size-=a?1:0,a}function Lo(c){return r3(this,c).get(c)}function go(c){return r3(this,c).has(c)}function bo(c,a){var e=r3(this,c),r=e.size;return e.set(c,a),this.size+=e.size==r?0:1,this}function g2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}g2.prototype.clear=Vo;g2.prototype.delete=Co;g2.prototype.get=Lo;g2.prototype.has=go;g2.prototype.set=bo;var xo="Expected a function";function z4(c,a){if(typeof c!="function"||a!=null&&typeof a!="function")throw new TypeError(xo);var e=function(){var r=arguments,s=a?a.apply(this,r):r[0],n=e.cache;if(n.has(s))return n.get(s);var i=c.apply(this,r);return e.cache=n.set(s,i)||n,i};return e.cache=new(z4.Cache||g2),e}z4.Cache=g2;var No=500;function ko(c){var a=z4(c,function(r){return e.size===No&&e.clear(),r}),e=a.cache;return a}var yo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,So=/\\(\\)?/g,wo=ko(function(c){var a=[];return c.charCodeAt(0)===46&&a.push(""),c.replace(yo,function(e,r,s,n){a.push(s?n.replace(So,"$1"):r||e)}),a});function Ao(c){return c==null?"":J0(c)}function v1(c,a){return c2(c)?c:H4(c,a)?[c]:wo(Ao(c))}var _o=1/0;function K2(c){if(typeof c=="string"||J1(c))return c;var a=c+"";return a=="0"&&1/c==-_o?"-0":a}function h4(c,a){a=v1(a,c);for(var e=0,r=a.length;c!=null&&e<r;)c=c[K2(a[e++])];return e&&e==r?c:void 0}function v8(c,a,e){var r=c==null?void 0:h4(c,a);return r===void 0?e:r}function p4(c,a){for(var e=-1,r=a.length,s=c.length;++e<r;)c[s+e]=a[e];return c}var I6=e2?e2.isConcatSpreadable:void 0;function Po(c){return c2(c)||v4(c)||!!(I6&&c&&c[I6])}function To(c,a,e,r,s){var n=-1,i=c.length;for(e||(e=Po),s||(s=[]);++n<i;){var o=c[n];e(o)?p4(s,o):s[s.length]=o}return s}function Bo(c){var a=c==null?0:c.length;return a?To(c):[]}function Fo(c){return c8(r8(c,void 0,Bo),c+"")}var m8=f8(Object.getPrototypeOf,Object),$o="[object Object]",Do=Function.prototype,Ro=Object.prototype,u8=Do.toString,Eo=Ro.hasOwnProperty,Oo=u8.call(Object);function Uo(c){if(!u2(c)||A2(c)!=$o)return!1;var a=m8(c);if(a===null)return!0;var e=Eo.call(a,"constructor")&&a.constructor;return typeof e=="function"&&e instanceof e&&u8.call(e)==Oo}function Io(c,a,e){var r=-1,s=c.length;a<0&&(a=-a>s?0:s+a),e=e>s?s:e,e<0&&(e+=s),s=a>e?0:e-a>>>0,a>>>=0;for(var n=Array(s);++r<s;)n[r]=c[r+a];return n}function jo(){this.__data__=new L2,this.size=0}function qo(c){var a=this.__data__,e=a.delete(c);return this.size=a.size,e}function Wo(c){return this.__data__.get(c)}function Go(c){return this.__data__.has(c)}var Xo=200;function Yo(c,a){var e=this.__data__;if(e instanceof L2){var r=e.__data__;if(!s1||r.length<Xo-1)return r.push([c,a]),this.size=++e.size,this;e=this.__data__=new g2(r)}return e.set(c,a),this.size=e.size,this}function f2(c){var a=this.__data__=new L2(c);this.size=a.size}f2.prototype.clear=jo;f2.prototype.delete=qo;f2.prototype.get=Wo;f2.prototype.has=Go;f2.prototype.set=Yo;var H8=typeof exports=="object"&&exports&&!exports.nodeType&&exports,j6=H8&&typeof module=="object"&&module&&!module.nodeType&&module,Ko=j6&&j6.exports===H8,q6=Ko?l2.Buffer:void 0;q6&&q6.allocUnsafe;function Qo(c,a){return c.slice()}function Zo(c,a){for(var e=-1,r=c==null?0:c.length,s=0,n=[];++e<r;){var i=c[e];a(i,e,c)&&(n[s++]=i)}return n}function z8(){return[]}var Jo=Object.prototype,cl=Jo.propertyIsEnumerable,W6=Object.getOwnPropertySymbols,h8=W6?function(c){return c==null?[]:(c=Object(c),Zo(W6(c),function(a){return cl.call(c,a)}))}:z8,al=Object.getOwnPropertySymbols,el=al?function(c){for(var a=[];c;)p4(a,h8(c)),c=m8(c);return a}:z8;function p8(c,a,e){var r=a(c);return c2(c)?r:p4(r,e(c))}function G6(c){return p8(c,u4,h8)}function V8(c){return p8(c,Qi,el)}var E3=U2(l2,"DataView"),O3=U2(l2,"Promise"),U3=U2(l2,"Set"),X6="[object Map]",rl="[object Object]",Y6="[object Promise]",K6="[object Set]",Q6="[object WeakMap]",Z6="[object DataView]",sl=O2(E3),nl=O2(s1),il=O2(O3),ol=O2(U3),ll=O2(R3),s2=A2;(E3&&s2(new E3(new ArrayBuffer(1)))!=Z6||s1&&s2(new s1)!=X6||O3&&s2(O3.resolve())!=Y6||U3&&s2(new U3)!=K6||R3&&s2(new R3)!=Q6)&&(s2=function(c){var a=A2(c),e=a==rl?c.constructor:void 0,r=e?O2(e):"";if(r)switch(r){case sl:return Z6;case nl:return X6;case il:return Y6;case ol:return K6;case ll:return Q6}return a});var tl=Object.prototype,fl=tl.hasOwnProperty;function vl(c){var a=c.length,e=new c.constructor(a);return a&&typeof c[0]=="string"&&fl.call(c,"index")&&(e.index=c.index,e.input=c.input),e}var E1=l2.Uint8Array;function V4(c){var a=new c.constructor(c.byteLength);return new E1(a).set(new E1(c)),a}function ml(c,a){var e=V4(c.buffer);return new c.constructor(e,c.byteOffset,c.byteLength)}var ul=/\w*$/;function Hl(c){var a=new c.constructor(c.source,ul.exec(c));return a.lastIndex=c.lastIndex,a}var J6=e2?e2.prototype:void 0,c0=J6?J6.valueOf:void 0;function zl(c){return c0?Object(c0.call(c)):{}}function hl(c,a){var e=V4(c.buffer);return new c.constructor(e,c.byteOffset,c.length)}var pl="[object Boolean]",Vl="[object Date]",dl="[object Map]",Ml="[object Number]",Cl="[object RegExp]",Ll="[object Set]",gl="[object String]",bl="[object Symbol]",xl="[object ArrayBuffer]",Nl="[object DataView]",kl="[object Float32Array]",yl="[object Float64Array]",Sl="[object Int8Array]",wl="[object Int16Array]",Al="[object Int32Array]",_l="[object Uint8Array]",Pl="[object Uint8ClampedArray]",Tl="[object Uint16Array]",Bl="[object Uint32Array]";function Fl(c,a,e){var r=c.constructor;switch(a){case xl:return V4(c);case pl:case Vl:return new r(+c);case Nl:return ml(c);case kl:case yl:case Sl:case wl:case Al:case _l:case Pl:case Tl:case Bl:return hl(c);case dl:return new r;case Ml:case gl:return new r(c);case Cl:return Hl(c);case Ll:return new r;case bl:return zl(c)}}var $l="[object Map]";function Dl(c){return u2(c)&&s2(c)==$l}var a0=G2&&G2.isMap,Rl=a0?m4(a0):Dl,El="[object Set]";function Ol(c){return u2(c)&&s2(c)==El}var e0=G2&&G2.isSet,Ul=e0?m4(e0):Ol,Il=1,d8="[object Arguments]",jl="[object Array]",ql="[object Boolean]",Wl="[object Date]",Gl="[object Error]",M8="[object Function]",Xl="[object GeneratorFunction]",Yl="[object Map]",Kl="[object Number]",C8="[object Object]",Ql="[object RegExp]",Zl="[object Set]",Jl="[object String]",ct="[object Symbol]",at="[object WeakMap]",et="[object ArrayBuffer]",rt="[object DataView]",st="[object Float32Array]",nt="[object Float64Array]",it="[object Int8Array]",ot="[object Int16Array]",lt="[object Int32Array]",tt="[object Uint8Array]",ft="[object Uint8ClampedArray]",vt="[object Uint16Array]",mt="[object Uint32Array]",O={};O[d8]=O[jl]=O[et]=O[rt]=O[ql]=O[Wl]=O[st]=O[nt]=O[it]=O[ot]=O[lt]=O[Yl]=O[Kl]=O[C8]=O[Ql]=O[Zl]=O[Jl]=O[ct]=O[tt]=O[ft]=O[vt]=O[mt]=!0;O[Gl]=O[M8]=O[at]=!1;function T1(c,a,e,r,s,n){var i,o=a&Il;if(e&&(i=s?e(c,r,s,n):e(c)),i!==void 0)return i;if(!o2(c))return c;var l=c2(c);if(l)i=vl(c);else{var f=s2(c),m=f==M8||f==Xl;if(R1(c))return Qo(c);if(f==C8||f==d8||m&&!s)i={};else{if(!O[f])return s?c:{};i=Fl(c,f)}}n||(n=new f2);var u=n.get(c);if(u)return u;n.set(c,i),Ul(c)?c.forEach(function(x){i.add(T1(x,a,e,x,c,n))}):Rl(c)&&c.forEach(function(x,y){i.set(y,T1(x,a,e,y,c,n))});var p=V8,M=l?void 0:p(c);return a8(M||c,function(x,y){M&&(y=x,x=c[y]),l4(i,y,T1(x,a,e,y,c,n))}),i}var ut="__lodash_hash_undefined__";function Ht(c){return this.__data__.set(c,ut),this}function zt(c){return this.__data__.has(c)}function O1(c){var a=-1,e=c==null?0:c.length;for(this.__data__=new g2;++a<e;)this.add(c[a])}O1.prototype.add=O1.prototype.push=Ht;O1.prototype.has=zt;function ht(c,a){for(var e=-1,r=c==null?0:c.length;++e<r;)if(a(c[e],e,c))return!0;return!1}function pt(c,a){return c.has(a)}var Vt=1,dt=2;function L8(c,a,e,r,s,n){var i=e&Vt,o=c.length,l=a.length;if(o!=l&&!(i&&l>o))return!1;var f=n.get(c),m=n.get(a);if(f&&m)return f==a&&m==c;var u=-1,p=!0,M=e&dt?new O1:void 0;for(n.set(c,a),n.set(a,c);++u<o;){var x=c[u],y=a[u];if(r)var N=i?r(y,x,u,a,c,n):r(x,y,u,c,a,n);if(N!==void 0){if(N)continue;p=!1;break}if(M){if(!ht(a,function(d,L){if(!pt(M,L)&&(x===d||s(x,d,e,r,n)))return M.push(L)})){p=!1;break}}else if(!(x===y||s(x,y,e,r,n))){p=!1;break}}return n.delete(c),n.delete(a),p}function Mt(c){var a=-1,e=Array(c.size);return c.forEach(function(r,s){e[++a]=[s,r]}),e}function Ct(c){var a=-1,e=Array(c.size);return c.forEach(function(r){e[++a]=r}),e}var Lt=1,gt=2,bt="[object Boolean]",xt="[object Date]",Nt="[object Error]",kt="[object Map]",yt="[object Number]",St="[object RegExp]",wt="[object Set]",At="[object String]",_t="[object Symbol]",Pt="[object ArrayBuffer]",Tt="[object DataView]",r0=e2?e2.prototype:void 0,y3=r0?r0.valueOf:void 0;function Bt(c,a,e,r,s,n,i){switch(e){case Tt:if(c.byteLength!=a.byteLength||c.byteOffset!=a.byteOffset)return!1;c=c.buffer,a=a.buffer;case Pt:return!(c.byteLength!=a.byteLength||!n(new E1(c),new E1(a)));case bt:case xt:case yt:return o4(+c,+a);case Nt:return c.name==a.name&&c.message==a.message;case St:case At:return c==a+"";case kt:var o=Mt;case wt:var l=r&Lt;if(o||(o=Ct),c.size!=a.size&&!l)return!1;var f=i.get(c);if(f)return f==a;r|=gt,i.set(c,a);var m=L8(o(c),o(a),r,s,n,i);return i.delete(c),m;case _t:if(y3)return y3.call(c)==y3.call(a)}return!1}var Ft=1,$t=Object.prototype,Dt=$t.hasOwnProperty;function Rt(c,a,e,r,s,n){var i=e&Ft,o=G6(c),l=o.length,f=G6(a),m=f.length;if(l!=m&&!i)return!1;for(var u=l;u--;){var p=o[u];if(!(i?p in a:Dt.call(a,p)))return!1}var M=n.get(c),x=n.get(a);if(M&&x)return M==a&&x==c;var y=!0;n.set(c,a),n.set(a,c);for(var N=i;++u<l;){p=o[u];var d=c[p],L=a[p];if(r)var P=i?r(L,d,p,a,c,n):r(d,L,p,c,a,n);if(!(P===void 0?d===L||s(d,L,e,r,n):P)){y=!1;break}N||(N=p=="constructor")}if(y&&!N){var D=c.constructor,$=a.constructor;D!=$&&"constructor"in c&&"constructor"in a&&!(typeof D=="function"&&D instanceof D&&typeof $=="function"&&$ instanceof $)&&(y=!1)}return n.delete(c),n.delete(a),y}var Et=1,s0="[object Arguments]",n0="[object Array]",L1="[object Object]",Ot=Object.prototype,i0=Ot.hasOwnProperty;function Ut(c,a,e,r,s,n){var i=c2(c),o=c2(a),l=i?n0:s2(c),f=o?n0:s2(a);l=l==s0?L1:l,f=f==s0?L1:f;var m=l==L1,u=f==L1,p=l==f;if(p&&R1(c)){if(!R1(a))return!1;i=!0,m=!1}if(p&&!m)return n||(n=new f2),i||l8(c)?L8(c,a,e,r,s,n):Bt(c,a,l,e,r,s,n);if(!(e&Et)){var M=m&&i0.call(c,"__wrapped__"),x=u&&i0.call(a,"__wrapped__");if(M||x){var y=M?c.value():c,N=x?a.value():a;return n||(n=new f2),s(y,N,e,r,n)}}return p?(n||(n=new f2),Rt(c,a,e,r,s,n)):!1}function d4(c,a,e,r,s){return c===a?!0:c==null||a==null||!u2(c)&&!u2(a)?c!==c&&a!==a:Ut(c,a,e,r,d4,s)}var It=1,jt=2;function qt(c,a,e,r){var s=e.length,n=s;if(c==null)return!n;for(c=Object(c);s--;){var i=e[s];if(i[2]?i[1]!==c[i[0]]:!(i[0]in c))return!1}for(;++s<n;){i=e[s];var o=i[0],l=c[o],f=i[1];if(i[2]){if(l===void 0&&!(o in c))return!1}else{var m=new f2,u;if(!(u===void 0?d4(f,l,It|jt,r,m):u))return!1}}return!0}function g8(c){return c===c&&!o2(c)}function Wt(c){for(var a=u4(c),e=a.length;e--;){var r=a[e],s=c[r];a[e]=[r,s,g8(s)]}return a}function b8(c,a){return function(e){return e==null?!1:e[c]===a&&(a!==void 0||c in Object(e))}}function Gt(c){var a=Wt(c);return a.length==1&&a[0][2]?b8(a[0][0],a[0][1]):function(e){return e===c||qt(e,c,a)}}function Xt(c,a){return c!=null&&a in Object(c)}function Yt(c,a,e){a=v1(a,c);for(var r=-1,s=a.length,n=!1;++r<s;){var i=K2(a[r]);if(!(n=c!=null&&e(c,i)))break;c=c[i]}return n||++r!=s?n:(s=c==null?0:c.length,!!s&&t4(s)&&i4(i,s)&&(c2(c)||v4(c)))}function Kt(c,a){return c!=null&&Yt(c,a,Xt)}var Qt=1,Zt=2;function Jt(c,a){return H4(c)&&g8(a)?b8(K2(c),a):function(e){var r=v8(e,c);return r===void 0&&r===a?Kt(e,c):d4(a,r,Qt|Zt)}}function cf(c){return function(a){return a==null?void 0:a[c]}}function af(c){return function(a){return h4(a,c)}}function ef(c){return H4(c)?cf(K2(c)):af(c)}function rf(c){return typeof c=="function"?c:c==null?c3:typeof c=="object"?c2(c)?Jt(c[0],c[1]):Gt(c):ef(c)}function sf(c){return function(a,e,r){for(var s=-1,n=Object(a),i=r(a),o=i.length;o--;){var l=i[++s];if(e(n[l],l,n)===!1)break}return a}}var nf=sf();function of(c,a){return c&&nf(c,a,u4)}function lf(c,a){return function(e,r){if(e==null)return e;if(!f4(e))return c(e,r);for(var s=e.length,n=-1,i=Object(e);++n<s&&r(i[n],n,i)!==!1;);return e}}var tf=lf(of),S3=function(){return l2.Date.now()},ff="Expected a function",vf=Math.max,mf=Math.min;function uf(c,a,e){var r,s,n,i,o,l,f=0,m=!1,u=!1,p=!0;if(typeof c!="function")throw new TypeError(ff);a=D3(a)||0,o2(e)&&(m=!!e.leading,u="maxWait"in e,n=u?vf(D3(e.maxWait)||0,a):n,p="trailing"in e?!!e.trailing:p);function M(E){var G=r,z2=s;return r=s=void 0,f=E,i=c.apply(z2,G),i}function x(E){return f=E,o=setTimeout(d,a),m?M(E):i}function y(E){var G=E-l,z2=E-f,r2=a-G;return u?mf(r2,n-z2):r2}function N(E){var G=E-l,z2=E-f;return l===void 0||G>=a||G<0||u&&z2>=n}function d(){var E=S3();if(N(E))return L(E);o=setTimeout(d,y(E))}function L(E){return o=void 0,p&&r?M(E):(r=s=void 0,i)}function P(){o!==void 0&&clearTimeout(o),f=0,r=l=s=o=void 0}function D(){return o===void 0?i:L(S3())}function $(){var E=S3(),G=N(E);if(r=arguments,s=this,l=E,G){if(o===void 0)return x(l);if(u)return clearTimeout(o),o=setTimeout(d,a),M(l)}return o===void 0&&(o=setTimeout(d,a)),i}return $.cancel=P,$.flush=D,$}var Hf="Expected a function";function zf(c,a,e){if(typeof c!="function")throw new TypeError(Hf);return setTimeout(function(){c.apply(void 0,e)},a)}var hf=ni(function(c,a,e){return zf(c,D3(a)||0,e)});function pf(c){var a=c==null?0:c.length;return a?c[a-1]:void 0}function Vf(c){return typeof c=="function"?c:c3}function M4(c,a){var e=c2(c)?a8:tf;return e(c,Vf(a))}function C4(c,a,e){var r=c==null?0:c.length;if(!r)return-1;var s=0;return Jn(c,rf(a),s)}var df="[object String]";function Mf(c){return typeof c=="string"||!c2(c)&&u2(c)&&A2(c)==df}function Cf(c,a){return a.length<2?c:h4(c,Io(a,0,-1))}function Lf(c,a){return a=v1(a,c),c=Cf(c,a),c==null||delete c[K2(pf(a))]}function gf(c){return Uo(c)?void 0:c}var bf=1,xf=2,Nf=4,kf=Fo(function(c,a){var e={};if(c==null)return e;var r=!1;a=Z0(a,function(n){return n=v1(n,c),r||(r=n.length>1),n}),si(c,V8(c),e),r&&(e=T1(e,bf|xf|Nf,gf));for(var s=a.length;s--;)Lf(e,a[s]);return e});function yf(c,a,e,r){if(!o2(c))return c;a=v1(a,c);for(var s=-1,n=a.length,i=n-1,o=c;o!=null&&++s<n;){var l=K2(a[s]),f=e;if(l==="__proto__"||l==="constructor"||l==="prototype")return c;if(s!=i){var m=o[l];f=void 0,f===void 0&&(f=o2(m)?m:i4(a[s+1])?[]:{})}l4(o,l,f),o=o[l]}return c}function Sf(c,a,e){return c==null?c:yf(c,a,e)}var wf="Expected a function";function Af(c,a,e){var r=!0,s=!0;if(typeof c!="function")throw new TypeError(wf);return o2(e)&&(r="leading"in e?!!e.leading:r,s="trailing"in e?!!e.trailing:s),uf(c,a,{leading:r,maxWait:a,trailing:s})}function _f(c){return a=>M4(c,e=>a.use(e))}const _2=c=>(c.install=a=>{const e=c.name;a.component(e,c)},c),Pf=(c,a)=>(c.install=e=>{e.config.globalProperties[a]=c},c),Tf=b({props:{vNode:{type:[String,Object,Function],required:!0}},setup(c){return()=>a3(c.vNode)?c.vNode():c.vNode}}),Bf=new Map([["info","circle-info"],["success","check-circle"],["warning","circle-exclamation"],["danger","circle-xmark"],["error","circle-xmark"]]);function o0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?o0(Object(e),!0).forEach(function(r){X(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):o0(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function U1(c){"@babel/helpers - typeof";return U1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},U1(c)}function Ff(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function $f(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Df(c,a,e){return a&&$f(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function X(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function L4(c,a){return Ef(c)||Uf(c,a)||x8(c,a)||jf()}function m1(c){return Rf(c)||Of(c)||x8(c)||If()}function Rf(c){if(Array.isArray(c))return I3(c)}function Ef(c){if(Array.isArray(c))return c}function Of(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Uf(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,o;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(l){n=!0,o=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw o}}return r}}function x8(c,a){if(c){if(typeof c=="string")return I3(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return I3(c,a)}}function I3(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function If(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l0=function(){},g4={},N8={},k8=null,y8={mark:l0,measure:l0};try{typeof window<"u"&&(g4=window),typeof document<"u"&&(N8=document),typeof MutationObserver<"u"&&(k8=MutationObserver),typeof performance<"u"&&(y8=performance)}catch{}var qf=g4.navigator||{},t0=qf.userAgent,f0=t0===void 0?"":t0,y2=g4,j=N8,v0=k8,g1=y8;y2.document;var b2=!!j.documentElement&&!!j.head&&typeof j.addEventListener=="function"&&typeof j.createElement=="function",S8=~f0.indexOf("MSIE")||~f0.indexOf("Trident/"),b1,x1,N1,k1,y1,d2="___FONT_AWESOME___",j3=16,w8="fa",A8="svg-inline--fa",$2="data-fa-i2svg",q3="data-fa-pseudo-element",Wf="data-fa-pseudo-element-pending",b4="data-prefix",x4="data-icon",m0="fontawesome-i2svg",Gf="async",Xf=["HTML","HEAD","STYLE","SCRIPT"],_8=function(){try{return!0}catch{return!1}}(),I="classic",W="sharp",N4=[I,W];function u1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[I]}})}var n1=u1((b1={},X(b1,I,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),X(b1,W,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),b1)),i1=u1((x1={},X(x1,I,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),X(x1,W,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),x1)),o1=u1((N1={},X(N1,I,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),X(N1,W,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),N1)),Yf=u1((k1={},X(k1,I,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),X(k1,W,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),k1)),Kf=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,P8="fa-layers-text",Qf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Zf=u1((y1={},X(y1,I,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),X(y1,W,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),y1)),T8=[1,2,3,4,5,6,7,8,9,10],Jf=T8.concat([11,12,13,14,15,16,17,18,19,20]),cv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],P2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l1=new Set;Object.keys(i1[I]).map(l1.add.bind(l1));Object.keys(i1[W]).map(l1.add.bind(l1));var av=[].concat(N4,m1(l1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",P2.GROUP,P2.SWAP_OPACITY,P2.PRIMARY,P2.SECONDARY]).concat(T8.map(function(c){return"".concat(c,"x")})).concat(Jf.map(function(c){return"w-".concat(c)})),a1=y2.FontAwesomeConfig||{};function ev(c){var a=j.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function rv(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(j&&typeof j.querySelector=="function"){var sv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];sv.forEach(function(c){var a=L4(c,2),e=a[0],r=a[1],s=rv(ev(e));s!=null&&(a1[r]=s)})}var B8={styleDefault:"solid",familyDefault:"classic",cssPrefix:w8,replacementClass:A8,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};a1.familyPrefix&&(a1.cssPrefix=a1.familyPrefix);var X2=k(k({},B8),a1);X2.autoReplaceSvg||(X2.observeMutations=!1);var w={};Object.keys(B8).forEach(function(c){Object.defineProperty(w,c,{enumerable:!0,set:function(e){X2[c]=e,e1.forEach(function(r){return r(w)})},get:function(){return X2[c]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(a){X2.cssPrefix=a,e1.forEach(function(e){return e(w)})},get:function(){return X2.cssPrefix}});y2.FontAwesomeConfig=w;var e1=[];function nv(c){return e1.push(c),function(){e1.splice(e1.indexOf(c),1)}}var N2=j3,t2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function iv(c){if(!(!c||!b2)){var a=j.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=j.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return j.head.insertBefore(a,r),c}}var ov="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function t1(){for(var c=12,a="";c-- >0;)a+=ov[Math.random()*62|0];return a}function Q2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function k4(c){return c.classList?Q2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function F8(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lv(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(F8(c[e]),'" ')},"").trim()}function s3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function y4(c){return c.size!==t2.size||c.x!==t2.x||c.y!==t2.y||c.rotate!==t2.rotate||c.flipX||c.flipY}function tv(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:f}}function fv(c){var a=c.transform,e=c.width,r=e===void 0?j3:e,s=c.height,n=s===void 0?j3:s,i=c.startCentered,o=i===void 0?!1:i,l="";return o&&S8?l+="translate(".concat(a.x/N2-r/2,"em, ").concat(a.y/N2-n/2,"em) "):o?l+="translate(calc(-50% + ".concat(a.x/N2,"em), calc(-50% + ").concat(a.y/N2,"em)) "):l+="translate(".concat(a.x/N2,"em, ").concat(a.y/N2,"em) "),l+="scale(".concat(a.size/N2*(a.flipX?-1:1),", ").concat(a.size/N2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var vv=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $8(){var c=w8,a=A8,e=w.cssPrefix,r=w.replacementClass,s=vv;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(o,".".concat(r))}return s}var u0=!1;function w3(){w.autoAddCss&&!u0&&(iv($8()),u0=!0)}var mv={mixout:function(){return{dom:{css:$8,insertCss:w3}}},hooks:function(){return{beforeDOMElementCreation:function(){w3()},beforeI2svg:function(){w3()}}}},M2=y2||{};M2[d2]||(M2[d2]={});M2[d2].styles||(M2[d2].styles={});M2[d2].hooks||(M2[d2].hooks={});M2[d2].shims||(M2[d2].shims=[]);var n2=M2[d2],D8=[],uv=function c(){j.removeEventListener("DOMContentLoaded",c),I1=1,D8.map(function(a){return a()})},I1=!1;b2&&(I1=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),I1||j.addEventListener("DOMContentLoaded",uv));function Hv(c){b2&&(I1?setTimeout(c,0):D8.push(c))}function H1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?F8(c):"<".concat(a," ").concat(lv(r),">").concat(n.map(H1).join(""),"</").concat(a,">")}function H0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var A3=function(a,e,r,s){var n=Object.keys(a),i=n.length,o=e,l,f,m;for(r===void 0?(l=1,m=a[n[0]]):(l=0,m=r);l<i;l++)f=n[l],m=o(m,a[f],f,a);return m};function zv(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function W3(c){var a=zv(c);return a.length===1?a[0].toString(16):null}function hv(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function z0(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function G3(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=z0(a);typeof n2.hooks.addPack=="function"&&!s?n2.hooks.addPack(c,z0(a)):n2.styles[c]=k(k({},n2.styles[c]||{}),n),c==="fas"&&G3("fa",a)}var S1,w1,A1,I2=n2.styles,pv=n2.shims,Vv=(S1={},X(S1,I,Object.values(o1[I])),X(S1,W,Object.values(o1[W])),S1),S4=null,R8={},E8={},O8={},U8={},I8={},dv=(w1={},X(w1,I,Object.keys(n1[I])),X(w1,W,Object.keys(n1[W])),w1);function Mv(c){return~av.indexOf(c)}function Cv(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!Mv(s)?s:null}var j8=function(){var a=function(n){return A3(I2,function(i,o,l){return i[l]=A3(o,n,{}),i},{})};R8=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var o=n[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){s[l.toString(16)]=i})}return s}),E8=a(function(s,n,i){if(s[i]=i,n[2]){var o=n[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){s[l]=i})}return s}),I8=a(function(s,n,i){var o=n[2];return s[i]=i,o.forEach(function(l){s[l]=i}),s});var e="far"in I2||w.autoFetchSvg,r=A3(pv,function(s,n){var i=n[0],o=n[1],l=n[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(s.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:o,iconName:l}),s},{names:{},unicodes:{}});O8=r.names,U8=r.unicodes,S4=n3(w.styleDefault,{family:w.familyDefault})};nv(function(c){S4=n3(c.styleDefault,{family:w.familyDefault})});j8();function w4(c,a){return(R8[c]||{})[a]}function Lv(c,a){return(E8[c]||{})[a]}function T2(c,a){return(I8[c]||{})[a]}function q8(c){return O8[c]||{prefix:null,iconName:null}}function gv(c){var a=U8[c],e=w4("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function S2(){return S4}var A4=function(){return{prefix:null,iconName:null,rest:[]}};function n3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?I:e,s=n1[r][c],n=i1[r][c]||i1[r][s],i=c in n2.styles?c:null;return n||i||null}var h0=(A1={},X(A1,I,Object.keys(o1[I])),X(A1,W,Object.keys(o1[W])),A1);function i3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},X(a,I,"".concat(w.cssPrefix,"-").concat(I)),X(a,W,"".concat(w.cssPrefix,"-").concat(W)),a),i=null,o=I;(c.includes(n[I])||c.some(function(f){return h0[I].includes(f)}))&&(o=I),(c.includes(n[W])||c.some(function(f){return h0[W].includes(f)}))&&(o=W);var l=c.reduce(function(f,m){var u=Cv(w.cssPrefix,m);if(I2[m]?(m=Vv[o].includes(m)?Yf[o][m]:m,i=m,f.prefix=m):dv[o].indexOf(m)>-1?(i=m,f.prefix=n3(m,{family:o})):u?f.iconName=u:m!==w.replacementClass&&m!==n[I]&&m!==n[W]&&f.rest.push(m),!s&&f.prefix&&f.iconName){var p=i==="fa"?q8(f.iconName):{},M=T2(f.prefix,f.iconName);p.prefix&&(i=null),f.iconName=p.iconName||M||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!I2.far&&I2.fas&&!w.autoFetchSvg&&(f.prefix="fas")}return f},A4());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===W&&(I2.fass||w.autoFetchSvg)&&(l.prefix="fass",l.iconName=T2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=S2()||"fas"),l}var bv=function(){function c(){Ff(this,c),this.definitions={}}return Df(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=k(k({},e.definitions[o]||{}),i[o]),G3(o,i[o]);var l=o1[I][o];l&&G3(l,i[o]),j8()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],o=i.prefix,l=i.iconName,f=i.icon,m=f[2];e[o]||(e[o]={}),m.length>0&&m.forEach(function(u){typeof u=="string"&&(e[o][u]=f)}),e[o][l]=f}),e}}]),c}(),p0=[],j2={},W2={},xv=Object.keys(W2);function Nv(c,a){var e=a.mixoutsTo;return p0=c,j2={},Object.keys(W2).forEach(function(r){xv.indexOf(r)===-1&&delete W2[r]}),p0.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),U1(s[i])==="object"&&Object.keys(s[i]).forEach(function(o){e[i]||(e[i]={}),e[i][o]=s[i][o]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){j2[i]||(j2[i]=[]),j2[i].push(n[i])})}r.provides&&r.provides(W2)}),e}function X3(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=j2[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function D2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=j2[c]||[];s.forEach(function(n){n.apply(null,e)})}function C2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return W2[c]?W2[c].apply(null,a):void 0}function Y3(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||S2();if(a)return a=T2(e,a)||a,H0(W8.definitions,e,a)||H0(n2.styles,e,a)}var W8=new bv,kv=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,D2("noAuto")},yv={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return b2?(D2("beforeI2svg",a),C2("pseudoElements2svg",a),C2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,Hv(function(){wv({autoReplaceSvgRoot:e}),D2("watch",a)})}},Sv={icon:function(a){if(a===null)return null;if(U1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:T2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=n3(a[0]);return{prefix:r,iconName:T2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(w.cssPrefix,"-"))>-1||a.match(Kf))){var s=i3(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||S2(),iconName:T2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=S2();return{prefix:n,iconName:T2(n,a)||a}}}},a2={noAuto:kv,config:w,dom:yv,parse:Sv,library:W8,findIconDefinition:Y3,toHtml:H1},wv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?j:e;(Object.keys(n2.styles).length>0||w.autoFetchSvg)&&b2&&w.autoReplaceSvg&&a2.dom.i2svg({node:r})};function o3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return H1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(b2){var r=j.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Av(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(y4(i)&&e.found&&!r.found){var o=e.width,l=e.height,f={x:o/l/2,y:.5};s.style=s3(k(k({},n),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function _v(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(w.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},s),{},{id:i}),children:r}]}]}function _4(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,o=c.symbol,l=c.title,f=c.maskId,m=c.titleId,u=c.extra,p=c.watchable,M=p===void 0?!1:p,x=r.found?r:e,y=x.width,N=x.height,d=s==="fak",L=[w.replacementClass,n?"".concat(w.cssPrefix,"-").concat(n):""].filter(function(r2){return u.classes.indexOf(r2)===-1}).filter(function(r2){return r2!==""||!!r2}).concat(u.classes).join(" "),P={children:[],attributes:k(k({},u.attributes),{},{"data-prefix":s,"data-icon":n,class:L,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(N)})},D=d&&!~u.classes.indexOf("fa-fw")?{width:"".concat(y/N*16*.0625,"em")}:{};M&&(P.attributes[$2]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(m||t1())},children:[l]}),delete P.attributes.title);var $=k(k({},P),{},{prefix:s,iconName:n,main:e,mask:r,maskId:f,transform:i,symbol:o,styles:k(k({},D),u.styles)}),E=r.found&&e.found?C2("generateAbstractMask",$)||{children:[],attributes:{}}:C2("generateAbstractIcon",$)||{children:[],attributes:{}},G=E.children,z2=E.attributes;return $.children=G,$.attributes=z2,o?_v($):Av($)}function V0(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,o=c.watchable,l=o===void 0?!1:o,f=k(k(k({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(f[$2]="");var m=k({},i.styles);y4(s)&&(m.transform=fv({transform:s,startCentered:!0,width:e,height:r}),m["-webkit-transform"]=m.transform);var u=s3(m);u.length>0&&(f.style=u);var p=[];return p.push({tag:"span",attributes:f,children:[a]}),n&&p.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),p}function Pv(c){var a=c.content,e=c.title,r=c.extra,s=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=s3(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var _3=n2.styles;function K3(c){var a=c[0],e=c[1],r=c.slice(4),s=L4(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(P2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(P2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(P2.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var Tv={found:!1,width:512,height:512};function Bv(c,a){!_8&&!w.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function Q3(c,a){var e=a;return a==="fa"&&w.styleDefault!==null&&(a=S2()),new Promise(function(r,s){if(C2("missingIconAbstract"),e==="fa"){var n=q8(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&_3[a]&&_3[a][c]){var i=_3[a][c];return r(K3(i))}Bv(c,a),r(k(k({},Tv),{},{icon:w.showMissingIcons&&c?C2("missingIconAbstract")||{}:{}}))})}var d0=function(){},Z3=w.measurePerformance&&g1&&g1.mark&&g1.measure?g1:{mark:d0,measure:d0},J2='FA "6.5.2"',Fv=function(a){return Z3.mark("".concat(J2," ").concat(a," begins")),function(){return G8(a)}},G8=function(a){Z3.mark("".concat(J2," ").concat(a," ends")),Z3.measure("".concat(J2," ").concat(a),"".concat(J2," ").concat(a," begins"),"".concat(J2," ").concat(a," ends"))},P4={begin:Fv,end:G8},B1=function(){};function M0(c){var a=c.getAttribute?c.getAttribute($2):null;return typeof a=="string"}function $v(c){var a=c.getAttribute?c.getAttribute(b4):null,e=c.getAttribute?c.getAttribute(x4):null;return a&&e}function Dv(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(w.replacementClass)}function Rv(){if(w.autoReplaceSvg===!0)return F1.replace;var c=F1[w.autoReplaceSvg];return c||F1.replace}function Ev(c){return j.createElementNS("http://www.w3.org/2000/svg",c)}function Ov(c){return j.createElement(c)}function X8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Ev:Ov:e;if(typeof c=="string")return j.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(X8(i,{ceFn:r}))}),s}function Uv(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var F1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(X8(s),e)}),e.getAttribute($2)===null&&w.keepOriginalSource){var r=j.createComment(Uv(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~k4(e).indexOf(w.replacementClass))return F1.replace(a);var s=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(o,l){return l===w.replacementClass||l.match(s)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(o){return H1(o)}).join(`
`);e.setAttribute($2,""),e.innerHTML=i}};function C0(c){c()}function Y8(c,a){var e=typeof a=="function"?a:B1;if(c.length===0)e();else{var r=C0;w.mutateApproach===Gf&&(r=y2.requestAnimationFrame||C0),r(function(){var s=Rv(),n=P4.begin("mutate");c.map(s),n(),e()})}}var T4=!1;function K8(){T4=!0}function J3(){T4=!1}var j1=null;function L0(c){if(v0&&w.observeMutations){var a=c.treeCallback,e=a===void 0?B1:a,r=c.nodeCallback,s=r===void 0?B1:r,n=c.pseudoElementsCallback,i=n===void 0?B1:n,o=c.observeMutationsRoot,l=o===void 0?j:o;j1=new v0(function(f){if(!T4){var m=S2();Q2(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!M0(u.addedNodes[0])&&(w.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&w.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&M0(u.target)&&~cv.indexOf(u.attributeName))if(u.attributeName==="class"&&$v(u.target)){var p=i3(k4(u.target)),M=p.prefix,x=p.iconName;u.target.setAttribute(b4,M||m),x&&u.target.setAttribute(x4,x)}else Dv(u.target)&&s(u.target)})}}),b2&&j1.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Iv(){j1&&j1.disconnect()}function jv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],o=n.slice(1);return i&&o.length>0&&(r[i]=o.join(":").trim()),r},{})),e}function qv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=i3(k4(c));return s.prefix||(s.prefix=S2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Lv(s.prefix,c.innerText)||w4(s.prefix,W3(c.innerText))),!s.iconName&&w.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Wv(c){var a=Q2(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return w.autoA11y&&(e?a["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(r||t1()):(a["aria-hidden"]="true",a.focusable="false")),a}function Gv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:t2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function g0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=qv(c),r=e.iconName,s=e.prefix,n=e.rest,i=Wv(c),o=X3("parseNodeAttributes",{},c),l=a.styleParser?jv(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:t2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},o)}var Xv=n2.styles;function Q8(c){var a=w.autoReplaceSvg==="nest"?g0(c,{styleParser:!1}):g0(c);return~a.extra.classes.indexOf(P8)?C2("generateLayersText",c,a):C2("generateSvgReplacementMutation",c,a)}var w2=new Set;N4.map(function(c){w2.add("fa-".concat(c))});Object.keys(n1[I]).map(w2.add.bind(w2));Object.keys(n1[W]).map(w2.add.bind(w2));w2=m1(w2);function b0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!b2)return Promise.resolve();var e=j.documentElement.classList,r=function(u){return e.add("".concat(m0,"-").concat(u))},s=function(u){return e.remove("".concat(m0,"-").concat(u))},n=w.autoFetchSvg?w2:N4.map(function(m){return"fa-".concat(m)}).concat(Object.keys(Xv));n.includes("fa")||n.push("fa");var i=[".".concat(P8,":not([").concat($2,"])")].concat(n.map(function(m){return".".concat(m,":not([").concat($2,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=Q2(c.querySelectorAll(i))}catch{}if(o.length>0)r("pending"),s("complete");else return Promise.resolve();var l=P4.begin("onTree"),f=o.reduce(function(m,u){try{var p=Q8(u);p&&m.push(p)}catch(M){_8||M.name==="MissingIcon"&&console.error(M)}return m},[]);return new Promise(function(m,u){Promise.all(f).then(function(p){Y8(p,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),m()})}).catch(function(p){l(),u(p)})})}function Yv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Q8(c).then(function(e){e&&Y8([e],a)})}function Kv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:Y3(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:Y3(s||{})),c(r,k(k({},e),{},{mask:s}))}}var Qv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?t2:r,n=e.symbol,i=n===void 0?!1:n,o=e.mask,l=o===void 0?null:o,f=e.maskId,m=f===void 0?null:f,u=e.title,p=u===void 0?null:u,M=e.titleId,x=M===void 0?null:M,y=e.classes,N=y===void 0?[]:y,d=e.attributes,L=d===void 0?{}:d,P=e.styles,D=P===void 0?{}:P;if(a){var $=a.prefix,E=a.iconName,G=a.icon;return o3(k({type:"icon"},a),function(){return D2("beforeDOMElementCreation",{iconDefinition:a,params:e}),w.autoA11y&&(p?L["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(x||t1()):(L["aria-hidden"]="true",L.focusable="false")),_4({icons:{main:K3(G),mask:l?K3(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:E,transform:k(k({},t2),s),symbol:i,title:p,maskId:m,titleId:x,extra:{attributes:L,styles:D,classes:N}})})}},Zv={mixout:function(){return{icon:Kv(Qv)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=b0,e.nodeCallback=Yv,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?j:r,n=e.callback,i=n===void 0?function(){}:n;return b0(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,o=r.prefix,l=r.transform,f=r.symbol,m=r.mask,u=r.maskId,p=r.extra;return new Promise(function(M,x){Promise.all([Q3(s,o),m.iconName?Q3(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var N=L4(y,2),d=N[0],L=N[1];M([e,_4({icons:{main:d,mask:L},prefix:o,iconName:s,transform:l,symbol:f,maskId:u,title:n,titleId:i,extra:p,watchable:!0})])}).catch(x)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,o=e.styles,l=s3(o);l.length>0&&(s.style=l);var f;return y4(i)&&(f=C2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(f||n.icon),{children:r,attributes:s}}}},Jv={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return o3({type:"layer"},function(){D2("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(o){Array.isArray(o)?o.map(function(l){i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers")].concat(m1(n)).join(" ")},children:i}]})}}}},cm={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,o=i===void 0?[]:i,l=r.attributes,f=l===void 0?{}:l,m=r.styles,u=m===void 0?{}:m;return o3({type:"counter",content:e},function(){return D2("beforeDOMElementCreation",{content:e,params:r}),Pv({content:e.toString(),title:n,extra:{attributes:f,styles:u,classes:["".concat(w.cssPrefix,"-layers-counter")].concat(m1(o))}})})}}}},am={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?t2:s,i=r.title,o=i===void 0?null:i,l=r.classes,f=l===void 0?[]:l,m=r.attributes,u=m===void 0?{}:m,p=r.styles,M=p===void 0?{}:p;return o3({type:"text",content:e},function(){return D2("beforeDOMElementCreation",{content:e,params:r}),V0({content:e,transform:k(k({},t2),n),title:o,extra:{attributes:u,styles:M,classes:["".concat(w.cssPrefix,"-layers-text")].concat(m1(f))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,o=null,l=null;if(S8){var f=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();o=m.width/f,l=m.height/f}return w.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,V0({content:e.innerHTML,width:o,height:l,transform:n,title:s,extra:i,watchable:!0})])}}},em=new RegExp('"',"ug"),x0=[1105920,1112319];function rm(c){var a=c.replace(em,""),e=hv(a,0),r=e>=x0[0]&&e<=x0[1],s=a.length===2?a[0]===a[1]:!1;return{value:W3(s?a[0]:a),isSecondary:r||s}}function N0(c,a){var e="".concat(Wf).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=Q2(c.children),i=n.filter(function(G){return G.getAttribute(q3)===a})[0],o=y2.getComputedStyle(c,a),l=o.getPropertyValue("font-family").match(Qf),f=o.getPropertyValue("font-weight"),m=o.getPropertyValue("content");if(i&&!l)return c.removeChild(i),r();if(l&&m!=="none"&&m!==""){var u=o.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?W:I,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?i1[p][l[2].toLowerCase()]:Zf[p][f],x=rm(u),y=x.value,N=x.isSecondary,d=l[0].startsWith("FontAwesome"),L=w4(M,y),P=L;if(d){var D=gv(y);D.iconName&&D.prefix&&(L=D.iconName,M=D.prefix)}if(L&&!N&&(!i||i.getAttribute(b4)!==M||i.getAttribute(x4)!==P)){c.setAttribute(e,P),i&&c.removeChild(i);var $=Gv(),E=$.extra;E.attributes[q3]=a,Q3(L,M).then(function(G){var z2=_4(k(k({},$),{},{icons:{main:G,mask:A4()},prefix:M,iconName:P,extra:E,watchable:!0})),r2=j.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(r2,c.firstChild):c.appendChild(r2),r2.outerHTML=z2.map(function(qs){return H1(qs)}).join(`