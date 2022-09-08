"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99108],{24419:(e,n,t)=>{t.d(n,{ZP:()=>o});var s=t(87462),a=(t(67294),t(3905));const i={toc:[]};function o(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"EXPLANATION: Outputs",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can learn more about Outputs in the\n",(0,a.kt)("a",{parentName:"p",href:"/iota.rs/explanations/messages_payloads_and_transactions"},"Messages, Payloads and Transactions")," section.")))}o.isMDXComponent=!0},27326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>T,default:()=>N,frontMatter:()=>w,metadata:()=>k,toc:()=>S});var s=t(87462),a=(t(67294),t(3905)),i=t(54411),o=t(43305),r=t(24419),l=t(44393),d=t(94365);const u=d.Z.indexOf("public static void mqtt"),c=d.Z.indexOf("public static void consolidate"),p=d.Z.substring(u,c),m={toc:[]};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{className:"language-java",mdxType:"CodeBlock"},p))}g.isMDXComponent=!0;const h={toc:[]};function b(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can reach the listener using an instance of a\n",(0,a.kt)("a",{parentName:"p",href:"./../libraries/nodejs/api_reference#topicsubscriber"},(0,a.kt)("inlineCode",{parentName:"a"},"Client.TopicSubscriber"))," object that is returned from the\n",(0,a.kt)("a",{parentName:"p",href:"./../libraries/nodejs/api_reference#subscriber-topicsubscriber"},(0,a.kt)("inlineCode",{parentName:"a"},"Client.subscriber()"))," function. It offers several\nchaining calls:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./../libraries/nodejs/api_reference#topictopic-topicsubscriber"},(0,a.kt)("inlineCode",{parentName:"a"},".topic(str)"))," /\n",(0,a.kt)("a",{parentName:"li",href:"./../libraries/nodejs/api_reference#topicstopic-topicsubscriber"},(0,a.kt)("inlineCode",{parentName:"a"},".topics(str[])")),": A topic or list of topics that\nshould trigger a provided callback."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./../libraries/nodejs/api_reference#subscribecb-topicsubscriber"},(0,a.kt)("inlineCode",{parentName:"a"},".subscribe(cb)")),": Subscribes the listener to a callback function that is being triggered every time the given topic(s)\nis noticed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./../libraries/nodejs/api_reference#unsubscribecb-callback-topicsubscriber"},(0,a.kt)("inlineCode",{parentName:"a"},".unsubscribe(cb)")),": Unsubscribes the listener from the given topics. Once unsubscribed, the given callback function is\nexecuted in the form ",(0,a.kt)("inlineCode",{parentName:"li"},"(err, message) => {}"),".")),(0,a.kt)(l.Z,{className:"language-javascript",mdxType:"CodeBlock"},"async function run() {\n    const {\n        ClientBuilder\n    } = require('@iota/client');\n\n    // client connects to a node that has MQTT enabled\n    const client = new ClientBuilder()\n        .node('https://api.thin-hornet-1.h.chrysalis-devnet.iota.cafe')\n        .build();\n\n    client.subscriber().topics(['milestones/confirmed', 'messages']).subscribe((err, data) => {\n        console.log(data);\n        // To get the message id from messages `client.getMessageId(data.payload)` can be used\n    })\n\n    await new Promise(resolve => setTimeout(resolve, 1500));\n    // unsubscribe from 'messages' topic, will continue to receive events for 'milestones/confirmed'\n    client.subscriber().topics(['messages']).unsubscribe((err, data) => {\n        console.log(data);\n    })\n}\n\nrun()\n"))}b.isMDXComponent=!0;const f={toc:[]};function _(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"import iota_client\nimport json\nimport os\nimport queue\nimport time\n\n# The node mqtt url\nnode_url = 'https://chrysalis-nodes.iota.org/'\n\n# The queue to store received events\nq = queue.Queue()\n\n# The MQTT broker options\nbroker_options = {\n    'automatic_disconnect': True,\n    'timeout': 30,\n    'use_ws': True,\n    'port': 443,\n    'max_reconnection_attempts': 5,\n}\n\nclient = iota_client.Client(\n    nodes_name_password=[[node_url]], mqtt_broker_options=broker_options)\n\n# The queue to store received events\nq = queue.Queue()\n\n# The MQTT broker options\nbroker_options = {\n    'automatic_disconnect': True,\n    'timeout': 5,\n    'use_ws': True,\n    'port': 443,\n    'max_reconnection_attempts': 5,\n}\n\n\ndef worker():\n    \"\"\"The worker to process the queued events.\n    \"\"\"\n    received_events = 0\n    while received_events < 10:\n        item = q.get(True)\n        event = json.loads(item)\n        print(f'Received Event: {event}')\n        if event['topic'] == \"message\":\n            message_id = client.get_message_id(str(event['payload']))\n            print(f'Received message_id: {message_id}')\n        received_events += 1\n        # unsubscribe from topic \"messages\", will continue to receive events for \"milestones/latest\"\n        if received_events == 7:\n            client.unsubscribe_topics(['messages'])\n        q.task_done()\n\n\ndef on_mqtt_event(event):\n    \"\"\"Put the received event to queue.\n    \"\"\"\n    q.put(event)\n\n\nif __name__ == '__main__':\n    client.subscribe_topics(['messages', 'milestones/confirmed'], on_mqtt_event)\n    worker()\n    client.disconnect()\n    q.queue.clear()\n"))}_.isMDXComponent=!0;const v={toc:[]};function y(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 10_mqtt --features=mqtt --release\n\nuse iota_client::{bee_message::Message, Client, MqttEvent, Result, Topic};\nuse std::sync::{mpsc::channel, Arc, Mutex};\n\n// Connecting to a MQTT broker using raw ip doesn\'t work with TCP. This is a limitation of rustls.\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create a client instance\n    let mut iota = Client::builder()\n        .with_node("https://api.thin-hornet-0.h.chrysalis-devnet.iota.cafe")?\n        .finish()\n        .await?;\n\n    let (tx, rx) = channel();\n    let tx = Arc::new(Mutex::new(tx));\n\n    let mut event_rx = iota.mqtt_event_receiver();\n    tokio::spawn(async move {\n        while event_rx.changed().await.is_ok() {\n            let event = event_rx.borrow();\n            if *event == MqttEvent::Disconnected {\n                println!("mqtt disconnected");\n                std::process::exit(1);\n            }\n        }\n    });\n\n    iota.subscriber()\n        .with_topics(vec![Topic::new("milestones/latest")?, Topic::new("messages")?])\n        .subscribe(move |event| {\n            match event.topic.as_str() {\n                "messages" => {\n                    let message: Message = serde_json::from_str(&event.payload).unwrap();\n                    println!("{:?}", event);\n                    println!("{:?}", message);\n                }\n                _ => println!("{:?}", event),\n            }\n            tx.lock().unwrap().send(()).unwrap();\n        })\n        .await\n        .unwrap();\n\n    for i in 0..10 {\n        rx.recv().unwrap();\n        if i == 7 {\n            // unsubscribe from topic "messages", will continue to receive events for "milestones/latest"\n            iota.subscriber()\n                .with_topics(vec![Topic::new("messages")?])\n                .unsubscribe()\n                .await?;\n        }\n    }\n\n    iota.subscriber().disconnect().await?;\n    // alternatively\n    // iota.subscriber().unsubscribe().await?;\n    Ok(())\n}\n'))}y.isMDXComponent=!0;const w={title:"Listen to MQTT",description:"You can reach the listener using an instance of a Client.TopicSubscriber object that is returned from the Client.subscriber() function.",image:"/img/logo/iota_mark_light.png",keywords:["how to","message","message queuing telemetry","queues","asynchronous events listener","list topics","nodejs","java","nodejs","python","wasm","rust"]},T=void 0,k={unversionedId:"examples/mqtt",id:"examples/mqtt",title:"Listen to MQTT",description:"You can reach the listener using an instance of a Client.TopicSubscriber object that is returned from the Client.subscriber() function.",source:"@site/content/build/iota.rs/production/documentation/docs/examples/mqtt.mdx",sourceDirName:"examples",slug:"/examples/mqtt",permalink:"/iota.rs/examples/mqtt",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/examples/mqtt.mdx",tags:[],version:"current",frontMatter:{title:"Listen to MQTT",description:"You can reach the listener using an instance of a Client.TopicSubscriber object that is returned from the Client.subscriber() function.",image:"/img/logo/iota_mark_light.png",keywords:["how to","message","message queuing telemetry","queues","asynchronous events listener","list topics","nodejs","java","nodejs","python","wasm","rust"]},sidebar:"docs",previous:{title:"Send a Signed Transaction",permalink:"/iota.rs/examples/transaction"},next:{title:"API Reference",permalink:"/iota.rs/libraries/java/api_reference"}},x={},S=[],E={toc:S};function N(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},E,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(r.ZP,{mdxType:"KeyConceptOutputs"}),(0,a.kt)("p",null,"IOTA node(s) provide a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/MQTT"},"Message Queuing Telemetry Transport")," (MQTT) layer, if\nenabled, which is a lightweight publish-subscribe network protocol that provides information about events that are\nbeing triggered by the IOTA network."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"iota.rs")," client library supports asynchronous event listeners that can be listened to, and continuously receive\nMQTT events based on a ",(0,a.kt)("inlineCode",{parentName:"p"},"topic"),", which can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"milestones/latest"),(0,a.kt)("li",{parentName:"ul"},"milestones/confirmed"),(0,a.kt)("li",{parentName:"ul"},"messages"),(0,a.kt)("li",{parentName:"ul"},"messages/referenced"),(0,a.kt)("li",{parentName:"ul"},"messages/indexation/{index}"),(0,a.kt)("li",{parentName:"ul"},"messages/{messageId}/metadata"),(0,a.kt)("li",{parentName:"ul"},"transactions/{transactionId}/included-message"),(0,a.kt)("li",{parentName:"ul"},"outputs/{outputId}"),(0,a.kt)("li",{parentName:"ul"},"addresses/{address}/outputs"),(0,a.kt)("li",{parentName:"ul"},"addresses/ed25519/{address}/outputs")),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(g,{mdxType:"Javamqtt"})),(0,a.kt)(o.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(b,{mdxType:"Nodejsmqtt"})),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(_,{mdxType:"Pythonmqtt"})),(0,a.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(y,{mdxType:"Rustmqtt"}))))}N.isMDXComponent=!0},43305:(e,n,t)=>{t.d(n,{Z:()=>o});var s=t(67294),a=t(86010);const i="tabItem__kUE";function o(e){let{children:n,hidden:t,className:o}=e;return s.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:t},n)}},54411:(e,n,t)=>{t.d(n,{Z:()=>m});var s=t(87462),a=t(67294),i=t(86010),o=t(51048),r=t(33609),l=t(1943),d=t(72957);const u="tabList_fbd4",c="tabItem_v5XY";function p(e){var n,t;const{lazy:o,block:p,defaultValue:m,values:g,groupId:h,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=g?g:f.map((e=>{let{props:{value:n,label:t,attributes:s}}=e;return{value:n,label:t,attributes:s}})),v=(0,r.l)(_,((e,n)=>e.value===n.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(n=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?n:f[0].props.value;if(null!==y&&!_.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+_.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,l.U)(),[k,x]=(0,a.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=h){const e=w[h];null!=e&&e!==k&&_.some((n=>n.value===e))&&x(e)}const N=e=>{const n=e.currentTarget,t=S.indexOf(n),s=_[t].value;s!==k&&(E(n),x(s),null!=h&&T(h,String(s)))},M=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var s;const n=S.indexOf(e.currentTarget)+1;t=null!=(s=S[n])?s:S[0];break}case"ArrowLeft":{var a;const n=S.indexOf(e.currentTarget)-1;t=null!=(a=S[n])?a:S[S.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},b)},_.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,s.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>S.push(e),onKeyDown:M,onFocus:N,onClick:N},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":k===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function m(e){const n=(0,o.Z)();return a.createElement(p,(0,s.Z)({key:String(n)},e))}},94365:(e,n,t)=>{t.d(n,{Z:()=>s});const s='package org.iota.client.example;\n\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Optional;\n\nimport org.iota.client.*;\nimport org.iota.client.local.*;\n\npublic class ExampleApp {\n\n    protected static final String MAINNET = "https://chrysalis-nodes.iota.cafe";\n\n    // Faucet: https://faucet.chrysalis-devnet.iota.cafe/\n    // Explorer: https://explorer.iota.org/devnet\n    protected static final String TESTNET = "https://api.lb-0.h.chrysalis-devnet.iota.cafe";\n    protected static final String TESTNET_LB = "api.lb-0.h.chrysalis-devnet.iota.cafe";\n\n    protected static final String NODE = TESTNET;\n\n    static {\n        NativeAPI.verifyLink();\n    }\n\n    public static void main(String[] args) {\n\n        try {\n            new ExampleApp();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    public ExampleApp() {\n\n    }\n\n    private static Client node() {\n        Client iota = Client.Builder().withNode(NODE) // Insert your node URL here\n                // .withNodeAuth("https://somechrysalisiotanode.com", "jwt_or_null",\n                // "name_or_null", "password_or_null") //\n                // Optional authentication\n                .finish();\n        return iota;\n    }\n\n    public static void nodeInfo() {\n        try {\n            Client iota = node();\n\n            System.out.println("Node healthy: " + iota.getHealth());\n\n            NodeInfoWrapper info = iota.getInfo();\n            System.out.println("Node url: " + info.url());\n            System.out.println("Node Info: " + info.nodeInfo());\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void generateSeed() {\n        try {\n            SecretKey secret_key = SecretKey.generate();\n            System.out.println(RustHex.encode(secret_key.toBytes()));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void generateAddresses() {\n        try {\n            Client iota = node();\n\n            String seed = RustHex.encode("NONSECURE_USE_OF_DEVELOPMENT_SEED_1");\n            String[] addresses = GetAddressesBuilder.from(seed).withClient(iota).withRange(0, 10).finish();\n            System.out.println(Arrays.toString(addresses));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getBalance() {\n        try {\n            Client iota = node();\n\n            String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n            long seed_balance = iota.getBalance(seed).finish();\n            System.out.println("Account balance: " + seed_balance);\n\n            String address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n            BalanceAddressResponse response = iota.getAddress().balance(address);\n            System.out.println("The balance of " + address + " is " + response.balance());\n\n            UtxoInput[] outputs = iota.getAddress().outputs(address, new OutputsOptions());\n            System.out.println("The outputs of address " + address + " are: " + Arrays.toString(outputs));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getOutputs() {\n        try {\n            Client iota = node();\n\n            String address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n            UtxoInput[] outputs = iota.getAddress().outputs(address, new OutputsOptions());\n            System.out.println("The outputs of address " + address + " are: " + Arrays.toString(outputs));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void simpleMessage() {\n        try {\n            Client iota = node();\n            Message message = iota.message().finish();\n\n            System.out.println(\n                    "Empty message sent: https://explorer.iota.org/mainnet/message/" + message.id().toString());\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getMessageMetadata() {\n        try {\n            Client iota = node();\n            Message message = iota.message().finish();\n\n            MessageMetadata metadata = iota.getMessage().metadata(message.id());\n\n            System.out.println("Message metadata: " + metadata);\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getDataMessage() {\n        Client iota = node();\n\n        Message message = iota.message().withIndexString("Hello").withDataString("Tangle").finish();\n\n        System.out.println("Message sent https://explorer.iota.org/devnet/message/" + message.id());\n\n        MessageId[] fetched_message_ids = iota.getMessage().indexString("Hello");\n        System.out.println("Messages with Hello index: " + Arrays.toString(fetched_message_ids));\n    }\n\n    public static void transaction() {\n        Client iota = node();\n\n        String seed_1 = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n        Message message = iota\n            .message()\n            .withSeed(seed_1)\n            // Insert the output address and amount to spent. The amount cannot be zero.\n            .withOutput(\n                // We generate an address from our seed so that we send the funds to ourselves\n                        iota.getAddresses(seed_1).withRange(0, 1).finish()[0], 1000000\n            ).finish();\n\n        System.out.println("Transaction sent: https://explorer.iota.org/devnet/message/" +  message.id());\n    }\n\n    public static void mqtt() {\n        Client iota = node();\n\n        MqttListener listener = new MqttListener() {\n            @Override\n            public void onEvent(TopicEvent event) {\n                System.out.println(event);\n            }\n        };\n\n        // TODO: Make listeners with the Sync trait\n        // iota.subscriber().withTopic(Topic.from("messages")).subscribe(listener);\n    }\n\n    public static void consolidate() {\n        Client iota = node();\n\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n        // Here all funds will be send to the address with the lowest index in the range\n        String address = Util.consolidateFunds(iota, seed, 0, 0, 150);\n\n        System.out.println("Funds consolidated to" + address);\n    }\n\n    public static void createMaxDust(){\n        Client iota = node();\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n        String seed_2 = "NONSECURE_USE_OF_DEVELOPMENT_SEED_2";\n\n        String[] new_addresses = iota.getAddresses(seed_2).withRange(0, 1).finish();\n\n        Message dustAllowanceMessage = iota\n            .message()\n            .withSeed(seed)\n            .withDustAllowanceOutput(new_addresses[0], 10_000_000)\n            .finish();\n\n        MessageWrap[] msgs = iota.retryUntilIncluded(dustAllowanceMessage.id(), -1, -1);\n\n        // Split funds to own addresses\n        String[] addresses = iota\n            .getAddresses(seed)\n            // We start from index 1 so we can send remaining balance to the address with index 0\n            .withRange(1, 101)\n            .finish();\n\n        ClientMessageBuilder message_builder = iota.message().withSeed(seed);\n        for (String address : addresses) {\n            // Make sure to re-set the builder as the instance is a clone of the old one due to JNI limits\n            message_builder = message_builder.withOutput(address, 1_000_001);\n        }\n        Message message = message_builder.finish();\n\n        System.out.println(\n            "First transaction sent: https://explorer.iota.org/devnet/message/" + message.id()\n        );\n\n        msgs = iota.retryUntilIncluded(message.id(), -1, -1);\n\n        // At this point we have 100 Mi on 100 addresses and we will just send it to the final address\n        // We use the outputs directly so we don\'t double spend them\n        \n        List<UtxoInput> initial_outputs = new ArrayList<>();\n        Optional<MessagePayload> payload = message.payload();\n        if (payload.isPresent() && payload.get().payloadType().equals(MessagePayloadType.TRANSACTION)) {\n            TransactionPayload tx = payload.get().asTransaction();\n            RegularEssence essence = tx.essence().asRegular();\n            Output[] outputs = essence.outputs();\n            for (int index = 0; index < outputs.length; index++) {\n                Output output = outputs[index];\n                if (output.asSignatureLockedSingleOutput().amount() == 1_000_001) {\n                    initial_outputs.add(UtxoInput.from(tx.id(), index));\n                } \n            }\n        }\n\n        String[] first_address_old_seed = iota.getAddresses(seed).withRange(0, 1).finish();\n        List<MessageId> sent_messages = new ArrayList<>();\n        for (UtxoInput input : initial_outputs) {\n            MessageId message_id = iota\n                .message()\n                    .withSeed(seed).withInput(input).withInputRange(1, 101).withOutput(new_addresses[0], 1)\n                // send remaining iotas back\n                    .withOutput(first_address_old_seed[0], 1_000_000)\n                .finish()\n                    .id();\n            System.out.printf("Transaction %i sent: https://explorer.iota.org/devnet/message/%s" + input.index(),\n                    message_id\n            );\n            sent_messages.add(message_id);\n        }\n        // only check last message, if this gets confirmed all other messages should also be confirmed\n        msgs = iota.retryUntilIncluded(sent_messages.get(sent_messages.size() - 1), -1, -1);\n        // Send all funds back to first address\n        long total_balance = iota.getBalance(seed).finish();\n\n        System.out.println("Total balance: " + total_balance);\n\n        message = iota\n            .message()\n            .withSeed(seed)\n            .withOutput(first_address_old_seed[0], total_balance)\n            .finish();\n\n        System.out.println("Final tx sent: https://explorer.iota.org/devnet/message/" + message.id());\n\n        msgs = iota.retryUntilIncluded(message.id(), -1, -1);\n    }\n\n    public static void customPayload() {\n        // Create a client instance\n        Client iota = node();\n\n        IndexationPayload indexation_payload = IndexationPayload.fromStrings("Your Index", "Your Data");\n\n        Message message = iota.message().finishIndex(indexation_payload);\n\n        System.out.printf("Message ID: %s", message.id());\n    }\n\n    public static void offlineExample() {\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n        String toAddress = "atoi1qruzprxum2934lr3p77t96pzlecxv8pjzvtjrzdcgh2f5exa22n6gek0qdq";\n        long amount = 1_000_000;\n\n        Offline offlineExample = new Offline(NODE, seed);\n        String[] inputAddresses = offlineExample.generateAddresses();\n        String preparedData = offlineExample.prepareTransaction(inputAddresses, toAddress, amount);\n        System.out.println("Prepared data: " + preparedData);\n        String signedData = offlineExample.signTransaction(preparedData);\n        System.out.println("Signed data: " + signedData);\n\n        Message message = offlineExample.sendMessage(signedData);\n\n        System.out.printf("Message ID: %s", message.id());\n    }\n}\n'}}]);