"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[37437],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(i),h=n,v=m["".concat(l,".").concat(h)]||m[h]||c[h]||r;return i?a.createElement(v,o(o({ref:t},d),{},{components:i})):a.createElement(v,o({ref:t},d))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},94614:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=i(87462),n=(i(67294),i(3905));const r={title:"Revocation Bitmap",sidebar_label:"Revocation Bitmap",description:"The specification for the embedded revocation bitmap.",image:"/img/Identity_icon.png",keywords:["DID","specs","specifications","revocation","bitmap"]},o="Revocation Bitmap 2022",s={unversionedId:"specs/revocation_bitmap_2022",id:"specs/revocation_bitmap_2022",title:"Revocation Bitmap",description:"The specification for the embedded revocation bitmap.",source:"@site/content/build/identity.rs/v0.6.0/documentation/docs/specs/revocation_bitmap_2022.md",sourceDirName:"specs",slug:"/specs/revocation_bitmap_2022",permalink:"/identity.rs/specs/revocation_bitmap_2022",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/content/build/identity.rs/v0.6.0/documentation/docs/specs/revocation_bitmap_2022.md",tags:[],version:"current",frontMatter:{title:"Revocation Bitmap",sidebar_label:"Revocation Bitmap",description:"The specification for the embedded revocation bitmap.",image:"/img/Identity_icon.png",keywords:["DID","specs","specifications","revocation","bitmap"]},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/specs/overview"},next:{title:"Overview",permalink:"/identity.rs/specs/did/overview"}},l={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Revocation Bitmap Concept",id:"revocation-bitmap-concept",level:2},{value:"Data Model",id:"data-model",level:2},{value:"Revocation Bitmap Status",id:"revocation-bitmap-status",level:3},{value:"Example",id:"example",level:4},{value:"Revocation Bitmap Service",id:"revocation-bitmap-service",level:3},{value:"Example",id:"example-1",level:4},{value:"Algorithms",id:"algorithms",level:2},{value:"Service Endpoint Generation Algorithm",id:"service-endpoint-generation-algorithm",level:3},{value:"Service Endpoint Expansion Algorithm",id:"service-endpoint-expansion-algorithm",level:3},{value:"Validation Algorithm",id:"validation-algorithm",level:3},{value:"Test Vectors",id:"test-vectors",level:2},{value:"Test Vector 1",id:"test-vector-1",level:3},{value:"Test Vector 2",id:"test-vector-2",level:3},{value:"Test Vector 3",id:"test-vector-3",level:3},{value:"Rationale",id:"rationale",level:2},{value:"Compression and maximum size",id:"compression-and-maximum-size",level:3},{value:"Compressed Bitstring vs. Roaring Bitmap",id:"compressed-bitstring-vs-roaring-bitmap",level:3},{value:"Comparison to <code>RevocationList2020</code> and <code>StatusList2021</code>",id:"comparison-to-revocationlist2020-and-statuslist2021",level:3},{value:"Privacy Considerations",id:"privacy-considerations",level:3}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"revocation-bitmap-2022"},"Revocation Bitmap 2022"),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"This specification describes an on-Tangle mechanism for publishing the revocation status of ",(0,n.kt)("a",{parentName:"p",href:"../concepts/verifiable_credentials/overview"},"Verifiable Credentials")," embedded in an issuer's DID document."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Revocation gives an issuer the capability to invalidate a credential they issued before its natural expiration date. To achieve this, issuers can embed an identifier in the ",(0,n.kt)("inlineCode",{parentName:"p"},"credentialStatus")," field of a credential. Verifiers can then lookup that identifier in a separate list, to check whether the credential is still valid. This document specifies a mechanism of embedding such a list, in form of a bitmap, in the DID document of the issuer, where each bitmap index corresponds to a credential they have issued. This mechanism is space-efficient and enables a verifier to check a credential's status in a privacy-preserving manner and without requiring additional lookups or external resources."),(0,n.kt)("h2",{id:"revocation-bitmap-concept"},"Revocation Bitmap Concept"),(0,n.kt)("p",null,"The revocation status of a verifiable credential is expressed as a binary value. The issuer keeps a bitmap of indices corresponding to verifiable credentials they have issued. If the binary value of the index in the bitmap is 1 (one), the verifiable credential is revoked, if it is 0 (zero) it is not revoked."),(0,n.kt)("h2",{id:"data-model"},"Data Model"),(0,n.kt)("h3",{id:"revocation-bitmap-status"},"Revocation Bitmap Status"),(0,n.kt)("p",null,"For an issuer to enable verifiers to check the status of a verifiable credential, the ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#status"},(0,n.kt)("inlineCode",{parentName:"a"},"credentialStatus"))," property MUST be specified with the following properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"id")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The constraints on the ",(0,n.kt)("inlineCode",{parentName:"td"},"id")," property are listed in the ",(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/"},"Verifiable Credentials Data Model specification"),". The ",(0,n.kt)("inlineCode",{parentName:"td"},"id")," MUST be a ",(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DID URL")," that resolves to a ",(0,n.kt)("a",{parentName:"td",href:"#revocation-bitmap-service"},"Revocation Bitmap Service")," in the DID Document of the issuer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"type")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ",(0,n.kt)("inlineCode",{parentName:"td"},"type")," property MUST be ",(0,n.kt)("inlineCode",{parentName:"td"},'"RevocationBitmap2022"'),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"revocationBitmapIndex")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ",(0,n.kt)("inlineCode",{parentName:"td"},"revocationBitmapIndex")," property MUST be an unsigned, 32-bit integer expressed as a string. This is the index of the credential in the issuer's revocation bitmap. Each index SHOULD be unique among all credentials linking to the same ",(0,n.kt)("a",{parentName:"td",href:"#revocation-bitmap-service"},"Revocation Bitmap Service"),".")))),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)("p",null,"An example of a verifiable credential with a ",(0,n.kt)("inlineCode",{parentName:"p"},"credentialStatus")," of type ",(0,n.kt)("inlineCode",{parentName:"p"},"RevocationBitmap2022"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/2018/credentials/v1",\n  "id": "https://example.edu/credentials/3732",\n  "type": ["VerifiableCredential", "UniversityDegreeCredential"],\n  "credentialSubject": {\n    "id": "did:iota:B8DucnzULJ9E8cmaReYoePU2b7UKE9WKxyEVov8tQA7H",\n    "GPA": "4.0",\n    "degree": "Bachelor of Science and Arts",\n    "name": "Alice"\n  },\n  "issuer": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw",\n  "issuanceDate": "2022-06-13T08:04:36Z",\n  "credentialStatus": {\n    "id": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw#revocation",\n    "type": "RevocationBitmap2022",\n    "revocationBitmapIndex": "5"\n  },\n  "proof": {\n    "type": "JcsEd25519Signature2020",\n    "verificationMethod": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw#key-1",\n    "signatureValue": "2eHdbDumMrer4pNVkaiYMqsVqVp2adq7bRcgTJZiw17Zeghk2ZT49YHwLwCCg35YKganBhxP6YSbzYoBK1AuCUv"\n  }\n}\n')),(0,n.kt)("h3",{id:"revocation-bitmap-service"},"Revocation Bitmap Service"),(0,n.kt)("p",null,"To allow verifiers to check the status of a ",(0,n.kt)("a",{parentName:"p",href:"#revocation-bitmap-status"},"Revocation Bitmap Status"),", the DID document of the credential issuer MUST contain a ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#services"},"service")," with the following properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"id")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The constraints on the ",(0,n.kt)("inlineCode",{parentName:"td"},"id")," property are listed in the ",(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#services"},"DID Core service specification"),". The ",(0,n.kt)("inlineCode",{parentName:"td"},"id")," property MUST be a DID URL uniquely identifying the revocation bitmap.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"type")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ",(0,n.kt)("inlineCode",{parentName:"td"},"type")," property MUST be ",(0,n.kt)("inlineCode",{parentName:"td"},'"RevocationBitmap2022"'),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"serviceEndpoint")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ",(0,n.kt)("inlineCode",{parentName:"td"},"serviceEndpoint")," MUST be generated according to the ",(0,n.kt)("a",{parentName:"td",href:"#service-endpoint-generation-algorithm"},"service endpoint generation algorithm"),".")))),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)("p",null,"An example of an issuer's DID document where credential ",(0,n.kt)("inlineCode",{parentName:"p"},'"5"')," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"#revocation")," service is revoked:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw",\n  "verificationMethod": [\n    {\n      "id": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw#key-1",\n      "controller": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw",\n      "type": "Ed25519VerificationKey2018",\n      "publicKeyMultibase": "z3hgM9fNkhwgT5mECbj1HdKoFNZgpffwQYEV8WBVHphXq"\n    }\n  ],\n  "capabilityInvocation": [\n    {\n      "id": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw#sign-0",\n      "controller": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw",\n      "type": "Ed25519VerificationKey2018",\n      "publicKeyMultibase": "z83F6zbD3KqaxvQhqo25LvSXzoDdpZmp3EpPVonSVACwZ"\n    }\n  ],\n  "service": [\n    {\n      "id": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw#revocation",\n      "type": "RevocationBitmap2022",\n      "serviceEndpoint": "data:application/octet-stream;base64,ZUp5ek1tQmdZR1NBQUFFZ1ptVUFBQWZPQUlF"\n    }\n  ]\n}\n')),(0,n.kt)("h2",{id:"algorithms"},"Algorithms"),(0,n.kt)("p",null,"The following algorithms define how to generate, expand and validate revocation bitmaps."),(0,n.kt)("h3",{id:"service-endpoint-generation-algorithm"},"Service Endpoint Generation Algorithm"),(0,n.kt)("p",null,"The following process MUST be followed when producing a ",(0,n.kt)("inlineCode",{parentName:"p"},"RevocationBitmap2022")," to embed in a service endpoint:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Let ",(0,n.kt)("strong",{parentName:"li"},"bitmap")," be a ",(0,n.kt)("a",{parentName:"li",href:"https://roaringbitmap.org/"},(0,n.kt)("em",{parentName:"a"},"roaring bitmap"))," where each bit is initialized to 0."),(0,n.kt)("li",{parentName:"ol"},"For each revoked credential with an ",(0,n.kt)("strong",{parentName:"li"},"index")," not exceeding an unsigned, 32-bit integer, set the corresponding bit in ",(0,n.kt)("strong",{parentName:"li"},"bitmap")," at ",(0,n.kt)("strong",{parentName:"li"},"index")," to 1."),(0,n.kt)("li",{parentName:"ol"},"Generate the ",(0,n.kt)("strong",{parentName:"li"},"bitmap serialization")," according to the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/RoaringBitmap/RoaringFormatSpec/"},"roaring bitmap serialization format")," using the ",(0,n.kt)("strong",{parentName:"li"},"bitmap")," as input."),(0,n.kt)("li",{parentName:"ol"},"Generate a ",(0,n.kt)("strong",{parentName:"li"},"compressed bitmap")," by using the ZLIB compression algorithm [",(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc1950"},"RFC 1950"),"] on the ",(0,n.kt)("strong",{parentName:"li"},"bitmap serialization")," and base64-encoding [",(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4648"},"RFC4648"),"] the result."),(0,n.kt)("li",{parentName:"ol"},"Create the ",(0,n.kt)("strong",{parentName:"li"},"service endpoint")," by embedding the ",(0,n.kt)("strong",{parentName:"li"},"compressed bitmap")," in a data URL [",(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc2397"},"RFC2397"),"]. On the data url, the ",(0,n.kt)("inlineCode",{parentName:"li"},"<mediatype>")," MUST be ",(0,n.kt)("inlineCode",{parentName:"li"},"application/octet-stream")," and the ",(0,n.kt)("inlineCode",{parentName:"li"},"base64")," attribute MUST be set."),(0,n.kt)("li",{parentName:"ol"},"Return the ",(0,n.kt)("strong",{parentName:"li"},"service endpoint"),".")),(0,n.kt)("h3",{id:"service-endpoint-expansion-algorithm"},"Service Endpoint Expansion Algorithm"),(0,n.kt)("p",null,"The following process MUST be followed when expanding the endpoint from a service of type ",(0,n.kt)("inlineCode",{parentName:"p"},"RevocationBitmap2022"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Let ",(0,n.kt)("strong",{parentName:"li"},"service endpoint")," be a data url generated using the ",(0,n.kt)("a",{parentName:"li",href:"#service-endpoint-generation-algorithm"},"service endpoint generation algorithm"),"."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"<mediatype>")," of the ",(0,n.kt)("strong",{parentName:"li"},"service endpoint")," MUST be ",(0,n.kt)("inlineCode",{parentName:"li"},"application/octet-stream")," and the ",(0,n.kt)("inlineCode",{parentName:"li"},"base64")," attribute MUST be set, return an error otherwise. Let ",(0,n.kt)("strong",{parentName:"li"},"compressed bitmap")," be the ",(0,n.kt)("inlineCode",{parentName:"li"},"<data>")," part of the data url."),(0,n.kt)("li",{parentName:"ol"},"Generate an ",(0,n.kt)("strong",{parentName:"li"},"uncompressed bitmap")," by base64-decoding [",(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4648"},"RFC4648"),"] the ",(0,n.kt)("strong",{parentName:"li"},"compressed bitmap")," and then decompressing the result using ZLIB [",(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc1950"},"RFC 1950"),"]."),(0,n.kt)("li",{parentName:"ol"},"Generate the ",(0,n.kt)("strong",{parentName:"li"},"bitmap")," by deserializing the ",(0,n.kt)("strong",{parentName:"li"},"uncompressed bitmap")," according to the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/RoaringBitmap/RoaringFormatSpec/"},"roaring bitmap serialization format"),"."),(0,n.kt)("li",{parentName:"ol"},"Return the ",(0,n.kt)("strong",{parentName:"li"},"bitmap"),".")),(0,n.kt)("h3",{id:"validation-algorithm"},"Validation Algorithm"),(0,n.kt)("p",null,"The following steps MUST be followed when checking whether a verifiable credential is revoked:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Let ",(0,n.kt)("strong",{parentName:"li"},"credential")," be a verifiable credential containing a ",(0,n.kt)("inlineCode",{parentName:"li"},"credentialStatus")," whose ",(0,n.kt)("inlineCode",{parentName:"li"},"type")," is ",(0,n.kt)("inlineCode",{parentName:"li"},"RevocationBitmap2022"),"."),(0,n.kt)("li",{parentName:"ol"},"Let ",(0,n.kt)("strong",{parentName:"li"},"revocation bitmap URL")," be the ",(0,n.kt)("inlineCode",{parentName:"li"},"id")," field of the ",(0,n.kt)("strong",{parentName:"li"},"credential"),"'s ",(0,n.kt)("inlineCode",{parentName:"li"},"credentialStatus"),"."),(0,n.kt)("li",{parentName:"ol"},"Resolve the ",(0,n.kt)("strong",{parentName:"li"},"revocation bitmap URL")," to a ",(0,n.kt)("strong",{parentName:"li"},"revocation bitmap service")," in the issuer's DID document, and verify that the service ",(0,n.kt)("inlineCode",{parentName:"li"},"type")," is ",(0,n.kt)("inlineCode",{parentName:"li"},"RevocationBitmap2022"),". Return an error otherwise."),(0,n.kt)("li",{parentName:"ol"},"Expand the endpoint of the ",(0,n.kt)("strong",{parentName:"li"},"revocation bitmap service")," into a ",(0,n.kt)("strong",{parentName:"li"},"revocation bitmap")," according to the ",(0,n.kt)("a",{parentName:"li",href:"#service-endpoint-expansion-algorithm"},"service endpoint expansion algorithm"),"."),(0,n.kt)("li",{parentName:"ol"},"Let ",(0,n.kt)("strong",{parentName:"li"},"revocation index")," be the integer value of the ",(0,n.kt)("inlineCode",{parentName:"li"},"revocationBitmapIndex")," property contained in the ",(0,n.kt)("inlineCode",{parentName:"li"},"credentialStatus")," of the ",(0,n.kt)("strong",{parentName:"li"},"credential"),"."),(0,n.kt)("li",{parentName:"ol"},"Let ",(0,n.kt)("strong",{parentName:"li"},"revoked")," be the value of the bit at index ",(0,n.kt)("strong",{parentName:"li"},"revocation index")," in the ",(0,n.kt)("strong",{parentName:"li"},"revocation bitmap"),"."),(0,n.kt)("li",{parentName:"ol"},"Return ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," if ",(0,n.kt)("strong",{parentName:"li"},"revoked")," is 1, ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," otherwise.")),(0,n.kt)("h2",{id:"test-vectors"},"Test Vectors"),(0,n.kt)("p",null,"This section provides test vectors to validate implementations against."),(0,n.kt)("h3",{id:"test-vector-1"},"Test Vector 1"),(0,n.kt)("p",null,"The following data URL decodes to a bitmap of length 0 where no index is revoked:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'"data:application/octet-stream;base64,ZUp5ek1tQUFBd0FES0FCcg=="')),(0,n.kt)("h3",{id:"test-vector-2"},"Test Vector 2"),(0,n.kt)("p",null,"The following data URL decodes to a bitmap of length 3 where indices ",(0,n.kt)("inlineCode",{parentName:"p"},"5"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"398"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"67000")," are revoked:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'"data:application/octet-stream;base64,ZUp5ek1tQmdZR0lBQVVZZ1pHQ1FBR0laSUdabDZHUGN3UW9BRXVvQjlB"'),"."),(0,n.kt)("h3",{id:"test-vector-3"},"Test Vector 3"),(0,n.kt)("p",null,"The following data URL decodes to a bitmap of length 16384 where all indices are revoked:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'"data:application/octet-stream;base64,ZUp6dHhERVJBQ0FNQkxESEFWS1lXZkN2Q3E0MmFESmtyMlNrM0ROckFLQ2RBQUFBQUFBQTMzbGhHZm9q"')),(0,n.kt)("h2",{id:"rationale"},"Rationale"),(0,n.kt)("p",null,"This section describes the rationale behind some of the design decisions of this specification."),(0,n.kt)("h3",{id:"compression-and-maximum-size"},"Compression and maximum size"),(0,n.kt)("p",null,"Considering that messages published to the Tangle cannot exceed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0006/tip-0006.md#message-validation"},"32 KiB")," in size, and that larger messages have increased requirements, the use of compression was assessed.\nThe precise size of a serialized bitmap varies based on the number and distribution of revoked indices. When indices are revoked uniformly randomly, roughly 100,000 - 200,000 can be achieved in a DID Document with compression, and significantly more if consecutive indices are revoked."),(0,n.kt)("p",null,"ZLIB [",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc1950"},"RFC 1950"),"] was chosen for having a free and open source software licence and being one of the most widely used compression schemes, which enhances the accessibility of this specification. Some other assessed algorithms produced only marginally better compression ratios but had far fewer existing implementations across different programming languages."),(0,n.kt)("h3",{id:"compressed-bitstring-vs-roaring-bitmap"},"Compressed Bitstring vs. Roaring Bitmap"),(0,n.kt)("p",null,"Because of its space efficiency, a roaring bitmap is preferred for representing a bitmap in-memory. To avoid the dependency on roaring bitmap, we considered using a compressed bitstring as the serialization format. However, serialization of such a bitstring was 2-3x slower compared to roaring's serialization format, which becomes an issue on resource-constrained devices (e.g. smartphones) or in web browsers."),(0,n.kt)("h3",{id:"comparison-to-revocationlist2020-and-statuslist2021"},"Comparison to ",(0,n.kt)("inlineCode",{parentName:"h3"},"RevocationList2020")," and ",(0,n.kt)("inlineCode",{parentName:"h3"},"StatusList2021")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-status-rl-2020/"},"RevocationList2020 specification")," and ",(0,n.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-status-list-2021/"},"StatusList2021 specification")," both describe a similar revocation mechanism using a verifiable credential that contains a bitmap, similar to the ",(0,n.kt)("inlineCode",{parentName:"p"},"RevocationBitmap2022")," approach. The credential is hosted outside of the DID document and the verifier thus needs to fetch it from an external resource, likely one controlled by the issuer. This has privacy implications as the issuer can track where a fetch request for the credential came from and potentially infer who the credential was verified by and for what purpose. The issuer can also potentially infer which credential was checked. Because ",(0,n.kt)("inlineCode",{parentName:"p"},"RevocationBitmap2022")," is embedded in the issuer's DID document, which can be obtained without the their knowledge, this approach does not suffer from these privacy shortcomings. See also the ",(0,n.kt)("a",{parentName:"p",href:"#privacy-considerations"},"privacy considerations"),"."),(0,n.kt)("p",null,"A downside of embedding the revocation list in the DID document is that storage in a distributed ledger (DLT) is usually more expensive than other storage hosting solutions. The DLT might also impose message size limitations, capping the total number of revocations that can be done (see also ",(0,n.kt)("a",{parentName:"p",href:"#compression"},"compression"),")."),(0,n.kt)("p",null,"Another difference is that ",(0,n.kt)("inlineCode",{parentName:"p"},"RevocationList2020")," specifies a minimum initial size of 131,072 for its bitstring, to mitigate the  potential for correlating individuals when few credentials have been issued. ",(0,n.kt)("inlineCode",{parentName:"p"},"RevocationBitmap2022")," uses a roaring bitmap instead of a bitstring, so the maximum size is not fixed (apart from the upper bound of an unsigned 32-bit integer). This means the bitmap cannot be used to correlate small populations without more information not present in the bitmap itself. However, both schemes still reveal publicly how many credentials have been revoked, which could be used to infer other information if more knowledge about how an issuer assigns credential revocation indexes is known."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"StatusList2021")," allows for explicitly stating the purpose of the list, currently either ",(0,n.kt)("em",{parentName:"p"},"revocation")," or ",(0,n.kt)("em",{parentName:"p"},"suspension"),". This specification does not mandate that revoked credentials cannot be unrevoked, which means a ",(0,n.kt)("inlineCode",{parentName:"p"},"RevocationBitmap2022")," can effectively also be used as a suspension list."),(0,n.kt)("h3",{id:"privacy-considerations"},"Privacy Considerations"),(0,n.kt)("p",null,"Because the revocation bitmap is embedded in the DID document, and thus available without contacting the issuer directly, the issuer cannot correlate how a holder uses their credential."),(0,n.kt)("p",null,"An observer finding a service of type ",(0,n.kt)("inlineCode",{parentName:"p"},"RevocationBitmap2022")," in a DID document can infer that this DID belongs to an issuer. However, DIDs of issuers tend to be publicly known, in contrast to DIDs of other entities, so this is unlikely to present an issue. External observers can monitor the frequency of revocations and potentially the total number of issued credentials, depending on how the issuer assigns credential indices (e.g. starting from 0 and incrementing the index for each issued credential)."))}c.isMDXComponent=!0}}]);