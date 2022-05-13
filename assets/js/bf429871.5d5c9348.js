"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4139],{51699:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={keywords:["IOTA Node","Bee Node","Docker","Install","Run","macOS","Windows","Linux"],description:"Install and run a Bee node using Docker.",image:"/img/logo/bee_logo.png"},s="Using Docker",d={unversionedId:"getting_started/docker",id:"getting_started/docker",title:"Using Docker",description:"Install and run a Bee node using Docker.",source:"@site/external/bee/documentation/docs/getting_started/docker.md",sourceDirName:"getting_started",slug:"/getting_started/docker",permalink:"/bee/getting_started/docker",draft:!1,editUrl:"https://github.com/iotaledger/bee/edit/dev/external/bee/documentation/docs/getting_started/docker.md",tags:[],version:"current",frontMatter:{keywords:["IOTA Node","Bee Node","Docker","Install","Run","macOS","Windows","Linux"],description:"Install and run a Bee node using Docker.",image:"/img/logo/bee_logo.png"},sidebar:"mySidebar",previous:{title:"Security 101",permalink:"/bee/getting_started/security_101"},next:{title:"Configuration",permalink:"/bee/configuration"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:2},{value:"Prepare",id:"prepare",level:2},{value:"Run",id:"run",level:2},{value:"Create Username and Password for the Bee Dashboard",id:"create-username-and-password-for-the-bee-dashboard",level:2},{value:"Build Your Own Bee Image",id:"build-your-own-bee-image",level:2},{value:"Managing a Node",id:"managing-a-node",level:2},{value:"Starting an Existing Bee Container",id:"starting-an-existing-bee-container",level:3},{value:"Restarting Bee",id:"restarting-bee",level:3},{value:"Stopping Bee",id:"stopping-bee",level:3},{value:"Displaying Log Output",id:"displaying-log-output",level:3},{value:"Removing a Container",id:"removing-a-container",level:2},{value:"Setup using <code>docker-compose</code>",id:"setup-using-docker-compose",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-docker"},"Using Docker"),(0,r.kt)("p",null,"Bee Docker images (amd64/x86_64 architecture) are available at ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/iotaledger/bee"},"iotaledger/bee")," on Docker Hub."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A recent release of Docker enterprise or community edition. You can find installation instructions in the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"official Docker documentation"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"GIT")),(0,r.kt)("li",{parentName:"ol"},"At least 1GB available RAM")),(0,r.kt)("h2",{id:"clone-the-repository"},"Clone the Repository"),(0,r.kt)("p",null,"Once you have completed all the installation ",(0,r.kt)("a",{parentName:"p",href:"#requirements"},"requirements"),", you can clone the repository by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/iotaledger/bee\ncd bee/\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The next portion of the guide assumes you are executing commands from the root directory of the repository."))),(0,r.kt)("h2",{id:"prepare"},"Prepare"),(0,r.kt)("p",null,"Choose the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," for the network that you want to join: and copy it to ",(0,r.kt)("inlineCode",{parentName:"p"},"/.config.toml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp ./config.chrysalis-<insert network here>.toml config.toml. \n")),(0,r.kt)("p",null,"If you want to use alternative ports, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file."),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("p",null,"You can pull the latest image from ",(0,r.kt)("inlineCode",{parentName:"p"},"iotaledger/bee")," public Docker Hub registry by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull iotaledger/bee:latest && docker tag iotaledger/bee:latest bee:latest\n")),(0,r.kt)("p",null,"We recommend that you run on host network to improve performance.  Otherwise, you are going to have to publish ports using iptables NAT which is slower."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run \\\n  -v $(pwd)/config.toml:/config.toml:ro \\\n  -v $(pwd)/storage:/storage \\\n  -v $(pwd)/snapshots:/snapshots \\\n  --name bee\\\n  --net=host \\\n  --ulimit nofile=8192:8192 \\\n  -d \\\n  bee:latest\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$(pwd)")," Stands for the present working directory. All mentioned directories are mapped to the container, so the Bee in the container persists the data directly to those directories."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/config.toml:/app/config.toml:ro")," Maps the local ",(0,r.kt)("inlineCode",{parentName:"li"},"config.toml")," file into the container in ",(0,r.kt)("inlineCode",{parentName:"li"},"readonly")," mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/storage:/storage")," Maps the local ",(0,r.kt)("inlineCode",{parentName:"li"},"storage")," directory into the container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/snapshots:/snapshots")," Maps the local ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshots")," directory into the container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--name bee")," Name of the running container instance. You can refer to the given container by this name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--net=host")," Instructs Docker to use the host's network, so the network is not isolated. We recommend that you run on host network for better performance.  This way, the container will also open any ports it needs on the host network, so you will not need to specify any ports."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--ulimit nofile=8192:8192")," increases the ulimits inside the container. This is important when running with large databases."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-d")," Instructs Docker to run the container instance in a detached mode (daemon).")),(0,r.kt)("p",null,"You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker stop -t 300 bee")," to gracefully end the process."),(0,r.kt)("h2",{id:"create-username-and-password-for-the-bee-dashboard"},"Create Username and Password for the Bee Dashboard"),(0,r.kt)("p",null,"If you use the Bee dashboard, you need to create a secure password. Start your Bee container and execute the following command when the container is running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec -it bee password\n")),(0,r.kt)("p",null,"Expected output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"Password: [enter password]\nRe-enter password: [enter password]\nPassword salt: [password salt]\nPassword hash: [password hash]\n")),(0,r.kt)("p",null,"You can edit ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," and customize the ",(0,r.kt)("em",{parentName:"p"},"dashboard")," section to your needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dashboard]\nbind_address    = "/ip4/0.0.0.0/tcp/8081"\n[dashboard.auth]\nsession_timeout = 86400\nuser            = "admin"\npassword_salt   = "[password salt]"\npassword_hash   = "[password hash]"\n')),(0,r.kt)("h2",{id:"build-your-own-bee-image"},"Build Your Own Bee Image"),(0,r.kt)("p",null,"You can build your own Docker image by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker build -f bee-node/docker/Dockerfile -t bee:latest .\n")),(0,r.kt)("p",null,"Or pull it from Docker Hub (only available for amd64/x86_64):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull iotaledger/bee:latest && docker tag iotaledger/bee:latest bee:latest\n")),(0,r.kt)("h2",{id:"managing-a-node"},"Managing a Node"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Bee uses an in-memory cache. In order to save all data to the underlying persistent storage, it is necessary to provide a grace period of at least 200 seconds while shutting it down."))),(0,r.kt)("h3",{id:"starting-an-existing-bee-container"},"Starting an Existing Bee Container"),(0,r.kt)("p",null,"You can start an existing Bee container by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker start bee\n")),(0,r.kt)("h3",{id:"restarting-bee"},"Restarting Bee"),(0,r.kt)("p",null,"You can restart an existing Bee container by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker restart -t 300 bee\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-t 300")," Instructs Docker to wait for a grace period before shutting down.")),(0,r.kt)("h3",{id:"stopping-bee"},"Stopping Bee"),(0,r.kt)("p",null,"You can stop an existing Bee container by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker stop -t 300 bee\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-t 300")," Instructs Docker to wait for a grace period before shutting down.")),(0,r.kt)("h3",{id:"displaying-log-output"},"Displaying Log Output"),(0,r.kt)("p",null,"You can display an existing Bee containers logs by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker logs -f bee\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f"),"\nInstructs Docker to continue displaying the log to ",(0,r.kt)("inlineCode",{parentName:"li"},"stdout")," until CTRL+C is pressed.")),(0,r.kt)("h2",{id:"removing-a-container"},"Removing a Container"),(0,r.kt)("p",null,"You can remove an existing Bee container by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker container rm bee\n")),(0,r.kt)("h2",{id:"setup-using-docker-compose"},"Setup using ",(0,r.kt)("inlineCode",{parentName:"h2"},"docker-compose")),(0,r.kt)("p",null,"You can keep track of different configurations of the node using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},(0,r.kt)("inlineCode",{parentName:"a"},"docker-compose")),". An example ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," is in ",(0,r.kt)("inlineCode",{parentName:"p"},"./bee-node/docker/"),", if you just quickly want to try out the node software on its own."),(0,r.kt)("p",null,"If you want to run the latest release from Docker Hub you can call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose -f bee-node/docker/docker-compose.yml up --no-build\n")),(0,r.kt)("p",null,"Or, if you want to build the latest version of Bee from source, you can use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose -f bee-node/docker/docker-compose.yml up --build\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);