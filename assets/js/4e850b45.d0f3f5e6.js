"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[86744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,c={unversionedId:"reference/java_api/TransactionEvent",id:"reference/java_api/TransactionEvent",title:"TransactionEvent",description:"A transaction-related event data.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/TransactionEvent.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/TransactionEvent",permalink:"/wallet.rs/reference/java_api/TransactionEvent",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/TransactionEvent.mdx",tags:[],version:"current",frontMatter:{}},l={},s=[{value:"indexationId(): String",id:"indexationid-string",level:3},{value:"accountId(): String",id:"accountid-string",level:3},{value:"message(): Message",id:"message-message",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A transaction-related event data."),(0,a.kt)("h3",{id:"indexationid-string"},"indexationId(): String"),(0,a.kt)("p",null,"Event unique identifier."),(0,a.kt)("h3",{id:"accountid-string"},"accountId(): String"),(0,a.kt)("p",null,"The associated account identifier."),(0,a.kt)("h3",{id:"message-message"},"message(): ",(0,a.kt)("a",{parentName:"h3",href:"#message"},"Message")),(0,a.kt)("p",null,"The event message."))}p.isMDXComponent=!0}}]);