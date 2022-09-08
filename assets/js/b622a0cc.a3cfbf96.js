"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[50729],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),d=i,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},19898:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(87462),i=(t(67294),t(3905));const o={description:"Official IOTA Client Library Rust API reference.",image:"/img/logo/iota_mark_light.png",keywords:["api","rust","cargo","crate","reference"]},a="API Reference",c={unversionedId:"libraries/rust/api_reference",id:"libraries/rust/api_reference",title:"API Reference",description:"Official IOTA Client Library Rust API reference.",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/rust/api_reference.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/api_reference",permalink:"/iota.rs/libraries/rust/api_reference",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/rust/api_reference.md",tags:[],version:"current",frontMatter:{description:"Official IOTA Client Library Rust API reference.",image:"/img/logo/iota_mark_light.png",keywords:["api","rust","cargo","crate","reference"]},sidebar:"docs",previous:{title:"IOTA Client Python Library",permalink:"/iota.rs/libraries/python/api_reference"},next:{title:"api_reference",permalink:"/iota.rs/libraries/wasm/api_reference"}},l={},p=[],s={toc:p};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"API reference"),(0,i.kt)("p",null,"You can find the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/iota-client"},"API reference")," in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/"},"docs.rs"),", or generate it yourself. "),(0,i.kt)("p",null,"If you would like to explore the implementation in more depth, the following command generates docs for the whole crate, including private modules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo doc --document-private-items --no-deps --open\n")))}u.isMDXComponent=!0}}]);