"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const o={keywords:["functions","access","self","chain","creator","agentID"],description:"The optional access subsection indicates the agent who is allowed to access the function. When this definition is omitted, anyone is allowed to call the function.",image:"/img/logo/WASP_logo_dark.png"},r="Limiting Access",c={unversionedId:"guide/schema/access",id:"guide/schema/access",title:"Limiting Access",description:"The optional access subsection indicates the agent who is allowed to access the function. When this definition is omitted, anyone is allowed to call the function.",source:"@site/content/build/wasp/production/documentation/docs/guide/schema/access.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/access",permalink:"/smart-contracts/guide/schema/access",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/schema/access.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","access","self","chain","creator","agentID"],description:"The optional access subsection indicates the agent who is allowed to access the function. When this definition is omitted, anyone is allowed to call the function.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Definitions",permalink:"/smart-contracts/guide/schema/funcs"},next:{title:"Function Parameters",permalink:"/smart-contracts/guide/schema/params"}},s={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"limiting-access"},"Limiting Access"),(0,a.kt)("p",null,"The optional ",(0,a.kt)("inlineCode",{parentName:"p"},"access")," subsection is made of a single definition, it indicates the agent\nwho is allowed to access the function. When this definition is omitted, anyone is allowed\nto call the function. When the definition is present it should be an access identifier,\noptionally followed by an explanatory comment. Access identifiers can be one of the\nfollowing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"self"),": Only the smart contract itself can call this function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chain"),": Only the chain owner can call this function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"creator"),": Only the contract creator can call this function"),(0,a.kt)("li",{parentName:"ul"},"anything else: The name of an AgentID or AgentID[] variable in state storage. Only the\nagent(s) defined there can call this function. When this option is used you should also\nprovide functionality that can initialize and/or modify this variable. As long as this\nstate variable has not been set, nobody will be allowed to call this function.")),(0,a.kt)("p",null,"The schema tool will automatically generate code to properly check the access rights of\nthe agent that called the function before the actual function is called."),(0,a.kt)("p",null,"You can see usage examples of the access identifier in the schema definition file, where\nthe state variable ",(0,a.kt)("inlineCode",{parentName:"p"},"owner")," is used as an access identifier. The ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," function initializes\nthis state variable, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"setOwner")," function can only be used by the current owner to\nset a new owner. Finally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"member")," function can also only be called by the current\nowner."),(0,a.kt)("p",null,"Note that there can be different access identifiers for different functions as needed. You\ncan set up as many access identifiers as you like."),(0,a.kt)("p",null,"In the next section we will look at ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/params"},(0,a.kt)("inlineCode",{parentName:"a"},"params")),"."))}d.isMDXComponent=!0}}]);