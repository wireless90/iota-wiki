"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,y=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=n(54411),l=n(43305);const s={image:"/img/logo/integration_services.png",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",keywords:["how to","create identity","create credentials","verify credentials","authenticate","examples","maven","java","nodejs","javascript"]},o="Create Identity and Credentials",d={unversionedId:"how_tos/integration-services-sdk/create-identity-and-credentials",id:"how_tos/integration-services-sdk/create-identity-and-credentials",title:"Create Identity and Credentials",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",source:"@site/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/create-identity-and-credentials.mdx",sourceDirName:"how_tos/integration-services-sdk",slug:"/how_tos/integration-services-sdk/create-identity-and-credentials",permalink:"/integration-services/how_tos/integration-services-sdk/create-identity-and-credentials",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/create-identity-and-credentials.mdx",tags:[],version:"current",frontMatter:{image:"/img/logo/integration_services.png",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",keywords:["how to","create identity","create credentials","verify credentials","authenticate","examples","maven","java","nodejs","javascript"]},sidebar:"docs",previous:{title:"Run How-Tos",permalink:"/integration-services/how_tos/integration-services-sdk/run-how-tos"},next:{title:"Update Users",permalink:"/integration-services/how_tos/integration-services-sdk/update-users"}},c={},u=[{value:"Authentication",id:"authentication",level:2},{value:"Create an Identity",id:"create-an-identity",level:2},{value:"Verify a Credential",id:"verify-a-credential",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-identity-and-credentials"},"Create Identity and Credentials"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"example-1")," script authenticates an Integration Service client to manage Identities using the Admin identity\ncreated in ",(0,i.kt)("a",{parentName:"p",href:"/integration-services/how_tos/integration-services-sdk/run-how-tos"},"example-0")," and then performs the following tasks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creates a new Identity (",(0,i.kt)("inlineCode",{parentName:"li"},"userIdentity"),")."),(0,i.kt)("li",{parentName:"ol"},"Creates a credential for that identity (",(0,i.kt)("inlineCode",{parentName:"li"},"userCredential"),")."),(0,i.kt)("li",{parentName:"ol"},"Verifies the generated credential (",(0,i.kt)("inlineCode",{parentName:"li"},"await identity.checkCredential(userCredential)"),").")),(0,i.kt)("p",null,"You can run the example with the following command:"),(0,i.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:_java -Dexec.mainClass=net.gradbase.how_tos.CreateIdentityAndCredential\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/CreateIdentityAndCredential.java"},"Example-1"))),(0,i.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-1\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/1-CreateIdentityAndCredential.ts"},"Example-1")))),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"You can use the following script to authenticate the client using the admin identity and get the\nBasicIdentityCredential that the admin owns: this is a verifiable credential\nwhich is required for an issuer to sign verifiable credentials for other Identities."),(0,i.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Recover the admin identity\nfinal String didId = AddAsRootIdentity.authenticateRootIdentity(client);\nIdentityInternal admin = client.find(didId);\n\nif (admin == null) {\nthrow new Exception("admin identity is null");\n}\n\n// Get admin identity\'s VC\nArrayList<VerifiableCredential> vcs = (ArrayList<VerifiableCredential>) admin.getVerifiableCredentials();\n\nif (vcs.size() > 0) {\nVerifiableCredential firstCredential = vcs.get(0);\nSystem.out.println(firstCredential);\n} else {\nthrow new Exception("admin identity has no credentials");\n}\n\n'))),(0,i.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { IdentityClient, IdentityKeys }  from '@iota/is-client';\n\n...\n\n// Initialize IdentityClient with previously setup parameters\nconst identity = new IdentityClient({\n  isGatewayUrl: process.env.IS_GATEWAY_URL,\n  ssiBridgeUrl: process.env.SSI_BRIDGE_URL,\n  auditTrailUrl: process.env.AUDIT_TRAIL_URL,\n  useGatewayUrl: process.env.USE_GATEWAY_URL === 'true' || false,\n  apiKey: process.env.API_KEY,\n  apiVersionAuditTrail: ApiVersion.v0_1,\n  apiVersionSsiBridge: ApiVersion.v0_2\n});\n\n// Recover the admin identity\nconst adminIdentity = JSON.parse(readFileSync(\"./adminIdentity.json\").toString()) as IdentityKeys;\n\n// Authenticate as the admin identity\nawait identity.authenticate(adminIdentity.id, adminIdentity.keys.sign.private);\n\n// Get admin identity data\nconst adminIdentityPublic = await identity.find(adminIdentity.id);\n\n// Get admin identy's VC\nconst identityCredential = adminIdentityPublic?.verifiableCredentials?.[0];\n\nconsole.log(\"Identity Credential of Admin\", identityCredential);\n")))),(0,i.kt)("h2",{id:"create-an-identity"},"Create an Identity"),(0,i.kt)("p",null,"The method ",(0,i.kt)("inlineCode",{parentName:"p"},"createCredential")," requires a valid verifiable credential of type\nBasicIdentity, the destination DID the type and the claim, which can be created using the following script."),(0,i.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Create identity for user\nJSONObject jsonClaim = new JSONObject().put("type", "Person").put("name", "randomName");\n\nClaim claim = new Claim(jsonClaim);\n\nfinal String randomUsername = Utils.getRandomUsernameOfLength(5);\nSystem.out.println("username: " + randomUsername);\nJSONObject newUserIdentity = client.create(randomUsername, claim);\nSystem.out.println("created new user " + newUserIdentity);\n\nVerifiableCredential assignedCredential = client.createCredential(vcs.get(0),\n    newUserIdentity.getJSONObject("doc").getString("id"), CredentialType.BASIC_IDENTITY,\n    new Claim(new JSONObject().put("type", "Person").put("position", "Professor")));\n\nSystem.out.println("Created credential for new user " + assignedCredential.toString());\n'))),(0,i.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Create identity for user\nconst userIdentity = await identity.create("User-" + Math.ceil(Math.random() * 100000);\n\nconsole.log("~~~~~~~~~~~~~~~~");\nconsole.log("Created user identity: ", userIdentity);\nconsole.log("~~~~~~~~~~~~~~~~");\n// Assign a verifiable credential to the user as rootIdentity.\n// With the BasicIdentityCredential the user is not allowed to issue further credentials\nconst userCredential = await identity.createCredential(\n  identityCredential,\n  userIdentity?.id,\n  CredentialTypes.BasicIdentityCredential,\n  UserType.Person,\n  {\n    profession: "Professor",\n  }\n);\n')))),(0,i.kt)("h2",{id:"verify-a-credential"},"Verify a Credential"),(0,i.kt)("p",null,"You can verify a credential using the following script:"),(0,i.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'boolean verified = client.checkCredential(assignedCredential);\nSystem.out.println("Verification result: " + verified);\n'))),(0,i.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const verified = await identity.checkCredential(userCredential);\n\nconsole.log("Verification result: ", verified);\n')))))}m.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(86010);const r="tabItem__kUE";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),i=n(67294),r=n(86010),l=n(51048),s=n(33609),o=n(1943),d=n(72957);const c="tabList_fbd4",u="tabItem_v5XY";function p(e){var t,n;const{lazy:l,block:p,defaultValue:m,values:y,groupId:g,className:v}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=y?y:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:I}=(0,o.U)(),[C,T]=(0,i.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=g){const e=w[g];null!=e&&e!==C&&f.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=N.indexOf(t),a=f[n].value;a!==C&&(x(t),T(a),null!=g&&I(g,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=N.indexOf(e.currentTarget)+1;n=null!=(a=N[t])?a:N[0];break}case"ArrowLeft":{var i;const t=N.indexOf(e.currentTarget)-1;n=null!=(i=N[t])?i:N[N.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>N.push(e),onKeyDown:O,onFocus:j,onClick:j},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,l.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);