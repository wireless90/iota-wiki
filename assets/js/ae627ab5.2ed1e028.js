"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[67980],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),g=o,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"Engine",id:"engine",level:2},{value:"Snapshot",id:"snapshot",level:3}]};function i(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"engine"},"Engine"),(0,o.kt)("p",null,"Engine is the collection of low-level module with which application architects can build higher-level implementations of Strongholds for a variety of purposes. It is platform agnostic, in that it should run anywhere a Rust Compiler will work."),(0,o.kt)("p",null,"It is composed of 4 primary module:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"snapshot"),(0,o.kt)("li",{parentName:"ul"},"vault"),(0,o.kt)("li",{parentName:"ul"},"store"),(0,o.kt)("li",{parentName:"ul"},"runtime")),(0,o.kt)("h3",{id:"snapshot"},"Snapshot"),(0,o.kt)("p",null,"The snapshot protocol follows a fairly simple transparent pattern. Each Snapshot file follows a simple structure:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Header")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Magic Bytes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Version Bytes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Body"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Ephemeral Key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"xchacha20 tag")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Cipher Text")))))}i.isMDXComponent=!0;const l={description:"Engine is the platform-agnostic collection of low-level modules with which application architects can build higher-level implementations of Strongholds for a variety of purposes.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","snapshot","vault","store","runtime"]},s="Structure: Engine",c={unversionedId:"reference/structure/engine/overview",id:"reference/structure/engine/overview",title:"Structure: Engine",description:"Engine is the platform-agnostic collection of low-level modules with which application architects can build higher-level implementations of Strongholds for a variety of purposes.",source:"@site/content/build/stronghold.rs/develop/documentation/docs/reference/structure/engine/overview.md",sourceDirName:"reference/structure/engine",slug:"/reference/structure/engine/overview",permalink:"/stronghold.rs/reference/structure/engine/overview",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/content/build/stronghold.rs/develop/documentation/docs/reference/structure/engine/overview.md",tags:[],version:"current",frontMatter:{description:"Engine is the platform-agnostic collection of low-level modules with which application architects can build higher-level implementations of Strongholds for a variety of purposes.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","snapshot","vault","store","runtime"]},sidebar:"mySidebar",previous:{title:"Structure: Client",permalink:"/stronghold.rs/reference/structure/client"},next:{title:"Structure: Engine::Snapshot",permalink:"/stronghold.rs/reference/structure/engine/snapshot"}},p={},u=[],m={toc:u};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"structure-engine"},"Structure: Engine"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/engine"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"})),"  ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/stronghold-engine"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/stronghold-engine"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-engine.svg",alt:null}))),(0,o.kt)(i,{mdxType:"Engine"}))}g.isMDXComponent=!0}}]);