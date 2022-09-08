"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=i,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13678:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={toc:[]};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Password Storage",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"It is not recommended to store passwords or seeds on a host's environment variables or in the source code in a production\nsetup. Please follow our ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/backup_security"},"backup and security"),"\nrecommendations for production use.")))}o.isMDXComponent=!0},49923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),r=n(13678);const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Compiling for Android",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Compiling for Android requires additional compilation instructions.\nSpecific instructions can be found in ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/getting_started/java/android_development"},"Android development"))))}l.isMDXComponent=!0;const s={description:"Getting started with the official IOTA Client Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","Rust","jar","maven","environment variable"]},d="Getting Started",p={unversionedId:"getting_started/java/getting_started",id:"getting_started/java/getting_started",title:"Getting Started",description:"Getting started with the official IOTA Client Library Java binding.",source:"@site/content/build/iota.rs/production/documentation/docs/getting_started/java/getting_started.mdx",sourceDirName:"getting_started/java",slug:"/getting_started/java/getting_started",permalink:"/iota.rs/getting_started/java/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/getting_started/java/getting_started.mdx",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","Rust","jar","maven","environment variable"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/iota.rs/getting_started/required_prior_knowledge"},next:{title:"Android Development",permalink:"/iota.rs/getting_started/java/android_development"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Security",id:"security",level:2},{value:"Installation",id:"installation",level:2},{value:"Step 1: Creating the Native Library",id:"step-1-creating-the-native-library",level:3},{value:"Step 2: Creating the Java archive",id:"step-2-creating-the-java-archive",level:3},{value:"Generating the source files and classes",id:"generating-the-source-files-and-classes",level:4},{value:"Generating the jar",id:"generating-the-jar",level:4},{value:"Gradle",id:"gradle",level:5},{value:"Maven",id:"maven",level:5},{value:"Usage",id:"usage",level:2},{value:"Gradle",id:"gradle-1",level:3},{value:"Maven",id:"maven-1",level:3},{value:"Initialisation",id:"initialisation",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Limitations",id:"limitations",level:3}],g={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To use the library, we recommend you update Rust to the latest stable version ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},(0,i.kt)("inlineCode",{parentName:"a"},"$ rustup update stable")),". Nightly should be fine but some changes might not be compatible."),(0,i.kt)("p",null,"Ensure you have first installed the required dependencies for the library ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/blob/dev/README.md"},"here"),". Then also install the following programs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java & JDK (Make sure $JAVA_HOME env variable) is set"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gradle.org/install/"},"Gradle")," v4 or higher or ",(0,i.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven")," installe"),(0,i.kt)("li",{parentName:"ul"},"Cargo ndk (",(0,i.kt)("inlineCode",{parentName:"li"},"cargo install cargo-ndk"),")"),(0,i.kt)("li",{parentName:"ul"},"Cargo fmt (",(0,i.kt)("inlineCode",{parentName:"li"},"rustup component add rustfmt"),")")),(0,i.kt)("p",null,"Download or clone the ",(0,i.kt)("inlineCode",{parentName:"p"},"iota.rs")," repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/iota.rs.git\n")),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)(r.ZP,{mdxType:"PasswordStorage"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To build using the iota.rs Java bindings, you need the following two parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"JNI Native library linking ",(0,i.kt)("inlineCode",{parentName:"li"},"Rust")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"C"),", and then ",(0,i.kt)("inlineCode",{parentName:"li"},"C")," to java ",(0,i.kt)("inlineCode",{parentName:"li"},"native")," methods (",(0,i.kt)("inlineCode",{parentName:"li"},".so")," , ",(0,i.kt)("inlineCode",{parentName:"li"},".dll")," or ",(0,i.kt)("inlineCode",{parentName:"li"},".dylib")," depending on your system)."),(0,i.kt)("li",{parentName:"ol"},"Java archive(Jar) containing ",(0,i.kt)("inlineCode",{parentName:"li"},"native")," methods which call C code. (",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),").")),(0,i.kt)("h3",{id:"step-1-creating-the-native-library"},"Step 1: Creating the Native Library"),(0,i.kt)("p",null,"Build the iota.rs library (This generates the java source code and JNI library file)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd iota.rs/bindings/java\ncargo build --release\n")),(0,i.kt)("p",null,"Generated binaries can then be found at ",(0,i.kt)("inlineCode",{parentName:"p"},"iota.rs/bindings/java/target/release")),(0,i.kt)(l,{mdxType:"CompilingForAndroid"}),(0,i.kt)("h3",{id:"step-2-creating-the-java-archive"},"Step 2: Creating the Java archive"),(0,i.kt)("h4",{id:"generating-the-source-files-and-classes"},"Generating the source files and classes"),(0,i.kt)("p",null,"After step 1, Java source files will be generated under ",(0,i.kt)("inlineCode",{parentName:"p"},"iota.rs/bindings/java/native/src/main/java/org/iota/client"),"."),(0,i.kt)("p",null,"If this step succeeded, we need to generate the jar file containing the newly generated Java source files."),(0,i.kt)("h4",{id:"generating-the-jar"},"Generating the jar"),(0,i.kt)("p",null,"Generating the jar can be done with your tool of preference. We provide examples for Gradle and Maven in this guide"),(0,i.kt)("h5",{id:"gradle"},"Gradle"),(0,i.kt)("p",null,"Make ",(0,i.kt)("inlineCode",{parentName:"p"},"gradlew")," executable (",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x gradlew"),") if needed, then run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd iota.rs/bindings/java\n./gradlew jar\n")),(0,i.kt)("h5",{id:"maven"},"Maven"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd iota.rs/bindings/java\nmvn install\n")),(0,i.kt)("p",null,"After running one of these commands, the jar can then be found at ",(0,i.kt)("inlineCode",{parentName:"p"},"iota.rs/bindings/java/native/build/libs/native.jar")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"You can find more information on using the ",(0,i.kt)("inlineCode",{parentName:"p"},"iota.rs")," library's java binding in the ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/examples/running_examples"},"examples section"),"."),(0,i.kt)("h3",{id:"gradle-1"},"Gradle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew examples:java-app:test --info\n")),(0,i.kt)("h3",{id:"maven-1"},"Maven"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:exec\n")),(0,i.kt)("h2",{id:"initialisation"},"Initialisation"),(0,i.kt)("p",null,"This example fetches node information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'private static void nodeInfo() {\n    String nodeUrl = "https://chrysalis-nodes.iota.cafe:443";\n    Client iota = Client.Builder()\n        // Insert your node URL here\n        .withNode(nodeUrl) \n        // Choose pow mode\n        .withLocalPow(true)\n        //Then create the Client instance\n        .finish();\n    NodeInfoWrapper info = iota.getInfo();\n    System.out.println("Node url: " + info.url());\n    System.out.println("Node Info: " + info.nodeInfo());\n}\n')),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"Java"),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Due to the fact that we are linking through C from Rust, there are a couple of limiting factors."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Classic builder patterns return a ",(0,i.kt)("inlineCode",{parentName:"li"},"clone")," after each builder call since we can only pass back to C by reference in ",(0,i.kt)("inlineCode",{parentName:"li"},"Rust"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},"Builder builder1 = new Builder();\nBuilder builder2 = builder1.setValue(true);\n\n// These are different instances, thus builder1 wont have the value set\nassertNotEquals(builder1, builder2);\n")))}m.isMDXComponent=!0}}]);