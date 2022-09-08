"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[88385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={description:"Calling smart contract view functions with Solo.",image:"/img/tutorial/call_view.png",keywords:["how to","testing","solo","views","call","synchronous","entry points"]},r="Calling a View",l={unversionedId:"guide/solo/view-sc",id:"guide/solo/view-sc",title:"Calling a View",description:"Calling smart contract view functions with Solo.",source:"@site/content/build/wasp/develop/documentation/docs/guide/solo/view-sc.md",sourceDirName:"guide/solo",slug:"/guide/solo/view-sc",permalink:"/smart-contracts/develop/guide/solo/view-sc",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/solo/view-sc.md",tags:[],version:"current",frontMatter:{description:"Calling smart contract view functions with Solo.",image:"/img/tutorial/call_view.png",keywords:["how to","testing","solo","views","call","synchronous","entry points"]},sidebar:"tutorialSidebar",previous:{title:"Invoking Smart Contracts",permalink:"/smart-contracts/develop/guide/solo/invoking-sc"},next:{title:"Error Handling",permalink:"/smart-contracts/develop/guide/solo/error-handling"}},s={},c=[{value:"Decoding Results Returned by <em>PostRequestSync</em> and <em>CallView</em>",id:"decoding-results-returned-by-postrequestsync-and-callview",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"calling-a-view"},"Calling a View"),(0,o.kt)("p",null,"The following snippet shows how you can call the view function ",(0,o.kt)("inlineCode",{parentName:"p"},"getString")," of the smart contract ",(0,o.kt)("inlineCode",{parentName:"p"},"solotutorial")," without\nparameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res, err := chain.CallView("example1", "getString")\n')),(0,o.kt)("p",null,"The call returns a collection of key/value pairs ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," and an error result ",(0,o.kt)("inlineCode",{parentName:"p"},"err")," in the typical Go fashion."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(94850).Z},(0,o.kt)("img",{alt:"Calling a view process",src:n(75213).Z,width:"862",height:"452"}))),(0,o.kt)("p",null,"The basic principle of calling a view is similar to sending a request to the smart contract. The essential difference is\nthat calling a view does not constitute an asynchronous transaction; it is just a direct synchronous call to the view\nentry point exposed by the smart contract."),(0,o.kt)("p",null,"Therefore, calling a view does not involve any token transfers. Sending a request (either on-ledger or off-ledger) to a\nview entry point will result in an exception, returning all attached tokens to the sender minus fees (iif any)."),(0,o.kt)("p",null,"Views are used to retrieve information about the smart contract's state, for example, to display on a website. Certain\nSolo methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"chain.GetInfo"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"chain.GetGasFeePolicy"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"chain.L2Assets")," call views of\nthe ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/core_contracts/overview"},"core smart contracts")," behind the scenes to retrieve the information\nabout the chain or a specific smart contract."),(0,o.kt)("h2",{id:"decoding-results-returned-by-postrequestsync-and-callview"},"Decoding Results Returned by ",(0,o.kt)("em",{parentName:"h2"},"PostRequestSync")," and ",(0,o.kt)("em",{parentName:"h2"},"CallView")),(0,o.kt)("p",null,"The following is a specific technicality of the Go environment of ",(0,o.kt)("em",{parentName:"p"},"Solo"),"."),(0,o.kt)("p",null,"The result returned by the call to an entry point from the Solo environment is an instance of\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/kv/dict/dict.go"},(0,o.kt)("inlineCode",{parentName:"a"},"dict.Dict"))," type, which is essentially a\nmap of ",(0,o.kt)("inlineCode",{parentName:"p"},"[]byte")," key/value pairs, defined as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Dict map[kv.Key][]byte\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Dict")," is also an implementation of\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/kv/kv.go"},(0,o.kt)("inlineCode",{parentName:"a"},"kv.KVStore"))," interface. The ",(0,o.kt)("inlineCode",{parentName:"p"},"kv")," package and\nsubpackages provide many useful functions to work with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dict")," type."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Both view and non-view entry points can produce results.\nIn normal operation, retrieving the result of an on-ledger request is impossible since it is an asynchronous operation."),(0,o.kt)("p",{parentName:"admonition"},"However, in the Solo environment, the call to ",(0,o.kt)("inlineCode",{parentName:"p"},"PostRequestSync")," is synchronous, allowing the caller to inspect the\nresult.\nThis is a convenient difference between the mocked Solo environment and the distributed ledger used by Wasp nodes.\nYou can use it to make assertions about the results of a call in the tests.")),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," is a dictionary where keys and values are binary slices. The ",(0,o.kt)("inlineCode",{parentName:"p"},"getString")," view returns the\nvalue under the ",(0,o.kt)("inlineCode",{parentName:"p"},'"str"')," key, and the value is a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," encoded as a byte slice. The ",(0,o.kt)("inlineCode",{parentName:"p"},"codec")," package provides functions\nto encode/decode frequently used data types, including ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),". The following is a commonly used pattern to get a value\nfrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dict")," and decode it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'var value string = codec.MustDecodeString(res["str"])\n')))}d.isMDXComponent=!0},94850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/call_view-199c30d7a223e75c2d43d7aa6ec08dde.png"},75213:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/call_view-199c30d7a223e75c2d43d7aa6ec08dde.png"}}]);