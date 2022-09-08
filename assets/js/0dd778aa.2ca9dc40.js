"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"About Nodes",description:"Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle.",image:"/img/participate/banner/banner_about_nodes.png"},i="About Nodes",s={unversionedId:"about-nodes",id:"about-nodes",title:"About Nodes",description:"Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle.",source:"@site/content/nodes/about-nodes.md",sourceDirName:".",slug:"/about-nodes",permalink:"/nodes/about-nodes",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/content/nodes/about-nodes.md",tags:[],version:"current",lastUpdatedAt:1658146548,formattedLastUpdatedAt:"Jul 18, 2022",frontMatter:{title:"About Nodes",description:"Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle.",image:"/img/participate/banner/banner_about_nodes.png"},sidebar:"nodes",next:{title:"Become a Node Operator",permalink:"/nodes/become-a-node-operator"}},l={},c=[{value:"Attaching new transactions to the Tangle",id:"attaching-new-transactions-to-the-tangle",level:2},{value:"Network synchronization",id:"network-synchronization",level:2},{value:"Transaction confirmation",id:"transaction-confirmation",level:2},{value:"Balances on addresses",id:"balances-on-addresses",level:2},{value:"Exposing APIs for Clients",id:"exposing-apis-for-clients",level:2},{value:"HTTP API",id:"http-api",level:3},{value:"Events API",id:"events-api",level:3}],d={toc:c};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about-nodes"},"About Nodes"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"About Nodes",src:n(54745).Z,width:"862",height:"200"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle. This section covers what nodes do in an IOTA network.")),(0,o.kt)("p",null,"Nodes are responsible for the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Attaching new transactions to the Tangle"),(0,o.kt)("li",{parentName:"ul"},"Synchronizing with the rest of the network"),(0,o.kt)("li",{parentName:"ul"},"Deciding which transactions are confirmed"),(0,o.kt)("li",{parentName:"ul"},"Keeping a record of the balances on addresses"),(0,o.kt)("li",{parentName:"ul"},"Exposing APIs for clients")),(0,o.kt)("h2",{id:"attaching-new-transactions-to-the-tangle"},"Attaching new transactions to the Tangle"),(0,o.kt)("p",null,"When nodes receive a new transaction, they attach it to the Tangle by adding it to their local database. As a result, at any point in time, all nodes may have different transactions in their local databases. These transactions make up a node's view of the Tangle. To distribute the transactions across the rest of the network, nodes synchronize their local databases with their neighbors."),(0,o.kt)("h2",{id:"network-synchronization"},"Network synchronization"),(0,o.kt)("p",null,"Like any distributed system, nodes in an IOTA network synchronize their databases with their neighboring nodes to form a single source of truth. When one node, no matter where it is in the world, receives a transaction, it will try to gossip it to all its neighbors. This way, all nodes eventually see all transactions and store them in their local databases."),(0,o.kt)("p",null,"To synchronize, nodes in IOTA networks use milestones. If a node has the history of transactions that a milestone references in its database, that milestone is solid. Therefore, nodes know if they are synchronized if the index of their latest solid milestone is the same as the index of the latest milestone that it has received. When a node is synchronized, it then has enough information to decide which transactions it considers confirmed."),(0,o.kt)("h2",{id:"transaction-confirmation"},"Transaction confirmation"),(0,o.kt)("p",null,"All transactions remain in a pending state until the node is sure of its validity. However, even when a transaction is valid, nodes may not immediately be able to confirm a transaction due to conflicts, like in the case of a double spend. When nodes detect conflicting transactions, they must decide which transaction to consider confirmed. Nodes do this by using ",(0,o.kt)("a",{parentName:"p",href:"/learn/about-iota/an-introduction-to-iota#consensus-in-the-tangle"},"consensus rules")," that are built into their node software."),(0,o.kt)("h2",{id:"balances-on-addresses"},"Balances on addresses"),(0,o.kt)("p",null,"All nodes keep a record of the balances of addresses, so they can respond to client requests for their balance and verify that transactions do not transfer more IOTA tokens than are available on the address. Nodes update their record of balances when a transaction is confirmed."),(0,o.kt)("h2",{id:"exposing-apis-for-clients"},"Exposing APIs for Clients"),(0,o.kt)("h3",{id:"http-api"},"HTTP API"),(0,o.kt)("p",null,"The HTTP API allows clients to interact with the Tangle and ask nodes to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get tip transactions"),(0,o.kt)("li",{parentName:"ul"},"Attach new transactions to the Tangle"),(0,o.kt)("li",{parentName:"ul"},"Do proof of work"),(0,o.kt)("li",{parentName:"ul"},"Get transactions from the Tangle")),(0,o.kt)("h3",{id:"events-api"},"Events API"),(0,o.kt)("p",null,"The Events API allows clients to poll nodes for new transactions and other events that happen on nodes. This API is useful for building applications such as custodial wallets that need to monitor the Tangle for updates to the balances of certain addresses."))}h.isMDXComponent=!0},54745:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner_about_nodes-44a4d7e714cd6fb195b418daf03753b5.png"}}]);