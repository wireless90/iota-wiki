"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[56047],{55904:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),i=["components"],o={description:"An overview of the IOTA Smart Contracts architecture.",image:"/img/multichain.png",keywords:["smart contracts","architecture","Layer 2","Layer 1","explanation"]},s="ISC Architecture",u={unversionedId:"guide/core_concepts/isc-architecture",id:"guide/core_concepts/isc-architecture",title:"ISC Architecture",description:"An overview of the IOTA Smart Contracts architecture.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/isc-architecture.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/isc-architecture",permalink:"/smart-contracts/guide/core_concepts/isc-architecture",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/isc-architecture.md",tags:[],version:"current",frontMatter:{description:"An overview of the IOTA Smart Contracts architecture.",image:"/img/multichain.png",keywords:["smart contracts","architecture","Layer 2","Layer 1","explanation"]},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts",permalink:"/smart-contracts/guide/core_concepts/smart-contracts"},next:{title:"Validators",permalink:"/smart-contracts/guide/core_concepts/validators"}},l={},p=[],h={toc:p};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"isc-architecture"},"ISC Architecture"),(0,c.kt)("p",null,"With IOTA Smart Contracts, anyone can start their own chain and invite others to validate it. Together, these chains are called Layer 2."),(0,c.kt)("p",null,"Each chain has its own state and smart contracts that cause this state to change. As validators execute smart contracts, they tally these changes and write them into the chain. Each time they update the state, they collectively agree on a new state and commit to it by publishing its hash to Layer 1, the Tangle."),(0,c.kt)("p",null,"Each Layer 2 chain is functionally equivalent to, say, Ethereum, but all chains can communicate with Layer 1 and each other, making ISC a more intricate protocol."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"A diagram with multiple smart contract chains. Each is functionally equivalent to the Ethereum blockchain, but they also communicate to Layer 1 and each other.",src:r(37761).Z,title:"Click to see the full-size image.",width:"862",height:"588"})),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"IOTA Smart Contacts multichain architecture.")),(0,c.kt)("p",null,"The comprehensive overview of architectural design decisions of IOTA Smart Contracts can be found in the\n",(0,c.kt)("a",{parentName:"p",href:"https://files.iota.org/papers/ISC_WP_Nov_10_2021.pdf"},"ISC white paper"),"."))}m.isMDXComponent=!0},37761:function(e,t,r){t.Z=r.p+"assets/images/multichain-4f8c53ab2ddaac9eeefe509a54e8f7ee.png"},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=u(r),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||c;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);