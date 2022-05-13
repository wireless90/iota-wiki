"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22070],{42344:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={description:"In case of panic in the smart contract for whatever reason, the fallback logic of the ISCP VM returns all tokens (minus fees) to the sender.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","return","panic","error","sender"]},c="Return of Tokens in Case of Failure",l={unversionedId:"guide/solo/reimbursed-funds",id:"guide/solo/reimbursed-funds",title:"Return of Tokens in Case of Failure",description:"In case of panic in the smart contract for whatever reason, the fallback logic of the ISCP VM returns all tokens (minus fees) to the sender.",source:"@site/content/build/wasp/develop/documentation/docs/guide/solo/reimbursed-funds.md",sourceDirName:"guide/solo",slug:"/guide/solo/reimbursed-funds",permalink:"/smart-contracts/guide/solo/reimbursed-funds",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/solo/reimbursed-funds.md",tags:[],version:"current",frontMatter:{description:"In case of panic in the smart contract for whatever reason, the fallback logic of the ISCP VM returns all tokens (minus fees) to the sender.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","return","panic","error","sender"]},sidebar:"tutorialSidebar",previous:{title:"Sending Tokens to a Smart Contract",permalink:"/smart-contracts/guide/solo/sending-funds"},next:{title:"Sending Tokens From IOTA Smart Contracts to the Tangle",permalink:"/smart-contracts/guide/solo/sending-funds-sc"}},u={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"return-of-tokens-in-case-of-failure"},"Return of Tokens in Case of Failure"),(0,a.kt)("p",null,"What if you attach tokens to a request, send it to the smart\ncontract and the smart contract fails (panics)? The panics may occur for\nwhatever reason: it may be due to wrong parameters, or it may be a runtime\nerror or a bug. What will happen with your tokens?"),(0,a.kt)("p",null,"The following test demonstrates the situation when the request results in a\npanic in the smart contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial7(t *testing.T) {\n env := solo.New(t, false, false, seed)\n chain := env.NewChain(nil, "ex7")\n\n err := chain.DeployWasmContract(nil, "example1", "example_tutorial_bg.wasm")\n require.NoError(t, err)\n\n contractAgentID := iscp.NewAgentID(chain.ChainID.AsAddress(), iscp.Hn("example1"))\n\n userWallet, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(5))\n userAgentID := iscp.NewAgentID(userAddress, 0)\n\n // we start with these balances on address and on chain\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n chain.AssertAccountBalance(contractAgentID, colored.IOTA, 0) // empty\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0)     // empty\n\n // missing parameter, request will panic\n req := solo.NewCallParams("example1", "storeString").WithIotas(42)\n _, err = chain.PostRequestSync(req, userWallet)\n require.Error(t, err)\n\n // assert balances didn\'t change on address and on chain\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n chain.AssertAccountBalance(contractAgentID, colored.IOTA, 0) // still empty\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0)     // still empty\n}\n')),(0,a.kt)("p",null,"The programmer forgets the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"paramString")," and the program panics:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"42:16.438200900 PANIC TestTutorial7.ex7 vmcontext/log.go:12 string parameter not found\n...\n42:16.441706100 INFO TestTutorial7.ex7 solo/run.go:148 REQ: 'tx/[1]3ZWV9c8MrDPMnyJjEnF8HUuMzUmMNed4Gtg5A1SWgqDD: 'panic in VM: string parameter not found''\n")),(0,a.kt)("p",null,"You can see that all sent 42 tokens are returned to the sender's address."),(0,a.kt)("p",null,"In case of panic in the smart contract for whatever reason, the fallback logic of the IOTA Smart Contracts VM:\nreturns all tokens (minus fees) to the sender (to the sender's address in the example above)."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);