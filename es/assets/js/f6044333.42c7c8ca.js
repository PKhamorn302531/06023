"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7385],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const o={title:"Installation problems solving",sidebar_position:5},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/installation-issues",id:"adguard-for-mac/solving-problems/installation-issues",title:"Installation problems solving",description:'"Installation failed" error in macOS Catalina',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/installation-issues.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/installation-issues",permalink:"/KnowledgeBase/es/adguard-for-mac/solving-problems/installation-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/installation-issues.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Installation problems solving",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Compatibility issues with different macOS versions",permalink:"/KnowledgeBase/es/adguard-for-mac/solving-problems/big-sur-issues"},next:{title:"Launch issues on macOS",permalink:"/KnowledgeBase/es/adguard-for-mac/solving-problems/launch-issues"}},s={},c=[{value:"&quot;Installation failed&quot; error in macOS Catalina",id:"installation-failed-error-in-macos-catalina",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation-failed-error-in-macos-catalina"},'"Installation failed" error in macOS Catalina'),(0,a.kt)("p",null,"During the installation you can face an error like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg",alt:"Installation error screen"})),(0,a.kt)("p",null,"Follow this instruction to solve the problem:"),(0,a.kt)("p",null,"1) Restart your Mac 2) As your Mac restarts, press and hold down the ",(0,a.kt)("em",{parentName:"p"},"Command(\u2318) + R")," keys immediately upon hearing the startup chime. Hold the keys until the Apple logo appears to get the computer into Recovery mode. 3) From the top bar select ",(0,a.kt)("em",{parentName:"p"},"Utilities")," > ",(0,a.kt)("em",{parentName:"p"},"Terminal"),", and execute this command: ",(0,a.kt)("inlineCode",{parentName:"p"},"csrutil disable")," 4) Restart the Mac and log into Administrator's profile 5) Open the Finder window and select from the top bar ",(0,a.kt)("em",{parentName:"p"},"Go")," > ",(0,a.kt)("em",{parentName:"p"},"Go to Folder")," and type ",(0,a.kt)("inlineCode",{parentName:"p"},"~/private/")," 6) Create a folder named ",(0,a.kt)("em",{parentName:"p"},"tmp")," and type in your password 7) Launch AdGuard installation"),(0,a.kt)("p",null,"As the installation is completed, restart your Mac in Recovery mode using the instruction above and execute ",(0,a.kt)("inlineCode",{parentName:"p"},"csrutil enable")," command in Terminal to enable system protection."))}u.isMDXComponent=!0}}]);