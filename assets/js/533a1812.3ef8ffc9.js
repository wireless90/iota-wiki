"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[12873],{81473:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],s={description:"Learn how to install and run a Hornet node using Docker Compose.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","Linux","Install","Docker Compose","Build","how to"]},c="Using Docker Compose",p={unversionedId:"getting_started/using_docker_compose",id:"getting_started/using_docker_compose",title:"Using Docker Compose",description:"Learn how to install and run a Hornet node using Docker Compose.",source:"@site/external/hornet/documentation/docs/getting_started/using_docker_compose.md",sourceDirName:"getting_started",slug:"/getting_started/using_docker_compose",permalink:"/hornet/getting_started/using_docker_compose",draft:!1,editUrl:"https://github.com/gohornet/hornet/edit/mainnet/external/hornet/documentation/docs/getting_started/using_docker_compose.md",tags:[],version:"current",frontMatter:{description:"Learn how to install and run a Hornet node using Docker Compose.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","Linux","Install","Docker Compose","Build","how to"]},sidebar:"mySidebar",previous:{title:"Using Docker",permalink:"/hornet/getting_started/using_docker"},next:{title:"Bootstrapping the Chrysalis Phase 2 Hornet Node From the Genesis Snapshot",permalink:"/hornet/getting_started/bootstrap_from_a_genesis_snapshot"}},l={},u=[{value:"Using Your Own Docker Compose File For Running Hornet",id:"using-your-own-docker-compose-file-for-running-hornet",level:2},{value:"Build Your Own Image Using Docker Compose",id:"build-your-own-image-using-docker-compose",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-docker-compose"},"Using Docker Compose"),(0,a.kt)("p",null,"Make sure that you have read ",(0,a.kt)("a",{parentName:"p",href:"/hornet/getting_started/using_docker"},"Using Docker")," before you continue reading as this article is for advanced users. You can find more information on Docker Compose in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"official Docker Compose documentation"),"."),(0,a.kt)("h2",{id:"using-your-own-docker-compose-file-for-running-hornet"},"Using Your Own Docker Compose File For Running Hornet"),(0,a.kt)("p",null,"Docker Compose is a tool on top of the Docker engine that help you to define Docker parameters in a structured way using a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file. You can create and start the container with a single ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," command based on your configuration."),(0,a.kt)("p",null,"To do so, you will need to create ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," in the same directory as described in the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/getting_started/using_docker"},"Using Docker")," article:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext{5}"},".\n\u251c\u2500\u2500 config.json\n\u251c\u2500\u2500 peering.json\n\u251c\u2500\u2500 profiles.json\n\u251c\u2500\u2500 docker-compose.yml      <NEWLY ADDED FILE>\n\u251c\u2500\u2500 mainnetdb\n\u251c\u2500\u2500 p2pstore\n\u2514\u2500\u2500 snapshots\n    \u2514\u2500\u2500 mainnet\n")),(0,a.kt)("p",null,"The docker-compose.yml file should have the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"version: '3'\nservices:\n  hornet:\n    container_name: hornet\n    image: gohornet/hornet:latest\n    network_mode: host\n    restart: always\n    ulimits:\n      nofile:\n        soft: 8192\n        hard: 8192\n    stop_grace_period: 5m\n    cap_drop:\n      - ALL\n    volumes:\n      - ./config.json:/app/config.json:ro\n      - ./peering.json:/app/peering.json\n      - ./profiles.json:/app/profiles.json:ro\n      - ./mainnetdb:/app/mainnetdb\n      - ./p2pstore:/app/p2pstore\n      - ./snapshots/mainnet:/app/snapshots/mainnet\n")),(0,a.kt)("p",null,"You can run the following command in the current directory to create and start a new Hornet container in detached mode (as daemon):"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")),(0,a.kt)("p",null,"You can find more details on how to configure Hornet in the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/post_installation"},"post installation")," section."),(0,a.kt)("h2",{id:"build-your-own-image-using-docker-compose"},"Build Your Own Image Using Docker Compose"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Follow this step only if you want to run Hornet via Docker Compose."))),(0,a.kt)("p",null,"If you are using any architecture other than ",(0,a.kt)("inlineCode",{parentName:"p"},"amd64/x86_64"),", you should edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and set the correct architecture where noted."),(0,a.kt)("p",null,"You can run the following command to build the image and run Hornet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up\n")),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL+C")," to stop the container."),(0,a.kt)("p",null,"You can add ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," to run detached."),(0,a.kt)("p",null,"To gracefully stop the container, you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose down\n")))}m.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(g,i(i({ref:n},l),{},{components:t})):o.createElement(g,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);