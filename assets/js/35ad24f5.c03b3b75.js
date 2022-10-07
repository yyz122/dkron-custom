"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4612],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,v=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(v,a(a({ref:t},d),{},{components:r})):n.createElement(v,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62693:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={date:new Date("2022-10-07T00:00:00.000Z"),title:"dkron leave",slug:"dkron_leave",url:"/docs/pro/cli/dkron_leave/"},c=void 0,s={unversionedId:"pro/cli/dkron_leave",id:"pro/cli/dkron_leave",title:"dkron leave",description:"dkron leave",source:"@site/docs/pro/cli/dkron_leave.md",sourceDirName:"pro/cli",slug:"/pro/cli/dkron_leave",permalink:"/docs/pro/cli/dkron_leave",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/pro/cli/dkron_leave.md",tags:[],version:"current",frontMatter:{date:"2022-10-07T00:00:00.000Z",title:"dkron leave",slug:"dkron_leave",url:"/docs/pro/cli/dkron_leave/"},sidebar:"tutorialSidebar",previous:{title:"dkron keygen",permalink:"/docs/pro/cli/dkron_keygen"},next:{title:"dkron raft",permalink:"/docs/pro/cli/dkron_raft"}},d={},p=[{value:"dkron leave",id:"dkron-leave",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 7-Oct-2022",id:"auto-generated-by-spf13cobra-on-7-oct-2022",level:6}],u={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dkron-leave"},"dkron leave"),(0,i.kt)("p",null,"Force an agent to leave the cluster"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Stop stops an agent, if the agent is a server and is running for election\nstop running for election, if this server was the leader\nthis will force the cluster to elect a new leader and start a new scheduler.\nIf this is a server and has the scheduler started stop it, ignoring if this server\nwas participating in leader election or not (local storage).\nThen actually leave the cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dkron leave [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --cert-file string         Path to the client server TLS cert file\n  -h, --help                     help for leave\n      --key-file string          Path to the client server TLS key file\n      --rpc-addr string          gRPC address of the agent (default "127.0.0.1:6868")\n      --trusted-ca-file string   Path to the client server TLS trusted CA cert file\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --config string   config file (default is /etc/dkron/dkron.yml)\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron/"},"dkron"),"\t - Professional distributed job scheduling system")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-7-oct-2022"},"Auto generated by spf13/cobra on 7-Oct-2022"))}f.isMDXComponent=!0}}]);