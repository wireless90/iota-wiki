"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[25490],{91378:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},c=void 0,u={unversionedId:"libraries/java/api/MigrationData",id:"libraries/java/api/MigrationData",title:"MigrationData",description:"Migration data.",source:"@site/content/build/wallet.rs/production/documentation/docs/libraries/java/api/MigrationData.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MigrationData",permalink:"/wallet.rs/libraries/java/api/MigrationData",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/libraries/java/api/MigrationData.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"balance(): long",id:"balance-long",level:3},{value:"lastCheckedAddressIndex(): long",id:"lastcheckedaddressindex-long",level:3},{value:"inputs(): InputData[]",id:"inputs-inputdata",level:3},{value:"spentAddresses(): boolean",id:"spentaddresses-boolean",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Migration data."),(0,i.kt)("h3",{id:"balance-long"},"balance(): long"),(0,i.kt)("p",null,"Total seed balance."),(0,i.kt)("h3",{id:"lastcheckedaddressindex-long"},"lastCheckedAddressIndex(): long"),(0,i.kt)("p",null,"The index of the last checked address.\nUseful if you want to call the finder again."),(0,i.kt)("h3",{id:"inputs-inputdata"},"inputs(): ",(0,i.kt)("a",{parentName:"h3",href:"#inputdata"},"InputData[]")),(0,i.kt)("p",null,"Migration inputs."),(0,i.kt)("h3",{id:"spentaddresses-boolean"},"spentAddresses(): boolean"),(0,i.kt)("p",null,"If any of the inputs are spent"))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);