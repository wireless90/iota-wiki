"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[62255],{87112:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return v}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=n(21134),l=["components"],s={title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC is revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke"]},d=void 0,u={unversionedId:"verifiable_credentials/revoke",id:"verifiable_credentials/revoke",title:"Verifiable Credential Revocation",description:"Explain how a VC is revoked",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/verifiable_credentials/revoke.mdx",sourceDirName:"verifiable_credentials",slug:"/verifiable_credentials/revoke",permalink:"/identity.rs/verifiable_credentials/revoke",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/verifiable_credentials/revoke.mdx",tags:[],version:"current",frontMatter:{title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC is revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke"]},sidebar:"docs",previous:{title:"Create and Sign",permalink:"/identity.rs/verifiable_credentials/create"},next:{title:"Verifiable Presentations",permalink:"/identity.rs/verifiable_credentials/verifiable_presentations"}},c={},v=[{value:"Example",id:"example",level:2}],m={toc:v};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TODO: Explain how Verifiable Credentials are revoked using ",(0,r.kt)("inlineCode",{parentName:"p"},"credentialStatus")," and e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"RevocationList2020"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This example shows how you can revoke a ",(0,r.kt)("a",{parentName:"p",href:"overview"},"Verifiable Credential(VC)")," by removing a verification method (public key) from the DID Document of the Issuer. This means the VC can no longer be validated. This would invalidate every VC signed with the same public key, meaning the Issuer would have to sign every VC with a different key."),(0,r.kt)(o.Z,{nodeReplitLink:"https://repl.it/@IOTAFoundation/revoke-vc?lite=true",rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! This example shows how to revoke a verifiable credential.\n//!\n//! The Verifiable Credential is revoked by actually removing a verification method (public key)\n//! from the DID Document of the Issuer.\n//! As such, the Verifiable Credential can no longer be validated.\n//! This would invalidate every Verifiable Credential signed with the same public key, therefore the\n//! issuer would have to sign every VC with a different key.\n//!\n//! cargo run --example account_revoke_vc\n\nuse identity::account::Account;\nuse identity::account::AccountBuilder;\nuse identity::account::IdentitySetup;\nuse identity::account::MethodContent;\nuse identity::account::Result;\nuse identity::core::json;\nuse identity::core::FromJson;\nuse identity::core::Url;\nuse identity::credential::Credential;\nuse identity::credential::CredentialBuilder;\nuse identity::credential::Subject;\nuse identity::crypto::ProofOptions;\nuse identity::did::DID;\nuse identity::iota::CredentialValidationOptions;\nuse identity::iota::CredentialValidator;\nuse identity::iota::ResolvedIotaDocument;\nuse identity::iota::Resolver;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // ===========================================================================\n  // Create a Verifiable Credential.\n  // ===========================================================================\n\n  // Create an account builder with in-memory storage for simplicity.\n  // See `create_did` example to configure Stronghold storage.\n  let mut builder: AccountBuilder = Account::builder();\n\n  // Create an identity for the issuer.\n  let mut issuer: Account = builder.create_identity(IdentitySetup::default()).await?;\n\n  // Add a dedicated verification method to the issuer, with which to sign credentials.\n  issuer\n    .update_identity()\n    .create_method()\n    .content(MethodContent::GenerateEd25519)\n    .fragment("key-1")\n    .apply()\n    .await?;\n\n  // Create a credential subject indicating the degree earned by Alice.\n  let subject: Subject = Subject::from_json_value(json!({\n    "id": "did:iota:B8DucnzULJ9E8cmaReYoePU2b7UKE9WKxyEVov8tQA7H",\n    "name": "Alice",\n    "degree": "Bachelor of Science and Arts",\n    "GPA": "4.0",\n  }))?;\n\n  // Build credential using subject above and issuer.\n  let mut credential: Credential = CredentialBuilder::default()\n    .id(Url::parse("https://example.edu/credentials/3732")?)\n    .issuer(Url::parse(issuer.did().as_str())?)\n    .type_("UniversityDegreeCredential")\n    .subject(subject)\n    .build()?;\n\n  // Sign the Credential with the issuer\'s verification method.\n  issuer.sign("#key-1", &mut credential, ProofOptions::default()).await?;\n\n  // ===========================================================================\n  // Revoke the Verifiable Credential.\n  // ===========================================================================\n\n  // Remove the public key that signed the VC from the issuer\'s DID document\n  // This effectively revokes the VC as it will no longer be able to be verified.\n  issuer\n    .update_identity()\n    .delete_method()\n    .fragment("key-1")\n    .apply()\n    .await?;\n\n  // Check the verifiable credential is revoked.\n  let resolver: Resolver = Resolver::new().await?;\n  let resolved_issuer_doc: ResolvedIotaDocument = resolver.resolve_credential_issuer(&credential).await?;\n  let validation_result = CredentialValidator::validate(\n    &credential,\n    &resolved_issuer_doc,\n    &CredentialValidationOptions::default(),\n    identity::iota::FailFast::FirstError,\n  );\n\n  println!("VC validation result: {:?}", validation_result);\n  assert!(validation_result.is_err());\n  println!("Credential successfully revoked!");\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.5/bindings/wasm/examples-account/src/revoke_vc.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.5/examples/account/revoke_vc.rs",mdxType:"CodeSnippet"}))}h.isMDXComponent=!0},21134:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(86010),a=n(67294),r=n(31531);function o(e){var t=e.nodeReplitLink,n=e.rustContent,o=e.nodeGithubLink,l=e.rustGithubLink,s=a.useState("node"),d=s[0],u=s[1],c=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),a.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,a.useEffect)((function(){var e=localStorage.getItem("lang"),i=e||"node";"node"!==i||t||(i="rust"),"rust"!==i||n||(i="node"),u(i)})),a.createElement("div",null,a.createElement("div",{className:(0,i.Z)("langSelector")},t&&a.createElement("button",{className:(0,i.Z)("button","languageButton","mr-sm",{activeButton:"node"===d,inactiveButton:"node"!==d}),onClick:function(){localStorage.setItem("lang","node"),u("node")}},"Node.js"),n&&a.createElement("button",{className:(0,i.Z)("button","languageButton",{activeButton:"rust"==d,inactiveButton:"rust"!==d}),onClick:function(){localStorage.setItem("lang","rust"),u("rust")}},"Rust")),a.createElement("div",{className:(0,i.Z)("codeSnippetContainer")},"node"===d?a.createElement(a.Fragment,null,a.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):a.createElement("div",{className:(0,i.Z)("rustContainer")},a.createElement(r.Z,{className:(0,i.Z)("noMarginBottom"),language:"rust"},n))),a.createElement("div",{className:(0,i.Z)("githubLink")},o&&"node"===d&&a.createElement("a",{href:o,target:"_blank"},"GitHub\xa0",c),l&&"rust"===d&&a.createElement("a",{href:l,target:"_blank"},"GitHub\xa0",c)))}}}]);