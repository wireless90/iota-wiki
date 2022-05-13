"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[90956],{9022:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={},c="Config Reference",s={unversionedId:"config_reference",id:"config_reference",title:"Config Reference",description:"storage_config",source:"@site/external/chronicle.rs/documentation/docs/config_reference.md",sourceDirName:".",slug:"/config_reference",permalink:"/chronicle.rs/config_reference",draft:!1,editUrl:"https://github.com/iotaledger/chronicle.rs/edit/main/external/chronicle.rs/documentation/docs/config_reference.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/chronicle.rs/getting_started"},next:{title:"Contribute",permalink:"/chronicle.rs/contribute"}},u={},d=[{value:"<code>storage_config</code>",id:"storage_config",level:2},{value:"<code>keyspaces: Vec&lt;KeyspaceConfig&gt;</code>",id:"keyspaces-veckeyspaceconfig",level:3},{value:"<code>listen_address: String</code>",id:"listen_address-string",level:3},{value:"<code>thread_count: Enum</code>",id:"thread_count-enum",level:3},{value:"<code>reporter_count: u8</code>",id:"reporter_count-u8",level:3},{value:"<code>local_datacenter: String</code>",id:"local_datacenter-string",level:3},{value:"<code>partition_config</code>",id:"partition_config",level:3},{value:"<code>api_config</code>",id:"api_config",level:2},{value:"<code>broker_config</code>",id:"broker_config",level:2},{value:"<code>websocket_address: String</code>",id:"websocket_address-string",level:3},{value:"<code>mqtt_brokers: Vec&lt;Url&gt;</code>",id:"mqtt_brokers-vecurl",level:3},{value:"<code>api_endpoints: Vec&lt;Url&gt;</code>",id:"api_endpoints-vecurl",level:3},{value:"<code>retries_per_endpoint: u8</code>",id:"retries_per_endpoint-u8",level:3},{value:"<code>retries_per_query: usize</code>",id:"retries_per_query-usize",level:3},{value:"<code>collector_count: u8</code>",id:"collector_count-u8",level:3},{value:"<code>requester_count: u8</code>",id:"requester_count-u8",level:3},{value:"<code>request_timeout_secs: u64</code>",id:"request_timeout_secs-u64",level:3},{value:"<code>parallelism: u8</code>",id:"parallelism-u8",level:3},{value:"<code>sync_range: Option&lt;SyncRange&gt;</code>",id:"sync_range-optionsyncrange",level:3},{value:"<code>complete_gaps_interval_secs: u64</code>",id:"complete_gaps_interval_secs-u64",level:3},{value:"<code>logs_dir: Option&lt;String&gt;</code>",id:"logs_dir-optionstring",level:3},{value:"<code>max_log_size: Option&lt;u64&gt;</code>",id:"max_log_size-optionu64",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"config-reference"},"Config Reference"),(0,i.kt)("h2",{id:"storage_config"},(0,i.kt)("inlineCode",{parentName:"h2"},"storage_config")),(0,i.kt)("h3",{id:"keyspaces-veckeyspaceconfig"},(0,i.kt)("inlineCode",{parentName:"h3"},"keyspaces: Vec<KeyspaceConfig>")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"chronicle-storage/src/config.rs#KeyspaceConfig"},"KeyspaceConfig")),(0,i.kt)("p",null,"Multiple keyspaces can be configured in order to filter incoming messages. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," feature is not used, ",(0,i.kt)("em",{parentName:"p"},"only the first configured keyspace will be considered")," or the default (",(0,i.kt)("inlineCode",{parentName:"p"},"chronicle"),") if none is provided."),(0,i.kt)("p",null,"In addition to the keyspace name, each requires a map of datacenters (name -> replication factor). See ",(0,i.kt)("a",{parentName:"p",href:"https://university.scylladb.com/courses/scylla-essentials-overview/lessons/architecture/topic/datacenter/"},"here")," for more information about datacenters in ScyllaDB."),(0,i.kt)("h3",{id:"listen_address-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"listen_address: String")),(0,i.kt)("p",null,"The scylla.rs dashboard listen address, where it accepts requests to manage the Scylla cluster."),(0,i.kt)("h3",{id:"thread_count-enum"},(0,i.kt)("inlineCode",{parentName:"h3"},"thread_count: Enum")),(0,i.kt)("p",null,"The number of threads Scylla will use. Can be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"Count(usize)")," (a simple scalar count) or ",(0,i.kt)("inlineCode",{parentName:"p"},"CoreMultiple(usize)")," (a multiple of the number of cores the system has)."),(0,i.kt)("h3",{id:"reporter_count-u8"},(0,i.kt)("inlineCode",{parentName:"h3"},"reporter_count: u8")),(0,i.kt)("p",null,"The number of reporters Scylla will spawn."),(0,i.kt)("h3",{id:"local_datacenter-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"local_datacenter: String")),(0,i.kt)("p",null,"The Scylla local datacenter."),(0,i.kt)("h3",{id:"partition_config"},(0,i.kt)("inlineCode",{parentName:"h3"},"partition_config")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"chronicle-storage/src/config.rs#PartitionConfig"},"PartitionConfig")),(0,i.kt)("p",null,"Specifies the number of partitions to use in the database, as well as the number of milestones to use as chunks."),(0,i.kt)("p",null,"NOTICE: You can't change ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_config")," in future without migration."),(0,i.kt)("h2",{id:"api_config"},(0,i.kt)("inlineCode",{parentName:"h2"},"api_config")),(0,i.kt)("p",null,"Nothing at the moment, please refer to ",(0,i.kt)("a",{parentName:"p",href:".env"},".env"),"."),(0,i.kt)("h2",{id:"broker_config"},(0,i.kt)("inlineCode",{parentName:"h2"},"broker_config")),(0,i.kt)("h3",{id:"websocket_address-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"websocket_address: String")),(0,i.kt)("p",null,"The Broker dashboard listen address, where it accepts requests to manage the broker topology."),(0,i.kt)("h3",{id:"mqtt_brokers-vecurl"},(0,i.kt)("inlineCode",{parentName:"h3"},"mqtt_brokers: Vec<Url>")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Messages: mqtt topic used to receive incoming IOTA messages;"),(0,i.kt)("li",{parentName:"ul"},"MessagesReferenced: mqtt topic used to receive incoming metadata;")),(0,i.kt)("p",null,"NOTICE: You should at least have one of each."),(0,i.kt)("h3",{id:"api_endpoints-vecurl"},(0,i.kt)("inlineCode",{parentName:"h3"},"api_endpoints: Vec<Url>")),(0,i.kt)("p",null,"IOTA node-endpoints used by chronicle to fill gaps."),(0,i.kt)("h3",{id:"retries_per_endpoint-u8"},(0,i.kt)("inlineCode",{parentName:"h3"},"retries_per_endpoint: u8")),(0,i.kt)("p",null,"Max number of retries to retrieve something from ",(0,i.kt)("inlineCode",{parentName:"p"},"api_endpoints"),"."),(0,i.kt)("h3",{id:"retries_per_query-usize"},(0,i.kt)("inlineCode",{parentName:"h3"},"retries_per_query: usize")),(0,i.kt)("p",null,"Max number of retries to fetch/insert something from/to",(0,i.kt)("inlineCode",{parentName:"p"},"scylla"),", before declaring an outage, which will force the broker application to pause and await for scylla cluster to recover."),(0,i.kt)("h3",{id:"collector_count-u8"},(0,i.kt)("inlineCode",{parentName:"h3"},"collector_count: u8")),(0,i.kt)("p",null,"The number of concurrent collectors which collect data from feed sources also it's used as solidifier_count."),(0,i.kt)("h3",{id:"requester_count-u8"},(0,i.kt)("inlineCode",{parentName:"h3"},"requester_count: u8")),(0,i.kt)("p",null,"The number of concurrent requesters per collector."),(0,i.kt)("p",null,"NOTE: requesters are used by collector to fetch missing data from ",(0,i.kt)("inlineCode",{parentName:"p"},"api_endpoint")),(0,i.kt)("h3",{id:"request_timeout_secs-u64"},(0,i.kt)("inlineCode",{parentName:"h3"},"request_timeout_secs: u64")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"api_endpoint")," request timeout."),(0,i.kt)("h3",{id:"parallelism-u8"},(0,i.kt)("inlineCode",{parentName:"h3"},"parallelism: u8")),(0,i.kt)("p",null,"The max number of concurrent solidify requests."),(0,i.kt)("h3",{id:"sync_range-optionsyncrange"},(0,i.kt)("inlineCode",{parentName:"h3"},"sync_range: Option<SyncRange>")),(0,i.kt)("p",null,"Identiy the milestone data sync range from/to."),(0,i.kt)("h3",{id:"complete_gaps_interval_secs-u64"},(0,i.kt)("inlineCode",{parentName:"h3"},"complete_gaps_interval_secs: u64")),(0,i.kt)("p",null,"Interval used by syncer to check if there are some gaps to fill/complete."),(0,i.kt)("h3",{id:"logs_dir-optionstring"},(0,i.kt)("inlineCode",{parentName:"h3"},"logs_dir: Option<String>")),(0,i.kt)("p",null,"If provided, it will archive the milestone data in ordered fashion."),(0,i.kt)("h3",{id:"max_log_size-optionu64"},(0,i.kt)("inlineCode",{parentName:"h3"},"max_log_size: Option<u64>")),(0,i.kt)("p",null,"The upper limit of the log_file_size."),(0,i.kt)("p",null,"NOTE: Ensure to use a limit within your filesystem range."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);