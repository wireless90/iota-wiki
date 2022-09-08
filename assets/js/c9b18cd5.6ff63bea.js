"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[42985],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?t.createElement(h,o(o({ref:a},u),{},{components:n})):t.createElement(h,o({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37155:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(87462),r=(n(67294),n(3905)),l=n(54411),o=n(43305);const i={image:"/img/integration-services/logo/integration_services.png",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",keywords:["how to","create channel","read channel","write channel","example","maven","java","nodejs","javascript"]},s="Create a Channel",c={unversionedId:"how_tos/integration-services-sdk/create-channel",id:"how_tos/integration-services-sdk/create-channel",title:"Create a Channel",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",source:"@site/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/create-channel.mdx",sourceDirName:"how_tos/integration-services-sdk",slug:"/how_tos/integration-services-sdk/create-channel",permalink:"/integration-services/how_tos/integration-services-sdk/create-channel",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/create-channel.mdx",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",keywords:["how to","create channel","read channel","write channel","example","maven","java","nodejs","javascript"]},sidebar:"docs",previous:{title:"Trusted Authorities",permalink:"/integration-services/how_tos/integration-services-sdk/trusted-authorities"},next:{title:"Authorize a Channel",permalink:"/integration-services/how_tos/integration-services-sdk/authorize-to-channel"}},u={},d=[{value:"Create Channel",id:"create-channel",level:2},{value:"Write on a Channel",id:"write-on-a-channel",level:2},{value:"Read from a Channel",id:"read-from-a-channel",level:2}],p={toc:d};function m(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-channel"},"Create a Channel"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"example-5")," script authenticates an Integration Service client to manage Identities using the Admin identity\ncreated in ",(0,r.kt)("a",{parentName:"p",href:"/integration-services/how_tos/integration-services-sdk/run-how-tos"},"example-0")," and then performs the following tasks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-channel"},"Creates a channel"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#write-on-a-channel"},"Writes data on the channel"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#read-from-a-channel"},"Reads data from the channel"))),(0,r.kt)("p",null,"You can run the example with the following command:"),(0,r.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:_java -Dexec.mainClass=net.gradbase.how_tos.CreateChannel\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/CreateChannel.java"},"Example-5"))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-5\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/5-CreateChannel.ts"},"Example-5")))),(0,r.kt)("h2",{id:"create-channel"},"Create Channel"),(0,r.kt)("p",null,"You can create a channel using the following script:"),(0,r.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, String> topics = new HashMap<String, String>();\ntopics.put("type", "example-data");\ntopics.put("source", "data-creator");\n\nList<Map<String, String>> allTopics = new ArrayList<Map<String, String>>();\nallTopics.add(topics);\n\n// Create a new channel for example data\nJSONObject newChannelDetails = channelClient.create(null, allTopics, null, null, null);\n\n// The channel address is used to read and write to channels\nString channelAddress = newChannelDetails.getString("channelAddress");\nSystem.out.println(channelAddress);\n'))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// The owner creates a channel where he/she want to publish data of type 'example-data'.\nconst { channelAddress } = await ownerClient.create({\n    name: `Channel-${Math.ceil(Math.random() * 100000)}`,\n    topics: [{ type: 'example-data', source: 'data-creator' }]\n    });\n")))),(0,r.kt)("h2",{id:"write-on-a-channel"},"Write on a Channel"),(0,r.kt)("p",null,"You can write on a channel using the following script:"),(0,r.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Writing 3 data packets to channel\nfor (int i = 0; i < 3; i++) {\n    System.out.println("writing data to channel no " + i);\n    channelClient.write(channelAddress, "log", null, new JSONObject().put("log", "This is log number " + i));\n}\n'))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await channel.write(channelAddress, {\n    type: 'log',\n    created: new Date().toISOString(),\n    payload: {\n        log: `This is log file ...`\n    }\n});\n")))),(0,r.kt)("h2",{id:"read-from-a-channel"},"Read from a Channel"),(0,r.kt)("p",null,"You can read from a channel using the following script:"),(0,r.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<ChannelData> datas = channelClient.read(channelAddress, null, null, null, null, null);\n\nfor (ChannelData data : datas) {\n    System.out.println(data.toString());\n}\n"))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"const channelData = await channel.read(channelAddress);\nconsole.log('Read from channel:');\nchannelData.forEach((data) => {\n    console.log(data.log);\n});\n")))))}m.isMDXComponent=!0},43305:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(67294),r=n(86010);const l="tabItem__kUE";function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},a)}},54411:(e,a,n)=>{n.d(a,{Z:()=>m});var t=n(87462),r=n(67294),l=n(86010),o=n(51048),i=n(33609),s=n(1943),c=n(72957);const u="tabList_fbd4",d="tabItem_v5XY";function p(e){var a,n;const{lazy:o,block:p,defaultValue:m,values:h,groupId:g,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:b.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),k=(0,i.l)(f,((e,a)=>e.value===a.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(a=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?a:b[0].props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:T}=(0,s.U)(),[x,N]=(0,r.useState)(w),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=g){const e=y[g];null!=e&&e!==x&&f.some((a=>a.value===e))&&N(e)}const O=e=>{const a=e.currentTarget,n=C.indexOf(a),t=f[n].value;t!==x&&(j(a),N(t),null!=g&&T(g,String(t)))},E=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{var t;const a=C.indexOf(e.currentTarget)+1;n=null!=(t=C[a])?t:C[0];break}case"ArrowLeft":{var r;const a=C.indexOf(e.currentTarget)-1;n=null!=(r=C[a])?r:C[C.length-1];break}}null==(a=n)||a.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},f.map((e=>{let{value:a,label:n,attributes:o}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:e=>C.push(e),onKeyDown:E,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":x===a})}),null!=n?n:a)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function m(e){const a=(0,o.Z)();return r.createElement(p,(0,t.Z)({key:String(a)},e))}}}]);