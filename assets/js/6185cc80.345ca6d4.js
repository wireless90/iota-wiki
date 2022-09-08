"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[36783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={},i=void 0,l={unversionedId:"libraries/java/api/MilestonePayloadEssence",id:"libraries/java/api/MilestonePayloadEssence",title:"MilestonePayloadEssence",description:"index(): long",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/MilestonePayloadEssence.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MilestonePayloadEssence",permalink:"/iota.rs/libraries/java/api/MilestonePayloadEssence",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/MilestonePayloadEssence.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"index(): long",id:"index-long",level:3},{value:"timestamp(): long",id:"timestamp-long",level:3},{value:"parents(): MessageId[]",id:"parents-messageid",level:3},{value:"merkleProof(): byte[]",id:"merkleproof-byte",level:3},{value:"nextPowScore(): long",id:"nextpowscore-long",level:3},{value:"nextPowScoreMilestone(): long",id:"nextpowscoremilestone-long",level:3},{value:"publicKeys(): PublicKey[]",id:"publickeys-publickey",level:3},{value:"receipt(): Optional&lt;ReceiptPayload&gt;",id:"receipt-optionalreceiptpayload",level:3},{value:"hash(): byte[]",id:"hash-byte",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"index-long"},"index(): long"),(0,r.kt)("p",null,"Returns the index of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,r.kt)("h3",{id:"timestamp-long"},"timestamp(): long"),(0,r.kt)("p",null,"Returns the timestamp of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,r.kt)("h3",{id:"parents-messageid"},"parents(): ",(0,r.kt)("a",{parentName:"h3",href:"#messageid"},"MessageId[]")),(0,r.kt)("p",null,"Returns the parents of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,r.kt)("h3",{id:"merkleproof-byte"},"merkleProof(): byte[]"),(0,r.kt)("p",null,"Returns the merkle proof of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,r.kt)("h3",{id:"nextpowscore-long"},"nextPowScore(): long"),(0,r.kt)("p",null,"Returns the next proof of work score of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,r.kt)("h3",{id:"nextpowscoremilestone-long"},"nextPowScoreMilestone(): long"),(0,r.kt)("p",null,"Returns the next proof of work index of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,r.kt)("h3",{id:"publickeys-publickey"},"publicKeys(): ",(0,r.kt)("a",{parentName:"h3",href:"#publickey"},"PublicKey[]")),(0,r.kt)("p",null,"Returns the public keys of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,r.kt)("h3",{id:"receipt-optionalreceiptpayload"},"receipt(): Optional","<",(0,r.kt)("a",{parentName:"h3",href:"#receiptpayload"},"ReceiptPayload"),">"),(0,r.kt)("p",null,"Returns the optional receipt of a ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,r.kt)("h3",{id:"hash-byte"},"hash(): byte[]"),(0,r.kt)("p",null,"Hashes the ",(0,r.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence to be signed.")))}d.isMDXComponent=!0}}]);