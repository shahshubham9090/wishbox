import{g as D,_ as R,a as Lt,b as Dt,c as wn,d as Tn,E as ze,q as ae,e as oe,f as En,F as Ge,h as I,i as bn,j as kn,S as ue,k as he,L as Sn,l as jt,m as Nn,n as Cn,o as An,p as Rn,r as Pn,s as ot,C as ct,t as lt,u as On,v as o,w as m,x as ve,P as xn,y as Mt,z as Re,A as Ln,B as Dn,D as jn,G as Ee,H as Mn,I as Un,J as A,K as Fn,M as dt,N as ut,O as ht,Q as Vn,R as Ue,T as Wn,U as $n,V as We,W as Hn,X as $e,Y as qn,Z as Bn}from"./index-DQiqvYZr.js";function Je(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Ut(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kn=Ut,Ft=new ze("auth","Firebase",Ut());/**
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
 */const be=new Sn("@firebase/auth");function zn(n,...e){be.logLevel<=jt.WARN&&be.warn(`Auth (${ue}): ${n}`,...e)}function ye(n,...e){be.logLevel<=jt.ERROR&&be.error(`Auth (${ue}): ${n}`,...e)}/**
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
 */function E(n,...e){throw Ye(n,...e)}function k(n,...e){return Ye(n,...e)}function Vt(n,e,t){const i=Object.assign(Object.assign({},Kn()),{[e]:t});return new ze("auth","Firebase",i).create(e,{appName:n.name})}function H(n){return Vt(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ye(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Ft.create(n,...e)}function u(n,e,...t){if(!n)throw Ye(e,...t)}function P(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ye(e),new Error(e)}function L(n,e){n||P(e)}/**
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
 */function He(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Gn(){return pt()==="http:"||pt()==="https:"}function pt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Jn(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gn()||Rn()||"connection"in navigator)?navigator.onLine:!0}function Yn(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class pe{constructor(e,t){this.shortDelay=e,this.longDelay=t,L(t>e,"Short delay should be less than long delay!"),this.isMobile=Nn()||Cn()}get(){return Jn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xe(n,e){L(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wt{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;P("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;P("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;P("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Qn=new pe(3e4,6e4);function J(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function q(n,e,t,i,s={}){return $t(n,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const l=he(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:c},r);return Pn()||(d.referrerPolicy="no-referrer"),Wt.fetch()(Ht(n,n.config.apiHost,t,l),d)})}async function $t(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Xn),e);try{const s=new ei(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw _e(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _e(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw _e(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw _e(n,"user-disabled",a);const h=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Vt(n,h,d);E(n,h)}}catch(s){if(s instanceof Ge)throw s;E(n,"network-request-failed",{message:String(s)})}}async function Pe(n,e,t,i,s={}){const r=await q(n,e,t,i,s);return"mfaPendingCredential"in r&&E(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Ht(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Xe(n.config,s):`${n.config.apiScheme}://${s}`}function Zn(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ei{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(k(this.auth,"network-request-failed")),Qn.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _e(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=k(n,e,i);return s.customData._tokenResponse=t,s}function ft(n){return n!==void 0&&n.enterprise!==void 0}class ti{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Zn(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ni(n,e){return q(n,"GET","/v2/recaptchaConfig",J(n,e))}/**
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
 */async function ii(n,e){return q(n,"POST","/v1/accounts:delete",e)}async function qt(n,e){return q(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ce(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function si(n,e=!1){const t=D(n),i=await t.getIdToken(e),s=Qe(i);u(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ce(Fe(s.auth_time)),issuedAtTime:ce(Fe(s.iat)),expirationTime:ce(Fe(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Fe(n){return Number(n)*1e3}function Qe(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ye("JWT malformed, contained fewer than 3 sections"),null;try{const s=An(t);return s?JSON.parse(s):(ye("Failed to decode base64 JWT payload"),null)}catch(s){return ye("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mt(n){const e=Qe(n);return u(e,"internal-error"),u(typeof e.exp<"u","internal-error"),u(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function le(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ge&&ri(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ri({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ai{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qe{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ce(this.lastLoginAt),this.creationTime=ce(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ke(n){var e;const t=n.auth,i=await n.getIdToken(),s=await le(n,qt(t,{idToken:i}));u(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Bt(r.providerUserInfo):[],l=ci(n.providerData,a),c=n.isAnonymous,d=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),h=c?d:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new qe(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function oi(n){const e=D(n);await ke(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ci(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Bt(n){return n.map(e=>{var{providerId:t}=e,i=Je(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function li(n,e){const t=await $t(n,{},async()=>{const i=he({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,a=Ht(n,s,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Wt.fetch()(a,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function di(n,e){return q(n,"POST","/v2/accounts:revokeToken",J(n,e))}/**
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
 */class Q{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){u(e.idToken,"internal-error"),u(typeof e.idToken<"u","internal-error"),u(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){u(e.length!==0,"internal-error");const t=mt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(u(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await li(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,a=new Q;return i&&(u(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(u(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(u(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Q,this.toJSON())}_performRefresh(){return P("not implemented")}}/**
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
 */function U(n,e){u(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class O{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Je(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ai(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qe(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await le(this,this.stsTokenManager.getToken(this.auth,e));return u(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return si(this,e)}reload(){return oi(this)}_assign(e){this!==e&&(u(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new O(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){u(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ke(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(R(this.auth.app))return Promise.reject(H(this.auth));const e=await this.getIdToken();return await le(this,ii(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,a,l,c,d,h;const p=(i=t.displayName)!==null&&i!==void 0?i:void 0,y=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(a=t.photoURL)!==null&&a!==void 0?a:void 0,w=(l=t.tenantId)!==null&&l!==void 0?l:void 0,b=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,j=(d=t.createdAt)!==null&&d!==void 0?d:void 0,M=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:se,isAnonymous:N,providerData:B,stsTokenManager:ge}=t;u(T&&ge,e,"internal-error");const De=Q.fromJSON(this.name,ge);u(typeof T=="string",e,"internal-error"),U(p,e.name),U(y,e.name),u(typeof se=="boolean",e,"internal-error"),u(typeof N=="boolean",e,"internal-error"),U(f,e.name),U(_,e.name),U(w,e.name),U(b,e.name),U(j,e.name),U(M,e.name);const re=new O({uid:T,auth:e,email:y,emailVerified:se,displayName:p,isAnonymous:N,photoURL:_,phoneNumber:f,tenantId:w,stsTokenManager:De,createdAt:j,lastLoginAt:M});return B&&Array.isArray(B)&&(re.providerData=B.map(g=>Object.assign({},g))),b&&(re._redirectEventId=b),re}static async _fromIdTokenResponse(e,t,i=!1){const s=new Q;s.updateFromServerResponse(t);const r=new O({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ke(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];u(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Bt(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new Q;l.updateFromIdToken(i);const c=new O({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new qe(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,d),c}}/**
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
 */const gt=new Map;function x(n){L(n instanceof Function,"Expected a class definition");let e=gt.get(n);return e?(L(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gt.set(n,e),e)}/**
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
 */class Kt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kt.type="NONE";const vt=Kt;/**
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
 */function Ie(n,e,t){return`firebase:${n}:${e}:${t}`}class Z{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ie(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ie("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?O._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Z(x(vt),e,i);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=s[0]||x(vt);const a=Ie(i,e.config.apiKey,e.name);let l=null;for(const d of t)try{const h=await d._get(a);if(h){const p=O._fromJSON(e,h);d!==r&&(l=p),r=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Z(r,e,i):(r=c[0],l&&await r._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(a)}catch{}})),new Z(r,e,i))}}/**
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
 */function _t(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qt(e))return"Blackberry";if(Zt(e))return"Webos";if(Gt(e))return"Safari";if((e.includes("chrome/")||Jt(e))&&!e.includes("edge/"))return"Chrome";if(Xt(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function zt(n=I()){return/firefox\//i.test(n)}function Gt(n=I()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jt(n=I()){return/crios\//i.test(n)}function Yt(n=I()){return/iemobile/i.test(n)}function Xt(n=I()){return/android/i.test(n)}function Qt(n=I()){return/blackberry/i.test(n)}function Zt(n=I()){return/webos/i.test(n)}function Ze(n=I()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ui(n=I()){var e;return Ze(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hi(){return bn()&&document.documentMode===10}function en(n=I()){return Ze(n)||Xt(n)||Zt(n)||Qt(n)||/windows phone/i.test(n)||Yt(n)}/**
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
 */function tn(n,e=[]){let t;switch(n){case"Browser":t=_t(I());break;case"Worker":t=`${_t(I())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ue}/${i}`}/**
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
 */class pi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((a,l)=>{try{const c=e(r);a(c)}catch(c){l(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function fi(n,e={}){return q(n,"GET","/v2/passwordPolicy",J(n,e))}/**
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
 */const mi=6;class gi{constructor(e){var t,i,s,r;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:mi,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class vi{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yt(this),this.idTokenSubscription=new yt(this),this.beforeStateQueue=new pi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ft,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=x(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Z.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qt(this,{idToken:e}),i=await O._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(R(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return u(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ke(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yn()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(R(this.app))return Promise.reject(H(this));const t=e?D(e):null;return t&&u(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&u(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return R(this.app)?Promise.reject(H(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return R(this.app)?Promise.reject(H(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(x(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fi(this),t=new gi(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ze("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await di(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&x(e)||this._popupRedirectResolver;u(t,this,"argument-error"),this.redirectPersistenceManager=await Z.create(this,[x(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(u(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return u(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zn(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ne(n){return D(n)}class yt{constructor(e){this.auth=e,this.observer=null,this.addObserver=On(t=>this.observer=t)}get next(){return u(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Oe={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _i(n){Oe=n}function nn(n){return Oe.loadJS(n)}function yi(){return Oe.recaptchaEnterpriseScript}function Ii(){return Oe.gapiScript}function wi(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Ti="recaptcha-enterprise",Ei="NO_RECAPTCHA";class bi{constructor(e){this.type=Ti,this.auth=ne(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,l)=>{ni(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new ti(c);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,a(d.siteKey)}}).catch(c=>{l(c)})})}function s(r,a,l){const c=window.grecaptcha;ft(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(d=>{a(d)}).catch(()=>{a(Ei)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,a)=>{i(this.auth).then(l=>{if(!t&&ft(window.grecaptcha))s(l,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=yi();c.length!==0&&(c+=l),nn(c).then(()=>{s(l,r,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function It(n,e,t,i=!1){const s=new bi(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const a=Object.assign({},e);return i?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function wt(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await It(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await It(n,e,t,t==="getOobCode");return i(n,a)}else return Promise.reject(r)})}/**
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
 */function ki(n,e){const t=Lt(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(En(r,e??{}))return s;E(s,"already-initialized")}return t.initialize({options:e})}function Si(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(x);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ni(n,e,t){const i=ne(n);u(i._canInitEmulator,i,"emulator-config-failed"),u(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=sn(e),{host:a,port:l}=Ci(e),c=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${a}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ai()}function sn(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ci(n){const e=sn(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Tt(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:Tt(a)}}}function Tt(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ai(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return P("not implemented")}_getIdTokenResponse(e){return P("not implemented")}_linkToIdToken(e,t){return P("not implemented")}_getReauthenticationResolver(e){return P("not implemented")}}async function Ri(n,e){return q(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Pi(n,e){return Pe(n,"POST","/v1/accounts:signInWithPassword",J(n,e))}/**
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
 */async function Oi(n,e){return Pe(n,"POST","/v1/accounts:signInWithEmailLink",J(n,e))}async function xi(n,e){return Pe(n,"POST","/v1/accounts:signInWithEmailLink",J(n,e))}/**
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
 */class de extends et{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new de(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new de(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wt(e,t,"signInWithPassword",Pi);case"emailLink":return Oi(e,{email:this._email,oobCode:this._password});default:E(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wt(e,i,"signUpPassword",Ri);case"emailLink":return xi(e,{idToken:t,email:this._email,oobCode:this._password});default:E(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ee(n,e){return Pe(n,"POST","/v1/accounts:signInWithIdp",J(n,e))}/**
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
 */const Li="http://localhost";class G extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new G(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):E("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Je(t,["providerId","signInMethod"]);if(!i||!s)return null;const a=new G(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ee(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ee(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ee(e,t)}buildRequest(){const e={requestUri:Li,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=he(t)}return e}}/**
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
 */function Di(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ji(n){const e=ae(oe(n)).link,t=e?ae(oe(e)).deep_link_id:null,i=ae(oe(n)).deep_link_id;return(i?ae(oe(i)).link:null)||i||t||e||n}class tt{constructor(e){var t,i,s,r,a,l;const c=ae(oe(e)),d=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(i=c.oobCode)!==null&&i!==void 0?i:null,p=Di((s=c.mode)!==null&&s!==void 0?s:null);u(d&&h&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=h,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=ji(e);try{return new tt(t)}catch{return null}}}/**
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
 */class ie{constructor(){this.providerId=ie.PROVIDER_ID}static credential(e,t){return de._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=tt.parseLink(t);return u(i,"argument-error"),de._fromEmailAndCode(e,i.code,i.tenantId)}}ie.PROVIDER_ID="password";ie.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ie.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fe extends rn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class F extends fe{constructor(){super("facebook.com")}static credential(e){return G._fromParams({providerId:F.PROVIDER_ID,signInMethod:F.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return F.credentialFromTaggedObject(e)}static credentialFromError(e){return F.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return F.credential(e.oauthAccessToken)}catch{return null}}}F.FACEBOOK_SIGN_IN_METHOD="facebook.com";F.PROVIDER_ID="facebook.com";/**
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
 */class V extends fe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return G._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return V.credential(t,i)}catch{return null}}}V.GOOGLE_SIGN_IN_METHOD="google.com";V.PROVIDER_ID="google.com";/**
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
 */class W extends fe{constructor(){super("github.com")}static credential(e){return G._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return W.credential(e.oauthAccessToken)}catch{return null}}}W.GITHUB_SIGN_IN_METHOD="github.com";W.PROVIDER_ID="github.com";/**
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
 */class $ extends fe{constructor(){super("twitter.com")}static credential(e,t){return G._fromParams({providerId:$.PROVIDER_ID,signInMethod:$.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $.credentialFromTaggedObject(e)}static credentialFromError(e){return $.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return $.credential(t,i)}catch{return null}}}$.TWITTER_SIGN_IN_METHOD="twitter.com";$.PROVIDER_ID="twitter.com";/**
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
 */class te{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await O._fromIdTokenResponse(e,i,s),a=Et(i);return new te({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Et(i);return new te({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Et(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Se extends Ge{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Se.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Se(e,t,i,s)}}function an(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Se._fromErrorAndOperation(n,r,e,i):r})}async function Mi(n,e,t=!1){const i=await le(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return te._forOperation(n,"link",i)}/**
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
 */async function Ui(n,e,t=!1){const{auth:i}=n;if(R(i.app))return Promise.reject(H(i));const s="reauthenticate";try{const r=await le(n,an(i,s,e,n),t);u(r.idToken,i,"internal-error");const a=Qe(r.idToken);u(a,i,"internal-error");const{sub:l}=a;return u(n.uid===l,i,"user-mismatch"),te._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&E(i,"user-mismatch"),r}}/**
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
 */async function on(n,e,t=!1){if(R(n.app))return Promise.reject(H(n));const i="signIn",s=await an(n,i,e),r=await te._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Fi(n,e){return on(ne(n),e)}/**
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
 */async function Vi(n){const e=ne(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Wi(n,e,t){return R(n.app)?Promise.reject(H(n)):Fi(D(n),ie.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Vi(n),i})}function $i(n,e,t,i){return D(n).onIdTokenChanged(e,t,i)}function Hi(n,e,t){return D(n).beforeAuthStateChanged(e,t)}function qi(n,e,t,i){return D(n).onAuthStateChanged(e,t,i)}function Bi(n){return D(n).signOut()}const Ne="__sak";/**
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
 */class cn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ne,"1"),this.storage.removeItem(Ne),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ki=1e3,zi=10;class ln extends cn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=en(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);hi()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zi):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Ki)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ln.type="LOCAL";const Gi=ln;/**
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
 */class dn extends cn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dn.type="SESSION";const un=dn;/**
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
 */function Ji(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xe{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new xe(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,r)),c=await Ji(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xe.receivers=[];/**
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
 */function nt(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Yi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((l,c)=>{const d=nt("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(y.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function S(){return window}function Xi(n){S().location.href=n}/**
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
 */function hn(){return typeof S().WorkerGlobalScope<"u"&&typeof S().importScripts=="function"}async function Qi(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zi(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function es(){return hn()?self:null}/**
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
 */const pn="firebaseLocalStorageDb",ts=1,Ce="firebaseLocalStorage",fn="fbase_key";class me{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Le(n,e){return n.transaction([Ce],e?"readwrite":"readonly").objectStore(Ce)}function ns(){const n=indexedDB.deleteDatabase(pn);return new me(n).toPromise()}function Be(){const n=indexedDB.open(pn,ts);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ce,{keyPath:fn})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ce)?e(i):(i.close(),await ns(),e(await Be()))})})}async function bt(n,e,t){const i=Le(n,!0).put({[fn]:e,value:t});return new me(i).toPromise()}async function is(n,e){const t=Le(n,!1).get(e),i=await new me(t).toPromise();return i===void 0?null:i.value}function kt(n,e){const t=Le(n,!0).delete(e);return new me(t).toPromise()}const ss=800,rs=3;class mn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Be(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>rs)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xe._getInstance(es()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Qi(),!this.activeServiceWorker)return;this.sender=new Yi(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zi()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Be();return await bt(e,Ne,"1"),await kt(e,Ne),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>bt(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>is(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Le(s,!1).getAll();return new me(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ss)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mn.type="LOCAL";const as=mn;new pe(3e4,6e4);/**
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
 */function os(n,e){return e?x(e):(u(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class it extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ee(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ee(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ee(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cs(n){return on(n.auth,new it(n),n.bypassAuthState)}function ls(n){const{auth:e,user:t}=n;return u(t,e,"internal-error"),Ui(t,new it(n),n.bypassAuthState)}async function ds(n){const{auth:e,user:t}=n;return u(t,e,"internal-error"),Mi(t,new it(n),n.bypassAuthState)}/**
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
 */class gn{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cs;case"linkViaPopup":case"linkViaRedirect":return ds;case"reauthViaPopup":case"reauthViaRedirect":return ls;default:E(this.auth,"internal-error")}}resolve(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const us=new pe(2e3,1e4);class X extends gn{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,X.currentPopupAction&&X.currentPopupAction.cancel(),X.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return u(e,this.auth,"internal-error"),e}async onExecution(){L(this.filter.length===1,"Popup operations only handle one event");const e=nt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(k(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(k(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,X.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(k(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,us.get())};e()}}X.currentPopupAction=null;/**
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
 */const hs="pendingRedirect",we=new Map;class ps extends gn{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=we.get(this.auth._key());if(!e){try{const i=await fs(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}we.set(this.auth._key(),e)}return this.bypassAuthState||we.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fs(n,e){const t=vs(e),i=gs(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function ms(n,e){we.set(n._key(),e)}function gs(n){return x(n._redirectPersistence)}function vs(n){return Ie(hs,n.config.apiKey,n.name)}async function _s(n,e,t=!1){if(R(n.app))return Promise.reject(H(n));const i=ne(n),s=os(i,e),a=await new ps(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
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
 */const ys=10*60*1e3;class Is{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ws(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!vn(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(k(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ys&&this.cachedEventUids.clear(),this.cachedEventUids.has(St(e))}saveEventToCache(e){this.cachedEventUids.add(St(e)),this.lastProcessedEventTime=Date.now()}}function St(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function vn({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ws(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vn(n);default:return!1}}/**
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
 */async function Ts(n,e={}){return q(n,"GET","/v1/projects",e)}/**
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
 */const Es=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bs=/^https?/;async function ks(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ts(n);for(const t of e)try{if(Ss(t))return}catch{}E(n,"unauthorized-domain")}function Ss(n){const e=He(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!bs.test(t))return!1;if(Es.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Ns=new pe(3e4,6e4);function Nt(){const n=S().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Cs(n){return new Promise((e,t)=>{var i,s,r;function a(){Nt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nt(),t(k(n,"network-request-failed"))},timeout:Ns.get()})}if(!((s=(i=S().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=S().gapi)===null||r===void 0)&&r.load)a();else{const l=wi("iframefcb");return S()[l]=()=>{gapi.load?a():t(k(n,"network-request-failed"))},nn(`${Ii()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Te=null,e})}let Te=null;function As(n){return Te=Te||Cs(n),Te}/**
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
 */const Rs=new pe(5e3,15e3),Ps="__/auth/iframe",Os="emulator/auth/iframe",xs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ls=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ds(n){const e=n.config;u(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xe(e,Os):`https://${n.config.authDomain}/${Ps}`,i={apiKey:e.apiKey,appName:n.name,v:ue},s=Ls.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${he(i).slice(1)}`}async function js(n){const e=await As(n),t=S().gapi;return u(t,n,"internal-error"),e.open({where:document.body,url:Ds(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xs,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=k(n,"network-request-failed"),l=S().setTimeout(()=>{r(a)},Rs.get());function c(){S().clearTimeout(l),s(i)}i.ping(c).then(c,()=>{r(a)})}))}/**
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
 */const Ms={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Us=500,Fs=600,Vs="_blank",Ws="http://localhost";class Ct{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $s(n,e,t,i=Us,s=Fs){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Ms),{width:i.toString(),height:s.toString(),top:r,left:a}),d=I().toLowerCase();t&&(l=Jt(d)?Vs:t),zt(d)&&(e=e||Ws,c.scrollbars="yes");const h=Object.entries(c).reduce((y,[f,_])=>`${y}${f}=${_},`,"");if(ui(d)&&l!=="_self")return Hs(e||"",l),new Ct(null);const p=window.open(e||"",l,h);u(p,n,"popup-blocked");try{p.focus()}catch{}return new Ct(p)}function Hs(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const qs="__/auth/handler",Bs="emulator/auth/handler",Ks=encodeURIComponent("fac");async function At(n,e,t,i,s,r){u(n.config.authDomain,n,"auth-domain-config-required"),u(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ue,eventId:s};if(e instanceof rn){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",kn(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))a[h]=p}if(e instanceof fe){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(a.scopes=h.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await n._getAppCheckToken(),d=c?`#${Ks}=${encodeURIComponent(c)}`:"";return`${zs(n)}?${he(l).slice(1)}${d}`}function zs({config:n}){return n.emulator?Xe(n,Bs):`https://${n.authDomain}/${qs}`}/**
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
 */const Ve="webStorageSupport";class Gs{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=un,this._completeRedirectFn=_s,this._overrideRedirectResult=ms}async _openPopup(e,t,i,s){var r;L((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await At(e,t,i,He(),s);return $s(e,a,nt())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await At(e,t,i,He(),s);return Xi(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(L(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await js(e),i=new Is(e);return t.register("authEvent",s=>(u(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ve,{type:Ve},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ve];a!==void 0&&t(!!a),E(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ks(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return en()||Gt()||Ze()}}const Js=Gs;var Rt="@firebase/auth",Pt="1.7.9";/**
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
 */class Ys{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){u(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Xs(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qs(n){ot(new ct("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;u(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tn(n)},d=new vi(i,s,r,c);return Si(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ot(new ct("auth-internal",e=>{const t=ne(e.getProvider("auth").getImmediate());return(i=>new Ys(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(Rt,Pt,Xs(n)),lt(Rt,Pt,"esm2017")}/**
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
 */const Zs=5*60,er=Dt("authIdTokenMaxAge")||Zs;let Ot=null;const tr=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>er)return;const s=t==null?void 0:t.token;Ot!==s&&(Ot=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nr(n=Tn()){const e=Lt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ki(n,{popupRedirectResolver:Js,persistence:[as,Gi,un]}),i=Dt("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const a=tr(r.toString());Hi(t,a,()=>a(t.currentUser)),$i(t,l=>a(l))}}const s=wn("auth");return s&&Ni(t,`http://${s}`),t}function ir(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}_i({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=k("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",ir().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qs("Browser");function sr({id:n,name:e,onClose:t}){const i=`${window.location.origin}/w/${n}`,s=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(i)}&color=4a071c&bgcolor=fffdf9`;return o.jsx("div",{className:"lightbox-backdrop",onClick:t,"aria-modal":"true",role:"dialog",children:o.jsxs("div",{className:"panel qr-modal-content",onClick:r=>r.stopPropagation(),children:[o.jsx("button",{type:"button",className:"lightbox-close",onClick:t,"aria-label":"Close modal",children:"✕"}),o.jsxs("div",{className:"qr-modal-body",children:[o.jsx("span",{className:"badge badge-live",children:"QR Code Ready"}),o.jsxs("h2",{children:["Birthday Card for ",e]}),o.jsx("p",{className:"field-hint",style:{marginBottom:"1.2rem"},children:"Scan to open birthday surprise card directly on phone"}),o.jsx("div",{className:"qr-image-wrapper",children:o.jsx("img",{src:s,alt:`QR Code for ${e}'s birthday card`,className:"qr-img"})}),o.jsx("p",{className:"link-line",style:{marginTop:"1.2rem",textAlign:"center"},children:i}),o.jsxs("div",{className:"wish-actions",style:{justifyContent:"center",marginTop:"1.2rem"},children:[o.jsx("a",{href:s,download:`qr-wish-${n}.png`,target:"_blank",rel:"noreferrer",className:"btn btn-accent",children:"Download QR Code 📥"}),o.jsx("button",{type:"button",className:"btn",onClick:t,children:"Close"})]})]})]})})}const Ke=ut?nr(ut):null,_n=864e5,Ae=n=>`${window.location.origin}${window.location.pathname}#/w/${n}`,rr=(n,e)=>`ðŸŽ A birthday surprise for ${n}! Open it here: ${Ae(e)}`;function pr(){const[n,e]=m.useState(void 0),[t,i]=m.useState(!1);m.useEffect(()=>ve?qi(Ke,e):void 0,[]);let s;return!ve&&!t?s=o.jsx(ar,{onBypass:()=>i(!0)}):n===void 0&&ve?s=o.jsx("div",{className:"notice",children:o.jsx("p",{children:"Checking admin login statusâ€¦"})}):!n&&ve&&!t?s=o.jsx(or,{}):s=o.jsx(cr,{user:n,isDemo:t}),o.jsxs("div",{className:"admin love-home theme-night",children:[o.jsx(xn,{theme:"night",density:25}),o.jsxs("header",{className:"admin-bar",children:[o.jsxs(Mt,{to:"/",className:"brand love-brand",children:[o.jsx("span",{className:"brand-mark",children:"W"}),o.jsxs("span",{children:[Re.name," Admin"]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[t&&o.jsx("span",{className:"badge badge-scheduled",children:"Demo Preview Mode"}),n&&o.jsx("span",{style:{fontSize:"0.82rem",color:"var(--blush)"},children:n.email}),(n||t)&&o.jsx("button",{className:"btn btn-small",onClick:()=>{Bi(Ke),i(!1)},children:t?"Exit Demo":"Log out"})]})]}),o.jsx("main",{className:"admin-main",children:s})]})}function ar({onBypass:n}){return o.jsxs("div",{className:"panel",style:{textAlign:"center",padding:"3rem 1.5rem",maxWidth:"34rem",margin:"2rem auto"},children:[o.jsx("span",{className:"badge badge-scheduled",style:{marginBottom:"1rem"},children:"Setup Instructions"}),o.jsx("h2",{style:{margin:"0.8rem 0 0.5rem"},children:"Connect Firebase & Cloudinary First"}),o.jsxs("p",{style:{margin:"0 auto 1.8rem",color:"var(--blush)",fontSize:"0.95rem"},children:["To save live cards and upload audio/video, fill in your credentials in ",o.jsx("code",{children:"src/config.js"}),". In the meantime, you can explore the Admin Dashboard in Demo Mode!"]}),o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",justifyContent:"center"},children:[o.jsx("button",{type:"button",className:"btn btn-accent",onClick:n,children:"Explore Admin Dashboard (Demo Mode) ðŸš€"}),o.jsx(Mt,{className:"btn",to:"/w/demo",children:"Open Sample Card ðŸŽ"})]})]})}function or(){const[n,e]=m.useState(""),[t,i]=m.useState(""),[s,r]=m.useState(""),[a,l]=m.useState(!1);async function c(d){d.preventDefault(),l(!0),r("");try{await Wi(Ke,n,t)}catch{r("Email or password incorrect. Please verify your Firebase Auth credentials.")}finally{l(!1)}}return o.jsxs("form",{onSubmit:c,className:"panel",style:{maxWidth:"28rem",margin:"3rem auto 0"},children:[o.jsx("h2",{style:{margin:"0 0 1.2rem",textAlign:"center"},children:"Admin Login"}),o.jsxs("div",{className:"field",children:[o.jsx("label",{htmlFor:"em",children:"Email"}),o.jsx("input",{id:"em",type:"email",value:n,onChange:d=>e(d.target.value),required:!0,placeholder:"admin@example.com"})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{htmlFor:"pw",children:"Password"}),o.jsx("input",{id:"pw",type:"password",value:t,onChange:d=>i(d.target.value),required:!0})]}),s&&o.jsx("p",{className:"notice notice-err",children:s}),o.jsx("button",{className:"btn btn-accent btn-big",style:{width:"100%",marginTop:"0.5rem"},disabled:a,children:a?"Logging inâ€¦":"Access Admin Dashboard"})]})}function cr({isDemo:n}){const[e,t]=m.useState(null),[i,s]=m.useState(""),[r,a]=m.useState(""),[l,c]=m.useState("all"),d=m.useCallback(async()=>{if(n){t([{id:"demo",recipientName:"Priya",fromName:"Rahul",theme:"night",photos:[{url:"demo"},{url:"demo2"}],voice:{url:"demo"},expiresAt:Date.now()+30*864e5,createdAt:Date.now()},{id:"sample-2",recipientName:"Aarav",fromName:"Riya & Friends",theme:"blush",photos:[{url:"demo"}],unlockAt:Date.now()+2*864e5,expiresAt:Date.now()+10*864e5,createdAt:Date.now()-864e5},{id:"sample-3",recipientName:"Ananya",fromName:"Vikram",theme:"sunset",photos:[{url:"demo"}],expiresAt:Date.now()-864e5,createdAt:Date.now()-5*864e5}]);return}try{const f=await Ln(Dn(jn(Ee,"wishes"),Mn("createdAt","desc"),Un(100)));t(f.docs.map(_=>({id:_.id,..._.data()}))),s("")}catch(f){s(`Couldn't load cards: ${f.message}. Verify Firestore security rules.`)}},[n]);m.useEffect(()=>{d()},[d]);const h=Date.now(),p=e?{total:e.length,live:e.filter(f=>{const _=A(f.expiresAt),w=A(f.unlockAt);return _>=h&&(!w||w<=h)}).length,scheduled:e.filter(f=>{const _=A(f.unlockAt),w=A(f.expiresAt);return _&&_>h&&w>=h}).length,expired:e.filter(f=>A(f.expiresAt)<h).length}:{total:0,live:0,scheduled:0,expired:0},y=e?e.filter(f=>{const _=A(f.expiresAt),w=A(f.unlockAt),b=_<h?"expired":w&&w>h?"scheduled":"live";if(l!=="all"&&b!==l)return!1;if(r.trim()){const j=r.toLowerCase().trim(),M=(f.recipientName||"").toLowerCase(),T=(f.fromName||"").toLowerCase();return M.includes(j)||T.includes(j)}return!0}):[];return o.jsxs(o.Fragment,{children:[o.jsxs("section",{className:"admin-stats-grid",children:[o.jsxs("div",{className:"stat-card",children:[o.jsx("span",{className:"stat-value",children:p.total}),o.jsx("span",{className:"stat-label",children:"Total Cards"})]}),o.jsxs("div",{className:"stat-card stat-card-live",children:[o.jsx("span",{className:"stat-value",children:p.live}),o.jsx("span",{className:"stat-label",children:"Live Active"})]}),o.jsxs("div",{className:"stat-card stat-card-sched",children:[o.jsx("span",{className:"stat-value",children:p.scheduled}),o.jsx("span",{className:"stat-label",children:"Scheduled"})]}),o.jsxs("div",{className:"stat-card stat-card-exp",children:[o.jsx("span",{className:"stat-value",children:p.expired}),o.jsx("span",{className:"stat-label",children:"Expired"})]})]}),o.jsx(dr,{onCreated:d}),o.jsxs("section",{style:{marginTop:"2rem"},children:[o.jsxs("div",{className:"admin-section-header",children:[o.jsx("h2",{children:"Your Birthday Cards"}),o.jsxs("div",{className:"admin-filter-bar",children:[o.jsx("input",{type:"search",placeholder:"Search by nameâ€¦",value:r,onChange:f=>a(f.target.value),className:"admin-search-input"}),o.jsxs("div",{className:"admin-tabs",children:[o.jsxs("button",{type:"button",className:`admin-tab ${l==="all"?"active":""}`,onClick:()=>c("all"),children:["All (",p.total,")"]}),o.jsxs("button",{type:"button",className:`admin-tab ${l==="live"?"active":""}`,onClick:()=>c("live"),children:["Live (",p.live,")"]}),o.jsxs("button",{type:"button",className:`admin-tab ${l==="scheduled"?"active":""}`,onClick:()=>c("scheduled"),children:["Scheduled (",p.scheduled,")"]}),o.jsxs("button",{type:"button",className:`admin-tab ${l==="expired"?"active":""}`,onClick:()=>c("expired"),children:["Expired (",p.expired,")"]})]})]})]}),i&&o.jsx("p",{className:"notice notice-err",children:i}),e===null&&!i&&o.jsx("p",{children:"Loading cards listâ€¦"}),e&&y.length===0&&o.jsx("div",{className:"panel",style:{textAlign:"center",padding:"3rem 1.5rem"},children:o.jsx("p",{style:{margin:0,color:"var(--blush)"},children:r||l!=="all"?"No cards match your filter criteria.":"No cards created yet. Create your first card above!"})}),y.length>0&&o.jsx("ul",{className:"wish-list",children:y.map(f=>o.jsx(ur,{w:f,onChange:d},f.id))})]})]})}const xt={recipientName:"",fromName:"",message:"",theme:"night",days:String(Re.plans[0].days),unlockAt:""};function lr(n,e,t){const i=n.trim()||"you",s=e.trim()?`

With love,
${e.trim()}`:"";return{warm:`Happy birthday, ${i}!

I hope this year brings you gentle mornings, big laughs, and every little thing that makes you feel loved. Iâ€™m so grateful to have you in my life.${s}`,fun:`Happy birthday, ${i}!

You make every room brighter, every plan more fun, and every memory better. Hereâ€™s to another year of stories weâ€™ll never stop laughing about!${s}`,short:`Happy birthday, ${i}!

Wishing you a beautiful year full of love, joy, and everything you deserve.${s}`}[t]}function dr({onCreated:n}){const[e,t]=m.useState(xt),[i,s]=m.useState([]),[r,a]=m.useState([]),[l,c]=m.useState(null),[d,h]=m.useState(null),[p,y]=m.useState(0),[f,_]=m.useState(!1),[w,b]=m.useState(""),[j,M]=m.useState(""),[T,se]=m.useState(null),N=g=>v=>t({...e,[g]:v.target.value}),B=g=>t(v=>({...v,message:lr(v.recipientName,v.fromName,g)})),ge=g=>{const v=[...g.target.files].slice(0,15);s(v);const K=v.map(Y=>URL.createObjectURL(Y));a(K)},De=g=>{const v=i.filter((Y,C)=>C!==g),K=r.filter((Y,C)=>C!==g);s(v),a(K)};async function re(g){if(g.preventDefault(),M(""),se(null),d&&d.size>ht*1024*1024)return M(`This video is ${(d.size/1048576).toFixed(0)} MB. The limit is ${ht} MB, so trim or compress it first.`);_(!0);try{const v=Vn(),K=`wishes/${v}`,Y=i.length+(l?1:0)+(d?1:0);let C=0;const je=z=>b(`Uploading ${z} (${C+1} of ${Y})`),st=[];for(const z of i)je("photo"),st.push(await Ue(await Wn(z),K)),C++;let rt=null;l&&(je("voice note"),rt=await Ue(l,K),C++);let at=null;d&&(je("video"),at=await Ue(d,K,z=>b(`Uploading video, ${z}% (${C+1} of ${Y})`)),C++),b("Saving card");const Me=e.unlockAt?new Date(e.unlockAt).getTime():null,In=Math.max(Date.now(),Me||0);await $n(We(Ee,"wishes",v),{recipientName:e.recipientName.trim(),fromName:e.fromName.trim(),message:e.message.trim(),theme:e.theme,photos:st,voice:rt,video:at,unlockAt:Me?$e.fromMillis(Me):null,expiresAt:$e.fromMillis(In+Number(e.days)*_n),createdAt:Hn()}),se({id:v,name:e.recipientName.trim()}),t(xt),s([]),a([]),c(null),h(null),y(z=>z+1),n()}catch(v){M(v.message||"Something failed. Check connection and try again.")}finally{_(!1),b("")}}return o.jsxs("div",{className:"admin-create-wrapper",children:[o.jsxs("form",{onSubmit:re,className:"panel admin-form",children:[o.jsx("h2",{children:"Create a Birthday Card"}),o.jsxs("div",{className:"row",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{htmlFor:"rn",children:"Birthday Person's Name"}),o.jsx("input",{id:"rn",value:e.recipientName,onChange:N("recipientName"),required:!0,maxLength:40,placeholder:"e.g. Priya"})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{htmlFor:"fn",children:"From (Sender)"}),o.jsx("input",{id:"fn",value:e.fromName,onChange:N("fromName"),maxLength:60,placeholder:"e.g. Rahul, or Mummy & Papa"})]})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{htmlFor:"msg",children:"Heartfelt Message"}),o.jsxs("div",{className:"message-ideas","aria-label":"Message ideas",children:[o.jsx("span",{children:"Quick Ideas:"}),o.jsx("button",{type:"button",onClick:()=>B("warm"),children:"Warm"}),o.jsx("button",{type:"button",onClick:()=>B("fun"),children:"Fun"}),o.jsx("button",{type:"button",onClick:()=>B("short"),children:"Short"})]}),o.jsx("textarea",{id:"msg",value:e.message,onChange:N("message"),required:!0,maxLength:3e3,placeholder:"Write your birthday wishes here..."}),o.jsx("p",{className:"field-hint",children:"Personalize the message to make it memorable."})]}),o.jsxs("div",{className:"row",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{htmlFor:"th",children:"Visual Theme"}),o.jsxs("select",{id:"th",value:e.theme,onChange:N("theme"),children:[o.jsx("option",{value:"night",children:"Night Velvet (burgundy & gold)"}),o.jsx("option",{value:"blush",children:"Blush Romance (rosy pink & violet)"}),o.jsx("option",{value:"mint",children:"Emerald Magic (deep green & gold)"}),o.jsx("option",{value:"sunset",children:"Sunset Glow (warm coral & amber)"}),o.jsx("option",{value:"celestial",children:"Celestial Night (starry indigo & cyan)"})]})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{htmlFor:"pl",children:"Active Duration Plan"}),o.jsx("select",{id:"pl",value:e.days,onChange:N("days"),children:Re.plans.map(g=>o.jsxs("option",{value:g.days,children:[g.label," (â‚¹",g.price,")"]},g.days))})]})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{htmlFor:"ul",children:"Unlock At Timestamp (Optional)"}),o.jsx("input",{id:"ul",type:"datetime-local",value:e.unlockAt,onChange:N("unlockAt")}),o.jsx("p",{className:"field-hint",children:"Leave empty to unlock right away. Scheduled days count from unlock time."})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{htmlFor:"ph",children:"Memory Photos (Up to 15)"}),o.jsx("input",{id:"ph",type:"file",accept:"image/*",multiple:!0,onChange:ge}),r.length>0&&o.jsx("div",{className:"photo-preview-grid",children:r.map((g,v)=>o.jsxs("div",{className:"photo-preview-item",children:[o.jsx("img",{src:g,alt:`Upload ${v+1}`}),o.jsx("button",{type:"button",onClick:()=>De(v),title:"Remove image",children:"âœ•"})]},v))})]}),o.jsxs("div",{className:"row",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{htmlFor:"vn",children:"Voice Note (Audio)"}),o.jsx("input",{id:"vn",type:"file",accept:"audio/*,.opus,.ogg,.m4a",onChange:g=>c(g.target.files[0]||null)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{htmlFor:"vd",children:"Video Clip (Optional)"}),o.jsx("input",{id:"vd",type:"file",accept:"video/*",onChange:g=>h(g.target.files[0]||null)})]})]}),j&&o.jsx("p",{className:"notice notice-err",children:j}),T&&o.jsxs("div",{className:"notice notice-ok",children:[o.jsx("p",{children:o.jsxs("strong",{children:["âœ¨ Birthday Card for ",T.name," is Ready!"]})}),o.jsx("p",{className:"link-line",children:Ae(T.id)}),o.jsx(yn,{id:T.id,name:T.name})]}),o.jsx("button",{className:"btn btn-accent btn-big",style:{width:"100%"},disabled:f,children:f?w||"Processing Cardâ€¦":"ðŸŽ Create Birthday Surprise Card"})]},p),o.jsxs("aside",{className:`admin-preview-pane theme-${e.theme}`,children:[o.jsx("span",{className:"admin-preview-badge",children:"Live Real-time Preview"}),o.jsx("div",{className:"admin-preview-stage",children:o.jsx(Fn,{name:e.recipientName.trim()||"Someone Special",enableTilt:!1})}),o.jsxs("p",{className:"field-hint",style:{textAlign:"center",marginTop:"0.8rem"},children:["Real-time preview of the envelope seal for ",e.recipientName.trim()||"recipient"]})]})]})}function yn({id:n,name:e}){const[t,i]=m.useState(""),[s,r]=m.useState(!1),a=async(l,c)=>{try{await navigator.clipboard.writeText(l),i(c),setTimeout(()=>i(""),1500)}catch{window.prompt("Copy this:",l)}};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"wish-actions",children:[o.jsx("button",{type:"button",className:"btn btn-small",onClick:()=>a(Ae(n),"link"),children:t==="link"?"Copied âœ“":"Copy Link"}),o.jsx("button",{type:"button",className:"btn btn-small",onClick:()=>a(rr(e,n),"msg"),children:t==="msg"?"Copied âœ“":"Copy WhatsApp Text"}),o.jsx("button",{type:"button",className:"btn btn-small",onClick:()=>r(!0),children:"Show QR Code ðŸ“±"}),o.jsx("a",{className:"btn btn-small btn-accent",href:Ae(n),target:"_blank",rel:"noreferrer",children:"Open Card â†—"})]}),s&&o.jsx(sr,{id:n,name:e,onClose:()=>r(!1)})]})}function ur({w:n,onChange:e}){var d;const t=A(n.expiresAt),i=A(n.unlockAt),s=Date.now(),r=t<s?"expired":i&&i>s?"scheduled":"live",a={expired:"Expired",scheduled:"Scheduled",live:"Live"}[r];async function l(h){await qn(We(Ee,"wishes",n.id),{expiresAt:$e.fromMillis(Math.max(t,s)+h*_n)}),e()}async function c(){window.confirm(`Delete the card for ${n.recipientName}? The link stops working immediately.`)&&(await Bn(We(Ee,"wishes",n.id)),e())}return o.jsxs("li",{className:"wish-row",children:[o.jsxs("div",{className:"wish-row-top",children:[o.jsxs("h3",{children:[n.recipientName,n.fromName?` from ${n.fromName}`:""]}),o.jsx("span",{className:`badge badge-${r}`,children:a})]}),o.jsxs("p",{className:"wish-meta",children:[i?`Unlocks ${dt(i)}. `:"",r==="expired"?"Ended":"Ends"," ",dt(t),"."," ",((d=n.photos)==null?void 0:d.length)||0," photos",n.voice?", voice note":"",n.video?", video":"","."," ","Folder: ",o.jsxs("code",{children:["wishes/",n.id]})]}),o.jsx(yn,{id:n.id,name:n.recipientName}),o.jsxs("div",{className:"wish-actions wish-actions-2",style:{marginTop:"0.8rem"},children:[Re.plans.map(h=>o.jsxs("button",{type:"button",className:"btn btn-small",onClick:()=>l(h.days),children:["Extend +",h.label]},h.days)),o.jsx("button",{type:"button",className:"btn btn-small btn-danger",onClick:c,style:{marginLeft:"auto"},children:"Delete Card ðŸ—‘ï¸"})]})]})}export{pr as default};
