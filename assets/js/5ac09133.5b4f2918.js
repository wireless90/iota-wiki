"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[86996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,c={unversionedId:"reference/java_api/PreparedTransactionData",id:"reference/java_api/PreparedTransactionData",title:"PreparedTransactionData",description:"Prepared transaction event data.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/PreparedTransactionData.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/PreparedTransactionData",permalink:"/wallet.rs/reference/java_api/PreparedTransactionData",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/PreparedTransactionData.mdx",tags:[],version:"current",frontMatter:{}},p={},l=[{value:"inputs(): TransactionIO[]",id:"inputs-transactionio",level:3},{value:"outputs(): TransactionIO[]",id:"outputs-transactionio",level:3},{value:"data(): Optional&lt;String&gt;",id:"data-optionalstring",level:3}],u={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Prepared transaction event data."),(0,a.kt)("h3",{id:"inputs-transactionio"},"inputs(): ",(0,a.kt)("a",{parentName:"h3",href:"#transactionio"},"TransactionIO[]")),(0,a.kt)("p",null,"Transaction inputs."),(0,a.kt)("h3",{id:"outputs-transactionio"},"outputs(): ",(0,a.kt)("a",{parentName:"h3",href:"#transactionio"},"TransactionIO[]")),(0,a.kt)("p",null,"Transaction outputs."),(0,a.kt)("h3",{id:"data-optionalstring"},"data(): Optional","<","String",">"),(0,a.kt)("p",null,"The indexation data."))}s.isMDXComponent=!0}}]);