"use strict";(self["webpackChunkrenombrado_archivos"]=self["webpackChunkrenombrado_archivos"]||[]).push([[998],{444:function(e,t,n){n.d(t,{BH:function(){return N},DV:function(){return B},GJ:function(){return W},L:function(){return u},LL:function(){return A},P0:function(){return S},Sg:function(){return x},UI:function(){return H},US:function(){return l},Wl:function(){return L},Yr:function(){return y},ZR:function(){return D},aH:function(){return P},b$:function(){return m},cI:function(){return F},dS:function(){return J},eu:function(){return C},g5:function(){return s},gK:function(){return Y},gQ:function(){return G},h$:function(){return c},hl:function(){return v},hu:function(){return r},m9:function(){return X},p$:function(){return d},r3:function(){return j},uI:function(){return g},ug:function(){return Q},vZ:function(){return $},w9:function(){return q},xO:function(){return K},xb:function(){return V}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,l=a?e[r+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,l=a?n[e.charAt(r)]:64;++r;const c=r<e.length,u=c?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==l||null==u)throw Error();const h=t<<2|o>>4;if(i.push(h),64!==l){const e=o<<4&240|l>>2;if(i.push(e),64!==u){const e=l<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},c=function(e){const t=o(e);return l.encodeByteArray(t,!0)},u=function(e){return c(e).replace(/\./g,"")},h=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&f(n)&&(e[n]=p(e[n],t[n]));return e}function f(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function g(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function y(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function v(){return"object"===typeof indexedDB}function C(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function b(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=()=>b().__FIREBASE_DEFAULTS__,I=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyDxbMGWiD2Wr9qy8wrxA4VkI581EgKPj4s",VUE_APP_AUTH_DOMAIN:"advr-consultores.firebaseapp.com",VUE_APP_DATABASE_URL:"https://advr-consultores-default-rtdb.firebaseio.com",VUE_APP_PROJECT_ID:"advr-consultores",VUE_APP_STORAGE_BUCKET:"advr-consultores.appspot.com",VUE_APP_MESSAGING_SENDER_ID:"950650780471",VUE_APP_APP_ID:"1:950650780471:web:6bbc43f41d56abc9fcf8b2",VUE_APP_MEASUREMENT_ID:"G-SRQCGWSDVY",BASE_URL:"/renombrando-archivos/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},E=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&h(e[1]);return t&&JSON.parse(t)},T=()=>{try{return w()||I()||E()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},k=e=>{var t,n;return null===(n=null===(t=T())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},S=e=>{const t=k(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},P=()=>{var e;return null===(e=T())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=R,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?O(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new D(i,o,n);return a}}function O(e,t){return e.replace(M,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return JSON.parse(e)}function L(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=F(h(s[0])||""),n=F(h(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},q=function(e){const t=U(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},W=function(e){const t=U(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function V(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function H(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function $(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(z(n)&&z(s)){if(!$(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function z(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):u<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const e=(s<<5|s>>>27)+i+c+r+n[u]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function Y(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Q=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){return e&&e._delegate?e._delegate:e}},262:function(e,t,n){n.d(t,{Bj:function(){return s},Fl:function(){return qe},IU:function(){return Pe},Jd:function(){return I},PG:function(){return Ee},Um:function(){return be},WL:function(){return Le},X$:function(){return S},X3:function(){return Se},Xl:function(){return Ne},dq:function(){return Oe},j:function(){return T},lk:function(){return E},qj:function(){return Ce},qq:function(){return v},yT:function(){return ke}});var i=n(577);let r;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&r&&(this.parent=r,this.index=(r.scopes||(r.scopes=[])).push(this)-1)}run(e){if(this.active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){r=this}off(){r=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=r){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&f)>0,c=e=>(e.n&f)>0,u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=f},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];l(r)&&!c(r)?r.delete(e):t[n++]=r,r.w&=~f,r.n&=~f}t.length=n}},d=new WeakMap;let p=0,f=1;const _=30;let g;const m=Symbol(""),y=Symbol("");class v{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=b;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,b=!0,f=1<<++p,p<=_?u(this):C(this),this.fn()}finally{p<=_&&h(this),f=1<<--p,g=this.parent,b=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(C(this),this.onStop&&this.onStop(),this.active=!1)}}function C(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let b=!0;const w=[];function I(){w.push(b),b=!1}function E(){const e=w.pop();b=void 0===e||e}function T(e,t,n){if(b&&g){let t=d.get(e);t||d.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=a());const r=void 0;k(i,r)}}function k(e,t){let n=!1;p<=_?c(e)||(e.n|=f,n=!l(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function S(e,t,n,r,s,o){const l=d.get(e);if(!l)return;let c=[];if("clear"===t)c=[...l.values()];else if("length"===n&&(0,i.kJ)(e))l.forEach(((e,t)=>{("length"===t||t>=r)&&c.push(e)}));else switch(void 0!==n&&c.push(l.get(n)),t){case"add":(0,i.kJ)(e)?(0,i.S0)(n)&&c.push(l.get("length")):(c.push(l.get(m)),(0,i._N)(e)&&c.push(l.get(y)));break;case"delete":(0,i.kJ)(e)||(c.push(l.get(m)),(0,i._N)(e)&&c.push(l.get(y)));break;case"set":(0,i._N)(e)&&c.push(l.get(m));break}if(1===c.length)c[0]&&P(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);P(a(e))}}function P(e,t){const n=(0,i.kJ)(e)?e:[...e];for(const i of n)i.computed&&N(i,t);for(const i of n)i.computed||N(i,t)}function N(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const x=(0,i.fY)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(i.yk)),D=L(),A=L(!1,!0),O=L(!0),M=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Pe(this);for(let t=0,r=this.length;t<r;t++)T(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(Pe)):i}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){I();const n=Pe(this)[t].apply(this,e);return E(),n}})),e}function L(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&s===(e?t?me:ge:t?_e:fe).get(n))return n;const o=(0,i.kJ)(n);if(!e&&o&&(0,i.RI)(M,r))return Reflect.get(M,r,s);const a=Reflect.get(n,r,s);return((0,i.yk)(r)?R.has(r):x(r))?a:(e||T(n,"get",r),t?a:Oe(a)?o&&(0,i.S0)(r)?a:a.value:(0,i.Kn)(a)?e?we(a):Ce(a):a)}}const U=W(),q=W(!0);function W(e=!1){return function(t,n,r,s){let o=t[n];if(Te(o)&&Oe(o)&&!Oe(r))return!1;if(!e&&!Te(r)&&(ke(r)||(r=Pe(r),o=Pe(o)),!(0,i.kJ)(t)&&Oe(o)&&!Oe(r)))return o.value=r,!0;const a=(0,i.kJ)(t)&&(0,i.S0)(n)?Number(n)<t.length:(0,i.RI)(t,n),l=Reflect.set(t,n,r,s);return t===Pe(s)&&(a?(0,i.aU)(r,o)&&S(t,"set",n,r,o):S(t,"add",n,r)),l}}function j(e,t){const n=(0,i.RI)(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&S(e,"delete",t,void 0,r),s}function B(e,t){const n=Reflect.has(e,t);return(0,i.yk)(t)&&R.has(t)||T(e,"has",t),n}function V(e){return T(e,"iterate",(0,i.kJ)(e)?"length":m),Reflect.ownKeys(e)}const H={get:D,set:U,deleteProperty:j,has:B,ownKeys:V},$={get:O,set(e,t){return!0},deleteProperty(e,t){return!0}},z=(0,i.l7)({},H,{get:A,set:q}),K=e=>e,G=e=>Reflect.getPrototypeOf(e);function Y(e,t,n=!1,i=!1){e=e["__v_raw"];const r=Pe(e),s=Pe(t);n||(t!==s&&T(r,"get",t),T(r,"get",s));const{has:o}=G(r),a=i?K:n?Re:xe;return o.call(r,t)?a(e.get(t)):o.call(r,s)?a(e.get(s)):void(e!==r&&e.get(t))}function J(e,t=!1){const n=this["__v_raw"],i=Pe(n),r=Pe(e);return t||(e!==r&&T(i,"has",e),T(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Q(e,t=!1){return e=e["__v_raw"],!t&&T(Pe(e),"iterate",m),Reflect.get(e,"size",e)}function X(e){e=Pe(e);const t=Pe(this),n=G(t),i=n.has.call(t,e);return i||(t.add(e),S(t,"add",e,e)),this}function Z(e,t){t=Pe(t);const n=Pe(this),{has:r,get:s}=G(n);let o=r.call(n,e);o||(e=Pe(e),o=r.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,i.aU)(t,a)&&S(n,"set",e,t,a):S(n,"add",e,t),this}function ee(e){const t=Pe(this),{has:n,get:i}=G(t);let r=n.call(t,e);r||(e=Pe(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,o=t.delete(e);return r&&S(t,"delete",e,void 0,s),o}function te(){const e=Pe(this),t=0!==e.size,n=void 0,i=e.clear();return t&&S(e,"clear",void 0,void 0,n),i}function ne(e,t){return function(n,i){const r=this,s=r["__v_raw"],o=Pe(s),a=t?K:e?Re:xe;return!e&&T(o,"iterate",m),s.forEach(((e,t)=>n.call(i,a(e),a(t),r)))}}function ie(e,t,n){return function(...r){const s=this["__v_raw"],o=Pe(s),a=(0,i._N)(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=s[e](...r),h=n?K:t?Re:xe;return!t&&T(o,"iterate",c?y:m),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return Y(this,e)},get size(){return Q(this)},has:J,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return Y(this,e,!1,!0)},get size(){return Q(this)},has:J,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return Y(this,e,!0)},get size(){return Q(this,!0)},has(e){return J.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:ne(!0,!1)},i={get(e){return Y(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return J.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:ne(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{e[r]=ie(r,!1,!1),n[r]=ie(r,!0,!1),t[r]=ie(r,!1,!0),i[r]=ie(r,!0,!0)})),[e,n,t,i]}const[oe,ae,le,ce]=se();function ue(e,t){const n=t?e?ce:le:e?ae:oe;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get((0,i.RI)(n,r)&&r in t?n:t,r,s)}const he={get:ue(!1,!1)},de={get:ue(!1,!0)},pe={get:ue(!0,!1)};const fe=new WeakMap,_e=new WeakMap,ge=new WeakMap,me=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ve(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,i.W7)(e))}function Ce(e){return Te(e)?e:Ie(e,!1,H,he,fe)}function be(e){return Ie(e,!1,z,de,_e)}function we(e){return Ie(e,!0,$,pe,ge)}function Ie(e,t,n,r,s){if(!(0,i.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ve(e);if(0===a)return e;const l=new Proxy(e,2===a?r:n);return s.set(e,l),l}function Ee(e){return Te(e)?Ee(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function ke(e){return!(!e||!e["__v_isShallow"])}function Se(e){return Ee(e)||Te(e)}function Pe(e){const t=e&&e["__v_raw"];return t?Pe(t):e}function Ne(e){return(0,i.Nj)(e,"__v_skip",!0),e}const xe=e=>(0,i.Kn)(e)?Ce(e):e,Re=e=>(0,i.Kn)(e)?we(e):e;function De(e){b&&g&&(e=Pe(e),k(e.dep||(e.dep=a())))}function Ae(e,t){e=Pe(e),e.dep&&P(e.dep)}function Oe(e){return!(!e||!0!==e.__v_isRef)}function Me(e){return Oe(e)?e.value:e}const Fe={get:(e,t,n)=>Me(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Oe(r)&&!Oe(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function Le(e){return Ee(e)?e:new Proxy(e,Fe)}class Ue{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new v(e,(()=>{this._dirty||(this._dirty=!0,Ae(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const e=Pe(this);return De(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,t,n=!1){let r,s;const o=(0,i.mf)(e);o?(r=e,s=i.dG):(r=e.get,s=e.set);const a=new Ue(r,s,o||!s,n);return a}},252:function(e,t,n){n.d(t,{$d:function(){return o},Cn:function(){return j},FN:function(){return yn},HY:function(){return Lt},Ko:function(){return Ve},P$:function(){return le},Q6:function(){return fe},U2:function(){return ue},Uk:function(){return an},Us:function(){return Rt},WI:function(){return He},Wm:function(){return nn},Y8:function(){return se},_:function(){return tn},dD:function(){return W},h:function(){return Mn},iD:function(){return Gt},ic:function(){return Ne},j4:function(){return Yt},kq:function(){return ln},nK:function(){return pe},up:function(){return qe},w5:function(){return B},wg:function(){return Vt},wy:function(){return Fe}});var i=n(262),r=n(577);function s(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){a(s,t,n)}return r}function o(e,t,n,i){if((0,r.mf)(e)){const o=s(e,t,n,i);return o&&(0,r.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const l=[];for(let r=0;r<e.length;r++)l.push(o(e[r],t,n,i));return l}function a(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const r=t.proxy,o=n;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,o))return;i=i.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,r,o])}l(e,n,r,i)}function l(e,t,n,i=!0){console.error(e)}let c=!1,u=!1;const h=[];let d=0;const p=[];let f=null,_=0;const g=[];let m=null,y=0;const v=Promise.resolve();let C=null,b=null;function w(e){const t=C||v;return e?t.then(this?e.bind(this):e):t}function I(e){let t=d+1,n=h.length;while(t<n){const i=t+n>>>1,r=D(h[i]);r<e?t=i+1:n=i}return t}function E(e){h.length&&h.includes(e,c&&e.allowRecurse?d+1:d)||e===b||(null==e.id?h.push(e):h.splice(I(e.id),0,e),T())}function T(){c||u||(u=!0,C=v.then(A))}function k(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function S(e,t,n,i){(0,r.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),T()}function P(e){S(e,f,p,_)}function N(e){S(e,m,g,y)}function x(e,t=null){if(p.length){for(b=t,f=[...new Set(p)],p.length=0,_=0;_<f.length;_++)f[_]();f=null,_=0,b=null,x(e,t)}}function R(e){if(x(),g.length){const e=[...new Set(g)];if(g.length=0,m)return void m.push(...e);for(m=e,m.sort(((e,t)=>D(e)-D(t))),y=0;y<m.length;y++)m[y]();m=null,y=0}}const D=e=>null==e.id?1/0:e.id;function A(e){u=!1,c=!0,x(e),h.sort(((e,t)=>D(e)-D(t)));r.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,R(e),c=!1,C=null,(h.length||p.length||g.length)&&A(e)}}new Set;new Map;function O(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r.kT;let s=n;const a=t.startsWith("update:"),l=a&&t.slice(7);if(l&&l in i){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:o}=i[e]||r.kT;o&&(s=n.map((e=>e.trim()))),t&&(s=n.map(r.He))}let c;let u=i[c=(0,r.hR)(t)]||i[c=(0,r.hR)((0,r._A)(t))];!u&&a&&(u=i[c=(0,r.hR)((0,r.rs)(t))]),u&&o(u,e,6,s);const h=i[c+"Once"];if(h){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,o(h,e,6,s)}}function M(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},l=!1;if(!(0,r.mf)(e)){const i=e=>{const n=M(e,t,!0);n&&(l=!0,(0,r.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||l?((0,r.kJ)(o)?o.forEach((e=>a[e]=null)):(0,r.l7)(a,o),i.set(e,a),a):(i.set(e,null),null)}function F(e,t){return!(!e||!(0,r.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,r.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,r.RI)(e,(0,r.rs)(t))||(0,r.RI)(e,t))}let L=null,U=null;function q(e){const t=L;return L=e,U=e&&e.type.__scopeId||null,t}function W(e){U=e}function j(){U=null}function B(e,t=L,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&zt(-1);const r=q(t),s=e(...n);return q(r),i._d&&zt(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function V(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[l],slots:c,attrs:u,emit:h,render:d,renderCache:p,data:f,setupState:_,ctx:g,inheritAttrs:m}=e;let y,v;const C=q(e);try{if(4&n.shapeFlag){const e=s||i;y=cn(d.call(e,e,p,o,_,f,g)),v=u}else{const e=t;0,y=cn(e.length>1?e(o,{attrs:u,slots:c,emit:h}):e(o,null)),v=t.props?u:H(u)}}catch(w){jt.length=0,a(w,e,1),y=nn(qt)}let b=y;if(v&&!1!==m){const e=Object.keys(v),{shapeFlag:t}=b;e.length&&7&t&&(l&&e.some(r.tR)&&(v=$(v,l)),b=on(b,v))}return n.dirs&&(b=on(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,q(C),y}const H=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,r.F7)(n))&&((t||(t={}))[n]=e[n]);return t},$=(e,t)=>{const n={};for(const i in e)(0,r.tR)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function z(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||K(i,o,c):!!o);if(1024&l)return!0;if(16&l)return i?K(i,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!F(c,n))return!0}}return!1}function K(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!F(n,s))return!0}return!1}function G({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Y=e=>e.__isSuspense;function J(e,t){t&&t.pendingBranch?(0,r.kJ)(e)?t.effects.push(...e):t.effects.push(e):N(e)}function Q(e,t){if(mn){let n=mn.provides;const i=mn.parent&&mn.parent.provides;i===n&&(n=mn.provides=Object.create(i)),n[e]=t}else 0}function X(e,t,n=!1){const i=mn||L;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,r.mf)(t)?t.call(i.proxy):t}else 0}const Z={};function ee(e,t,n){return te(e,t,n)}function te(e,t,{immediate:n,deep:a,flush:l,onTrack:c,onTrigger:u}=r.kT){const h=mn;let d,p,f=!1,_=!1;if((0,i.dq)(e)?(d=()=>e.value,f=(0,i.yT)(e)):(0,i.PG)(e)?(d=()=>e,a=!0):(0,r.kJ)(e)?(_=!0,f=e.some((e=>(0,i.PG)(e)||(0,i.yT)(e))),d=()=>e.map((e=>(0,i.dq)(e)?e.value:(0,i.PG)(e)?re(e):(0,r.mf)(e)?s(e,h,2):void 0))):d=(0,r.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return p&&p(),o(e,h,3,[g])}:r.dG,t&&a){const e=d;d=()=>re(e())}let g=e=>{p=C.onStop=()=>{s(e,h,4)}};if(En)return g=r.dG,t?n&&o(t,h,3,[d(),_?[]:void 0,g]):d(),r.dG;let m=_?[]:Z;const y=()=>{if(C.active)if(t){const e=C.run();(a||f||(_?e.some(((e,t)=>(0,r.aU)(e,m[t]))):(0,r.aU)(e,m)))&&(p&&p(),o(t,h,3,[e,m===Z?void 0:m,g]),m=e)}else C.run()};let v;y.allowRecurse=!!t,v="sync"===l?y:"post"===l?()=>xt(y,h&&h.suspense):()=>P(y);const C=new i.qq(d,v);return t?n?y():m=C.run():"post"===l?xt(C.run.bind(C),h&&h.suspense):C.run(),()=>{C.stop(),h&&h.scope&&(0,r.Od)(h.scope.effects,C)}}function ne(e,t,n){const i=this.proxy,s=(0,r.HD)(e)?e.includes(".")?ie(i,e):()=>i[e]:e.bind(i,i);let o;(0,r.mf)(t)?o=t:(o=t.handler,n=t);const a=mn;vn(this);const l=te(s,o.bind(i),n);return a?vn(a):Cn(),l}function ie(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function re(e,t){if(!(0,r.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,i.dq)(e))re(e.value,t);else if((0,r.kJ)(e))for(let n=0;n<e.length;n++)re(e[n],t);else if((0,r.DM)(e)||(0,r._N)(e))e.forEach((e=>{re(e,t)}));else if((0,r.PO)(e))for(const n in e)re(e[n],t);return e}function se(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Se((()=>{e.isMounted=!0})),xe((()=>{e.isUnmounting=!0})),e}const oe=[Function,Array],ae={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:oe,onEnter:oe,onAfterEnter:oe,onEnterCancelled:oe,onBeforeLeave:oe,onLeave:oe,onAfterLeave:oe,onLeaveCancelled:oe,onBeforeAppear:oe,onAppear:oe,onAfterAppear:oe,onAppearCancelled:oe},setup(e,{slots:t}){const n=yn(),r=se();let s;return()=>{const o=t.default&&fe(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==qt){0,a=t,e=!0;break}}const l=(0,i.IU)(e),{mode:c}=l;if(r.isLeaving)return he(a);const u=de(a);if(!u)return he(a);const h=ue(u,l,r,n);pe(u,h);const d=n.subTree,p=d&&de(d);let f=!1;const{getTransitionKey:_}=u.type;if(_){const e=_();void 0===s?s=e:e!==s&&(s=e,f=!0)}if(p&&p.type!==qt&&(!Qt(u,p)||f)){const e=ue(p,l,r,n);if(pe(p,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},he(a);"in-out"===c&&u.type!==qt&&(e.delayLeave=(e,t,n)=>{const i=ce(r,p);i[String(p.key)]=p,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},le=ae;function ce(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function ue(e,t,n,i){const{appear:s,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:C}=t,b=String(e.key),w=ce(n,e),I=(e,t)=>{e&&o(e,i,9,t)},E=(e,t)=>{const n=t[1];I(e,t),(0,r.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},T={mode:a,persisted:l,beforeEnter(t){let i=c;if(!n.isMounted){if(!s)return;i=m||c}t._leaveCb&&t._leaveCb(!0);const r=w[b];r&&Qt(e,r)&&r.el._leaveCb&&r.el._leaveCb(),I(i,[t])},enter(e){let t=u,i=h,r=d;if(!n.isMounted){if(!s)return;t=y||u,i=v||h,r=C||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,I(t?r:i,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?E(t,[e,a]):a()},leave(t,i){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();I(p,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,i(),I(n?g:_,[t]),t._leaveCb=void 0,w[r]===e&&delete w[r])};w[r]=e,f?E(f,[t,o]):o()},clone(e){return ue(e,t,n,i)}};return T}function he(e){if(ge(e))return e=on(e),e.children=null,e}function de(e){return ge(e)?e.children?e.children[0]:void 0:e}function pe(e,t){6&e.shapeFlag&&e.component?pe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function fe(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Lt?(128&o.patchFlag&&r++,i=i.concat(fe(o.children,t,a))):(t||o.type!==qt)&&i.push(null!=a?on(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}const _e=e=>!!e.type.__asyncLoader;const ge=e=>e.type.__isKeepAlive;RegExp,RegExp;function me(e,t){return(0,r.kJ)(e)?e.some((e=>me(e,t))):(0,r.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function ye(e,t){Ce(e,"a",t)}function ve(e,t){Ce(e,"da",t)}function Ce(e,t,n=mn){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ee(t,i,n),n){let e=n.parent;while(e&&e.parent)ge(e.parent.vnode)&&be(i,t,n,e),e=e.parent}}function be(e,t,n,i){const s=Ee(t,e,i,!0);Re((()=>{(0,r.Od)(i[t],s)}),n)}function we(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ie(e){return 128&e.shapeFlag?e.ssContent:e}function Ee(e,t,n=mn,r=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;(0,i.Jd)(),vn(n);const s=o(t,n,e,r);return Cn(),(0,i.lk)(),s});return r?s.unshift(a):s.push(a),a}}const Te=e=>(t,n=mn)=>(!En||"sp"===e)&&Ee(e,t,n),ke=Te("bm"),Se=Te("m"),Pe=Te("bu"),Ne=Te("u"),xe=Te("bum"),Re=Te("um"),De=Te("sp"),Ae=Te("rtg"),Oe=Te("rtc");function Me(e,t=mn){Ee("ec",e,t)}function Fe(e,t){const n=L;if(null===n)return e;const i=Rn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=r.kT]=t[o];(0,r.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&re(n),s.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:l})}return e}function Le(e,t,n,r){const s=e.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const c=s[l];a&&(c.oldValue=a[l].value);let u=c.dir[r];u&&((0,i.Jd)(),o(u,n,8,[e.el,c,e,t]),(0,i.lk)())}}const Ue="components";function qe(e,t){return je(Ue,e,!0,t)||e}const We=Symbol();function je(e,t,n=!0,i=!1){const s=L||mn;if(s){const n=s.type;if(e===Ue){const e=Dn(n,!1);if(e&&(e===t||e===(0,r._A)(t)||e===(0,r.kC)((0,r._A)(t))))return n}const o=Be(s[e]||n[e],t)||Be(s.appContext[e],t);return!o&&i?n:o}}function Be(e,t){return e&&(e[t]||e[(0,r._A)(t)]||e[(0,r.kC)((0,r._A)(t))])}function Ve(e,t,n,i){let s;const o=n&&n[i];if((0,r.kJ)(e)||(0,r.HD)(e)){s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,r.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=t(e[r],r,i,o&&o[i])}}else s=[];return n&&(n[i]=s),s}function He(e,t,n={},i,r){if(L.isCE||L.parent&&_e(L.parent)&&L.parent.isCE)return nn("slot","default"===t?null:{name:t},i&&i());let s=e[t];s&&s._c&&(s._d=!1),Vt();const o=s&&$e(s(n)),a=Yt(Lt,{key:n.key||`_${t}`},o||(i?i():[]),o&&1===e._?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function $e(e){return e.some((e=>!Jt(e)||e.type!==qt&&!(e.type===Lt&&!$e(e.children))))?e:null}const ze=e=>e?bn(e)?Rn(e)||e.proxy:ze(e.parent):null,Ke=(0,r.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ze(e.parent),$root:e=>ze(e.root),$emit:e=>e.emit,$options:e=>et(e),$forceUpdate:e=>e.f||(e.f=()=>E(e.update)),$nextTick:e=>e.n||(e.n=w.bind(e.proxy)),$watch:e=>ne.bind(e)}),Ge={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:c,appContext:u}=e;let h;if("$"!==t[0]){const i=l[t];if(void 0!==i)switch(i){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==r.kT&&(0,r.RI)(s,t))return l[t]=1,s[t];if(o!==r.kT&&(0,r.RI)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,r.RI)(h,t))return l[t]=3,a[t];if(n!==r.kT&&(0,r.RI)(n,t))return l[t]=4,n[t];Ye&&(l[t]=0)}}const d=Ke[t];let p,f;return d?("$attrs"===t&&(0,i.j)(e,"get",t),d(e)):(p=c.__cssModules)&&(p=p[t])?p:n!==r.kT&&(0,r.RI)(n,t)?(l[t]=4,n[t]):(f=u.config.globalProperties,(0,r.RI)(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return s!==r.kT&&(0,r.RI)(s,t)?(s[t]=n,!0):i!==r.kT&&(0,r.RI)(i,t)?(i[t]=n,!0):!(0,r.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==r.kT&&(0,r.RI)(e,a)||t!==r.kT&&(0,r.RI)(t,a)||(l=o[0])&&(0,r.RI)(l,a)||(0,r.RI)(i,a)||(0,r.RI)(Ke,a)||(0,r.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,r.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ye=!0;function Je(e){const t=et(e),n=e.proxy,s=e.ctx;Ye=!1,t.beforeCreate&&Xe(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:p,mounted:f,beforeUpdate:_,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:C,destroyed:b,unmounted:w,render:I,renderTracked:E,renderTriggered:T,errorCaptured:k,serverPrefetch:S,expose:P,inheritAttrs:N,components:x,directives:R,filters:D}=t,A=null;if(h&&Qe(h,s,A,e.appContext.config.unwrapInjectedRef),l)for(const i in l){const e=l[i];(0,r.mf)(e)&&(s[i]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,r.Kn)(t)&&(e.data=(0,i.qj)(t))}if(Ye=!0,a)for(const i in a){const e=a[i],t=(0,r.mf)(e)?e.bind(n,n):(0,r.mf)(e.get)?e.get.bind(n,n):r.dG;0;const o=!(0,r.mf)(e)&&(0,r.mf)(e.set)?e.set.bind(n):r.dG,l=On({get:t,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const i in c)Ze(c[i],s,n,i);if(u){const e=(0,r.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{Q(t,e[t])}))}function O(e,t){(0,r.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Xe(d,e,"c"),O(ke,p),O(Se,f),O(Pe,_),O(Ne,g),O(ye,m),O(ve,y),O(Me,k),O(Oe,E),O(Ae,T),O(xe,C),O(Re,w),O(De,S),(0,r.kJ)(P))if(P.length){const t=e.exposed||(e.exposed={});P.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===r.dG&&(e.render=I),null!=N&&(e.inheritAttrs=N),x&&(e.components=x),R&&(e.directives=R)}function Qe(e,t,n=r.dG,s=!1){(0,r.kJ)(e)&&(e=st(e));for(const o in e){const n=e[o];let a;a=(0,r.Kn)(n)?"default"in n?X(n.from||o,n.default,!0):X(n.from||o):X(n),(0,i.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Xe(e,t,n){o((0,r.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ze(e,t,n,i){const s=i.includes(".")?ie(n,i):()=>n[i];if((0,r.HD)(e)){const n=t[e];(0,r.mf)(n)&&ee(s,n)}else if((0,r.mf)(e))ee(s,e.bind(n));else if((0,r.Kn)(e))if((0,r.kJ)(e))e.forEach((e=>Ze(e,t,n,i)));else{const i=(0,r.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,r.mf)(i)&&ee(s,i,e)}else 0}function et(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:r.length||n||i?(l={},r.length&&r.forEach((e=>tt(l,e,o,!0))),tt(l,t,o)):l=t,s.set(t,l),l}function tt(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&tt(e,s,n,!0),r&&r.forEach((t=>tt(e,t,n,!0)));for(const o in t)if(i&&"expose"===o);else{const i=nt[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const nt={data:it,props:at,emits:at,methods:at,computed:at,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:at,directives:at,watch:lt,provide:it,inject:rt};function it(e,t){return t?e?function(){return(0,r.l7)((0,r.mf)(e)?e.call(this,this):e,(0,r.mf)(t)?t.call(this,this):t)}:t:e}function rt(e,t){return at(st(e),st(t))}function st(e){if((0,r.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ot(e,t){return e?[...new Set([].concat(e,t))]:t}function at(e,t){return e?(0,r.l7)((0,r.l7)(Object.create(null),e),t):t}function lt(e,t){if(!e)return t;if(!t)return e;const n=(0,r.l7)(Object.create(null),e);for(const i in t)n[i]=ot(e[i],t[i]);return n}function ct(e,t,n,s=!1){const o={},a={};(0,r.Nj)(a,Xt,1),e.propsDefaults=Object.create(null),ht(e,t,o,a);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:(0,i.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function ut(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,c=(0,i.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||l>0)||16&l){let i;ht(e,t,o,a)&&(h=!0);for(const s in c)t&&((0,r.RI)(t,s)||(i=(0,r.rs)(s))!==s&&(0,r.RI)(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=dt(u,c,s,void 0,e,!0)):delete o[s]);if(a!==c)for(const e in a)t&&(0,r.RI)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(F(e.emitsOptions,s))continue;const l=t[s];if(u)if((0,r.RI)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const t=(0,r._A)(s);o[t]=dt(u,c,t,l,e,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,i.X$)(e,"set","$attrs")}function ht(e,t,n,s){const[o,a]=e.propsOptions;let l,c=!1;if(t)for(let i in t){if((0,r.Gg)(i))continue;const u=t[i];let h;o&&(0,r.RI)(o,h=(0,r._A)(i))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:F(e.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,c=!0)}if(a){const t=(0,i.IU)(n),s=l||r.kT;for(let i=0;i<a.length;i++){const l=a[i];n[l]=dt(o,t,l,s[l],e,!(0,r.RI)(s,l))}}return c}function dt(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=(0,r.RI)(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&(0,r.mf)(e)){const{propsDefaults:r}=s;n in r?i=r[n]:(vn(s),i=r[n]=e.call(null,t),Cn())}else i=e}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==(0,r.rs)(n)||(i=!0))}return i}function pt(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},l=[];let c=!1;if(!(0,r.mf)(e)){const i=e=>{c=!0;const[n,i]=pt(e,t,!0);(0,r.l7)(a,n),i&&l.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!c)return i.set(e,r.Z6),r.Z6;if((0,r.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,r._A)(o[h]);ft(e)&&(a[e]=r.kT)}else if(o){0;for(const e in o){const t=(0,r._A)(e);if(ft(t)){const n=o[e],i=a[t]=(0,r.kJ)(n)||(0,r.mf)(n)?{type:n}:n;if(i){const e=mt(Boolean,i.type),n=mt(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||(0,r.RI)(i,"default"))&&l.push(t)}}}}const u=[a,l];return i.set(e,u),u}function ft(e){return"$"!==e[0]}function _t(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function gt(e,t){return _t(e)===_t(t)}function mt(e,t){return(0,r.kJ)(t)?t.findIndex((t=>gt(t,e))):(0,r.mf)(t)&&gt(t,e)?0:-1}const yt=e=>"_"===e[0]||"$stable"===e,vt=e=>(0,r.kJ)(e)?e.map(cn):[cn(e)],Ct=(e,t,n)=>{if(t._n)return t;const i=B(((...e)=>vt(t(...e))),n);return i._c=!1,i},bt=(e,t,n)=>{const i=e._ctx;for(const s in e){if(yt(s))continue;const n=e[s];if((0,r.mf)(n))t[s]=Ct(s,n,i);else if(null!=n){0;const e=vt(n);t[s]=()=>e}}},wt=(e,t)=>{const n=vt(t);e.slots.default=()=>n},It=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,i.IU)(t),(0,r.Nj)(t,"_",n)):bt(t,e.slots={})}else e.slots={},t&&wt(e,t);(0,r.Nj)(e.slots,Xt,1)},Et=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r.kT;if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,r.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,bt(t,s)),a=t}else t&&(wt(e,t),a={default:1});if(o)for(const r in s)yt(r)||r in a||delete s[r]};function Tt(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kt=0;function St(e,t){return function(n,i=null){(0,r.mf)(n)||(n=Object.assign({},n)),null==i||(0,r.Kn)(i)||(i=null);const s=Tt(),o=new Set;let a=!1;const l=s.app={_uid:kt++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Fn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,r.mf)(e.install)?(o.add(e),e.install(l,...t)):(0,r.mf)(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(r,o,c){if(!a){0;const u=nn(n,i);return u.appContext=s,o&&t?t(u,r):e(u,r,c),a=!0,l._container=r,r.__vue_app__=l,Rn(u.component)||u.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l}};return l}}function Pt(e,t,n,o,a=!1){if((0,r.kJ)(e))return void e.forEach(((e,i)=>Pt(e,t&&((0,r.kJ)(t)?t[i]:t),n,o,a)));if(_e(o)&&!a)return;const l=4&o.shapeFlag?Rn(o.component)||o.component.proxy:o.el,c=a?null:l,{i:u,r:h}=e;const d=t&&t.r,p=u.refs===r.kT?u.refs={}:u.refs,f=u.setupState;if(null!=d&&d!==h&&((0,r.HD)(d)?(p[d]=null,(0,r.RI)(f,d)&&(f[d]=null)):(0,i.dq)(d)&&(d.value=null)),(0,r.mf)(h))s(h,u,12,[c,p]);else{const t=(0,r.HD)(h),s=(0,i.dq)(h);if(t||s){const i=()=>{if(e.f){const n=t?p[h]:h.value;a?(0,r.kJ)(n)&&(0,r.Od)(n,l):(0,r.kJ)(n)?n.includes(l)||n.push(l):t?(p[h]=[l],(0,r.RI)(f,h)&&(f[h]=p[h])):(h.value=[l],e.k&&(p[e.k]=h.value))}else t?(p[h]=c,(0,r.RI)(f,h)&&(f[h]=c)):s&&(h.value=c,e.k&&(p[e.k]=c))};c?(i.id=-1,xt(i,n)):i()}else 0}}function Nt(){}const xt=J;function Rt(e){return Dt(e)}function Dt(e,t){Nt();const n=(0,r.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:f,setScopeId:_=r.dG,cloneNode:g,insertStaticContent:m}=e,y=(e,t,n,i=null,r=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Qt(e,t)&&(i=Z(e),K(e,r,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Ut:v(e,t,n,i);break;case qt:C(e,t,n,i);break;case Wt:null==e&&b(t,n,i,o);break;case Lt:M(e,t,n,i,r,s,o,a,l);break;default:1&h?T(e,t,n,i,r,s,o,a,l):6&h?F(e,t,n,i,r,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,i,r,s,o,a,l,te)}null!=u&&r&&Pt(u,e&&e.ref,s,t||e,!t)},v=(e,t,n,i)=>{if(null==e)s(t.el=c(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},C=(e,t,n,i)=>{null==e?s(t.el=u(t.children||""),n,i):t.el=e.el},b=(e,t,n,i)=>{[e.el,e.anchor]=m(e.children,t,n,i,e.el,e.anchor)},w=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=f(e),s(e,n,i),e=r;s(t,n,i)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},T=(e,t,n,i,r,s,o,a,l)=>{o=o||"svg"===t.type,null==e?S(t,n,i,r,s,o,a,l):D(e,t,r,s,o,a,l)},S=(e,t,n,i,o,c,u,h)=>{let p,f;const{type:_,props:m,shapeFlag:y,transition:v,patchFlag:C,dirs:b}=e;if(e.el&&void 0!==g&&-1===C)p=e.el=g(e.el);else{if(p=e.el=l(e.type,c,m&&m.is,m),8&y?d(p,e.children):16&y&&N(e.children,p,null,i,o,c&&"foreignObject"!==_,u,h),b&&Le(e,null,i,"created"),m){for(const t in m)"value"===t||(0,r.Gg)(t)||a(p,t,null,m[t],c,e.children,i,o,X);"value"in m&&a(p,"value",null,m.value),(f=m.onVnodeBeforeMount)&&pn(f,i,e)}P(p,e,e.scopeId,u,i)}b&&Le(e,null,i,"beforeMount");const w=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;w&&v.beforeEnter(p),s(p,t,n),((f=m&&m.onVnodeMounted)||w||b)&&xt((()=>{f&&pn(f,i,e),w&&v.enter(p),b&&Le(e,null,i,"mounted")}),o)},P=(e,t,n,i,r)=>{if(n&&_(e,n),i)for(let s=0;s<i.length;s++)_(e,i[s]);if(r){let n=r.subTree;if(t===n){const t=r.vnode;P(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},N=(e,t,n,i,r,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?un(e[c]):cn(e[c]);y(null,l,t,n,i,r,s,o,a)}},D=(e,t,n,i,s,o,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||r.kT,_=t.props||r.kT;let g;n&&At(n,!1),(g=_.onVnodeBeforeUpdate)&&pn(g,n,t,e),p&&Le(t,e,n,"beforeUpdate"),n&&At(n,!0);const m=s&&"foreignObject"!==t.type;if(h?A(e.dynamicChildren,h,c,n,i,m,o):l||j(e,t,c,null,n,i,m,o,!1),u>0){if(16&u)O(c,t,f,_,n,i,s);else if(2&u&&f.class!==_.class&&a(c,"class",null,_.class,s),4&u&&a(c,"style",f.style,_.style,s),8&u){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const o=r[t],l=f[o],u=_[o];u===l&&"value"!==o||a(c,o,l,u,s,e.children,n,i,X)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=h||O(c,t,f,_,n,i,s);((g=_.onVnodeUpdated)||p)&&xt((()=>{g&&pn(g,n,t,e),p&&Le(t,e,n,"updated")}),i)},A=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Lt||!Qt(l,c)||70&l.shapeFlag)?p(l.el):n;y(l,c,u,null,i,r,s,o,!0)}},O=(e,t,n,i,s,o,l)=>{if(n!==i){for(const c in i){if((0,r.Gg)(c))continue;const u=i[c],h=n[c];u!==h&&"value"!==c&&a(e,c,h,u,l,t.children,s,o,X)}if(n!==r.kT)for(const c in n)(0,r.Gg)(c)||c in i||a(e,c,n[c],null,l,t.children,s,o,X);"value"in i&&a(e,"value",n.value,i.value)}},M=(e,t,n,i,r,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:_}=t;_&&(l=l?l.concat(_):_),null==e?(s(h,n,i),s(d,n,i),N(t.children,n,d,r,o,a,l,u)):p>0&&64&p&&f&&e.dynamicChildren?(A(e.dynamicChildren,f,n,r,o,a,l),(null!=t.key||r&&t===r.subTree)&&Ot(e,t,!0)):j(e,t,n,d,r,o,a,l,u)},F=(e,t,n,i,r,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,l):L(t,n,i,r,s,o,l):U(e,t,l)},L=(e,t,n,i,r,s,o)=>{const a=e.component=gn(e,i,r);if(ge(e)&&(a.ctx.renderer=te),Tn(a),a.asyncDep){if(r&&r.registerDep(a,q),!e.el){const e=a.subTree=nn(qt);C(null,e,t,n)}}else q(a,e,t,n,r,s,o)},U=(e,t,n)=>{const i=t.component=e.component;if(z(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void W(i,t,n);i.next=t,k(i.update),i.update()}else t.el=e.el,i.vnode=t},q=(e,t,n,s,o,a,l)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:s,parent:c,vnode:u}=e,h=n;0,At(e,!1),n?(n.el=u.el,W(e,n,l)):n=u,i&&(0,r.ir)(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&pn(t,c,n,u),At(e,!0);const d=V(e);0;const f=e.subTree;e.subTree=d,y(f,d,p(f.el),Z(f),e,o,a),n.el=d.el,null===h&&G(e,d.el),s&&xt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&xt((()=>pn(t,c,n,u)),o)}else{let i;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,p=_e(t);if(At(e,!1),u&&(0,r.ir)(u),!p&&(i=c&&c.onVnodeBeforeMount)&&pn(i,d,t),At(e,!0),l&&ie){const n=()=>{e.subTree=V(e),ie(l,e.subTree,e,o,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const i=e.subTree=V(e);0,y(null,i,n,s,e,o,a),t.el=i.el}if(h&&xt(h,o),!p&&(i=c&&c.onVnodeMounted)){const e=t;xt((()=>pn(i,d,e)),o)}(256&t.shapeFlag||d&&_e(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&xt(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new i.qq(c,(()=>E(h)),e.scope),h=e.update=()=>u.run();h.id=e.uid,At(e,!0),h()},W=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,ut(e,t.props,r,n),Et(e,t.children,n),(0,i.Jd)(),x(void 0,e.update),(0,i.lk)()},j=(e,t,n,i,r,s,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void H(c,h,n,i,r,s,o,a,l);if(256&p)return void B(c,h,n,i,r,s,o,a,l)}8&f?(16&u&&X(c,r,s),h!==c&&d(n,h)):16&u?16&f?H(c,h,n,i,r,s,o,a,l):X(c,r,s,!0):(8&u&&d(n,""),16&f&&N(h,n,i,r,s,o,a,l))},B=(e,t,n,i,s,o,a,l,c)=>{e=e||r.Z6,t=t||r.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const i=t[p]=c?un(t[p]):cn(t[p]);y(e[p],i,n,null,s,o,a,l,c)}u>h?X(e,s,o,!0,!1,d):N(t,n,i,s,o,a,l,c,d)},H=(e,t,n,i,s,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;while(u<=d&&u<=p){const i=e[u],r=t[u]=c?un(t[u]):cn(t[u]);if(!Qt(i,r))break;y(i,r,n,null,s,o,a,l,c),u++}while(u<=d&&u<=p){const i=e[d],r=t[p]=c?un(t[p]):cn(t[p]);if(!Qt(i,r))break;y(i,r,n,null,s,o,a,l,c),d--,p--}if(u>d){if(u<=p){const e=p+1,r=e<h?t[e].el:i;while(u<=p)y(null,t[u]=c?un(t[u]):cn(t[u]),n,r,s,o,a,l,c),u++}}else if(u>p)while(u<=d)K(e[u],s,o,!0),u++;else{const f=u,_=u,g=new Map;for(u=_;u<=p;u++){const e=t[u]=c?un(t[u]):cn(t[u]);null!=e.key&&g.set(e.key,u)}let m,v=0;const C=p-_+1;let b=!1,w=0;const I=new Array(C);for(u=0;u<C;u++)I[u]=0;for(u=f;u<=d;u++){const i=e[u];if(v>=C){K(i,s,o,!0);continue}let r;if(null!=i.key)r=g.get(i.key);else for(m=_;m<=p;m++)if(0===I[m-_]&&Qt(i,t[m])){r=m;break}void 0===r?K(i,s,o,!0):(I[r-_]=u+1,r>=w?w=r:b=!0,y(i,t[r],n,null,s,o,a,l,c),v++)}const E=b?Mt(I):r.Z6;for(m=E.length-1,u=C-1;u>=0;u--){const e=_+u,r=t[e],d=e+1<h?t[e+1].el:i;0===I[u]?y(null,r,n,d,s,o,a,l,c):b&&(m<0||u!==E[m]?$(r,n,d,2):m--)}}},$=(e,t,n,i,r=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void $(e.component.subTree,t,n,i);if(128&u)return void e.suspense.move(t,n,i);if(64&u)return void a.move(e,t,n,te);if(a===Lt){s(o,t,n);for(let e=0;e<c.length;e++)$(c[e],t,n,i);return void s(e.anchor,t,n)}if(a===Wt)return void w(e,t,n);const h=2!==i&&1&u&&l;if(h)if(0===i)l.beforeEnter(o),s(o,t,n),xt((()=>l.enter(o)),r);else{const{leave:e,delayLeave:i,afterLeave:r}=l,a=()=>s(o,t,n),c=()=>{e(o,(()=>{a(),r&&r()}))};i?i(o,a,c):c()}else s(o,t,n)},K=(e,t,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Pt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!_e(e);let _;if(f&&(_=o&&o.onVnodeBeforeUnmount)&&pn(_,t,e),6&u)Q(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);p&&Le(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,te,i):c&&(s!==Lt||h>0&&64&h)?X(c,t,n,!1,!0):(s===Lt&&384&h||!r&&16&u)&&X(l,t,n),i&&Y(e)}(f&&(_=o&&o.onVnodeUnmounted)||p)&&xt((()=>{_&&pn(_,t,e),p&&Le(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===Lt)return void J(n,i);if(t===Wt)return void I(e);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,o=()=>t(n,s);i?i(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:l}=e;i&&(0,r.ir)(i),s.stop(),o&&(o.active=!1,K(a,e,t,n)),l&&xt(l,t),xt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,i,r)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),R(),t._vnode=e},te={p:y,um:K,m:$,r:Y,mt:L,mc:N,pc:j,pbc:A,n:Z,o:e};let ne,ie;return t&&([ne,ie]=t(te)),{render:ee,hydrate:ne,createApp:St(ee,ne)}}function At({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ot(e,t,n=!1){const i=e.children,s=t.children;if((0,r.kJ)(i)&&(0,r.kJ)(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=un(s[r]),t.el=e.el),n||Ot(e,t))}}function Mt(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Ft=e=>e.__isTeleport;const Lt=Symbol(void 0),Ut=Symbol(void 0),qt=Symbol(void 0),Wt=Symbol(void 0),jt=[];let Bt=null;function Vt(e=!1){jt.push(Bt=e?null:[])}function Ht(){jt.pop(),Bt=jt[jt.length-1]||null}let $t=1;function zt(e){$t+=e}function Kt(e){return e.dynamicChildren=$t>0?Bt||r.Z6:null,Ht(),$t>0&&Bt&&Bt.push(e),e}function Gt(e,t,n,i,r,s){return Kt(tn(e,t,n,i,r,s,!0))}function Yt(e,t,n,i,r){return Kt(nn(e,t,n,i,r,!0))}function Jt(e){return!!e&&!0===e.__v_isVNode}function Qt(e,t){return e.type===t.type&&e.key===t.key}const Xt="__vInternal",Zt=({key:e})=>null!=e?e:null,en=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,r.HD)(e)||(0,i.dq)(e)||(0,r.mf)(e)?{i:L,r:e,k:t,f:!!n}:e:null;function tn(e,t=null,n=null,i=0,s=null,o=(e===Lt?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zt(t),ref:t&&en(t),scopeId:U,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(hn(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=(0,r.HD)(n)?8:16),$t>0&&!a&&Bt&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Bt.push(c),c}const nn=rn;function rn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==We||(e=qt),Jt(e)){const i=on(e,t,!0);return n&&hn(i,n),$t>0&&!a&&Bt&&(6&i.shapeFlag?Bt[Bt.indexOf(e)]=i:Bt.push(i)),i.patchFlag|=-2,i}if(An(e)&&(e=e.__vccOpts),t){t=sn(t);let{class:e,style:n}=t;e&&!(0,r.HD)(e)&&(t.class=(0,r.C_)(e)),(0,r.Kn)(n)&&((0,i.X3)(n)&&!(0,r.kJ)(n)&&(n=(0,r.l7)({},n)),t.style=(0,r.j5)(n))}const l=(0,r.HD)(e)?1:Y(e)?128:Ft(e)?64:(0,r.Kn)(e)?4:(0,r.mf)(e)?2:0;return tn(e,t,n,s,o,l,a,!0)}function sn(e){return e?(0,i.X3)(e)||Xt in e?(0,r.l7)({},e):e:null}function on(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=e,l=t?dn(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Zt(l),ref:t&&t.ref?n&&s?(0,r.kJ)(s)?s.concat(en(t)):[s,en(t)]:en(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Lt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&on(e.ssContent),ssFallback:e.ssFallback&&on(e.ssFallback),el:e.el,anchor:e.anchor};return c}function an(e=" ",t=0){return nn(Ut,null,e,t)}function ln(e="",t=!1){return t?(Vt(),Yt(qt,null,e)):nn(qt,null,e)}function cn(e){return null==e||"boolean"===typeof e?nn(qt):(0,r.kJ)(e)?nn(Lt,null,e.slice()):"object"===typeof e?un(e):nn(Ut,null,String(e))}function un(e){return null===e.el||e.memo?e:on(e)}function hn(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,r.kJ)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),hn(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||Xt in t?3===i&&L&&(1===L.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=L}}else(0,r.mf)(t)?(t={default:t,_ctx:L},n=32):(t=String(t),64&i?(n=16,t=[an(t)]):n=8);e.children=t,e.shapeFlag|=n}function dn(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,r.C_)([t.class,i.class]));else if("style"===e)t.style=(0,r.j5)([t.style,i.style]);else if((0,r.F7)(e)){const n=t[e],s=i[e];!s||n===s||(0,r.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function pn(e,t,n,i=null){o(e,t,7,[n,i])}const fn=Tt();let _n=0;function gn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||fn,a={uid:_n++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pt(s,o),emitsOptions:M(s,o),emit:null,emitted:null,propsDefaults:r.kT,inheritAttrs:s.inheritAttrs,ctx:r.kT,data:r.kT,props:r.kT,attrs:r.kT,slots:r.kT,refs:r.kT,setupState:r.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=O.bind(null,a),e.ce&&e.ce(a),a}let mn=null;const yn=()=>mn||L,vn=e=>{mn=e,e.scope.on()},Cn=()=>{mn&&mn.scope.off(),mn=null};function bn(e){return 4&e.vnode.shapeFlag}let wn,In,En=!1;function Tn(e,t=!1){En=t;const{props:n,children:i}=e.vnode,r=bn(e);ct(e,n,r,t),It(e,i);const s=r?kn(e,t):void 0;return En=!1,s}function kn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,i.Xl)(new Proxy(e.ctx,Ge));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?xn(e):null;vn(e),(0,i.Jd)();const l=s(o,e,0,[e.props,n]);if((0,i.lk)(),Cn(),(0,r.tI)(l)){if(l.then(Cn,Cn),t)return l.then((n=>{Sn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else Sn(e,l,t)}else Pn(e,t)}function Sn(e,t,n){(0,r.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,r.Kn)(t)&&(e.setupState=(0,i.WL)(t)),Pn(e,n)}function Pn(e,t,n){const s=e.type;if(!e.render){if(!t&&wn&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,r.l7)((0,r.l7)({isCustomElement:n,delimiters:o},i),a);s.render=wn(t,l)}}e.render=s.render||r.dG,In&&In(e)}vn(e),(0,i.Jd)(),Je(e),(0,i.lk)(),Cn()}function Nn(e){return new Proxy(e.attrs,{get(t,n){return(0,i.j)(e,"get","$attrs"),t[n]}})}function xn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Nn(e))},slots:e.slots,emit:e.emit,expose:t}}function Rn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,i.WL)((0,i.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ke?Ke[n](e):void 0}}))}function Dn(e,t=!0){return(0,r.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function An(e){return(0,r.mf)(e)&&"__vccOpts"in e}const On=(e,t)=>(0,i.Fl)(e,t,En);function Mn(e,t,n){const i=arguments.length;return 2===i?(0,r.Kn)(t)&&!(0,r.kJ)(t)?Jt(t)?nn(e,null,[t]):nn(e,t):nn(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Jt(n)&&(n=[n]),nn(e,t,n))}Symbol("");const Fn="3.2.37"},963:function(e,t,n){n.d(t,{bM:function(){return ie},iM:function(){return le},nr:function(){return ne},ri:function(){return de}});var i=n(577),r=n(252);n(262);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?o.createElementNS(s,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{a.innerHTML=i?`<svg>${e}</svg>`:e;const r=a.content;if(i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function c(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function u(e,t,n){const r=e.style,s=(0,i.HD)(n);if(n&&!s){for(const e in n)d(r,e,n[e]);if(t&&!(0,i.HD)(t))for(const e in t)null==n[e]&&d(r,e,"")}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const h=/\s*!important$/;function d(e,t,n){if((0,i.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=_(e,t);h.test(n)?e.setProperty((0,i.rs)(r),n.replace(h,""),"important"):e[r]=n}}const p=["Webkit","Moz","ms"],f={};function _(e,t){const n=f[t];if(n)return n;let r=(0,i._A)(t);if("filter"!==r&&r in e)return f[t]=r;r=(0,i.kC)(r);for(let i=0;i<p.length;i++){const n=p[i]+r;if(n in e)return f[t]=n}return t}const g="http://www.w3.org/1999/xlink";function m(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const r=(0,i.Pq)(t);null==n||r&&!(0,i.yA)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function y(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const i=null==n?"":n;return e.value===i&&"OPTION"!==e.tagName||(e.value=i),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(c){0}l&&e.removeAttribute(t)}const[v,C]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let b=0;const w=Promise.resolve(),I=()=>{b=0},E=()=>b||(w.then(I),b=v());function T(e,t,n,i){e.addEventListener(t,n,i)}function k(e,t,n,i){e.removeEventListener(t,n,i)}function S(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=N(t);if(i){const o=s[t]=x(i,r);T(e,n,o,a)}else o&&(k(e,n,o,a),s[t]=void 0)}}const P=/(?:Once|Passive|Capture)$/;function N(e){let t;if(P.test(e)){let n;t={};while(n=e.match(P))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,i.rs)(e.slice(2)),t]}function x(e,t){const n=e=>{const i=e.timeStamp||v();(C||i>=n.attached-1)&&(0,r.$d)(R(e,n.value),t,5,[e])};return n.value=e,n.attached=E(),n}function R(e,t){if((0,i.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const D=/^on[a-z]/,A=(e,t,n,r,s=!1,o,a,l,h)=>{"class"===t?c(e,r,s):"style"===t?u(e,n,r):(0,i.F7)(t)?(0,i.tR)(t)||S(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):O(e,t,r,s))?y(e,t,r,o,a,l,h):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),m(e,t,r,s))};function O(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&D.test(t)&&(0,i.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!D.test(t)||!(0,i.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",F="animation",L=(e,{slots:t})=>(0,r.h)(r.P$,j(e),t);L.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},q=(L.props=(0,i.l7)({},r.P$.props,U),(e,t=[])=>{(0,i.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),W=e=>!!e&&((0,i.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const i in e)i in U||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,_=B(s),g=_&&_[0],m=_&&_[1],{onBeforeEnter:y,onEnter:v,onEnterCancelled:C,onLeave:b,onLeaveCancelled:w,onBeforeAppear:I=y,onAppear:E=v,onAppearCancelled:T=C}=t,k=(e,t,n)=>{$(e,t?h:l),$(e,t?u:a),n&&n()},S=(e,t)=>{e._isLeaving=!1,$(e,d),$(e,f),$(e,p),t&&t()},P=e=>(t,n)=>{const i=e?E:v,s=()=>k(t,e,n);q(i,[t,s]),z((()=>{$(t,e?c:o),H(t,e?h:l),W(i)||G(t,r,g,s)}))};return(0,i.l7)(t,{onBeforeEnter(e){q(y,[e]),H(e,o),H(e,a)},onBeforeAppear(e){q(I,[e]),H(e,c),H(e,u)},onEnter:P(!1),onAppear:P(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>S(e,t);H(e,d),X(),H(e,p),z((()=>{e._isLeaving&&($(e,d),H(e,f),W(b)||G(e,r,m,n))})),q(b,[e,n])},onEnterCancelled(e){k(e,!1),q(C,[e])},onAppearCancelled(e){k(e,!0),q(T,[e])},onLeaveCancelled(e){S(e),q(w,[e])}})}function B(e){if(null==e)return null;if((0,i.Kn)(e))return[V(e.enter),V(e.leave)];{const t=V(e);return[t,t]}}function V(e){const t=(0,i.He)(e);return t}function H(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function $(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function z(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let K=0;function G(e,t,n,i){const r=e._endId=++K,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Y(e,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,d),s()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function Y(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),r=i(M+"Delay"),s=i(M+"Duration"),o=J(r,s),a=i(F+"Delay"),l=i(F+"Duration"),c=J(a,l);let u=null,h=0,d=0;t===M?o>0&&(u=M,h=o,d=s.length):t===F?c>0&&(u=F,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?M:F:null,d=u?u===M?s.length:l.length:0);const p=u===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:p}}function J(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Q(t)+Q(e[n]))))}function Q(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(t)?e=>(0,i.ir)(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ne={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=Z(s);const o=r||s.props&&"number"===s.props.type;T(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.He)(r)),e._assign(r)})),n&&T(e,"change",(()=>{e.value=e.value.trim()})),t||(T(e,"compositionstart",ee),T(e,"compositionend",te),T(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e._assign=Z(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,i.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ie={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=(0,i.DM)(t);T(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,i.He)(se(e)):se(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=Z(r)},mounted(e,{value:t}){re(e,t)},beforeUpdate(e,t,n){e._assign=Z(n)},updated(e,{value:t}){re(e,t)}};function re(e,t){const n=e.multiple;if(!n||(0,i.kJ)(t)||(0,i.DM)(t)){for(let r=0,s=e.options.length;r<s;r++){const s=e.options[r],o=se(s);if(n)(0,i.kJ)(t)?s.selected=(0,i.hq)(t,o)>-1:s.selected=t.has(o);else if((0,i.WV)(se(s),t))return void(e.selectedIndex!==r&&(e.selectedIndex=r))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function se(e){return"_value"in e?e._value:e.value}const oe=["ctrl","shift","alt","meta"],ae={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>oe.some((n=>e[`${n}Key`]&&!t.includes(n)))},le=(e,t)=>(n,...i)=>{for(let e=0;e<t.length;e++){const i=ae[t[e]];if(i&&i(n,t))return}return e(n,...i)};const ce=(0,i.l7)({patchProp:A},l);let ue;function he(){return ue||(ue=(0,r.Us)(ce))}const de=(...e)=>{const t=he().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=pe(e);if(!r)return;const s=t._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function pe(e){if((0,i.HD)(e)){const t=document.querySelector(e);return t}return e}},577:function(e,t,n){function i(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return p},DM:function(){return D},E9:function(){return ie},F7:function(){return E},Gg:function(){return H},HD:function(){return M},He:function(){return te},Kn:function(){return L},NO:function(){return w},Nj:function(){return ee},Od:function(){return S},PO:function(){return B},Pq:function(){return a},RI:function(){return N},S0:function(){return V},W7:function(){return j},WV:function(){return _},Z6:function(){return C},_A:function(){return K},_N:function(){return R},aU:function(){return X},dG:function(){return b},e1:function(){return s},fY:function(){return i},hR:function(){return Q},hq:function(){return g},ir:function(){return Z},j5:function(){return c},kC:function(){return J},kJ:function(){return x},kT:function(){return v},l7:function(){return k},mf:function(){return O},rs:function(){return Y},tI:function(){return U},tR:function(){return T},yA:function(){return l},yk:function(){return F},zw:function(){return m}});const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=i(r);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=i(o);function l(e){return!!e||""===e}function c(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=M(i)?d(i):c(i);if(r)for(const e in r)t[e]=r[e]}return t}return M(e)||L(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function p(e){let t="";if(M(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const i=p(e[n]);i&&(t+=i+" ")}else if(L(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function f(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=_(e[i],t[i]);return n}function _(e,t){if(e===t)return!0;let n=A(e),i=A(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=F(e),i=F(t),n||i)return e===t;if(n=x(e),i=x(t),n||i)return!(!n||!i)&&f(e,t);if(n=L(e),i=L(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!_(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>_(e,t)))}const m=e=>M(e)?e:null==e?"":x(e)||L(e)&&(e.toString===q||!O(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):R(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!L(t)||x(t)||B(t)?t:String(t),v={},C=[],b=()=>{},w=()=>!1,I=/^on[^a-z]/,E=e=>I.test(e),T=e=>e.startsWith("onUpdate:"),k=Object.assign,S=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},P=Object.prototype.hasOwnProperty,N=(e,t)=>P.call(e,t),x=Array.isArray,R=e=>"[object Map]"===W(e),D=e=>"[object Set]"===W(e),A=e=>"[object Date]"===W(e),O=e=>"function"===typeof e,M=e=>"string"===typeof e,F=e=>"symbol"===typeof e,L=e=>null!==e&&"object"===typeof e,U=e=>L(e)&&O(e.then)&&O(e.catch),q=Object.prototype.toString,W=e=>q.call(e),j=e=>W(e).slice(8,-1),B=e=>"[object Object]"===W(e),V=e=>M(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,H=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},z=/-(\w)/g,K=$((e=>e.replace(z,((e,t)=>t?t.toUpperCase():"")))),G=/\B([A-Z])/g,Y=$((e=>e.replace(G,"-$1").toLowerCase())),J=$((e=>e.charAt(0).toUpperCase()+e.slice(1))),Q=$((e=>e?`on${J(e)}`:"")),X=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const ie=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},503:function(e,t,n){n.d(t,{ZF:function(){return i.ZF}});var i=n(816),r="firebase",s="9.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(r,s,"app")},663:function(e,t,n){n.d(t,{iU:function(){return Oo},U2:function(){return Mo},N8:function(){return $o},iH:function(){return Ao}});var i=n(816),r=n(463),s=n(444),o=n(333);const a="@firebase/database",l="0.13.9";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="";function u(e){c=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},f=p("localStorage"),_=p("sessionStorage"),g=new o.Yd("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),y=function(e){const t=(0,s.dS)(e),n=new s.gQ;n.update(t);const i=n.digest();return s.US.encodeByteArray(i)},v=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=v.apply(null,i):t+="object"===typeof i?(0,s.Wl)(i):i,t+=" "}return t};let C=null,b=!0;const w=function(e,t){(0,s.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o["in"].VERBOSE,C=g.log.bind(g),t&&_.set("logging_enabled",!0)):"function"===typeof e?C=e:(C=null,_.remove("logging_enabled"))},I=function(...e){if(!0===b&&(b=!1,null===C&&!0===_.get("logging_enabled")&&w(!0)),C){const t=v.apply(null,e);C(t)}},E=function(e){return function(...t){I(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+v(...e);g.error(t)},k=function(...e){const t=`FIREBASE FATAL ERROR: ${v(...e)}`;throw g.error(t),new Error(t)},S=function(...e){const t="FIREBASE WARNING: "+v(...e);g.warn(t)},P=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},N=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},x=function(e){if((0,s.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},R="[MIN_NAME]",D="[MAX_NAME]",A=function(e,t){if(e===t)return 0;if(e===R||t===D)return-1;if(t===R||e===D)return 1;{const n=z(e),i=z(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},O=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.Wl)(t))},F=function(e){if("object"!==typeof e||null===e)return(0,s.Wl)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,s.Wl)(t[i]),n+=":",n+=F(e[t[i]]);return n+="}",n},L=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function U(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const q=function(e){(0,s.hu)(!N(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,l,c;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=l+i,a=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(h.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},W=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},j=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function B(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const V=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,$=2147483647,z=function(e){if(V.test(e)){const t=Number(e);if(t>=H&&t<=$)return t}return null},K=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw S("Exception was thrown by user callback.",e),t}),Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",le="websocket",ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if((0,s.hu)("string"===typeof t,"typeof type must == string"),(0,s.hu)("object"===typeof n,"typeof params must == object"),t===le)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const r=[];return U(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={},_e={};function ge(e){const t=e.toString();return fe[t]||(fe[t]=new pe),fe[t]}function me(e,t){const n=e.toString();return _e[n]||(_e[n]=t()),_e[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&K((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="start",Ce="close",be="pLPCommand",we="pRTLPCB",Ie="id",Ee="pw",Te="ser",ke="cb",Se="seg",Pe="ts",Ne="d",xe="dframe",Re=1870,De=30,Ae=Re-De,Oe=25e3,Me=3e4;class Fe{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=E(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ye(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Me)),x((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Le(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ve)this.id=n,this.password=i;else{if(t!==Ce)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ve]="t",e[Te]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[ke]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fe.forceAllow_=!0}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){return!(0,s.Yr)()&&(!!Fe.forceAllow_||!Fe.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!W()&&!j())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.h$)(t),i=L(n,Ae);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[xe]="t",n[Ie]=e,n[Ee]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Le{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[be+this.uniqueCallbackIdentifier]=e,window[we+this.uniqueCallbackIdentifier]=t,this.myIFrame=Le.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){I("frame writing exception"),r.stack&&I(r.stack),I(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||I("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ie]=this.myID,e[Ee]=this.myPW,e[Te]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+De+n.length<=Re))break;{const e=this.pendingSegs.shift();n=n+"&"+Se+i+"="+e.seg+"&"+Pe+i+"="+e.ts+"&"+Ne+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Oe)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){(0,s.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{I("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=16384,qe=45e3;let We=null;"undefined"!==typeof MozWebSocket?We=MozWebSocket:"undefined"!==typeof WebSocket&&(We=WebSocket);class je{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=E(this.connId),this.stats_=ge(t),this.connURL=je.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const o={};return o[ee]=Z,!(0,s.Yr)()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(o[ne]=ie),t&&(o[te]=t),n&&(o[se]=n),i&&(o[ae]=i),r&&(o[oe]=r),de(e,le,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{let e;if((0,s.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Z}/${c}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyDxbMGWiD2Wr9qy8wrxA4VkI581EgKPj4s",VUE_APP_AUTH_DOMAIN:"advr-consultores.firebaseapp.com",VUE_APP_DATABASE_URL:"https://advr-consultores-default-rtdb.firebaseio.com",VUE_APP_PROJECT_ID:"advr-consultores",VUE_APP_STORAGE_BUCKET:"advr-consultores.appspot.com",VUE_APP_MESSAGING_SENDER_ID:"950650780471",VUE_APP_APP_ID:"1:950650780471:web:6bbc43f41d56abc9fcf8b2",VUE_APP_MEASUREMENT_ID:"G-SRQCGWSDVY",BASE_URL:"/renombrando-archivos/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new We(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==We&&!je.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=L(t,Ue);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(qe))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2,je.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fe,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=je&&je["isAvailable"]();let n=t&&!je.previouslyFailed();if(e.webSocketOnly&&(t||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[je];else{const e=this.transports_=[];for(const t of Be.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Be.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Be.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ve=6e4,He=5e3,$e=10240,ze=102400,Ke="t",Ge="d",Ye="s",Je="r",Qe="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=E("c:"+this.id+":"),this.transportManager_=new Be(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ze?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$e?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ke in e){const t=e[Ke];t===Ze?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(Ke,e);if(Ge in e){const n=e[Ge];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Qe?T("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Ve))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(He))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){(0,s.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ot}getInitialEvent(e){return(0,s.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,lt=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new ct("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function _t(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function yt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function vt(e){return e.pieceNum_>=e.pieces_.length}function Ct(e,t){const n=ht(e),i=ht(t);if(null===n)return t;if(n===i)return Ct(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function wt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class It{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.ug)(this.parts_[n]);kt(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,s.ug)(t),kt(e)}function Tt(e){const t=e.parts_.pop();e.byteLength_-=(0,s.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function kt(e){if(e.byteLength_>lt)throw new Error(e.errorPrefix_+"has a key path longer than "+lt+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+St(e))}function St(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Pt}getInitialEvent(e){return(0,s.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=1e3,xt=3e5,Rt=3e4,Dt=1.3,At=3e4,Ot="server_kill",Mt=3;class Ft extends rt{constructor(e,t,n,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ft.nextPersistentConnectionId_++,this.log_=E("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nt,this.maxReconnectDelay_=xt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,s.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,s.Wl)(r)),(0,s.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s.BH,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.hu)(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];Ft.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,s.r3)(e,"w")){const n=(0,s.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,s.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.Wl)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+(0,s.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>At&&(this.reconnectDelay_=Nt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(e){(0,s.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=l&&l.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{S(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ot)}),r))}catch(T){this.log_("Failed to get token: "+T),o||(this.repoInfo_.nodeAdmin&&S(T),l())}}}interrupt(e){I("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){I("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>F(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){I("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=Rt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){I("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,(0,s.uI)()?e["framework.cordova"]=1:(0,s.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return(0,s.xb)(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0,Ft.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Lt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Lt(R,e),i=new Lt(R,t);return 0!==this.compare(n,i)}minPost(){return Lt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;class Wt extends Ut{static get __EMPTY_NODE(){return qt}static set __EMPTY_NODE(e){qt=e}compare(e,t){return A(e.name,t.name)}isDefinedOn(e){throw(0,s.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Lt.MIN}maxPost(){return new Lt(D,qt)}makePost(e,t){return(0,s.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Lt(e,qt)}toString(){return".key"}}const jt=new Wt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Vt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Vt.RED,this.left=null!=i?i:$t.EMPTY_NODE,this.right=null!=r?r:$t.EMPTY_NODE}copy(e,t,n,i,r){return new Vt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return $t.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Vt.RED=!0,Vt.BLACK=!1;class Ht{copy(e,t,n,i,r){return this}insert(e,t,n){return new Vt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,t=$t.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $t(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Bt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(e,t){return A(e.name,t.name)}function Kt(e,t){return A(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt;function Yt(e){Gt=e}$t.EMPTY_NODE=new Ht;const Jt=function(e){return"number"===typeof e?"number:"+q(e):"string:"+e},Qt=function(e){if(e.isLeafNode()){const t=e.val();(0,s.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,s.r3)(t,".sv"),"Priority must be a string or number.")}else(0,s.hu)(e===Gt||e.isEmpty(),"priority of unexpected type.");(0,s.hu)(e===Gt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xt,Zt,en;class tn{constructor(e,t=tn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Qt(this.priorityNode_)}static set __childrenNodeConstructor(e){Xt=e}static get __childrenNodeConstructor(){return Xt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return vt(e)?this:".priority"===ht(e)?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:tn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.hu)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,tn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?q(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tn.__childrenNodeConstructor?-1:((0,s.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=tn.VALUE_TYPE_ORDER.indexOf(t),r=tn.VALUE_TYPE_ORDER.indexOf(n);return(0,s.hu)(i>=0,"Unknown leaf type: "+t),(0,s.hu)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function nn(e){Zt=e}function rn(e){en=e}tn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Ut{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?A(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Lt.MIN}maxPost(){return new Lt(D,new tn("[PRIORITY-POST]",en))}makePost(e,t){const n=Zt(e);return new Lt(t,new tn("[PRIORITY-POST]",n))}toString(){return".priority"}}const on=new sn,an=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/an,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cn=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),u=r(l+1,i);return o=e[l],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,c,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),u=e[s],h=n?n(u):u;l(new Vt(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Vt.BLACK):(a(i,Vt.BLACK),a(i,Vt.RED))}return s},o=new ln(e.length),a=s(o);return new $t(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const hn={};class dn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.hu)(hn&&on,"ChildrenNode.ts has not been loaded"),un=un||new dn({".priority":hn},{".priority":on}),un}get(e){const t=(0,s.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $t?t:null}hasIndex(e){return(0,s.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.hu)(e!==jt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Lt.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?cn(n,e.getCompare()):hn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=o,new dn(u,c)}addToIndexes(e,t){const n=(0,s.UI)(this.indexes_,((n,i)=>{const r=(0,s.DV)(this.indexSet_,i);if((0,s.hu)(r,"Missing index implementation for "+i),n===hn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Lt.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),cn(n,r.getCompare())}return hn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Lt(e.name,i))),r.insert(e,e.node)}}));return new dn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.UI)(this.indexes_,(n=>{if(n===hn)return n;{const i=t.get(e.name);return i?n.remove(new Lt(e.name,i)):n}}));return new dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class fn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Qt(this.priorityNode_),this.children_.isEmpty()&&(0,s.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new fn(new $t(Kt),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new fn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Lt(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?pn:this.priorityNode_;return new fn(i,s,r)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,s.hu)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(on,((s,o)=>{t[s]=o.val(e),n++,r&&fn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jt(this.getPriority().val())+":"),this.forEachChild(on,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Lt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Lt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Lt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Lt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Lt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gn?-1:0}withIndex(e){if(e===jt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new fn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===jt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(on),n=t.getIterator(on);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===jt?null:this.indexMap_.get(e.toString())}}fn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _n extends fn{constructor(){super(new $t(Kt),fn.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fn.EMPTY_NODE}isEmpty(){return!1}}const gn=new _n;Object.defineProperties(Lt,{MIN:{value:new Lt(R,fn.EMPTY_NODE)},MAX:{value:new Lt(D,gn)}}),Wt.__EMPTY_NODE=fn.EMPTY_NODE,tn.__childrenNodeConstructor=fn,Yt(gn),rn(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn=!0;function yn(e,t=null){if(null===e)return fn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new tn(n,yn(t))}if(e instanceof Array||!mn){let n=fn.EMPTY_NODE;return U(e,((t,i)=>{if((0,s.r3)(e,t)&&"."!==t.substring(0,1)){const e=yn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(yn(t))}{const n=[];let i=!1;const r=e;if(U(r,((e,t)=>{if("."!==e.substring(0,1)){const r=yn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Lt(e,r)))}})),0===n.length)return fn.EMPTY_NODE;const s=cn(n,zt,(e=>e.name),Kt);if(i){const e=cn(n,on.getCompare());return new fn(s,yn(t),new dn({".priority":e},{".priority":on}))}return new fn(s,yn(t),dn.Default)}}nn(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends Ut{constructor(e){super(),this.indexPath_=e,(0,s.hu)(!vt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?A(e.name,t.name):r}makePost(e,t){const n=yn(e),i=fn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Lt(t,i)}maxPost(){const e=fn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Lt(D,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?A(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Lt.MIN}maxPost(){return Lt.MAX}makePost(e,t){const n=yn(e);return new Lt(t,n)}toString(){return".value"}}const bn=new Cn,wn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function In(e){return{type:"value",snapshotNode:e}}function En(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Tn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function kn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){(0,s.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Tn(t,a)):(0,s.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(En(t,n)):o.trackChildChange(kn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(on,((e,i)=>{t.hasChild(e)||n.trackChildChange(Tn(e,i))})),t.isLeafNode()||t.forEachChild(on,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(kn(t,i,r))}else n.trackChildChange(En(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?fn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.indexedFilter_=new Pn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nn.getStartPost_(e),this.endPost_=Nn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Lt(t,n))||(n=fn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=fn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(fn.EMPTY_NODE);const r=this;return t.forEachChild(on,((e,t)=>{r.matches(new Lt(e,t))||(i=i.updateImmediateChild(e,fn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.rangedFilter_=new Nn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Lt(t,n))||(n=fn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=fn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=fn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(fn.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);const l=a&&o<this.limit_&&r(t,n)<=0;l?o++:i=i.updateImmediateChild(t.name,fn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,s.hu)(a.numChildren()===this.limit_,"");const l=new Lt(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,c,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,l),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(kn(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Tn(t,e));const n=a.updateImmediateChild(t,fn.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(En(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(c,l)>=0?(null!=r&&(r.trackChildChange(Tn(c.name,c.node)),r.trackChildChange(En(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,fn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=on}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:R}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:D}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===on}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dn(e){return e.loadsAllData()?new Pn(e.getIndex()):e.hasLimit()?new xn(e):new Nn(e)}function An(e){const t={};if(e.isDefault())return t;let n;return e.index_===on?n="$priority":e.index_===bn?n="$value":e.index_===jt?n="$key":((0,s.hu)(e.index_ instanceof vn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,s.Wl)(n),e.startSet_&&(t["startAt"]=(0,s.Wl)(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+(0,s.Wl)(e.indexStartName_))),e.endSet_&&(t["endAt"]=(0,s.Wl)(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+(0,s.Wl)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function On(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==on&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=E("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Mn.getListenId_(e,n),a={};this.listens_[o]=a;const l=An(e._queryParams);this.restRequest_(r+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(r,l,!1,n),(0,s.DV)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Mn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=An(e._queryParams),n=e._path.toString(),i=new s.BH;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.xO)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,s.cI)(a.responseText)}catch(e){S("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&S("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.rootNode_=fn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return{value:null,children:new Map}}function Un(e,t,n){if(vt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ht(t);e.children.has(i)||e.children.set(i,Ln());const r=e.children.get(i);t=pt(t),Un(r,t,n)}}function qn(e,t,n){null!==e.value?n(t,e.value):Wn(e,((e,i)=>{const r=new ct(t.toString()+"/"+e);qn(i,r,n)}))}function Wn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&U(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=1e4,Vn=3e4,Hn=3e5;class $n{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new jn(e);const n=Bn+(Vn-Bn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;U(e,((e,i)=>{i>0&&(0,s.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Hn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn;function Kn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(zn||(zn={}));class Jn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=zn.ACK_USER_WRITE,this.source=Kn()}operationForChild(e){if(vt(this.path)){if(null!=this.affectedTree.value)return(0,s.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new Jn(ut(),t,this.revert)}}return(0,s.hu)(ht(this.path)===e,"operationForChild called for unrelated child."),new Jn(pt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.source=e,this.path=t,this.type=zn.LISTEN_COMPLETE}operationForChild(e){return vt(this.path)?new Qn(this.source,ut()):new Qn(this.source,pt(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=zn.OVERWRITE}operationForChild(e){return vt(this.path)?new Xn(this.source,ut(),this.snap.getImmediateChild(e)):new Xn(this.source,pt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=zn.MERGE}operationForChild(e){if(vt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new Xn(this.source,ut(),t.value):new Zn(this.source,ut(),t)}return(0,s.hu)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zn(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(vt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ni(e,t,n,i){const r=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Sn(t.childName,t.snapshotNode))})),ii(e,r,"child_removed",t,i,n),ii(e,r,"child_added",t,i,n),ii(e,r,"child_moved",s,i,n),ii(e,r,"child_changed",t,i,n),ii(e,r,"value",t,i,n),r}function ii(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>si(e,t,n))),o.forEach((n=>{const i=ri(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function ri(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function si(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.g5)("Should only compare child_ events.");const i=new Lt(t.childName,t.snapshotNode),r=new Lt(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e,t){return{eventCache:e,serverCache:t}}function ai(e,t,n,i){return oi(new ei(t,n,i),e.serverCache)}function li(e,t,n,i){return oi(e.eventCache,new ei(t,n,i))}function ci(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ui(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;const di=()=>(hi||(hi=new $t(O)),hi);class pi{constructor(e,t=di()){this.value=e,this.children=t}static fromObject(e){let t=new pi(null);return U(e,((e,n)=>{t=t.set(new ct(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(vt(e))return null;{const n=ht(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(pt(e),t);if(null!=r){const e=yt(new ct(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(vt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new pi(null)}}set(e,t){if(vt(e))return new pi(t,this.children);{const n=ht(e),i=this.children.get(n)||new pi(null),r=i.set(pt(e),t),s=this.children.insert(n,r);return new pi(this.value,s)}}remove(e){if(vt(e))return this.children.isEmpty()?new pi(null):new pi(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const i=n.remove(pt(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new pi(null):new pi(this.value,r)}return this}}get(e){if(vt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(vt(e))return t;{const n=ht(e),i=this.children.get(n)||new pi(null),r=i.setTree(pt(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new pi(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(yt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(vt(e))return null;{const i=ht(e),r=this.children.get(i);return r?r.findOnPath_(pt(e),yt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(vt(e))return this;{this.value&&n(t,this.value);const i=ht(e),r=this.children.get(i);return r?r.foreachOnPath_(pt(e),yt(t,i),n):new pi(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(yt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.writeTree_=e}static empty(){return new fi(new pi(null))}}function _i(e,t,n){if(vt(t))return new fi(new pi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=Ct(r,t);return s=s.updateChild(o,n),new fi(e.writeTree_.set(r,s))}{const i=new pi(n),r=e.writeTree_.setTree(t,i);return new fi(r)}}}function gi(e,t,n){let i=e;return U(n,((e,n)=>{i=_i(i,yt(t,e),n)})),i}function mi(e,t){if(vt(t))return fi.empty();{const n=e.writeTree_.setTree(t,new pi(null));return new fi(n)}}function yi(e,t){return null!=vi(e,t)}function vi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ct(n.path,t)):null}function Ci(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(on,((e,n)=>{t.push(new Lt(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Lt(e,n.value))})),t}function bi(e,t){if(vt(t))return e;{const n=vi(e,t);return new fi(null!=n?new pi(n):e.writeTree_.subtree(t))}}function wi(e){return e.writeTree_.isEmpty()}function Ii(e,t){return Ei(ut(),e.writeTree_,t)}function Ei(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,s.hu)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ei(yt(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(yt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e,t){return Ki(t,e)}function ki(e,t,n,i,r){(0,s.hu)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=_i(e.visibleWrites,t,n)),e.lastWriteId=i}function Si(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Pi(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,s.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Ni(t,i.path)?r=!1:wt(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return xi(e),!0;if(i.snap)e.visibleWrites=mi(e.visibleWrites,i.path);else{const t=i.children;U(t,(t=>{e.visibleWrites=mi(e.visibleWrites,yt(i.path,t))}))}return!0}return!1}function Ni(e,t){if(e.snap)return wt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&wt(yt(e.path,n),t))return!0;return!1}function xi(e){e.visibleWrites=Di(e.allWrites,Ri,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ri(e){return e.visible}function Di(e,t,n){let i=fi.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)wt(n,e)?(t=Ct(n,e),i=_i(i,t,o.snap)):wt(e,n)&&(t=Ct(e,n),i=_i(i,ut(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.g5)("WriteRecord should have .snap or .children");if(wt(n,e))t=Ct(n,e),i=gi(i,t,o.children);else if(wt(e,n))if(t=Ct(e,n),vt(t))i=gi(i,ut(),o.children);else{const e=(0,s.DV)(o.children,ht(t));if(e){const n=e.getChild(pt(t));i=_i(i,ut(),n)}}}}}return i}function Ai(e,t,n,i,r){if(i||r){const s=bi(e.visibleWrites,t);if(!r&&wi(s))return n;if(r||null!=n||yi(s,ut())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(wt(e.path,t)||wt(t,e.path))},o=Di(e.allWrites,s,t),a=n||fn.EMPTY_NODE;return Ii(o,a)}return null}{const i=vi(e.visibleWrites,t);if(null!=i)return i;{const i=bi(e.visibleWrites,t);if(wi(i))return n;if(null!=n||yi(i,ut())){const e=n||fn.EMPTY_NODE;return Ii(i,e)}return null}}}function Oi(e,t,n){let i=fn.EMPTY_NODE;const r=vi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(on,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=bi(e.visibleWrites,t);return n.forEachChild(on,((e,t)=>{const n=Ii(bi(r,new ct(e)),t);i=i.updateImmediateChild(e,n)})),Ci(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=bi(e.visibleWrites,t);return Ci(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function Mi(e,t,n,i,r){(0,s.hu)(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=yt(t,n);if(yi(e.visibleWrites,o))return null;{const t=bi(e.visibleWrites,o);return wi(t)?r.getChild(n):Ii(t,r.getChild(n))}}function Fi(e,t,n,i){const r=yt(t,n),s=vi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=bi(e.visibleWrites,r);return Ii(t,i.getNode().getImmediateChild(n))}return null}function Li(e,t){return vi(e.visibleWrites,t)}function Ui(e,t,n,i,r,s,o){let a;const l=bi(e.visibleWrites,t),c=vi(l,ut());if(null!=c)a=c;else{if(null==n)return[];a=Ii(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();while(l&&e.length<r)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}function qi(){return{visibleWrites:fi.empty(),allWrites:[],lastWriteId:-1}}function Wi(e,t,n,i){return Ai(e.writeTree,e.treePath,t,n,i)}function ji(e,t){return Oi(e.writeTree,e.treePath,t)}function Bi(e,t,n,i){return Mi(e.writeTree,e.treePath,t,n,i)}function Vi(e,t){return Li(e.writeTree,yt(e.treePath,t))}function Hi(e,t,n,i,r,s){return Ui(e.writeTree,e.treePath,t,n,i,r,s)}function $i(e,t,n){return Fi(e.writeTree,e.treePath,t,n)}function zi(e,t){return Ki(yt(e.treePath,t),e.writeTree)}function Ki(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,kn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Tn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,En(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,s.g5)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,kn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Ji=new Yi;class Qi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $i(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ui(this.viewCache_),r=Hi(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e){return{filter:e}}function Zi(e,t){(0,s.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,s.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function er(e,t,n,i,r){const o=new Gi;let a,l;if(n.type===zn.OVERWRITE){const c=n;c.source.fromUser?a=rr(e,t,c.path,c.snap,i,r,o):((0,s.hu)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!vt(c.path),a=ir(e,t,c.path,c.snap,i,r,l,o))}else if(n.type===zn.MERGE){const c=n;c.source.fromUser?a=or(e,t,c.path,c.children,i,r,o):((0,s.hu)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=lr(e,t,c.path,c.children,i,r,l,o))}else if(n.type===zn.ACK_USER_WRITE){const s=n;a=s.revert?hr(e,t,s.path,i,r,o):cr(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==zn.LISTEN_COMPLETE)throw(0,s.g5)("Unknown operation type: "+n.type);a=ur(e,t,n.path,i,o)}const c=o.getChanges();return tr(t,a,c),{viewCache:a,changes:c}}function tr(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ci(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(In(ci(t)))}}function nr(e,t,n,i,r,o){const a=t.eventCache;if(null!=Vi(i,n))return t;{let l,c;if(vt(n))if((0,s.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ui(t),r=n instanceof fn?n:fn.EMPTY_NODE,s=ji(i,r);l=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=Wi(i,ui(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){(0,s.hu)(1===dt(n),"Can't have a priority with additional path components");const r=a.getNode();c=t.serverCache.getNode();const o=Bi(i,n,r,c);l=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=pt(n);let h;if(a.isCompleteForChild(u)){c=t.serverCache.getNode();const e=Bi(i,n,a.getNode(),c);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=$i(i,u,t.serverCache);l=null!=h?e.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return ai(t,l,a.isFullyInitialized()||vt(n),e.filter.filtersNodes())}}function ir(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(vt(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=ht(n);if(!l.isCompleteForPath(n)&&dt(n)>1)return t;const r=pt(n),s=l.getNode().getImmediateChild(e),o=s.updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,r,Ji,null)}const h=li(t,c,l.isFullyInitialized()||vt(n),u.filtersNodes()),d=new Qi(r,h,s);return nr(e,h,n,r,d,a)}function rr(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const u=new Qi(r,t,s);if(vt(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=ai(t,c,!0,e.filter.filtersNodes());else{const r=ht(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=ai(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=pt(n),c=a.getNode().getImmediateChild(r);let h;if(vt(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===ft(s)&&e.getChild(mt(s)).isEmpty()?e:e.updateChild(s,i):fn.EMPTY_NODE}if(c.equals(h))l=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);l=ai(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function sr(e,t){return e.eventCache.isCompleteForChild(t)}function or(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=yt(n,i);sr(t,ht(c))&&(a=rr(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=yt(n,i);sr(t,ht(c))||(a=rr(e,a,c,l,r,s,o))})),a}function ar(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function lr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=vt(n)?i:new pi(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),u=ar(e,l,i);c=ir(e,c,new ct(n),u,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),u=ar(e,l,i);c=ir(e,c,new ct(n),u,r,s,o,a)}})),c}function cr(e,t,n,i,r,s,o){if(null!=Vi(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(vt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ir(e,t,n,l.getNode().getChild(n),r,s,a,o);if(vt(n)){let i=new pi(null);return l.getNode().forEachChild(jt,((e,t)=>{i=i.set(new ct(e),t)})),lr(e,t,n,i,r,s,a,o)}return t}{let c=new pi(null);return i.foreach(((e,t)=>{const i=yt(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),lr(e,t,n,c,r,s,a,o)}}function ur(e,t,n,i,r){const s=t.serverCache,o=li(t,s.getNode(),s.isFullyInitialized()||vt(n),s.isFiltered());return nr(e,o,n,i,Ji,r)}function hr(e,t,n,i,r,o){let a;if(null!=Vi(i,n))return t;{const l=new Qi(i,t,r),c=t.eventCache.getNode();let u;if(vt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=Wi(i,ui(t));else{const e=t.serverCache.getNode();(0,s.hu)(e instanceof fn,"serverChildren would be complete if leaf node"),n=ji(i,e)}u=e.filter.updateFullNode(c,n,o)}else{const r=ht(n);let s=$i(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=c.getImmediateChild(r)),u=null!=s?e.filter.updateChild(c,r,s,pt(n),l,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,fn.EMPTY_NODE,pt(n),l,o):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Wi(i,ui(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Vi(i,ut()),ai(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Pn(n.getIndex()),r=Dn(n);this.processor_=Xi(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(fn.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(fn.EMPTY_NODE,o.getNode(),null),c=new ei(a,s.isFullyInitialized(),i.filtersNodes()),u=new ei(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=oi(u,c),this.eventGenerator_=new ti(this.query_)}get query(){return this.query_}}function pr(e){return e.viewCache_.serverCache.getNode()}function fr(e){return ci(e.viewCache_)}function _r(e,t){const n=ui(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!vt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function gr(e){return 0===e.eventRegistrations_.length}function mr(e,t){e.eventRegistrations_.push(t)}function yr(e,t,n){const i=[];if(n){(0,s.hu)(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function vr(e,t,n,i){t.type===zn.MERGE&&null!==t.source.queryId&&((0,s.hu)(ui(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.hu)(ci(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=er(e.processor_,r,t,n,i);return Zi(e.processor_,o.viewCache),(0,s.hu)(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,br(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Cr(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(on,((e,t)=>{i.push(En(e,t))}))}return n.isFullyInitialized()&&i.push(In(n.getNode())),br(e,i,n.getNode(),t)}function br(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return ni(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr,Ir;class Er{constructor(){this.views=new Map}}function Tr(e){(0,s.hu)(!wr,"__referenceConstructor has already been defined"),wr=e}function kr(){return(0,s.hu)(wr,"Reference.ts has not been loaded"),wr}function Sr(e){return 0===e.views.size}function Pr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return(0,s.hu)(null!=o,"SyncTree gave us an op for an invalid query."),vr(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(vr(s,t,n,i));return r}}function Nr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Wi(n,r?i:null),s=!1;e?s=!0:i instanceof fn?(e=ji(n,i),s=!1):(e=fn.EMPTY_NODE,s=!1);const o=oi(new ei(e,s,!1),new ei(i,r,!1));return new dr(t,o)}return o}function xr(e,t,n,i,r,s){const o=Nr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),mr(o,n),Cr(o,n)}function Rr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Fr(e);if("default"===r)for(const[l,c]of e.views.entries())o=o.concat(yr(c,n,i)),gr(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(r);t&&(o=o.concat(yr(t,n,i)),gr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Fr(e)&&s.push(new(kr())(t._repo,t._path)),{removed:s,events:o}}function Dr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ar(e,t){let n=null;for(const i of e.views.values())n=n||_r(i,t);return n}function Or(e,t){const n=t._queryParams;if(n.loadsAllData())return Lr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Mr(e,t){return null!=Or(e,t)}function Fr(e){return null!=Lr(e)}function Lr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e){(0,s.hu)(!Ir,"__referenceConstructor has already been defined"),Ir=e}function qr(){return(0,s.hu)(Ir,"Reference.ts has not been loaded"),Ir}let Wr=1;class jr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pi(null),this.pendingWriteTree_=qi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Br(e,t,n,i,r){return ki(e.pendingWriteTree_,t,n,i,r),r?es(e,new Xn(Kn(),t,n)):[]}function Vr(e,t,n=!1){const i=Si(e.pendingWriteTree_,t),r=Pi(e.pendingWriteTree_,t);if(r){let t=new pi(null);return null!=i.snap?t=t.set(ut(),!0):U(i.children,(e=>{t=t.set(new ct(e),!0)})),es(e,new Jn(i.path,t,n))}return[]}function Hr(e,t,n){return es(e,new Xn(Gn(),t,n))}function $r(e,t,n){const i=pi.fromObject(n);return es(e,new Zn(Gn(),t,i))}function zr(e,t){return es(e,new Qn(Gn(),t))}function Kr(e,t,n){const i=os(e,n);if(i){const n=as(i),r=n.path,s=n.queryId,o=Ct(r,t),a=new Qn(Yn(s),o);return ls(e,r,a)}return[]}function Gr(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Mr(o,t))){const l=Rr(o,t,n,i);Sr(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Fr(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=cs(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=is(e,i);e.listenProvider_.startListening(us(r),rs(e,r),s.hashFn,s.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(us(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(ss(t));e.listenProvider_.stopListening(us(t),n)}))}hs(e,c)}return a}function Yr(e,t,n,i){const r=os(e,i);if(null!=r){const i=as(r),s=i.path,o=i.queryId,a=Ct(s,t),l=new Xn(Yn(o),a,n);return ls(e,s,l)}return[]}function Jr(e,t,n,i){const r=os(e,i);if(r){const i=as(r),s=i.path,o=i.queryId,a=Ct(s,t),l=pi.fromObject(n),c=new Zn(Yn(o),a,l);return ls(e,s,c)}return[]}function Qr(e,t,n,i=!1){const r=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=Ct(e,r);o=o||Ar(t,n),a=a||Fr(t)}));let l,c=e.syncPointTree_.get(r);if(c?(a=a||Fr(c),o=o||Ar(c,ut())):(c=new Er,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=o)l=!0;else{l=!1,o=fn.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild(((e,t)=>{const n=Ar(t,ut());n&&(o=o.updateImmediateChild(e,n))}))}const u=Mr(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=ss(t);(0,s.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ds();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const h=Ti(e.pendingWriteTree_,r);let d=xr(c,t,n,h,o,l);if(!u&&!a&&!i){const n=Or(c,t);d=d.concat(ps(e,t,n))}return d}function Xr(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Ct(e,t),r=Ar(n,i);if(r)return r}));return Ai(r,t,s,n,i)}function Zr(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=Ct(e,n);i=i||Ar(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||Ar(r,ut()):(r=new Er,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new ei(i,!0,!1):null,a=Ti(e.pendingWriteTree_,t._path),l=Nr(r,t,a,s?o.getNode():fn.EMPTY_NODE,s);return fr(l)}function es(e,t){return ts(t,e.syncPointTree_,null,Ti(e.pendingWriteTree_,ut()))}function ts(e,t,n,i){if(vt(e.path))return ns(e,t,n,i);{const r=t.get(ut());null==n&&null!=r&&(n=Ar(r,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=zi(i,o);s=s.concat(ts(a,l,e,t))}return r&&(s=s.concat(Pr(r,e,i,n))),s}}function ns(e,t,n,i){const r=t.get(ut());null==n&&null!=r&&(n=Ar(r,ut()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=zi(i,t),l=e.operationForChild(t);l&&(s=s.concat(ns(l,r,o,a)))})),r&&(s=s.concat(Pr(r,e,i,n))),s}function is(e,t){const n=t.query,i=rs(e,n);return{hashFn:()=>{const e=pr(t)||fn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Kr(e,n._path,i):zr(e,n._path);{const i=B(t,n);return Gr(e,n,null,i)}}}}function rs(e,t){const n=ss(t);return e.queryToTagMap.get(n)}function ss(e){return e._path.toString()+"$"+e._queryIdentifier}function os(e,t){return e.tagToQueryMap.get(t)}function as(e){const t=e.indexOf("$");return(0,s.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function ls(e,t,n){const i=e.syncPointTree_.get(t);(0,s.hu)(i,"Missing sync point for query tag that we're tracking");const r=Ti(e.pendingWriteTree_,t);return Pr(i,n,r,null)}function cs(e){return e.fold(((e,t,n)=>{if(t&&Fr(t)){const e=Lr(t);return[e]}{let e=[];return t&&(e=Dr(t)),U(n,((t,n)=>{e=e.concat(n)})),e}}))}function us(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(qr())(e._repo,e._path):e}function hs(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ss(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ds(){return Wr++}function ps(e,t,n){const i=t._path,r=rs(e,t),o=is(e,n),a=e.listenProvider_.startListening(us(t),r,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(i);if(r)(0,s.hu)(!Fr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!vt(e)&&t&&Fr(t))return[Lr(t).query];{let e=[];return t&&(e=e.concat(Dr(t).map((e=>e.query)))),U(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(us(i),rs(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fs(t)}node(){return this.node_}}class _s{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new _s(this.syncTree_,t)}node(){return Xr(this.syncTree_,this.path_)}}const gs=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},ms=function(e,t,n){return e&&"object"===typeof e?((0,s.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?ys(e[".sv"],t,n):"object"===typeof e[".sv"]?vs(e[".sv"],t):void(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ys=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,s.hu)(!1,"Unexpected server value: "+e)}},vs=function(e,t,n){e.hasOwnProperty("increment")||(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,s.hu)(!1,"Unexpected increment value: "+i);const r=t.node();if((0,s.hu)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},Cs=function(e,t,n,i){return ws(t,new _s(n,e),i)},bs=function(e,t,n){return ws(e,new fs(t),n)};function ws(e,t,n){const i=e.getPriority().val(),r=ms(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=ms(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new tn(s,yn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new tn(r))),i.forEachChild(on,((e,i)=>{const r=ws(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Es(e,t){let n=t instanceof ct?t:new ct(t),i=e,r=ht(n);while(null!==r){const e=(0,s.DV)(i.node.children,r)||{children:{},childCount:0};i=new Is(r,i,e),n=pt(n),r=ht(n)}return i}function Ts(e){return e.node.value}function ks(e,t){e.node.value=t,As(e)}function Ss(e){return e.node.childCount>0}function Ps(e){return void 0===Ts(e)&&!Ss(e)}function Ns(e,t){U(e.node.children,((n,i)=>{t(new Is(n,e,i))}))}function xs(e,t,n,i){n&&!i&&t(e),Ns(e,(e=>{xs(e,t,!0,i)})),n&&i&&t(e)}function Rs(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Ds(e){return new ct(null===e.parent?e.name:Ds(e.parent)+"/"+e.name)}function As(e){null!==e.parent&&Os(e.parent,e.name,e)}function Os(e,t,n){const i=Ps(n),r=(0,s.r3)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,As(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,As(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=/[\[\].#$\/\u0000-\u001F\u007F]/,Fs=/[\[\].#$\u0000-\u001F\u007F]/,Ls=10485760,Us=function(e){return"string"===typeof e&&0!==e.length&&!Ms.test(e)},qs=function(e){return"string"===typeof e&&0!==e.length&&!Fs.test(e)},Ws=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),qs(e)},js=function(e,t,n){const i=n instanceof ct?new It(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+St(i));if("function"===typeof t)throw new Error(e+"contains a function "+St(i)+" with contents = "+t.toString());if(N(t))throw new Error(e+"contains "+t.toString()+" "+St(i));if("string"===typeof t&&t.length>Ls/3&&(0,s.ug)(t)>Ls)throw new Error(e+"contains a string greater than "+Ls+" utf8 bytes "+St(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(U(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Us(t)))throw new Error(e+" contains an invalid key ("+t+") "+St(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(i,t),js(e,s,i),Tt(i)})),n&&r)throw new Error(e+' contains ".value" child '+St(i)+" in addition to actual children.")}},Bs=function(e,t,n,i){if((!i||void 0!==n)&&!qs(n))throw new Error((0,s.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Vs=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Bs(e,t,n,i)},Hs=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Us(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Ws(n))throw new Error((0,s.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zs(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||bt(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Ks(e,t,n){zs(e,n),Gs(e,(e=>wt(e,t)||wt(t,e)))}function Gs(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(Ys(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Ys(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();C&&I("event: "+n.toString()),K(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="repo_interrupt",Qs=25;class Xs{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $s,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ln(),this.transactionQueueTree_=new Is,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zs(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||G())e.server_=new Mn(e.repoInfo_,((t,n,i,r)=>{no(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>io(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.Wl)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Ft(e.repoInfo_,t,((t,n,i,r)=>{no(e,t,n,i,r)}),(t=>{io(e,t)}),(t=>{ro(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=me(e.repoInfo_,(()=>new $n(e.stats_,e.server_))),e.infoData_=new Fn,e.infoSyncTree_=new jr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Hr(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),so(e,"connected",!1),e.serverSyncTree_=new jr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Ks(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function eo(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function to(e){return gs({timestamp:eo(e)})}function no(e,t,n,i,r){e.dataUpdateCount++;const o=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=(0,s.UI)(n,(e=>yn(e)));a=Jr(e.serverSyncTree_,o,t,r)}else{const t=yn(n);a=Yr(e.serverSyncTree_,o,t,r)}else if(i){const t=(0,s.UI)(n,(e=>yn(e)));a=$r(e.serverSyncTree_,o,t)}else{const t=yn(n);a=Hr(e.serverSyncTree_,o,t)}let l=o;a.length>0&&(l=_o(e,o)),Ks(e.eventQueue_,l,a)}function io(e,t){so(e,"connected",t),!1===t&&lo(e)}function ro(e,t){U(t,((t,n)=>{so(e,t,n)}))}function so(e,t,n){const i=new ct("/.info/"+t),r=yn(n);e.infoData_.updateSnapshot(i,r);const s=Hr(e.infoSyncTree_,i,r);Ks(e.eventQueue_,i,s)}function oo(e){return e.nextWriteId_++}function ao(e,t,n){const i=Zr(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=yn(i).withIndex(t._queryParams.getIndex());let s;if(Qr(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=Hr(e.serverSyncTree_,t._path,r);else{const n=rs(e.serverSyncTree_,t);s=Yr(e.serverSyncTree_,t._path,r,n)}return Ks(e.eventQueue_,t._path,s),Gr(e.serverSyncTree_,t,n,null,!0),r}),(n=>(uo(e,"get for query "+(0,s.Wl)(t)+" failed: "+n),Promise.reject(new Error(n)))))}function lo(e){uo(e,"onDisconnectEvents");const t=to(e),n=Ln();qn(e.onDisconnect_,ut(),((i,r)=>{const s=Cs(i,r,e.serverSyncTree_,t);Un(n,i,s)}));let i=[];qn(n,ut(),((t,n)=>{i=i.concat(Hr(e.serverSyncTree_,t,n));const r=bo(e,t);_o(e,r)})),e.onDisconnect_=Ln(),Ks(e.eventQueue_,ut(),i)}function co(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Js)}function uo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),I(n,...t)}function ho(e,t,n){return Xr(e.serverSyncTree_,t,n)||fn.EMPTY_NODE}function po(e,t=e.transactionQueueTree_){if(t||Co(e,t),Ts(t)){const n=yo(e,t);(0,s.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&fo(e,Ds(t),n)}else Ss(t)&&Ns(t,(t=>{po(e,t)}))}function fo(e,t,n){const i=n.map((e=>e.currentWriteId)),r=ho(e,t,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,s.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Ct(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,(i=>{uo(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Vr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Co(e,Es(e.transactionQueueTree_,t)),po(e,e.transactionQueueTree_),Ks(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)K(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{S("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}_o(e,t)}}),a)}function _o(e,t){const n=mo(e,t),i=Ds(n),r=yo(e,n);return go(e,r,i),i}function go(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const o=t[l],c=Ct(n,o.path);let u,h=!1;if((0,s.hu)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(Vr(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Qs)h=!0,u="maxretry",r=r.concat(Vr(e.serverSyncTree_,o.currentWriteId,!0));else{const n=ho(e,o.path,a);o.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){js("transaction failed: Data returned ",i,o.path);let t=yn(i);const l="object"===typeof i&&null!=i&&(0,s.r3)(i,".priority");l||(t=t.updatePriority(n.getPriority()));const c=o.currentWriteId,u=to(e),h=bs(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=oo(e),a.splice(a.indexOf(c),1),r=r.concat(Br(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(Vr(e.serverSyncTree_,c,!0))}else h=!0,u="nodata",r=r.concat(Vr(e.serverSyncTree_,o.currentWriteId,!0))}Ks(e.eventQueue_,n,r),r=[],h&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===u?i.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):i.push((()=>t[l].onComplete(new Error(u),!1,null)))))}Co(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)K(i[s]);po(e,e.transactionQueueTree_)}function mo(e,t){let n,i=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Ts(i))i=Es(i,n),t=pt(t),n=ht(t);return i}function yo(e,t){const n=[];return vo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function vo(e,t,n){const i=Ts(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ns(t,(t=>{vo(e,t,n)}))}function Co(e,t){const n=Ts(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ks(t,n.length>0?n:void 0)}Ns(t,(t=>{Co(e,t)}))}function bo(e,t){const n=Ds(mo(e,t)),i=Es(e.transactionQueueTree_,t);return Rs(i,(t=>{wo(e,t)})),wo(e,i),xs(i,(t=>{wo(e,t)})),n}function wo(e,t){const n=Ts(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.hu)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Vr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?ks(t,void 0):n.length=o+1,Ks(e.eventQueue_,Ds(t),r);for(let e=0;e<i.length;e++)K(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function Eo(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):S(`Invalid query segment '${n}' in query '${e}'`)}return t}const To=function(e,t){const n=ko(e),i=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||P();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new ct(n.pathString)}},ko=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=Io(e.substring(u,h)));const d=Eo(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,s.Wl)(this.snapshot.exportVal())}}class Po{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,s.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return vt(this._path)?null:ft(this._path)}get ref(){return new Ro(this._repo,this._path)}get _queryIdentifier(){const e=On(this._queryParams),t=F(e);return"{}"===t?"default":t}get _queryObject(){return On(this._queryParams)}isEqual(e){if(e=(0,s.m9)(e),!(e instanceof xo))return!1;const t=this._repo===e._repo,n=bt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_t(this._path)}}class Ro extends xo{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=mt(this._path);return null===e?null:new Ro(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Do{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),n=Oo(this.ref,e);return new Do(this._node.getChild(t),n,on)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Do(n,Oo(this.ref,t),on))))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ao(e,t){return e=(0,s.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Oo(e._root,t):e._root}function Oo(e,t){return e=(0,s.m9)(e),null===ht(e._path)?Vs("child","path",t,!1):Bs("child","path",t,!1),new Ro(e._repo,yt(e._path,t))}function Mo(e){e=(0,s.m9)(e);const t=new No((()=>{})),n=new Fo(t);return ao(e._repo,e,n).then((t=>new Do(t,new Ro(e._repo,e._path),e._queryParams.getIndex())))}class Fo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new So("value",this,new Do(e.snapshotNode,new Ro(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Po(this,e,t):null}matches(e){return e instanceof Fo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}Tr(Ro),Ur(Ro);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lo="FIREBASE_DATABASE_EMULATOR_HOST",Uo={};let qo=!1;function Wo(e,t,n,i){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}function jo(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),I("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=To(s,r),c=l.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",VUE_APP_API_KEY:"AIzaSyDxbMGWiD2Wr9qy8wrxA4VkI581EgKPj4s",VUE_APP_AUTH_DOMAIN:"advr-consultores.firebaseapp.com",VUE_APP_DATABASE_URL:"https://advr-consultores-default-rtdb.firebaseio.com",VUE_APP_PROJECT_ID:"advr-consultores",VUE_APP_STORAGE_BUCKET:"advr-consultores.appspot.com",VUE_APP_MESSAGING_SENDER_ID:"950650780471",VUE_APP_APP_ID:"1:950650780471:web:6bbc43f41d56abc9fcf8b2",VUE_APP_MEASUREMENT_ID:"G-SRQCGWSDVY",BASE_URL:"/renombrando-archivos/"}[Lo]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=To(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const u=r&&o?new X(X.OWNER):new Q(e.name,e.options,t);Hs("Invalid Firebase Database URL",l),vt(l.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Vo(c,e,u,new J(e.name,n));return new Ho(h,e)}function Bo(e,t){const n=Uo[t];n&&n[e.key]===e||k(`Database ${t}(${e.repoInfo_}) has already been deleted.`),co(e),delete n[e.key]}function Vo(e,t,n,i){let r=Uo[t.name];r||(r={},Uo[t.name]=r);let s=r[e.toURLString()];return s&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Xs(e,qo,n,i),r[e.toURLString()]=s,s}class Ho{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zs(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ro(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Bo(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&k("Cannot call "+e+" on a deleted database.")}}function $o(e=(0,i.Mq)(),t){const n=(0,i.qX)(e,"database").getImmediate({identifier:t}),r=(0,s.P0)("database");return r&&zo(n,...r),n}function zo(e,t,n,i={}){e=(0,s.m9)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&k("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&k('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new X(X.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:(0,s.Sg)(i.mockUserToken,e.app.options.projectId);o=new X(t)}Wo(r,t,n,o)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ko(e){u(i.Jn),(0,i.Xd)(new r.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return jo(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(a,l,e),(0,i.KN)(a,l,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ft.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Ko()},744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},816:function(e,t,n){n.d(t,{Jn:function(){return _e},qX:function(){return he},Xd:function(){return ue},Mq:function(){return me},ZF:function(){return ge},KN:function(){return ye}});var i=n(463),r=n(333),s=n(444);const o=(e,t)=>t.some((t=>e instanceof t));let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,_=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(w(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),_.set(t,e),t}function m(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){y=e(y)}function C(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(I(this),t),w(h.get(this))}:function(...t){return w(e.apply(I(this),t))}:function(t,...n){const i=e.call(I(this),t,...n);return p.set(i,t.sort?t.sort():[t]),w(i)}}function b(e){return"function"===typeof e?C(e):(e instanceof IDBTransaction&&m(e),o(e,c())?new Proxy(e,y):e)}function w(e){if(e instanceof IDBRequest)return g(e);if(f.has(e))return f.get(e);const t=b(e);return t!==e&&(f.set(e,t),_.set(t,e)),t}const I=e=>_.get(e);function E(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=w(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(w(o.result),e.oldVersion,e.newVersion,w(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],S=new Map;function P(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=k.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!T.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return S.set(t,s),s}v((e=>({...e,get:(t,n,i)=>P(t,n)||e.get(t,n,i),has:(t,n)=>!!P(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",D="0.8.2",A=new r.Yd("@firebase/app"),O="@firebase/app-compat",M="@firebase/analytics-compat",F="@firebase/analytics",L="@firebase/app-check-compat",U="@firebase/app-check",q="@firebase/auth",W="@firebase/auth-compat",j="@firebase/database",B="@firebase/database-compat",V="@firebase/functions",H="@firebase/functions-compat",$="@firebase/installations",z="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Y="@firebase/performance",J="@firebase/performance-compat",Q="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",re="9.12.1",se="[DEFAULT]",oe={[R]:"fire-core",[O]:"fire-core-compat",[F]:"fire-analytics",[M]:"fire-analytics-compat",[U]:"fire-app-check",[L]:"fire-app-check-compat",[q]:"fire-auth",[W]:"fire-auth-compat",[j]:"fire-rtdb",[B]:"fire-rtdb-compat",[V]:"fire-fn",[H]:"fire-fn-compat",[$]:"fire-iid",[z]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Y]:"fire-perf",[J]:"fire-perf-compat",[Q]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ae=new Map,le=new Map;function ce(e,t){try{e.container.addComponent(t)}catch(n){A.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(le.has(t))return A.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ce(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pe=new s.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=re;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!==typeof o||!o)throw pe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw pe.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(r,a.config))return a;throw pe.create("duplicate-app",{appName:o})}const l=new i.H0(o);for(const i of le.values())l.addComponent(i);const c=new fe(n,r,l);return ae.set(o,c),c}function me(e=se){const t=ae.get(e);if(!t&&e===se)return ge();if(!t)throw pe.create("no-app",{appName:e});return t}function ye(e,t,n){var r;let s=null!==(r=oe[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void A.warn(e.join(" "))}ue(new i.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve="firebase-heartbeat-database",Ce=1,be="firebase-heartbeat-store";let we=null;function Ie(){return we||(we=E(ve,Ce,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(be)}}}).catch((e=>{throw pe.create("idb-open",{originalErrorMessage:e.message})}))),we}async function Ee(e){var t;try{const t=await Ie();return t.transaction(be).objectStore(be).get(ke(e))}catch(n){if(n instanceof s.ZR)A.warn(n.message);else{const e=pe.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});A.warn(e.message)}}}async function Te(e,t){var n;try{const n=await Ie(),i=n.transaction(be,"readwrite"),r=i.objectStore(be);return await r.put(t,ke(e)),i.done}catch(i){if(i instanceof s.ZR)A.warn(i.message);else{const e=pe.create("idb-set",{originalErrorMessage:null===(n=i)||void 0===n?void 0:n.message});A.warn(e.message)}}}function ke(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=1024,Pe=2592e6;class Ne{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=xe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Pe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=xe(),{heartbeatsToSend:t,unsentEntries:n}=Re(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xe(){const e=new Date;return e.toISOString().substring(0,10)}function Re(e,t=Se){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Ae(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ae(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class De{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ee(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ae(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){ue(new i.wA("platform-logger",(e=>new N(e)),"PRIVATE")),ue(new i.wA("heartbeat",(e=>new Ne(e)),"PRIVATE")),ye(R,D,e),ye(R,D,"esm2017"),ye("fire-js","")}Oe("")},463:function(e,t,n){n.d(t,{H0:function(){return c},wA:function(){return r}});var i=n(444);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},333:function(e,t,n){n.d(t,{Yd:function(){return c},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}}}]);
//# sourceMappingURL=chunk-vendors.ad215cf9.js.map