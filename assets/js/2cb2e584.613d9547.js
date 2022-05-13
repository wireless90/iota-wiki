"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[83363],{33149:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={description:"There are Node.js, Python, Java, and Wasm bindings for the iota.rs client Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","Node.js","Python","Java","Wasm","bindings"]},l="IOTA Client Libraries",u={unversionedId:"libraries/overview",id:"libraries/overview",title:"IOTA Client Libraries",description:"There are Node.js, Python, Java, and Wasm bindings for the iota.rs client Rust library.",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/overview.md",sourceDirName:"libraries",slug:"/libraries/overview",permalink:"/iota.rs/libraries/overview",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/overview.md",tags:[],version:"current",frontMatter:{description:"There are Node.js, Python, Java, and Wasm bindings for the iota.rs client Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","Node.js","Python","Java","Wasm","bindings"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/iota.rs/getting_started"},next:{title:"Getting Started With Rust",permalink:"/iota.rs/libraries/rust/getting_started"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iota-client-libraries"},"IOTA Client Libraries"),(0,i.kt)("p",null,"You can use the Rust version of the iota.rs client library, as well as any of the Node.js, Python, Java, and Wasm\nbindings."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/libraries/rust/getting_started"},"Rust"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/libraries/nodejs/getting_started"},"Node.js"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/libraries/python/getting_started"},"Python"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/libraries/java/getting_started"},"Java"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/libraries/wasm/getting_started"},"Wasm"),".")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"If you are not familiar with the libraries, you should start your interactions with IOTA on a\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/devnet"},"devnet network"),"."),(0,i.kt)("p",null,"You can find a network explorer at ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.iota.org/devnet"},"IOTA Tangle Explorer"),"."),(0,i.kt)("p",null,"To properly test value-based transactions on devnet network, you are going to need some tokens. You can get\nsome devnet tokens using the ",(0,i.kt)("a",{parentName:"p",href:"https://faucet.chrysalis-devnet.iota.cafe/"},"faucet"),". However, if you plan on using of\nvalue-based IOTA transfers, we strongly recommend you use the official\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet.rs")," library."))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);