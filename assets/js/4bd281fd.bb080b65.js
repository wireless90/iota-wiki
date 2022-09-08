"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[21522],{36228:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=o(87462),a=(o(67294),o(3905)),i=o(44393),r=o(50504);const l={title:"How To Create A Block"},s=void 0,c={unversionedId:"libraries/python/how_to/create_block",id:"libraries/python/how_to/create_block",title:"How To Create A Block",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/python/how_to/5_create_block.mdx",sourceDirName:"libraries/python/how_to",slug:"/libraries/python/how_to/create_block",permalink:"/iota.rs/develop/libraries/python/how_to/create_block",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/python/how_to/5_create_block.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How To Create A Block"},sidebar:"docs",previous:{title:"How To Generate Addresses",permalink:"/iota.rs/develop/libraries/python/how_to/generate_addresses"},next:{title:"How To Get A Block",permalink:"/iota.rs/develop/libraries/python/how_to/get_block"}},p={},d=[],h={toc:d};function k(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_client import IotaClient\n\n# Create an IotaClient instance\nclient = IotaClient({'nodes': ['https://api.testnet.shimmer.network']})\n\n# Create and post a block without payload\nblock = client.build_and_post_block()\nprint(f'{block}')\n"),(0,a.kt)(r.ZP,{mdxType:"MoreExamples"}))}k.isMDXComponent=!0},50504:(e,t,o)=>{o.d(t,{ZP:()=>r});var n=o(87462),a=(o(67294),o(3905));const i={toc:[]};function r(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"More advanced examples can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/python/native/examples"},"examples")," folder."))}r.isMDXComponent=!0}}]);