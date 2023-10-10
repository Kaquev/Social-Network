(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
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
 *//**
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
 */const Dc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},td=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):td(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new nd;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rd=function(n){const e=Dc(n);return Vc.encodeByteArray(e,!0)},Vr=function(n){return rd(n).replace(/\./g,"")},Lc=function(n){try{return Vc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function id(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sd=()=>id().__FIREBASE_DEFAULTS__,od=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ad=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Lc(n[1]);return e&&JSON.parse(e)},Hs=()=>{try{return sd()||od()||ad()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xc=n=>{var e,t;return(t=(e=Hs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cd=n=>{const e=xc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Mc=()=>{var n;return(n=Hs())===null||n===void 0?void 0:n.config},Uc=n=>{var e;return(e=Hs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ld{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ud(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Vr(JSON.stringify(t)),Vr(JSON.stringify(o)),a].join(".")}/**
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function dd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pd(){const n=_e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function md(){try{return typeof indexedDB=="object"}catch{return!1}}function gd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const _d="FirebaseError";class We extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=_d,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yd(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new We(i,a,r)}}function yd(n,e){return n.replace(vd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vd=/\{\$([^}]+)}/g;function wd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Lr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(ca(s)&&ca(o)){if(!Lr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ca(n){return n!==null&&typeof n=="object"}/**
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
 */function Qn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _n(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function yn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ed(n,e){const t=new Id(n,e);return t.subscribe.bind(t)}class Id{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Td(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=$i),i.error===void 0&&(i.error=$i),i.complete===void 0&&(i.complete=$i);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Td(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $i(){}/**
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
 */function ne(n){return n&&n._delegate?n._delegate:n}class Et{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pt="[DEFAULT]";/**
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
 */class Ad{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ld;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rd(e))try{this.getOrInitializeService({instanceIdentifier:pt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pt){return this.instances.has(e)}getOptions(e=pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pt){return this.component?this.component.multipleInstances?e:pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bd(n){return n===pt?void 0:n}function Rd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Pd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ad(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Sd={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Cd=B.INFO,kd={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Od=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=kd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ks{constructor(e){this.name=e,this._logLevel=Cd,this._logHandler=Od,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Nd=(n,e)=>e.some(t=>n instanceof t);let la,ua;function Dd(){return la||(la=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vd(){return ua||(ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fc=new WeakMap,fs=new WeakMap,Bc=new WeakMap,zi=new WeakMap,Ws=new WeakMap;function Ld(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(rt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Fc.set(t,n)}).catch(()=>{}),Ws.set(e,n),e}function xd(n){if(fs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});fs.set(n,e)}let ps={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return fs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Md(n){ps=n(ps)}function Ud(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Hi(this),e,...t);return Bc.set(r,e.sort?e.sort():[e]),rt(r)}:Vd().includes(n)?function(...e){return n.apply(Hi(this),e),rt(Fc.get(this))}:function(...e){return rt(n.apply(Hi(this),e))}}function Fd(n){return typeof n=="function"?Ud(n):(n instanceof IDBTransaction&&xd(n),Nd(n,Dd())?new Proxy(n,ps):n)}function rt(n){if(n instanceof IDBRequest)return Ld(n);if(zi.has(n))return zi.get(n);const e=Fd(n);return e!==n&&(zi.set(n,e),Ws.set(e,n)),e}const Hi=n=>Ws.get(n);function Bd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=rt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(rt(o.result),c.oldVersion,c.newVersion,rt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const jd=["get","getKey","getAll","getAllKeys","count"],qd=["put","add","delete","clear"],Ki=new Map;function ha(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ki.get(e))return Ki.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=qd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jd.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Ki.set(e,s),s}Md(n=>({...n,get:(e,t,r)=>ha(e,t)||n.get(e,t,r),has:(e,t)=>!!ha(e,t)||n.has(e,t)}));/**
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
 */class $d{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ms="@firebase/app",da="0.9.18";/**
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
 */const It=new Ks("@firebase/app"),Hd="@firebase/app-compat",Kd="@firebase/analytics-compat",Wd="@firebase/analytics",Gd="@firebase/app-check-compat",Qd="@firebase/app-check",Yd="@firebase/auth",Xd="@firebase/auth-compat",Jd="@firebase/database",Zd="@firebase/database-compat",ef="@firebase/functions",tf="@firebase/functions-compat",nf="@firebase/installations",rf="@firebase/installations-compat",sf="@firebase/messaging",of="@firebase/messaging-compat",af="@firebase/performance",cf="@firebase/performance-compat",lf="@firebase/remote-config",uf="@firebase/remote-config-compat",hf="@firebase/storage",df="@firebase/storage-compat",ff="@firebase/firestore",pf="@firebase/firestore-compat",mf="firebase",gf="10.3.1";/**
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
 */const gs="[DEFAULT]",_f={[ms]:"fire-core",[Hd]:"fire-core-compat",[Wd]:"fire-analytics",[Kd]:"fire-analytics-compat",[Qd]:"fire-app-check",[Gd]:"fire-app-check-compat",[Yd]:"fire-auth",[Xd]:"fire-auth-compat",[Jd]:"fire-rtdb",[Zd]:"fire-rtdb-compat",[ef]:"fire-fn",[tf]:"fire-fn-compat",[nf]:"fire-iid",[rf]:"fire-iid-compat",[sf]:"fire-fcm",[of]:"fire-fcm-compat",[af]:"fire-perf",[cf]:"fire-perf-compat",[lf]:"fire-rc",[uf]:"fire-rc-compat",[hf]:"fire-gcs",[df]:"fire-gcs-compat",[ff]:"fire-fst",[pf]:"fire-fst-compat","fire-js":"fire-js",[mf]:"fire-js-all"};/**
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
 */const xr=new Map,_s=new Map;function yf(n,e){try{n.container.addComponent(e)}catch(t){It.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kt(n){const e=n.name;if(_s.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;_s.set(e,n);for(const t of xr.values())yf(t,n);return!0}function Gs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const vf={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},it=new Gn("app","Firebase",vf);/**
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
 */class wf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}}/**
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
 */const rn=gf;function jc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw it.create("bad-app-name",{appName:String(i)});if(t||(t=Mc()),!t)throw it.create("no-options");const s=xr.get(i);if(s){if(Lr(t,s.options)&&Lr(r,s.config))return s;throw it.create("duplicate-app",{appName:i})}const o=new Pd(i);for(const c of _s.values())o.addComponent(c);const a=new wf(t,r,o);return xr.set(i,a),a}function qc(n=gs){const e=xr.get(n);if(!e&&n===gs&&Mc())return jc();if(!e)throw it.create("no-app",{appName:n});return e}function st(n,e,t){var r;let i=(r=_f[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),It.warn(a.join(" "));return}Kt(new Et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ef="firebase-heartbeat-database",If=1,kn="firebase-heartbeat-store";let Wi=null;function $c(){return Wi||(Wi=Bd(Ef,If,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(kn)}}}).catch(n=>{throw it.create("idb-open",{originalErrorMessage:n.message})})),Wi}async function Tf(n){try{return await(await $c()).transaction(kn).objectStore(kn).get(zc(n))}catch(e){if(e instanceof We)It.warn(e.message);else{const t=it.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});It.warn(t.message)}}}async function fa(n,e){try{const r=(await $c()).transaction(kn,"readwrite");await r.objectStore(kn).put(e,zc(n)),await r.done}catch(t){if(t instanceof We)It.warn(t.message);else{const r=it.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});It.warn(r.message)}}}function zc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Af=1024,bf=30*24*60*60*1e3;class Rf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=pa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=bf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pa(),{heartbeatsToSend:t,unsentEntries:r}=Pf(this._heartbeatsCache.heartbeats),i=Vr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pa(){return new Date().toISOString().substring(0,10)}function Pf(n,e=Af){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ma(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ma(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Sf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return md()?gd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Tf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ma(n){return Vr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Cf(n){Kt(new Et("platform-logger",e=>new $d(e),"PRIVATE")),Kt(new Et("heartbeat",e=>new Rf(e),"PRIVATE")),st(ms,da,n),st(ms,da,"esm2017"),st("fire-js","")}Cf("");function Qs(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function ga(n){return n!==void 0&&n.enterprise!==void 0}class kf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}function Hc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Of=Hc,Kc=new Gn("auth","Firebase",Hc());/**
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
 */const Mr=new Ks("@firebase/auth");function Nf(n,...e){Mr.logLevel<=B.WARN&&Mr.warn(`Auth (${rn}): ${n}`,...e)}function Rr(n,...e){Mr.logLevel<=B.ERROR&&Mr.error(`Auth (${rn}): ${n}`,...e)}/**
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
 */function Re(n,...e){throw Ys(n,...e)}function De(n,...e){return Ys(n,...e)}function Wc(n,e,t){const r=Object.assign(Object.assign({},Of()),{[e]:t});return new Gn("auth","Firebase",r).create(e,{appName:n.name})}function Df(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Re(n,"argument-error"),Wc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ys(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kc.create(n,...e)}function N(n,e,...t){if(!n)throw Ys(e,...t)}function Fe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rr(e),new Error(e)}function $e(n,e){n||Fe(e)}/**
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
 */function ys(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vf(){return _a()==="http:"||_a()==="https:"}function _a(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Lf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vf()||dd()||"connection"in navigator)?navigator.onLine:!0}function xf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Yn{constructor(e,t){this.shortDelay=e,this.longDelay=t,$e(t>e,"Short delay should be less than long delay!"),this.isMobile=hd()||fd()}get(){return Lf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xs(n,e){$e(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Gc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Fe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Fe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Fe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Mf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Uf=new Yn(3e4,6e4);function ut(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ge(n,e,t,r,i={}){return Qc(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Gc.fetch()(Yc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Qc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mf),e);try{const i=new Ff(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _r(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _r(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _r(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw _r(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Wc(n,u,l);Re(n,u)}}catch(i){if(i instanceof We)throw i;Re(n,"network-request-failed",{message:String(i)})}}async function Xn(n,e,t,r,i={}){const s=await Ge(n,e,t,r,i);return"mfaPendingCredential"in s&&Re(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Yc(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Xs(n.config,i):`${n.config.apiScheme}://${i}`}class Ff{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(De(this.auth,"network-request-failed")),Uf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _r(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=De(n,e,r);return i.customData._tokenResponse=t,i}async function Bf(n,e){return Ge(n,"GET","/v2/recaptchaConfig",ut(n,e))}/**
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
 */async function jf(n,e){return Ge(n,"POST","/v1/accounts:delete",e)}async function qf(n,e){return Ge(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function An(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $f(n,e=!1){const t=ne(n),r=await t.getIdToken(e),i=Js(r);N(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:An(Gi(i.auth_time)),issuedAtTime:An(Gi(i.iat)),expirationTime:An(Gi(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gi(n){return Number(n)*1e3}function Js(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lc(t);return i?JSON.parse(i):(Rr("Failed to decode base64 JWT payload"),null)}catch(i){return Rr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zf(n){const e=Js(n);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof We&&Hf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Hf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Kf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=An(this.lastLoginAt),this.creationTime=An(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ur(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Wt(n,qf(t,{idToken:r}));N(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qf(s.providerUserInfo):[],a=Gf(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Xc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Wf(n){const e=ne(n);await Ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gf(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qf(n){return n.map(e=>{var{providerId:t}=e,r=Qs(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Yf(n,e){const t=await Qc(n,{},async()=>{const r=Qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Yc(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Gc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Yf(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new On;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return Fe("not implemented")}}/**
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
 */function Xe(n,e){N(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Qs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Wt(this,this.stsTokenManager.getToken(this.auth,e));return N(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $f(this,e)}reload(){return Wf(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ur(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wt(this,jf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,p=(l=t.createdAt)!==null&&l!==void 0?l:void 0,_=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:I,isAnonymous:P,providerData:z,stsTokenManager:Q}=t;N(g&&Q,e,"internal-error");const b=On.fromJSON(this.name,Q);N(typeof g=="string",e,"internal-error"),Xe(h,e.name),Xe(d,e.name),N(typeof I=="boolean",e,"internal-error"),N(typeof P=="boolean",e,"internal-error"),Xe(f,e.name),Xe(m,e.name),Xe(y,e.name),Xe(v,e.name),Xe(p,e.name),Xe(_,e.name);const T=new vt({uid:g,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:P,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:b,createdAt:p,lastLoginAt:_});return z&&Array.isArray(z)&&(T.providerData=z.map(k=>Object.assign({},k))),v&&(T._redirectEventId=v),T}static async _fromIdTokenResponse(e,t,r=!1){const i=new On;i.updateFromServerResponse(t);const s=new vt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ur(s),s}}/**
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
 */const ya=new Map;function Be(n){$e(n instanceof Function,"Expected a class definition");let e=ya.get(n);return e?($e(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ya.set(n,e),e)}/**
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
 */class Jc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jc.type="NONE";const va=Jc;/**
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
 */function Pr(n,e,t){return`firebase:${n}:${e}:${t}`}class Bt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Bt(Be(va),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Be(va);const o=Pr(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=vt._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Bt(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Bt(s,e,r))}}/**
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
 */function wa(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rl(e))return"Blackberry";if(il(e))return"Webos";if(Zs(e))return"Safari";if((e.includes("chrome/")||el(e))&&!e.includes("edge/"))return"Chrome";if(nl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zc(n=_e()){return/firefox\//i.test(n)}function Zs(n=_e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function el(n=_e()){return/crios\//i.test(n)}function tl(n=_e()){return/iemobile/i.test(n)}function nl(n=_e()){return/android/i.test(n)}function rl(n=_e()){return/blackberry/i.test(n)}function il(n=_e()){return/webos/i.test(n)}function ri(n=_e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Xf(n=_e()){var e;return ri(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jf(){return pd()&&document.documentMode===10}function sl(n=_e()){return ri(n)||nl(n)||il(n)||rl(n)||/windows phone/i.test(n)||tl(n)}function Zf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ol(n,e=[]){let t;switch(n){case"Browser":t=wa(_e());break;case"Worker":t=`${wa(_e())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rn}/${r}`}/**
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
 */class ep{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function tp(n,e={}){return Ge(n,"GET","/v2/passwordPolicy",ut(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const np=6;class rp{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:np,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ip{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ea(this),this.idTokenSubscription=new Ea(this),this.beforeStateQueue=new ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Be(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ur(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ne(e):null;return t&&N(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Be(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tp(this),t=new rp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Be(e)||this._popupRedirectResolver;N(t,this,"argument-error"),this.redirectPersistenceManager=await Bt.create(this,[Be(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ol(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Nf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Qe(n){return ne(n)}class Ea{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ed(t=>this.observer=t)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function sp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function al(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=De("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",sp().appendChild(r)})}function op(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ap="https://www.google.com/recaptcha/enterprise.js?render=",cp="recaptcha-enterprise",lp="NO_RECAPTCHA";class up{constructor(e){this.type=cp,this.auth=Qe(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Bf(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new kf(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;ga(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(lp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&ga(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}al(ap+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Gt(n,e,t,r=!1){const i=new up(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function hp(n,e){const t=Gs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Lr(s,e!=null?e:{}))return i;Re(i,"already-initialized")}return t.initialize({options:e})}function dp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Be);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fp(n,e,t){const r=Qe(n);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=cl(e),{host:o,port:a}=pp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||mp()}function cl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pp(n){const e=cl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ia(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ia(o)}}}function Ia(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function mp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class eo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Fe("not implemented")}_getIdTokenResponse(e){return Fe("not implemented")}_linkToIdToken(e,t){return Fe("not implemented")}_getReauthenticationResolver(e){return Fe("not implemented")}}async function gp(n,e){return Ge(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Qi(n,e){return Xn(n,"POST","/v1/accounts:signInWithPassword",ut(n,e))}async function _p(n,e){return Ge(n,"POST","/v1/accounts:sendOobCode",ut(n,e))}async function Yi(n,e){return _p(n,e)}/**
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
 */async function yp(n,e){return Xn(n,"POST","/v1/accounts:signInWithEmailLink",ut(n,e))}async function vp(n,e){return Xn(n,"POST","/v1/accounts:signInWithEmailLink",ut(n,e))}/**
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
 */class Nn extends eo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Nn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Nn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await Gt(e,r,"signInWithPassword");return Qi(e,i)}else return Qi(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Gt(e,r,"signInWithPassword");return Qi(e,s)}else return Promise.reject(i)});case"emailLink":return yp(e,{email:this._email,oobCode:this._password});default:Re(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return gp(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vp(e,{idToken:t,email:this._email,oobCode:this._password});default:Re(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jt(n,e){return Xn(n,"POST","/v1/accounts:signInWithIdp",ut(n,e))}/**
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
 */const wp="http://localhost";class Tt extends eo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Re("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Qs(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Tt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return jt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,jt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jt(e,t)}buildRequest(){const e={requestUri:wp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qn(t)}return e}}/**
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
 */function Ep(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ip(n){const e=_n(yn(n)).link,t=e?_n(yn(e)).deep_link_id:null,r=_n(yn(n)).deep_link_id;return(r?_n(yn(r)).link:null)||r||t||e||n}class to{constructor(e){var t,r,i,s,o,a;const c=_n(yn(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Ep((i=c.mode)!==null&&i!==void 0?i:null);N(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Ip(e);try{return new to(t)}catch{return null}}}/**
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
 */class sn{constructor(){this.providerId=sn.PROVIDER_ID}static credential(e,t){return Nn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=to.parseLink(t);return N(r,"argument-error"),Nn._fromEmailAndCode(e,r.code,r.tenantId)}}sn.PROVIDER_ID="password";sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class no{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jn extends no{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ze extends Jn{constructor(){super("facebook.com")}static credential(e){return Tt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ze.PROVIDER_ID="facebook.com";/**
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
 */class Ue extends Jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ue.credential(t,r)}catch{return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com";Ue.PROVIDER_ID="google.com";/**
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
 */class et extends Jn{constructor(){super("github.com")}static credential(e){return Tt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch{return null}}}et.GITHUB_SIGN_IN_METHOD="github.com";et.PROVIDER_ID="github.com";/**
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
 */class tt extends Jn{constructor(){super("twitter.com")}static credential(e,t){return Tt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return tt.credential(t,r)}catch{return null}}}tt.TWITTER_SIGN_IN_METHOD="twitter.com";tt.PROVIDER_ID="twitter.com";/**
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
 */async function Xi(n,e){return Xn(n,"POST","/v1/accounts:signUp",ut(n,e))}/**
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
 */class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await vt._fromIdTokenResponse(e,r,i),o=Ta(r);return new At({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ta(r);return new At({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ta(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Fr extends We{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Fr(e,t,r,i)}}function ll(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fr._fromErrorAndOperation(n,s,e,r):s})}async function Tp(n,e,t=!1){const r=await Wt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return At._forOperation(n,"link",r)}/**
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
 */async function Ap(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Wt(n,ll(r,i,e,n),t);N(s.idToken,r,"internal-error");const o=Js(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(n.uid===a,r,"user-mismatch"),At._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Re(r,"user-mismatch"),s}}/**
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
 */async function ul(n,e,t=!1){const r="signIn",i=await ll(n,r,e),s=await At._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function bp(n,e){return ul(Qe(n),e)}/**
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
 */function Ji(n,e,t){var r;N(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),N(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(N(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(N(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function hl(n){const e=Qe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Rp(n,e,t){var r;const i=Qe(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Gt(i,s,"getOobCode",!0);t&&Ji(i,o,t),await Yi(i,o)}else t&&Ji(i,s,t),await Yi(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Gt(i,s,"getOobCode",!0);t&&Ji(i,a,t),await Yi(i,a)}else return Promise.reject(o)})}async function Pp(n,e,t){var r;const i=Qe(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Gt(i,s,"signUpPassword");o=Xi(i,l)}else o=Xi(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Gt(i,s,"signUpPassword");return Xi(i,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&hl(n),l}),c=await At._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Sp(n,e,t){return bp(ne(n),sn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hl(n),r})}/**
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
 */async function Cp(n,e){return Ge(n,"POST","/v1/accounts:update",e)}/**
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
 */async function kp(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ne(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Wt(r,Cp(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Op(n,e,t,r){return ne(n).onIdTokenChanged(e,t,r)}function Np(n,e,t){return ne(n).beforeAuthStateChanged(e,t)}function Dp(n,e,t,r){return ne(n).onAuthStateChanged(e,t,r)}function Vp(n){return ne(n).signOut()}const Br="__sak";/**
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
 */class dl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Br,"1"),this.storage.removeItem(Br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Lp(){const n=_e();return Zs(n)||ri(n)}const xp=1e3,Mp=10;class fl extends dl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lp()&&Zf(),this.fallbackToPolling=sl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Jf()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Mp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fl.type="LOCAL";const Up=fl;/**
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
 */class pl extends dl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pl.type="SESSION";const ml=pl;/**
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
 */function Fp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ii(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await Fp(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ii.receivers=[];/**
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
 */function ro(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Bp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=ro("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ve(){return window}function jp(n){Ve().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function gl(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function qp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $p(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zp(){return gl()?self:null}/**
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
 */const _l="firebaseLocalStorageDb",Hp=1,jr="firebaseLocalStorage",yl="fbase_key";class Zn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function si(n,e){return n.transaction([jr],e?"readwrite":"readonly").objectStore(jr)}function Kp(){const n=indexedDB.deleteDatabase(_l);return new Zn(n).toPromise()}function vs(){const n=indexedDB.open(_l,Hp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(jr,{keyPath:yl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(jr)?e(r):(r.close(),await Kp(),e(await vs()))})})}async function Aa(n,e,t){const r=si(n,!0).put({[yl]:e,value:t});return new Zn(r).toPromise()}async function Wp(n,e){const t=si(n,!1).get(e),r=await new Zn(t).toPromise();return r===void 0?null:r.value}function ba(n,e){const t=si(n,!0).delete(e);return new Zn(t).toPromise()}const Gp=800,Qp=3;class vl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Qp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ii._getInstance(zp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await qp(),!this.activeServiceWorker)return;this.sender=new Bp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$p()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vs();return await Aa(e,Br,"1"),await ba(e,Br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Aa(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Wp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ba(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=si(i,!1).getAll();return new Zn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vl.type="LOCAL";const Yp=vl;new Yn(3e4,6e4);/**
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
 */function wl(n,e){return e?Be(e):(N(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class io extends eo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xp(n){return ul(n.auth,new io(n),n.bypassAuthState)}function Jp(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),Ap(t,new io(n),n.bypassAuthState)}async function Zp(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),Tp(t,new io(n),n.bypassAuthState)}/**
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
 */class El{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xp;case"linkViaPopup":case"linkViaRedirect":return Zp;case"reauthViaPopup":case"reauthViaRedirect":return Jp;default:Re(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const em=new Yn(2e3,1e4);async function tm(n,e,t){const r=Qe(n);Df(n,e,no);const i=wl(r,t);return new mt(r,"signInViaPopup",e,i).executeNotNull()}class mt extends El{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mt.currentPopupAction&&mt.currentPopupAction.cancel(),mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(De(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(De(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(De(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,em.get())};e()}}mt.currentPopupAction=null;/**
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
 */const nm="pendingRedirect",Sr=new Map;class rm extends El{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Sr.get(this.auth._key());if(!e){try{const r=await im(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Sr.set(this.auth._key(),e)}return this.bypassAuthState||Sr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function im(n,e){const t=am(e),r=om(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function sm(n,e){Sr.set(n._key(),e)}function om(n){return Be(n._redirectPersistence)}function am(n){return Pr(nm,n.config.apiKey,n.name)}async function cm(n,e,t=!1){const r=Qe(n),i=wl(r,e),o=await new rm(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const lm=10*60*1e3;class um{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Il(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(De(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ra(e))}saveEventToCache(e){this.cachedEventUids.add(Ra(e)),this.lastProcessedEventTime=Date.now()}}function Ra(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Il({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Il(n);default:return!1}}/**
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
 */async function dm(n,e={}){return Ge(n,"GET","/v1/projects",e)}/**
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
 */const fm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pm=/^https?/;async function mm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dm(n);for(const t of e)try{if(gm(t))return}catch{}Re(n,"unauthorized-domain")}function gm(n){const e=ys(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!pm.test(t))return!1;if(fm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const _m=new Yn(3e4,6e4);function Pa(){const n=Ve().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ym(n){return new Promise((e,t)=>{var r,i,s;function o(){Pa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pa(),t(De(n,"network-request-failed"))},timeout:_m.get()})}if(!((i=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ve().gapi)===null||s===void 0)&&s.load)o();else{const a=op("iframefcb");return Ve()[a]=()=>{gapi.load?o():t(De(n,"network-request-failed"))},al(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Cr=null,e})}let Cr=null;function vm(n){return Cr=Cr||ym(n),Cr}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const wm=new Yn(5e3,15e3),Em="__/auth/iframe",Im="emulator/auth/iframe",Tm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Am=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bm(n){const e=n.config;N(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xs(e,Im):`https://${n.config.authDomain}/${Em}`,r={apiKey:e.apiKey,appName:n.name,v:rn},i=Am.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Qn(r).slice(1)}`}async function Rm(n){const e=await vm(n),t=Ve().gapi;return N(t,n,"internal-error"),e.open({where:document.body,url:bm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=De(n,"network-request-failed"),a=Ve().setTimeout(()=>{s(o)},wm.get());function c(){Ve().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Pm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sm=500,Cm=600,km="_blank",Om="http://localhost";class Sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nm(n,e,t,r=Sm,i=Cm){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Pm),{width:r.toString(),height:i.toString(),top:s,left:o}),l=_e().toLowerCase();t&&(a=el(l)?km:t),Zc(l)&&(e=e||Om,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Xf(l)&&a!=="_self")return Dm(e||"",a),new Sa(null);const h=window.open(e||"",a,u);N(h,n,"popup-blocked");try{h.focus()}catch{}return new Sa(h)}function Dm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Vm="__/auth/handler",Lm="emulator/auth/handler",xm=encodeURIComponent("fac");async function Ca(n,e,t,r,i,s){N(n.config.authDomain,n,"auth-domain-config-required"),N(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:rn,eventId:i};if(e instanceof no){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",wd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Jn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${xm}=${encodeURIComponent(c)}`:"";return`${Mm(n)}?${Qn(a).slice(1)}${l}`}function Mm({config:n}){return n.emulator?Xs(n,Lm):`https://${n.authDomain}/${Vm}`}/**
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
 */const Zi="webStorageSupport";class Um{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ml,this._completeRedirectFn=cm,this._overrideRedirectResult=sm}async _openPopup(e,t,r,i){var s;$e((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ca(e,t,r,ys(),i);return Nm(e,o,ro())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ca(e,t,r,ys(),i);return jp(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):($e(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Rm(e),r=new um(e);return t.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zi,{type:Zi},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zi];o!==void 0&&t(!!o),Re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sl()||Zs()||ri()}}const Fm=Um;var ka="@firebase/auth",Oa="1.3.0";/**
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
 */class Bm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qm(n){Kt(new Et("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ol(n)},l=new ip(r,i,s,c);return dp(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Kt(new Et("auth-internal",e=>{const t=Qe(e.getProvider("auth").getImmediate());return(r=>new Bm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(ka,Oa,jm(n)),st(ka,Oa,"esm2017")}/**
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
 */const $m=5*60,zm=Uc("authIdTokenMaxAge")||$m;let Na=null;const Hm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>zm)return;const i=t==null?void 0:t.token;Na!==i&&(Na=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tl(n=qc()){const e=Gs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hp(n,{popupRedirectResolver:Fm,persistence:[Yp,Up,ml]}),r=Uc("authTokenSyncURL");if(r){const s=Hm(r);Np(t,s,()=>s(t.currentUser)),Op(t,o=>s(o))}const i=xc("auth");return i&&fp(t,`http://${i}`),t}qm("Browser");const oi="/assets/Logo.tripify.5bf5e0eb.svg",Km="/assets/linea.icon.0e34c358.svg",Wm="/assets/btn_google_signin_light_normal_web@2x.1811e950.png";var Gm="firebase",Qm="10.3.1";/**
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
 */st(Gm,Qm,"app");var Ym=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,so=so||{},V=Ym||self;function ai(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function er(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Xm(n){return Object.prototype.hasOwnProperty.call(n,es)&&n[es]||(n[es]=++Jm)}var es="closure_uid_"+(1e9*Math.random()>>>0),Jm=0;function Zm(n,e,t){return n.call.apply(n.bind,arguments)}function eg(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function pe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pe=Zm:pe=eg,pe.apply(null,arguments)}function yr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function oe(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ht(){this.s=this.s,this.o=this.o}var tg=0;ht.prototype.s=!1;ht.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tg!=0)&&Xm(this)};ht.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Al=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function oo(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Da(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(ai(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function me(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var ng=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{V.addEventListener("test",()=>{},e),V.removeEventListener("test",()=>{},e)}catch{}return n}();function Dn(n){return/^[\s\xa0]*$/.test(n)}function ci(){var n=V.navigator;return n&&(n=n.userAgent)?n:""}function ke(n){return ci().indexOf(n)!=-1}function ao(n){return ao[" "](n),n}ao[" "]=function(){};function rg(n,e){var t=Qg;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var ig=ke("Opera"),Qt=ke("Trident")||ke("MSIE"),bl=ke("Edge"),ws=bl||Qt,Rl=ke("Gecko")&&!(ci().toLowerCase().indexOf("webkit")!=-1&&!ke("Edge"))&&!(ke("Trident")||ke("MSIE"))&&!ke("Edge"),sg=ci().toLowerCase().indexOf("webkit")!=-1&&!ke("Edge");function Pl(){var n=V.document;return n?n.documentMode:void 0}var Es;e:{var ts="",ns=function(){var n=ci();if(Rl)return/rv:([^\);]+)(\)|;)/.exec(n);if(bl)return/Edge\/([\d\.]+)/.exec(n);if(Qt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(sg)return/WebKit\/(\S+)/.exec(n);if(ig)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(ns&&(ts=ns?ns[1]:""),Qt){var rs=Pl();if(rs!=null&&rs>parseFloat(ts)){Es=String(rs);break e}}Es=ts}var Is;if(V.document&&Qt){var Va=Pl();Is=Va||parseInt(Es,10)||void 0}else Is=void 0;var og=Is;function Vn(n,e){if(me.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Rl){e:{try{ao(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:ag[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Vn.$.h.call(this)}}oe(Vn,me);var ag={2:"touch",3:"pen",4:"mouse"};Vn.prototype.h=function(){Vn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var tr="closure_listenable_"+(1e6*Math.random()|0),cg=0;function lg(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++cg,this.fa=this.ia=!1}function li(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function co(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function ug(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Sl(n){const e={};for(const t in n)e[t]=n[t];return e}const La="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cl(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<La.length;s++)t=La[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function ui(n){this.src=n,this.g={},this.h=0}ui.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=As(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new lg(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function Ts(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Al(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(li(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function As(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var lo="closure_lm_"+(1e6*Math.random()|0),is={};function kl(n,e,t,r,i){if(r&&r.once)return Nl(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)kl(n,e[s],t,r,i);return null}return t=fo(t),n&&n[tr]?n.O(e,t,er(r)?!!r.capture:!!r,i):Ol(n,e,t,!1,r,i)}function Ol(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=er(i)?!!i.capture:!!i,a=ho(n);if(a||(n[lo]=a=new ui(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=hg(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)ng||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Vl(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function hg(){function n(t){return e.call(n.src,n.listener,t)}const e=dg;return n}function Nl(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Nl(n,e[s],t,r,i);return null}return t=fo(t),n&&n[tr]?n.P(e,t,er(r)?!!r.capture:!!r,i):Ol(n,e,t,!0,r,i)}function Dl(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Dl(n,e[s],t,r,i);else r=er(r)?!!r.capture:!!r,t=fo(t),n&&n[tr]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=As(s,t,r,i),-1<t&&(li(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=ho(n))&&(e=n.g[e.toString()],n=-1,e&&(n=As(e,t,r,i)),(t=-1<n?e[n]:null)&&uo(t))}function uo(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[tr])Ts(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Vl(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=ho(e))?(Ts(t,n),t.h==0&&(t.src=null,e[lo]=null)):li(n)}}}function Vl(n){return n in is?is[n]:is[n]="on"+n}function dg(n,e){if(n.fa)n=!0;else{e=new Vn(e,this);var t=n.listener,r=n.la||n.src;n.ia&&uo(n),n=t.call(r,e)}return n}function ho(n){return n=n[lo],n instanceof ui?n:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function fo(n){return typeof n=="function"?n:(n[ss]||(n[ss]=function(e){return n.handleEvent(e)}),n[ss])}function se(){ht.call(this),this.i=new ui(this),this.S=this,this.J=null}oe(se,ht);se.prototype[tr]=!0;se.prototype.removeEventListener=function(n,e,t,r){Dl(this,n,e,t,r)};function le(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new me(e,n);else if(e instanceof me)e.target=e.target||n;else{var i=e;e=new me(r,n),Cl(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=vr(o,r,!0,e)&&i}if(o=e.g=n,i=vr(o,r,!0,e)&&i,i=vr(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=vr(o,r,!1,e)&&i}se.prototype.N=function(){if(se.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)li(t[r]);delete n.g[e],n.h--}}this.J=null};se.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};se.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function vr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Ts(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var po=V.JSON.stringify;class fg{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function pg(){var n=mo;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class mg{constructor(){this.h=this.g=null}add(e,t){const r=Ll.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Ll=new fg(()=>new gg,n=>n.reset());class gg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function _g(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function yg(n){V.setTimeout(()=>{throw n},0)}let Ln,xn=!1,mo=new mg,xl=()=>{const n=V.Promise.resolve(void 0);Ln=()=>{n.then(vg)}};var vg=()=>{for(var n;n=pg();){try{n.h.call(n.g)}catch(t){yg(t)}var e=Ll;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}xn=!1};function hi(n,e){se.call(this),this.h=n||1,this.g=e||V,this.j=pe(this.qb,this),this.l=Date.now()}oe(hi,se);R=hi.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),le(this,"tick"),this.ga&&(go(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function go(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}R.N=function(){hi.$.N.call(this),go(this),delete this.g};function _o(n,e,t){if(typeof n=="function")t&&(n=pe(n,t));else if(n&&typeof n.handleEvent=="function")n=pe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(n,e||0)}function Ml(n){n.g=_o(()=>{n.g=null,n.i&&(n.i=!1,Ml(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class wg extends ht{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ml(this)}N(){super.N(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mn(n){ht.call(this),this.h=n,this.g={}}oe(Mn,ht);var xa=[];function Ul(n,e,t,r){Array.isArray(t)||(t&&(xa[0]=t.toString()),t=xa);for(var i=0;i<t.length;i++){var s=kl(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Fl(n){co(n.g,function(e,t){this.g.hasOwnProperty(t)&&uo(e)},n),n.g={}}Mn.prototype.N=function(){Mn.$.N.call(this),Fl(this)};Mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function di(){this.g=!0}di.prototype.Ea=function(){this.g=!1};function Eg(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function Ig(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Ut(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ag(n,t)+(r?" "+r:"")})}function Tg(n,e){n.info(function(){return"TIMEOUT: "+e})}di.prototype.info=function(){};function Ag(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return po(t)}catch{return e}}var Ct={},Ma=null;function fi(){return Ma=Ma||new se}Ct.Ta="serverreachability";function Bl(n){me.call(this,Ct.Ta,n)}oe(Bl,me);function Un(n){const e=fi();le(e,new Bl(e))}Ct.STAT_EVENT="statevent";function jl(n,e){me.call(this,Ct.STAT_EVENT,n),this.stat=e}oe(jl,me);function ve(n){const e=fi();le(e,new jl(e,n))}Ct.Ua="timingevent";function ql(n,e){me.call(this,Ct.Ua,n),this.size=e}oe(ql,me);function nr(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){n()},e)}var pi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},$l={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function yo(){}yo.prototype.h=null;function Ua(n){return n.h||(n.h=n.i())}function zl(){}var rr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vo(){me.call(this,"d")}oe(vo,me);function wo(){me.call(this,"c")}oe(wo,me);var bs;function mi(){}oe(mi,yo);mi.prototype.g=function(){return new XMLHttpRequest};mi.prototype.i=function(){return{}};bs=new mi;function ir(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Mn(this),this.P=bg,n=ws?125:void 0,this.V=new hi(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Hl}function Hl(){this.i=null,this.g="",this.h=!1}var bg=45e3,Rs={},qr={};R=ir.prototype;R.setTimeout=function(n){this.P=n};function Ps(n,e,t){n.L=1,n.v=_i(ze(e)),n.s=t,n.S=!0,Kl(n,null)}function Kl(n,e){n.G=Date.now(),sr(n),n.A=ze(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),eu(t.i,"t",r),n.C=0,t=n.l.J,n.h=new Hl,n.g=Eu(n.l,t?e:null,!n.s),0<n.O&&(n.M=new wg(pe(n.Pa,n,n.g),n.O)),Ul(n.U,n.g,"readystatechange",n.nb),e=n.I?Sl(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Un(),Eg(n.j,n.u,n.A,n.m,n.W,n.s)}R.nb=function(n){n=n.target;const e=this.M;e&&Oe(n)==3?e.l():this.Pa(n)};R.Pa=function(n){try{if(n==this.g)e:{const u=Oe(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ws||this.g&&(this.h.h||this.g.ja()||qa(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Un(3):Un(2)),gi(this);var t=this.g.da();this.ca=t;t:if(Wl(this)){var r=qa(this.g);n="";var i=r.length,s=Oe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gt(this),bn(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,Ig(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Dn(a)){var l=a;break t}}l=null}if(t=l)Ut(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ss(this,t);else{this.i=!1,this.o=3,ve(12),gt(this),bn(this);break e}}this.S?(Gl(this,u,o),ws&&this.i&&u==3&&(Ul(this.U,this.V,"tick",this.mb),this.V.start())):(Ut(this.j,this.m,o,null),Ss(this,o)),u==4&&gt(this),this.i&&!this.J&&(u==4?_u(this.l,this):(this.i=!1,sr(this)))}else Kg(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ve(12)):(this.o=0,ve(13)),gt(this),bn(this)}}}catch{}finally{}};function Wl(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Gl(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=Rg(n,t),i==qr){e==4&&(n.o=4,ve(14),r=!1),Ut(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Rs){n.o=4,ve(15),Ut(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Ut(n.j,n.m,i,null),Ss(n,i);Wl(n)&&i!=qr&&i!=Rs&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ve(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ro(e),e.M=!0,ve(11))):(Ut(n.j,n.m,t,"[Invalid Chunked Response]"),gt(n),bn(n))}R.mb=function(){if(this.g){var n=Oe(this.g),e=this.g.ja();this.C<e.length&&(gi(this),Gl(this,n,e),this.i&&n!=4&&sr(this))}};function Rg(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?qr:(t=Number(e.substring(t,r)),isNaN(t)?Rs:(r+=1,r+t>e.length?qr:(e=e.slice(r,r+t),n.C=r+t,e)))}R.cancel=function(){this.J=!0,gt(this)};function sr(n){n.Y=Date.now()+n.P,Ql(n,n.P)}function Ql(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=nr(pe(n.lb,n),e)}function gi(n){n.B&&(V.clearTimeout(n.B),n.B=null)}R.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Tg(this.j,this.A),this.L!=2&&(Un(),ve(17)),gt(this),this.o=2,bn(this)):Ql(this,this.Y-n)};function bn(n){n.l.H==0||n.J||_u(n.l,n)}function gt(n){gi(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,go(n.V),Fl(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Ss(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Cs(t.i,n))){if(!n.K&&Cs(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Hr(t),Ei(t);else break e;bo(t),ve(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=nr(pe(t.ib,t),6e3));if(1>=ru(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else _t(t,11)}else if((n.K||t.g==n)&&Hr(t),!Dn(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Eo(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,H(r.I,r.F,y))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=wu(r,r.J?r.pa:null,r.Y),o.K){iu(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(gi(a),sr(a)),r.g=o}else mu(r);0<t.j.length&&Ii(t)}else l[0]!="stop"&&l[0]!="close"||_t(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?_t(t,7):Ao(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}Un(4)}catch{}}function Pg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ai(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Sg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ai(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Yl(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ai(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Sg(n),r=Pg(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Xl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cg(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof wt){this.h=n.h,$r(this,n.j),this.s=n.s,this.g=n.g,zr(this,n.m),this.l=n.l;var e=n.i,t=new Fn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Fa(this,t),this.o=n.o}else n&&(e=String(n).match(Xl))?(this.h=!1,$r(this,e[1]||"",!0),this.s=vn(e[2]||""),this.g=vn(e[3]||"",!0),zr(this,e[4]),this.l=vn(e[5]||"",!0),Fa(this,e[6]||"",!0),this.o=vn(e[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}wt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(wn(e,Ba,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(wn(e,Ba,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(wn(t,t.charAt(0)=="/"?Ng:Og,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",wn(t,Vg)),n.join("")};function ze(n){return new wt(n)}function $r(n,e,t){n.j=t?vn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function zr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Fa(n,e,t){e instanceof Fn?(n.i=e,Lg(n.i,n.h)):(t||(e=wn(e,Dg)),n.i=new Fn(e,n.h))}function H(n,e,t){n.i.set(e,t)}function _i(n){return H(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function vn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function wn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,kg),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function kg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ba=/[#\/\?@]/g,Og=/[#\?:]/g,Ng=/[#\?]/g,Dg=/[#\?@]/g,Vg=/#/g;function Fn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function dt(n){n.g||(n.g=new Map,n.h=0,n.i&&Cg(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}R=Fn.prototype;R.add=function(n,e){dt(this),this.i=null,n=on(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Jl(n,e){dt(n),e=on(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Zl(n,e){return dt(n),e=on(n,e),n.g.has(e)}R.forEach=function(n,e){dt(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};R.ta=function(){dt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};R.Z=function(n){dt(this);let e=[];if(typeof n=="string")Zl(this,n)&&(e=e.concat(this.g.get(on(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};R.set=function(n,e){return dt(this),this.i=null,n=on(this,n),Zl(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};R.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function eu(n,e,t){Jl(n,e),0<t.length&&(n.i=null,n.g.set(on(n,e),oo(t)),n.h+=t.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function on(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Lg(n,e){e&&!n.j&&(dt(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Jl(this,r),eu(this,i,t))},n)),n.j=e}var xg=class{constructor(n,e){this.g=n,this.map=e}};function tu(n){this.l=n||Mg,V.PerformanceNavigationTiming?(n=V.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(V.g&&V.g.Ka&&V.g.Ka()&&V.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mg=10;function nu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ru(n){return n.h?1:n.g?n.g.size:0}function Cs(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Eo(n,e){n.g?n.g.add(e):n.h=e}function iu(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}tu.prototype.cancel=function(){if(this.i=su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function su(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return oo(n.i)}var Ug=class{stringify(n){return V.JSON.stringify(n,void 0)}parse(n){return V.JSON.parse(n,void 0)}};function Fg(){this.g=new Ug}function Bg(n,e,t){const r=t||"";try{Yl(n,function(i,s){let o=i;er(i)&&(o=po(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function jg(n,e){const t=new di;if(V.Image){const r=new Image;r.onload=yr(wr,t,r,"TestLoadImage: loaded",!0,e),r.onerror=yr(wr,t,r,"TestLoadImage: error",!1,e),r.onabort=yr(wr,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=yr(wr,t,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function wr(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function yi(n){this.l=n.fc||null,this.j=n.ob||!1}oe(yi,yo);yi.prototype.g=function(){return new vi(this.l,this.j)};yi.prototype.i=function(n){return function(){return n}}({});function vi(n,e){se.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Io,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oe(vi,se);var Io=0;R=vi.prototype;R.open=function(n,e){if(this.readyState!=Io)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Bn(this)};R.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||V).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,or(this)),this.readyState=Io};R.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ou(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function ou(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}R.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?or(this):Bn(this),this.readyState==3&&ou(this)}};R.Za=function(n){this.g&&(this.response=this.responseText=n,or(this))};R.Ya=function(n){this.g&&(this.response=n,or(this))};R.ka=function(){this.g&&or(this)};function or(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Bn(n)}R.setRequestHeader=function(n,e){this.v.append(n,e)};R.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Bn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var qg=V.JSON.parse;function X(n){se.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=au,this.L=this.M=!1}oe(X,se);var au="",$g=/^https?$/i,zg=["POST","PUT"];R=X.prototype;R.Oa=function(n){this.M=n};R.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bs.g(),this.C=this.u?Ua(this.u):Ua(bs),this.g.onreadystatechange=pe(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){ja(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=V.FormData&&n instanceof V.FormData,!(0<=Al(zg,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{uu(this),0<this.B&&((this.L=Hg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pe(this.ua,this)):this.A=_o(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){ja(this,s)}};function Hg(n){return Qt&&typeof n.timeout=="number"&&n.ontimeout!==void 0}R.ua=function(){typeof so<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,le(this,"timeout"),this.abort(8))};function ja(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,cu(n),wi(n)}function cu(n){n.F||(n.F=!0,le(n,"complete"),le(n,"error"))}R.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,le(this,"complete"),le(this,"abort"),wi(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wi(this,!0)),X.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?lu(this):this.kb())};R.kb=function(){lu(this)};function lu(n){if(n.h&&typeof so<"u"&&(!n.C[1]||Oe(n)!=4||n.da()!=2)){if(n.v&&Oe(n)==4)_o(n.La,0,n);else if(le(n,"readystatechange"),Oe(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(Xl)[1]||null;!i&&V.self&&V.self.location&&(i=V.self.location.protocol.slice(0,-1)),r=!$g.test(i?i.toLowerCase():"")}t=r}if(t)le(n,"complete"),le(n,"success");else{n.m=6;try{var s=2<Oe(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",cu(n)}}finally{wi(n)}}}}function wi(n,e){if(n.g){uu(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||le(n,"ready");try{t.onreadystatechange=r}catch{}}}function uu(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(V.clearTimeout(n.A),n.A=null)}R.isActive=function(){return!!this.g};function Oe(n){return n.g?n.g.readyState:0}R.da=function(){try{return 2<Oe(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),qg(e)}};function qa(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case au:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Kg(n){const e={};n=(n.g&&2<=Oe(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Dn(n[r]))continue;var t=_g(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}ug(e,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function hu(n){let e="";return co(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function To(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=hu(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):H(n,e,t))}function fn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function du(n){this.Ga=0,this.j=[],this.l=new di,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fn("baseRetryDelayMs",5e3,n),this.hb=fn("retryDelaySeedMs",1e4,n),this.eb=fn("forwardChannelMaxRetries",2,n),this.xa=fn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new tu(n&&n.concurrentRequestLimit),this.Ja=new Fg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=du.prototype;R.ra=8;R.H=1;function Ao(n){if(fu(n),n.H==3){var e=n.W++,t=ze(n.I);if(H(t,"SID",n.K),H(t,"RID",e),H(t,"TYPE","terminate"),ar(n,t),e=new ir(n,n.l,e),e.L=2,e.v=_i(ze(t)),t=!1,V.navigator&&V.navigator.sendBeacon)try{t=V.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&V.Image&&(new Image().src=e.v,t=!0),t||(e.g=Eu(e.l,null),e.g.ha(e.v)),e.G=Date.now(),sr(e)}vu(n)}function Ei(n){n.g&&(Ro(n),n.g.cancel(),n.g=null)}function fu(n){Ei(n),n.u&&(V.clearTimeout(n.u),n.u=null),Hr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&V.clearTimeout(n.m),n.m=null)}function Ii(n){if(!nu(n.i)&&!n.m){n.m=!0;var e=n.Na;Ln||xl(),xn||(Ln(),xn=!0),mo.add(e,n),n.C=0}}function Wg(n,e){return ru(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=nr(pe(n.Na,n,e),yu(n,n.C)),n.C++,!0)}R.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new ir(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Sl(s),Cl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=pu(this,i,e),t=ze(this.I),H(t,"RID",n),H(t,"CVER",22),this.F&&H(t,"X-HTTP-Session-Id",this.F),ar(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(hu(s)))+"&"+e:this.o&&To(t,this.o,s)),Eo(this.i,i),this.bb&&H(t,"TYPE","init"),this.P?(H(t,"$req",e),H(t,"SID","null"),i.aa=!0,Ps(i,t,null)):Ps(i,t,e),this.H=2}}else this.H==3&&(n?$a(this,n):this.j.length==0||nu(this.i)||$a(this))};function $a(n,e){var t;e?t=e.m:t=n.W++;const r=ze(n.I);H(r,"SID",n.K),H(r,"RID",t),H(r,"AID",n.V),ar(n,r),n.o&&n.s&&To(r,n.o,n.s),t=new ir(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=pu(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Eo(n.i,t),Ps(t,r,e)}function ar(n,e){n.na&&co(n.na,function(t,r){H(e,r,t)}),n.h&&Yl({},function(t,r){H(e,r,t)})}function pu(n,e,t){t=Math.min(n.j.length,t);var r=n.h?pe(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{Bg(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function mu(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Ln||xl(),xn||(Ln(),xn=!0),mo.add(e,n),n.A=0}}function bo(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=nr(pe(n.Ma,n),yu(n,n.A)),n.A++,!0)}R.Ma=function(){if(this.u=null,gu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=nr(pe(this.jb,this),n)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ve(10),Ei(this),gu(this))};function Ro(n){n.B!=null&&(V.clearTimeout(n.B),n.B=null)}function gu(n){n.g=new ir(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=ze(n.wa);H(e,"RID","rpc"),H(e,"SID",n.K),H(e,"AID",n.V),H(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&H(e,"TO",n.qa),H(e,"TYPE","xmlhttp"),ar(n,e),n.o&&n.s&&To(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=_i(ze(e)),t.s=null,t.S=!0,Kl(t,n)}R.ib=function(){this.v!=null&&(this.v=null,Ei(this),bo(this),ve(19))};function Hr(n){n.v!=null&&(V.clearTimeout(n.v),n.v=null)}function _u(n,e){var t=null;if(n.g==e){Hr(n),Ro(n),n.g=null;var r=2}else if(Cs(n.i,e))t=e.F,iu(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=fi(),le(r,new ql(r,t)),Ii(n)}else mu(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Wg(n,e)||r==2&&bo(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:_t(n,5);break;case 4:_t(n,10);break;case 3:_t(n,6);break;default:_t(n,2)}}}function yu(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function _t(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=pe(n.pb,n);t||(t=new wt("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||$r(t,"https"),_i(t)),jg(t.toString(),r)}else ve(2);n.H=0,n.h&&n.h.za(e),vu(n),fu(n)}R.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ve(2)):(this.l.info("Failed to ping google.com"),ve(1))};function vu(n){if(n.H=0,n.ma=[],n.h){const e=su(n.i);(e.length!=0||n.j.length!=0)&&(Da(n.ma,e),Da(n.ma,n.j),n.i.i.length=0,oo(n.j),n.j.length=0),n.h.ya()}}function wu(n,e,t){var r=t instanceof wt?ze(t):new wt(t);if(r.g!="")e&&(r.g=e+"."+r.g),zr(r,r.m);else{var i=V.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new wt(null);r&&$r(s,r),e&&(s.g=e),i&&zr(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&H(r,t,e),H(r,"VER",n.ra),ar(n,r),r}function Eu(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new X(new yi({ob:!0})):new X(n.va),e.Oa(n.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function Iu(){}R=Iu.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function Kr(){if(Qt&&!(10<=Number(og)))throw Error("Environmental error: no available transport.")}Kr.prototype.g=function(n,e){return new Te(n,e)};function Te(n,e){se.call(this),this.g=new du(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Dn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Dn(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new an(this)}oe(Te,se);Te.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;ve(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=wu(n,null,n.Y),Ii(n)};Te.prototype.close=function(){Ao(this.g)};Te.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=po(n),n=t);e.j.push(new xg(e.fb++,n)),e.H==3&&Ii(e)};Te.prototype.N=function(){this.g.h=null,delete this.j,Ao(this.g),delete this.g,Te.$.N.call(this)};function Tu(n){vo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}oe(Tu,vo);function Au(){wo.call(this),this.status=1}oe(Au,wo);function an(n){this.g=n}oe(an,Iu);an.prototype.Ba=function(){le(this.g,"a")};an.prototype.Aa=function(n){le(this.g,new Tu(n))};an.prototype.za=function(n){le(this.g,new Au)};an.prototype.ya=function(){le(this.g,"b")};function Gg(){this.blockSize=-1}function Pe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}oe(Pe,Gg);Pe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function os(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Pe.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)os(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){os(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){os(this,r),i=0;break}}this.h=i,this.i+=e};Pe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function $(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var Qg={};function Po(n){return-128<=n&&128>n?rg(n,function(e){return new $([e|0],0>e?-1:0)}):new $([n|0],0>n?-1:0)}function Ne(n){if(isNaN(n)||!isFinite(n))return qt;if(0>n)return ce(Ne(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=ks;return new $(e,0)}function bu(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ce(bu(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ne(Math.pow(e,8)),r=qt,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Ne(Math.pow(e,s)),r=r.R(s).add(Ne(o))):(r=r.R(t),r=r.add(Ne(o)))}return r}var ks=4294967296,qt=Po(0),Os=Po(1),za=Po(16777216);R=$.prototype;R.ea=function(){if(Ae(this))return-ce(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:ks+r)*e,e*=ks}return n};R.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(je(this))return"0";if(Ae(this))return"-"+ce(this).toString(n);for(var e=Ne(Math.pow(n,6)),t=this,r="";;){var i=Gr(t,e).g;t=Wr(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,je(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};R.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function je(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Ae(n){return n.h==-1}R.X=function(n){return n=Wr(this,n),Ae(n)?-1:je(n)?0:1};function ce(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new $(t,~n.h).add(Os)}R.abs=function(){return Ae(this)?ce(this):this};R.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new $(t,t[t.length-1]&-2147483648?-1:0)};function Wr(n,e){return n.add(ce(e))}R.R=function(n){if(je(this)||je(n))return qt;if(Ae(this))return Ae(n)?ce(this).R(ce(n)):ce(ce(this).R(n));if(Ae(n))return ce(this.R(ce(n)));if(0>this.X(za)&&0>n.X(za))return Ne(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,Er(t,2*r+2*i),t[2*r+2*i+1]+=s*c,Er(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Er(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Er(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new $(t,0)};function Er(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function pn(n,e){this.g=n,this.h=e}function Gr(n,e){if(je(e))throw Error("division by zero");if(je(n))return new pn(qt,qt);if(Ae(n))return e=Gr(ce(n),e),new pn(ce(e.g),ce(e.h));if(Ae(e))return e=Gr(n,ce(e)),new pn(ce(e.g),e.h);if(30<n.g.length){if(Ae(n)||Ae(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Os,r=e;0>=r.X(n);)t=Ha(t),r=Ha(r);var i=Vt(t,1),s=Vt(r,1);for(r=Vt(r,2),t=Vt(t,2);!je(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Vt(r,1),t=Vt(t,1)}return e=Wr(n,i.R(e)),new pn(i,e)}for(i=qt;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ne(t),o=s.R(e);Ae(o)||0<o.X(n);)t-=r,s=Ne(t),o=s.R(e);je(s)&&(s=Os),i=i.add(s),n=Wr(n,o)}return new pn(i,n)}R.gb=function(n){return Gr(this,n).h};R.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new $(t,this.h&n.h)};R.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new $(t,this.h|n.h)};R.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new $(t,this.h^n.h)};function Ha(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new $(t,n.h)}function Vt(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new $(i,n.h)}Kr.prototype.createWebChannel=Kr.prototype.g;Te.prototype.send=Te.prototype.u;Te.prototype.open=Te.prototype.m;Te.prototype.close=Te.prototype.close;pi.NO_ERROR=0;pi.TIMEOUT=8;pi.HTTP_ERROR=6;$l.COMPLETE="complete";zl.EventType=rr;rr.OPEN="a";rr.CLOSE="b";rr.ERROR="c";rr.MESSAGE="d";se.prototype.listen=se.prototype.O;X.prototype.listenOnce=X.prototype.P;X.prototype.getLastError=X.prototype.Sa;X.prototype.getLastErrorCode=X.prototype.Ia;X.prototype.getStatus=X.prototype.da;X.prototype.getResponseJson=X.prototype.Wa;X.prototype.getResponseText=X.prototype.ja;X.prototype.send=X.prototype.ha;X.prototype.setWithCredentials=X.prototype.Oa;Pe.prototype.digest=Pe.prototype.l;Pe.prototype.reset=Pe.prototype.reset;Pe.prototype.update=Pe.prototype.j;$.prototype.add=$.prototype.add;$.prototype.multiply=$.prototype.R;$.prototype.modulo=$.prototype.gb;$.prototype.compare=$.prototype.X;$.prototype.toNumber=$.prototype.ea;$.prototype.toString=$.prototype.toString;$.prototype.getBits=$.prototype.D;$.fromNumber=Ne;$.fromString=bu;var Yg=function(){return new Kr},Xg=function(){return fi()},as=pi,Jg=$l,Zg=Ct,Ka={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ir=zl,e_=X,t_=Pe,$t=$;const Wa="@firebase/firestore";/**
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
 */class he{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}he.UNAUTHENTICATED=new he(null),he.GOOGLE_CREDENTIALS=new he("google-credentials-uid"),he.FIRST_PARTY=new he("first-party-uid"),he.MOCK_USER=new he("mock-user");/**
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
 */let cn="10.3.1";/**
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
 */const bt=new Ks("@firebase/firestore");function mn(){return bt.logLevel}function C(n,...e){if(bt.logLevel<=B.DEBUG){const t=e.map(So);bt.debug(`Firestore (${cn}): ${n}`,...t)}}function He(n,...e){if(bt.logLevel<=B.ERROR){const t=e.map(So);bt.error(`Firestore (${cn}): ${n}`,...t)}}function Yt(n,...e){if(bt.logLevel<=B.WARN){const t=e.map(So);bt.warn(`Firestore (${cn}): ${n}`,...t)}}function So(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function D(n="Unexpected state"){const e=`FIRESTORE (${cn}) INTERNAL ASSERTION FAILED: `+n;throw He(e),new Error(e)}function W(n,e){n||D()}function x(n,e){return n}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends We{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ru{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(he.UNAUTHENTICATED))}shutdown(){}}class r_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class i_{constructor(e){this.t=e,this.currentUser=he.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new Ru(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new he(e)}}class s_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=he.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class o_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new s_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(he.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class a_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string"),this.R=t.token,new a_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function l_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Pu{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=l_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function Xt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class te{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new S(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new S(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new S(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new te(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class L{constructor(e){this.timestamp=e}static fromTimestamp(e){return new L(e)}static min(){return new L(new te(0,0))}static max(){return new L(new te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class jn{constructor(e,t,r){t===void 0?t=0:t>e.length&&D(),r===void 0?r=e.length-t:r>e.length-t&&D(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class K extends jn{construct(e,t,r){return new K(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new S(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new K(t)}static emptyPath(){return new K([])}}const u_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends jn{construct(e,t,r){return new fe(e,t,r)}static isValidIdentifier(e){return u_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new S(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new S(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new S(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new S(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(K.fromString(e))}static fromName(e){return new O(K.fromString(e).popFirst(5))}static empty(){return new O(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&K.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return K.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new K(e.slice()))}}function h_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new te(t+1,0):new te(t,r));return new at(i,O.empty(),e)}function d_(n){return new at(n.readTime,n.key,-1)}class at{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new at(L.min(),O.empty(),-1)}static max(){return new at(L.max(),O.empty(),-1)}}function f_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
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
 */const p_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class m_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function cr(n){if(n.code!==w.FAILED_PRECONDITION||n.message!==p_)throw n;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof E?t:E.resolve(t)}catch(t){return E.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):E.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):E.reject(t)}static resolve(e){return new E((t,r)=>{t(e)})}static reject(e){return new E((t,r)=>{r(e)})}static waitFor(e){return new E((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=E.resolve(!1);for(const r of e)t=t.next(i=>i?E.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,t){return new E((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function lr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Co{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Co.ae=-1;function Ti(n){return n==null}function Qr(n){return n===0&&1/n==-1/0}function g_(n){return typeof n=="number"&&Number.isInteger(n)&&!Qr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ga(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function kt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Su(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class G{constructor(e,t){this.comparator=e,this.root=t||ae.EMPTY}insert(e,t){return new G(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new G(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tr(this.root,e,this.comparator,!0)}}class Tr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:ae.RED,this.left=i!=null?i:ae.EMPTY,this.right=s!=null?s:ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ae(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const e=this.left.check();if(e!==this.right.check())throw D();return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new G(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qa(this.data.getIterator())}getIteratorFrom(e){return new Qa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class Qa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ie{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new Ie([])}unionWith(e){let t=new ge(fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ie(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Cu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Cu("Invalid base64 string: "+s):s}}(e);return new ye(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const __=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ct(n){if(W(!!n),typeof n=="string"){let e=0;const t=__.exec(n);if(W(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Rt(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}/**
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
 */function ko(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Oo(n){const e=n.mapValue.fields.__previous_value__;return ko(e)?Oo(e):e}function qn(n){const e=ct(n.mapValue.fields.__local_write_time__.timestampValue);return new te(e.seconds,e.nanos)}/**
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
 */class y_{constructor(e,t,r,i,s,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class $n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new $n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $n&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ar={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ko(n)?4:v_(n)?9007199254740991:10:D()}function Me(n,e){if(n===e)return!0;const t=Pt(n);if(t!==Pt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return qn(n).isEqual(qn(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ct(i.timestampValue),a=ct(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Rt(i.bytesValue).isEqual(Rt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Z(i.geoPointValue.latitude)===Z(s.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Z(i.integerValue)===Z(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Z(i.doubleValue),a=Z(s.doubleValue);return o===a?Qr(o)===Qr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Xt(n.arrayValue.values||[],e.arrayValue.values||[],Me);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ga(o)!==Ga(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Me(o[c],a[c])))return!1;return!0}(n,e);default:return D()}}function zn(n,e){return(n.values||[]).find(t=>Me(t,e))!==void 0}function Jt(n,e){if(n===e)return 0;const t=Pt(n),r=Pt(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Z(s.integerValue||s.doubleValue),c=Z(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Ya(n.timestampValue,e.timestampValue);case 4:return Ya(qn(n),qn(e));case 5:return q(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Rt(s),c=Rt(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=q(a[l],c[l]);if(u!==0)return u}return q(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=q(Z(s.latitude),Z(o.latitude));return a!==0?a:q(Z(s.longitude),Z(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Jt(a[l],c[l]);if(u)return u}return q(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ar.mapValue&&o===Ar.mapValue)return 0;if(s===Ar.mapValue)return 1;if(o===Ar.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=q(c[h],u[h]);if(d!==0)return d;const f=Jt(a[c[h]],l[u[h]]);if(f!==0)return f}return q(c.length,u.length)}(n.mapValue,e.mapValue);default:throw D()}}function Ya(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=ct(n),r=ct(e),i=q(t.seconds,r.seconds);return i!==0?i:q(t.nanos,r.nanos)}function Zt(n){return Ns(n)}function Ns(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ct(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Rt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ns(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ns(t.fields[o])}`;return i+"}"}(n.mapValue):D()}function Xa(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ds(n){return!!n&&"integerValue"in n}function No(n){return!!n&&"arrayValue"in n}function Ja(n){return!!n&&"nullValue"in n}function Za(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function kr(n){return!!n&&"mapValue"in n}function Rn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return kt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Rn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function v_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ee{constructor(e){this.value=e}static empty(){return new Ee({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!kr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rn(t)}setAll(e){let t=fe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Rn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());kr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Me(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];kr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){kt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ee(Rn(this.value))}}function ku(n){const e=[];return kt(n.fields,(t,r)=>{const i=new fe([t]);if(kr(r)){const s=ku(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ie(e)}/**
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
 */class de{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new de(e,0,L.min(),L.min(),L.min(),Ee.empty(),0)}static newFoundDocument(e,t,r,i){return new de(e,1,t,L.min(),r,i,0)}static newNoDocument(e,t){return new de(e,2,t,L.min(),L.min(),Ee.empty(),0)}static newUnknownDocument(e,t){return new de(e,3,t,L.min(),L.min(),Ee.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof de&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yr{constructor(e,t){this.position=e,this.inclusive=t}}function ec(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),t.key):r=Jt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Me(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class zt{constructor(e,t="asc"){this.field=e,this.dir=t}}function w_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ou{}class ee extends Ou{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new I_(e,t,r):t==="array-contains"?new b_(e,r):t==="in"?new R_(e,r):t==="not-in"?new P_(e,r):t==="array-contains-any"?new S_(e,r):new ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new T_(e,r):new A_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Jt(t,this.value)):t!==null&&Pt(this.value)===Pt(t)&&this.matchesComparison(Jt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return D()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Se extends Ou{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Se(e,t)}matches(e){return Nu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Nu(n){return n.op==="and"}function Du(n){return E_(n)&&Nu(n)}function E_(n){for(const e of n.filters)if(e instanceof Se)return!1;return!0}function Vs(n){if(n instanceof ee)return n.field.canonicalString()+n.op.toString()+Zt(n.value);if(Du(n))return n.filters.map(e=>Vs(e)).join(",");{const e=n.filters.map(t=>Vs(t)).join(",");return`${n.op}(${e})`}}function Vu(n,e){return n instanceof ee?function(r,i){return i instanceof ee&&r.op===i.op&&r.field.isEqual(i.field)&&Me(r.value,i.value)}(n,e):n instanceof Se?function(r,i){return i instanceof Se&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Vu(o,i.filters[a]),!0):!1}(n,e):void D()}function Lu(n){return n instanceof ee?function(t){return`${t.field.canonicalString()} ${t.op} ${Zt(t.value)}`}(n):n instanceof Se?function(t){return t.op.toString()+" {"+t.getFilters().map(Lu).join(" ,")+"}"}(n):"Filter"}class I_ extends ee{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class T_ extends ee{constructor(e,t){super(e,"in",t),this.keys=xu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class A_ extends ee{constructor(e,t){super(e,"not-in",t),this.keys=xu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function xu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class b_ extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return No(t)&&zn(t.arrayValue,this.value)}}class R_ extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zn(this.value.arrayValue,t)}}class P_ extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zn(this.value.arrayValue,t)}}class S_ extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!No(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>zn(this.value.arrayValue,r))}}/**
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
 */class C_{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function nc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new C_(n,e,t,r,i,s,o)}function Do(n){const e=x(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Vs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ti(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Zt(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Zt(r)).join(",")),e.he=t}return e.he}function Vo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!w_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tc(n.startAt,e.startAt)&&tc(n.endAt,e.endAt)}function Ls(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ln{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function k_(n,e,t,r,i,s,o,a){return new ln(n,e,t,r,i,s,o,a)}function Lo(n){return new ln(n)}function rc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xo(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Ai(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Mu(n){return n.collectionGroup!==null}function Pn(n){const e=x(n);if(e.Pe===null){e.Pe=[];const t=Ai(e),r=xo(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new zt(t)),e.Pe.push(new zt(fe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new zt(fe.keyField(),s))}}}return e.Pe}function Le(n){const e=x(n);return e.Ie||(e.Ie=O_(e,Pn(n))),e.Ie}function O_(n,e){if(n.limitType==="F")return nc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new zt(i.field,s)});const t=n.endAt?new Yr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yr(n.startAt.position,n.startAt.inclusive):null;return nc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function xs(n,e){e.getFirstInequalityField(),Ai(n);const t=n.filters.concat([e]);return new ln(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ms(n,e,t){return new ln(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bi(n,e){return Vo(Le(n),Le(e))&&n.limitType===e.limitType}function Uu(n){return`${Do(Le(n))}|lt:${n.limitType}`}function Lt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Lu(i)).join(", ")}]`),Ti(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Zt(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Zt(i)).join(",")),`Target(${r})`}(Le(n))}; limitType=${n.limitType})`}function Ri(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):O.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Pn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=ec(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Pn(r),i)||r.endAt&&!function(o,a,c){const l=ec(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Pn(r),i))}(n,e)}function N_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Fu(n){return(e,t)=>{let r=!1;for(const i of Pn(n)){const s=D_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function D_(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?Jt(c,l):D()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return D()}}/**
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
 */class un{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){kt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Su(this.inner)}size(){return this.innerSize}}/**
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
 */const V_=new G(O.comparator);function Ke(){return V_}const Bu=new G(O.comparator);function En(...n){let e=Bu;for(const t of n)e=e.insert(t.key,t);return e}function ju(n){let e=Bu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yt(){return Sn()}function qu(){return Sn()}function Sn(){return new un(n=>n.toString(),(n,e)=>n.isEqual(e))}const L_=new G(O.comparator),x_=new ge(O.comparator);function M(...n){let e=x_;for(const t of n)e=e.add(t);return e}const M_=new ge(q);function U_(){return M_}/**
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
 */function $u(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qr(e)?"-0":e}}function zu(n){return{integerValue:""+n}}function F_(n,e){return g_(e)?zu(e):$u(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Pi{constructor(){this._=void 0}}function B_(n,e,t){return n instanceof Xr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ko(s)&&(s=Oo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Hn?Ku(n,e):n instanceof Kn?Wu(n,e):function(i,s){const o=Hu(i,s),a=ic(o)+ic(i.Te);return Ds(o)&&Ds(i.Te)?zu(a):$u(i.serializer,a)}(n,e)}function j_(n,e,t){return n instanceof Hn?Ku(n,e):n instanceof Kn?Wu(n,e):t}function Hu(n,e){return n instanceof Jr?function(r){return Ds(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xr extends Pi{}class Hn extends Pi{constructor(e){super(),this.elements=e}}function Ku(n,e){const t=Gu(e);for(const r of n.elements)t.some(i=>Me(i,r))||t.push(r);return{arrayValue:{values:t}}}class Kn extends Pi{constructor(e){super(),this.elements=e}}function Wu(n,e){let t=Gu(e);for(const r of n.elements)t=t.filter(i=>!Me(i,r));return{arrayValue:{values:t}}}class Jr extends Pi{constructor(e,t){super(),this.serializer=e,this.Te=t}}function ic(n){return Z(n.integerValue||n.doubleValue)}function Gu(n){return No(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function q_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Hn&&i instanceof Hn||r instanceof Kn&&i instanceof Kn?Xt(r.elements,i.elements,Me):r instanceof Jr&&i instanceof Jr?Me(r.Te,i.Te):r instanceof Xr&&i instanceof Xr}(n.transform,e.transform)}class $_{constructor(e,t){this.version=e,this.transformResults=t}}class be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new be}static exists(e){return new be(void 0,e)}static updateTime(e){return new be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Or(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Si{}function Qu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mo(n.key,be.none()):new ur(n.key,n.data,be.none());{const t=n.data,r=Ee.empty();let i=new ge(fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ft(n.key,r,new Ie(i.toArray()),be.none())}}function z_(n,e,t){n instanceof ur?function(i,s,o){const a=i.value.clone(),c=oc(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof ft?function(i,s,o){if(!Or(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=oc(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Yu(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Cn(n,e,t,r){return n instanceof ur?function(s,o,a,c){if(!Or(s.precondition,o))return a;const l=s.value.clone(),u=ac(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof ft?function(s,o,a,c){if(!Or(s.precondition,o))return a;const l=ac(s.fieldTransforms,c,o),u=o.data;return u.setAll(Yu(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return Or(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function H_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Hu(r.transform,i||null);s!=null&&(t===null&&(t=Ee.empty()),t.set(r.field,s))}return t||null}function sc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xt(r,i,(s,o)=>q_(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ur extends Si{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ft extends Si{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Yu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function oc(n,e,t){const r=new Map;W(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,j_(o,a,t[i]))}return r}function ac(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,B_(s,o,e))}return r}class Mo extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class K_ extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class W_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&z_(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Cn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Cn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=qu();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Qu(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),M())}isEqual(e){return this.batchId===e.batchId&&Xt(this.mutations,e.mutations,(t,r)=>sc(t,r))&&Xt(this.baseMutations,e.baseMutations,(t,r)=>sc(t,r))}}class Uo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){W(e.mutations.length===r.length);let i=function(){return L_}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Uo(e,t,r,i)}}/**
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
 */class G_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Q_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var J,j;function Y_(n){switch(n){default:return D();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Xu(n){if(n===void 0)return He("GRPC error has no .code"),w.UNKNOWN;switch(n){case J.OK:return w.OK;case J.CANCELLED:return w.CANCELLED;case J.UNKNOWN:return w.UNKNOWN;case J.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case J.INTERNAL:return w.INTERNAL;case J.UNAVAILABLE:return w.UNAVAILABLE;case J.UNAUTHENTICATED:return w.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case J.NOT_FOUND:return w.NOT_FOUND;case J.ALREADY_EXISTS:return w.ALREADY_EXISTS;case J.PERMISSION_DENIED:return w.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case J.ABORTED:return w.ABORTED;case J.OUT_OF_RANGE:return w.OUT_OF_RANGE;case J.UNIMPLEMENTED:return w.UNIMPLEMENTED;case J.DATA_LOSS:return w.DATA_LOSS;default:return D()}}(j=J||(J={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function X_(){return new TextEncoder}/**
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
 */const J_=new $t([4294967295,4294967295],0);function cc(n){const e=X_().encode(n),t=new t_;return t.update(e),new Uint8Array(t.digest())}function lc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new $t([t,r],0),new $t([i,s],0)]}class Fo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new In(`Invalid padding: ${t}`);if(r<0)throw new In(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new In(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new In(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=$t.fromNumber(this.Ae)}Ve(e,t,r){let i=e.add(t.multiply($t.fromNumber(r)));return i.compare(J_)===1&&(i=new $t([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const t=cc(e),[r,i]=lc(t);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Fo(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const t=cc(e),[r,i]=lc(t);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class In extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ci{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,hr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ci(L.min(),i,new G(q),Ke(),M())}}class hr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new hr(r,t,M(),M(),M())}}/**
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
 */class Nr{constructor(e,t,r,i){this.ge=e,this.removedTargetIds=t,this.key=r,this.pe=i}}class Ju{constructor(e,t){this.targetId=e,this.ye=t}}class Zu{constructor(e,t,r=ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class uc{constructor(){this.we=0,this.Se=dc(),this.be=ye.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=M(),t=M(),r=M();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:D()}}),new hr(this.be,this.De,e,t,r)}Oe(){this.Ce=!1,this.Se=dc()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Z_{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Ke(),this.Ue=hc(),this.We=new G(q)}Ge(e){for(const t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(const t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{const r=this.Je(t);switch(e.state){case 0:this.Ye(t)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(t);break;case 3:this.Ye(t)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),r.Me(e.resumeToken));break;default:D()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((r,i)=>{this.Ye(i)&&t(i)})}Xe(e){const t=e.targetId,r=e.ye.count,i=this.et(t);if(i){const s=i.target;if(Ls(s))if(r===0){const o=new O(s.path);this.je(t,o,de.newNoDocument(o,L.min()))}else W(r===1);else{const o=this.tt(t);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(t);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(t,l)}}}}}nt(e){const t=e.ye.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Rt(r).toUint8Array()}catch(c){if(c instanceof Cu)return Yt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Fo(o,i,s)}catch(c){return Yt(c instanceof In?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,t,r){return t.ye.count===r-this.ot(e,t.targetId)?0:2}ot(e,t){const r=this.Qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(t,s,null),i++)}),i}_t(e){const t=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Ls(a.target)){const c=new O(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,de.newNoDocument(c,e))}s.Fe&&(t.set(o,s.xe()),s.Oe())}});let r=M();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Ci(e,t,this.We,this.$e,r);return this.$e=Ke(),this.Ue=hc(),this.We=new G(q),i}ze(e,t){if(!this.Ye(e))return;const r=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,r),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,t)?i.Ne(t,1):i.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),r&&(this.$e=this.$e.insert(t,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new uc,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new ge(q),this.Ue=this.Ue.insert(e,t)),t}Ye(e){const t=this.et(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}et(e){const t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new uc),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function hc(){return new G(O.comparator)}function dc(){return new G(O.comparator)}const ey=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ty=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ny=(()=>({and:"AND",or:"OR"}))();class ry{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Us(n,e){return n.useProto3Json||Ti(e)?e:{value:e}}function Zr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function iy(n,e){return Zr(n,e.toTimestamp())}function xe(n){return W(!!n),L.fromTimestamp(function(t){const r=ct(t);return new te(r.seconds,r.nanos)}(n))}function Bo(n,e){return function(r){return new K(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function th(n){const e=K.fromString(n);return W(sh(e)),e}function Fs(n,e){return Bo(n.databaseId,e.path)}function cs(n,e){const t=th(e);if(t.get(1)!==n.databaseId.projectId)throw new S(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new S(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(nh(t))}function Bs(n,e){return Bo(n.databaseId,e)}function sy(n){const e=th(n);return e.length===4?K.emptyPath():nh(e)}function js(n){return new K(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nh(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function fc(n,e,t){return{name:Fs(n,e),fields:t.value.mapValue.fields}}function oy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:D()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(W(u===void 0||typeof u=="string"),ye.fromBase64String(u||"")):(W(u===void 0||u instanceof Uint8Array),ye.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?w.UNKNOWN:Xu(l.code);return new S(u,l.message||"")}(o);t=new Zu(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cs(n,r.document.name),s=xe(r.document.updateTime),o=r.document.createTime?xe(r.document.createTime):L.min(),a=new Ee({mapValue:{fields:r.document.fields}}),c=de.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];t=new Nr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cs(n,r.document),s=r.readTime?xe(r.readTime):L.min(),o=de.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Nr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cs(n,r.document),s=r.removedTargetIds||[];t=new Nr([],s,i,null)}else{if(!("filter"in e))return D();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Q_(i,s),a=r.targetId;t=new Ju(a,o)}}return t}function ay(n,e){let t;if(e instanceof ur)t={update:fc(n,e.key,e.value)};else if(e instanceof Mo)t={delete:Fs(n,e.key)};else if(e instanceof ft)t={update:fc(n,e.key,e.data),updateMask:gy(e.fieldMask)};else{if(!(e instanceof K_))return D();t={verify:Fs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Xr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Hn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Kn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Jr)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw D()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:iy(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:D()}(n,e.precondition)),t}function cy(n,e){return n&&n.length>0?(W(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?xe(i.updateTime):xe(s);return o.isEqual(L.min())&&(o=xe(s)),new $_(o,i.transformResults||[])}(t,e))):[]}function ly(n,e){return{documents:[Bs(n,e.path)]}}function uy(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Bs(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Bs(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return ih(Se.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:xt(h.field),direction:fy(h.dir)}}(l))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Us(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function hy(n){let e=sy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){W(r===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(h){const d=rh(h);return d instanceof Se&&Du(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(m){return new zt(Mt(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ti(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Yr(f,d)}(t.startAt));let l=null;return t.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Yr(f,d)}(t.endAt)),k_(e,i,o,s,a,"F",c,l)}function dy(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return D()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Mt(t.unaryFilter.field);return ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Mt(t.unaryFilter.field);return ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mt(t.unaryFilter.field);return ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mt(t.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return D()}}(n):n.fieldFilter!==void 0?function(t){return ee.create(Mt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Se.create(t.compositeFilter.filters.map(r=>rh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return D()}}(t.compositeFilter.op))}(n):D()}function fy(n){return ey[n]}function py(n){return ty[n]}function my(n){return ny[n]}function xt(n){return{fieldPath:n.canonicalString()}}function Mt(n){return fe.fromServerFormat(n.fieldPath)}function ih(n){return n instanceof ee?function(t){if(t.op==="=="){if(Za(t.value))return{unaryFilter:{field:xt(t.field),op:"IS_NAN"}};if(Ja(t.value))return{unaryFilter:{field:xt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Za(t.value))return{unaryFilter:{field:xt(t.field),op:"IS_NOT_NAN"}};if(Ja(t.value))return{unaryFilter:{field:xt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xt(t.field),op:py(t.op),value:t.value}}}(n):n instanceof Se?function(t){const r=t.getFilters().map(i=>ih(i));return r.length===1?r[0]:{compositeFilter:{op:my(t.op),filters:r}}}(n):D()}function gy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function sh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class nt{constructor(e,t,r,i,s=L.min(),o=L.min(),a=ye.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _y{constructor(e){this.ht=e}}function yy(n){const e=hy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ms(e,e.limit,"L"):e}/**
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
 */class vy{constructor(){this.an=new wy}addToCollectionParentIndex(e,t){return this.an.add(t),E.resolve()}getCollectionParents(e,t){return E.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return E.resolve()}deleteFieldIndex(e,t){return E.resolve()}deleteAllFieldIndexes(e){return E.resolve()}createTargetIndexes(e,t){return E.resolve()}getDocumentsMatchingTarget(e,t){return E.resolve(null)}getIndexType(e,t){return E.resolve(0)}getFieldIndexes(e,t){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,t){return E.resolve(at.min())}getMinOffsetFromCollectionGroup(e,t){return E.resolve(at.min())}updateCollectionGroup(e,t,r){return E.resolve()}updateIndexEntries(e,t){return E.resolve()}}class wy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ge(K.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ge(K.comparator)).toArray()}}/**
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
 */class en{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new en(0)}static Ln(){return new en(-1)}}/**
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
 */class Ey{constructor(){this.changes=new un(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,de.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?E.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Iy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ty{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Cn(r.mutation,i,Ie.empty(),te.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,M()).next(()=>r))}getLocalViewOfDocuments(e,t,r=M()){const i=yt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=En();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=yt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,M()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ke();const o=Sn(),a=function(){return Sn()}();return t.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof ft)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Cn(u.mutation,l,u.mutation.getFieldMask(),te.now())):o.set(l.key,Ie.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new Iy(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Sn();let i=new G((o,a)=>o-a),s=M();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=r.get(c)||Ie.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||M()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=qu();u.forEach(d=>{if(!s.has(d)){const f=Qu(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):E.resolve(yt());let a=-1,c=s;return o.next(l=>E.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,M())).next(u=>({batchId:a,changes:ju(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let i=En();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=En();return this.indexManager.getCollectionParents(e,s).next(a=>E.forEach(a,c=>{const l=function(h,d){return new ln(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,de.newInvalidDocument(u)))});let a=En();return o.forEach((c,l)=>{const u=s.get(c);u!==void 0&&Cn(u.mutation,l,Ie.empty(),te.now()),Ri(t,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class Ay{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return E.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:xe(i.createTime)}}(t)),E.resolve()}getNamedQuery(e,t){return E.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(i){return{name:i.name,query:yy(i.bundledQuery),readTime:xe(i.readTime)}}(t)),E.resolve()}}/**
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
 */class by{constructor(){this.overlays=new G(O.comparator),this.Pr=new Map}getOverlay(e,t){return E.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yt();return E.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.It(e,t,s)}),E.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),E.resolve()}getOverlaysForCollection(e,t,r){const i=yt(),s=t.length+1,o=new O(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return E.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new G((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=yt(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=yt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return E.resolve(a)}It(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new G_(t,r));let s=this.Pr.get(t);s===void 0&&(s=M(),this.Pr.set(t,s)),this.Pr.set(t,s.add(r.key))}}/**
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
 */class jo{constructor(){this.Ir=new ge(ie.dr),this.Tr=new ge(ie.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const r=new ie(e,t);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Rr(new ie(e,t))}Vr(e,t){e.forEach(r=>this.removeReference(r,t))}mr(e){const t=new O(new K([])),r=new ie(t,e),i=new ie(t,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const t=new O(new K([])),r=new ie(t,e),i=new ie(t,e+1);let s=M();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ie(e,0),r=this.Ir.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ie{constructor(e,t){this.key=e,this.yr=t}static dr(e,t){return O.comparator(e.key,t.key)||q(e.yr,t.yr)}static Er(e,t){return q(e.yr,t.yr)||O.comparator(e.key,t.key)}}/**
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
 */class Ry{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new ge(ie.dr)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new W_(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,t){return E.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Dr(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ie(t,0),i=new ie(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ge(q);return t.forEach(i=>{const s=new ie(i,0),o=new ie(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),E.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new ie(new O(s),0);let a=new ge(q);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.yr)),!0)},o),E.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.br(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){W(this.vr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return E.forEach(t.mutations,i=>{const s=new ie(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){const r=new ie(t,0),i=this.Sr.firstAfterOrEqual(r);return E.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Py{constructor(e){this.Fr=e,this.docs=function(){return new G(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return E.resolve(r?r.document.mutableCopy():de.newInvalidDocument(t))}getEntries(e,t){let r=Ke();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():de.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ke();const o=t.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||f_(d_(u),r)<=0||(i.has(u.key)||Ri(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,t,r,i){D()}Mr(e,t){return E.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Sy(this)}getSize(e){return E.resolve(this.size)}}class Sy extends Ey{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),E.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
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
 */class Cy{constructor(e){this.persistence=e,this.Or=new un(t=>Do(t),Vo),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Nr=0,this.Br=new jo,this.targetCount=0,this.Lr=en.Bn()}forEachTarget(e,t){return this.Or.forEach((r,i)=>t(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),E.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new en(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,E.resolve()}updateTargetData(e,t){return this.Qn(t),E.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,t){const r=this.Or.get(t)||null;return E.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Ar(t,r),E.resolve()}removeMatchingKeys(e,t,r){this.Br.Vr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),E.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.pr(t);return E.resolve(r)}containsKey(e,t){return E.resolve(this.Br.containsKey(t))}}/**
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
 */class ky{constructor(e,t){this.kr={},this.overlays={},this.qr=new Co(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new Cy(this),this.indexManager=new vy,this.remoteDocumentCache=function(i){return new Py(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new _y(t),this.Ur=new Ay(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new by,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new Ry(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,r){C("MemoryPersistence","Starting transaction:",e);const i=new Oy(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,t){return E.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class Oy extends m_{constructor(e){super(),this.currentSequenceNumber=e}}class qo{constructor(e){this.persistence=e,this.jr=new jo,this.Hr=null}static Jr(e){return new qo(e)}get Yr(){if(this.Hr)return this.Hr;throw D()}addReference(e,t,r){return this.jr.addReference(r,t),this.Yr.delete(r.toString()),E.resolve()}removeReference(e,t,r){return this.jr.removeReference(r,t),this.Yr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),E.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Yr,r=>{const i=O.fromPath(r);return this.Zr(e,i).next(s=>{s||t.removeEntry(i,L.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(r=>{r?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){return 0}Zr(e,t){return E.or([()=>E.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}/**
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
 */class $o{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Qi=r,this.Ki=i}static $i(e,t){let r=M(),i=M();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $o(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Ny{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Dy{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=2}initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Hi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Ny;return this.Yi(e,t,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,t,o,a.size)})}).next(()=>s.result)}Zi(e,t,r,i){return r.documentReadCount<this.Gi?(mn()<=B.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Lt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),E.resolve()):(mn()<=B.DEBUG&&C("QueryEngine","Query:",Lt(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(mn()<=B.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Lt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Le(t))):E.resolve())}Hi(e,t){if(rc(t))return E.resolve(null);let r=Le(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ms(t,null,"F"),r=Le(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=M(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(t,a);return this.es(t,l,o,c.readTime)?this.Hi(e,Ms(t,null,"F")):this.ts(e,l,t,c)}))})))}Ji(e,t,r,i){return rc(t)||i.isEqual(L.min())?E.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(t,s);return this.es(t,o,r,i)?E.resolve(null):(mn()<=B.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Lt(t)),this.ts(e,o,t,h_(i,-1)).next(a=>a))})}Xi(e,t){let r=new ge(Fu(e));return t.forEach((i,s)=>{Ri(e,s)&&(r=r.add(s))}),r}es(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,t,r){return mn()<=B.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Lt(t)),this.ji.getDocumentsMatchingQuery(e,t,at.min(),r)}ts(e,t,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Vy{constructor(e,t,r,i){this.persistence=e,this.ns=t,this.serializer=i,this.rs=new G(q),this.ss=new un(s=>Do(s),Vo),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ty(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}function Ly(n,e,t,r){return new Vy(n,e,t,r)}async function oh(n,e){const t=x(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.us(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=M();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function xy(n,e){const t=x(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=E.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(c,m)).next(y=>{const v=l.docVersions.get(m);W(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=M();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function ah(n){const e=x(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}function My(n,e){const t=x(n),r=e.snapshotVersion;let i=t.rs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t._s.newChangeBuffer({trackRemovals:!0});i=t.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.Kr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ye.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(y,v,p){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,f,u)&&a.push(t.Kr.updateTargetData(s,f))});let c=Ke(),l=M();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(Uy(s,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(L.min())){const u=t.Kr.getLastRemoteSnapshotVersion(s).next(h=>t.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(t.rs=i,s))}function Uy(n,e,t){let r=M(),i=M();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ke();return t.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(L.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:i}})}function Fy(n,e){const t=x(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function By(n,e){const t=x(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Kr.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):t.Kr.allocateTargetId(r).next(o=>(i=new nt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.rs=t.rs.insert(r.targetId,r),t.ss.set(e,r.targetId)),r})}async function qs(n,e,t){const r=x(n),i=r.rs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!lr(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function pc(n,e,t){const r=x(n);let i=L.min(),s=M();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=x(c),d=h.ss.get(u);return d!==void 0?E.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,Le(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,t?i:L.min(),t?s:M())).next(a=>(jy(r,N_(e),a),{documents:a,Ps:s})))}function jy(n,e,t){let r=n.os.get(e)||L.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.os.set(e,r)}class mc{constructor(){this.activeTargetIds=U_()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qy{constructor(){this.ro=new mc,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,r){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new mc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $y{so(e){}shutdown(){}}/**
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
 */class gc{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let br=null;function ls(){return br===null?br=function(){return 268435456+Math.round(2147483648*Math.random())}():br++,"0x"+br.toString(16)}/**
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
 */const zy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Hy{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const ue="WebChannelConnection";class Ky extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+t.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(t,r,i,s,o){const a=ls(),c=this.Do(t,r);C("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,s,o),this.vo(t,c,l,i).then(u=>(C("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw Yt("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}Fo(t,r,i,s,o,a){return this.bo(t,r,i,s,o)}Co(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}Do(t,r){const i=zy[t];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const s=ls();return new Promise((o,a)=>{const c=new e_;c.setWithCredentials(!0),c.listenOnce(Jg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case as.NO_ERROR:const u=c.getResponseJson();C(ue,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case as.TIMEOUT:C(ue,`RPC '${e}' ${s} timed out`),a(new S(w.DEADLINE_EXCEEDED,"Request time out"));break;case as.HTTP_ERROR:const h=c.getStatus();if(C(ue,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const p=v.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(p)>=0?p:w.UNKNOWN}(f.status);a(new S(m,f.message))}else a(new S(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new S(w.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{C(ue,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);C(ue,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",l,r,15)})}Mo(e,t,r){const i=ls(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yg(),a=Xg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=s.join("");C(ue,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const m=new Hy({ho:v=>{f?C(ue,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(C(ue,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),C(ue,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},Po:()=>h.close()}),y=(v,p,_)=>{v.listen(p,g=>{try{_(g)}catch(I){setTimeout(()=>{throw I},0)}})};return y(h,Ir.EventType.OPEN,()=>{f||C(ue,`RPC '${e}' stream ${i} transport opened.`)}),y(h,Ir.EventType.CLOSE,()=>{f||(f=!0,C(ue,`RPC '${e}' stream ${i} transport closed`),m.mo())}),y(h,Ir.EventType.ERROR,v=>{f||(f=!0,Yt(ue,`RPC '${e}' stream ${i} transport errored:`,v),m.mo(new S(w.UNAVAILABLE,"The operation could not be completed")))}),y(h,Ir.EventType.MESSAGE,v=>{var p;if(!f){const _=v.data[0];W(!!_);const g=_,I=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(I){C(ue,`RPC '${e}' stream ${i} received error:`,I);const P=I.status;let z=function(T){const k=J[T];if(k!==void 0)return Xu(k)}(P),Q=I.message;z===void 0&&(z=w.INTERNAL,Q="Unknown error status: "+P+" with message "+I.message),f=!0,m.mo(new S(z,Q)),h.close()}else C(ue,`RPC '${e}' stream ${i} received:`,_),m.fo(_)}}),y(a,Zg.STAT_EVENT,v=>{v.stat===Ka.PROXY?C(ue,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Ka.NOPROXY&&C(ue,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Vo()},0),m}}function us(){return typeof document<"u"?document:null}/**
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
 */function ki(n){return new ry(n,!0)}/**
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
 */class ch{constructor(e,t,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=t,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const t=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,t-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class lh{constructor(e,t,r,i,s,o,a,c){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new ch(e,t)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,t){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():t&&t.code===w.RESOURCE_EXHAUSTED?(He(t.toString()),He("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),t=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===t&&this.__(r,i)},r=>{e(()=>{const i=new S(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,t){const r=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wy extends lh{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){this.Ho.reset();const t=oy(this.serializer,e),r=function(s){if(!("targetChange"in s))return L.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?L.min():o.readTime?xe(o.readTime):L.min()}(e);return this.listener.c_(t,r)}l_(e){const t={};t.database=js(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=Ls(c)?{documents:ly(s,c)}:{query:uy(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=eh(s,o.resumeToken);const l=Us(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(L.min())>0){a.readTime=Zr(s,o.snapshotVersion.toTimestamp());const l=Us(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=dy(this.serializer,e);r&&(t.labels=r),this.n_(t)}h_(e){const t={};t.database=js(this.serializer),t.removeTarget=e,this.n_(t)}}class Gy extends lh{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){if(W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const t=cy(e.writeResults,e.commitTime),r=xe(e.commitTime);return this.listener.T_(r,t)}return W(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=js(this.serializer),this.n_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ay(this.serializer,r))};this.n_(t)}}/**
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
 */class Qy extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new S(w.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(w.UNKNOWN,i.toString())})}Fo(e,t,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(w.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class Yy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(He(t),this.p_=!1):C("OnlineStateTracker",t)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class Xy{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{Ot(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=x(c);l.F_.add(4),await dr(l),l.O_.set("Unknown"),l.F_.delete(4),await Oi(l)}(this))})}),this.O_=new Yy(r,i)}}async function Oi(n){if(Ot(n))for(const e of n.M_)await e(!0)}async function dr(n){for(const e of n.M_)await e(!1)}function uh(n,e){const t=x(n);t.v_.has(e.targetId)||(t.v_.set(e.targetId,e),Ko(t)?Ho(t):hn(t).Yo()&&zo(t,e))}function hh(n,e){const t=x(n),r=hn(t);t.v_.delete(e),r.Yo()&&dh(t,e),t.v_.size===0&&(r.Yo()?r.e_():Ot(t)&&t.O_.set("Unknown"))}function zo(n,e){if(n.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(L.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hn(n).l_(e)}function dh(n,e){n.N_.Le(e),hn(n).h_(e)}function Ho(n){n.N_=new Z_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.v_.get(e)||null,st:()=>n.datastore.serializer.databaseId}),hn(n).start(),n.O_.y_()}function Ko(n){return Ot(n)&&!hn(n).Jo()&&n.v_.size>0}function Ot(n){return x(n).F_.size===0}function fh(n){n.N_=void 0}async function Jy(n){n.v_.forEach((e,t)=>{zo(n,e)})}async function Zy(n,e){fh(n),Ko(n)?(n.O_.b_(e),Ho(n)):n.O_.set("Unknown")}async function ev(n,e,t){if(n.O_.set("Online"),e instanceof Zu&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(n,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ei(n,r)}else if(e instanceof Nr?n.N_.Ge(e):e instanceof Ju?n.N_.Xe(e):n.N_.He(e),!t.isEqual(L.min()))try{const r=await ah(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.v_.get(l);u&&s.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.v_.get(c);if(!u)return;s.v_.set(c,u.withResumeToken(ye.EMPTY_BYTE_STRING,u.snapshotVersion)),dh(s,c);const h=new nt(u.target,c,l,u.sequenceNumber);zo(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await ei(n,r)}}async function ei(n,e,t){if(!lr(e))throw e;n.F_.add(1),await dr(n),n.O_.set("Offline"),t||(t=()=>ah(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await t(),n.F_.delete(1),await Oi(n)})}function ph(n,e){return e().catch(t=>ei(n,t,e))}async function Ni(n){const e=x(n),t=lt(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;tv(e);)try{const i=await Fy(e.localStore,r);if(i===null){e.C_.length===0&&t.e_();break}r=i.batchId,nv(e,i)}catch(i){await ei(e,i)}mh(e)&&gh(e)}function tv(n){return Ot(n)&&n.C_.length<10}function nv(n,e){n.C_.push(e);const t=lt(n);t.Yo()&&t.I_&&t.d_(e.mutations)}function mh(n){return Ot(n)&&!lt(n).Jo()&&n.C_.length>0}function gh(n){lt(n).start()}async function rv(n){lt(n).A_()}async function iv(n){const e=lt(n);for(const t of n.C_)e.d_(t.mutations)}async function sv(n,e,t){const r=n.C_.shift(),i=Uo.from(r,e,t);await ph(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ni(n)}async function ov(n,e){e&&lt(n).I_&&await async function(r,i){if(function(o){return Y_(o)&&o!==w.ABORTED}(i.code)){const s=r.C_.shift();lt(r).Xo(),await ph(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ni(r)}}(n,e),mh(n)&&gh(n)}async function _c(n,e){const t=x(n);t.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=Ot(t);t.F_.add(3),await dr(t),r&&t.O_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.F_.delete(3),await Oi(t)}async function av(n,e){const t=x(n);e?(t.F_.delete(2),await Oi(t)):e||(t.F_.add(2),await dr(t),t.O_.set("Unknown"))}function hn(n){return n.B_||(n.B_=function(t,r,i){const s=x(t);return s.V_(),new Wy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Io:Jy.bind(null,n),Eo:Zy.bind(null,n),c_:ev.bind(null,n)}),n.M_.push(async e=>{e?(n.B_.Xo(),Ko(n)?Ho(n):n.O_.set("Unknown")):(await n.B_.stop(),fh(n))})),n.B_}function lt(n){return n.L_||(n.L_=function(t,r,i){const s=x(t);return s.V_(),new Gy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Io:rv.bind(null,n),Eo:ov.bind(null,n),E_:iv.bind(null,n),T_:sv.bind(null,n)}),n.M_.push(async e=>{e?(n.L_.Xo(),await Ni(n)):(await n.L_.stop(),n.C_.length>0&&(C("RemoteStore",`Stopping write stream with ${n.C_.length} pending writes`),n.C_=[]))})),n.L_}/**
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
 */class Wo{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Wo(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Go(n,e){if(He("AsyncQueue",`${e}: ${n}`),lr(n))return new S(w.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ht{constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=En(),this.sortedSet=new G(this.comparator)}static emptySet(e){return new Ht(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ht)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ht;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class yc{constructor(){this.k_=new G(O.comparator)}track(e){const t=e.doc.key,r=this.k_.get(t);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(t,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(t):e.type===1&&r.type===2?this.k_=this.k_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):D():this.k_=this.k_.insert(t,e)}q_(){const e=[];return this.k_.inorderTraversal((t,r)=>{e.push(r)}),e}}class tn{constructor(e,t,r,i,s,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new tn(e,t,Ht.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class cv{constructor(){this.Q_=void 0,this.listeners=[]}}class lv{constructor(){this.queries=new un(e=>Uu(e),bi),this.onlineState="Unknown",this.K_=new Set}}async function _h(n,e){const t=x(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new cv),i)try{s.Q_=await t.onListen(r)}catch(o){const a=Go(o,`Initialization of query '${Lt(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.U_(t.onlineState),s.Q_&&e.W_(s.Q_)&&Qo(t)}async function yh(n,e){const t=x(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function uv(n,e){const t=x(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&Qo(t)}function hv(n,e,t){const r=x(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Qo(n){n.K_.forEach(e=>{e.next()})}class vh{constructor(e,t,r){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new tn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Y_(e){e=tn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class wh{constructor(e){this.key=e}}class Eh{constructor(e){this.key=e}}class dv{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=M(),this.mutatedKeys=M(),this.ua=Fu(e),this.ca=new Ht(this.ua)}get la(){return this.oa}ha(e,t){const r=t?t.Pa:new yc,i=t?t.ca:this.ca;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Ri(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(r.track({type:3,doc:f}),v=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),v=!0,(c&&this.ua(f,c)>0||l&&this.ua(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(f?(o=o.add(f),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((l,u)=>function(d,f){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return D()}};return m(d)-m(f)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=t?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,s.length!==0||c?{snapshot:new tn(this.query,e.ca,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new yc,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(t=>this.oa=this.oa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.oa=this.oa.delete(t)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=M(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const t=[];return e.forEach(r=>{this.aa.has(r)||t.push(new Eh(r))}),this.aa.forEach(r=>{e.has(r)||t.push(new wh(r))}),t}Ra(e){this.oa=e.Ps,this.aa=M();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return tn.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class fv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class pv{constructor(e){this.key=e,this.ma=!1}}class mv{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new un(a=>Uu(a),bi),this.pa=new Map,this.ya=new Set,this.wa=new G(O.comparator),this.Sa=new Map,this.ba=new jo,this.Da={},this.Ca=new Map,this.va=en.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function gv(n,e){const t=Rv(n);let r,i;const s=t.ga.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await By(t.localStore,Le(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await _v(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&uh(t.remoteStore,o)}return i}async function _v(n,e,t,r,i){n.Ma=(h,d,f)=>async function(y,v,p,_){let g=v.view.ha(p);g.es&&(g=await pc(y.localStore,v.query,!1).then(({documents:z})=>v.view.ha(z,g)));const I=_&&_.targetChanges.get(v.targetId),P=v.view.applyChanges(g,y.isPrimaryClient,I);return wc(y,v.targetId,P.Ea),P.snapshot}(n,h,d,f);const s=await pc(n.localStore,e,!0),o=new dv(e,s.Ps),a=o.ha(s.documents),c=hr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);wc(n,t,l.Ea);const u=new fv(e,t,o);return n.ga.set(e,u),n.pa.has(t)?n.pa.get(t).push(e):n.pa.set(t,[e]),l.snapshot}async function yv(n,e){const t=x(n),r=t.ga.get(e),i=t.pa.get(r.targetId);if(i.length>1)return t.pa.set(r.targetId,i.filter(s=>!bi(s,e))),void t.ga.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await qs(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),hh(t.remoteStore,r.targetId),$s(t,r.targetId)}).catch(cr)):($s(t,r.targetId),await qs(t.localStore,r.targetId,!0))}async function vv(n,e,t){const r=Pv(n);try{const i=await function(o,a){const c=x(o),l=te.now(),u=a.reduce((f,m)=>f.add(m.key),M());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Ke(),y=M();return c._s.getEntries(f,u).next(v=>{m=v,m.forEach((p,_)=>{_.isValidDocument()||(y=y.add(p))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,m)).next(v=>{h=v;const p=[];for(const _ of a){const g=H_(_,h.get(_.key).overlayedDocument);g!=null&&p.push(new ft(_.key,g,ku(g.value.mapValue),be.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,p,a)}).next(v=>{d=v;const p=v.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(f,v.batchId,p)})}).then(()=>({batchId:d.batchId,changes:ju(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new G(q)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,i.batchId,t),await fr(r,i.changes),await Ni(r.remoteStore)}catch(i){const s=Go(i,"Failed to persist write");t.reject(s)}}async function Ih(n,e){const t=x(n);try{const r=await My(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Sa.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?W(o.ma):i.removedDocuments.size>0&&(W(o.ma),o.ma=!1))}),await fr(t,r,e)}catch(r){await cr(r)}}function vc(n,e,t){const r=x(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=x(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&Qo(c)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wv(n,e,t){const r=x(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new G(O.comparator);o=o.insert(s,de.newNoDocument(s,L.min()));const a=M().add(s),c=new Ci(L.min(),new Map,new G(q),o,a);await Ih(r,c),r.wa=r.wa.remove(s),r.Sa.delete(e),Yo(r)}else await qs(r.localStore,e,!1).then(()=>$s(r,e,t)).catch(cr)}async function Ev(n,e){const t=x(n),r=e.batch.batchId;try{const i=await xy(t.localStore,e);Ah(t,r,null),Th(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await fr(t,i)}catch(i){await cr(i)}}async function Iv(n,e,t){const r=x(n);try{const i=await function(o,a){const c=x(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(W(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Ah(r,e,t),Th(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await fr(r,i)}catch(i){await cr(i)}}function Th(n,e){(n.Ca.get(e)||[]).forEach(t=>{t.resolve()}),n.Ca.delete(e)}function Ah(n,e,t){const r=x(n);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function $s(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.pa.get(e))n.ga.delete(r),t&&n.fa.xa(r,t);n.pa.delete(e),n.isPrimaryClient&&n.ba.mr(e).forEach(r=>{n.ba.containsKey(r)||bh(n,r)})}function bh(n,e){n.ya.delete(e.path.canonicalString());const t=n.wa.get(e);t!==null&&(hh(n.remoteStore,t),n.wa=n.wa.remove(e),n.Sa.delete(t),Yo(n))}function wc(n,e,t){for(const r of t)r instanceof wh?(n.ba.addReference(r.key,e),Tv(n,r)):r instanceof Eh?(C("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,e),n.ba.containsKey(r.key)||bh(n,r.key)):D()}function Tv(n,e){const t=e.key,r=t.path.canonicalString();n.wa.get(t)||n.ya.has(r)||(C("SyncEngine","New document in limbo: "+t),n.ya.add(r),Yo(n))}function Yo(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const e=n.ya.values().next().value;n.ya.delete(e);const t=new O(K.fromString(e)),r=n.va.next();n.Sa.set(r,new pv(t)),n.wa=n.wa.insert(t,r),uh(n.remoteStore,new nt(Le(Lo(t.path)),r,"TargetPurposeLimboResolution",Co.ae))}}async function fr(n,e,t){const r=x(n),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,t).then(l=>{if((l||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=$o.$i(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.fa.c_(i),await async function(c,l){const u=x(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(l,d=>E.forEach(d.Qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>E.forEach(d.Ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!lr(h))throw h;C("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.rs.get(d),m=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(m);u.rs=u.rs.insert(d,y)}}}(r.localStore,s))}async function Av(n,e){const t=x(n);if(!t.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await oh(t.localStore,e);t.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(c=>{c.reject(new S(w.CANCELLED,o))})}),s.Ca.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fr(t,r.cs)}}function bv(n,e){const t=x(n),r=t.Sa.get(e);if(r&&r.ma)return M().add(r.key);{let i=M();const s=t.pa.get(e);if(!s)return i;for(const o of s){const a=t.ga.get(o);i=i.unionWith(a.view.la)}return i}}function Rv(n){const e=x(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ih.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wv.bind(null,e),e.fa.c_=uv.bind(null,e.eventManager),e.fa.xa=hv.bind(null,e.eventManager),e}function Pv(n){const e=x(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ev.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Iv.bind(null,e),e}class Ec{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ki(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Ly(this.persistence,new Dy,e.initialUser,this.serializer)}createPersistence(e){return new ky(qo.Jr,this.serializer)}createSharedClientState(e){return new qy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Av.bind(null,this.syncEngine),await av(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lv}()}createDatastore(e){const t=ki(e.databaseInfo.databaseId),r=function(s){return new Ky(s)}(e.databaseInfo);return function(s,o,a,c){return new Qy(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new Xy(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>vc(this.syncEngine,t,0),function(){return gc.C()?new gc:new $y}())}createSyncEngine(e,t){return function(i,s,o,a,c,l,u){const h=new mv(i,s,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=x(t);C("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await dr(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class Rh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):He("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Cv{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=he.UNAUTHENTICATED,this.clientId=Pu.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Go(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hs(n,e){n.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await oh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ic(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ov(n);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>_c(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>_c(e.remoteStore,s)),n._onlineComponents=e}function kv(n){return n.name==="FirebaseError"?n.code===w.FAILED_PRECONDITION||n.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Ov(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await hs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!kv(t))throw t;Yt("Error using user provided cache. Falling back to memory cache: "+t),await hs(n,new Ec)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await hs(n,new Ec);return n._offlineComponents}async function Ph(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await Ic(n,n._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await Ic(n,new Sv))),n._onlineComponents}function Nv(n){return Ph(n).then(e=>e.syncEngine)}async function Sh(n){const e=await Ph(n),t=e.eventManager;return t.onListen=gv.bind(null,e.syncEngine),t.onUnlisten=yv.bind(null,e.syncEngine),t}function Dv(n,e,t={}){const r=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Rh({next:d=>{o.enqueueAndForget(()=>yh(s,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new S(w.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new S(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new vh(Lo(a.path),u,{includeMetadataChanges:!0,Z_:!0});return _h(s,h)}(await Sh(n),n.asyncQueue,e,t,r)),r.promise}function Vv(n,e,t={}){const r=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Rh({next:d=>{o.enqueueAndForget(()=>yh(s,h)),d.fromCache&&c.source==="server"?l.reject(new S(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new vh(a,u,{includeMetadataChanges:!0,Z_:!0});return _h(s,h)}(await Sh(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ch(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Tc=new Map;/**
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
 */function kh(n,e,t){if(!t)throw new S(w.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Lv(n,e,t,r){if(e===!0&&r===!0)throw new S(w.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ac(n){if(!O.isDocumentKey(n))throw new S(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bc(n){if(O.isDocumentKey(n))throw new S(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Di(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":D()}function Ce(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new S(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Di(n);throw new S(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Rc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new S(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Lv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ch((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new S(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new S(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new S(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new n_;switch(r.type){case"firstParty":return new o_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Tc.get(t);r&&(C("ComponentProvider","Removing Datastore"),Tc.delete(t),r.terminate())}(this),Promise.resolve()}}function xv(n,e,t,r={}){var i;const s=(n=Ce(n,Vi))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Yt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=he.MOCK_USER;else{a=ud(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new S(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new he(l)}n._authCredentials=new r_(new Ru(a,c))}}/**
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
 */class Nt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nt(this.firestore,e,this._query)}}class we{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}}class ot extends Nt{constructor(e,t,r){super(e,t,Lo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new O(e))}withConverter(e){return new ot(this.firestore,e,this._path)}}function pr(n,e,...t){if(n=ne(n),kh("collection","path",e),n instanceof Vi){const r=K.fromString(e,...t);return bc(r),new ot(n,null,r)}{if(!(n instanceof we||n instanceof ot))throw new S(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(K.fromString(e,...t));return bc(r),new ot(n.firestore,null,r)}}function mr(n,e,...t){if(n=ne(n),arguments.length===1&&(e=Pu.V()),kh("doc","path",e),n instanceof Vi){const r=K.fromString(e,...t);return Ac(r),new we(n,null,new O(r))}{if(!(n instanceof we||n instanceof ot))throw new S(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(K.fromString(e,...t));return Ac(r),new we(n.firestore,n instanceof ot?n.converter:null,new O(r))}}/**
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
 */class Mv{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new ch(this,"async_queue_retry"),this.ou=()=>{const t=us();t&&C("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ho.$o()};const e=us();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const t=us();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const t=new qe;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!lr(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const t=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw He("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=t,t}enqueueAfterDelay(e,t,r){this._u(),this.su.indexOf(e)>-1&&(t=0);const i=Wo.createAndSchedule(this,e,t,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&D()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const t of this.tu)if(t.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const t=this.tu.indexOf(e);this.tu.splice(t,1)}}class Dt extends Vi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new Mv}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Oh(this),this._firestoreClient.terminate()}}function Uv(n,e){const t=typeof n=="object"?n:qc(),r=typeof n=="string"?n:e||"(default)",i=Gs(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cd("firestore");s&&xv(i,...s)}return i}function Xo(n){return n._firestoreClient||Oh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Oh(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,l,u){return new y_(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ch(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Cv(n._authCredentials,n._appCheckCredentials,n._queue,s),((t=i.localCache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nn(ye.fromBase64String(e))}catch(t){throw new S(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nn(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Li{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new S(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jo{constructor(e){this._methodName=e}}/**
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
 */class Zo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
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
 */const Fv=/^__.*__$/;class Bv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new ur(e,this.data,t,this.fieldTransforms)}}class Nh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ft(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Dh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class ea{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new ea(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return ti(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(Dh(this.Tu)&&Fv.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class jv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ki(e)}wu(e,t,r,i=!1){return new ea({Tu:e,methodName:t,yu:r,path:fe.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xi(n){const e=n._freezeSettings(),t=ki(n._databaseId);return new jv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Vh(n,e,t,r,i,s={}){const o=n.wu(s.merge||s.mergeFields?2:0,e,t,i);ta("Data must be an object, but it was:",o,r);const a=Lh(r,o);let c,l;if(s.merge)c=new Ie(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=zs(e,h,t);if(!o.contains(d))throw new S(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Mh(u,d)||u.push(d)}c=new Ie(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Bv(new Ee(a),c,l)}class Mi extends Jo{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mi}}function qv(n,e,t,r){const i=n.wu(1,e,t);ta("Data must be an object, but it was:",i,r);const s=[],o=Ee.empty();kt(r,(c,l)=>{const u=na(e,c,t);l=ne(l);const h=i.mu(u);if(l instanceof Mi)s.push(u);else{const d=gr(l,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Ie(s);return new Nh(o,a,i.fieldTransforms)}function $v(n,e,t,r,i,s){const o=n.wu(1,e,t),a=[zs(e,r,t)],c=[i];if(s.length%2!=0)throw new S(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(zs(e,s[d])),c.push(s[d+1]);const l=[],u=Ee.empty();for(let d=a.length-1;d>=0;--d)if(!Mh(l,a[d])){const f=a[d];let m=c[d];m=ne(m);const y=o.mu(f);if(m instanceof Mi)l.push(f);else{const v=gr(m,y);v!=null&&(l.push(f),u.set(f,v))}}const h=new Ie(l);return new Nh(u,h,o.fieldTransforms)}function zv(n,e,t,r=!1){return gr(t,n.wu(r?4:3,e))}function gr(n,e){if(xh(n=ne(n)))return ta("Unsupported field value:",e,n),Lh(n,e);if(n instanceof Jo)return function(r,i){if(!Dh(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=gr(a,i.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return F_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=te.fromDate(r);return{timestampValue:Zr(i.serializer,s)}}if(r instanceof te){const s=new te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zr(i.serializer,s)}}if(r instanceof Zo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof nn)return{bytesValue:eh(i.serializer,r._byteString)};if(r instanceof we){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bo(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${Di(r)}`)}(n,e)}function Lh(n,e){const t={};return Su(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kt(n,(r,i)=>{const s=gr(i,e.Au(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function xh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof te||n instanceof Zo||n instanceof nn||n instanceof we||n instanceof Jo)}function ta(n,e,t){if(!xh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Di(t);throw r==="an object"?e.gu(n+" a custom object"):e.gu(n+" "+r)}}function zs(n,e,t){if((e=ne(e))instanceof Li)return e._internalPath;if(typeof e=="string")return na(n,e);throw ti("Field path arguments must be of type string or ",n,!1,void 0,t)}const Hv=new RegExp("[~\\*/\\[\\]]");function na(n,e,t){if(e.search(Hv)>=0)throw ti(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Li(...e.split("."))._internalPath}catch{throw ti(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ti(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new S(w.INVALID_ARGUMENT,a+n+c)}function Mh(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Uh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ui("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Kv extends Uh{data(){return super.data()}}function Ui(n,e){return typeof e=="string"?na(n,e):e instanceof Li?e._internalPath:e._delegate._internalPath}/**
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
 */function Wv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new S(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ra{}class Fh extends ra{}function Fi(n,e,...t){let r=[];e instanceof ra&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof ia).length,a=s.filter(c=>c instanceof Bi).length;if(o>1||o>0&&a>0)throw new S(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Bi extends Fh{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Bi(e,t,r)}_apply(e){const t=this._parse(e);return Bh(e._query,t),new Nt(e.firestore,e.converter,xs(e._query,t))}_parse(e){const t=xi(e.firestore);return function(s,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new S(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Sc(h,u);const f=[];for(const m of h)f.push(Pc(c,s,m));d={arrayValue:{values:f}}}else d=Pc(c,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Sc(h,u),d=zv(a,o,h,u==="in"||u==="not-in");return ee.create(l,u,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ni(n,e,t){const r=e,i=Ui("where",n);return Bi._create(i,r,t)}class ia extends ra{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ia(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Se.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Bh(o,c),o=xs(o,c)}(e._query,t),new Nt(e.firestore,e.converter,xs(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sa extends Fh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new sa(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new S(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new S(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new zt(s,o);return function(l,u){if(xo(l)===null){const h=Ai(l);h!==null&&jh(l,h,u.field)}}(i,a),a}(e._query,this._field,this._direction);return new Nt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ln(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Gv(n,e="asc"){const t=e,r=Ui("orderBy",n);return sa._create(r,t)}function Pc(n,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new S(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mu(e)&&t.indexOf("/")!==-1)throw new S(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(K.fromString(t));if(!O.isDocumentKey(r))throw new S(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xa(n,new O(r))}if(t instanceof we)return Xa(n,t._key);throw new S(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Di(t)}.`)}function Sc(n,e){if(!Array.isArray(n)||n.length===0)throw new S(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Bh(n,e){if(e.isInequality()){const r=Ai(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new S(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=xo(n);s!==null&&jh(n,i,s)}const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new S(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new S(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function jh(n,e,t){if(!t.isEqual(e))throw new S(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Qv{convertValue(e,t="none"){switch(Pt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw D()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return kt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Zo(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Oo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(qn(e));default:return null}}convertTimestamp(e){const t=ct(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=K.fromString(e);W(sh(r));const i=new $n(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(t)||He(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function qh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Tn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $h extends Uh{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ui("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Dr extends $h{data(e={}){return super.data(e)}}class Yv{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Tn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Dr(this._firestore,this._userDataWriter,r.key,r,new Tn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Dr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Tn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Dr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Tn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Xv(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Xv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return D()}}/**
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
 */function Jv(n){n=Ce(n,we);const e=Ce(n.firestore,Dt);return Dv(Xo(e),n._key).then(t=>ew(e,n,t))}class zh extends Qv{constructor(e){super(),this.firestore=e}convertBytes(e){return new nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,t)}}function ji(n){n=Ce(n,Nt);const e=Ce(n.firestore,Dt),t=Xo(e),r=new zh(e);return Wv(n._query),Vv(t,n._query).then(i=>new Yv(e,r,n,i))}function Hh(n,e,t){n=Ce(n,we);const r=Ce(n.firestore,Dt),i=qh(n.converter,e,t);return qi(r,[Vh(xi(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,be.none())])}function Zv(n,e,t,...r){n=Ce(n,we);const i=Ce(n.firestore,Dt),s=xi(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof Li?$v(s,"updateDoc",n._key,e,t,r):qv(s,"updateDoc",n._key,e),qi(i,[o.toMutation(n._key,be.exists(!0))])}function Kh(n){return qi(Ce(n.firestore,Dt),[new Mo(n._key,be.none())])}function Wh(n,e){const t=Ce(n.firestore,Dt),r=mr(n),i=qh(n.converter,e);return qi(t,[Vh(xi(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,be.exists(!1))]).then(()=>r)}function qi(n,e){return function(r,i){const s=new qe;return r.asyncQueue.enqueueAndForget(async()=>vv(await Nv(r),i,s)),s.promise}(Xo(n),e)}function ew(n,e,t){const r=t.docs.get(e._key),i=new zh(n);return new $h(n,i,e._key,r,new Tn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){cn=i})(rn),Kt(new Et("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Dt(new i_(r.getProvider("auth-internal")),new c_(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new S(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $n(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),st(Wa,"4.1.3",e),st(Wa,"4.1.3","esm2017")})();const tw={apiKey:"AIzaSyACG5rW_-P4Y_Ut762pMUH4iKeMkxNAf2Q",authDomain:"red-social-5d2b2.firebaseapp.com",projectId:"red-social-5d2b2",storageBucket:"red-social-5d2b2.appspot.com",messagingSenderId:"1053149612519",appId:"1:1053149612519:web:2ac9aa3caad8b07a4b5542",measurementId:"G-K3Q4KXLZYX"},oa=jc(tw),St=Tl(oa),nw=new Ue(oa),Ye=Uv(oa),rw=async(n,e)=>{try{const t=await Sp(St,n,e);sessionStorage.setItem("userId",t.user.uid),sessionStorage.setItem("loggedEmail",n)}catch(t){throw new Error(t)}},iw=async()=>{try{const n=await tm(St,nw);return sessionStorage.setItem("userId",n.user.uid),sessionStorage.setItem("loggedEmail",n.user.email),await Hh(mr(Ye,"users",n.user.uid),{name:n.user.displayName,email:n.user.email,origin:"Google"}),{name:n.user.displayName,email:n.user.email,origin:"Google"}}catch(n){throw new Error(n)}},sw=async(n,e,t)=>{try{const i=(await Pp(St,e,t)).user;return await kp(i,{displayName:n}),await Hh(mr(Ye,"users",i.uid),{name:n,email:e,origin:"Tripify"}),{name:n,email:e,origin:"Tripify"}}catch(r){throw new Error(r)}},ow=async()=>{Vp(St).then(()=>{sessionStorage.removeItem("userId"),sessionStorage.removeItem("loggedEmail")}).catch(n=>{throw new Error(n)})},aw=async n=>Rp(St,n),cw=async(n,e)=>{const t=St.currentUser.displayName,r=St.currentUser.photoURL,i=pr(Ye,"posts");await Wh(i,{name:t,photo:r,userId:n,content:e,creationDate:new Date})},Gh=async()=>{const n=pr(Ye,"posts"),e=Fi(n,Gv("creationDate","desc")),t=await ji(e),r=[];return t.forEach(i=>{r.push({id:i.id,...i.data()})}),r},lw=async(n,e)=>{const t=mr(Ye,"posts",n);await Zv(t,{content:e})},uw=async(n,e)=>{const t=mr(Ye,"posts",n),r=await Jv(t);r.exists()&&r.data().userId===e?(await Kh(t),console.log("El post se ha eliminado correctamente.")):console.log("No tienes permiso para eliminar este post.")},Cc=async(n,e)=>{const t=pr(Ye,"likes"),r=Fi(t,ni("postId","==",n),ni("userId","==",e)),i=await ji(r);if(i.empty)await Wh(t,{userId:e,postId:n});else{const s=i.docs[0];await Kh(s.ref)}},hw=async()=>{const n=pr(Ye,"likes"),e=Fi(n,ni("userId","==",sessionStorage.getItem("userId"))),t=await ji(e),r=[];return t.forEach(i=>{r.push({id:i.id,...i.data()})}),r},ds=async n=>{const e=pr(Ye,"likes"),t=Fi(e,ni("postId","==",n));return(await ji(t)).size},dw=async n=>{document.body.classList.remove("no-bg");const e=document.createElement("section");e.classList.add("section_home");const t=document.createElement("img");t.classList.add("img_logo");const r=document.createElement("p");r.setAttribute("id","incorrect_user"),r.style.fontWeight="bolder",r.style.color="#E8868C",r.textContent="Usuario o contrase\xF1a incorrectos",r.style.display="none";const i=document.createElement("form");i.classList.add("grilla_form"),i.setAttribute("id","form_login");const s=document.createElement("label"),o=document.createElement("input");o.type="email";const a=document.createElement("label"),c=document.createElement("input");c.type="password";const l=document.createElement("button"),u=document.createElement("img");u.src="../asset/icons/btn_google_signin_light_normal_web@2x.png",l.id="button_google",u.id="img_google",l.appendChild(u);const h=document.createElement("img");h.classList.add("img_linea");const d=document.createElement("button");d.classList.add("button_login");const f=document.createElement("a");f.classList.add("forget_password");const m=document.createElement("button");return m.classList.add("btn_crear_cuenta"),t.src=oi,h.src=Km,u.src=Wm,d.textContent="Iniciar Sesi\xF3n",d.setAttribute("type","submit"),d.addEventListener("click",async y=>{y.preventDefault();const v=o.value,p=c.value;try{await rw(v,p),n("/feed")}catch{r.style.display="block",i.reset()}}),s.textContent="Nombre de usuario o correo",a.textContent="Contrase\xF1a",c.setAttribute("type","password"),l.addEventListener("click",async y=>{y.preventDefault();try{await iw(),n("/feed")}catch{r.style.display="block"}}),f.textContent="\xBFOlvidaste tu contrase\xF1a?",f.addEventListener("click",y=>{y.preventDefault(),n("/forget_password")}),f.setAttribute("href",""),m.textContent="Crear nueva cuenta",m.addEventListener("click",y=>{y.preventDefault(),n("/new_account")}),i.append(s,o,a,c,d,h,l,f,m),e.append(t,r,i),e};function fw(n,e,t){const r=document.createElement("section");r.classList.add("error_container");const i=document.createElement("img");i.classList.add("img_logo"),i.src=oi;const s=document.createElement("h2");s.classList.add("error_title");const o=document.createElement("button");o.classList.add("error_button"),s.textContent="Error 404: p\xE1gina no encontrada";const a=t();return o.textContent="Volver a inicio",o.addEventListener("click",c=>{c.preventDefault(),n(a?"/feed":"/")}),r.append(i,s,o),r}function pw(n){document.body.classList.remove("no-bg");const e=document.createElement("section");e.classList.add("container_account");const t=document.createElement("img");t.classList.add("img_logo");const r=document.createElement("form");r.classList.add("grilla_form");const i=document.createElement("label"),s=document.createElement("input");s.type="email";const o=document.createElement("label"),a=document.createElement("input");a.type="text";const c=document.createElement("label"),l=document.createElement("input");l.type="password";const u=document.createElement("label"),h=document.createElement("input");h.type="password";const d=document.createElement("button");d.classList.add("btn_crear_cuenta");const f=document.createElement("p");f.classList.add("back_home");const m=document.createElement("a");return t.src=oi,i.textContent="Correo electr\xF3nico",o.textContent="Nombre de usuario",c.textContent="Contrase\xF1a",u.textContent="Repetir contrase\xF1a",d.textContent="Crear Cuenta",f.innerHTML="\xBFYa tienes una cuenta? ",m.innerHTML=" Inicia sesi\xF3n",m.addEventListener("click",y=>{y.preventDefault(),n("/")}),m.setAttribute("href",""),d.addEventListener("click",async y=>{y.preventDefault();const v=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,p=/^(?=.*[A-Z])(?=.*\d).{8,}$/,_=/^[a-zA-Z0-9]{3,12}$/;if(s.value.trim()!==""&&a.value.trim()!==""&&l.value.trim()!==""&&h.value.trim()!==""){if(!v.test(s.value)){alert("Por favor, ingresa un correo electr\xF3nico v\xE1lido.");return}if(!_.test(a.value)){alert("El nombre de usuario debe tener entre 3 y 12 caracteres alfanum\xE9ricos.");return}if(!p.test(l.value)){alert("La contrase\xF1a debe contener al menos 8 caracteres, 1 may\xFAscula y 1 n\xFAmero.");return}if(l.value!==h.value){alert("Las contrase\xF1as deben coincidir.");return}try{await sw(a.value,s.value,l.value),n("/")}catch{alert("No se ha podido crear el usuario")}}else alert("Los campos son obligatorios.")}),r.append(i,s,o,a,c,l,u,h,d),f.append(m),e.append(t,r,f),e}const Wn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA1CAYAAAAUGCjAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT9SURBVHgB7VotVBRRFL4qBjBCIUAxsMVzhKBhrVulWCgGKRaDBaN4jgatGixQKRYKhWKQIEEMhqUY2ArBsgSL8zH3Y96+fbPvZ2ZgPWe/c+6ZWZj37vvevXPfe/eOyAQTjDVuSLNYzGQhkxmVWf37mV57mZxmciINoW6Cc5ksq4DcTETbbiZHmfyQYgIqoy6CrUwe69UErIOBn2fS198AJoIWxf2i1Q5tDlQqoSpBEHom+SABkIAFYIlj/R0CkF3KZEVy69PymJBdqUA0lSAIgVjLGMi+DiSUVBlADiRXpZi4b5ITjXbdFIJQvq4D6avifWkGbSmIYhJ3JPeOYNySOEDZ00xuS/6evJPcFZsCoiwIYTLhLQ/178E6YwiuqgCw2nYmf6V5wEtotZYUr0UQyVAXNcltSdxLjwHBrRExGS3hbrRON7yrC5dd1/tdlZEIIdjJZE3vY8gta7s5z3OxkdIk6R2Pz0UxuOeSv3OhwQTvC97TJ1IEoj1t+0UHdCh5RJxTWdFnf4vf7Xva5z3JveO75OusEz4LftABIExvSxjeSL49C42wsAgsDYLYsm1KGNAG3tXVcTpxy6P4keQuBFc4lzCly9rmbSa/AtrAIofabl5yoiHtYO0Hkr/Xff09hJsjOjAjZsgCC0t39P69xC3KmJCPeo8+lgLagNSO3mOszn1vGUFYj4tr6MvPCYE7p2yWYcldqy8fGIVBru16oIygab1QtBPa2OD7GnMSob5l1z9dBBEgYq3HxRdBospRp699zIh/eSG4qccYhlzbRXBFrzEL8LRe6zjH9fS6ENGGhrCPa06CnIWYTW3MwdYHTlbMqYTGCLIgt1Mxm2imHGalOsyzZSg4VvvgPESQJ+2+xCk40+dj0xTi0J8ywcwWmHmfC7gIArFJICigm3QkHeZSEwsaZCA42QSnJR0M8RhkTIAg0KbKUsN8z4AH2QRnrIdjAJciyRcS9z4uaBsgKTUhxVZyJEGa+Y6kAVsnhGy4CTbdIe6KZ15pG7RN3ShwQgdix5T10Ln1cAq2VAnPkbjaWTZm0dpSzDisvyPVMZKg048TgIEiUDFh1JFyayI4wWpVcztmtuASLoJ9GVwuUsHELfOdZuBBv3jPkEOtI2nF0gD7vcSU42HMPPd1USm6EhxLs5k3gDuYoeXNtZPhYFry/4D756GJdBHkgu08X40pSvfPZRbkITLkZH3dMA/nQS4KcCZCT9bXiZGH86mSRgfakEnbkGCDWYTFGdFSEVMU9aZWyggy5bemUlYKAxGucXWeCQFfxQrEvKkVX150Q3IrunYZZbVBFjtTwOPOotFvWVUJ2e22/n+jrEMfQSjZVMVQws20mc6vaydiA+6+LgVRUz9rJZjI1zJic+5L3aODP5KvM0iVn6pCswCyLTXW1A2gTxJqqf6u3nNyUQoYmSQOKZ/1DCUkylpFlRRhKI4t/awRQveer3FofdBUAnKw5Ce5OkA/ojndNXhyYwqgJkkGA4TykJpFFUDXy0zu6u8oz4ktYYPkiSqjy+A97UkzQDDDSX9e9XzO5GtE+0pfWSCKcb/KIuaR1POVBfrtSOGSCC44SF/JVxYmzK8gAK6FP3VQMd/JwCPuS1EMBVi6S16C6vrSqa1iH7Hgzhgk86b2l07T2sauQ9S2tjb5rVrMeZJFl7H9Vq0MrFQxX2J+bcjsOYg1FaQmmGDc8Q98iTZ1mb2r9gAAAABJRU5ErkJggg==",mw="/assets/Logo.feed.2ce43b3e.png",gw=async(n,e)=>{document.body.classList.add("no-bg");const t=document.createElement("section");t.classList.add("feed_section");let r="";const i={year:"numeric",month:"long",day:"numeric"},s=await Gh(),o=await hw();s.forEach(m=>{const y=m.photo||Wn,v=o&&o.find(g=>g.postId===m.id);let p="fa-regular",_="";v!==void 0&&(p="fa-solid star-filled",_=v.id),r+=`
    <div class="div_post">
      <div class="icon_perfil">
        <div class="perfil_post">
          <img src="${y}" alt="random image">
        </div>
      </div>
      <div class="container_text">
        <h3>${m.name}</h3>
        <h4>${m.creationDate.toDate().toLocaleDateString("es-CL",i)}</h4>
        <p>${m.content}</p>
      </div>
      <div class="container_likes">
      <i class="fa-star fa-md like_star ${p}"
      style="color: #F1B33C;;cursor:pointer;" id="like_star" data-idpost="${m.id}" data-idfirebase="${_}"></i>
      <span class="like_count" data-likes="" id="likes-${m.id}"></span>
      </div>
  </div>`});const u=`
    <div class="container_feed">
      <header id="header_feed">
        <div class="perfil">
         <img src="${e()||Wn}" alt="random image" id="profile_photo">
        </div>
        <div class="logo">
          <img src="${mw}" alt=" image">
        </div>
      </header>
    <nav class="nav_container_up">
      <div id="logout">
        <button class="btn_logout"> Cerrar Sesion</button>
      </div>
      <div class="buscador">
          <input id="input_busqueda" type="search" placeholder= "Buscar">
      </div>
    </nav>
      <main id="main_feed">${r}</main>
    </div>

    <i class="fa-solid fa-circle-plus fa-3x" id="add_post" style="color: #f1b33c;"></i>

    <footer>
    </footer>`;t.innerHTML=u,t.querySelector("#profile_photo").addEventListener("click",()=>{n("/profile")}),t.getElementsByClassName("btn_logout")[0].addEventListener("click",async()=>{try{await ow(),n("/")}catch{alert("No se ha podido cerrar sesi\xF3n")}}),t.querySelector("i.fa-circle-plus").addEventListener("click",()=>{n("/create_post")});const h=async()=>{t.querySelectorAll("i.like_star").forEach(async y=>{const v=y.getAttribute("data-idpost"),p=t.querySelector(`#likes-${v}`),_=await ds(v);p.innerHTML=_,p.setAttribute("data-likes",_)})},d=async m=>{const y=m.getAttribute("data-idpost"),v=sessionStorage.getItem("userId"),p=t.querySelector(`#likes-${y}`);if(m.classList.contains("star-filled")){await Cc(y,v);const g=await ds(y);p.innerHTML=g,p.setAttribute("data-likes",g),m.classList.remove("star-filled"),m.classList.add("fa-regular"),m.classList.remove("fa-solid"),console.log(`N\xFAmero total de likes para postId ${y}: ${g}`)}else{await Cc(y,v);const g=await ds(y);p.innerHTML=g,p.setAttribute("data-likes",g),m.classList.add("star-filled"),m.classList.remove("fa-regular"),m.classList.add("fa-solid"),console.log(`N\xFAmero total de likes para postId ${y}: ${g}`)}};return h(),t.querySelectorAll("i.like_star").forEach(m=>{m.addEventListener("click",()=>{d(m)})}),t};function _w(n){document.body.classList.remove("no-bg");const e=document.createElement("section");e.classList.add("reset_password_container");const t=document.createElement("img");t.classList.add("img_logo"),t.src=oi;const r=document.createElement("h1");r.classList.add("reset_password_title");const i=document.createElement("div");i.classList.add("reset_password_small_container");const s=document.createElement("p");s.classList.add("reset_password_paragraph"),s.style.display="none";const o=document.createElement("p");o.classList.add("reset_password_paragraph"),o.style.display="none",o.style.color="var(--var_rosa)";const a=document.createElement("label");a.classList.add("reset_password_label"),a.setAttribute("for","input_reset_password");const c=document.createElement("form");c.classList.add("reset_password_form"),c.setAttribute("id","input_reset_password");const l=document.createElement("input");l.type="email",l.classList.add("reset_password_email"),l.setAttribute("id","email");const u=document.createElement("button");u.classList.add("reset_password_button");const h=document.createElement("button");return h.classList.add("reset_password_button"),r.textContent="Cambio de contrase\xF1a",s.textContent="\xA1Correo enviado exitosamente!",o.textContent="Error al enviar el correo de restablecimiento de contrase\xF1a",a.textContent="Te haremos llegar un email para cambiar tu contrase\xF1a.",l.setAttribute("placeholder","Ingresa tu email..."),h.textContent="Volver a inicio",h.addEventListener("click",d=>{d.preventDefault(),n("/")}),u.textContent="Enviar",c.addEventListener("submit",async d=>{d.preventDefault();const f=l.value;aw(f).then(()=>{a.style.display="none",c.style.display="none",s.style.display="block",o.style.display="none"}).catch(()=>{o.style.display="block"})}),c.append(a,l,u),i.append(c,s,o),e.append(t,r,i,h),e}function yw(n,e,t){const r=document.createElement("section");r.classList.add("post_section");const o=`
  <div class="post_big_container">
  <nav class="nav_post">
   <i class="fa-solid fa-arrow-left fa-xl" style="color: #35285a; cursor: pointer;"></i>
  </nav>
   <div class="post_small_container">
    <div class="icon_post"'
     <div class="profile_new_post">
      <img src="${e()||Wn}" alt="random image" id="profile_photo_post">
    </div>
    <form id="post_form">
     <textarea id="post_content" placeholder="\xBFD\xF3nde viajaste hoy? \u{1F4AB}" rows="6" cols="31" required></textarea>
     <input type="submit" value="Postear" id="post_button">
    </form>
   </div>
  </div>
  `;return r.innerHTML=o,r.querySelector("i").addEventListener("click",()=>{n("/feed")}),r.querySelector("#post_form").addEventListener("submit",async a=>{a.preventDefault();const c=r.querySelector("#post_content").value,l=t();c.trim()!==""?(await cw(l,c),n("/feed")):console.error("Sin contenido")}),r}var vw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ww(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qh={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(vw,function(){return function(t){function r(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var i={};return r.m=t,r.c=i,r.d=function(s,o,a){r.o(s,o)||Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:a})},r.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(o,"a",o),o},r.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},r.p="",r(r.s=8)}([function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s="swal-button";r.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:s,CONFIRM_BUTTON:s+"--confirm",CANCEL_BUTTON:s+"--cancel",DANGER_BUTTON:s+"--danger",BUTTON_LOADING:s+"--loading",BUTTON_LOADER:s+"__loader"},r.default=r.CLASS_NAMES},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.getNode=function(s){var o="."+s;return document.querySelector(o)},r.stringToNode=function(s){var o=document.createElement("div");return o.innerHTML=s.trim(),o.firstChild},r.insertAfter=function(s,o){var a=o.nextSibling;o.parentNode.insertBefore(s,a)},r.removeNode=function(s){s.parentElement.removeChild(s)},r.throwErr=function(s){throw s=s.replace(/ +(?= )/g,""),"SweetAlert: "+(s=s.trim())},r.isPlainObject=function(s){if(Object.prototype.toString.call(s)!=="[object Object]")return!1;var o=Object.getPrototypeOf(s);return o===null||o===Object.prototype},r.ordinalSuffixOf=function(s){var o=s%10,a=s%100;return o===1&&a!==11?s+"st":o===2&&a!==12?s+"nd":o===3&&a!==13?s+"rd":s+"th"}},function(t,r,i){function s(d){for(var f in d)r.hasOwnProperty(f)||(r[f]=d[f])}Object.defineProperty(r,"__esModule",{value:!0}),s(i(25));var o=i(26);r.overlayMarkup=o.default,s(i(27)),s(i(28)),s(i(29));var a=i(0),c=a.default.MODAL_TITLE,l=a.default.MODAL_TEXT,u=a.default.ICON,h=a.default.FOOTER;r.iconMarkup=`
  <div class="`+u+'"></div>',r.titleMarkup=`
  <div class="`+c+`"></div>
`,r.textMarkup=`
  <div class="`+l+'"></div>',r.footerMarkup=`
  <div class="`+h+`"></div>
`},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1);r.CONFIRM_KEY="confirm",r.CANCEL_KEY="cancel";var o={visible:!0,text:null,value:null,className:"",closeModal:!0},a=Object.assign({},o,{visible:!1,text:"Cancel",value:null}),c=Object.assign({},o,{text:"OK",value:!0});r.defaultButtonList={cancel:a,confirm:c};var l=function(f){switch(f){case r.CONFIRM_KEY:return c;case r.CANCEL_KEY:return a;default:var m=f.charAt(0).toUpperCase()+f.slice(1);return Object.assign({},o,{text:m,value:f})}},u=function(f,m){var y=l(f);return m===!0?Object.assign({},y,{visible:!0}):typeof m=="string"?Object.assign({},y,{visible:!0,text:m}):s.isPlainObject(m)?Object.assign({visible:!0},y,m):Object.assign({},y,{visible:!1})},h=function(f){for(var m={},y=0,v=Object.keys(f);y<v.length;y++){var p=v[y],_=f[p],g=u(p,_);m[p]=g}return m.cancel||(m.cancel=a),m},d=function(f){var m={};switch(f.length){case 1:m[r.CANCEL_KEY]=Object.assign({},a,{visible:!1});break;case 2:m[r.CANCEL_KEY]=u(r.CANCEL_KEY,f[0]),m[r.CONFIRM_KEY]=u(r.CONFIRM_KEY,f[1]);break;default:s.throwErr("Invalid number of 'buttons' in array ("+f.length+`).
      If you want more than 2 buttons, you need to use an object!`)}return m};r.getButtonListOpts=function(f){var m=r.defaultButtonList;return typeof f=="string"?m[r.CONFIRM_KEY]=u(r.CONFIRM_KEY,f):Array.isArray(f)?m=d(f):s.isPlainObject(f)?m=h(f):f===!0?m=d([!0,!0]):f===!1?m=d([!1,!1]):f===void 0&&(m=r.defaultButtonList),m}},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),o=i(2),a=i(0),c=a.default.MODAL,l=a.default.OVERLAY,u=i(30),h=i(31),d=i(32),f=i(33);r.injectElIntoModal=function(p){var _=s.getNode(c),g=s.stringToNode(p);return _.appendChild(g),g};var m=function(p){p.className=c,p.textContent=""},y=function(p,_){m(p);var g=_.className;g&&p.classList.add(g)};r.initModalContent=function(p){var _=s.getNode(c);y(_,p),u.default(p.icon),h.initTitle(p.title),h.initText(p.text),f.default(p.content),d.default(p.buttons,p.dangerMode)};var v=function(){var p=s.getNode(l),_=s.stringToNode(o.modalMarkup);p.appendChild(_)};r.default=v},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(3),o={isOpen:!1,promise:null,actions:{},timer:null},a=Object.assign({},o);r.resetState=function(){a=Object.assign({},o)},r.setActionValue=function(l){if(typeof l=="string")return c(s.CONFIRM_KEY,l);for(var u in l)c(u,l[u])};var c=function(l,u){a.actions[l]||(a.actions[l]={}),Object.assign(a.actions[l],{value:u})};r.setActionOptionsFor=function(l,u){var h=(u===void 0?{}:u).closeModal,d=h===void 0||h;Object.assign(a.actions[l],{closeModal:d})},r.default=a},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),o=i(3),a=i(0),c=a.default.OVERLAY,l=a.default.SHOW_MODAL,u=a.default.BUTTON,h=a.default.BUTTON_LOADING,d=i(5);r.openModal=function(){s.getNode(c).classList.add(l),d.default.isOpen=!0};var f=function(){s.getNode(c).classList.remove(l),d.default.isOpen=!1};r.onAction=function(m){m===void 0&&(m=o.CANCEL_KEY);var y=d.default.actions[m],v=y.value;if(y.closeModal===!1){var p=u+"--"+m;s.getNode(p).classList.add(h)}else f();d.default.promise.resolve(v)},r.getState=function(){var m=Object.assign({},d.default);return delete m.promise,delete m.timer,m},r.stopLoading=function(){for(var m=document.querySelectorAll("."+u),y=0;y<m.length;y++)m[y].classList.remove(h)}},function(t,r){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(i=window)}t.exports=i},function(t,r,i){(function(s){t.exports=s.sweetAlert=i(9)}).call(r,i(7))},function(t,r,i){(function(s){t.exports=s.swal=i(10)}).call(r,i(7))},function(t,r,i){typeof window<"u"&&i(11),i(16);var s=i(23).default;t.exports=s},function(t,r,i){var s=i(12);typeof s=="string"&&(s=[[t.i,s,""]]);var o={insertAt:"top"};o.transform=void 0,i(14)(s,o),s.locals&&(t.exports=s.locals)},function(t,r,i){r=t.exports=i(13)(void 0),r.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,r){function i(o,a){var c=o[1]||"",l=o[3];if(!l)return c;if(a&&typeof btoa=="function"){var u=s(l);return[c].concat(l.sources.map(function(h){return"/*# sourceURL="+l.sourceRoot+h+" */"})).concat([u]).join(`
`)}return[c].join(`
`)}function s(o){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"}t.exports=function(o){var a=[];return a.toString=function(){return this.map(function(c){var l=i(c,o);return c[2]?"@media "+c[2]+"{"+l+"}":l}).join("")},a.i=function(c,l){typeof c=="string"&&(c=[[null,c,""]]);for(var u={},h=0;h<this.length;h++){var d=this[h][0];typeof d=="number"&&(u[d]=!0)}for(h=0;h<c.length;h++){var f=c[h];typeof f[0]=="number"&&u[f[0]]||(l&&!f[2]?f[2]=l:l&&(f[2]="("+f[2]+") and ("+l+")"),a.push(f))}},a}},function(t,r,i){function s(b,T){for(var k=0;k<b.length;k++){var A=b[k],U=v[A.id];if(U){U.refs++;for(var F=0;F<U.parts.length;F++)U.parts[F](A.parts[F]);for(;F<A.parts.length;F++)U.parts.push(d(A.parts[F],T))}else{for(var Y=[],F=0;F<A.parts.length;F++)Y.push(d(A.parts[F],T));v[A.id]={id:A.id,refs:1,parts:Y}}}}function o(b,T){for(var k=[],A={},U=0;U<b.length;U++){var F=b[U],Y=T.base?F[0]+T.base:F[0],re=F[1],dn=F[2],ed=F[3],aa={css:re,media:dn,sourceMap:ed};A[Y]?A[Y].parts.push(aa):k.push(A[Y]={id:Y,parts:[aa]})}return k}function a(b,T){var k=_(b.insertInto);if(!k)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var A=P[P.length-1];if(b.insertAt==="top")A?A.nextSibling?k.insertBefore(T,A.nextSibling):k.appendChild(T):k.insertBefore(T,k.firstChild),P.push(T);else{if(b.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");k.appendChild(T)}}function c(b){if(b.parentNode===null)return!1;b.parentNode.removeChild(b);var T=P.indexOf(b);T>=0&&P.splice(T,1)}function l(b){var T=document.createElement("style");return b.attrs.type="text/css",h(T,b.attrs),a(b,T),T}function u(b){var T=document.createElement("link");return b.attrs.type="text/css",b.attrs.rel="stylesheet",h(T,b.attrs),a(b,T),T}function h(b,T){Object.keys(T).forEach(function(k){b.setAttribute(k,T[k])})}function d(b,T){var k,A,U,F;if(T.transform&&b.css){if(!(F=T.transform(b.css)))return function(){};b.css=F}if(T.singleton){var Y=I++;k=g||(g=l(T)),A=f.bind(null,k,Y,!1),U=f.bind(null,k,Y,!0)}else b.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(k=u(T),A=y.bind(null,k,T),U=function(){c(k),k.href&&URL.revokeObjectURL(k.href)}):(k=l(T),A=m.bind(null,k),U=function(){c(k)});return A(b),function(re){if(re){if(re.css===b.css&&re.media===b.media&&re.sourceMap===b.sourceMap)return;A(b=re)}else U()}}function f(b,T,k,A){var U=k?"":A.css;if(b.styleSheet)b.styleSheet.cssText=Q(T,U);else{var F=document.createTextNode(U),Y=b.childNodes;Y[T]&&b.removeChild(Y[T]),Y.length?b.insertBefore(F,Y[T]):b.appendChild(F)}}function m(b,T){var k=T.css,A=T.media;if(A&&b.setAttribute("media",A),b.styleSheet)b.styleSheet.cssText=k;else{for(;b.firstChild;)b.removeChild(b.firstChild);b.appendChild(document.createTextNode(k))}}function y(b,T,k){var A=k.css,U=k.sourceMap,F=T.convertToAbsoluteUrls===void 0&&U;(T.convertToAbsoluteUrls||F)&&(A=z(A)),U&&(A+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(U))))+" */");var Y=new Blob([A],{type:"text/css"}),re=b.href;b.href=URL.createObjectURL(Y),re&&URL.revokeObjectURL(re)}var v={},p=function(b){var T;return function(){return T===void 0&&(T=b.apply(this,arguments)),T}}(function(){return window&&document&&document.all&&!window.atob}),_=function(b){var T={};return function(k){return T[k]===void 0&&(T[k]=b.call(this,k)),T[k]}}(function(b){return document.querySelector(b)}),g=null,I=0,P=[],z=i(15);t.exports=function(b,T){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");T=T||{},T.attrs=typeof T.attrs=="object"?T.attrs:{},T.singleton||(T.singleton=p()),T.insertInto||(T.insertInto="head"),T.insertAt||(T.insertAt="bottom");var k=o(b,T);return s(k,T),function(A){for(var U=[],F=0;F<k.length;F++){var Y=k[F],re=v[Y.id];re.refs--,U.push(re)}A&&s(o(A,T),T);for(var F=0;F<U.length;F++){var re=U[F];if(re.refs===0){for(var dn=0;dn<re.parts.length;dn++)re.parts[dn]();delete v[re.id]}}}};var Q=function(){var b=[];return function(T,k){return b[T]=k,b.filter(Boolean).join(`
`)}}()},function(t,r){t.exports=function(i){var s=typeof window<"u"&&window.location;if(!s)throw new Error("fixUrls requires window.location");if(!i||typeof i!="string")return i;var o=s.protocol+"//"+s.host,a=o+s.pathname.replace(/\/[^\/]*$/,"/");return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(c,l){var u=l.trim().replace(/^"(.*)"$/,function(d,f){return f}).replace(/^'(.*)'$/,function(d,f){return f});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(u))return c;var h;return h=u.indexOf("//")===0?u:u.indexOf("/")===0?o+u:a+u.replace(/^\.\//,""),"url("+JSON.stringify(h)+")"})}},function(t,r,i){var s=i(17);typeof window>"u"||window.Promise||(window.Promise=s),i(21),String.prototype.includes||(String.prototype.includes=function(o,a){return typeof a!="number"&&(a=0),!(a+o.length>this.length)&&this.indexOf(o,a)!==-1}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(o,a){if(this==null)throw new TypeError('"this" is null or not defined');var c=Object(this),l=c.length>>>0;if(l===0)return!1;for(var u=0|a,h=Math.max(u>=0?u:l-Math.abs(u),0);h<l;){if(function(d,f){return d===f||typeof d=="number"&&typeof f=="number"&&isNaN(d)&&isNaN(f)}(c[h],o))return!0;h++}return!1}}),typeof window<"u"&&function(o){o.forEach(function(a){a.hasOwnProperty("remove")||Object.defineProperty(a,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,r,i){(function(s){(function(o){function a(){}function c(p,_){return function(){p.apply(_,arguments)}}function l(p){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");if(typeof p!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],y(p,this)}function u(p,_){for(;p._state===3;)p=p._value;if(p._state===0)return void p._deferreds.push(_);p._handled=!0,l._immediateFn(function(){var g=p._state===1?_.onFulfilled:_.onRejected;if(g===null)return void(p._state===1?h:d)(_.promise,p._value);var I;try{I=g(p._value)}catch(P){return void d(_.promise,P)}h(_.promise,I)})}function h(p,_){try{if(_===p)throw new TypeError("A promise cannot be resolved with itself.");if(_&&(typeof _=="object"||typeof _=="function")){var g=_.then;if(_ instanceof l)return p._state=3,p._value=_,void f(p);if(typeof g=="function")return void y(c(g,_),p)}p._state=1,p._value=_,f(p)}catch(I){d(p,I)}}function d(p,_){p._state=2,p._value=_,f(p)}function f(p){p._state===2&&p._deferreds.length===0&&l._immediateFn(function(){p._handled||l._unhandledRejectionFn(p._value)});for(var _=0,g=p._deferreds.length;_<g;_++)u(p,p._deferreds[_]);p._deferreds=null}function m(p,_,g){this.onFulfilled=typeof p=="function"?p:null,this.onRejected=typeof _=="function"?_:null,this.promise=g}function y(p,_){var g=!1;try{p(function(I){g||(g=!0,h(_,I))},function(I){g||(g=!0,d(_,I))})}catch(I){if(g)return;g=!0,d(_,I)}}var v=setTimeout;l.prototype.catch=function(p){return this.then(null,p)},l.prototype.then=function(p,_){var g=new this.constructor(a);return u(this,new m(p,_,g)),g},l.all=function(p){var _=Array.prototype.slice.call(p);return new l(function(g,I){function P(b,T){try{if(T&&(typeof T=="object"||typeof T=="function")){var k=T.then;if(typeof k=="function")return void k.call(T,function(A){P(b,A)},I)}_[b]=T,--z==0&&g(_)}catch(A){I(A)}}if(_.length===0)return g([]);for(var z=_.length,Q=0;Q<_.length;Q++)P(Q,_[Q])})},l.resolve=function(p){return p&&typeof p=="object"&&p.constructor===l?p:new l(function(_){_(p)})},l.reject=function(p){return new l(function(_,g){g(p)})},l.race=function(p){return new l(function(_,g){for(var I=0,P=p.length;I<P;I++)p[I].then(_,g)})},l._immediateFn=typeof s=="function"&&function(p){s(p)}||function(p){v(p,0)},l._unhandledRejectionFn=function(p){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",p)},l._setImmediateFn=function(p){l._immediateFn=p},l._setUnhandledRejectionFn=function(p){l._unhandledRejectionFn=p},t!==void 0&&t.exports?t.exports=l:o.Promise||(o.Promise=l)})(this)}).call(r,i(18).setImmediate)},function(t,r,i){function s(a,c){this._id=a,this._clearFn=c}var o=Function.prototype.apply;r.setTimeout=function(){return new s(o.call(setTimeout,window,arguments),clearTimeout)},r.setInterval=function(){return new s(o.call(setInterval,window,arguments),clearInterval)},r.clearTimeout=r.clearInterval=function(a){a&&a.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(window,this._id)},r.enroll=function(a,c){clearTimeout(a._idleTimeoutId),a._idleTimeout=c},r.unenroll=function(a){clearTimeout(a._idleTimeoutId),a._idleTimeout=-1},r._unrefActive=r.active=function(a){clearTimeout(a._idleTimeoutId);var c=a._idleTimeout;c>=0&&(a._idleTimeoutId=setTimeout(function(){a._onTimeout&&a._onTimeout()},c))},i(19),r.setImmediate=setImmediate,r.clearImmediate=clearImmediate},function(t,r,i){(function(s,o){(function(a,c){function l(g){typeof g!="function"&&(g=new Function(""+g));for(var I=new Array(arguments.length-1),P=0;P<I.length;P++)I[P]=arguments[P+1];var z={callback:g,args:I};return y[m]=z,f(m),m++}function u(g){delete y[g]}function h(g){var I=g.callback,P=g.args;switch(P.length){case 0:I();break;case 1:I(P[0]);break;case 2:I(P[0],P[1]);break;case 3:I(P[0],P[1],P[2]);break;default:I.apply(c,P)}}function d(g){if(v)setTimeout(d,0,g);else{var I=y[g];if(I){v=!0;try{h(I)}finally{u(g),v=!1}}}}if(!a.setImmediate){var f,m=1,y={},v=!1,p=a.document,_=Object.getPrototypeOf&&Object.getPrototypeOf(a);_=_&&_.setTimeout?_:a,{}.toString.call(a.process)==="[object process]"?function(){f=function(g){o.nextTick(function(){d(g)})}}():function(){if(a.postMessage&&!a.importScripts){var g=!0,I=a.onmessage;return a.onmessage=function(){g=!1},a.postMessage("","*"),a.onmessage=I,g}}()?function(){var g="setImmediate$"+Math.random()+"$",I=function(P){P.source===a&&typeof P.data=="string"&&P.data.indexOf(g)===0&&d(+P.data.slice(g.length))};a.addEventListener?a.addEventListener("message",I,!1):a.attachEvent("onmessage",I),f=function(P){a.postMessage(g+P,"*")}}():a.MessageChannel?function(){var g=new MessageChannel;g.port1.onmessage=function(I){d(I.data)},f=function(I){g.port2.postMessage(I)}}():p&&"onreadystatechange"in p.createElement("script")?function(){var g=p.documentElement;f=function(I){var P=p.createElement("script");P.onreadystatechange=function(){d(I),P.onreadystatechange=null,g.removeChild(P),P=null},g.appendChild(P)}}():function(){f=function(g){setTimeout(d,0,g)}}(),_.setImmediate=l,_.clearImmediate=u}})(typeof self>"u"?s===void 0?this:s:self)}).call(r,i(7),i(20))},function(t,r){function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(g){if(d===setTimeout)return setTimeout(g,0);if((d===i||!d)&&setTimeout)return d=setTimeout,setTimeout(g,0);try{return d(g,0)}catch{try{return d.call(null,g,0)}catch{return d.call(this,g,0)}}}function a(g){if(f===clearTimeout)return clearTimeout(g);if((f===s||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(g);try{return f(g)}catch{try{return f.call(null,g)}catch{return f.call(this,g)}}}function c(){p&&y&&(p=!1,y.length?v=y.concat(v):_=-1,v.length&&l())}function l(){if(!p){var g=o(c);p=!0;for(var I=v.length;I;){for(y=v,v=[];++_<I;)y&&y[_].run();_=-1,I=v.length}y=null,p=!1,a(g)}}function u(g,I){this.fun=g,this.array=I}function h(){}var d,f,m=t.exports={};(function(){try{d=typeof setTimeout=="function"?setTimeout:i}catch{d=i}try{f=typeof clearTimeout=="function"?clearTimeout:s}catch{f=s}})();var y,v=[],p=!1,_=-1;m.nextTick=function(g){var I=new Array(arguments.length-1);if(arguments.length>1)for(var P=1;P<arguments.length;P++)I[P-1]=arguments[P];v.push(new u(g,I)),v.length!==1||p||o(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=h,m.addListener=h,m.once=h,m.off=h,m.removeListener=h,m.removeAllListeners=h,m.emit=h,m.prependListener=h,m.prependOnceListener=h,m.listeners=function(g){return[]},m.binding=function(g){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(g){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},function(t,r,i){i(22).polyfill()},function(t,r,i){function s(a,c){if(a==null)throw new TypeError("Cannot convert first argument to object");for(var l=Object(a),u=1;u<arguments.length;u++){var h=arguments[u];if(h!=null)for(var d=Object.keys(Object(h)),f=0,m=d.length;f<m;f++){var y=d[f],v=Object.getOwnPropertyDescriptor(h,y);v!==void 0&&v.enumerable&&(l[y]=h[y])}}return l}function o(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:s})}t.exports={assign:s,polyfill:o}},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(24),o=i(6),a=i(5),c=i(36),l=function(){for(var u=[],h=0;h<arguments.length;h++)u[h]=arguments[h];if(typeof window<"u"){var d=c.getOpts.apply(void 0,u);return new Promise(function(f,m){a.default.promise={resolve:f,reject:m},s.default(d),setTimeout(function(){o.openModal()})})}};l.close=o.onAction,l.getState=o.getState,l.setActionValue=a.setActionValue,l.stopLoading=o.stopLoading,l.setDefaults=c.setDefaults,r.default=l},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),o=i(0),a=o.default.MODAL,c=i(4),l=i(34),u=i(35),h=i(1);r.init=function(d){s.getNode(a)||(document.body||h.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),l.default(),c.default()),c.initModalContent(d),u.default(d)},r.default=r.init},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(0),o=s.default.MODAL;r.modalMarkup=`
  <div class="`+o+'" role="dialog" aria-modal="true"></div>',r.default=r.modalMarkup},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(0),o=s.default.OVERLAY,a=`<div 
    class="`+o+`"
    tabIndex="-1">
  </div>`;r.default=a},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(0),o=s.default.ICON;r.errorIconMarkup=function(){var a=o+"--error",c=a+"__line";return`
    <div class="`+a+`__x-mark">
      <span class="`+c+" "+c+`--left"></span>
      <span class="`+c+" "+c+`--right"></span>
    </div>
  `},r.warningIconMarkup=function(){var a=o+"--warning";return`
    <span class="`+a+`__body">
      <span class="`+a+`__dot"></span>
    </span>
  `},r.successIconMarkup=function(){var a=o+"--success";return`
    <span class="`+a+"__line "+a+`__line--long"></span>
    <span class="`+a+"__line "+a+`__line--tip"></span>

    <div class="`+a+`__ring"></div>
    <div class="`+a+`__hide-corners"></div>
  `}},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(0),o=s.default.CONTENT;r.contentMarkup=`
  <div class="`+o+`">

  </div>
`},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(0),o=s.default.BUTTON_CONTAINER,a=s.default.BUTTON,c=s.default.BUTTON_LOADER;r.buttonMarkup=`
  <div class="`+o+`">

    <button
      class="`+a+`"
    ></button>

    <div class="`+c+`">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>
`},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(4),o=i(2),a=i(0),c=a.default.ICON,l=a.default.ICON_CUSTOM,u=["error","warning","success","info"],h={error:o.errorIconMarkup(),warning:o.warningIconMarkup(),success:o.successIconMarkup()},d=function(y,v){var p=c+"--"+y;v.classList.add(p);var _=h[y];_&&(v.innerHTML=_)},f=function(y,v){v.classList.add(l);var p=document.createElement("img");p.src=y,v.appendChild(p)},m=function(y){if(y){var v=s.injectElIntoModal(o.iconMarkup);u.includes(y)?d(y,v):f(y,v)}};r.default=m},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(2),o=i(4),a=function(c){navigator.userAgent.includes("AppleWebKit")&&(c.style.display="none",c.offsetHeight,c.style.display="")};r.initTitle=function(c){if(c){var l=o.injectElIntoModal(s.titleMarkup);l.textContent=c,a(l)}},r.initText=function(c){if(c){var l=document.createDocumentFragment();c.split(`
`).forEach(function(h,d,f){l.appendChild(document.createTextNode(h)),d<f.length-1&&l.appendChild(document.createElement("br"))});var u=o.injectElIntoModal(s.textMarkup);u.appendChild(l),a(u)}}},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),o=i(4),a=i(0),c=a.default.BUTTON,l=a.default.DANGER_BUTTON,u=i(3),h=i(2),d=i(6),f=i(5),m=function(v,p,_){var g=p.text,I=p.value,P=p.className,z=p.closeModal,Q=s.stringToNode(h.buttonMarkup),b=Q.querySelector("."+c),T=c+"--"+v;b.classList.add(T),P&&(Array.isArray(P)?P:P.split(" ")).filter(function(A){return A.length>0}).forEach(function(A){b.classList.add(A)}),_&&v===u.CONFIRM_KEY&&b.classList.add(l),b.textContent=g;var k={};return k[v]=I,f.setActionValue(k),f.setActionOptionsFor(v,{closeModal:z}),b.addEventListener("click",function(){return d.onAction(v)}),Q},y=function(v,p){var _=o.injectElIntoModal(h.footerMarkup);for(var g in v){var I=v[g],P=m(g,I,p);I.visible&&_.appendChild(P)}_.children.length===0&&_.remove()};r.default=y},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(3),o=i(4),a=i(2),c=i(5),l=i(6),u=i(0),h=u.default.CONTENT,d=function(y){y.addEventListener("input",function(v){var p=v.target,_=p.value;c.setActionValue(_)}),y.addEventListener("keyup",function(v){if(v.key==="Enter")return l.onAction(s.CONFIRM_KEY)}),setTimeout(function(){y.focus(),c.setActionValue("")},0)},f=function(y,v,p){var _=document.createElement(v),g=h+"__"+v;_.classList.add(g);for(var I in p){var P=p[I];_[I]=P}v==="input"&&d(_),y.appendChild(_)},m=function(y){if(y){var v=o.injectElIntoModal(a.contentMarkup),p=y.element,_=y.attributes;typeof p=="string"?f(v,p,_):v.appendChild(p)}};r.default=m},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),o=i(2),a=function(){var c=s.stringToNode(o.overlayMarkup);document.body.appendChild(c)};r.default=a},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(5),o=i(6),a=i(1),c=i(3),l=i(0),u=l.default.MODAL,h=l.default.BUTTON,d=l.default.OVERLAY,f=function(A){A.preventDefault(),_()},m=function(A){A.preventDefault(),g()},y=function(A){if(s.default.isOpen)switch(A.key){case"Escape":return o.onAction(c.CANCEL_KEY)}},v=function(A){if(s.default.isOpen)switch(A.key){case"Tab":return f(A)}},p=function(A){if(s.default.isOpen)return A.key==="Tab"&&A.shiftKey?m(A):void 0},_=function(){var A=a.getNode(h);A&&(A.tabIndex=0,A.focus())},g=function(){var A=a.getNode(u),U=A.querySelectorAll("."+h),F=U.length-1,Y=U[F];Y&&Y.focus()},I=function(A){A[A.length-1].addEventListener("keydown",v)},P=function(A){A[0].addEventListener("keydown",p)},z=function(){var A=a.getNode(u),U=A.querySelectorAll("."+h);U.length&&(I(U),P(U))},Q=function(A){if(a.getNode(d)===A.target)return o.onAction(c.CANCEL_KEY)},b=function(A){var U=a.getNode(d);U.removeEventListener("click",Q),A&&U.addEventListener("click",Q)},T=function(A){s.default.timer&&clearTimeout(s.default.timer),A&&(s.default.timer=window.setTimeout(function(){return o.onAction(c.CANCEL_KEY)},A))},k=function(A){A.closeOnEsc?document.addEventListener("keyup",y):document.removeEventListener("keyup",y),A.dangerMode?_():g(),z(),b(A.closeOnClickOutside),T(A.timer)};r.default=k},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),o=i(3),a=i(37),c=i(38),l={title:null,text:null,icon:null,buttons:o.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},u=Object.assign({},l);r.setDefaults=function(p){u=Object.assign({},l,p)};var h=function(p){var _=p&&p.button,g=p&&p.buttons;return _!==void 0&&g!==void 0&&s.throwErr("Cannot set both 'button' and 'buttons' options!"),_!==void 0?{confirm:_}:g},d=function(p){return s.ordinalSuffixOf(p+1)},f=function(p,_){s.throwErr(d(_)+" argument ('"+p+"') is invalid")},m=function(p,_){var g=p+1,I=_[g];s.isPlainObject(I)||I===void 0||s.throwErr("Expected "+d(g)+" argument ('"+I+"') to be a plain object")},y=function(p,_){var g=p+1,I=_[g];I!==void 0&&s.throwErr("Unexpected "+d(g)+" argument ("+I+")")},v=function(p,_,g,I){var P=typeof _,z=P==="string",Q=_ instanceof Element;if(z){if(g===0)return{text:_};if(g===1)return{text:_,title:I[0]};if(g===2)return m(g,I),{icon:_};f(_,g)}else{if(Q&&g===0)return m(g,I),{content:_};if(s.isPlainObject(_))return y(g,I),_;f(_,g)}};r.getOpts=function(){for(var p=[],_=0;_<arguments.length;_++)p[_]=arguments[_];var g={};p.forEach(function(z,Q){var b=v(0,z,Q,p);Object.assign(g,b)});var I=h(g);g.buttons=o.getButtonListOpts(I),delete g.button,g.content=a.getContentOpts(g.content);var P=Object.assign({},l,u,g);return Object.keys(P).forEach(function(z){c.DEPRECATED_OPTS[z]&&c.logDeprecation(z)}),P}},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),o={element:"input",attributes:{placeholder:""}};r.getContentOpts=function(a){var c={};return s.isPlainObject(a)?Object.assign(c,a):a instanceof Element?{element:a}:a==="input"?o:null}},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.logDeprecation=function(s){var o=r.DEPRECATED_OPTS[s],a=o.onlyRename,c=o.replacement,l=o.subOption,u=o.link,h=a?"renamed":"deprecated",d='SweetAlert warning: "'+s+'" option has been '+h+".";c&&(d+=" Please use"+(l?' "'+l+'" in ':" ")+'"'+c+'" instead.');var f="https://sweetalert.js.org";d+=u?" More details: "+f+u:" More details: "+f+"/guides/#upgrading-from-1x",console.warn(d)},r.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])})})(Qh);const gn=ww(Qh.exports),Ew=async(n,e,t,r)=>{document.body.classList.add("no-bg");const i=document.createElement("section");i.classList.add("profile_section");let s="";const o={weekday:"long",year:"numeric",month:"long",day:"numeric"},a=sessionStorage.getItem("userId"),l=(await Gh()).filter(m=>m.userId===a);l.forEach((m,y)=>{const v=m.photo||Wn,p=document.createElement("div");p.innerHTML=`
    <div class="div_post">
      <div class="icon_perfil">
        <div class="perfil_post">
         ${v?` <img src="${v}" alt="random image">`:""}
          <div class="drop_down">
            <i class="fa-solid fa-ellipsis-vertical fa-2xl" id="drop_btn"></i>
            <div id="myDropdown" class="drop_down_content">
              <a href="" class ="delete_post" id="deleteButton-${y}">Borrar</a>
              <a href="" data-content="${m.content}" data-id="${m.id}" class="edit_post">Editar</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container_text">
        <h3>${m.name}</h3>
        <h4>${m.creationDate.toDate().toLocaleDateString("es-CL",o)}</h4>
        <p><textarea readonly id="text-${m.id}" class="input-text-area" contenteditable >${m.content}</textarea></p>
        <div class="buttons-edit" id="buttons-${m.id}">
          <button class="button-edit">Actualizar post</button>
          <button class="button-cancel">Cancelar</button>
        </div>
      </div>
    </div>`,s+=p.innerHTML});const u=await r(),f=`
    <div class="container_profile">
      <nav class="nav_profile">
       <i class="fa-solid fa-arrow-left fa-xl" style="color: #636060; cursor: pointer;" id="go_back"></i>
      </nav>
      <div class="edit_profile">
       <div>
         <img src="${await e()||Wn}" alt="random image" id="profile_photo_change" style="border-radius: 50px; width: 65px;">
       </div>
        <p id="current_user_name" >${u}</p>
      </div>
  </div>


  </div>

    </div>
  <main id="main_feed">${s}</main>
</div>
  <i class="fa-solid fa-circle-plus fa-3x" id="add_post" style="color: #f1b33c;"></i>
<footer></footer>`;return i.innerHTML=f,i.querySelector("#go_back").addEventListener("click",()=>{n("/feed")}),i.querySelector("#add_post").addEventListener("click",()=>{n("/create_post")}),i.querySelectorAll(".drop_down").forEach(m=>{m.addEventListener("click",()=>{m.querySelector(".drop_down_content").classList.toggle("show")})}),i.addEventListener("click",m=>{m.target.classList.contains("fa-ellipsis-vertical")||i.querySelectorAll(".drop_down").forEach(y=>{y.querySelector(".drop_down_content").classList.remove("show")})}),i.querySelectorAll(".edit_post").forEach(m=>{m.addEventListener("click",y=>{y.preventDefault();const v=`#buttons-${m.getAttribute("data-id")}`,p=`#text-${m.getAttribute("data-id")}`,_=`#text-${m.getAttribute("data-content")}`;i.querySelector(v).style.display="block",i.querySelector(p).classList.add("textarea-edit"),i.querySelector(p).removeAttribute("readonly"),i.querySelector(p).focus(),i.querySelector(".button-edit").addEventListener("click",g=>{g.preventDefault(),lw(m.getAttribute("data-id"),i.querySelector(p).value).then(()=>{gn({title:"Perfecto!",text:"El post fue editado con exito",icon:"success"}),i.querySelector(p).classList.remove("textarea-edit"),i.querySelector(v).style.display="none",i.querySelector(p).setAttribute("readonly",!0)},()=>{gn({title:"Ups!",text:"El post no pudo ser editado",icon:"warning"})})}),i.querySelector(".button-cancel").addEventListener("click",g=>{g.preventDefault(),i.querySelector(p).value=_,i.querySelector(p).classList.remove("textarea-edit"),i.querySelector(v).style.display="none",i.querySelector(p).setAttribute("readonly",!0)})})}),i.querySelector("#main_feed").addEventListener("click",async m=>{m.preventDefault();const y=m.target;if(y.classList.contains("delete_post")){const v=y.id.split("-")[1];gn({title:"\xBFEst\xE1s seguro?",text:"Una vez eliminado, no podr\xE1s recuperar este post",icon:"warning",buttons:!0,dangerMode:!0}).then(p=>{p?uw(l[v].id,l[v].userId).then(()=>{console.log(`\xC9xito: El post ${l[v].id} se ha eliminado correctamente.`),gn("!Poof! !Tu post fue eliminado",{icon:"success"}).then(()=>{window.location.reload()})}).catch(_=>{console.error(`Error al eliminar el post ${l[v].id}:`,_)}):gn("!Tu post est\xE1 guardado!")})}}),i};let Yh="";function kc(){return Yh}let Xh="";function Oc(){return Xh}let Jh="";function Nc(){return Jh}const Iw=[{path:"/",component:dw},{path:"/error",component:fw},{path:"/feed",component:gw},{path:"/new_account",component:pw},{path:"/forget_password",component:_w},{path:"/create_post",component:yw},{path:"/profile",component:Ew}],Zh="/",Je=document.getElementById("root");async function Ft(n){const e=Iw.find(r=>r.path===n);if(["/new_account","/error","/forget_password","/"].includes(n))if(e&&e.component){for(window.history.pushState({},e.path,window.location.origin+e.path);Je.firstChild;)Je.removeChild(Je.firstChild);Je.appendChild(await e.component(Ft,Oc,kc,Nc))}else Ft("/error");else if(console.log(sessionStorage.getItem("loggedEmail")),sessionStorage.getItem("loggedEmail")!==null){for(window.history.pushState({},e.path,window.location.origin+e.path);Je.firstChild;)Je.removeChild(Je.firstChild);Je.appendChild(await e.component(Ft,Oc,kc,Nc))}else Ft(Zh)}Dp(Tl(),async n=>{n?(console.log("Usuario autenticado"),Yh=n.uid,Xh=n.photoURL,Jh=n.displayName):(sessionStorage.removeItem("userId"),sessionStorage.removeItem("loggedEmail"))});window.onpopstate=()=>{Ft(window.location.pathname)};Ft(window.location.pathname||Zh);
