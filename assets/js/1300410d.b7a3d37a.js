"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[38519],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=i,d=c["".concat(l,".").concat(k)]||c[k]||h[k]||s;return a?n.createElement(d,r(r({ref:t},m),{},{components:a})):n.createElement(d,r({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72674:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return h}});var n=a(87462),i=a(63366),s=(a(67294),a(3905)),r=["components"],o={description:"The tip selection algorithm picks messages that shall be approved when issuing a message. It allows the Tangle to grow in a stable and secure way, with quick approval and finality times.",image:"https://i.imgur.com/a9FTyyg.png",slug:"4.3TipSelectionAlgorithm",keywords:["Tips Pool","strong tips","weak tips","random","selection"]},l="4.3 Tip Selection Algorithm",p={unversionedId:"4.3 Tip Selection Algorithm",id:"4.3 Tip Selection Algorithm",title:"4.3 Tip Selection Algorithm",description:"The tip selection algorithm picks messages that shall be approved when issuing a message. It allows the Tangle to grow in a stable and secure way, with quick approval and finality times.",source:"@site/content/build/iota-2.0-research-specifications/4.3 Tip Selection Algorithm.md",sourceDirName:".",slug:"/4.3TipSelectionAlgorithm",permalink:"/IOTA-2.0-Research-Specifications/4.3TipSelectionAlgorithm",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus/content/build/iota-2.0-research-specifications/4.3 Tip Selection Algorithm.md",tags:[],version:"current",frontMatter:{description:"The tip selection algorithm picks messages that shall be approved when issuing a message. It allows the Tangle to grow in a stable and secure way, with quick approval and finality times.",image:"https://i.imgur.com/a9FTyyg.png",slug:"4.3TipSelectionAlgorithm",keywords:["Tips Pool","strong tips","weak tips","random","selection"]},sidebar:"tutorialSidebar",previous:{title:"4.2 Timestamps",permalink:"/IOTA-2.0-Research-Specifications/4.2Timestamps"},next:{title:"4.4 Solidification",permalink:"/IOTA-2.0-Research-Specifications/4.4Solidification"}},m={},h=[{value:"4.3.1 Introduction",id:"431-introduction",level:2},{value:"4.3.2 Definitions",id:"432-definitions",level:2},{value:"4.3.2.1 Approval Switch",id:"4321-approval-switch",level:3},{value:"4.3.2.2 Branch",id:"4322-branch",level:3},{value:"4.3.2.3 Strong and Weak Messages",id:"4323-strong-and-weak-messages",level:3},{value:"4.3.3 Tip Pools",id:"433-tip-pools",level:2},{value:"4.3.3.1 Construction of the Tip Pools",id:"4331-construction-of-the-tip-pools",level:3},{value:"4.3.3.2 Update of the Tip Pools",id:"4332-update-of-the-tip-pools",level:3},{value:"4.3.4 R-URTS",id:"434-r-urts",level:2}],c={toc:h};function k(e){var t=e.components,a=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"43-tip-selection-algorithm"},"4.3 Tip Selection Algorithm"),(0,s.kt)("h2",{id:"431-introduction"},"4.3.1 Introduction"),(0,s.kt)("p",null,"The tip selection algorithm is the method by which messages are selected for approval by other issued messages joining the network.  This approval mechanism represents \u201cbelief\u201d in the Tangle: If message ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," approves message ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),", this implies that the node issuing ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," believes that ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),', and possibly its past cone, are "good". '),(0,s.kt)("p",null,"The tip selection algorithm allows the Tangle to grow in a stable and secure way, with quick approval and finality times. "),(0,s.kt)("p",null,'We call the new Tip-Section algorithm "R-URTS", which means "Restricted Uniform Random Tip Selection". Here we summarize the main differences that the new Tip Selection Algorithm has, compared to the legacy version:'),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Uniform Selection:")," Unlike the old Random Walk tip selection, we will use a much faster and simpler solution that will select uniformly among a subset of eligible tips. "),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Approval Switch Mechanism:")," A new mechanism that will allow us to keep a clear Tangle while preventing orphanage from splits due to disliked branches. ")),(0,s.kt)("p",null,"Although we will not be using here, the new message layout (more information in ",(0,s.kt)("a",{parentName:"p",href:"./2.2MessageLayout"},"Section 2.2 - Message Layout"),") has the capabilities for a message to have a non-fixed number of messages that it approves (parents), which range from two to eight ",". This can be used to develop tip spam protection mechanisms among other purposes. We will denote the number of parents being used in the algorithm by ",(0,s.kt)("em",{parentName:"p"},"Parental Number"),". "),(0,s.kt)("p",null,"The Tip Selection Algorithm specification depends on the following specifications:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./2.2MessageLayout"},"2.2 - Message Layout")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./2.4DataFlow"},"2.4 - Data Flow")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./4.1TheTangle"},"4.1 - The Tangle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./5.2LedgerState"},"5.2 - Ledger State"))),(0,s.kt)("h2",{id:"432-definitions"},"4.3.2 Definitions"),(0,s.kt)("p",null,"One of the main improvements of the new Tip Selection Algorithm comes from its ability to keep both a clean non-conflicting subtangle, as well as to ignore the existence of conflicts in its selection, hence emulating the ability that ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/protocol-rfcs/blob/master/text/0005-white-flag/0005-white-flag"},"Chrysalis White Flag"),' approach has of being unsplittable. In IOTA 2.0, those properties come from the approval switch mechanism. In the rest of this subsection, we present the theory of the approval switch, which classify approvals and messages in "weak" and "strong". This information is necessary to define the ',(0,s.kt)("em",{parentName:"p"},"tip pools"),", i.e., the sets of (recent) messages which are selectable by the Tip Selection Algorithm (we provide a more complete description of tip pools later in this document)."),(0,s.kt)("h3",{id:"4321-approval-switch"},"4.3.2.1 Approval Switch"),(0,s.kt)("p",null,"In order to properly define and explain the approval switch mechanism, we will need some extra defintions. We also refer to the basic concept of branches (",(0,s.kt)("a",{parentName:"p",href:"./5.2LedgerState"},"Section 5.2 - Ledger State"),") and validity (",(0,s.kt)("a",{parentName:"p",href:"./4.1TheTangle"},"Section 4.1 - The Tangle"),"), as they are required to the understanding of some of the definitions below.  "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Tip"),": A message is considered a tip (by a node) if it is selectable by the Tip Selection Algorithm, i.e. it is an element of any ",(0,s.kt)("em",{parentName:"li"},"Tip Pool")," (of that node). In general, it is perceived as a message that has yet to receive any direct approvers."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Eligibility"),": A Message is said ",(0,s.kt)("em",{parentName:"li"},"eligible")," if:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"It is weakly valid;"),(0,s.kt)("li",{parentName:"ul"},"It passes the timestamp check with level of knowledge at least 2;"),(0,s.kt)("li",{parentName:"ul"},"All its parents are also eligible messages."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Approval switch"),": : A binary field with values ",(0,s.kt)("strong",{parentName:"li"},"strong")," and ",(0,s.kt)("strong",{parentName:"li"},"weak"),"  in the message associated with each of its parents, filled by its issuer node. ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Strong approval"),":  Represents that the issuer node declares that the message and its entire past cone are liked. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Weak approval"),":  Represents that the issuer node declares that the message and its payload is liked, but its past cone is not completely liked. ")))),(0,s.kt)("h3",{id:"4322-branch"},"4.3.2.2 Branch"),(0,s.kt)("p",null,"Furthermore, to properly define the tip pool, additional definitions derived by the branch are required. Here we give a summarized definition for the sake of understanding. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Monotonically Liked Branch"),": A branch is monotonically liked if all of its transactions are individually liked. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Monotonically Liked Message"),": A message is monotonically liked if its aggregated branch is monotonically liked."))),(0,s.kt)("h3",{id:"4323-strong-and-weak-messages"},"4.3.2.3 Strong and Weak Messages"),(0,s.kt)("p",null,"In a heuristic way, one can think of a monotonically liked message as a  message that has a liked payload and that all other payloads that depend on it are also liked.\nWith this we can classify the messages: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Strong Messages"),": We say a message ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," is strong (for a node) if it is:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Eligible;"),(0,s.kt)("li",{parentName:"ul"},"Monotonically liked."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Weak Messages"),": We say a message ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," is weak (for a node) it is:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Eligible;"),(0,s.kt)("li",{parentName:"ul"},"Contains a liked payload;"),(0,s.kt)("li",{parentName:"ul"},"It is not monotonically liked with level of knowledge at least 2. ")))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://i.imgur.com/a9FTyyg.png"},(0,s.kt)("img",{parentName:"a",src:"https://i.imgur.com/a9FTyyg.png",alt:"An example of strong and weak parents"})),"\n",(0,s.kt)("strong",{parentName:"p"},"Image 4.3.1:")," An example of strong and weak parents. Observe that although B is in the past cone of I, it is not in its strong past cone. "),(0,s.kt)("h2",{id:"433-tip-pools"},"4.3.3 Tip Pools"),(0,s.kt)("p",null,"The tip is a product of the construction of the Tip Pools, and in general it represents messages that are yet to be directly approved by other messages. The tip pools are built by filtering the messages that arrive from the neighbors, checking which ones are proper to be selectable by the algorithm. In this subsection we will define such filters and classifications that are used to make the Tip Pools. "),(0,s.kt)("p",null,"Differently from the legacy implementation, we will not have a single pool, but instead two, divided according to the new concept of the ",(0,s.kt)("em",{parentName:"p"},"Approval Switch")," mechanism. "),(0,s.kt)("h3",{id:"4331-construction-of-the-tip-pools"},"4.3.3.1 Construction of the Tip Pools"),(0,s.kt)("p",null,"We will define a sequence of pools, each one selected by filtering the previous one regarding one condition, until we conclude with the two elements used in the Tip Selection Algorithm: the ",(0,s.kt)("em",{parentName:"p"},"Strong Tips Pool")," and the ",(0,s.kt)("em",{parentName:"p"},"Weak Tip Pool"),". "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Eligible Messages Pool:")," This pool consists of all messages that were also approved by the ",(0,s.kt)("em",{parentName:"p"},"Eligibility Check")," (see ",(0,s.kt)("a",{parentName:"p",href:"./2.4DataFlow"},"Section 2.4 - Data Flow"),").")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Liked Payload Pool:"),' This pool consists of all eligible messages that contain a payload tagged as "liked", i.e. is either data or an individually liked transaction. ')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Strong Tips Pool"),": This pool consists of all strong messages in the ",(0,s.kt)("em",{parentName:"p"},"Liked Payload Pool"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Weak Tips Pool"),": This pool consists of all messages from the ",(0,s.kt)("em",{parentName:"p"},"Liked Payload Pool")," that were not included in the ",(0,s.kt)("em",{parentName:"p"},"Strong Tips Pool"),". "))),(0,s.kt)("p",null,"The two main pools to be used by the tip selection algorithm are the ",(0,s.kt)("em",{parentName:"p"},"Strong Tips Pool")," and the ",(0,s.kt)("em",{parentName:"p"},"Weak Tips Pool"),". Observe that from our definition, each pool in the list is always constructed by performing a filtering in the previous one, but how this filtering will be performed is considered an implementation detail and hence will not be further considered here. "),(0,s.kt)("h3",{id:"4332-update-of-the-tip-pools"},"4.3.3.2 Update of the Tip Pools"),(0,s.kt)("p",null,"There are two types of updates that can be done with the strong and weak tip pools:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Removal"),": Tips are removed when they are approved by other messages. This can happen in two ways:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"When the node issues a message, the selected tips will be removed from the respective tip pools after the Tip Selection Algorithm is performed (we briefly explain the procedure in the ",(0,s.kt)("a",{parentName:"li",href:"#R-URTS"},"R-URTS")," subsection","."),(0,s.kt)("li",{parentName:"ul"},"When a new message is received, its parents shall be removed from the respective tip pools by the ",(0,s.kt)("em",{parentName:"li"},"Tip Manager")," application (further information may be found in the ",(0,s.kt)("a",{parentName:"li",href:"./2.4DataFlow"},"Section 2.4 - Data Flow"),")."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Rearrangement:")," Tips can be changed from the strong tip pool to the weak tip pool, or from the weak tip pool to the strong tip pool if the perception of the branches they belong to changes, this is explained in more details in Section 6.5 - Node Peception Reorganization.")),(0,s.kt)("h2",{id:"434-r-urts"},"4.3.4 R-URTS"),(0,s.kt)("p",null,"We want to reiterate here that, ultimately, the tip selection is a free procedure not enforced by the protocol. Therefore each node may, if it sees worth, to select its approvees in a manual way or following another algorithm of its preference. What we will present here is the standard algorithm, that works both as a suggestion but also as something that the nodes will have implemented and will use by default. "),(0,s.kt)("p",null,"The suggested standard tip selection algorithm is R-URTS (Restricted Uniform Random Tip Selection), which selects messages with uniform probability among the list of tips restricted by some condition.  "),(0,s.kt)("p",null,"Let us give an example for a Tip Selection Algorithm with Parental Number ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),":"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Consider the ",(0,s.kt)("em",{parentName:"li"},"Strong Tips Pool")," and the ",(0,s.kt)("em",{parentName:"li"},"Weak Tip Pools")," updated. "),(0,s.kt)("li",{parentName:"ol"},"The node shall select the first tip from the ",(0,s.kt)("em",{parentName:"li"},"Strong Tips Pool"),"."),(0,s.kt)("li",{parentName:"ol"},"The node shall select tips from numbered ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2")))))," to ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," from the union of the ",(0,s.kt)("em",{parentName:"li"},"Strong Tips Pool")," and the ",(0,s.kt)("em",{parentName:"li"},"Weak Tips Pool"),"."),(0,s.kt)("li",{parentName:"ol"},"The node shall register in the message's ",(0,s.kt)("inlineCode",{parentName:"li"},"Parents type")," field if each selected parent was from the strong or weak tip pools."),(0,s.kt)("li",{parentName:"ol"},"The node shall remove the selected tips from their respective pools. ")))}k.isMDXComponent=!0}}]);