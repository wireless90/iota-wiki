"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33004],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var o=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,i=function(t,e){if(null==t)return{};var r,o,i={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=o.createContext({}),p=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=p(r),m=i,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||n;return r?o.createElement(g,a(a({ref:e},u),{},{components:r})):o.createElement(g,a({ref:e},u))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,a=new Array(n);a[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var p=2;p<n;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54055:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(87462),i=(r(67294),r(3905));const n={description:"How to switch from IOTA hub using wallet.rs, or its bindings.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["wallet.rs","IOTA Hub","iota.rs","migration","how to"]},a="IOTA Hub Migration Guide",s={unversionedId:"how_tos/migration/hub_migration",id:"how_tos/migration/hub_migration",title:"IOTA Hub Migration Guide",description:"How to switch from IOTA hub using wallet.rs, or its bindings.",source:"@site/content/build/introduction-docs/production/docs/how_tos/migration/hub_migration.md",sourceDirName:"how_tos/migration",slug:"/how_tos/migration/hub_migration",permalink:"/introduction/how_tos/migration/hub_migration",draft:!1,editUrl:"https://github.com/iotaledger/introduction-docs/edit/main/docs/content/build/introduction-docs/production/docs/how_tos/migration/hub_migration.md",tags:[],version:"current",frontMatter:{description:"How to switch from IOTA hub using wallet.rs, or its bindings.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["wallet.rs","IOTA Hub","iota.rs","migration","how to"]},sidebar:"mySidebar",previous:{title:"Chrysalis Snapshot Validation/Boostrapping",permalink:"/introduction/how_tos/migration/snapshot_validation_bootstrapping"},next:{title:"Chrysalis Changelog",permalink:"/introduction/reference/changelog"}},l={},p=[],u={toc:p};function c(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iota-hub-migration-guide"},"IOTA Hub Migration Guide"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This guide outlines how to switch from using IOTA Hub to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"Wallet.rs")," or its ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/libraries/overview"},"bindings")," instead.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Before you start a migration from IOTA Hub, get in contact with us so we can assist you in this process. "),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Contact details:")),(0,i.kt)("p",{parentName:"admonition"},"Dave de Fijter"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Email"),": ",(0,i.kt)("a",{parentName:"p",href:"mailto:dave.defijter@iota.org"},"dave.defijter@iota.org")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},(0,i.kt)("strong",{parentName:"a"},"Discord")),": Dave ","[IF]","#3333")),(0,i.kt)("p",null,"Because of the unique features of IOTA 1.0, it was difficult to manage IOTA transactions with just a library. With the Chrysalis update, we have updated to be more accommodating to industry-wide standards and developers. "),(0,i.kt)("p",null,"IOTA Hub was deprecated with the Chrysalis upgrade and will not work with the new protocol changes. If you somehow still use Hub, we recommend that you to switch our new wallet library ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/iota.rs/welcome"},"Iota.rs"),", or its ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/iota.rs/libraries/overview"},"bindings"),", where you can easily manage IOTA addresses, deposits, and withdrawals for user accounts."),(0,i.kt)("p",null,"To upgrade from Hub to a Chrysalis implementation you will need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Integrate the Chrysalis network using ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/welcome"},"Wallet.rs")," as mentioned in the ",(0,i.kt)("a",{parentName:"li",href:"/introduction/how_tos/exchange"},"Exchange section"),"."),(0,i.kt)("li",{parentName:"ul"},"Pause withdrawals/deposits."),(0,i.kt)("li",{parentName:"ul"},"Make sure all balances have been swept and all deposits have been processed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/introduction/how_tos/migration/token_migration"},"Transfer all IOTA to a generated migration address"),"."),(0,i.kt)("li",{parentName:"ul"},"Once migrated, transfer the IOTA coins to your host wallet account on your wallet.rs implementation.")))}c.isMDXComponent=!0}}]);