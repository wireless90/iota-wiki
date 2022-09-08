"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39542],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,c(c({ref:e},p),{},{components:n})):a.createElement(h,c({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36885:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={keywords:["Smart Contracts","structure","State","Entry points","Wasm"],description:"Each smart contract instance has a program with a collection of entry points and a state.",image:"/img/tutorial/SC-structure.png"},c="Anatomy of a Smart Contract",i={unversionedId:"guide/core_concepts/smart-contract-anatomy",id:"guide/core_concepts/smart-contract-anatomy",title:"Anatomy of a Smart Contract",description:"Each smart contract instance has a program with a collection of entry points and a state.",source:"@site/content/build/wasp/production/documentation/docs/guide/core_concepts/smart-contract-anatomy.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/smart-contract-anatomy",permalink:"/smart-contracts/guide/core_concepts/smart-contract-anatomy",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/core_concepts/smart-contract-anatomy.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","structure","State","Entry points","Wasm"],description:"Each smart contract instance has a program with a collection of entry points and a state.",image:"/img/tutorial/SC-structure.png"},sidebar:"tutorialSidebar",previous:{title:"State, Transitions, and State Anchoring",permalink:"/smart-contracts/guide/core_concepts/states"},next:{title:"Sandbox Interface",permalink:"/smart-contracts/guide/core_concepts/sandbox"}},s={},l=[{value:"Identifying a Smart Contract",id:"identifying-a-smart-contract",level:2},{value:"State",id:"state",level:2},{value:"Entry Points",id:"entry-points",level:2},{value:"Execution Results",id:"execution-results",level:2},{value:"Error Handling",id:"error-handling",level:2}],p={toc:l};function u(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anatomy-of-a-smart-contract"},"Anatomy of a Smart Contract"),(0,r.kt)("p",null,"Smart contracts are programs which are immutably stored in the chain."),(0,r.kt)("p",null,"The logical structure of IOTA Smart Contracts is independent of the VM type you\nuse, be it a ",(0,r.kt)("em",{parentName:"p"},"Wasm")," smart contract or any other VM type."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Smart Contract Structure",src:n(33358).Z,width:"862",height:"514"})),(0,r.kt)("h2",{id:"identifying-a-smart-contract"},"Identifying a Smart Contract"),(0,r.kt)("p",null,"Each smart contract on the chain is identified by its name hashed into 4 bytes\nand interpreted as ",(0,r.kt)("inlineCode",{parentName:"p"},"uint32")," value: the ",(0,r.kt)("inlineCode",{parentName:"p"},"hname"),"."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"hname")," of the root contract is ",(0,r.kt)("inlineCode",{parentName:"p"},"0xcebf5908"),", the unique identifier of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"root")," contract in every chain. The exception is the ",(0,r.kt)("inlineCode",{parentName:"p"},"_default")," contract which always has ",(0,r.kt)("inlineCode",{parentName:"p"},"hname")," ",(0,r.kt)("inlineCode",{parentName:"p"},"0x00000000"),"."),(0,r.kt)("p",null,"Each smart contract instance has a program with a collection of entry points and\na state. An entry point is a function of the program through which the program\ncan be invoked."),(0,r.kt)("p",null,"Depending on the type of the entry point there are several ways to invoke an entry point: a request, a call and a view call"),(0,r.kt)("p",null,"The smart contract program can access its state and account through an interface\nlayer called the ",(0,r.kt)("em",{parentName:"p"},"Sandbox"),"."),(0,r.kt)("h2",{id:"state"},"State"),(0,r.kt)("p",null,"The smart contract state is its data, with each update stored on the chain. The\nstate can only be modified by the smart contract program itself. There are two\nparts of the state:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A collection of key/value pairs called the ",(0,r.kt)("inlineCode",{parentName:"li"},"data state"),". Each key and value\nare byte arrays of arbitrary size (there are practical limits set by the\ndatabase, of course). The value of the key/value pair is always retrieved by\nits key."),(0,r.kt)("li",{parentName:"ul"},"A collection of ",(0,r.kt)("inlineCode",{parentName:"li"},"color: balance")," pairs called the ",(0,r.kt)("inlineCode",{parentName:"li"},"account"),". The account\nrepresents the balances of tokens of specific colors controlled by the smart\ncontract. Receiving and spending tokens into/from the account means changing\nthe account's balances.")),(0,r.kt)("p",null,"Only the smart contract program can change its data state and spend from its\naccount. Tokens can be sent to the smart contract account by any other agent on\nthe ledger, be it a wallet with an address or another smart contract."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/accounts/how-accounts-work"},"Accounts")," for more info on sending and receiving tokens."),(0,r.kt)("h2",{id:"entry-points"},"Entry Points"),(0,r.kt)("p",null,"There are two types of entry points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Full entry points"),"(or just ",(0,r.kt)("em",{parentName:"li"},"entry points"),"): These functions can modify\n(mutate) the smart contract's state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"View entry points"),"(or ",(0,r.kt)("em",{parentName:"li"},"views"),"): These are read-only functions. They are only used\nto retrieve the information from the smart contract state. They cannot\nmodify the state, i.e. are read-only calls.")),(0,r.kt)("h2",{id:"execution-results"},"Execution Results"),(0,r.kt)("p",null,'After a request to a Smart Contract is executed (a call to a "full entry point"),\na ',(0,r.kt)("inlineCode",{parentName:"p"},"receipt")," will be added to the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/blocklog"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockLog")),"\ndetailing the execution results of said request: whether it was successful, the block it was\nincluded in, and other information. Any events dispatched by the Smart Contract in context of\nthis execution will also be added to the BlockLog."),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"When a smart contract execution is interrupted for some reason (exception), or it produces an\nerror (missing parameter, or other inconsistency), the funds will be refunded to the caller,\nexcept the fees. Any error that resulted from the SC execution can be viewed on the contract\n",(0,r.kt)("inlineCode",{parentName:"p"},"receipt")," (present in the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/blocklog"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockLog")),")."))}u.isMDXComponent=!0},33358:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/SC-structure-f91faed38e14c4123eb756f793b6a959.png"}}]);