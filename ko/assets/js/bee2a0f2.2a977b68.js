"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3460],{4137:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),f=o,w=u["".concat(l,".").concat(f)]||u[f]||c[f]||i;return t?n.createElement(w,a(a({ref:r},p),{},{components:t})):n.createElement(w,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7932:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(7462),o=(t(7294),t(4137));const i={title:"WFP driver",sidebar_position:1},a=void 0,s={unversionedId:"adguard-for-windows/solving-problems/wfp-driver",id:"adguard-for-windows/solving-problems/wfp-driver",title:"WFP driver",description:"To filter netwrok traffic, AdGuard uses a network driver. There are two options: TDI driver and WFP driver. While WFP driver is generally preferrable and is enabled by default for all newer Windows OS versions (Windows 8 and newer), it can potentially cause compatibility problems, especially with some antiviruses. These problems and subsequent errors can be very different in each case.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/wfp-driver.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/wfp-driver",permalink:"/KnowledgeBase/ko/adguard-for-windows/solving-problems/wfp-driver",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/wfp-driver.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"WFP driver",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Browser Assistant",permalink:"/KnowledgeBase/ko/adguard-for-windows/browser-assistant"},next:{title:"Certificate-related issues",permalink:"/KnowledgeBase/ko/adguard-for-windows/solving-problems/connection-not-trusted"}},l={},d=[],p={toc:d};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To filter netwrok traffic, AdGuard uses a network driver. There are two options: TDI driver and WFP driver. While WFP driver is generally preferrable and is enabled by default for all newer Windows OS versions (Windows 8 and newer), it can potentially cause compatibility problems, especially with some antiviruses. These problems and subsequent errors can be very different in each case."),(0,o.kt)("p",null,"If you encounter a problem that you suspect might be caused by this, you can always switch to the older but more stable TDI network driver. To do so:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("em",{parentName:"p"},"Settings \u2192 Network"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disable WFP driver as it\u2019s done in this picture:"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png",alt:"WFP driver *border"})))}c.isMDXComponent=!0}}]);