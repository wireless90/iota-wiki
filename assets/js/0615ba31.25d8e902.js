"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[79947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={},o="IOTA Identity Tutorial",s={unversionedId:"in-app-tutorial",id:"in-app-tutorial",title:"IOTA Identity Tutorial",description:"This tutorial demonstrates the use of the IOTA Identity Framework to create, share and verify some information about a device in the following sections:",source:"@site/content/build/zebra-iota-edge-sdk/production/documentation/tutorials/in-app-tutorial.md",sourceDirName:".",slug:"/in-app-tutorial",permalink:"/zebra-tutorials/in-app-tutorial",draft:!1,editUrl:"https://github.com/zebradevs/zebra-iota-edge-sdk/edit/main/documentation/content/build/zebra-iota-edge-sdk/production/documentation/tutorials/in-app-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IOTA Track & Trace Ledger APIs 201 Tutorial : Business Events",permalink:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-201"}},l={},c=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Initialize an IOTA Identity Client",id:"initialize-an-iota-identity-client",level:2},{value:"Create Identities",id:"create-identities",level:2},{value:"Create Verifiable Credentials",id:"create-verifiable-credentials",level:2},{value:"Create Verifiable Presentations",id:"create-verifiable-presentations",level:2},{value:"Verify Verifiable Presentations",id:"verify-verifiable-presentations",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iota-identity-tutorial"},"IOTA Identity Tutorial"),(0,a.kt)("p",null,"This tutorial demonstrates the use of the IOTA Identity Framework to create, share and verify some information about a device in the following sections:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Initialize an IOTA Identity client"),(0,a.kt)("li",{parentName:"ol"},"Create identities"),(0,a.kt)("li",{parentName:"ol"},"Create verifiable credentials"),(0,a.kt)("li",{parentName:"ol"},"Create verifiable presentations"),(0,a.kt)("li",{parentName:"ol"},"Verify presentations"),(0,a.kt)("li",{parentName:"ol"},"Putting it all together")),(0,a.kt)("p",null,"For each step, a function is defined that you should be able to reuse in your application(s)."),(0,a.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,a.kt)("p",null,"If you are unfamiliar with W3C Decentralized Identifiers (DID) and Verifiable Credentials (VCs), we recommend reading the overviews of chapters 2, 3.1 and 3.2 of the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/identity.rs/introduction"},"IOTA Identity guide"),"."),(0,a.kt)("p",null,"The IOTA Identity framework is implemented in Rust. In order to use it in JavaScript, WASM bindings are available from the NPM package ",(0,a.kt)("inlineCode",{parentName:"p"},"@iota/identity-wasm"),". Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/identity.rs/libraries/wasm/getting_started"},"IOTA Identity WASM - Getting Started")," for set up instructions in both NodeJS and web (browser) contexts. This tutorial assumes a web context, but code comments show where usage is not the same as in NodeJS."),(0,a.kt)("p",null,"To complete the tutorial, you will need the following imports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import {\n    init,\n    Client,\n    Config,\n    Digest,\n    Document,\n    KeyCollection,\n    KeyPair,\n    KeyType,\n    Network,\n    VerifiableCredential,\n    VerifiablePresentation,\n    VerificationMethod\n} from "@iota/identity-wasm/web"; // NOTE: Web context.\n')),(0,a.kt)("h2",{id:"initialize-an-iota-identity-client"},"Initialize an IOTA Identity Client"),(0,a.kt)("p",null,"We will create a client that connects to the IOTA mainnet through one of the IOTA Foundation's nodes. Data transactions (such as identities) are pruned after some time and so we should also configure a Permanode from which identities can be fetched by the client even after a pruning cycle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'async function createClient() {\n    // Configure IOTA Identity client to connect to the IOTA mainnet.\n    const cfg = Config.fromNetwork(Network.try_from_name("main"));\n    cfg.setNode("https://chrysalis-nodes.iota.org");\n    cfg.setPermanode("https://chrysalis-chronicle.iota.org/api/mainnet/");\n    \n    // Return the client.\n    return Client.fromConfig(cfg);\n}\n')),(0,a.kt)("h2",{id:"create-identities"},"Create Identities"),(0,a.kt)("p",null,"Creating an identity involves generating a public-private key pair (",(0,a.kt)("inlineCode",{parentName:"p"},"authKeyPair"),") that gets used to control access to the DID document on the Tangle. Additionally, a separate key collection is created and added as a verification method for this identity so verifiers may authenticate VCs issued. The ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," parameter can be provided using ",(0,a.kt)("inlineCode",{parentName:"p"},"createClient")," above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'async function createIdentity(client) {\n    // Generate a new key pair and DID document for the new identity.\n    const authKeyPair = new KeyPair(KeyType.Ed25519);\n    const doc = new Document(authKeyPair, client.network().toString());\n\n    // Add a Merkle Key Collection method for the identity, so compromised keys can be revoked.\n    const keys = new KeyCollection(KeyType.Ed25519, 8);\n    const method = VerificationMethod.createMerkleKey(Digest.Sha256, doc.id, keys, "key-collection");\n\n    // Add to the DID Document as a general-purpose verification method.\n    doc.insertMethod(method, "VerificationMethod");\n\n    // Sign the DID document with the auth key. Ensure only the private key holder can manipulate this document.\n    doc.sign(authKeyPair);\n\n    // Publish the document to the Tangle.\n    await client.publishDocument(doc);\n\n    // Return the new identity data.\n    return { authKeyPair, doc, keys, method };\n}\n')),(0,a.kt)("h2",{id:"create-verifiable-credentials"},"Create Verifiable Credentials"),(0,a.kt)("p",null,'A Verifiable Credential consists of some "claims" about a "subject" (DID) that have been attested by an "issuer" (DID). In the case of a self-signed credential, the issuer is also the subject of the credential. The function below takes a claims object and identities (created using ',(0,a.kt)("inlineCode",{parentName:"p"},"createIdentity"),") to produce a signed (verifiable) credential."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'async function createVerifiableCredential(claims, issuer, subject) {\n    // Create an unsigned credential.\n    const unsignedVc = VerifiableCredential.extend({\n        id: `http://example.org/zebra-iota-sdk/1234`,\n        type: "DeviceID",\n        issuer: issuer.doc.id.toString(),\n        credentialSubject: {\n            id: subject.doc.id.toString(),\n            ...claims\n        }\n    });\n\n    // Sign the credential with issuer\'s Merkle Key Collection method.\n    const signedVc = issuer.doc.signCredential(unsignedVc, {\n        method: issuer.method.id.toString(),\n        public: issuer.keys.public(0),\n        private: issuer.keys.private(0),\n        proof: issuer.keys.merkleProof(Digest.Sha256, 0)\n    });\n\n    // Return the signed VC.\n    return signedVc;\n}\n')),(0,a.kt)("h2",{id:"create-verifiable-presentations"},"Create Verifiable Presentations"),(0,a.kt)("p",null,"A Verifiable Presentation is a container for VCs and may be signed by the holder to prove authorship. This function will sign a presentation containing a single VC, however It's possible for multiple VCs, VCs from different issuers or VCs about different subjects to be encapsulated in a VP. The ",(0,a.kt)("inlineCode",{parentName:"p"},"vc")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"holder")," parameters are the outputs of ",(0,a.kt)("inlineCode",{parentName:"p"},"createVerifiableCredential")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"createIdentity")," respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function createVerifiablePresentation(vc, holder) {\n    // Create an unsigned presentation from the credential.\n    const unsignedVp = new VerifiablePresentation(holder.doc, vc);\n\n    // Sign the presentation with issuer's Merkle Key Collection method.\n    const signedVp = holder.doc.signPresentation(unsignedVp, {\n        method: holder.method.id.toString(),\n        public: holder.keys.public(0),\n        private: holder.keys.private(0),\n        proof: holder.keys.merkleProof(Digest.Sha256, 0)\n    });\n\n    // Return the signed VP.\n    return signedVp;\n}\n")),(0,a.kt)("p",null,"The returned VP can be serialized to string for sharing in the form of, for example, a DataMatrix."),(0,a.kt)("h2",{id:"verify-verifiable-presentations"},"Verify Verifiable Presentations"),(0,a.kt)("p",null,"The recipient of a VP will want to authenticate the DIDs of the VP holder, VC subject(s) and VC issuer(s). A valid presentation attests that all identities and claims made are authentic and original, however it's still the verifier's responsibility to maintain a list of holders, issuers and/or subjects that they recognize and/or trust. The function below takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"vpString")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," from previous sections to produces the verification result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function verifyVerifiablePresentation(vpString, client) {\n    // Validate the presentation proof and all relevant DID documents.\n    const result = await client.checkPresentation(vpString);\n\n    // Return the result.\n    return result;\n}\n")),(0,a.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,a.kt)("p",null,"So far we have only defined functions, time to put them to use. The following function will create a client and two identities - one for a device and one for the manufacturer of the device. Some claims about the device are issued as a VC by the manufacturer before encapsulating in a VP ready for sharing. A recipient (e.g. a customer) checks the VP and, if invalid, an error is thrown."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'async function run() {\n    // Ensure the WASM library is initialized. The library is cached after first initialization.\n    // NOTE: Web context.\n    await init("/path/to/identity_wasm_bg.wasm");\n\n    const client = await createClient();\n    const device = await createIdentity(client);\n    const manufacturer = await createIdentity(client);\n\n    // Make up some information about the device.\n    const claims = {\n        uuid: "d8c9934a-1d6a-4c92-ad6b-5bd2f255dc42",\n        name: "Zebra TC21",\n        platform: "Android",\n        manufacturer: "Zebra Technologies"\n    };\n\n    // Turn this information into a Verifiable Credential.\n    const vc = await createVerifiableCredential(claims, manufacturer, device);\n\n    // Share the Verifiable Credential through a Verifiable Presentation.\n    const vp = await createVerifiablePresentation(vc, manufacturer);\n\n    // The VP can be serialized to JSON for sharing (e.g. encoded as a DataMatrix).\n    const vpString = JSON.stringify(vp.toJSON());\n\n    // The recipient of the VP can verify that the presentation (and contained credentials) are valid.\n    const {\n        verified: vpIsValid,\n        credentials: vcVerificationResults\n    } = await verifyVerifiablePresentation(vpString, client);\n\n    if (!vpIsValid) {\n        throw new Error("The Verifiable Presentation is invalid.");\n    }\n    \n    // The recipient can now trust that the credentials contained in the VP are about the\n    // above device and have been issued by the above manufacturer.\n    for (const vcResult of vcVerificationResults) {\n        console.log(vcResult.credential.credentialSubject);\n    }\n}\n\n// Run the tutorial\nrun()\n    .then(() => console.log("Complete!"))\n    .catch(err => console.error(err));\n')),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("p",null,"To engross yourself further, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/identity.rs/introduction"},"IOTA Identity Wiki")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs"},"GitHub repository"),"."))}u.isMDXComponent=!0}}]);