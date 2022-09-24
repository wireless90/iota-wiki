"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22064],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,w=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(w,i(i({ref:t},c),{},{components:r})):n.createElement(w,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>w,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(87462),o=r(67294),a=r(3905);function i(e){var t,r;const{questions:n}=e;(0,o.useEffect)((()=>{setTimeout((()=>{m()}),1e3)}),[n]);const[a,i]=(0,o.useState)(0),[s,l]=(0,o.useState)(!1),[u,c]=(0,o.useState)(0),[p,d]=(0,o.useState)(-1),m=()=>{l(!1),c(0),i(0)};return o.createElement("div",{className:"app"},s?o.createElement("div",{className:"score-section"},o.createElement("p",null,"You scored ",u," out of ",n.length),o.createElement("a",{className:"button button--outline button--primary",onClick:()=>m()},"Replay")):o.createElement(o.Fragment,null,o.createElement("div",{className:"card"},o.createElement("div",{className:"card__header"},o.createElement("h3",null,"Question ",a+1,"/",n.length)),o.createElement("div",{className:"card__body"},null==(t=n[a])?void 0:t.questionText),o.createElement("div",{className:"card__footer"},o.createElement("div",{className:"button-group button-group--block"},null==(r=n[a])?void 0:r.answerOptions.map(((e,t)=>o.createElement("a",{className:"button button--primary "+(p>=0&&e.isCorrect?"button--success":"")+" "+(p!==t||e.isCorrect?"":"button--danger"),key:"answer-"+t,onClick:()=>((e,t)=>{d(t),e&&c(u+1),setTimeout((()=>{const e=a+1;e<n.length?i(e):l(!0),d(-1)}),1e3)})(e.isCorrect,t)},e.answerText))))))))}const s=JSON.parse('[{"questionText":"What is the capital of France?","answerOptions":[{"answerText":"New York","isCorrect":false},{"answerText":"London","isCorrect":false},{"answerText":"Paris","isCorrect":true},{"answerText":"Dublin","isCorrect":false}]},{"questionText":"Who is CEO of Tesla?","answerOptions":[{"answerText":"Jeff Bezos","isCorrect":false},{"answerText":"Elon Musk","isCorrect":true},{"answerText":"Bill Gates","isCorrect":false},{"answerText":"Tony Stark","isCorrect":false}]},{"questionText":"The iPhone was created by which company?","answerOptions":[{"answerText":"Apple","isCorrect":true},{"answerText":"Intel","isCorrect":false},{"answerText":"Amazon","isCorrect":false},{"answerText":"Microsoft","isCorrect":false}]},{"questionText":"How many Harry Potter books are there?","answerOptions":[{"answerText":"1","isCorrect":false},{"answerText":"4","isCorrect":false},{"answerText":"6","isCorrect":false},{"answerText":"7","isCorrect":true}]}]'),l={keywords:["how to"],description:"How to add a Quiz for the IOTA Wiki.",image:"/img/iota-wiki.png"},u="How To Add A Quiz",c={unversionedId:"contribute-to-wiki/how_tos/add_a_quiz",id:"contribute-to-wiki/how_tos/add_a_quiz",title:"How To Add A Quiz",description:"How to add a Quiz for the IOTA Wiki.",source:"@site/internal/learn/contribute-to-wiki/how_tos/add_a_quiz.mdx",sourceDirName:"contribute-to-wiki/how_tos",slug:"/contribute-to-wiki/how_tos/add_a_quiz",permalink:"/learn/contribute-to-wiki/how_tos/add_a_quiz",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/internal/learn/contribute-to-wiki/how_tos/add_a_quiz.mdx",tags:[],version:"current",lastUpdatedAt:1663962608,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{keywords:["how to"],description:"How to add a Quiz for the IOTA Wiki.",image:"/img/iota-wiki.png"},sidebar:"learn",previous:{title:"Requesting a Technical Writer",permalink:"/learn/contribute-to-wiki/how_tos/request_tw"},next:{title:"Third-Party Works",permalink:"/learn/contribute-to-wiki/explanations/third-party_works"}},p={},d=[{value:"Example Quiz",id:"example-quiz",level:2},{value:"Add Your Quiz",id:"add-your-quiz",level:2}],m={toc:d};function w(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-add-a-quiz"},"How To Add A Quiz"),(0,a.kt)("p",null,"You can simply add a Quiz to every page you like in the Wiki!"),(0,a.kt)("h2",{id:"example-quiz"},"Example Quiz"),(0,a.kt)(i,{questions:s,mdxType:"Quiz"}),(0,a.kt)("h2",{id:"add-your-quiz"},"Add Your Quiz"),(0,a.kt)("p",null,"Just add the following lines on top of the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Quiz from '../../../../src/components/Quiz';\nimport questions from './example-questions.json';\n")),(0,a.kt)("p",null,"Make sure that the Quiz path fits your folder structure. You may need to remove or add some ",(0,a.kt)("inlineCode",{parentName:"p"},"../"),"."),(0,a.kt)("p",null,"Add your questions in a seperate ",(0,a.kt)("inlineCode",{parentName:"p"},".json")," file with the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "questionText": "First Question?",\n    "answerOptions": [\n      { "answerText": "1. Answer", "isCorrect": false },\n      { "answerText": "2. Answer", "isCorrect": false },\n      { "answerText": "3. Answer", "isCorrect": true },\n      { "answerText": "4. Answer", "isCorrect": false }\n    ]\n  },\n  ...\n]\n')),(0,a.kt)("p",null,"Now you need to include the Quiz components where you want to show it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n## Your Quiz\n\n<Quiz questions={questions} />\n\n")),(0,a.kt)("p",null,"That's all. Congratulations, you have created your own Quiz!"))}w.isMDXComponent=!0}}]);