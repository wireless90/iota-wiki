"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||r;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18752:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={description:"A public testnet for developers to try out smart contracts",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","TestNet"]},o="Testnet",l={unversionedId:"guide/chains_and_nodes/testnet",id:"guide/chains_and_nodes/testnet",title:"Testnet",description:"A public testnet for developers to try out smart contracts",source:"@site/content/build/wasp/develop/documentation/docs/guide/chains_and_nodes/testnet.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/testnet",permalink:"/smart-contracts/develop/guide/chains_and_nodes/testnet",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/chains_and_nodes/testnet.md",tags:[],version:"current",frontMatter:{description:"A public testnet for developers to try out smart contracts",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","TestNet"]},sidebar:"tutorialSidebar",previous:{title:"Chain Management",permalink:"/smart-contracts/develop/guide/chains_and_nodes/chain-management"},next:{title:"Introduction to the Wasm VM for ISC",permalink:"/smart-contracts/develop/guide/wasm_vm/intro"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Configuring <code>wasp-cli</code>",id:"configuring-wasp-cli",level:2},{value:"Initialize <code>wasp-cli</code>",id:"initialize-wasp-cli",level:3},{value:"Set the GoShimmer API URL",id:"set-the-goshimmer-api-url",level:3},{value:"Request Funds",id:"request-funds",level:3},{value:"Configure the Wasp API URL",id:"configure-the-wasp-api-url",level:3},{value:"Set the Chain ID",id:"set-the-chain-id",level:3},{value:"Test Your Chain",id:"test-your-chain",level:3},{value:"Putting It All Together",id:"putting-it-all-together",level:3},{value:"Interact with EVM",id:"interact-with-evm",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testnet"},"Testnet"),(0,i.kt)("p",null,"The testnet is deployed for the community to use for testing and interacting with smart contracts."),(0,i.kt)("admonition",{title:"unscheduled network resets",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To make the barrier to entry for trying out the testnet as low as possible, we decided to set all possible fees to zero.\nSince we expect this decision will pollute the chain quickly, we\u2019ll perform regular, unscheduled network resets if\nneeded.")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This testnet is deployed with our GoShimmer cluster that backs smart contracts. Multiple committee nodes do the work for\nthe chain and multiple access nodes are exposed via the endpoints listed below. We do throttle the endpoints to prevent\noverloading the testnet because we are looking for functionality testing more than stress testing."),(0,i.kt)("h2",{id:"endpoints"},"Endpoints"),(0,i.kt)("p",null,"You can access the testnet via the following endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wasp.sc.iota.org"},"https://wasp.sc.iota.org")," . ",(0,i.kt)("strong",{parentName:"li"},"Username"),": wasp ",(0,i.kt)("strong",{parentName:"li"},"Password"),": wasp",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Wasp dashboard to explore the node configuration and view peering/chain configurations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.wasp.sc.iota.org"},"https://api.wasp.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Wasp api to deploy and interact with smart contracts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.wasp.sc.iota.org/info"},"https://api.wasp.sc.iota.org/info"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Information about the Wasp access node"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.wasp.sc.iota.org/doc"},"https://api.wasp.sc.iota.org/doc"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"API reference for the Wasp API"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://evm.wasp.sc.iota.org"},"https://evm.wasp.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The URL to interact with the Ethereum Virtual Machine on our testnet"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://explorer.wasp.sc.iota.org"},"https://explorer.wasp.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The URL to interact with the Ethereum Block Explorer on our testnet"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://goshimmer.sc.iota.org"},"https://goshimmer.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The GoShimmer dashboard to explore the Tangle backing our smart contract testnet"),(0,i.kt)("li",{parentName:"ul"},"goshimmer.sc.iota.org:5000",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The TXStream TCP port to use for the ",(0,i.kt)("inlineCode",{parentName:"li"},"nodeconn")," address with Wasp nodes."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.goshimmer.sc.iota.org/"},"https://api.goshimmer.sc.iota.org/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The GoShimmer api to interact with the Tangle directly"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.goshimmer.sc.iota.org/info"},"https://api.goshimmer.sc.iota.org/info"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Information about GoShimmer via the API"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://demo.sc.iota.org"},"https://demo.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Our FairRoulette demo application to see a live smart contract in action"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wasp.sc.iota.org/metrics"},"https://wasp.sc.iota.org/metrics"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"System metrics")))),(0,i.kt)("h2",{id:"configuring-wasp-cli"},"Configuring ",(0,i.kt)("inlineCode",{parentName:"h2"},"wasp-cli")),(0,i.kt)("h3",{id:"initialize-wasp-cli"},"Initialize ",(0,i.kt)("inlineCode",{parentName:"h3"},"wasp-cli")),(0,i.kt)("p",null,"You will need to initialize ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," to create a seed that will be used to generate addresses."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli init\n")),(0,i.kt)("h3",{id:"set-the-goshimmer-api-url"},"Set the GoShimmer API URL"),(0,i.kt)("p",null,"Next, you should tell ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," how to reach our GoShimmer node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli set goshimmer.api https://api.goshimmer.sc.iota.org\n")),(0,i.kt)("h3",{id:"request-funds"},"Request Funds"),(0,i.kt)("p",null,"To deploy a smart contract, you will need some funds. The ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," tool makes this easy on our testnet. Run the\nfollowing command to request some funds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli request-funds\n")),(0,i.kt)("h3",{id:"configure-the-wasp-api-url"},"Configure the Wasp API URL"),(0,i.kt)("p",null,"Next, you need to let ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," know how to reach ",(0,i.kt)("em",{parentName:"p"},"Wasp")," by configuring the API address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli set wasp.0.api https://api.wasp.sc.iota.org\n")),(0,i.kt)("h3",{id:"set-the-chain-id"},"Set the Chain ID"),(0,i.kt)("p",null,"You will need to set the chain ID in ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," to find the correct chain. You can find the ChainID by navigating to\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://wasp.sc.iota.org/chains"},"chains")," page of the wasp dashboard. Click on the ChainID of the chain. You will be\nable to copy the ChainID from the next page. It will be formatted like ",(0,i.kt)("inlineCode",{parentName:"p"},"jaSDxeZNtum7kLuRg8oWQ6nXKgYjb3XVq7yiwnvtUG3C"),"."),(0,i.kt)("p",null,"Use the ChainID to tell ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," which chain you want to interact with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli set chains.testchain jaSDxeZNtum7kLuRg8oWQ6nXKgYjb3XVq7yiwnvtUG3C\nwasp-cli set chain testchain\n")),(0,i.kt)("h3",{id:"test-your-chain"},"Test Your Chain"),(0,i.kt)("p",null,"We have deployed a FairRoulette game on the ",(0,i.kt)("strong",{parentName:"p"},"testchain"),". You can use to ensure your configuration is correct."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli --verbose chain post-request fairroulete placeBet string number int 2\n")),(0,i.kt)("h3",{id:"putting-it-all-together"},"Putting It All Together"),(0,i.kt)("p",null,"For simplicity, here is the full set of commands to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli init\nwasp-cli set goshimmer.api https://api.goshimmer.sc.iota.org\nwasp-cli request-funds\nwasp-cli set wasp.0.api https://api.wasp.sc.iota.org\nwasp-cli set chains.testchain jaSDxeZNtum7kLuRg8oWQ6nXKgYjb3XVq7yiwnvtUG3C\nwasp-cli set chain testchain\n")),(0,i.kt)("h2",{id:"interact-with-evm"},"Interact with EVM"),(0,i.kt)("p",null,"We have deployed an experimental EVM chain that you can interact with. To begin, add a custom network to Metamask with\nthe following configuration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RPC URL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://evm.wasp.sc.iota.org"},"https://evm.wasp.sc.iota.org"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,i.kt)("td",{parentName:"tr",align:null},"1074")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Block Explorer URL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://explorer.wasp.sc.iota.org"},"https://explorer.wasp.sc.iota.org"))))),(0,i.kt)("p",null,"It should look similar to this image."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MetaMask",src:a(78761).Z,width:"676",height:"1068"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The other values (network name and currency symbol) can be whatever value you like.")))}u.isMDXComponent=!0},78761:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metamask_testnet-8d0b1b721ed3e6eea93ee4eaee6d12b1.png"}}]);