"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8255],{4137:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return t?n.createElement(g,d(d({ref:r},s),{},{components:t})):n.createElement(g,d({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,d=new Array(o);d[0]=c;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var p=2;p<o;p++)d[p]=t[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3048:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(7462),a=(t(7294),t(4137));const o={title:"\u5b89\u88c5\u65b9\u5f0f",sidebar_position:2},d=void 0,i={unversionedId:"adguard-browser-extension/installation",id:"adguard-browser-extension/installation",title:"\u5b89\u88c5\u65b9\u5f0f",description:"\u5982\u4f55\u4e3a Google Chrome \u6d4f\u89c8\u5668\u6216\u4f7f\u7528 Chromium \u5185\u6838\u7684\u6d4f\u89c8\u5668\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-browser-extension/installation.md",sourceDirName:"adguard-browser-extension",slug:"/adguard-browser-extension/installation",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/installation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-browser-extension/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u65b9\u5f0f",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Features overview",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/overview"},next:{title:"\u6574\u5408\u6a21\u5f0f\uff08\u65e7\u7248\uff09",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/integration-mode"}},l={},p=[{value:"\u5982\u4f55\u4e3a Google Chrome \u6d4f\u89c8\u5668\u6216\u4f7f\u7528 Chromium \u5185\u6838\u7684\u6d4f\u89c8\u5668\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55",id:"\u5982\u4f55\u4e3a-google-chrome-\u6d4f\u89c8\u5668\u6216\u4f7f\u7528-chromium-\u5185\u6838\u7684\u6d4f\u89c8\u5668\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55",level:2},{value:"\u5982\u4f55\u4e3a Opera \u6d4f\u89c8\u5668\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55",id:"\u5982\u4f55\u4e3a-opera-\u6d4f\u89c8\u5668\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55",level:2},{value:"\u5982\u4f55\u4e3a Firefox \u6d4f\u89c8\u5668\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55",id:"\u5982\u4f55\u4e3a-firefox-\u6d4f\u89c8\u5668\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55",level:2},{value:"\u5982\u4f55\u4e3a Yandex \u6d4f\u89c8\u5668\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55",id:"\u5982\u4f55\u4e3a-yandex-\u6d4f\u89c8\u5668\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55",level:2},{value:"\u5982\u4f55\u4e3a Microsoft Edge \u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55",id:"\u5982\u4f55\u4e3a-microsoft-edge-\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55",level:2},{value:"\u5982\u4f55\u4e3a Safari \u6d4f\u89c8\u5668\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55",id:"\u5982\u4f55\u4e3a-safari-\u6d4f\u89c8\u5668\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55",level:2}],s={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5982\u4f55\u4e3a-google-chrome-\u6d4f\u89c8\u5668\u6216\u4f7f\u7528-chromium-\u5185\u6838\u7684\u6d4f\u89c8\u5668\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55"},"\u5982\u4f55\u4e3a Google Chrome \u6d4f\u89c8\u5668\u6216\u4f7f\u7528 Chromium \u5185\u6838\u7684\u6d4f\u89c8\u5668\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/extension_chrome"},"Chrome Web Store")," \u4e2d\u6253\u5f00\u672c\u6269\u5c55\u7684\u9875\u9762\u7136\u540e\u70b9\u51fb\u300c",(0,a.kt)("em",{parentName:"p"},"\u6dfb\u52a0\u81f3 Chrome"),"\u300d\uff08Add to Chrome\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_chrome.png",alt:"Chrome Web Store \u4e2d\u7684 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55 *border"})),(0,a.kt)("p",null,"\u5728\u6253\u5f00\u7684\u5bf9\u8bdd\u6846\u4e2d\uff0c\u70b9\u51fb\u300c",(0,a.kt)("em",{parentName:"p"},"\u6dfb\u52a0\u6b64\u6269\u5c55"),"\u300d\uff08Add extension\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_chrome1.png",alt:"Chrome Web Store \u4e2d\u7684\u5bf9\u8bdd\u6846 *border"})),(0,a.kt)("h2",{id:"\u5982\u4f55\u4e3a-opera-\u6d4f\u89c8\u5668\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55"},"\u5982\u4f55\u4e3a Opera \u6d4f\u89c8\u5668\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55"),(0,a.kt)("p",null,"\u6253\u5f00 ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/extension_opera"},"addons.opera.com")," \u9875\u9762\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_opera.png",alt:"Opera \u63d2\u4ef6\u5546\u5e97\u4e2d\u7684 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55 *border"})),(0,a.kt)("p",null,"\u70b9\u51fb\u300c",(0,a.kt)("em",{parentName:"p"},"\u6dfb\u52a0\u81f3 Opera"),"\u300d\uff08Add to Opera\uff09\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u4e3a-firefox-\u6d4f\u89c8\u5668\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55"},"\u5982\u4f55\u4e3a Firefox \u6d4f\u89c8\u5668\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55"),(0,a.kt)("p",null,"\u6253\u5f00 ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/extension_firefox"},"addons.mozilla.org")," \u7f51\u9875\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_firefox.png",alt:"Firefox \u9644\u52a0\u7ec4\u4ef6\u4e2d\u7684 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55 *border"})),(0,a.kt)("p",null,"\u70b9\u51fb\u300c",(0,a.kt)("em",{parentName:"p"},"\u6dfb\u52a0\u81f3 Firefox"),"\u300d\uff08Add to Firefox\uff09\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u4e3a-yandex-\u6d4f\u89c8\u5668\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55"},"\u5982\u4f55\u4e3a Yandex \u6d4f\u89c8\u5668\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55"),(0,a.kt)("p",null,"\u70b9\u51fb\u6d4f\u89c8\u5668\u53f3\u4e0a\u89d2\u6d4f\u89c8\u5668\u8bbe\u7f6e\u6309\u94ae\uff0c\u7136\u540e\u5728\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u300c",(0,a.kt)("em",{parentName:"p"},"\u6269\u5c55"),"\u300d\uff08Add-ons\uff09\u3002"),(0,a.kt)("p",null,"\u5411\u4e0b\u6eda\u52a8\u627e\u5230 AdGuard\uff0c\u7136\u540e\u70b9\u51fb\u300c",(0,a.kt)("em",{parentName:"p"},"\u5b89\u88c5"),"\u300d\uff08Install\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_yandex.png",alt:"Yandex \u9644\u52a0\u7ec4\u4ef6\u4e2d\u7684 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55 *border"})),(0,a.kt)("h2",{id:"\u5982\u4f55\u4e3a-microsoft-edge-\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55"},"\u5982\u4f55\u4e3a Microsoft Edge \u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/extension_edge"},"Edge \u6d4f\u89c8\u5668\u63d2\u4ef6\u5546\u5e97"),"\u4e2d\u627e\u5230 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55\uff0c\u7136\u540e\u70b9\u51fb\u300c",(0,a.kt)("em",{parentName:"p"},"\u83b7\u53d6"),"\u300d\uff08Get\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_edge.png",alt:"Edge \u63d2\u4ef6\u4e2d\u7684 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55 *border"})),(0,a.kt)("p",null,"\u5728\u6253\u5f00\u7684\u5bf9\u8bdd\u6846\u4e2d\uff0c\u6309\u4e0b\u300c",(0,a.kt)("em",{parentName:"p"},"\u6dfb\u52a0\u6269\u5c55"),"\u300d\uff08Add extension\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_edge1.png",alt:"Edge \u5bf9\u8bdd\u6846\u7a97\u53e3 *border"})),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/extension_chrome"},"Chrome \u7f51\u4e0a\u5e94\u7528\u5e97"),"\u5b89\u88c5\u9002\u7528\u4e8e Edge \u7684 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55\u3002 \u5728 Edge \u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 Chrome \u7684\u7f51\u9875\uff0c\u5728\u9875\u9762\u9876\u90e8\u7684\u6a2a\u5e45\u4e0a\u9009\u62e9\u300c",(0,a.kt)("em",{parentName:"p"},"\u5141\u8bb8\u6765\u81ea\u5176\u4ed6\u5e94\u7528\u5546\u5e97\u7684\u6269\u5c55\u7a0b\u5e8f"),"\u300d\uff08Allow extensions from other stores\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/edge_banner.jpg",alt:"\u5728 Chrome Web Store \u4e0a\u7684 Edge \u6a2a\u5e45 *border"})),(0,a.kt)("p",null,"\u5728\u5f39\u51fa\u7684\u5bf9\u8bdd\u6846\u4e2d\uff0c\u70b9\u51fb\u300c",(0,a.kt)("em",{parentName:"p"},"\u5141\u8bb8"),"\u300d\uff08Allow\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow_from_stores.jpg",alt:'Edge \u5bf9\u8bdd\u6846"\u5141\u8bb8\u6765\u81ea\u5176\u4ed6\u5e94\u7528\u5546\u5e97\u7684\u6269\u5c55\u7a0b\u5e8f"'})),(0,a.kt)("p",null,"\u70b9\u51fb\u300c",(0,a.kt)("em",{parentName:"p"},"\u6dfb\u52a0\u5230 Chrome"),"\u300d\uff08Add to Chrome\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/add_to_chrome.jpg",alt:"\u6dfb\u52a0\u5230 Chrome \u6309\u94ae *border"})),(0,a.kt)("p",null,"\u5728\u6253\u5f00\u7684\u5bf9\u8bdd\u7a97\u53e3\u4e2d\uff0c\u70b9\u51fb\u300c",(0,a.kt)("em",{parentName:"p"},"\u6dfb\u52a0\u6269\u5c55"),"\u300d\uff08Add extension\uff09\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/add_to_edge.jpg",alt:"\u6dfb\u52a0\u5230 Edge \u6309\u94ae"})),(0,a.kt)("h2",{id:"\u5982\u4f55\u4e3a-safari-\u6d4f\u89c8\u5668\u5b89\u88c5-adguard-\u6d4f\u89c8\u5668\u6269\u5c55"},"\u5982\u4f55\u4e3a Safari \u6d4f\u89c8\u5668\u5b89\u88c5 AdGuard \u6d4f\u89c8\u5668\u6269\u5c55"),(0,a.kt)("p",null,"\u9002\u7528\u4e8e Safari \u7684 AdGuard \u4e0d\u662f\u4e00\u822c\u610f\u4e49\u4e0a\u7684\u6d4f\u89c8\u5668\u6269\u5c55\u3002 \u60a8\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"/adguard-for-safari/overview"},"\u77e5\u8bc6\u5e93"),"\u4e2d\u9605\u8bfb\u66f4\u591a\u76f8\u5173\u4fe1\u606f\uff0c \u6216\u8005\u60a8\u53ef\u4ee5\u76f4\u63a5\u4ece\u672c\u7f51\u9875",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/safari_release"},"\u4e0b\u8f7d\u5b89\u88c5\u6587\u4ef6"),"\u3002"))}u.isMDXComponent=!0}}]);