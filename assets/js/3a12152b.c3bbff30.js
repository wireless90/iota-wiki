"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[53765],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,c(c({ref:t},u),{},{components:a})):n.createElement(h,c({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},33285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(54411),c=a(43305);const l={keywords:["Smart Contracts","withdraw","transfer","chain","Rust","Solo"],description:"The `withdraw` endpoint sends funds owned by the callee to their L1 address.",image:"/img/logo/WASP_logo_dark.png"},i="How to Withdraw From a Chain",s={unversionedId:"guide/core_concepts/accounts/how-to-withdraw-from-a-chain",id:"guide/core_concepts/accounts/how-to-withdraw-from-a-chain",title:"How to Withdraw From a Chain",description:"The `withdraw` endpoint sends funds owned by the callee to their L1 address.",source:"@site/content/build/wasp/production/documentation/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-to-withdraw-from-a-chain",permalink:"/smart-contracts/guide/core_concepts/accounts/how-to-withdraw-from-a-chain",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain.mdx",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","withdraw","transfer","chain","Rust","Solo"],description:"The `withdraw` endpoint sends funds owned by the callee to their L1 address.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"How to Deposit to a Chain",permalink:"/smart-contracts/guide/core_concepts/accounts/how-to-deposit-to-a-chain"},next:{title:"View Account Balances",permalink:"/smart-contracts/guide/core_concepts/accounts/view-account-balances"}},u={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-withdraw-from-a-chain"},"How to Withdraw From a Chain"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw")," endpoint sends funds owned by the callee to their L1 address."),(0,r.kt)(o.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"solo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain to wallet\nreq := solo.NewCallParams(accounts.Contract.Name, accounts.FuncWithdraw.Name)\n_, err := chain.PostRequestSync(req.WithIotas(1), wallet)\nrequire.NoError(t, err)\n"))),(0,r.kt)(c.Z,{value:"soloctx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain *chainID* to wallet\nw := coreaccounts.ScFuncs.Withdraw(ctx.Sign(wallet))\nw.Func.TransferIotas(1).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,r.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// withdraw from chain *chainID* to current common account\n// (there is no way to specify hname for withdrawals)\nlet w = coreaccounts::ScFuncs::withdraw(ctx);\nw.func.transfer_iotas(1).post_to_chain(chainID);\n"))),(0,r.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain *chainID* to current common account\n// (there is no way to specify hname for withdrawals)\nw := coreaccounts.ScFuncs.Withdraw(ctx)\nw.Func.TransferIotas(1).PostToChain(chainID)\n")))))}m.isMDXComponent=!0},43305:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(86010);const o="tabItem__kUE";function c(e){let{children:t,hidden:a,className:c}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,c),hidden:a},t)}},54411:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),c=a(51048),l=a(33609),i=a(1943),s=a(72957);const u="tabList_fbd4",d="tabItem_v5XY";function p(e){var t,a;const{lazy:c,block:p,defaultValue:m,values:h,groupId:w,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,i.U)(),[O,x]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=w){const e=k[w];null!=e&&e!==O&&v.some((t=>t.value===e))&&x(e)}const _=e=>{const t=e.currentTarget,a=E.indexOf(t),n=v[a].value;n!==O&&(N(t),x(n),null!=w&&T(w,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;a=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;a=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},v.map((e=>{let{value:t,label:a,attributes:c}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:S,onFocus:_,onClick:_},c,{className:(0,o.Z)("tabs__item",d,null==c?void 0:c.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,c.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}}}]);