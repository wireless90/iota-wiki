"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(a),c=i,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,o(o({ref:t},l),{},{components:a})):n.createElement(h,o({ref:t},l))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91674:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={title:"Authentication",sidebar_label:"Authentication"},o=void 0,s={unversionedId:"specs/didcomm/protocols/authentication",id:"specs/didcomm/protocols/authentication",title:"Authentication",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/specs/didcomm/protocols/authentication.md",sourceDirName:"specs/didcomm/protocols",slug:"/specs/didcomm/protocols/authentication",permalink:"/identity.rs/0.5/specs/didcomm/protocols/authentication",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/specs/didcomm/protocols/authentication.md",tags:[],version:"current",frontMatter:{title:"Authentication",sidebar_label:"Authentication"},sidebar:"docs",previous:{title:"Connection",permalink:"/identity.rs/0.5/specs/didcomm/protocols/connection"},next:{title:"Presentation",permalink:"/identity.rs/0.5/specs/didcomm/protocols/presentation"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Relationships",id:"relationships",level:3},{value:"Example Use-Cases",id:"example-use-cases",level:3},{value:"Roles",id:"roles",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Messages",id:"messages",level:2},{value:"1. authentication-request",id:"authentication-request",level:3},{value:"Structure",id:"structure",level:4},{value:"Examples",id:"examples",level:4},{value:"2. authentication-response",id:"authentication-response",level:3},{value:"Structure",id:"structure-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"3. authentication-result",id:"authentication-result",level:3},{value:"Structure",id:"structure-2",level:4},{value:"Examples",id:"examples-2",level:4},{value:"Problem Reports",id:"problem-reports",level:3},{value:"Considerations",id:"considerations",level:2},{value:"Unresolved Questions",id:"unresolved-questions",level:2},{value:"Related Work",id:"related-work",level:2}],l={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,i.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This protocol allows two parties to mutually authenticate by disclosing and verifying the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DID")," of each other. On successful completion of this protocol, it is expected that ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," may be used between the parties for continuous authentication."),(0,i.kt)("h3",{id:"relationships"},"Relationships"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./connection"},"Connection"),": it is RECOMMENDED to establish ",(0,i.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption")," on ",(0,i.kt)("a",{parentName:"li",href:"./connection"},"connection")," to prevent revealing the DID of either party to eavesdroppers.")),(0,i.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A connected sensor wants to make sure only valid well-known parties connect to it, before allowing access."),(0,i.kt)("li",{parentName:"ul"},"A customer wants to make sure they are actually connecting to their bank, before presenting information."),(0,i.kt)("li",{parentName:"ul"},"An organisation wants to verify the DID of the employer before issuing access credentials. ")),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requester: initiates the authentication."),(0,i.kt)("li",{parentName:"ul"},"Responder: responds to the authentication request.")),(0,i.kt)("h3",{id:"interaction"},"Interaction"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"AuthenticationDiagram",src:a(2046).Z,width:"842",height:"982"})),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("sub",null,"For guidance on diagrams see the ",(0,i.kt)("a",{href:"../overview#diagrams"},"corresponding section in the overview"),".")),(0,i.kt)("h2",{id:"messages"},"Messages"),(0,i.kt)("h3",{id:"authentication-request"},"1. authentication-request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"iota/authentication/0.1/authentication-request")),(0,i.kt)("li",{parentName:"ul"},"Role: ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"requester"))),(0,i.kt)("p",null,"Sent to initiate the authentication process. This MUST be a ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message")," to provide some level of trust to the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"responder"),". However, even when signed it is possible to replay an ",(0,i.kt)("a",{parentName:"p",href:"#authentication-request"},"authentication-request"),", so this message alone is insufficient to prove the DID of the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"requester"),". In addition to a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"requesterChallenge"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"created_time")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"expires_time")," ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#message-headers"},"DIDComm message headers")," SHOULD be used to mitigate such replay attacks. Note that even a successful replay would only reveal the DID of the responder, authentication of a malicious requester will still fail without access to the original requester's private keys due to the use of challenges."),(0,i.kt)("h4",{id:"structure"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "did": DID,                   // REQUIRED\n  "requesterChallenge": string, // REQUIRED\n  "upgradeEncryption": string,  // REQUIRED\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},(0,i.kt)("inlineCode",{parentName:"a"},"did"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DID")," of the ",(0,i.kt)("a",{parentName:"td",href:"#roles"},"requester"),".",(0,i.kt)("sup",{parentName:"td",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"requesterChallenge")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A random string unique per ",(0,i.kt)("a",{parentName:"td",href:"#authentication-request"},"authentication-request")," by a ",(0,i.kt)("a",{parentName:"td",href:"#roles"},"requester")," to help mitigate replay attacks."),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"upgradeEncryption")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A string indicating whether ",(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," should be used in the following messages. One of ",(0,i.kt)("inlineCode",{parentName:"td"},'["required", "optional", "unsupported"]'),".",(0,i.kt)("sup",{parentName:"td",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The signing key used for the ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm envelope")," wrapping this message MUST be an ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#authentication"},"authentication method")," in the DID document corresponding to ",(0,i.kt)("inlineCode",{parentName:"p"},"did"),", as per the ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#did-document-keys"},"DIDComm specification"),"."),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," The ",(0,i.kt)("inlineCode",{parentName:"p"},"upgradeEncryption")," field allows negotiation of whether or not to use ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," for the ",(0,i.kt)("a",{parentName:"p",href:"#authentication"},"authentication")," protocol and for all messages that follow it. It is RECOMMENDED to specify ",(0,i.kt)("inlineCode",{parentName:"p"},'"required"')," as it offers various guarantees of continuous authentication and payload integrity for every message. The available options are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"required"'),": the ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"responder")," MUST initiate ",(0,i.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),", from the following ",(0,i.kt)("a",{parentName:"li",href:"#authentication-response"},"authentication-response")," message onwards, or send a problem-report."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"optional"'),": the ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"responder")," chooses whether or not to use ",(0,i.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"unsupported"'),": the ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"responder")," MUST NOT use ",(0,i.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),". A ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"responder")," MAY reject ",(0,i.kt)("a",{parentName:"li",href:"#authentication-request"},"authentication-requests")," that do not support encryption.\nAny other value for ",(0,i.kt)("inlineCode",{parentName:"li"},"upgradeEncryption")," is invalid and should result in an invalid-request problem-report.")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Request payload requiring encryption:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "did": "did:iota:9rK6DPF46MCEzgfLD8AHFsaTuMqvmRo6kbXfjqQJPJmC",                   \n  "requesterChallenge": "81285532-b72a-4a99-a9bd-b470475bc24f",                     \n  "upgradeEncryption": "required",\n}\n')),(0,i.kt)("h3",{id:"authentication-response"},"2. authentication-response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"iota/authentication/0.1/authentication-response")),(0,i.kt)("li",{parentName:"ul"},"Role: ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"responder"))),(0,i.kt)("p",null,"Sent in response to an ",(0,i.kt)("a",{parentName:"p",href:"#authentication-request"},"authentication-request"),", proving the DID of the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"responder"),". Optionally establishes ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," based on the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"upgradeEncryption")," in the preceding ",(0,i.kt)("a",{parentName:"p",href:"#authentication-request"},"authentication-request"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"upgradeEncryption")," was ",(0,i.kt)("inlineCode",{parentName:"p"},'"required"')," and this message is not encrypted, or ",(0,i.kt)("inlineCode",{parentName:"p"},'"unsupported"')," and this message is encrypted, the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"requester")," MUST issue a problem-report and abort the authentication."),(0,i.kt)("p",null,"This message MUST be a ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message"),", even if ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," is used. This is to ensure an ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#authentication"},"authentication key")," is used to sign the challenge, in accordance with the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#authentication"},"DID specification"),", and because there may be increased security controls or guarantees compared to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#key-agreement"},"keyAgreement")," keys used for ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),"."),(0,i.kt)("h4",{id:"structure-1"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "did": DID,                   // REQUIRED\n  "requesterChallenge": string, // REQUIRED\n  "responderChallenge": string, // REQUIRED\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},(0,i.kt)("inlineCode",{parentName:"a"},"did"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DID")," of the ",(0,i.kt)("a",{parentName:"td",href:"#roles"},"responder"),".",(0,i.kt)("sup",{parentName:"td",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"requesterChallenge")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Must match the ",(0,i.kt)("inlineCode",{parentName:"td"},"requesterChallenge")," in the preceding ",(0,i.kt)("a",{parentName:"td",href:"#authentication-request"},"authentication-request"),"."),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"responderChallenge")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A random string unique per ",(0,i.kt)("a",{parentName:"td",href:"#authentication-response"},"authentication-response")," by a ",(0,i.kt)("a",{parentName:"td",href:"#roles"},"responder")," to help mitigate replay attacks."),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The signing key used for the ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm envelope")," wrapping this message MUST be an ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#authentication"},"authentication method")," in the DID document corresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"did"),", as per the ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#did-document-keys"},"DIDComm specification"),"."),(0,i.kt)("h4",{id:"examples-1"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Responder presenting their ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DID")," and offering a challenge to the requester:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "did": "did:iota:8cU6DPF56MDEugfLF8AHFaaTuMQvmRo6kbxfjqQJpJmC",\n  "requesterChallenge": "81285532-b72a-4a99-a9bd-b470475bc24f",\n  "responderChallenge": "b1f0dc02-85a3-4438-8786-b625f11f1be4",\n}\n')),(0,i.kt)("h3",{id:"authentication-result"},"3. authentication-result"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"iota/authentication/0.1/authentication-result")),(0,i.kt)("li",{parentName:"ul"},"Role: ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"requester"))),(0,i.kt)("p",null,"This message finalises the mutual authentication, proving control over the DID of the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"requester")," to the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"responder"),". Similar to ",(0,i.kt)("a",{parentName:"p",href:"#authentication-response"},"authentication-response"),", this message MUST be a ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message"),"."),(0,i.kt)("p",null,"This MUST or MUST NOT use ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," depending on the outcome of the ",(0,i.kt)("inlineCode",{parentName:"p"},"upgradeEncryption")," negotiation in the preceding ",(0,i.kt)("a",{parentName:"p",href:"#authentication-response"},"authentication-response")," message, otherwise resulting in a problem-report and failure of the authentication protocol. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"upgradeEncryption")," was ",(0,i.kt)("inlineCode",{parentName:"p"},"optional")," and the ",(0,i.kt)("a",{parentName:"p",href:"#authentication-response"},"authentication-response")," used ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),", then the ",(0,i.kt)("a",{parentName:"p",href:"#authentication-result"},"authentication-result")," MUST be encrypted to be valid. "),(0,i.kt)("h4",{id:"structure-2"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "responderChallenge": string // REQUIRED\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"responderChallenge")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Must match the ",(0,i.kt)("inlineCode",{parentName:"td"},"challenge")," in the preceding ",(0,i.kt)("a",{parentName:"td",href:"#authentication-response"},"authentication-response"),".",(0,i.kt)("sup",{parentName:"td",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The signing key used for the ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm envelope")," wrapping this message MUST be an ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#authentication"},"authentication method")," in the DID document corresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"did")," of the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"requester")," in the ",(0,i.kt)("a",{parentName:"p",href:"#authentication-request"},"authentication-request"),", as per the ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#did-document-keys"},"DIDComm specification"),"."),(0,i.kt)("h4",{id:"examples-2"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Requester responding with the responder's challenge from the previous message:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "responderChallenge": "0768e82d-f498-4f38-8686-918325f9560d"\n}\n')),(0,i.kt)("h3",{id:"problem-reports"},"Problem Reports"),(0,i.kt)("p",null,"The following problem-report codes may be raised in the course of this protocol and are expected to be recognised and handled in addition to any general problem-reports. Implementers may also introduce their own application-specific problem-reports."),(0,i.kt)("p",null,"For guidance on problem-reports and a list of general codes see ",(0,i.kt)("a",{parentName:"p",href:"../resources/problem-reports"},"problem reports"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.authentication.reject-authentication")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#authentication-request"},"authentication-request"),", ",(0,i.kt)("a",{parentName:"td",href:"#authentication-response"},"authentication-response"),", ",(0,i.kt)("a",{parentName:"td",href:"#authentication-result"},"authentication-result")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The party rejects an authentication request/response/result for any reason.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.authentication.reject-authentication.missing-keys")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#authentication-request"},"authentication-request"),", ",(0,i.kt)("a",{parentName:"td",href:"#authentication-response"},"authentication-response"),", ",(0,i.kt)("a",{parentName:"td",href:"#authentication-result"},"authentication-result")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The party rejects an authentication request/response due to the other party lacking a supported ",(0,i.kt)("inlineCode",{parentName:"td"},"keyAgreement")," section in the DID document.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.authentication.reject-authentication.untrusted-identity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#authentication-request"},"authentication-request"),", ",(0,i.kt)("a",{parentName:"td",href:"#authentication-response"},"authentication-response")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The party rejects an authentication request/response due to the claimed DID of the other party.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.authentication.reject-authentication.encyption-required")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#authentication-request"},"authentication-request"),", ",(0,i.kt)("a",{parentName:"td",href:"#authentication-response"},"authentication-response"),", ",(0,i.kt)("a",{parentName:"td",href:"#authentication-result"},"authentication-result")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The party rejects an authentication request/response/result due to the lack of ",(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.authentication.reject-authentication.encyption-unsupported")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#authentication-request"},"authentication-request"),", ",(0,i.kt)("a",{parentName:"td",href:"#authentication-response"},"authentication-response"),", ",(0,i.kt)("a",{parentName:"td",href:"#authentication-result"},"authentication-result")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The party rejects an authentication request/response/result because it does not support ",(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),".")))),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("p",null,"This section is non-normative."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trust"),": this ",(0,i.kt)("a",{parentName:"li",href:"#authentication"},"authentication")," protocol only verifies that both parties have access to the necessary private keys (which could become compromised) associated with their DID documents. Verifying whether a DID document is ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#binding-to-physical-identity"},"bound to a physical identity")," may require additional interactions. Verifying whether a DID can be trusted can be achieved by, for instance:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"requesting a verifiable presentation of credentials issued by a trusted third party, such as a government,"),(0,i.kt)("li",{parentName:"ul"},"using the ",(0,i.kt)("a",{parentName:"li",href:"https://identity.foundation/.well-known/resources/did-configuration/"},"Well Known DID Configuration")," or embedding the DID in a DNS record to tie an identity to a website or domain,"),(0,i.kt)("li",{parentName:"ul"},"using an allowlist of trusted DIDs,"),(0,i.kt)("li",{parentName:"ul"},"exchanging DIDs out-of-band in a secure manner (note that some ",(0,i.kt)("a",{parentName:"li",href:"./connection"},"connection")," invitations could be altered by malicious parties depending on the medium)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authorisation"),": the permissions and capabilities of either party may still need to be established after ",(0,i.kt)("a",{parentName:"li",href:"#authentication"},"authentication"),", either by ",(0,i.kt)("a",{parentName:"li",href:"./presentation"},"verifiable presentation")," as mentioned above or other methods such as JWT tokens"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy"),": the ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"responder")," may be subject to probing whereby their DID may be revealed even with the use of ",(0,i.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),", as the ",(0,i.kt)("inlineCode",{parentName:"li"},"skid")," message header is linked to their DID. This is possible if the ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"responder")," chooses to accept the ",(0,i.kt)("a",{parentName:"li",href:"#authentication-request"},"authentication-request")," of an unknown ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"requester"),", or the ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"requester")," successfully replays an ",(0,i.kt)("a",{parentName:"li",href:"#authentication-request"},"authentication-request")," from a DID the ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"requester")," trusts.")),(0,i.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enforce signed DIDComm messages on top of sender-authenticated encryption or keep them optional? Usually unnecessary and DIDComm recommends against this since it's redundant and due to non-repudiation may decrease security and privacy by allowing participants to prove to third parties that authentication occurred."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0049-repudiation/README.md#summary"},"https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0049-repudiation/README.md#summary")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to protect the DID of the responder (",(0,i.kt)("inlineCode",{parentName:"p"},"skid")," field in sender-authenticated message) to prevent probing identities even with anonymous encryption?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/decentralized-identity/didcomm-messaging/issues/197"},"https://github.com/decentralized-identity/didcomm-messaging/issues/197")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/decentralized-identity/didcomm-messaging/issues/219"},"https://github.com/decentralized-identity/didcomm-messaging/issues/219")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add examples of full signed and sender-authenticated messages with headers for better illustration?"))),(0,i.kt)("h2",{id:"related-work"},"Related Work"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aries Hyperledger:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DID Exchange protocol: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/tree/main/features/0023-did-exchange"},"https://github.com/hyperledger/aries-rfcs/tree/main/features/0023-did-exchange")),(0,i.kt)("li",{parentName:"ul"},"DIDAuthZ: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/tree/main/features/0309-didauthz"},"https://github.com/hyperledger/aries-rfcs/tree/main/features/0309-didauthz")))),(0,i.kt)("li",{parentName:"ul"},"Jolocom: ",(0,i.kt)("a",{parentName:"li",href:"https://jolocom.github.io/jolocom-sdk/1.0.0/guides/interaction_flows/#authentication"},"https://jolocom.github.io/jolocom-sdk/1.0.0/guides/interaction_flows/#authentication"))))}u.isMDXComponent=!0},2046:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/authentication.drawio-80a7526d3d71569c1e7b009613bfd460.svg"}}]);