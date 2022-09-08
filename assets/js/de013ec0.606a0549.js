"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(54411),s=n(43305);const i={keywords:["function descriptor","return values","request","post","smart contract chain","Asynchronous function"],description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",image:"/img/logo/WASP_logo_dark.png"},l="Posting Asynchronous Requests",c={unversionedId:"guide/schema/post",id:"guide/schema/post",title:"Posting Asynchronous Requests",description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",source:"@site/content/build/wasp/production/documentation/docs/guide/schema/post.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/post",permalink:"/smart-contracts/guide/schema/post",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/schema/post.mdx",tags:[],version:"current",frontMatter:{keywords:["function descriptor","return values","request","post","smart contract chain","Asynchronous function"],description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Calling Functions",permalink:"/smart-contracts/guide/schema/call"},next:{title:"Testing Smart Contracts",permalink:"/smart-contracts/guide/schema/test"}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"posting-asynchronous-requests"},"Posting Asynchronous Requests"),(0,o.kt)("p",null,"Asynchronous function calls between smart contracts are posted as requests on the Tangle.\nThey allow you to invoke any smart contract function that is not a View on any smart\ncontract chain. You will notice that the behavior is very similar to a normal function\ncall, but instead of using the ",(0,o.kt)("inlineCode",{parentName:"p"},"call()")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"func")," member in the function\ndescriptor, you will now use the ",(0,o.kt)("inlineCode",{parentName:"p"},"post()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"postToChain()")," methods. ",(0,o.kt)("inlineCode",{parentName:"p"},"post()")," posts the\nrequest within the current chain, while ",(0,o.kt)("inlineCode",{parentName:"p"},"postToChain()")," takes the chain ID of the\ndesired chain as parameter."),(0,o.kt)("p",null,"In addition to the previously discussed ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/call"},"transferIotas()")," and\n",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/call"},"ofContract()")," methods, you can modify the behavior further by providing a\ndelay() in seconds, which enables delayed execution of the request. This is of particular\ninterest to smart contracts that need a delayed action like betting contracts with a timed\nbetting round, or to create time-lock functionality in a smart contract.\nHere's how that works:"),(0,o.kt)(r.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"eor := ScFuncs.EndOfRound(ctx)\neor.Func.Delay(3600).TransferIotas(1).Post()\n"))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let eor = ScFuncs::end_of_round(ctx);\neor.func.delay(3600).transfer_iotas(1).post();\n"))),(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let eor = sc.ScFuncs.endOfRound(ctx);\neor.func.delay(3600).transferIotas(1).post();\n")))),(0,o.kt)("p",null,"Because it is posted as a request on the Tangle, and it is not possible to have a request\nwithout a transfer, ",(0,o.kt)("em",{parentName:"p"},"an asynchronous request always needs to send at least 1 token"),". So,\nif you post to a function that expects tokens you just specify the amount of tokens\nrequired, but if you post to a function that does not expect any tokens then you still\nhave to provide 1 iota."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Providing a delay() before a call() will result in a run-time error"),". We do not know\nthe intention of the user until the actual call() or post() is encountered, so we cannot\ncheck for this at compile-time unless we are willing to accept a lot of extra overhead.\nIt should not really be a problem because using delay() is rare and using it with call()\ncannot have been the intention."),(0,o.kt)("p",null,"The function that posts the request through the function descriptor will immediately\ncontinue execution and does not wait for its completion. Therefore, it is not possible to\ndirectly retrieve the return values from such a call."),(0,o.kt)("p",null,"If you need some return values, you will have to create a mechanism that can do so, for\nexample by providing a callback chain/contract/function combination as part of the input\nparameters of the requested function, so that upon completion that function can\nasynchronously post the results to the indicated function. It will require a certain\ndegree of cooperation between both smart contracts. In the future we will probably be\nlooking at providing a generic mechanism for this."),(0,o.kt)("p",null,"In the next section we will look at how we can use the function descriptors when\n",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/test"},"testing smart contracts with Solo"),"."))}m.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(86010);const r="tabItem__kUE";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),r=n(86010),s=n(51048),i=n(33609),l=n(1943),c=n(72957);const u="tabList_fbd4",p="tabItem_v5XY";function d(e){var t,n;const{lazy:s,block:d,defaultValue:m,values:h,groupId:f,className:y}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,l.U)(),[O,x]=(0,o.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==O&&g.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,n=N.indexOf(t),a=g[n].value;a!==O&&(E(t),x(a),null!=f&&T(f,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=N.indexOf(e.currentTarget)+1;n=null!=(a=N[t])?a:N[0];break}case"ArrowLeft":{var o;const t=N.indexOf(e.currentTarget)-1;n=null!=(o=N[t])?o:N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},y)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>N.push(e),onKeyDown:C,onFocus:I,onClick:I},s,{className:(0,r.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);