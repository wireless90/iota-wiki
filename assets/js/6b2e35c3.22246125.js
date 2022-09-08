"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[79722],{68665:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>E,contentTitle:()=>N,default:()=>C,frontMatter:()=>w,metadata:()=>v,toc:()=>T});var t=a(87462),s=(a(67294),a(3905)),i=a(54411),o=a(43305),d=a(44393),r=a(94365);const l=r.Z.indexOf("public static void getDataMessage"),p=r.Z.indexOf("public static void transaction"),c=r.Z.substring(l,p),u={toc:[]};function m(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can use the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/java/api_reference#withdatastringdata-clientmessagebuilder"},"ClientMessageBuilder.withDataString(data: String)")," function\nfunction to attach data to a message."),(0,s.kt)(d.Z,{className:"language-javascript",mdxType:"CodeBlock"},c),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output example"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "message": {\n      "networkId":"14379272398717627559",\n      "parentMessageIds": [\n         "1a383abbe5f6a6b0899d718975c3119643aa784a68d04075f4e986fd7a0c0e4b",\n         "6098f889e31911833df7b7839e8b222d701ab496f7dfa1a719087edf4fa7ae52",\n         "a98b47db4e8254eccc738c968bd35b08a5491e56d6c1a18af298c42bbd8c3a46",\n         "da6796c0842c08de832c7948fffedc0d5adce372e50a108f26a128dba6096d31"\n      ],\n      "payload": {\n         "type":2,\n         "index":"494f54412e52532042494e44494e47202d204e4f44452e4a53",\n         "data":"736f6d65207574662062617365642064617461"\n      },\n      "nonce":"13835058055282176519"\n   },\n   "messageId":"10f59c101cec669b0a0ba163bc777184c7f63455f5e771d42f910a1ba2ad20ff"\n}\n')))}m.isMDXComponent=!0;const g="async function run() {\n    const { ClientBuilder } = require('@iota/client');\n\n    // client will connect to testnet by default\n    const client = new ClientBuilder().build();\n\n    const message = await client.message()\n        .index('IOTA.RS BINDING - NODE.JS')\n        .data('some utf based data')\n        .submit();\n\n    console.log(message);\n}\n\nrun()\n",f={toc:[]};function b(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can use the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/nodejs/api_reference#datadata-messagesender"},"MessageSender.data(data: string | Uint8Arra)")," function\nfunction to attach data to a message."),(0,s.kt)(d.Z,{className:"language-javascript",mdxType:"CodeBlock"},g),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output example"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": {\n    "networkId": "14379272398717627559",\n    "parentMessageIds": [\n      "1a383abbe5f6a6b0899d718975c3119643aa784a68d04075f4e986fd7a0c0e4b",\n      "6098f889e31911833df7b7839e8b222d701ab496f7dfa1a719087edf4fa7ae52",\n      "a98b47db4e8254eccc738c968bd35b08a5491e56d6c1a18af298c42bbd8c3a46",\n      "da6796c0842c08de832c7948fffedc0d5adce372e50a108f26a128dba6096d31"\n    ],\n    "payload": {\n      "type": 2,\n      "index": "494f54412e52532042494e44494e47202d204e4f44452e4a53",\n      "data": "736f6d65207574662062617365642064617461"\n    },\n    "nonce": "13835058055282176519"\n  },\n  "messageId": "10f59c101cec669b0a0ba163bc777184c7f63455f5e771d42f910a1ba2ad20ff"\n}\n')))}b.isMDXComponent=!0;const h={toc:[]};function y(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," parameter in the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/python/api_reference#messageseed-optional-account_index-optional-initial_address_index-optional-inputs-optional-input_range_begin-optional-input_range_end-optional-outputs-optional-dust_allowance_outputs-optional-index-optional-index_raw-optional-data-optional-data_str-optional-parents-optional-message"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.message()")),"\nfunction to attach data to a message."),(0,s.kt)(d.Z,{className:"language-python",mdxType:"CodeBlock"},'import iota_client\nclient = iota_client.Client()\n\n# encoding utf string into list of bytes\nsome_utf_data = "some utf based data".encode("utf8")\n\nmessage = client.message(\n    index="some_data_index", data=some_utf_data\n)\nprint(message)'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output example"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message_id": "8d4fa37be3c00691131c2c3e03e7b8b956c9118a2ce4be3a8597d51d82ed2de9",\n  "network_id": 7712883261355838377,\n  "parents": [\n    "3719d308ae14b7ef1ed5a3a1604228e97587b9da487db10bc6e4a4f800083da0",\n    "4431e2f776db888488728e0aa34c94975e65d6fa74893aa675172af6b9f37257",\n    "8f9fa84954c58bcfc9acc33ca827b4ea35c2caae88db736399a031120e85eebf",\n    "f63d416de97e6a9fd1314fbbbbb263f30dff260f3075f9a65e7dfe1f2cc56ce3"\n  ],\n  "payload": {\n    "transaction": "None",\n    "milestone": "None",\n    "indexation": [\n      {\n        "index": "736f6d655f646174615f696e646578",\n        "data": [115, 111, 109, 101, 32, 117, 116, 102, 32, 98, 97, 115, 101, 100, 32, 100, 97, 116, 97]\n      }\n    ],\n    "receipt": "None",\n    "treasury_transaction": "None"\n  },\n  "nonce": 6917529027641573188\n}\n')))}y.isMDXComponent=!0;const _={toc:[]};function x(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},_,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can use the\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/iota-client/latest/iota_client/api/struct.ClientMessageBuilder.html#method.with_data"},(0,s.kt)("inlineCode",{parentName:"a"},"ClientMessageBuilder.with_data(data: Vec<u8>)")),"\nfunction to sent data in a message."),(0,s.kt)(d.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 08_data_message --release\n\nuse iota_client::{Client, Result};\n\n/// In this example we will send a message without a payload\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let iota = Client::builder()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n        // .with_permanode("http://18.196.167.57:8000/api/permanode/", None, None)?\n        .finish()\n        .await?;\n\n    let message = iota\n        .message()\n        .with_index("Hello")\n        .with_data("Tangle".as_bytes().to_vec())\n        .finish()\n        .await?;\n\n    println!(\n        "Message sent https://explorer.iota.org/devnet/message/{}\\n",\n        message.id().0\n    );\n\n    let fetched_message_ids = iota.get_message().index("Hello").await.unwrap();\n    println!("Messages with Hello index: {:?}", fetched_message_ids);\n    Ok(())\n}\n'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output example"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": {\n    "networkId": "14379272398717627559",\n    "parentMessageIds": [\n      "1a383abbe5f6a6b0899d718975c3119643aa784a68d04075f4e986fd7a0c0e4b",\n      "6098f889e31911833df7b7839e8b222d701ab496f7dfa1a719087edf4fa7ae52",\n      "a98b47db4e8254eccc738c968bd35b08a5491e56d6c1a18af298c42bbd8c3a46",\n      "da6796c0842c08de832c7948fffedc0d5adce372e50a108f26a128dba6096d31"\n    ],\n    "payload": {\n      "type": 2,\n      "index": "494f54412e52532042494e44494e47202d204e4f44452e4a53",\n      "data": "736f6d65207574662062617365642064617461"\n    },\n    "nonce": "13835058055282176519"\n  },\n  "messageId": "10f59c101cec669b0a0ba163bc777184c7f63455f5e771d42f910a1ba2ad20ff"\n}\n')))}x.isMDXComponent=!0;const k={toc:[]};function S(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},k,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("a",{parentName:"p",href:"./../libraries/wasm/api_reference#messagebuilderdatadata--codemessagebuildercode"},"MessageBuilder.data(data: Uint8Array)")," function\nfunction to attach data to a message."),(0,s.kt)(d.Z,{className:"language-javascript",mdxType:"CodeBlock"},g),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output example"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": {\n    "networkId": "14379272398717627559",\n    "parentMessageIds": [\n      "1a383abbe5f6a6b0899d718975c3119643aa784a68d04075f4e986fd7a0c0e4b",\n      "6098f889e31911833df7b7839e8b222d701ab496f7dfa1a719087edf4fa7ae52",\n      "a98b47db4e8254eccc738c968bd35b08a5491e56d6c1a18af298c42bbd8c3a46",\n      "da6796c0842c08de832c7948fffedc0d5adce372e50a108f26a128dba6096d31"\n    ],\n    "payload": {\n      "type": 2,\n      "index": "494f54412e52532042494e44494e47202d204e4f44452e4a53",\n      "data": "736f6d65207574662062617365642064617461"\n    },\n    "nonce": "13835058055282176519"\n  },\n  "messageId": "10f59c101cec669b0a0ba163bc777184c7f63455f5e771d42f910a1ba2ad20ff"\n}\n')))}S.isMDXComponent=!0;const w={title:"Send a Data Message",description:"An IndexationPayload is a payload type that can be used to attach arbitrary data and a key index to a message.",image:"/img/logo/iota_mark_light.png",keywords:["how to","key index","data message","arbitrary data","client","payloads","java","nodejs","python","wasm","rust"]},N=void 0,v={unversionedId:"examples/data_message",id:"examples/data_message",title:"Send a Data Message",description:"An IndexationPayload is a payload type that can be used to attach arbitrary data and a key index to a message.",source:"@site/content/build/iota.rs/production/documentation/docs/examples/data_message.mdx",sourceDirName:"examples",slug:"/examples/data_message",permalink:"/iota.rs/examples/data_message",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/examples/data_message.mdx",tags:[],version:"current",frontMatter:{title:"Send a Data Message",description:"An IndexationPayload is a payload type that can be used to attach arbitrary data and a key index to a message.",image:"/img/logo/iota_mark_light.png",keywords:["how to","key index","data message","arbitrary data","client","payloads","java","nodejs","python","wasm","rust"]},sidebar:"docs",previous:{title:"Get Message Data",permalink:"/iota.rs/examples/get_message_data"},next:{title:"Send a Signed Transaction",permalink:"/iota.rs/examples/transaction"}},E={},T=[],M={toc:T};function C(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},M,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"An ",(0,s.kt)("a",{parentName:"p",href:"/iota.rs/explanations/messages_payloads_and_transactions#indexationpayload"},(0,s.kt)("inlineCode",{parentName:"a"},"IndexationPayload"))," is a payload type that can be used to attach arbitrary ",(0,s.kt)("inlineCode",{parentName:"p"},"data"),"\nand a key ",(0,s.kt)("inlineCode",{parentName:"p"},"index")," to a message. To send a payload, you should  at least provide the ",(0,s.kt)("inlineCode",{parentName:"p"},"index"),". The data part\n(as ",(0,s.kt)("inlineCode",{parentName:"p"},"bytes[]"),") is optional."),(0,s.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(m,{mdxType:"JavaDataMessage"})),(0,s.kt)(o.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,s.kt)(b,{mdxType:"NodejsGetDataMessage"})),(0,s.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(y,{mdxType:"PythonGetDataMessage"})),(0,s.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)(x,{mdxType:"RustGetDataMessage"})),(0,s.kt)(o.Z,{value:"wasm",label:"Wasm",mdxType:"TabItem"},(0,s.kt)(S,{mdxType:"WasmGetDataMessage"}))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You can find the message using its ",(0,s.kt)("inlineCode",{parentName:"li"},"message ID")," in the\n",(0,s.kt)("a",{parentName:"li",href:"https://explorer.iota.org/devnet/message/8d4fa37be3c00691131c2c3e03e7b8b956c9118a2ce4be3a8597d51d82ed2de9"},"Tangle explorer"),"."),(0,s.kt)("li",{parentName:"ul"},"There are three prepared ",(0,s.kt)("a",{parentName:"li",href:"/iota.rs/explanations/messages_payloads_and_transactions#corepayloads"},"payloads"),"(",(0,s.kt)("inlineCode",{parentName:"li"},"transaction"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"milestone"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"indexation"),"). However, at the time, the ",(0,s.kt)("inlineCode",{parentName:"li"},"indexation"),"\npayload is the only one in use."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"data")," contains arbitrary data encoded in bytes."),(0,s.kt)("li",{parentName:"ul"},"Please note there is no IOTA address involved while sending data messages. Data messages are referenced using their\n",(0,s.kt)("inlineCode",{parentName:"li"},"message ID")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"index")," key."),(0,s.kt)("li",{parentName:"ul"},"IOTA addresses are part of the ",(0,s.kt)("inlineCode",{parentName:"li"},"UTXO")," data structure that is sent using the ",(0,s.kt)("a",{parentName:"li",href:"./../explanations/messages_payloads_and_transactions#signedtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"SignedTransaction")),"\npayload.")))}C.isMDXComponent=!0},43305:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(67294),s=a(86010);const i="tabItem__kUE";function o(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,s.Z)(i,o),hidden:a},n)}},54411:(e,n,a)=>{a.d(n,{Z:()=>m});var t=a(87462),s=a(67294),i=a(86010),o=a(51048),d=a(33609),r=a(1943),l=a(72957);const p="tabList_fbd4",c="tabItem_v5XY";function u(e){var n,a;const{lazy:o,block:u,defaultValue:m,values:g,groupId:f,className:b}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:h.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),_=(0,d.l)(y,((e,n)=>e.value===n.value));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const x=null===m?m:null!=(n=null!=m?m:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?n:h[0].props.value;if(null!==x&&!y.some((e=>e.value===x)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:S}=(0,r.U)(),[w,N]=(0,s.useState)(x),v=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=f){const e=k[f];null!=e&&e!==w&&y.some((n=>n.value===e))&&N(e)}const T=e=>{const n=e.currentTarget,a=v.indexOf(n),t=y[a].value;t!==w&&(E(n),N(t),null!=f&&S(f,String(t)))},M=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{var t;const n=v.indexOf(e.currentTarget)+1;a=null!=(t=v[n])?t:v[0];break}case"ArrowLeft":{var s;const n=v.indexOf(e.currentTarget)-1;a=null!=(s=v[n])?s:v[v.length-1];break}}null==(n=a)||n.focus()};return s.createElement("div",{className:(0,i.Z)("tabs-container",p)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},b)},y.map((e=>{let{value:n,label:a,attributes:o}=e;return s.createElement("li",(0,t.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>v.push(e),onKeyDown:M,onFocus:T,onClick:T},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===n})}),null!=a?a:n)}))),o?(0,s.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,o.Z)();return s.createElement(u,(0,t.Z)({key:String(n)},e))}},94365:(e,n,a)=>{a.d(n,{Z:()=>t});const t='package org.iota.client.example;\n\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Optional;\n\nimport org.iota.client.*;\nimport org.iota.client.local.*;\n\npublic class ExampleApp {\n\n    protected static final String MAINNET = "https://chrysalis-nodes.iota.cafe";\n\n    // Faucet: https://faucet.chrysalis-devnet.iota.cafe/\n    // Explorer: https://explorer.iota.org/devnet\n    protected static final String TESTNET = "https://api.lb-0.h.chrysalis-devnet.iota.cafe";\n    protected static final String TESTNET_LB = "api.lb-0.h.chrysalis-devnet.iota.cafe";\n\n    protected static final String NODE = TESTNET;\n\n    static {\n        NativeAPI.verifyLink();\n    }\n\n    public static void main(String[] args) {\n\n        try {\n            new ExampleApp();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    public ExampleApp() {\n\n    }\n\n    private static Client node() {\n        Client iota = Client.Builder().withNode(NODE) // Insert your node URL here\n                // .withNodeAuth("https://somechrysalisiotanode.com", "jwt_or_null",\n                // "name_or_null", "password_or_null") //\n                // Optional authentication\n                .finish();\n        return iota;\n    }\n\n    public static void nodeInfo() {\n        try {\n            Client iota = node();\n\n            System.out.println("Node healthy: " + iota.getHealth());\n\n            NodeInfoWrapper info = iota.getInfo();\n            System.out.println("Node url: " + info.url());\n            System.out.println("Node Info: " + info.nodeInfo());\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void generateSeed() {\n        try {\n            SecretKey secret_key = SecretKey.generate();\n            System.out.println(RustHex.encode(secret_key.toBytes()));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void generateAddresses() {\n        try {\n            Client iota = node();\n\n            String seed = RustHex.encode("NONSECURE_USE_OF_DEVELOPMENT_SEED_1");\n            String[] addresses = GetAddressesBuilder.from(seed).withClient(iota).withRange(0, 10).finish();\n            System.out.println(Arrays.toString(addresses));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getBalance() {\n        try {\n            Client iota = node();\n\n            String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n            long seed_balance = iota.getBalance(seed).finish();\n            System.out.println("Account balance: " + seed_balance);\n\n            String address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n            BalanceAddressResponse response = iota.getAddress().balance(address);\n            System.out.println("The balance of " + address + " is " + response.balance());\n\n            UtxoInput[] outputs = iota.getAddress().outputs(address, new OutputsOptions());\n            System.out.println("The outputs of address " + address + " are: " + Arrays.toString(outputs));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getOutputs() {\n        try {\n            Client iota = node();\n\n            String address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n            UtxoInput[] outputs = iota.getAddress().outputs(address, new OutputsOptions());\n            System.out.println("The outputs of address " + address + " are: " + Arrays.toString(outputs));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void simpleMessage() {\n        try {\n            Client iota = node();\n            Message message = iota.message().finish();\n\n            System.out.println(\n                    "Empty message sent: https://explorer.iota.org/mainnet/message/" + message.id().toString());\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getMessageMetadata() {\n        try {\n            Client iota = node();\n            Message message = iota.message().finish();\n\n            MessageMetadata metadata = iota.getMessage().metadata(message.id());\n\n            System.out.println("Message metadata: " + metadata);\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getDataMessage() {\n        Client iota = node();\n\n        Message message = iota.message().withIndexString("Hello").withDataString("Tangle").finish();\n\n        System.out.println("Message sent https://explorer.iota.org/devnet/message/" + message.id());\n\n        MessageId[] fetched_message_ids = iota.getMessage().indexString("Hello");\n        System.out.println("Messages with Hello index: " + Arrays.toString(fetched_message_ids));\n    }\n\n    public static void transaction() {\n        Client iota = node();\n\n        String seed_1 = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n        Message message = iota\n            .message()\n            .withSeed(seed_1)\n            // Insert the output address and amount to spent. The amount cannot be zero.\n            .withOutput(\n                // We generate an address from our seed so that we send the funds to ourselves\n                        iota.getAddresses(seed_1).withRange(0, 1).finish()[0], 1000000\n            ).finish();\n\n        System.out.println("Transaction sent: https://explorer.iota.org/devnet/message/" +  message.id());\n    }\n\n    public static void mqtt() {\n        Client iota = node();\n\n        MqttListener listener = new MqttListener() {\n            @Override\n            public void onEvent(TopicEvent event) {\n                System.out.println(event);\n            }\n        };\n\n        // TODO: Make listeners with the Sync trait\n        // iota.subscriber().withTopic(Topic.from("messages")).subscribe(listener);\n    }\n\n    public static void consolidate() {\n        Client iota = node();\n\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n        // Here all funds will be send to the address with the lowest index in the range\n        String address = Util.consolidateFunds(iota, seed, 0, 0, 150);\n\n        System.out.println("Funds consolidated to" + address);\n    }\n\n    public static void createMaxDust(){\n        Client iota = node();\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n        String seed_2 = "NONSECURE_USE_OF_DEVELOPMENT_SEED_2";\n\n        String[] new_addresses = iota.getAddresses(seed_2).withRange(0, 1).finish();\n\n        Message dustAllowanceMessage = iota\n            .message()\n            .withSeed(seed)\n            .withDustAllowanceOutput(new_addresses[0], 10_000_000)\n            .finish();\n\n        MessageWrap[] msgs = iota.retryUntilIncluded(dustAllowanceMessage.id(), -1, -1);\n\n        // Split funds to own addresses\n        String[] addresses = iota\n            .getAddresses(seed)\n            // We start from index 1 so we can send remaining balance to the address with index 0\n            .withRange(1, 101)\n            .finish();\n\n        ClientMessageBuilder message_builder = iota.message().withSeed(seed);\n        for (String address : addresses) {\n            // Make sure to re-set the builder as the instance is a clone of the old one due to JNI limits\n            message_builder = message_builder.withOutput(address, 1_000_001);\n        }\n        Message message = message_builder.finish();\n\n        System.out.println(\n            "First transaction sent: https://explorer.iota.org/devnet/message/" + message.id()\n        );\n\n        msgs = iota.retryUntilIncluded(message.id(), -1, -1);\n\n        // At this point we have 100 Mi on 100 addresses and we will just send it to the final address\n        // We use the outputs directly so we don\'t double spend them\n        \n        List<UtxoInput> initial_outputs = new ArrayList<>();\n        Optional<MessagePayload> payload = message.payload();\n        if (payload.isPresent() && payload.get().payloadType().equals(MessagePayloadType.TRANSACTION)) {\n            TransactionPayload tx = payload.get().asTransaction();\n            RegularEssence essence = tx.essence().asRegular();\n            Output[] outputs = essence.outputs();\n            for (int index = 0; index < outputs.length; index++) {\n                Output output = outputs[index];\n                if (output.asSignatureLockedSingleOutput().amount() == 1_000_001) {\n                    initial_outputs.add(UtxoInput.from(tx.id(), index));\n                } \n            }\n        }\n\n        String[] first_address_old_seed = iota.getAddresses(seed).withRange(0, 1).finish();\n        List<MessageId> sent_messages = new ArrayList<>();\n        for (UtxoInput input : initial_outputs) {\n            MessageId message_id = iota\n                .message()\n                    .withSeed(seed).withInput(input).withInputRange(1, 101).withOutput(new_addresses[0], 1)\n                // send remaining iotas back\n                    .withOutput(first_address_old_seed[0], 1_000_000)\n                .finish()\n                    .id();\n            System.out.printf("Transaction %i sent: https://explorer.iota.org/devnet/message/%s" + input.index(),\n                    message_id\n            );\n            sent_messages.add(message_id);\n        }\n        // only check last message, if this gets confirmed all other messages should also be confirmed\n        msgs = iota.retryUntilIncluded(sent_messages.get(sent_messages.size() - 1), -1, -1);\n        // Send all funds back to first address\n        long total_balance = iota.getBalance(seed).finish();\n\n        System.out.println("Total balance: " + total_balance);\n\n        message = iota\n            .message()\n            .withSeed(seed)\n            .withOutput(first_address_old_seed[0], total_balance)\n            .finish();\n\n        System.out.println("Final tx sent: https://explorer.iota.org/devnet/message/" + message.id());\n\n        msgs = iota.retryUntilIncluded(message.id(), -1, -1);\n    }\n\n    public static void customPayload() {\n        // Create a client instance\n        Client iota = node();\n\n        IndexationPayload indexation_payload = IndexationPayload.fromStrings("Your Index", "Your Data");\n\n        Message message = iota.message().finishIndex(indexation_payload);\n\n        System.out.printf("Message ID: %s", message.id());\n    }\n\n    public static void offlineExample() {\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n        String toAddress = "atoi1qruzprxum2934lr3p77t96pzlecxv8pjzvtjrzdcgh2f5exa22n6gek0qdq";\n        long amount = 1_000_000;\n\n        Offline offlineExample = new Offline(NODE, seed);\n        String[] inputAddresses = offlineExample.generateAddresses();\n        String preparedData = offlineExample.prepareTransaction(inputAddresses, toAddress, amount);\n        System.out.println("Prepared data: " + preparedData);\n        String signedData = offlineExample.signTransaction(preparedData);\n        System.out.println("Signed data: " + signedData);\n\n        Message message = offlineExample.sendMessage(signedData);\n\n        System.out.printf("Message ID: %s", message.id());\n    }\n}\n'}}]);