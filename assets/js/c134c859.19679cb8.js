"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2114],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=a(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||u;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,c=new Array(u);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var a=2;a<u;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return l}});var r=n(87462),o=n(63366),u=(n(67294),n(3905)),c=["components"],i={title:"HTTP Executor"},s=void 0,a={unversionedId:"usage/executors/http",id:"version-v1/usage/executors/http",title:"HTTP Executor",description:"HTTP executor can send a request to an HTTP endpoint",source:"@site/versioned_docs/version-v1/usage/executors/http.md",sourceDirName:"usage/executors",slug:"/usage/executors/http",permalink:"/docs/v1/usage/executors/http",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/usage/executors/http.md",tags:[],version:"v1",frontMatter:{title:"HTTP Executor"},sidebar:"tutorialSidebar",previous:{title:"Use with AWS ECS",permalink:"/docs/v1/usage/ecs"},next:{title:"shell",permalink:"/docs/v1/usage/executors/shell"}},p={},l=[{value:"Configuration",id:"configuration",level:2}],d={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,u.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"HTTP executor can send a request to an HTTP endpoint"),(0,u.kt)("h2",{id:"configuration"},"Configuration"),(0,u.kt)("p",null,"Params:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'method: Request method in uppercase\nurl: Request url\nheaders: Json string, such as "[\\"Content-Type: application/json\\"]"\nbody: POST body\ntimeout: Request timeout, unit seconds\nexpectCode: Expect response code, such as 200,206\nexpectBody: Expect response body, support regexp, such as /success/\ndebug: Debug option, will log everything when this option is not empty\n')),(0,u.kt)("p",null,"Example"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executor": "http",\n  "executor_config": {\n      "method": "GET",\n      "url": "http://example.com",\n      "headers": "[]",\n      "body": "",\n      "timeout": "30",\n      "expectCode": "200",\n      "expectBody": "",\n      "debug": "true"\n  }\n}\n')))}f.isMDXComponent=!0}}]);