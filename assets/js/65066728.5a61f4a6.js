"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[73649],{19324:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={description:"Whatever happens during the execution of a smart contract's full entry point, processing of the request always results in the state transition.  The VM context catches exceptions (panics) in the program. Its consequences are recorded in the state of the chain during the fallback processing.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","error handling","panic","state","transition"]},c="Error Handling",l={unversionedId:"guide/solo/error-handling",id:"guide/solo/error-handling",title:"Error Handling",description:"Whatever happens during the execution of a smart contract's full entry point, processing of the request always results in the state transition.  The VM context catches exceptions (panics) in the program. Its consequences are recorded in the state of the chain during the fallback processing.",source:"@site/content/build/wasp/develop/documentation/docs/guide/solo/error-handling.md",sourceDirName:"guide/solo",slug:"/guide/solo/error-handling",permalink:"/smart-contracts/guide/solo/error-handling",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/solo/error-handling.md",tags:[],version:"current",frontMatter:{description:"Whatever happens during the execution of a smart contract's full entry point, processing of the request always results in the state transition.  The VM context catches exceptions (panics) in the program. Its consequences are recorded in the state of the chain during the fallback processing.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","error handling","panic","state","transition"]},sidebar:"tutorialSidebar",previous:{title:"Calling a View",permalink:"/smart-contracts/guide/solo/view-sc"},next:{title:"Account Balances",permalink:"/smart-contracts/guide/solo/balances"}},p={},u=[],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-handling"},"Error Handling"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The example code can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples"},"Wasp repository"),"."))),(0,o.kt)("p",null,"The following test posts a request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"example1")," smart contract without\nthe expected parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"paramString"),". The\nstatement ",(0,o.kt)("inlineCode",{parentName:"p"},'ctx.require(par.exists(), "string parameter not found");')," makes\nthe smart contract panic if the condition is not satisfied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial4(t *testing.T) {\n    env := solo.New(t, false, false, seed)\n\n    chain := env.NewChain(nil, "ex4")\n    // deploy the contract on chain\n    err := chain.DeployWasmContract(nil, "example1", "example_tutorial_bg.wasm")\n    require.NoError(t, err)\n\n    // call contract incorrectly (omit \'paramString\')\n    req := solo.NewCallParams("example1", "storeString").WithIotas(1)\n    _, err = chain.PostRequestSync(req, nil)\n    require.Error(t, err)\n}\n')),(0,o.kt)("p",null,"The fragments in the output of the test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"37:34.189474700 PANIC   TestTutorial4.ex4   vmcontext/log.go:12 string parameter not found\n\n37:34.192828900 INFO    TestTutorial4.ex4   solo/run.go:148 REQ: 'tx/[0]9r5zoeusdwTcWkDTEMYjeqNj8reiUsLiHF81vExPrvNW: 'panic in VM: string parameter not found''\n")),(0,o.kt)("p",null,"It shows that the panic indeed occurred. The test passes because the resulting\nerror was expected."),(0,o.kt)("p",null,"The log record is a printed receipt of the request. It is stored on the chain for each request processed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"37:34.192828900 INFO    TestTutorial4.ex4   solo/run.go:148 REQ: 'tx/[0]9r5zoeusdwTcWkDTEMYjeqNj8reiUsLiHF81vExPrvNW: 'panic in VM: string parameter not found''\n")),(0,o.kt)("p",null,"Note that this test ends with the state ",(0,o.kt)("inlineCode",{parentName:"p"},"#4"),", although the last\nrequest to the smart contract failed. This is important: ",(0,o.kt)("strong",{parentName:"p"},"whatever happens\nduring the execution of a smart contract's full entry point, processing of the\nrequest always results in the state transition"),"."),(0,o.kt)("p",null,"The VM context catches exceptions (panics) in the program. Its consequences are\nrecorded in the state of the chain during the fallback processing, no matter if\nthe panic was triggered by the logic of the smart contract or whether it was\ntriggered by the sandbox run-time code."),(0,o.kt)("p",null,"In the case of ",(0,o.kt)("inlineCode",{parentName:"p"},"example1")," the error event was recorded in the immutable record\nlog of the chain, aka ",(0,o.kt)("inlineCode",{parentName:"p"},"receipt"),", but the data state of the smart contract wasn't modified. In\nother cases, the fallback actions may be more complex."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);