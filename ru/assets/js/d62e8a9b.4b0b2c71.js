"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9502],{4137:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),d=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(t),f=a,m=s["".concat(u,".").concat(f)]||s[f]||p[f]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2006:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(7462),a=(t(7294),t(4137));const o={title:"\u041e\u0431\u0437\u043e\u0440",sidebar_position:1,slug:"/"},i=void 0,l={unversionedId:"intro",id:"intro",title:"\u041e\u0431\u0437\u043e\u0440",description:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0440\u0435\u043a\u043b\u0430\u043c\u044b AdGuard",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/KnowledgeBase/ru/",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u041e\u0431\u0437\u043e\u0440",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b",permalink:"/KnowledgeBase/ru/general/ad-filtering/how-ad-blocking-works"}},u={},d=[{value:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0440\u0435\u043a\u043b\u0430\u043c\u044b AdGuard",id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0440\u0435\u043a\u043b\u0430\u043c\u044b-adguard",level:2},{value:"\u041d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b",id:"\u043d\u0435-\u0442\u043e\u043b\u044c\u043a\u043e-\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430-\u0440\u0435\u043a\u043b\u0430\u043c\u044b",level:2}],c={toc:d};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0440\u0435\u043a\u043b\u0430\u043c\u044b-adguard"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0440\u0435\u043a\u043b\u0430\u043c\u044b AdGuard"),(0,a.kt)("p",null,"AdGuard \u2014 \u043e\u0434\u0438\u043d \u0438\u0437 \u043b\u0438\u0434\u0435\u0440\u043e\u0432 \u043d\u0430 \u0440\u044b\u043d\u043a\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c \u0434\u043b\u044f \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0441 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 10-\u043b\u0435\u0442\u043d\u0438\u043c \u043e\u043f\u044b\u0442\u043e\u043c, \u043f\u043e\u0447\u0442\u0438 \u0434\u0435\u0441\u044f\u0442\u043a\u043e\u043c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c \u0438 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 30 \u043c\u043b\u043d \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438. \u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u043f\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u044b, \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u043c\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c, \u043a\u0430\u043a \u0434\u0435\u0441\u043a\u0442\u043e\u043f\u043d\u044b\u0445, \u0442\u0430\u043a \u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445. \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f AdGuard \u0431\u043e\u043b\u0435\u0435 \u043c\u043e\u0449\u043d\u044b\u0435, \u0447\u0435\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u044b\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f, \u043c\u043e\u0433\u0443\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0438 \u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/adguard-for-windows/overview"},"AdGuard \u0434\u043b\u044f Windows")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/adguard-for-mac/overview"},"AdGuard \u0434\u043b\u044f Mac")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/adguard-for-android/overview"},"AdGuard \u0434\u043b\u044f Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/adguard-for-ios/overview"},"AdGuard \u0434\u043b\u044f iOS"))),(0,a.kt)("p",null,"\u041d\u043e \u043c\u044b \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u0432:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/adguard-browser-extension/overview"},"\u0411\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u043e\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 AdGuard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/adguard-for-safari/overview"},"AdGuard \u0434\u043b\u044f Safari"))),(0,a.kt)("h2",{id:"\u043d\u0435-\u0442\u043e\u043b\u044c\u043a\u043e-\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430-\u0440\u0435\u043a\u043b\u0430\u043c\u044b"},"\u041d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b"),(0,a.kt)("p",null,"\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0440\u0435\u043a\u043b\u0430\u043c\u044b AdGuard \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u0443. \u041e\u043d \u0437\u0430\u0449\u0438\u0442\u0438\u0442 \u0432\u0430\u0441 \u043e\u0442 \u043e\u043d\u043b\u0430\u0439\u043d-\u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u043f\u043e\u0432\u044b\u0441\u0438\u0442 \u0432\u0430\u0448\u0443 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f\u0445. \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 AdGuard \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0442\u0430\u043a\u0438\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430, \u043a\u0430\u043a DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043b\u043d\u043e\u0439 \u0437\u0430\u0449\u0438\u0442\u044b, \u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0434\u0435\u0442\u0435\u0439 \u043e\u0442 \u043d\u0435\u043f\u0440\u0438\u0435\u043c\u043b\u0435\u043c\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430, \u0416\u0443\u0440\u043d\u0430\u043b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u043d\u0430\u0434 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u0442\u0440\u0430\u0444\u0438\u043a\u043e\u043c \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435. \u042d\u0442\u0430 \u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431\u043e \u0432\u0441\u0435\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u0445 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u2014 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u0435 \u043a \u043b\u044e\u0431\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0435\u0439 \u0432\u0430\u0441 \u0441\u0442\u0430\u0442\u044c\u0435."))}p.isMDXComponent=!0}}]);