"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[25952],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),h=n,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},82381:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={id:"coordinator",title:"The Coordinator",description:"What is the Coordinator in the IOTA network.",image:"/img/iota-wiki.png",keywords:["explanation"]},i="The Coordinator",s={unversionedId:"about-iota/coordinator",id:"about-iota/coordinator",title:"The Coordinator",description:"What is the Coordinator in the IOTA network.",source:"@site/internal/learn/about-iota/coordinator.md",sourceDirName:"about-iota",slug:"/about-iota/coordinator",permalink:"/learn/about-iota/coordinator",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/internal/learn/about-iota/coordinator.md",tags:[],version:"current",lastUpdatedAt:1658188502,formattedLastUpdatedAt:"Jul 18, 2022",frontMatter:{id:"coordinator",title:"The Coordinator",description:"What is the Coordinator in the IOTA network.",image:"/img/iota-wiki.png",keywords:["explanation"]},sidebar:"learn",previous:{title:"Why is IOTA Feeless?",permalink:"/learn/about-iota/why-is-iota-feeless"},next:{title:"Roadmap to Decentralization",permalink:"/learn/about-iota/roadmap-to-decentralization"}},l={},c=[],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-coordinator"},"The Coordinator"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The Coordinator is a temporary solution. IOTA will remove the Coordinator in the future ",(0,n.kt)("a",{parentName:"p",href:"/learn/about-iota/roadmap-to-decentralization"},"IOTA 2.0 update"),".")),(0,n.kt)("p",null,"The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated."),(0,n.kt)("p",null,"To allow the nodes to recognize valid milestones, all IOTA nodes on the same network are configured with the signatures of a coordinator node which they trust. By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted Coordinator did sign them."),(0,n.kt)("p",null,"To ensure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones signed with those signatures regularly (every 10 seconds). This way ensures that nodes can compare the indexes of their milestones to check if they are synchronized with the rest of the network."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An artist&#39;s depiction of Coordinator.",src:o(6733).Z,title:"Click to see the full-sized image.",width:"743",height:"500"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The Coordinator")))}u.isMDXComponent=!0},6733:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/milestones-ca3479a44644b9ab2414b07e1e62d6ac.gif"}}]);