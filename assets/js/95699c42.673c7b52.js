"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="Interface: AccountMetadata",l={unversionedId:"libraries/nodejs/references/interfaces/AccountMetadata",id:"libraries/nodejs/references/interfaces/AccountMetadata",title:"Interface: AccountMetadata",description:"The account metadata",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/references/interfaces/AccountMetadata.md",sourceDirName:"libraries/nodejs/references/interfaces",slug:"/libraries/nodejs/references/interfaces/AccountMetadata",permalink:"/wallet.rs/develop/libraries/nodejs/references/interfaces/AccountMetadata",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/references/interfaces/AccountMetadata.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: AccountMeta",permalink:"/wallet.rs/develop/libraries/nodejs/references/interfaces/AccountMeta"},next:{title:"Interface: AccountSyncOptions",permalink:"/wallet.rs/develop/libraries/nodejs/references/interfaces/AccountSyncOptions"}},c={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"alias",id:"alias",level:3},{value:"coinType",id:"cointype",level:3},{value:"index",id:"index",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-accountmetadata"},"Interface: AccountMetadata"),(0,a.kt)("p",null,"The account metadata"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/wallet.rs/develop/libraries/nodejs/references/interfaces/AccountMetadata#alias"},"alias")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/wallet.rs/develop/libraries/nodejs/references/interfaces/AccountMetadata#cointype"},"coinType")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/wallet.rs/develop/libraries/nodejs/references/interfaces/AccountMetadata#index"},"index"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"alias"},"alias"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"alias"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The account alias"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cointype"},"coinType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"coinType"),": ",(0,a.kt)("a",{parentName:"p",href:"/wallet.rs/develop/libraries/nodejs/references/enums/CoinType"},(0,a.kt)("inlineCode",{parentName:"a"},"CoinType"))),(0,a.kt)("p",null,"The used coin type"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"index"},"index"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"index"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The account index which will be used in the BIP32 path"))}u.isMDXComponent=!0}}]);