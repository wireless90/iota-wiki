"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[16117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},26354:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={description:"Compatibility between the ISC EVM layer and existing Ethereum smart contracts and tooling.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Ethereum","Solidity","limitations","compatibility","fees","reference"]},o="EVM compatibility in IOTA Smart Contracts",s={unversionedId:"guide/evm/compatibility",id:"guide/evm/compatibility",title:"EVM compatibility in IOTA Smart Contracts",description:"Compatibility between the ISC EVM layer and existing Ethereum smart contracts and tooling.",source:"@site/content/build/wasp/develop/documentation/docs/guide/evm/compatibility.md",sourceDirName:"guide/evm",slug:"/guide/evm/compatibility",permalink:"/smart-contracts/develop/guide/evm/compatibility",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/evm/compatibility.md",tags:[],version:"current",frontMatter:{description:"Compatibility between the ISC EVM layer and existing Ethereum smart contracts and tooling.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Ethereum","Solidity","limitations","compatibility","fees","reference"]},sidebar:"tutorialSidebar",previous:{title:"EVM/Solidity Based Smart Contracts",permalink:"/smart-contracts/develop/guide/evm/introduction"},next:{title:"How to use EVM in IOTA Smart Contracts",permalink:"/smart-contracts/develop/guide/evm/using"}},c={},l=[],p={toc:l};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"evm-compatibility-in-iota-smart-contracts"},"EVM compatibility in IOTA Smart Contracts"),(0,r.kt)("p",null,"EVM support in IOTA Smart Contracts is provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"evm")," core contract. Its main purpose is to store the EVM state (account balances, state, code, etc.) and to provide a way to execute EVM code in order to manipulate the state. All of this is done on top of the ISC layer, which itself provides the rest of the machinery needed to run smart contracts (signed requests, blocks, state, proofs, etc)."),(0,r.kt)("p",null,"However, The ISC EVM layer is also designed to be as compatibile as possible with existing Ethereum tools like ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),', which assume that the EVM code will be run on an Ethereum blockchain, composed of Ethereum blocks containing Ethereum transactions. Unfortunately, since ISC works in a fundamentally different way, providing 100% compatibility is not possible. We do our best to somehow "fool" the Ethereum tools into thinking they are interfacing with a real Ethereum node, but some differences in behavior are inevitable.'),(0,r.kt)("p",null,"Here are some of the most important properties and limitations of EVM support in IOTA Smart Contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Wasp node provides a JSON-RPC service, which is the standard protocol used by Ethereum tools. Upon receiving a signed Ethereum transaction via JSON-RPC, the transaction is wrapped into an ISC off-ledger request. The sender of the request is the Ethereum address that signed the original transaction (e.g. the Metamask account).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"While ISC contracts are identified by an ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/smart-contract-anatomy"},"hname"),", EVM contracts are identified by their Ethereum address.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"EVM contracts are not listed in the chain's ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/core_contracts/root"},"contract registry"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"EVM contracts cannot be called via regular ISC requests; they can only be\ncalled through the JSON-RPC service.\nAs a consequence, EVM contracts cannot receive on-ledger requests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The EVM state is stored in raw form (in contrast with an Ethereum blockchain, which stores the state in a Merkle tree \u2014 it would be inefficient to do that since it would be duplicating work done by the ISC layer).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any Ethereum transactions present in an ISC block are executed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"evm"),' core contract, updating the EVM state accordingly. To provide compatibility with EVM tools, a "fake" Ethereum block is also created and stored. Not being part of a real Ethereum blockchain, some attributes of the blocks will contain dummy values (e.g. ',(0,r.kt)("inlineCode",{parentName:"p"},"stateRoot"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce"),", etc).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each stored block contains the executed Ethereum transactions and corresponding Ethereum receipts. If storage is limited, it is possible to configure EVM so that the latest N blocks are stored.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There is no guaranteed ",(0,r.kt)("em",{parentName:"p"},"block time"),'. A new EVM "block" will be created only when an ISC block is created, and ISC does not enforce an average block time.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any Ethereum address is accepted as a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"AgentID"),", and thus can own L2 tokens on an IOTA Smart Contract chain, just like IOTA addresses.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Ethereum balance of an account is tied to its L2 ISC balance in the token used to pay for gas (e.g. by default ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getBalance")," will return the L2 base token balance of the given Ethereum account). Any attempt to directly modify an Ethereum account balance will fail (e.g. attaching value to a transaction, calling ",(0,r.kt)("inlineCode",{parentName:"p"},"<address>.transfer(...)"),", etc).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In order to manipulate the owned ISC tokens (and in general, to access ISC functionality), there is a ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/evm/magic"},"special Ethereum contract")," that provides bindings to the ISC sandbox (e.g. call ",(0,r.kt)("inlineCode",{parentName:"p"},"isc.send(...)")," to send tokens).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The used EVM gas is converted to ISC gas before being charged to the sender. The conversion ratio is configurable. The token used to pay for gas is the same token configured in the ISC chain (IOTA by default). The gas fee is debited from the sender's L2 account, and it has to be deposited beforehand."))))}m.isMDXComponent=!0}}]);