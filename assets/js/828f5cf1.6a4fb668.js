"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9948],{63857:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(76018),s=n(54501),l=["components"],c={image:"/img/integration-services/logo/integration_services.png",description:"This section will show you an example on how to authenticate using the IOTA IS-SDK npm package.",keywords:["authentication","jwt","nonce","not-authenticated",401,"nodejs","is-sdk","npm","how to"]},u="Integration Services SDK",p={unversionedId:"basics/authentication/example_is_sdk",id:"basics/authentication/example_is_sdk",title:"Integration Services SDK",description:"This section will show you an example on how to authenticate using the IOTA IS-SDK npm package.",source:"@site/external/integration-services/documentation/docs/basics/authentication/example_is_sdk.md",sourceDirName:"basics/authentication",slug:"/basics/authentication/example_is_sdk",permalink:"/integration-services/basics/authentication/example_is_sdk",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/external/integration-services/documentation/docs/basics/authentication/example_is_sdk.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"This section will show you an example on how to authenticate using the IOTA IS-SDK npm package.",keywords:["authentication","jwt","nonce","not-authenticated","401","nodejs","is-sdk","npm","how to"]},sidebar:"docs",previous:{title:"Node.js",permalink:"/integration-services/basics/authentication/example_node"},next:{title:"IOTA Identity",permalink:"/integration-services/basics/identity"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Authentication Workflow",id:"authentication-workflow",level:2}],h={toc:m};function v(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration-services-sdk"},"Integration Services SDK"),(0,r.kt)("p",null,"In this example, you will learn how to authenticate your identity using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/iota-is-sdk"},(0,r.kt)("strong",{parentName:"a"},"IOTA IS-SDK")," npm package"),". Since the package will handle decoding, hashing, and signing, this is the simplest way to authenticate your identity. Make sure to read the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/integration-services/authentication"},"general authentication concept"),", so you can fully understand the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/integration-services/authentication#authentication-workflow"},"Authentication Workflow"),"."),(0,r.kt)("p",null,"This example uses the following identity: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n    identityId: 'did:iota:8BAmUqAg4aUjV3T9WUhPpDnFVbJSk16oLyFq3m3e62MF',\n    secretKey: '5N3SxG4UzVDpNe4LyDoZyb6bSgE9tk3pE2XP5znXo5bF'\n}\n")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A recent version of ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," (>14.19.0).")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install iota-is-sdk\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add iota-is-sdk\n")))),(0,r.kt)("h2",{id:"authentication-workflow"},"Authentication Workflow"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can find your current API version using the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/info"},"http://localhost:3000/info")," endpoint. This example uses ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.1"),"."))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Never save your secret key in plain text in your code. Use local environment variables or IOTA ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/welcome"},"Stronghold")," to store your secret keys securely."))),(0,r.kt)("p",null,"Depending on the functionality you are going to use, it may be sufficient to only authenticate the ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityClient()")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChannelClient()"),".\nEach of the clients has its authentication state. This means that when you authenticate on the ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityClient()"),", you are not automatically authenticated on the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChannelClient()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./authenticate.js',title:'"./authenticate.js'},"import { IdentityClient, ChannelClient, ApiVersion } from 'iota-is-sdk';\n\nconst authenticate = async (identityId, secretKey) => {\n  const config = {\n    baseUrl: 'http://localhost:3000',\n    apiVersion: ApiVersion.v01\n  };\n\n  // Authenticate identity client\n  const identity = new IdentityClient(config);\n  await identity.authenticate(identityId, secretKey);\n\n  // Authenticate channel client\n  const channel = new ChannelClient(config);\n  await channel.authenticate(identityId, secretKey);\n};\n\nconst identityId = 'did:iota:8BAmUqAg4aUjV3T9WUhPpDnFVbJSk16oLyFq3m3e62MF';\nconst secretKey = '5N3SxG4UzVDpNe4LyDoZyb6bSgE9tk3pE2XP5znXo5bF';\nauthenticate(identityId, secretKey);\n")),(0,r.kt)("p",null,"You can find the complete code example at this repository: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Schereo/is-sdk-authentication"},"https://github.com/Schereo/is-sdk-authentication"),"."))}v.isMDXComponent=!0},54501:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),i=n(86010),r="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),i=n(67294),r=n(5730),o=n(20636),s=n(76602),l=n(63735),c=n(86010),u="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,r,d=e.lazy,m=e.block,h=e.defaultValue,v=e.values,f=e.groupId,g=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(t=null!=h?h:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),x=N.tabGroupChoices,T=N.setTabGroupChoices,I=(0,i.useState)(w),O=I[0],j=I[1],S=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=x[f];null!=E&&E!==O&&y.some((function(e){return e.value===E}))&&j(E)}var D=function(e){var t=e.currentTarget,n=S.indexOf(t),a=y[n].value;a!==O&&(C(t),j(a),null!=f&&T(f,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var i=S.indexOf(e.currentTarget)-1;n=S[i]||S[S.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,c.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},g)},y.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return S.push(e)},onKeyDown:A,onFocus:D,onClick:D},r,{className:(0,c.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),d?(0,i.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,r.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);