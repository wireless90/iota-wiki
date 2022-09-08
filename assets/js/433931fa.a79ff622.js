"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[28253],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=n,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return t?r.createElement(f,o(o({ref:a},d),{},{components:t})):r.createElement(f,o({ref:a},d))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},140:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),n=(t(67294),t(3905));const i={description:"An overview of the available guides for the Chrysalis network that also outlines the changes from IOTA 1.0 to IOTA 1.5, aka Chrysalis.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["IOTA 1.0","IOTA 1.5","changes","guides","migration","developer","reference"]},o="Chrysalis Changelog",s={unversionedId:"reference/changelog",id:"reference/changelog",title:"Chrysalis Changelog",description:"An overview of the available guides for the Chrysalis network that also outlines the changes from IOTA 1.0 to IOTA 1.5, aka Chrysalis.",source:"@site/content/build/introduction-docs/production/docs/reference/changelog.md",sourceDirName:"reference",slug:"/reference/changelog",permalink:"/introduction/reference/changelog",draft:!1,editUrl:"https://github.com/iotaledger/introduction-docs/edit/main/docs/content/build/introduction-docs/production/docs/reference/changelog.md",tags:[],version:"current",frontMatter:{description:"An overview of the available guides for the Chrysalis network that also outlines the changes from IOTA 1.0 to IOTA 1.5, aka Chrysalis.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["IOTA 1.0","IOTA 1.5","changes","guides","migration","developer","reference"]},sidebar:"mySidebar",previous:{title:"IOTA Hub Migration Guide",permalink:"/introduction/how_tos/migration/hub_migration"},next:{title:"Chrysalis Details",permalink:"/introduction/reference/details"}},l={},c=[],d={toc:c};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"chrysalis-changelog"},"Chrysalis Changelog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The format of the address was changed, and it is now based on both the ",(0,n.kt)("inlineCode",{parentName:"li"},"derivation path")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"bech32")," standards. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"/introduction/reference/details#iota-15-address-anatomy"},"IOTA address anatomy")," guide."),(0,n.kt)("li",{parentName:"ul"},"The concepts of ",(0,n.kt)("inlineCode",{parentName:"li"},"bundles")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"transactions")," were replaced with ",(0,n.kt)("inlineCode",{parentName:"li"},"messages")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"payloads"),". The ",(0,n.kt)("inlineCode",{parentName:"li"},"message")," is a data structure that is actually being broadcast in the network and represents a node (vertex) in the Tangle graph. For reference, you can read both the ",(0,n.kt)("a",{parentName:"li",href:"/introduction/reference/details#messages-payloads-and-transactions"},"messages, payload, and transactions")," and ",(0,n.kt)("a",{parentName:"li",href:"/introduction/reference/details#selected-message-payloads"},"selected message payloads")," guides."),(0,n.kt)("li",{parentName:"ul"},"The IOTA network is based on a DAG (Directed Acyclic Graph) to store individual ",(0,n.kt)("inlineCode",{parentName:"li"},"messages")," and related ",(0,n.kt)("inlineCode",{parentName:"li"},"transactions"),". However, each ",(0,n.kt)("inlineCode",{parentName:"li"},"message")," can newly reference up to 8 parent messages. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"/introduction/reference/details#messages-payloads-and-transactions"},"messages, payload, and transactions")," guide."),(0,n.kt)("li",{parentName:"ul"},"The signature scheme based on ",(0,n.kt)("inlineCode",{parentName:"li"},"WOTS")," was replaced with the ",(0,n.kt)("inlineCode",{parentName:"li"},"Ed25519")," signature scheme. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"/introduction/reference/details#seed-and-addresses"},"seed and addresses")," guide."),(0,n.kt)("li",{parentName:"ul"},"Due to the changed signature scheme, IOTA addresses are reusable without any negative security impact. Compared to IOTA 1.0, which was based on ternary, IOTA 1.5 is based on binary and is thus very efficient on all kinds of current hardware devices. In contrast to IOTA 1.0, IOTA 1.5 addresses are perfectly reusable; even if one spends funds from the given address, it can be used again. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"/introduction/reference/details#addresskey-space"},"address/key space")," guide."),(0,n.kt)("li",{parentName:"ul"},"Originally, IOTA 1.0 used an ",(0,n.kt)("inlineCode",{parentName:"li"},"account-based model")," for tracking individual iota tokens. Chrysalis embraced the ",(0,n.kt)("inlineCode",{parentName:"li"},"Unspent Transaction Output")," (also known as ",(0,n.kt)("inlineCode",{parentName:"li"},"UTXO"),") model to track tokens and token holders. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"/introduction/reference/details#unspent-transaction-output-utxo"},"Unspent Transaction Output")," guide."),(0,n.kt)("li",{parentName:"ul"},"The approach to client libraries was completely reengineered from the ground up. There are new official client libraries that serve as ",(0,n.kt)("inlineCode",{parentName:"li"},"one-source-code-of-truth")," to IOTA users and can be combined in a modular fashion based on particular use cases. All libraries provide a binding to other programming languages. For reference, you can read an overview of ",(0,n.kt)("a",{parentName:"li",href:"/introduction/explanations/libraries"},"client libraries"),"."),(0,n.kt)("li",{parentName:"ul"},"Our official IOTA tools, such as wallet software, use the same libraries under the hood so any developer may work in the same environment as we do."),(0,n.kt)("li",{parentName:"ul"},"The official client libraries embraced an ",(0,n.kt)("inlineCode",{parentName:"li"},"Hierarchical Deterministic Wallets")," approach which is fully ",(0,n.kt)("inlineCode",{parentName:"li"},"BIP44")," compatible. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"/introduction/reference/details#addresskey-space"},"address/key space")," guide."),(0,n.kt)("li",{parentName:"ul"},"There is a new official wallet software called Firefly. See ",(0,n.kt)("a",{parentName:"li",href:"https://firefly.iota.org/"},"Firefly")," and the Repo at: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/firefly"},"Firefly Github"))))}u.isMDXComponent=!0}}]);