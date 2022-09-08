"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[25073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={description:"Smart Contracts can only interact with the world by using the Sandbox interface which provides limited and deterministic access to the state through a key/value storage abstraction.",image:"/img/sandbox.png",keywords:["smart contracts","sandbox","interface","storage abstraction","explanation"]},i="Sandbox Interface",c={unversionedId:"guide/core_concepts/sandbox",id:"guide/core_concepts/sandbox",title:"Sandbox Interface",description:"Smart Contracts can only interact with the world by using the Sandbox interface which provides limited and deterministic access to the state through a key/value storage abstraction.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/sandbox.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/sandbox",permalink:"/smart-contracts/develop/guide/core_concepts/sandbox",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/sandbox.md",tags:[],version:"current",frontMatter:{description:"Smart Contracts can only interact with the world by using the Sandbox interface which provides limited and deterministic access to the state through a key/value storage abstraction.",image:"/img/sandbox.png",keywords:["smart contracts","sandbox","interface","storage abstraction","explanation"]},sidebar:"tutorialSidebar",previous:{title:"Calling a Smart Contract",permalink:"/smart-contracts/develop/guide/core_concepts/invocation"},next:{title:"Core Contracts",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/overview"}},s={},l=[],d={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sandbox-interface"},"Sandbox Interface"),(0,r.kt)("p",null,"A smart contract's access to the world has to be restricted. Imagine a smart contract that would directly tap into a\nweather forecast website: as the weather changes, the result of the contract's execution will also change. This smart\ncontract is not deterministic, meaning that you cannot reproduce the result yourself to verify it because the result for\neach execution could be different."),(0,r.kt)("p",null,"The access to the chain's state has to be curated, too. The chain owner and developers of individual smart contracts are\nnot necessarily the same entity. A single malicious contract could ruin the whole chain if not limited to its own space.\nInstead of working on the state as a whole, each smart contract can only modify a part of it."),(0,r.kt)("p",null,"The only way for smart contracts to access data is to use the Sandbox interface, which is deterministic. It provides\ntheir internal state as a list of key/value pairs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sandbox",src:n(70211).Z,width:"862",height:"682"})),(0,r.kt)("p",null,"Besides reading and writing to the contract state, the Sandbox interface allows smart contracts to access:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"./accounts/how-accounts-work#agent-id"},"ID")," of the contract."),(0,r.kt)("li",{parentName:"ul"},"The details of the current request or view call."),(0,r.kt)("li",{parentName:"ul"},"The current request allowance and a way to claim the allowance."),(0,r.kt)("li",{parentName:"ul"},"The balances owned by the contract."),(0,r.kt)("li",{parentName:"ul"},"The ID of whoever had deployed the contract."),(0,r.kt)("li",{parentName:"ul"},"The timestamp of the current block."),(0,r.kt)("li",{parentName:"ul"},"Cryptographic utilities like hashing, signature verification, and so on."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/develop/guide/schema/events"},"events")," dispatch."),(0,r.kt)("li",{parentName:"ul"},"Entropy that emulates randomness in an unpredictable yet deterministic way."),(0,r.kt)("li",{parentName:"ul"},"Logging. Used for debugging in a test environment.")),(0,r.kt)("p",null,'The Sandbox API available in "view calls" is slightly more limited than the one available in normal "execution calls".\nFor example, besides the state access being read-only for a view, they cannot issue requests, emit events, etc.'))}u.isMDXComponent=!0},70211:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sandbox-c1866a6e91a9d1630540da307e84ca19.png"}}]);