"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[73269],{72894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),l=n(44393),c=n(93513);const i={title:"How To Check The Balance"},r=void 0,s={unversionedId:"libraries/python/how_to/check_balance",id:"libraries/python/how_to/check_balance",title:"How To Check The Balance",description:"",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/python/how_to/2_check_balance.mdx",sourceDirName:"libraries/python/how_to",slug:"/libraries/python/how_to/check_balance",permalink:"/wallet.rs/develop/libraries/python/how_to/check_balance",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/python/how_to/2_check_balance.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How To Check The Balance"},sidebar:"docs",previous:{title:"How To Generate An Address",permalink:"/wallet.rs/develop/libraries/python/how_to/generate_address"},next:{title:"How To Send A Transaction",permalink:"/wallet.rs/develop/libraries/python/how_to/send_transaction"}},p={},d=[],h={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_wallet import IotaWallet\n\n# This example checks the balance of an account.\n\nwallet = IotaWallet('./alice-database')\n\naccount = wallet.get_account('Alice')\n\n# Sync account with the node\nresponse = account.sync_account()\nprint(f'Synced: {response}')\n\n# Just calculate the balance with the known state\nbalance = account.get_balance()\nprint(f'Balance: {balance}')\n"),(0,o.kt)(c.ZP,{mdxType:"MoreExamples"}))}u.isMDXComponent=!0},93513:(e,t,n)=>{n.d(t,{ZP:()=>c});var a=n(87462),o=(n(67294),n(3905));const l={toc:[]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"More advanced examples can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/python/native/examples"},"examples")," folder."))}c.isMDXComponent=!0}}]);