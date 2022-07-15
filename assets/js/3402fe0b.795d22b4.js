"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[63113],{53291:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={description:"Cryptographic procedures",image:"/img/logo/Stronghold_icon.png",keywords:["security","procedures","vault","explanation"]},l="Cryptographic Procedures",p={unversionedId:"explanations/procedures",id:"explanations/procedures",title:"Cryptographic Procedures",description:"Cryptographic procedures",source:"@site/content/build/stronghold.rs/develop/documentation/docs/explanations/procedures.md",sourceDirName:"explanations",slug:"/explanations/procedures",permalink:"/stronghold.rs/explanations/procedures",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev-refactor/documentation/content/build/stronghold.rs/develop/documentation/docs/explanations/procedures.md",tags:[],version:"current",frontMatter:{description:"Cryptographic procedures",image:"/img/logo/Stronghold_icon.png",keywords:["security","procedures","vault","explanation"]},sidebar:"mySidebar",previous:{title:"Peer to Peer Communication in Stronghold",permalink:"/stronghold.rs/explanations/p2p"},next:{title:"Runtime Extensions",permalink:"/stronghold.rs/explanations/runtime-extensions"}},c={},u=[{value:"Cryptographic Procedures Pipeline",id:"cryptographic-procedures-pipeline",level:2},{value:"Code Example",id:"code-example",level:3}],d={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cryptographic-procedures"},"Cryptographic Procedures"),(0,a.kt)("p",null,"Stronghold ensures that sensitive data cannot easily escape from memory. This requires a mechanism to work with secrets stored inside Stronghold's vault. While parts of Stronghold are primarily concerned with writing secrets, the question arises: \"What can you do with a secret that is never exposed? Why even store it?\u201d."),(0,a.kt)("h2",{id:"cryptographic-procedures-pipeline"},"Cryptographic Procedures Pipeline"),(0,a.kt)("p",null,"Stronghold features a framework to build pipelines of cryptographic operations. The pipeline pattern is an abstraction over chained function calls. Each stage of a pipeline can either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Produce a value. For example, generate a secret (BIP39 and Mnemonic, Ed25519)"),(0,a.kt)("li",{parentName:"ul"},"Process an existing value. For example, deriving a secret key from an existing key (SLIP10)"),(0,a.kt)("li",{parentName:"ul"},"Export a value from an existing secret. For example, export the public key of a key pair.")),(0,a.kt)("p",null,"The framework is abstracted in a way that allows you to combine simple and complex cryptographic procedures. However, custom procedures are not possible within Stronghold. This is because a procedure can access secrets. Providing a custom procedure that exposes a secret and returns it would violate the Stronghold core principle."),(0,a.kt)("p",null,"The procedures framework is built upon a pipeline pattern. Each stage is only given the location inside the vault to access or work with secret data. The following schematic showcases the generation of a public / private keypair that gets stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"location1"),". The following step takes the previous ",(0,a.kt)("inlineCode",{parentName:"p"},"location1")," and derives a new keypair to store it in ",(0,a.kt)("inlineCode",{parentName:"p"},"location2"),". Eventually, the last stage takes ",(0,a.kt)("inlineCode",{parentName:"p"},"location2"),", extracts the public key and returns it to some publicly accessible data."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://viewer.diagrams.net/?tags=%7B%7D&highlight=FFFFFF&edit=_blank&layers=1&nav=1&title=pipeline#R7Vldb6M4FP01eZzI2JDAY9t0u1JnpEp92Jl9c8ED3nEw45gm7K%2Ff62K%2BG5o2JO1oFlUq9%2Fr6g3PPPQZnRq7WuxtFs%2BSLjJiYYRTtZmQ1w9hxMZ6ZPxQVpWcZkNIRKx7ZoMZxz%2F9l1omsN%2BcR23QCtZRC86zrDGWaslB3fFQpue2GfZeiO2tGYzZw3IdUDL1K2F8Ugnpdf3UOP%2Fk%2FE4qWZ2kG1Z0yrYOjYJjeS25SLXM3KlpNTl3Xp3xYQBr8Kl7PfHntZ6YYql%2BpAOJL1lwrveZTcX%2BGex8i7p37efHJuNRypy%2B8QzvBAw4GXEHw2GgsfpU8PiZ26WeqmenrY24S42%2Fx9pLnTVF1bx1L1sss%2BviwpUJfM0YmZdCJq3CdfsPqOhad0CjcCX6LUAy4HbagXlvDARU5pDgi6s%2F0FqLdfQsNFK%2FqizRMDznQtxJYVUYKcyZfVa2qhZIM2wbNdyWRRvmFwzrQoIsa0Lm1DL6NreNvzwKhYkbW5UgdRyMq6HbtIGNzZzr8nicjyLZRoyJUMW5QrKCSOWxhwAsVEPqsnV9Bl8Jg0HJ3X6fDkH5wudLF%2FBAFAWgexYUyqdyFimVFw33ssGcoNpE%2FNZysw6%2F2FaF1ZDaa5lNw2AoCq%2Bto1vJn9zrzJXO5vP0ioqa8f116dI7FnzWzUK3De9jFF12pu3jcxVyMbAsSpPVcz0WJxfBhrkRmmgmKCaP3YF%2Fbmc2q53ksOaa%2FrUNKjq3XW7Q5RPZHs1zLhQihatsMwEbEbmcXrz%2BD09f1083JQraGhaY%2FJ25uLFUcxFRzIXvY65pyehNzUHj9OVwTZww1KmqAahR7esuKNcHSflE8ix35PjYCjHDn5Gjt1TqTH2fk01PocYewfWQTXgxGL8Wg0lfa1ejGvoC%2FEn0tDl76Ghh3In%2BFAa6g00dMUUzAry%2Be7SWWvgh9FOggagnFM70Txwgx6fXfySghrrDpIKEDB1NM2DQyVycp6%2FSSLd%2Fv5LxiXSC46LX5DTK2owqFkIAF6B7y5%2FEDx898p10UerXOy%2Bc%2BVir124zktFW7%2F2uMtl%2B8Vnjshi9OXHGNNVe%2FXVef4vgzdVO152eUc8fPpyrDAaP44SMoQHlykEOqc4dVJSl%2BOT1adgNOmHl3EfTTKsYv%2BsRTz84htHGv8qSPdP7d4f6uEmk9m9BUVU06GaCsGzjVHNTUIz4wyFzKOX4eyeY%2B85QJ0AYtLbqfGBW5J%2FspdJZwji%2F1vS%2Bb%2Bf9nwrYzRH7WvR21mcuU%2BC%2BvK74%2B85JB2%2Bnnr%2B3OuODESdB%2B2rO3KJz9HHry6ZdKcEs%2FlprwxvfiAl1%2F8B"},(0,a.kt)("img",{parentName:"a",src:"https://i.imgur.com/qZ5QX23.png",alt:"Generation of a Public / Private Keypair"}))),(0,a.kt)("p",null,"The pipeline pattern handles three kinds of primitives:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Generator")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"Source")," that produces secret keys or seeds and does not take any inputs. In most cases, it generates either a key pair (e.g. Ed25519) or a mnemonic (BIP39) to create a seed for a deterministic wallet"),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Processor")," that takes in locations or data, and produces some new secret, stores it in a location. It is usually used to derive a new keypair (SLIP10)."),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Receiver")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"Sink")," that takes a location, produces a value and returns it. It does not store any product inside the vault.")),(0,a.kt)("p",null,"All operations involving sensitive data make heavy use of the procedures framework."),(0,a.kt)("h3",{id:"code-example"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"//  .. we initialize `client` somewhere before the calls\n// This constructs a `GenerateKey` procedure, that will generate a key at given\n// output location in the vault\nlet generate_key_procedure = GenerateKey {\n       ty: keytype.clone(),\n       output: output_location.clone(),\n};\n\n// Even though this procedure does not create a useful output, the result can be\n// used to check for errors\nlet procedure_result = client.execute_procedure(StrongholdProcedure::GenerateKey(generate_key_procedure));\n\n// Front the previously generate key, we want to export the public key\nlet public_key_procedure = stronghold::procedures::PublicKey {\n       ty: keytype,\n       private_key: output_location,\n};\n")))}h.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);