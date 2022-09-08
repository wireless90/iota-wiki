"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[53640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,c(c({ref:t},p),{},{components:r})):o.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","core","initialization","request handling","on-chain ledger","accounts","data","receipts"]},c="Core Contracts",i={unversionedId:"guide/core_concepts/core_contracts/overview",id:"guide/core_concepts/core_contracts/overview",title:"Core Contracts",description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",source:"@site/content/build/wasp/production/documentation/docs/guide/core_concepts/core_contracts/overview.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/overview",permalink:"/smart-contracts/guide/core_concepts/core_contracts/overview",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/core_concepts/core_contracts/overview.md",tags:[],version:"current",frontMatter:{description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","core","initialization","request handling","on-chain ledger","accounts","data","receipts"]},sidebar:"tutorialSidebar",previous:{title:"Sandbox Interface",permalink:"/smart-contracts/guide/core_concepts/sandbox"},next:{title:"The `root` Contract",permalink:"/smart-contracts/guide/core_concepts/core_contracts/root"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"core-contracts"},"Core Contracts"),(0,n.kt)("p",null,"There are currently 6 core smart contracts that are always deployed on each\nchain. These are responsible for the vital functions of the chain and\nprovide infrastructure for all other smart contracts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/root"},(0,n.kt)("strong",{parentName:"a"},"root"))," - Responsible for the initialization of the chain, maintains registry of deployed contracts.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/default"},(0,n.kt)("strong",{parentName:"a"},"_default")),": Any request that cannot be handled by any of the\nother deployed contracts ends up here.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/accounts"},(0,n.kt)("strong",{parentName:"a"},"accounts")),": Responsible for the on-chain ledger of accounts (who owns what).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/blob"},(0,n.kt)("strong",{parentName:"a"},"blob")),": Responsible for the immutable registry of binary objects of arbitrary size. One blob is a collection of named binary chunks of data. For\nexample, a blob can be used to store a collections of ",(0,n.kt)("em",{parentName:"p"},"wasm")," binaries, needed\nto deploy ",(0,n.kt)("em",{parentName:"p"},"WebAssembly")," smart contracts. Each blob in the registry is\nreferenced by its hash which is deterministically calculated from its data.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/blocklog"},(0,n.kt)("strong",{parentName:"a"},"blocklog")),": Keeps track of the blocks and receipts of requests which were processed by the chain. It also contains all events emitted by smart contracts.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/governance"},(0,n.kt)("strong",{parentName:"a"},"governance")),": Handles the administrative functions of the chain. For example: rotation of the committee of validators of the chain, fees and other chain-specific configurations."))))}u.isMDXComponent=!0}}]);