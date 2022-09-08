"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26949],{1426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));var r=n(26103);const o={title:"Verifiable Presentations",sidebar_label:"Verifiable Presentations",description:"Explain how a VC is created and verified",image:"/img/Identity_icon.png",keywords:["verifiable","presentations"]},s=void 0,l={unversionedId:"concepts/verifiable_credentials/verifiable_presentations",id:"concepts/verifiable_credentials/verifiable_presentations",title:"Verifiable Presentations",description:"Explain how a VC is created and verified",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/concepts/verifiable_credentials/verifiable_presentations.mdx",sourceDirName:"concepts/verifiable_credentials",slug:"/concepts/verifiable_credentials/verifiable_presentations",permalink:"/identity.rs/0.5/concepts/verifiable_credentials/verifiable_presentations",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/concepts/verifiable_credentials/verifiable_presentations.mdx",tags:[],version:"current",frontMatter:{title:"Verifiable Presentations",sidebar_label:"Verifiable Presentations",description:"Explain how a VC is created and verified",image:"/img/Identity_icon.png",keywords:["verifiable","presentations"]},sidebar:"docs",previous:{title:"Revocation",permalink:"/identity.rs/0.5/concepts/verifiable_credentials/revoke"},next:{title:"Overview",permalink:"/identity.rs/0.5/concepts/advanced/overview"}},d={},p=[{value:"Creation",id:"creation",level:2},{value:"Proof Options",id:"proof-options",level:3},{value:"Validation",id:"validation",level:2},{value:"Proof Verifier Options",id:"proof-verifier-options",level:3},{value:"Subject-Holder Relationship",id:"subject-holder-relationship",level:3},{value:"Credential Validation Options",id:"credential-validation-options",level:3},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Replay Attacks",id:"replay-attacks",level:3},{value:"Example",id:"example",level:2}],c={toc:p};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A verifiable presentation is the recommended data format for sharing one or more ",(0,a.kt)("a",{parentName:"p",href:"/identity.rs/0.5/concepts/verifiable_credentials/overview"},"verifiable credentials"),".\nIt is constructed and signed by a holder to prove control over their credentials and can be presented to a verifier for ",(0,a.kt)("a",{parentName:"p",href:"#validation"},"validation"),"."),(0,a.kt)("p",null,"For instance: after an issuer ",(0,a.kt)("a",{parentName:"p",href:"/identity.rs/0.5/concepts/verifiable_credentials/create"},"creates and issues a verifiable credential")," to a holder, such as a university issuing a degree to a graduate,\nthe holder stores it securely until asked to present it.\nA company could then request proof of that university degree: the holder can ",(0,a.kt)("a",{parentName:"p",href:"#creation"},"create a verifiable presentation"),"\ncontaining their credential, which is already signed by their university, and present it to the company to ",(0,a.kt)("a",{parentName:"p",href:"#validation"},"validate"),"."),(0,a.kt)("p",null,"Note that verifiable presentations that contain personal data should, as with verifiable credentials, be transmitted and stored securely off-chain to satisfy data privacy regulations such as ",(0,a.kt)("a",{parentName:"p",href:"https://gdpr.eu/"},"GDPR"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"Verifiable Credentials Data Model Specification")," for more information on verifiable presentations.")),(0,a.kt)("h2",{id:"creation"},"Creation"),(0,a.kt)("p",null,"The IOTA Identity Framework enables holders to construct verifiable presentations easily.\nAs demonstrated in the ",(0,a.kt)("a",{parentName:"p",href:"#example"},"example"),", holders need only pass in their credentials to present and sign the presentation."),(0,a.kt)("p",null,"The following properties may be specified on a presentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#identifiers"},(0,a.kt)("strong",{parentName:"a"},"ID")),": optional URI identifier for the presentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#contexts"},(0,a.kt)("strong",{parentName:"a"},"Context")),": list of JSON-LD context URIs. Includes ",(0,a.kt)("inlineCode",{parentName:"li"},'"https://www.w3.org/2018/credentials/v1"')," by default."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#types"},(0,a.kt)("strong",{parentName:"a"},"Types")),": list of types describing the presentation. Includes ",(0,a.kt)("inlineCode",{parentName:"li"},'"VerifiablePresentation"')," by default."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials"},(0,a.kt)("strong",{parentName:"a"},"Credentials")),": list of verifiable credentials to present."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#dfn-holders"},(0,a.kt)("strong",{parentName:"a"},"Holder")),": optional URI, typically a DID, of the entity that generated the presentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#refreshing"},(0,a.kt)("strong",{parentName:"a"},"Refresh Service")),": optional link to a service where the recipient may refresh the included credentials."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#terms-of-use"},(0,a.kt)("strong",{parentName:"a"},"Terms of Use")),": optional list of policies defining obligations, prohibitions, or permissions of the presentation recipient.")),(0,a.kt)("p",null,"Of the above, only the list of credentials is required when creating a presentation using the framework.\nHowever, the holder property should be included to satisfy ",(0,a.kt)("a",{parentName:"p",href:"#subject-holder-relationship"},"subject-holder relationship")," checks during validation."),(0,a.kt)("p",null,"After creation, the holder signs the verifiable presentation using a private key linked to one of the verification methods in their\nDID Document and transmits it to a verifier for ",(0,a.kt)("a",{parentName:"p",href:"#validation"},"validation"),"."),(0,a.kt)("h3",{id:"proof-options"},"Proof Options"),(0,a.kt)("p",null,"A digital signature on a verifiable presentation both provides data integrity and proves the DID of the holder.\nThe proof section embedded in a presentation may also include additional metadata."),(0,a.kt)("p",null,"The following metadata properties can be configured by the framework and are optional and omitted by default:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Created"),": timestamp of when the presentation was signed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Expires"),": timestamp after which the presentation is no longer considered valid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Challenge"),": arbitrary random string. Sent by the verifier and mitigates replay attacks; should be sufficiently random and uniquely generated per presentation request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Domain"),": arbitrary string. Sent by the verifier and can help mitigate replay attacks when used with a challenge."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proof Purpose"),": indicates the purpose of the signature.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AssertionMethod"),": to assert a claim. The signing verification method must have an ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#assertion"},(0,a.kt)("inlineCode",{parentName:"a"},"assertionMethod"))," relationship to be valid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authentication"),": to authenticate the signer. The signing verification method must have an ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#authentication"},(0,a.kt)("inlineCode",{parentName:"a"},"authentication"))," relationship to be valid.")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Verifiers should always send a challenge and domain to mitigate replay attacks, see ",(0,a.kt)("a",{parentName:"p",href:"#security-considerations"},"Security Considerations"),".")),(0,a.kt)("p",null,"A verifier could also choose to ignore some or all of these options.\nSee ",(0,a.kt)("a",{parentName:"p",href:"#proof-verifier-options"},"Proof Verifier Options")," for more information."),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("p",null,"The IOTA Identity Framework provides several options for verifiers to validate various sections of a verifiable presentation.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"#example"},"example")," for a demonstration of how to validate a presentation."),(0,a.kt)("p",null,"The framework checks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Semantic structure"),": ensures the presentation and its credentials adhere to the specification."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Presentation proof"),": verifies the presentation signature against the DID Document of the holder."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Credential proofs"),": verifies the credential signatures against the DID Documents of their respective issuers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional validations"),": additional checks on signatures and credential fields can be configured by the verifier.")),(0,a.kt)("p",null,"Note that a verifier may specify which DID Documents to use for the holder and issuers, otherwise they are resolved from the Tangle automatically."),(0,a.kt)("p",null,"Currently, the following are ",(0,a.kt)("em",{parentName:"p"},"not")," checked automatically:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data schemas"),": credentials that specify a ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#data-schemas"},"schema")," property should be examined to ensure conformance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fitness for purpose"),": whether the credentials in a presentation and the data within them are acceptable and valid depends on the context in which they are used. Verifiers should ensure that the credential types, subjects, and schemas sent by a holder match what was requested."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Issuer trustworthiness"),": verifiers must check that they trust the issuer on each individual credential in a presentation. The framework only verifies that the issuer's signature on each credential is current and valid against the given options.")),(0,a.kt)("p",null,"The default validation behaviour may be modified by the following options."),(0,a.kt)("h3",{id:"proof-verifier-options"},"Proof Verifier Options"),(0,a.kt)("p",null,"While the framework always verifies that the digital signature on a verifiable presentation is valid, a verifier may validate additional fields in the proof on a presentation.\nNotably, to mitigate potential replay attacks a verifier should always check that the challenge and domain fields match what was sent to the holder when requesting the presentation.\nSee ",(0,a.kt)("a",{parentName:"p",href:"#security-considerations"},"Security Considerations")," for more information."),(0,a.kt)("p",null,"The following options are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Method Scope"),": check the signing verification method has a particular ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#verification-relationships"},"verification relationship"),". Overridden by the proof purpose check."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Method Type"),": check the signing verification method has a particular type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Challenge"),": check the challenge field matches this string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Domain"),": check the domain field matches this string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proof Purpose"),": require a specific purpose on the proof. See ",(0,a.kt)("a",{parentName:"li",href:"#proof-options"},"Proof Options"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Allow Expired"),": accept proofs where the current datetime is after their expiration. Default is to reject expired proofs.")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"#proof-options"},"Proof Options")," for more information on setting these properties as a holder when signing a verifiable presentation."),(0,a.kt)("h3",{id:"subject-holder-relationship"},"Subject-Holder Relationship"),(0,a.kt)("p",null,"Specifies the expected relationship between the holder that signed the verifiable presentation and the subject specified in each verifiable credential.\nThis can be restricted by the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#nontransferable-property"},(0,a.kt)("inlineCode",{parentName:"a"},"nonTransferable"))," property,\nwhich indicates that a verifiable credential must only be encapsulated into a verifiable presentation whose holder matches the credential subject."),(0,a.kt)("p",null,"By default, the framework always enforces that the holder matches the subject on all credentials.\nThe following options are available to modify that behaviour:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"AlwaysSubject")," (default)"),": the holder DID that signed the presentation must match the ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#credential-subject"},(0,a.kt)("inlineCode",{parentName:"a"},"credentialSubject")," ",(0,a.kt)("inlineCode",{parentName:"a"},"id"))," field in each of the attached credentials. This is the safest option which ensures holders may only present credentials that were directly issued to their DID. An error is thrown on a mismatch or if no subject ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," is present."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"SubjectOnNonTransferable")),": the holder DID must match the subject only for credentials where the ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#nontransferable-property"},(0,a.kt)("inlineCode",{parentName:"a"},"nonTransferable"))," property is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),". This is appropriate for accepting ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#bearer-credentials"},"bearer credentials")," while still adhering to the specification."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Any")),": the holder DID is not required to have any kind of relationship to any credential subject. This option performs no checks and ignores the ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#nontransferable-property"},(0,a.kt)("inlineCode",{parentName:"a"},"nonTransferable"))," property.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#subject-holder-relationships"},"Verifiable Credentials Data Model Specification")," for further discussion on the different subject-holder relationships.")),(0,a.kt)("h3",{id:"credential-validation-options"},"Credential Validation Options"),(0,a.kt)("p",null,"These options specify conditions that all credentials in a verifiable presentation must satisfy."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Expiry Date"),": check that the ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#expiration"},(0,a.kt)("inlineCode",{parentName:"a"},"expirationDate"))," property, if present, is not before a specific datetime. Defaults to the current datetime if unset."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Issuance Date"),": check that the ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#issuance-date"},(0,a.kt)("inlineCode",{parentName:"a"},"issuanceDate"))," property, if present, is not after a specific datetime. Defaults to the current datetime if unset."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Verifier Options"),": see ",(0,a.kt)("a",{parentName:"li",href:"#proof-verifier-options"},"Proof Verifier Options")," for details.")),(0,a.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,a.kt)("h3",{id:"replay-attacks"},"Replay Attacks"),(0,a.kt)("p",null,"A verifiable presentation without challenge and domain properties could potentially be stored by a malicious actor\nand replayed to a different verifier, impersonating the holder.\nThis is because the holder's signature on a presentation would still be seen as valid indefinitely,\nuntil they ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#verification-method-rotation"},"rotate")," the verification method used."),(0,a.kt)("p",null,"To mitigate this, verifiers should always send a unique challenge and domain when requesting a verifiable presentation.\nThese properties are then included in the proof section of the presentation by the holder during signing using ",(0,a.kt)("a",{parentName:"p",href:"#proof-options"},"Proof Options"),".\nThe digital signature prevents these properties from being altered as it would invalidate the signature, effectively preventing a malicious\nactor from injecting different values into old verifiable presentations. A presentation without a challenge and domain\nin its proof that matches what was sent by the verifier should be considered invalid."),(0,a.kt)("p",null,"The challenge string should be sufficiently random and unique for each verifiable presentation requested by a verifier to avoid\nbeing predicted. The domain, which does not need to be random, is an additional measure. In the unlikely occurrence\nof two verifiers generating the same random challenge, the domain would sufficiently distinguish those requests."),(0,a.kt)("p",null,"Holders may additionally specify that their signature on a verifiable presentation expires after a short duration, as\nper ",(0,a.kt)("a",{parentName:"p",href:"#proof-options"},"Proof Options"),". However, verifiers and different implementations could choose to ignore that property,\nso setting a signature expiration alone should not be relied upon."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"The following code demonstrates how to use the IOTA Identity Framework end-to-end to create and sign a verifiable presentation as a holder,\nserialize it to JSON for transmission, deserialize it on the receiving side as a verifier, and finally validate it with various options."),(0,a.kt)(r.Z,{nodeReplitLink:"https://repl.it/@IOTAFoundation/create-vp?lite=true",rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! A Verifiable Presentation (VP) represents a bundle of one or more Verifiable Credentials.\n//! This example demonstrates building and usage of VPs.\n//!\n//! cargo run --example account_create_vp\n\nuse identity::account::Account;\nuse identity::account::AccountBuilder;\nuse identity::account::IdentitySetup;\nuse identity::account::MethodContent;\nuse identity::core::json;\nuse identity::core::Duration;\nuse identity::core::FromJson;\nuse identity::core::Timestamp;\nuse identity::core::ToJson;\nuse identity::core::Url;\nuse identity::credential::Credential;\nuse identity::credential::CredentialBuilder;\nuse identity::credential::Presentation;\nuse identity::credential::PresentationBuilder;\nuse identity::credential::Subject;\nuse identity::crypto::ProofOptions;\nuse identity::did::verifiable::VerifierOptions;\n\nuse identity::account::Result;\nuse identity::iota::CredentialValidationOptions;\nuse identity::iota::FailFast;\nuse identity::iota::PresentationValidationOptions;\n\nuse identity::iota::Resolver;\nuse identity::iota::SubjectHolderRelationship;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // ===========================================================================\n  // Step 1: Create identities for the issuer and the holder.\n  // ===========================================================================\n\n  // Create an account builder with in-memory storage for simplicity.\n  // See `create_did` example to configure Stronghold storage.\n  let mut builder: AccountBuilder = Account::builder();\n\n  // Create an identity for the issuer.\n  let mut issuer: Account = builder.create_identity(IdentitySetup::default()).await?;\n\n  // Add a dedicated verification method to the issuer, with which to sign credentials.\n  issuer\n    .update_identity()\n    .create_method()\n    .content(MethodContent::GenerateEd25519)\n    .fragment("issuerKey")\n    .apply()\n    .await?;\n\n  // Create an identity for the holder, in this case also the subject.\n  let mut alice: Account = builder.create_identity(IdentitySetup::default()).await?;\n\n  // Add verification method to the holder.\n  alice\n    .update_identity()\n    .create_method()\n    .content(MethodContent::GenerateEd25519)\n    .fragment("aliceKey")\n    .apply()\n    .await?;\n\n  // ===========================================================================\n  // Step 2: Issuer creates and signs a Verifiable Credential.\n  // ===========================================================================\n\n  // Create VC "subject" field containing subject ID and claims about it.\n  let subject: Subject = Subject::from_json_value(json!({\n    "id": alice.did().to_string(),\n    "name": "Alice",\n    "degree": {\n      "type": "BachelorDegree",\n      "name": "Bachelor of Science and Arts",\n    },\n    "GPA": "4.0",\n  }))?;\n\n  // Build credential using subject above and issuer.\n  let mut credential: Credential = CredentialBuilder::default()\n    .id(Url::parse("https://example.edu/credentials/3732")?)\n    .issuer(Url::parse(issuer.did().to_string())?)\n    .type_("UniversityDegreeCredential")\n    .subject(subject)\n    .build()?;\n\n  // Sign the Credential with the issuers default key.\n  issuer\n    .sign("#issuerKey", &mut credential, ProofOptions::default())\n    .await?;\n\n  println!("Credential JSON > {:#}", credential);\n\n  // ===========================================================================\n  // Step 3: Issuer sends the Verifiable Credential to the holder.\n  // ===========================================================================\n\n  // The credential is then serialized to JSON and transmitted to the holder in a secure manner.\n  // Note that the credential is NOT published to the IOTA Tangle. It is sent and stored off-chain.\n  let credential_json: String = credential.to_json()?;\n\n  // ===========================================================================\n  // Step 4: Verifier sends the holder a challenge and requests a signed Verifiable Presentation.\n  // ===========================================================================\n\n  // A unique random challenge generated by the requester per presentation can mitigate replay attacks\n  let challenge: &str = "475a7984-1bb5-4c4c-a56f-822bccd46440";\n\n  // The verifier and holder also agree that the signature should have an expiry date\n  // 10 minutes from now.\n  let expires: Timestamp = Timestamp::now_utc().checked_add(Duration::minutes(10)).unwrap();\n\n  // ===========================================================================\n  // Step 5: Holder creates and signs a verifiable presentation from the issued credential.\n  // ===========================================================================\n\n  // Deserialize the credential.\n  let credential: Credential = Credential::from_json(credential_json.as_str())?;\n\n  // Create an unsigned Presentation from the previously issued Verifiable Credential.\n  let mut presentation: Presentation = PresentationBuilder::default()\n    .holder(Url::parse(alice.did().as_ref())?)\n    .credential(credential)\n    .build()?;\n\n  // Sign the verifiable presentation using the holder\'s verification method\n  // and include the requested challenge and expiry timestamp.\n  alice\n    .sign(\n      "#aliceKey",\n      &mut presentation,\n      ProofOptions::new().challenge(challenge.to_string()).expires(expires),\n    )\n    .await?;\n\n  // ===========================================================================\n  // Step 6: Holder sends a verifiable presentation to the verifier.\n  // ===========================================================================\n\n  // Convert the Verifiable Presentation to JSON to send it to the verifier.\n  let presentation_json: String = presentation.to_json()?;\n\n  // ===========================================================================\n  // Step 7: Verifier receives the Verifiable Presentation and verifies it.\n  // ===========================================================================\n\n  // Deserialize the presentation from the holder:\n  let presentation: Presentation = Presentation::from_json(&presentation_json)?;\n\n  // The verifier wants the following requirements to be satisfied:\n  // - Signature verification (including checking the requested challenge to mitigate replay attacks)\n  // - Presentation validation must fail if credentials expiring within the next 10 hours are encountered\n  // - The presentation holder must always be the subject, regardless of the presence of the nonTransferable property\n  // - The issuance date must not be in the future.\n\n  let presentation_verifier_options: VerifierOptions = VerifierOptions::new()\n    .challenge(challenge.to_owned())\n    .allow_expired(false);\n\n  // Do not allow credentials that expire within the next 10 hours.\n  let credential_validation_options: CredentialValidationOptions = CredentialValidationOptions::default()\n    .earliest_expiry_date(Timestamp::now_utc().checked_add(Duration::hours(10)).unwrap());\n\n  let presentation_validation_options = PresentationValidationOptions::default()\n    .presentation_verifier_options(presentation_verifier_options.clone())\n    .shared_validation_options(credential_validation_options)\n    .subject_holder_relationship(SubjectHolderRelationship::AlwaysSubject);\n\n  // Validate the presentation and all the credentials included in it.\n  let resolver: Resolver = Resolver::new().await?;\n  resolver\n    .verify_presentation(\n      &presentation,\n      &presentation_validation_options,\n      FailFast::FirstError,\n      None,\n      None,\n    )\n    .await?;\n\n  // Since no errors were thrown by `verify_presentation` we know that the validation was successful.\n  println!("VP successfully validated");\n\n  // Note that we did not declare a latest allowed issuance date for credentials. This is because we only want to check\n  // that the credentials do not have an issuance date in the future which is a default check.\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.5/bindings/wasm/examples-account/src/create_vp.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.5/examples/account/create_vp.rs",mdxType:"CodeSnippet"}))}h.isMDXComponent=!0},26103:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(86010),a=n(67294),r=n(44393);function o(e){let{nodeReplitLink:t,rustContent:n,nodeGithubLink:o,rustGithubLink:s}=e;const[l,d]=a.useState("node"),p=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),a.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,a.useEffect)((()=>{let e=localStorage.getItem("lang"),i=e||"node";"node"!==i||t||(i="rust"),"rust"!==i||n||(i="node"),d(i)})),a.createElement("div",null,a.createElement("div",{className:(0,i.Z)("langSelector")},t&&a.createElement("button",{className:(0,i.Z)("button","languageButton","mr-sm",{activeButton:"node"===l,inactiveButton:"node"!==l}),onClick:()=>{localStorage.setItem("lang","node"),d("node")}},"Node.js"),n&&a.createElement("button",{className:(0,i.Z)("button","languageButton",{activeButton:"rust"==l,inactiveButton:"rust"!==l}),onClick:()=>{localStorage.setItem("lang","rust"),d("rust")}},"Rust")),a.createElement("div",{className:(0,i.Z)("codeSnippetContainer")},"node"===l?a.createElement(a.Fragment,null,a.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):a.createElement("div",{className:(0,i.Z)("rustContainer")},a.createElement(r.Z,{className:(0,i.Z)("noMarginBottom"),language:"rust"},n))),a.createElement("div",{className:(0,i.Z)("githubLink")},o&&"node"===l&&a.createElement("a",{href:o,target:"_blank"},"GitHub\xa0",p),s&&"rust"===l&&a.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",p)))}}}]);