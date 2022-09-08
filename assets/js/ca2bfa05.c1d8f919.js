"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[7374],{30260:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=o(87462),a=(o(67294),o(3905)),n=o(44393);const r={title:"How To Create A Block"},l=void 0,c={unversionedId:"libraries/java/how_to/create_block",id:"libraries/java/how_to/create_block",title:"How To Create A Block",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/java/how_to/create_block.mdx",sourceDirName:"libraries/java/how_to",slug:"/libraries/java/how_to/create_block",permalink:"/iota.rs/develop/libraries/java/how_to/create_block",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/java/how_to/create_block.mdx",tags:[],version:"current",frontMatter:{title:"How To Create A Block"},sidebar:"docs",previous:{title:"How To Get A Block",permalink:"/iota.rs/develop/libraries/java/how_to/get_block"},next:{title:"How To Post A Block",permalink:"/iota.rs/develop/libraries/java/how_to/post_block"}},s={},p=[],d={toc:p};function k(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{className:"language-java",mdxType:"CodeBlock"},'package node_api_core;\n\nimport org.iota.Client;\nimport org.iota.types.Block;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.ClientException;\n\npublic class CreateBlock {\n    public static void main(String[] args) throws ClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Create the most simple block.\n        Map.Entry<BlockId, Block> b = client.buildAndPostBlock(null, null);\n\n        // Print the block.\n        System.out.println(b);\n    }\n}'))}k.isMDXComponent=!0}}]);