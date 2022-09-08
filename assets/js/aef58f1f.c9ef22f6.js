"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[60775],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(i),u=r,m=p["".concat(l,".").concat(u)]||p[u]||g[u]||a;return i?n.createElement(m,o(o({ref:t},d),{},{components:i})):n.createElement(m,o({ref:t},d))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},69930:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const a={image:"/img/integration-services/integration_services_welcome.png",description:"The IOTA Integration Services implement a high-level API for common interactions with decentralized identities and Data Streams.",keywords:["integration services","decentralized identity","streams","use cases","audit trail gateway","Self-Sovereign Identity Bridge","explanation"]},o="Welcome",s={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"The IOTA Integration Services implement a high-level API for common interactions with decentralized identities and Data Streams.",source:"@site/content/build/integration-services/production/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/integration-services/welcome",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/integration_services_welcome.png",description:"The IOTA Integration Services implement a high-level API for common interactions with decentralized identities and Data Streams.",keywords:["integration services","decentralized identity","streams","use cases","audit trail gateway","Self-Sovereign Identity Bridge","explanation"]},sidebar:"docs",next:{title:"Overview",permalink:"/integration-services/getting_started/overview"}},l={},c=[{value:"IOTA Audit Trail Gateway",id:"iota-audit-trail-gateway",level:2},{value:"Self-Sovereign Identity(SSI) Bridge",id:"self-sovereign-identityssi-bridge",level:2},{value:"What You Will Find",id:"what-you-will-find",level:2},{value:"Join the Discussion",id:"join-the-discussion",level:2}],d={toc:c};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome"},"Welcome"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Integration Services",src:i(66791).Z,width:"1320",height:"340"})),(0,r.kt)("p",null,"The IOTA Integration Services implement a high-level API for common interactions with decentralized identities and Data\nStreams based on the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/identity.rs/introduction"},"IOTA Identity"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/streams/welcome"},"IOTA Streams")," libraries, facilitating the integration of IOTA into\nexisting digital infrastructure."),(0,r.kt)("p",null,"The solutions developed by the Integration Services are domain agnostic and can be applied to several use cases, ranging\nfrom e-commerce to healthcare and beyond."),(0,r.kt)("h2",{id:"iota-audit-trail-gateway"},"IOTA Audit Trail Gateway"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/integration-services/explanations/services/audit-trail-gateway/introduction"},"Audit Trail Gateway")," allows third-party entities to easily log and share immutable information, while other\nauthorized third parties can access this information and verify its integrity and authenticity."),(0,r.kt)("h2",{id:"self-sovereign-identityssi-bridge"},"Self-Sovereign Identity(SSI) Bridge"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/integration-services/explanations/services/SSI-bridge/introduction"},"Self-Sovereign Identity(SSI) Bridge")," enables the creation, issuing, and verification of trusted self-sovereign\ndecentralized identities and credentials."),(0,r.kt)("h2",{id:"what-you-will-find"},"What You Will Find"),(0,r.kt)("p",null,"This documentation has eight sections."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/integration-services/getting_started/overview"},"Getting started"),": All the resources you need to get started."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Explanations"),": An introduction to the main concepts, use cases and API definitions for the ",(0,r.kt)("a",{parentName:"li",href:"/integration-services/explanations/services/audit-trail-gateway/introduction"},"Audit Trail Gateway")," and ",(0,r.kt)("a",{parentName:"li",href:"/integration-services/explanations/services/SSI-bridge/introduction"},"Self-Sovereign Identity(SSI) Bridge"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"How-Tos"),": How-to guides covering the following topics:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/integration-services/how_tos/integration-services-sdk/introduction"},"Integration Services SDK"),": How-to guides on creating and managing decentralized identities, verifiable credentials, and channels using the Integration Services SDK."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/integration-services/how_tos/is-cli/introduction"},"Integration Services CLI"),":  How-to guides on creating and managing decentralized identities using the Integration Services Command Line Interface."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Authentication"),": How-to guide to authenticate your identity using the ",(0,r.kt)("a",{parentName:"li",href:"/integration-services/how_tos/is-cli/authenticate-your-identity"},"Integration Services SDK")," or  ",(0,r.kt)("a",{parentName:"li",href:"/integration-services/how_tos/integration-services-sdk/authenticate-your-identity"},"Java and Node.js"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"References"),": Detailed specification of all endpoints for:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/integration-services/references/ssi_bridge_api_reference"},"Self Sovereign Identity(SSI) Bridge API Reference")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/integration-services/references/audit_trail_gw_api_reference"},"Audit Trail API Reference"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/integration-services/troubleshooting"},"Troubleshooting"),": Instructions on how to resolve any issues you may encounter while using the services."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"faq"},"FAQ"),": Answers to the most common doubts."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"contribute"},"Contribute"),": Find ways to help the project."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/integration-services/contact"},"Contact"),": Get in touch with the Integration Services team.")),(0,r.kt)("h2",{id:"join-the-discussion"},"Join the Discussion"),(0,r.kt)("p",null,"If you are looking for a place to discuss this library, or are in need of support head to\nour ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/iota"},"Discord channel")," #integration-services."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"When using the demo integration services deployment, please refrain from logging any personal data. The framework is still under development and should only be used for testing. As multiple entities can have access to this demo and its associated database, the IOTA foundation cannot be held responsible for any data logged using this deployment. If you need a dedicated and secure solution for a production-ready use case, either deploy your IS locally or please get in touch ",(0,r.kt)("a",{parentName:"p",href:"mailto:integrations@iota.org"},"integrations@iota.org")," so we can assist you with our dedicated expertise.")),(0,r.kt)("admonition",{title:"Bug Reporting",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please report any bugs found whilst engaging with any part of the integration services to ",(0,r.kt)("a",{parentName:"p",href:"mailto:integrations@iota.org"},"integrations@iota.org"))))}g.isMDXComponent=!0},66791:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/integration_services_welcome-a1c98bc56bda975e120c70ddf7c5dfa1.png"}}]);