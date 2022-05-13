"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[41417],{4036:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=n(76018),i=n(54501),u=["components"],c={keywords:["function descriptor","return values","request","post","smart contract chain","Asynchronous function"],description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",image:"/img/logo/WASP_logo_dark.png"},l="Posting Asynchronous Requests",p={unversionedId:"guide/schema/post",id:"guide/schema/post",title:"Posting Asynchronous Requests",description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",source:"@site/content/build/wasp/develop/documentation/docs/guide/schema/post.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/post",permalink:"/smart-contracts/guide/schema/post",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/schema/post.mdx",tags:[],version:"current",frontMatter:{keywords:["function descriptor","return values","request","post","smart contract chain","Asynchronous function"],description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Calling Functions",permalink:"/smart-contracts/guide/schema/call"},next:{title:"Testing Smart Contracts",permalink:"/smart-contracts/guide/schema/test"}},d={},m=[],h={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"posting-asynchronous-requests"},"Posting Asynchronous Requests"),(0,r.kt)("p",null,"Asynchronous function calls between smart contracts are posted as requests on the Tangle.\nThey allow you to invoke any smart contract function that is not a View on any smart\ncontract chain. You will notice that the behavior is very similar to a normal function\ncall, but instead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"call()")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"func")," member in the function\ndescriptor, you will now use the ",(0,r.kt)("inlineCode",{parentName:"p"},"post()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"postToChain()")," methods. ",(0,r.kt)("inlineCode",{parentName:"p"},"post()")," posts the\nrequest within the current chain, while ",(0,r.kt)("inlineCode",{parentName:"p"},"postToChain()")," takes the chain ID of the\ndesired chain as parameter."),(0,r.kt)("p",null,"In addition to the previously discussed ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/call"},"transferIotas()")," and\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/call"},"ofContract()")," methods, you can modify the behavior further by providing a\ndelay() in seconds, which enables delayed execution of the request. This is of particular\ninterest to smart contracts that need a delayed action like betting contracts with a timed\nbetting round, or to create time-lock functionality in a smart contract.\nHere's how that works:"),(0,r.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"eor := ScFuncs.EndOfRound(ctx)\neor.Func.Delay(3600).TransferIotas(1).Post()\n"))),(0,r.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let eor = ScFuncs::end_of_round(ctx);\neor.func.delay(3600).transfer_iotas(1).post();\n"))),(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let eor = sc.ScFuncs.endOfRound(ctx);\neor.func.delay(3600).transferIotas(1).post();\n")))),(0,r.kt)("p",null,"Because it is posted as a request on the Tangle, and it is not possible to have a request\nwithout a transfer, ",(0,r.kt)("em",{parentName:"p"},"an asynchronous request always needs to send at least 1 token"),". So,\nif you post to a function that expects tokens you just specify the amount of tokens\nrequired, but if you post to a function that does not expect any tokens then you still\nhave to provide 1 iota."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Providing a delay() before a call() will result in a run-time error"),". We do not know\nthe intention of the user until the actual call() or post() is encountered, so we cannot\ncheck for this at compile-time unless we are willing to accept a lot of extra overhead.\nIt should not really be a problem because using delay() is rare and using it with call()\ncannot have been the intention."),(0,r.kt)("p",null,"The function that posts the request through the function descriptor will immediately\ncontinue execution and does not wait for its completion. Therefore, it is not possible to\ndirectly retrieve the return values from such a call."),(0,r.kt)("p",null,"If you need some return values, you will have to create a mechanism that can do so, for\nexample by providing a callback chain/contract/function combination as part of the input\nparameters of the requested function, so that upon completion that function can\nasynchronously post the results to the indicated function. It will require a certain\ndegree of cooperation between both smart contracts. In the future we will probably be\nlooking at providing a generic mechanism for this."),(0,r.kt)("p",null,"In the next section we will look at how we can use the function descriptors when\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/test"},"testing smart contracts with Solo"),"."))}f.isMDXComponent=!0},54501:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),o=n(86010),r="tabItem_OmH5";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),o=n(67294),r=n(5730),s=n(20636),i=n(76602),u=n(63735),c=n(86010),l="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,r,d=e.lazy,m=e.block,h=e.defaultValue,f=e.values,y=e.groupId,v=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===h?h:null!=(t=null!=h?h:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,i.U)(),O=T.tabGroupChoices,x=T.setTabGroupChoices,N=(0,o.useState)(k),E=N[0],I=N[1],q=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var P=O[y];null!=P&&P!==E&&g.some((function(e){return e.value===P}))&&I(P)}var j=function(e){var t=e.currentTarget,n=q.indexOf(t),a=g[n].value;a!==E&&(C(t),I(a),null!=y&&x(y,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=q.indexOf(e.currentTarget)+1;n=q[a]||q[0];break;case"ArrowLeft":var o=q.indexOf(e.currentTarget)-1;n=q[o]||q[q.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",l)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},v)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return q.push(e)},onKeyDown:S,onFocus:j,onClick:j},r,{className:(0,c.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),d?(0,o.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);