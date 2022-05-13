"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[85380],{37055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],u={},l=void 0,d={unversionedId:"libraries/java/api/SignatureLockedSingleOutput",id:"libraries/java/api/SignatureLockedSingleOutput",title:"SignatureLockedSingleOutput",description:"Describes a deposit to a single address which is unlocked via a signature.",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/SignatureLockedSingleOutput.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/SignatureLockedSingleOutput",permalink:"/iota.rs/libraries/java/api/SignatureLockedSingleOutput",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/SignatureLockedSingleOutput.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"from(address, amount): SignatureLockedSingleOutput",id:"fromaddress-amount-signaturelockedsingleoutput",level:3},{value:"amount(): long",id:"amount-long",level:3},{value:"address(): Address",id:"address-address",level:3}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Describes a deposit to a single address which is unlocked via a signature."),(0,i.kt)("h3",{id:"fromaddress-amount-signaturelockedsingleoutput"},"from(address, amount): ",(0,i.kt)("a",{parentName:"h3",href:"#signaturelockedsingleoutput"},"SignatureLockedSingleOutput")),(0,i.kt)("p",null,"Creates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"SignatureLockedSingleOutput"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#address"},"Address")),(0,i.kt)("td",{parentName:"tr",align:null},"The address to set")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"amount"),(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"The amount to set")))),(0,i.kt)("h3",{id:"amount-long"},"amount(): long"),(0,i.kt)("p",null,"Returns the amount of a ",(0,i.kt)("inlineCode",{parentName:"p"},"SignatureLockedSingleOutput"),"."),(0,i.kt)("h3",{id:"address-address"},"address(): ",(0,i.kt)("a",{parentName:"h3",href:"#address"},"Address")),(0,i.kt)("p",null,"Returns the address of a ",(0,i.kt)("inlineCode",{parentName:"p"},"SignatureLockedSingleOutput"),"."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);