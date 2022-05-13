"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91882],{25105:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"smart-contracts-VM-and-languages",title:"Smart Contract VM & Languages",description:"This article explains the underlying technologies of IOTA Smart Contracts - the Virtual Machine, and its plugins.",keywords:["Virtual Machines","VM","Smart Contracts","wasp","iscp","Wasm","EVM","Rust","Go","Solidity"]},l=void 0,c={unversionedId:"future/smart-contracts/smart-contracts-VM-and-languages",id:"future/smart-contracts/smart-contracts-VM-and-languages",title:"Smart Contract VM & Languages",description:"This article explains the underlying technologies of IOTA Smart Contracts - the Virtual Machine, and its plugins.",source:"@site/internal/learn/future/smart-contracts/02_VM-and-languages.md",sourceDirName:"future/smart-contracts",slug:"/future/smart-contracts/smart-contracts-VM-and-languages",permalink:"/learn/future/smart-contracts/smart-contracts-VM-and-languages",draft:!1,editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/future/smart-contracts/02_VM-and-languages.md",tags:[],version:"current",lastUpdatedAt:1638881940,formattedLastUpdatedAt:"12/7/2021",sidebarPosition:2,frontMatter:{id:"smart-contracts-VM-and-languages",title:"Smart Contract VM & Languages",description:"This article explains the underlying technologies of IOTA Smart Contracts - the Virtual Machine, and its plugins.",keywords:["Virtual Machines","VM","Smart Contracts","wasp","iscp","Wasm","EVM","Rust","Go","Solidity"]},sidebar:"learn",previous:{title:"Introduction",permalink:"/learn/future/smart-contracts/smart-contracts-introduction"},next:{title:"Validators",permalink:"/learn/future/smart-contracts/smart-contracts-validators"}},u={},m=[{value:"The Virtual Machine",id:"the-virtual-machine",level:2},{value:"Wasm VM",id:"wasm-vm",level:2},{value:"Why We Choose Rust",id:"why-we-choose-rust",level:3},{value:"Why We Choose TinyGo",id:"why-we-choose-tinygo",level:3},{value:"Ethereum VM (EVM)",id:"ethereum-vm-evm",level:2}],p={toc:m};function h(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article explains the underlying technologies of IOTA Smart Contracts - the Virtual Machine, and its plugins."),(0,o.kt)("p",null,"You will learn:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is a Virtual Machine and what are plugins?"),(0,o.kt)("li",{parentName:"ul"},"Differences between Wasm VM and EVM plugins"),(0,o.kt)("li",{parentName:"ul"},"Which programming languages are supported?")),(0,o.kt)("h2",{id:"the-virtual-machine"},"The Virtual Machine"),(0,o.kt)("p",null,"In IOTA Smart Contracts we distinguish two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Virtual Machine (VM) itself"),(0,o.kt)("li",{parentName:"ul"},"VM plugins: processors, smart contracts which dynamically extend the VM.")),(0,o.kt)("p",null,'The VM itself is a deterministic executable, a "black box".'),(0,o.kt)("p",null,"The VM can be extended dynamically by adding VM plugins, the VM processors which run deterministic smart contract programs."),(0,o.kt)("p",null,"In IOTA Smart Contracts, an abstraction is a collection of generic interfaces which makes the whole architecture of IOTA Smart Contracts and the Wasp node agnostic about what exact kind of deterministic computation machinery is used to run smart contract programs."),(0,o.kt)("p",null,"Currently, there are two VM plugins available, the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/intro"},"Wasm VM")," and the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/evm/introduction"},"Ethereum VM (EVM)"),"."),(0,o.kt)("h2",{id:"wasm-vm"},"Wasm VM"),(0,o.kt)("p",null,"WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Any high-level language can be used to write an IOTA Smart Contract to be compiled into Wasm. The Wasm VM currently supports TinyGo, a subset of Go, and the Rust programming language."),(0,o.kt)("h3",{id:"why-we-choose-rust"},"Why We Choose Rust"),(0,o.kt)("p",null,"We use Rust as a high-level language to write Smart Contracts(SC) programs for several reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Wasm tooling is very advanced, so Rust programs can easily be compiled into Wasm binaries."),(0,o.kt)("li",{parentName:"ul"},"The flexibility and memory management model of Rust allows minimum runtime overhead in the Wasm binary."),(0,o.kt)("li",{parentName:"ul"},"Wasm binaries generated from Rust are very small, just a few kilobytes"),(0,o.kt)("li",{parentName:"ul"},"Rust is becoming a popular language of choice for SC development with good support and a wide developer community.")),(0,o.kt)("h3",{id:"why-we-choose-tinygo"},"Why We Choose TinyGo"),(0,o.kt)("p",null,"It's also possible to write an IOTA Smart Contract in the TinyGo programming language, which is a subset of Go. Using TinyGo has the following advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TinyGo and Go are easy to understand and learn."),(0,o.kt)("li",{parentName:"ul"},"Go is a very popular language within the IOTA community."),(0,o.kt)("li",{parentName:"ul"},"A very extended and easy to use developer environment")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp"},"Wasp Node")," is programmed in Go, as is the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/solo/what-is-solo/"},"Test Framework Solo"),", which means that you don't have to constantly switch languages when testing your code. In fact, with Schema tool you can test in the exact same way as you program your Smart Contract."),(0,o.kt)("p",null,"TinyGo code can be tested without compiling to Wasm, which means you can use the debugger to step through the code and inspect variables along the way."),(0,o.kt)("p",null,"You can find many Wasm Smart Contracts examples ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/contracts/wasm"},"here in the code repository"),"."),(0,o.kt)("h2",{id:"ethereum-vm-evm"},"Ethereum VM (EVM)"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"Ethereum Virtual Machine (EVM)")," is the runtime environment in Ethereum that allows the development of Smart Contracts with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.9/"},"Solidity")," programming language."),(0,o.kt)("p",null,"Solidity is an object-oriented programming language specially developed to write smart contracts."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/evm/introduction/"},"IOTA Smart Contract EVM Plugin")," leverages the current development of Solidity Smart Contracts and allows Blockchain developers to stay in their comfort zone."),(0,o.kt)("p",null,"In the next article, you will learn everything about the IOTA Smart Contract validators."))}h.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(a),h=r,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return a?n.createElement(d,i(i({ref:e},u),{},{components:a})):n.createElement(d,i({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);