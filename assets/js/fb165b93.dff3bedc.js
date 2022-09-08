"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[37993],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,g=c["".concat(u,".").concat(m)]||c[m]||s[m]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},44584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"reference/java_api/SignatureLockedSingleOutput",id:"reference/java_api/SignatureLockedSingleOutput",title:"SignatureLockedSingleOutput",description:"Describes a deposit to a single address which is unlocked via a signature.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/SignatureLockedSingleOutput.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/SignatureLockedSingleOutput",permalink:"/wallet.rs/reference/java_api/SignatureLockedSingleOutput",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/SignatureLockedSingleOutput.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"from(address, amount, remainder): SignatureLockedSingleOutput",id:"fromaddress-amount-remainder-signaturelockedsingleoutput",level:3},{value:"amount(): long",id:"amount-long",level:3},{value:"address(): AddressWrapper",id:"address-addresswrapper",level:3}],d={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Describes a deposit to a single address which is unlocked via a signature."),(0,a.kt)("h3",{id:"fromaddress-amount-remainder-signaturelockedsingleoutput"},"from(address, amount, remainder): ",(0,a.kt)("a",{parentName:"h3",href:"#signaturelockedsingleoutput"},"SignatureLockedSingleOutput")),(0,a.kt)("p",null,"Creates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"SignatureLockedSingleOutput"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#addresswrapper"},"AddressWrapper")),(0,a.kt)("td",{parentName:"tr",align:null},"The address to set")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"amount"),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount to set")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"remainder"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"if this output allows remainder")))),(0,a.kt)("h3",{id:"amount-long"},"amount(): long"),(0,a.kt)("p",null,"Returns the amount of a ",(0,a.kt)("inlineCode",{parentName:"p"},"SignatureLockedSingleOutput"),"."),(0,a.kt)("h3",{id:"address-addresswrapper"},"address(): ",(0,a.kt)("a",{parentName:"h3",href:"#addresswrapper"},"AddressWrapper")),(0,a.kt)("p",null,"Returns the address of a ",(0,a.kt)("inlineCode",{parentName:"p"},"SignatureLockedSingleOutput"),"."))}s.isMDXComponent=!0}}]);