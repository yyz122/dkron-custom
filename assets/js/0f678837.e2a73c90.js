(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1439],{85851:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=n(93456),i=["components"],l={title:"Target nodes spec",weight:10},d=void 0,u={unversionedId:"usage/target-nodes-spec",id:"usage/target-nodes-spec",title:"Target nodes spec",description:"Target nodes spec",source:"@site/docs/usage/target-nodes-spec.md",sourceDirName:"usage",slug:"/usage/target-nodes-spec",permalink:"/docs/usage/target-nodes-spec",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/target-nodes-spec.md",tags:[],version:"current",frontMatter:{title:"Target nodes spec",weight:10},sidebar:"tutorialSidebar",previous:{title:"Embedded storage",permalink:"/docs/usage/storage"},next:{title:"Upgrade methods",permalink:"/docs/usage/upgrade"}},g={},c=[{value:"Target nodes spec",id:"target-nodes-spec",level:2},{value:"Target all nodes with a tag",id:"target-all-nodes-with-a-tag",level:4},{value:"Target only one nodes of a group of nodes with a tag",id:"target-only-one-nodes-of-a-group-of-nodes-with-a-tag",level:4},{value:"Details and limitations",id:"details-and-limitations",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"target-nodes-spec"},"Target nodes spec"),(0,s.kt)("p",null,"Default is for all nodes to execute each job. Dkron has the ability to run jobs in specific nodes by leveraging the use of tags. You can choose whether a job is run on a node or group of nodes by specifying tags and a count of target nodes having this tag do you want a job to run."),(0,s.kt)("p",null,"The target node syntax is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'"tag": "value[:count]"\n')),(0,s.kt)("p",null,"To achieve this Nodes and Jobs have tags, for example, having a node with the following tags:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tags": {\n        "dc": "dc1",\n        "expect": "3",\n        "port": "6868",\n        "region": "global",\n        "role": "dkron",\n        "rpc_addr": "10.88.94.129:6868",\n        "server": "true",\n        "version": "devel",\n        "my_role": "web"\n    }\n}\n')),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can specify tags for nodes in the dkron config file or in the command line using ",(0,s.kt)("inlineCode",{parentName:"p"},"--tags")," parameter"))),(0,s.kt)("p",null,"In case there is no matching nodes with the specified tags, the job will not run."),(0,s.kt)("p",null,"Following some examples using different tag combinations:"),(0,s.kt)("h4",{id:"target-all-nodes-with-a-tag"},"Target all nodes with a tag"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "job_name",\n    "command": "/bin/true",\n    "schedule": "@every 2m",\n    "tags": {\n        "my_role": "web"\n    }\n}\n')),(0,s.kt)(r.Mermaid,{chart:'graph LR;\n    J("Job tags: #quot;my_role#quot;: #quot;web#quot;") --\x3e|Run Job|N1["Node1 tags: #quot;my_role#quot;: #quot;web#quot;"]\n    J --\x3e|Run Job|N2["Node2 tags: #quot;my_role#quot;: #quot;web#quot;"]\n    J --\x3e|Run Job|N3["Node2 tags: #quot;my_role#quot;: #quot;web#quot;"]',mdxType:"Mermaid"}),(0,s.kt)("h4",{id:"target-only-one-nodes-of-a-group-of-nodes-with-a-tag"},"Target only one nodes of a group of nodes with a tag"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "job_name",\n    "command": "/bin/true",\n    "schedule": "@every 2m",\n    "tags": {\n        "my_role": "web:1"\n    }\n}\n')),(0,s.kt)(r.Mermaid,{chart:'graph LR;\n    J("Job tags: #quot;my_role#quot;: #quot;web:1#quot;") --\x3e|Run Job|N1["Node1 tags: #quot;my_role#quot;: #quot;web#quot;"]\n    J -.- N2["Node2 tags: #quot;my_role#quot;: #quot;web#quot;"]\n    J -.- N3["Node2 tags: #quot;my_role#quot;: #quot;web#quot;"]',mdxType:"Mermaid"}),(0,s.kt)("p",null,"Dkron will try to run the job in the amount of nodes indicated by that count having that tag."),(0,s.kt)("h3",{id:"details-and-limitations"},"Details and limitations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Tags specified in a Job are combined using ",(0,s.kt)("inlineCode",{parentName:"li"},"AND"),", therefore a job that specifies several tags like:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tags": {\n        "my_role": "web",\n        "role": "dkron"\n    }\n}\n')),(0,s.kt)("p",null,"Will try to run the job in nodes that have all speciefied tags."),(0,s.kt)("p",null,"There is no limit in the tags that a job can have but having a Job with several tags with count like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tags": {\n        "my_role": "web:1",\n        "role": "dkron:2"\n    }\n}\n')),(0,s.kt)("p",null,"Will try to run the job in nodes that have all specified tags and using the lowest count. In the last example, it will run in ",(0,s.kt)("strong",{parentName:"p"},"one")," node having ",(0,s.kt)("inlineCode",{parentName:"p"},'"my_role": "web"')," and ",(0,s.kt)("inlineCode",{parentName:"p"},'"role": "dkron"')," tag, even if there is more than one node with these tags."))}m.isMDXComponent=!0},11748:function(e,t,n){var o={"./locale":89234,"./locale.js":89234};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id=11748}}]);