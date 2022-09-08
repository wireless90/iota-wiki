"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[49270],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(o),h=i,y=d["".concat(s,".").concat(h)]||d[h]||c[h]||n;return o?r.createElement(y,a(a({ref:t},p),{},{components:o})):r.createElement(y,a({ref:t},p))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<n;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},79424:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=o(87462),i=(o(67294),o(3905));const n={description:"Keys to writing a good tutorial.",image:"/img/iota-wiki.png",tags:["write","tutorial","user story"]},a="Write a Good Tutorial",l={unversionedId:"contribute-to-wiki/how_tos/write_a_good_tutorial",id:"contribute-to-wiki/how_tos/write_a_good_tutorial",title:"Write a Good Tutorial",description:"Keys to writing a good tutorial.",source:"@site/internal/learn/contribute-to-wiki/how_tos/write_a_good_tutorial.md",sourceDirName:"contribute-to-wiki/how_tos",slug:"/contribute-to-wiki/how_tos/write_a_good_tutorial",permalink:"/learn/contribute-to-wiki/how_tos/write_a_good_tutorial",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/internal/learn/contribute-to-wiki/how_tos/write_a_good_tutorial.md",tags:[{label:"write",permalink:"/learn/tags/write"},{label:"tutorial",permalink:"/learn/tags/tutorial"},{label:"user story",permalink:"/learn/tags/user-story"}],version:"current",lastUpdatedAt:1659304261,formattedLastUpdatedAt:"Jul 31, 2022",frontMatter:{description:"Keys to writing a good tutorial.",image:"/img/iota-wiki.png",tags:["write","tutorial","user story"]},sidebar:"learn",previous:{title:"Create an Issue",permalink:"/learn/contribute-to-wiki/how_tos/create_an_issue"},next:{title:"Set Up Documentation",permalink:"/learn/contribute-to-wiki/how_tos/documentation_setup"}},s={},u=[{value:"Get the Users Started",id:"get-the-users-started",level:2},{value:"Set a Clear Goal and Milestones",id:"set-a-clear-goal-and-milestones",level:2},{value:"Milestones",id:"milestones",level:3},{value:"Test Your Tutorial",id:"test-your-tutorial",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"write-a-good-tutorial"},"Write a Good Tutorial"),(0,i.kt)("p",null,"Tutorials are practical lessons which introduce users to a new software or feature. Your tutorial should be\n",(0,i.kt)("strong",{parentName:"p"},"learning oriented"),", and it should only get users started, not turn them into experts. The following article\ndescribes a few keys to a good tutorial."),(0,i.kt)("admonition",{title:"Tutorial Template",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The IOTA Wiki hosts\na ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iota-wiki/tutorial-template/blob/main/documentation/docs/template.md"},"tutorial template"),".")),(0,i.kt)("h2",{id:"get-the-users-started"},"Get the Users Started"),(0,i.kt)("p",null,"Unlike a how to guide, a tutorial needs to start at the very beginning. Your tutorial should provide every single step\nneeded to achieve the goal. Users can skip whatever parts they deem unnecessary. You should list any prerequisites right\nat the beginning so users can prepare anything they need before starting."),(0,i.kt)("h2",{id:"set-a-clear-goal-and-milestones"},"Set a Clear Goal and Milestones"),(0,i.kt)("p",null,"Your tutorial should have a clear goal, and possibly some milestones along the way. The users should be able to know\nwhat they are going to achieve right from the start, so they know what to expect to learn. Since your tutorial will\nlikely have many steps, you should tell the user exactly what to expect with milestones."),(0,i.kt)("p",null,"You should not give the users many options. Your tutorial should only follow a happy path. If they want a full list of\noptions they can follow a how to guide, or look up the reference."),(0,i.kt)("h3",{id:"milestones"},"Milestones"),(0,i.kt)("p",null,"Users will need to follow several steps to achieve the tutorial's goal. You should only describe these steps, and avoid\ngoing into lengthy explanations or abstractions. If you need to explain something, you should only introduce the topic\nand link to a full length explanation if needed. You should provide expected outputs, and\nresponses so the users know if they are being successful."),(0,i.kt)("h2",{id:"test-your-tutorial"},"Test Your Tutorial"),(0,i.kt)("p",null,"Every step in your tutorial should work every single time. It is your job to guide the user through a happy paths which\nmust work every time. If you need a specific version of any software you should state this in the prerequisites."))}c.isMDXComponent=!0}}]);