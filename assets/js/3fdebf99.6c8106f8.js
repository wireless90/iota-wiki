"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[12578],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=l(a),p=o,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={keywords:["create","Chain","EVM","Solidity","Deploy","hardhat","metamask","JSON","RPC"],description:"Create, fund and deploy a new EVM Chain using IOTA Smart Contracts.",image:"/img/logo/WASP_logo_dark.png"},i="Creating an EVM Chain",c={unversionedId:"guide/evm/create-chain",id:"guide/evm/create-chain",title:"Creating an EVM Chain",description:"Create, fund and deploy a new EVM Chain using IOTA Smart Contracts.",source:"@site/content/build/wasp/production/documentation/docs/guide/evm/create-chain.md",sourceDirName:"guide/evm",slug:"/guide/evm/create-chain",permalink:"/smart-contracts/guide/evm/create-chain",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/evm/create-chain.md",tags:[],version:"current",frontMatter:{keywords:["create","Chain","EVM","Solidity","Deploy","hardhat","metamask","JSON","RPC"],description:"Create, fund and deploy a new EVM Chain using IOTA Smart Contracts.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"EVM Limitations within IOTA Smart Contracts",permalink:"/smart-contracts/guide/evm/limitations"},next:{title:"EVM Tooling",permalink:"/smart-contracts/guide/evm/tooling"}},s={},l=[{value:"1. Create the IOTA Smart Contracts Chain",id:"1-create-the-iota-smart-contracts-chain",level:2},{value:"2. Fund Your Account on Your IOTA Smart Contracts Chain",id:"2-fund-your-account-on-your-iota-smart-contracts-chain",level:2},{value:"3. Deploy the EVM Chain Contract",id:"3-deploy-the-evm-chain-contract",level:2},{value:"Running the JSON-RPC Interface",id:"running-the-json-rpc-interface",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2}],h={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-an-evm-chain"},"Creating an EVM Chain"),(0,o.kt)("p",null,"EVM chains run inside IOTA Smart Contracts chains. So in order to start an EVM chain, you will first need to follow the steps to ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/setting-up-a-chain"},"start an IOTA Smart Contracts chain"),", or use an existing IOTA Smart Contracts chain to start the EVM chain on."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"An IOTA Smart Contracts chain can only contain 1 EVM chain contract"),". If your IOTA Smart Contracts chain already has an EVM chain contract, you should use that chain contract instead of creating a new one.")),(0,o.kt)("h2",{id:"1-create-the-iota-smart-contracts-chain"},"1. Create the IOTA Smart Contracts Chain"),(0,o.kt)("p",null,"If you don't have an IOTA Smart Contracts chain, you should create one. To do so, follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/setting-up-a-chain"},"on setting up a chain"),"."),(0,o.kt)("h2",{id:"2-fund-your-account-on-your-iota-smart-contracts-chain"},"2. Fund Your Account on Your IOTA Smart Contracts Chain"),(0,o.kt)("p",null,"In order to deploy the EVM chain contract, you need to have some IOTA locked on your newly created chain to fund that action. To do this, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli chain deposit IOTA:10000\n")),(0,o.kt)("p",null,"This locks 10000 IOTA into your name on your chain, which can be used on to pay for the creation of the EVM Chain contract."),(0,o.kt)("h2",{id:"3-deploy-the-evm-chain-contract"},"3. Deploy the EVM Chain Contract"),(0,o.kt)("p",null,"In order to deploy the EVM Chain contract, you need to make sure that the token that will be used on that chain is supplied right at its inception to a given address. You will have to generate a compatible address with a private key file. "),(0,o.kt)("p",null,"The most intuitive way to do this is by using ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io"},"Metamask"),". In MetaMask,  you can create a wallet (it does not matter what chain it is connected to). Once a wallet is generated, you will see a wallet address under its name. You can copy this to your clipboard. This is the address that will receive the full supply of tokens on that chain."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(65759).Z},(0,o.kt)("img",{alt:"MetaMask",src:a(29150).Z,width:"375",height:"284"}))),(0,o.kt)("p",null,"Once you have this, you are ready to deploy the EVM chain with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli chain evm deploy -a mychain --alloc 0x63c00c65BE86463491167eE26958a5A599BEbD2c:1000000000000000000000000\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"-a")," parameter indicates the name of the chain that you want to deploy your EVM chain on top of. ",(0,o.kt)("inlineCode",{parentName:"li"},"mychain")," in this case."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"--alloc")," parameter is the address that you copied from metamask(",(0,o.kt)("inlineCode",{parentName:"li"},"0x63c00c65BE86463491167eE26958a5A599BEbD2c")," in this case), followed by a ",(0,o.kt)("inlineCode",{parentName:"li"},":"),", and the value of Smart Contract Tokens that you want to be available to for use on EVM(",(0,o.kt)("inlineCode",{parentName:"li"},"1000000")," tokens in this case, followed by 18 decimal zeroes).")),(0,o.kt)("p",null,"Once this command has been executed successfully your EVM chain is up and running, and ready to be used."),(0,o.kt)("p",null,"You can verify the chain has been deployed by visiting the wasp dashboard and checking the smart contracts deployed on the chain. You should be able to see an evm contract over there."),(0,o.kt)("h2",{id:"running-the-json-rpc-interface"},"Running the JSON-RPC Interface"),(0,o.kt)("p",null,"In order to communicate with the EVM contract, you will need to run an additional server application that is compatible with how interactions usually takes place on other networks. This allows you to use other tools from those ecosystems like ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io"},"MetaMask")," and ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," to connect to our EVM chain. "),(0,o.kt)("p",null,"To run this server, run the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli chain evm jsonrpc --chainid 1074\n")),(0,o.kt)("p",null,"This will start the ",(0,o.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/"},"JSON-RPC")," server on port 8545 for you with Chain ID 1074. You can now  point MetaMask or Hardhat to that server's address on port 8545, and interact with it like any other EVM based chain."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Re-using an existing Chain ID is not recommended, and can be a security risk. For any serious chain you will be running make sure you register a unique Chain ID on ",(0,o.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"Chainlist")," and use that instead of the default.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The current implementation uses the wasp-cli's saves the account to pay for any fees in IOTA while using the JSON-RPC interface.  This is of course not ideal in a normal usage scenario. Upcoming releases  will address this in a more user-friendly way.")),(0,o.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JbUGX-9BTSo",title:"EVM Chain Setup",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0},65759:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/metamask-a9eb1000ab2aa4bcbc9016721ebb88c0.png"},29150:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metamask-a9eb1000ab2aa4bcbc9016721ebb88c0.png"}}]);