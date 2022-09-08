"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[85107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},20707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="Deploy and Test the Track and Trace Demo",c={unversionedId:"track-and-trace/deployment-and-testing",id:"track-and-trace/deployment-and-testing",title:"Deploy and Test the Track and Trace Demo",description:"To start tracking data in the Tangle, deploy the application and use our graphical user interface to trace existing assets and create new ones.",source:"@site/content/build/blueprints/production/track-and-trace/deployment-and-testing.md",sourceDirName:"track-and-trace",slug:"/track-and-trace/deployment-and-testing",permalink:"/blueprints/track-and-trace/deployment-and-testing",draft:!1,editUrl:"https://github.com/iotaledger/blueprints/edit/main/content/build/blueprints/production/track-and-trace/deployment-and-testing.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Application Architecture",permalink:"/blueprints/track-and-trace/architecture"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy the Track and Trace App",id:"deploy-the-track-and-trace-app",level:2},{value:"Test the Track and Trace App",id:"test-the-track-and-trace-app",level:2}],s={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-and-test-the-track-and-trace-demo"},"Deploy and Test the Track and Trace Demo"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To start tracking data in the Tangle, deploy the application and use our graphical user interface to trace existing assets and create new ones.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To test and deploy this application, you need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node.js installed on your device"),(0,a.kt)("li",{parentName:"ul"},"An instance of a ",(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/"},"Firebase server"))),(0,a.kt)("h2",{id:"deploy-the-track-and-trace-app"},"Deploy the Track and Trace App"),(0,a.kt)("p",null,"To deploy this application on your local network, complete the instructions on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/trade-poc/blob/master/firebase_functions/README.md"},"GitHub"),"."),(0,a.kt)("h2",{id:"test-the-track-and-trace-app"},"Test the Track and Trace App"),(0,a.kt)("p",null,"When the app is running, you will find on-screen instructions for creating and tracing assets."))}d.isMDXComponent=!0}}]);