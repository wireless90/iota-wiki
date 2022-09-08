"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26370],{60310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(87462),s=(t(67294),t(3905)),a=t(44393),r=t(83586);const i={title:"How To Send Native Tokens"},d=void 0,l={unversionedId:"libraries/nodejs/how_to/send_native_tokens",id:"libraries/nodejs/how_to/send_native_tokens",title:"How To Send Native Tokens",description:"",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/how_to/10_send_native_tokens.mdx",sourceDirName:"libraries/nodejs/how_to",slug:"/libraries/nodejs/how_to/send_native_tokens",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/send_native_tokens",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/how_to/10_send_native_tokens.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"How To Send Native Tokens"},sidebar:"docs",previous:{title:"How To Mint Native Tokens",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/mint_native_tokens"},next:{title:"How To Mint An Nft",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/mint_nft"}},c={},p=[],u={toc:p};function k(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(a.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example will send native tokens\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n\n        const account = await manager.getAccount('0');\n\n        await account.sync();\n\n        // Get a tokenId from your account balance after running example\n        // 22-mint-native-tokens.js\n        let tokenId =\n            '0x087ec7c0a543e60cfc92850ed053d3b323c0d7181e63b24c6ef24dd591814006950100000000';\n        // `100` hex encoded\n        let tokenAmount = \"0x64\"\n\n        // Send native tokens with a storage deposit return and an expiraiton of one day\n        // This means that the receiver has to claim the output in time (can be done with 21-claim-outputs.js),\n        // where the storage deposit of the output is returned, or if not, the sender gets full control back after one day passed.\n        const response = await account.sendNativeTokens([\n            {\n                //TODO: Replace with the address of your choice!\n                address: 'rms1qrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupgf0h0',\n                nativeTokens: [[tokenId, tokenAmount]],\n            }\n        ]);\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,s.kt)(r.ZP,{mdxType:"MoreExamples"}))}k.isMDXComponent=!0},83586:(e,n,t)=>{t.d(n,{ZP:()=>r});var o=t(87462),s=(t(67294),t(3905));const a={toc:[]};function r(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"More advanced examples can be found in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs/examples"},"examples")," folder."))}r.isMDXComponent=!0}}]);