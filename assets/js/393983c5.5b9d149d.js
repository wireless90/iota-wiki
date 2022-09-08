"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[34152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),f=r,c=d["".concat(p,".").concat(f)]||d[f]||h[f]||n;return a?i.createElement(c,o(o({ref:t},m),{},{components:a})):i.createElement(c,o({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},45124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=a(87462),r=(a(67294),a(3905));const n={description:"Firefly is Shimmer's new official wallet. You can verify your Firefly download on Windows, maxOS, and/or Linux.",image:"/img/logo/preview.png",keywords:["Firefly","DLT","wallet","download","verify","windows","macOS","linux","how to"]},o="Firefly Shimmer",l={unversionedId:"how_tos/verify_download",id:"how_tos/verify_download",title:"Firefly Shimmer",description:"Firefly is Shimmer's new official wallet. You can verify your Firefly download on Windows, maxOS, and/or Linux.",source:"@site/content/build/introduction-docs/develop/docs/how_tos/verify_download.md",sourceDirName:"how_tos",slug:"/how_tos/verify_download",permalink:"/introduction/develop/how_tos/verify_download",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/content/build/introduction-docs/develop/docs/how_tos/verify_download.md",tags:[],version:"current",frontMatter:{description:"Firefly is Shimmer's new official wallet. You can verify your Firefly download on Windows, maxOS, and/or Linux.",image:"/img/logo/preview.png",keywords:["Firefly","DLT","wallet","download","verify","windows","macOS","linux","how to"]},sidebar:"mySidebar",previous:{title:"Backup and Security",permalink:"/introduction/develop/how_tos/backup_security"},next:{title:"Shimmer Beta",permalink:"/introduction/develop/reference/networks/betanet"}},p={},s=[{value:"Verify your Firefly Desktop Download",id:"verify-your-firefly-desktop-download",level:2},{value:"Windows Operating System",id:"windows-operating-system",level:3},{value:"Verify the SHA256 Hash",id:"verify-the-sha256-hash",level:4},{value:"Verify the code signature",id:"verify-the-code-signature",level:4},{value:"For Firefly 1.2.0 and earlier",id:"for-firefly-120-and-earlier",level:5},{value:"For Firefly 1.3.0 and later",id:"for-firefly-130-and-later",level:5},{value:"MacOS Operating System",id:"macos-operating-system",level:3},{value:"Verify the SHA256 Hash",id:"verify-the-sha256-hash-1",level:4},{value:"Verify the code signature",id:"verify-the-code-signature-1",level:4},{value:"Prerequisites",id:"prerequisites",level:5},{value:"Linux Operating System",id:"linux-operating-system",level:3},{value:"Verify the SHA256 Hash",id:"verify-the-sha256-hash-2",level:4},{value:"Prerequisites",id:"prerequisites-1",level:5},{value:"Verify the code signature",id:"verify-the-code-signature-2",level:4}],m={toc:s};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"firefly-shimmer"},"Firefly Shimmer"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Firefly Shimmer is Shimmer's official wallet. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Website"),": ",(0,r.kt)("a",{parentName:"p",href:"https://firefly.iota.org/"},"https://firefly.iota.org/")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code Repository"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly/tree/stardust-develop"},"https://github.com/iotaledger/firefly")),(0,r.kt)("h2",{id:"verify-your-firefly-desktop-download"},"Verify your Firefly Desktop Download"),(0,r.kt)("p",null,"When you download Firefly Desktop, you should verify its authenticity to make sure that you downloaded the correct one from the IOTA Foundation GitHub repository. In this how-to guide, you learn how to verify various Firefly Desktop downloads."),(0,r.kt)("p",null,"You can verify the authenticity of the Firefly Desktop by checking its SHA256 hash and code signature. The instructions for both of these steps differ, depending on your operating system."),(0,r.kt)("h3",{id:"windows-operating-system"},"Windows Operating System"),(0,r.kt)("h4",{id:"verify-the-sha256-hash"},"Verify the SHA256 Hash"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a command-line interface.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a SHA256 hash of the Firefly Desktop ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," file. Replace the path with the path to your Firefly ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," file."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"certUtil -hashfile path\\to\\firefly-desktop-version.exe SHA256\n")),(0,r.kt)("p",null,"For example, if the file is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Users\\yourname\\Downloads")," directory, do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"certUtil -hashfile C:\\Users\\yourname\\Downloads\\firefly-desktop-1.0.0.exe SHA256\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Compare your SHA256 hash with the one in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/firefly/releases"},"release notes")," and make sure that they match.")),(0,r.kt)("h4",{id:"verify-the-code-signature"},"Verify the code signature"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Right-click on ",(0,r.kt)("inlineCode",{parentName:"p"},"firefly-desktop-version.exe"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Digital Signatures")," > ",(0,r.kt)("strong",{parentName:"p"},"Details")," > ",(0,r.kt)("strong",{parentName:"p"},"View Certificate"),"."))),(0,r.kt)("h5",{id:"for-firefly-120-and-earlier"},"For Firefly 1.2.0 and earlier"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Certification Path tab, make sure that the path matches the following information:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DigiCert."),(0,r.kt)("li",{parentName:"ul"},"DigiCert SHA2 Assured Code Signing CA."),(0,r.kt)("li",{parentName:"ul"},"IOTA Stiftung."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Make sure that the Certificate status reads "This certificate is OK.".'))),(0,r.kt)("h5",{id:"for-firefly-130-and-later"},"For Firefly 1.3.0 and later"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Certification Path tab, make sure that the path matches the following information:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sectigo (AAA)."),(0,r.kt)("li",{parentName:"ul"},"Sectigo Public Code Signing Root R46."),(0,r.kt)("li",{parentName:"ul"},"Sectigo Public Code Signing CA R36."),(0,r.kt)("li",{parentName:"ul"},"IOTA Stiftung."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Make sure that the Certificate status reads, "This certificate is OK.".'))),(0,r.kt)("h3",{id:"macos-operating-system"},"MacOS Operating System"),(0,r.kt)("h4",{id:"verify-the-sha256-hash-1"},"Verify the SHA256 Hash"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Terminal (in ",(0,r.kt)("inlineCode",{parentName:"p"},"/Applications/Utilities/Terminal"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a SHA256 hash of the Firefly Desktop ",(0,r.kt)("inlineCode",{parentName:"p"},".dmg")," file. Replace the path with the path to your Firefly ",(0,r.kt)("inlineCode",{parentName:"p"},".dmg")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"shasum -a 256 /path/to/firefly-desktop-version.dmg\n")),(0,r.kt)("p",{parentName:"li"},"For example, if the file is in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Downloads"),", do the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"shasum -a 256 ~/Downloads/firefly-desktop-1.0.0.dmg\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Compare your SHA256 hash with the one in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly/releases"},"release notes")," and make sure that they match."))),(0,r.kt)("h4",{id:"verify-the-code-signature-1"},"Verify the code signature"),(0,r.kt)("h5",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To follow these instructions you need the ",(0,r.kt)("a",{parentName:"p",href:"https://www.ics.uci.edu/~pattis/common/handouts/macmingweclipse/allexperimental/macxcodecommandlinetools.html"},"Xcode Command Line Tools"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Terminal (in ",(0,r.kt)("inlineCode",{parentName:"p"},"/Applications/Utilities/Terminal"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Firefly.app")," file's signature. Replace the path with the path to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Firefly.app")," file. This command confirms whether the code binaries are actually signed, the signature is valid, all the sealed components are unaltered, and the signature passes some basic consistency checks."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"codesign -d -vv /path/to/Firefly.app\n")),(0,r.kt)("p",{parentName:"li"},"For example, if the file is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/Applications")," directory, do the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"codesign -d -vv /Applications/Firefly.app\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure that the following information matches the output of the command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Identifier=org.iota.firefly\nAuthority=Developer ID Application: IOTA Stiftung (UG77RJKZHH)\nAuthority=Developer ID Certification Authority\nAuthority=Apple Root CA\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test the signature against system policies. Replace the path with the path to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Firefly.app")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"spctl -a -vv path/to/Firefly.app\n")),(0,r.kt)("p",{parentName:"li"},"For example, if the file is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/Applications")," directory, do the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"spctl -a -vv /Applications/Firefly.app\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure that the following information matches the output of the command (assuming Firefly is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/Applications")," directory):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"/Applications/Firefly.app: accepted\nsource=Developer ID\norigin=Developer ID Application: IOTA Stiftung (UG77RJKZHH)\n")))),(0,r.kt)("h3",{id:"linux-operating-system"},"Linux Operating System"),(0,r.kt)("h4",{id:"verify-the-sha256-hash-2"},"Verify the SHA256 Hash"),(0,r.kt)("h5",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("p",null,"You will need the ",(0,r.kt)("inlineCode",{parentName:"p"},"sha256sum")," package, which is included with most Linux distributions."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Terminal.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a SHA256 hash of the Firefly Desktop executable file. Replace the path with the path to your Firefly executable file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sha256sum path/to/firefly-desktop-version.AppImage\n")),(0,r.kt)("p",{parentName:"li"},"For example, if the file is in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Downloads"),", do the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sha256sum ~/Downloads/firefly-desktop-1.0.0.AppImage\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Compare your SHA256 hash with the one in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly/releases"},"release notes")," and make sure that they match."))),(0,r.kt)("h4",{id:"verify-the-code-signature-2"},"Verify the code signature"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the .asc file in the Assets section of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly/releases"},"release notes"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the Firefly GPG key from keyserver.ubuntu.com."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --keyserver keyserver.ubuntu.com --recv 466385BD0B40D9550F93C04746A440CCE5664A64\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure that the following information matches the output of the command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gpg: key 46A440CCE5664A64: public key "IOTA Foundation (IOTA Foundation Identity) <contact@iota.org>"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the signature."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --verify path/to/firefly-desktop-version.AppImage.asc path/to/firefly-desktop-version.AppImage\n")),(0,r.kt)("p",{parentName:"li"},"For example, if the .asc and .AppImage files are both in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Downloads"),", do the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --verify ~/Downloads/firefly-desktop-1.0.0.AppImage.asc ~/Downloads/firefly-desktop-1.0.0.AppImage\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure that the following information matches the output of the command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gpg: Good signature from "IOTA Foundation (IOTA Foundation Identity) <contact@iota.org>"\n')))))}h.isMDXComponent=!0}}]);