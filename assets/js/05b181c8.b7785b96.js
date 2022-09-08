"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29517],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,b=u["".concat(i,".").concat(f)]||u[f]||p[f]||d;return t?n.createElement(b,l(l({ref:r},c),{},{components:t})):n.createElement(b,l({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var d=t.length,l=new Array(d);l[0]=u;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<d;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97394:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const d={},l=void 0,o={unversionedId:"reference/java_api/Address",id:"reference/java_api/Address",title:"Address",description:"An address.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/Address.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/Address",permalink:"/wallet.rs/reference/java_api/Address",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/Address.mdx",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"builder(): AddressBuilder",id:"builder-addressbuilder",level:3},{value:"balance(): long",id:"balance-long",level:3},{value:"readable(): String",id:"readable-string",level:3},{value:"address(): AddressWrapper",id:"address-addresswrapper",level:3}],c={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An address."),(0,a.kt)("h3",{id:"builder-addressbuilder"},"builder(): ",(0,a.kt)("a",{parentName:"h3",href:"#addressbuilder"},"AddressBuilder")),(0,a.kt)("p",null,"Gets a new instance of the address builder."),(0,a.kt)("h3",{id:"balance-long"},"balance(): long"),(0,a.kt)("p",null,"Address total balance"),(0,a.kt)("h3",{id:"readable-string"},"readable(): String"),(0,a.kt)("p",null,"the Bech32 human readable part."),(0,a.kt)("h3",{id:"address-addresswrapper"},"address(): ",(0,a.kt)("a",{parentName:"h3",href:"#addresswrapper"},"AddressWrapper")),(0,a.kt)("p",null,"The address."))}p.isMDXComponent=!0}}]);