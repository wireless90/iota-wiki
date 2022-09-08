"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29514,42295],{65172:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ae});var a=n(67294),r=n(86010),l=n(79488),o=n(23702),c=n(78259),i=n(60246),s=n(58801),d=n(84432),u=n(52999),m=n(97325),p=n(72957),b=n(43266);const h="backToTopButton_SdI4",v="backToTopButtonShow_mWsi";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,r]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:o,cancelScroll:c}=(0,p.Ct)();return(0,p.RF)(((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(l.current?l.current=!1:a>=o?(c(),r(!1)):a<t?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,b.S)((e=>{e.location.hash&&(l.current=!0,r(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,h,e&&v),type:"button",onClick:t})}var E=n(76775),g=n(13488),_=n(20107),k=n(27279),C=n(87462);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N="collapseSidebarButton_Cq4q",S="collapseSidebarButtonIcon_eHqP";function y(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",N),onClick:t},a.createElement(I,{className:S}))}var w=n(65830),Z=n(43768);const D=Symbol("EmptyContext"),T=a.createContext(D);function x(e){let{children:t}=e;const[n,r]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:r})),[n]);return a.createElement(T.Provider,{value:l},t)}var P=n(54639),L=n(69003),A=n(83699),B=n(51048);function M(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function V(e){let{item:t,onItemClick:n,activePath:l,level:i,index:s,...d}=e;const{items:u,label:m,collapsible:p,className:b,href:h}=t,{docs:{sidebar:{autoCollapseCategories:v}}}=(0,_.L)(),f=function(e){const t=(0,B.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),E=(0,c._F)(t,l),g=(0,L.Mg)(h,l),{collapsed:k,setCollapsed:I}=(0,P.u)({initialState:()=>!!p&&(!E&&t.collapsed)}),{expandedItem:N,setExpandedItem:S}=function(){const e=(0,a.useContext)(T);if(e===D)throw new Z.i6("DocSidebarItemsExpandedStateProvider");return e}(),y=function(e){void 0===e&&(e=!k),S(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:r}=e;const l=(0,Z.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:E,collapsed:k,updateCollapsed:y}),(0,a.useEffect)((()=>{p&&N&&N!==s&&v&&I(!0)}),[p,N,s,I,v]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},b)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(A.Z,(0,C.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!h&&p,"menu__link--active":E}),onClick:p?e=>{null==n||n(t),h?y(!1):(e.preventDefault(),y())}:()=>{null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":p?!k:void 0,href:p?null!=f?f:"#":f},d),m),h&&p&&a.createElement(M,{categoryLabel:m,onClick:e=>{e.preventDefault(),y()}})),a.createElement(P.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(U,{items:u,tabIndex:k?-1:0,onItemClick:n,activePath:l,level:i+1})))}var F=n(2735),H=n(86507);const W="menuExternalLink_iv3S";function R(e){let{item:t,onItemClick:n,activePath:l,level:i,index:s,...d}=e;const{href:u,label:m,className:p}=t,b=(0,c._F)(t,l),h=(0,F.Z)(u);return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",p),key:m},a.createElement(A.Z,(0,C.Z)({className:(0,r.Z)("menu__link",!h&&W,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:u},h&&{onClick:n?()=>n(t):void 0},d),m,!h&&a.createElement(H.Z,null)))}const z="menuHtmlItem_DqR3";function q(e){let{item:t,level:n,index:l}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),i&&[z,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}function Y(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(V,(0,C.Z)({item:t},n));case"html":return a.createElement(q,(0,C.Z)({item:t},n));default:return a.createElement(R,(0,C.Z)({item:t},n))}}function G(e){let{items:t,...n}=e;return a.createElement(x,null,t.map(((e,t)=>a.createElement(Y,(0,C.Z)({key:t,item:e,index:t},n)))))}const U=(0,a.memo)(G);var K=n(30868);function O(e,t,n){const r=(l=n).reduce(((e,t)=>{const n=(0,K.yW)(t);return e.path.split("/").length<=n.path.split("/").length?e:n}),(0,K.yW)(l[0]));var l;return(0,a.useMemo)((()=>{return n=[t,e,r].filter(Boolean),Array.from(new Set(n));var n}),[t,e,r])}const Q="localStorage";function j(e){if(void 0===e&&(e=Q),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,J||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),J=!0),null}var t}let J=!1;const X={get:()=>null,set:()=>{},del:()=>{}};function $(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:t,set:t,del:t}}(e);const n=j(null==t?void 0:t.persistence);return null===n?X:{get:()=>{try{return n.getItem(e)}catch(t){return console.error("Docusaurus storage error, can't get key="+e,t),null}},set:t=>{try{n.setItem(e,t)}catch(a){console.error("Docusaurus storage error, can't set "+e+"="+t,a)}},del:()=>{try{n.removeItem(e)}catch(t){console.error("Docusaurus storage error, can't delete key="+e,t)}}}}const ee=e=>"wiki-preferred-version-"+e,te=(e,t,n)=>{$(ee(e),{persistence:t}).set(n)},ne=(e,t)=>$(ee(e),{persistence:t}).get(),ae=(e,t)=>{$(ee(e),{persistence:t}).del()};function re(){const{pathname:e}=(0,E.TH)(),t=function(e){const t=[],n=(0,K._r)();for(const a in n){const r=n[a];e.startsWith(r.path)&&t.push(a)}return t.sort(((e,t)=>e<t?1:t<e?-1:0)),t}(e);if(t.length<2)return null;const n=function(e){const t={activeVersion:void 0,activeDoc:void 0,alternateDocVersions:{}};return e.forEach((e=>{const n=(0,K.Iw)(e);n.activeDoc&&(t.activeDoc=n.activeDoc,t.activeVersion=n.activeVersion)})),e.forEach((e=>{t.activeDoc&&(0,K.zh)(e).versions.forEach((e=>{e.docs.forEach((n=>{n.id===t.activeDoc.id&&(t.alternateDocVersions[e.label]=n)}))}))})),t}(t),r=function(e){const t=[];return e.forEach((e=>{t.push(...(0,K.gB)(e))})),t}(t),{preferredVersion:l,savePreferredVersionName:o}=function(e,t){const n=(0,B.Z)(),r=e.split("/")[1],l="localStorage",o=n?ne(r,l):null,c=t.reduce(((e,t)=>{const n=(0,K.zh)(t);return n.versions[0].label===o?n.versions[0]:e}),null);return!c&&o&&ae(r,l),{preferredVersion:c,savePreferredVersionName:(0,a.useCallback)((e=>{n&&te(r,l,e)}),[r,n])}}(e,t),c=r.map((e=>{var t;const a=null!=(t=null==n?void 0:n.alternateDocVersions[e.label])?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(e);return{isNavLink:!0,label:e.label,to:a.path,isActive:()=>e===(null==n?void 0:n.activeVersion),onClick:()=>{o(e.label)}}})),i=O(l,n.activeVersion,t)[0],{collapsed:s,toggleCollapsed:d}=(0,P.u)({initialState:!0});return a.createElement("div",{className:"version-picker"},a.createElement("div",{className:"version-picker__toggle menu__link menu__link--sublist",onClick:e=>{e.preventDefault(),d()}},"Version: ",i.label),a.createElement(P.z,{lazy:!0,as:"ul",className:"version-picker__list menu__list",collapsed:s},c.map(((e,t)=>a.createElement("li",{key:t,className:"version-picker__list-item menu__list-item"},a.createElement(A.Z,(0,C.Z)({},e,{className:"version-picker__link menu__link",activeClassName:"version-picker__link--active"}),e.label))))))}const le="menu_Y1UP",oe="menuWithAnnouncementBar_fPny";function ce(e){let{path:t,sidebar:n,className:l}=e;const c=function(){const{isActive:e}=(0,w.nT)(),[t,n]=(0,a.useState)(e);return(0,p.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",le,c&&oe,l)},a.createElement(re,null),a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:n,activePath:t,level:1})))}const ie="sidebar_oDHW",se="sidebarWithHideableNavbar_eLdD",de="sidebarHidden_Jvsw",ue="sidebarLogo_IZVG";function me(e){let{path:t,sidebar:n,onCollapse:l,isHidden:o}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,_.L)();return a.createElement("div",{className:(0,r.Z)(ie,c&&se,o&&de)},c&&a.createElement(k.Z,{tabIndex:-1,className:ue}),a.createElement(ce,{path:t,sidebar:n}),i&&a.createElement(y,{onClick:l}))}const pe=a.memo(me);var be=n(53086),he=n(52600);const ve=e=>{let{sidebar:t,path:n}=e;const l=(0,he.e)();return a.createElement(a.Fragment,null,a.createElement(re,null),a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1})))};function fe(e){return a.createElement(be.Zo,{component:ve,props:e})}const Ee=a.memo(fe);function ge(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(pe,e),r&&a.createElement(Ee,e))}const _e="expandButton_sRmC",ke="expandButtonIcon_YyMF";function Ce(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:_e,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:ke}))}const Ie="docSidebarContainer_otbp",Ne="docSidebarContainerHidden_Qnl4";function Se(e){var t;let{children:n}=e;const r=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function ye(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:c}=(0,E.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,Ie,n&&Ne),onTransitionEnd:e=>{e.currentTarget.classList.contains(Ie)&&n&&s(!0)}},a.createElement(Se,null,a.createElement(ge,{sidebar:t,path:c,onCollapse:d,isHidden:i})),i&&a.createElement(Ce,{toggleSidebar:d}))}const we={docMainContainer:"docMainContainer_BYXc",docMainContainerEnhanced:"docMainContainerEnhanced_UZmb",docItemWrapperEnhanced:"docItemWrapperEnhanced_GQbK"};function Ze(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.V)();return a.createElement("main",{className:(0,r.Z)(we.docMainContainer,(t||!l)&&we.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",we.docItemWrapper,t&&we.docItemWrapperEnhanced)},n))}const De="docPage_cDO8",Te="docsWrapper_HdE8";function xe(e){let{children:t}=e;const n=(0,d.V)(),[r,l]=(0,a.useState)(!1);return a.createElement(u.Z,{wrapperClassName:Te},a.createElement(f,null),a.createElement("div",{className:De},n&&a.createElement(ye,{sidebar:n.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:l}),a.createElement(Ze,{hiddenSidebarContainer:r},t)))}var Pe=n(42295),Le=n(71047);function Ae(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(Pe.default,null);const{docElement:u,sidebarName:m,sidebarItems:p}=n;return a.createElement(a.Fragment,null,a.createElement(Le.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:p},a.createElement(xe,null,u)))))}},42295:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),r=n(97325),l=n(79488),o=n(52999);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},58801:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>o});var a=n(67294),r=n(43768);const l=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);