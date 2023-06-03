"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[28],{4137:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(t),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||l;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=c;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5921:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var n=t(7462),o=(t(7294),t(4137));const l={title:"Problems caused by multiple user profiles",sidebar_position:14},i=void 0,a={unversionedId:"adguard-for-android/solving-problems/multiple-profiles-issue",id:"adguard-for-android/solving-problems/multiple-profiles-issue",title:"Problems caused by multiple user profiles",description:"On Android 9 and later, if AdGuard is installed for more than one user profile on your device, you may encounter problems when uninstalling the app. When you uninstall AdGuard from one user profile, the app will still appear on the app list, but you won't be able to uninstall or reinstall it. It happens because AdGuard is installed for a different user profile on the device.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/multiple-profiles-issue.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/multiple-profiles-issue",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/multiple-profiles-issue",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/multiple-profiles-issue.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Problems caused by multiple user profiles",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Moving CA certificate to System store on rooted devices",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/https-certificate-for-rooted"},next:{title:"Known compatibility issues with Android apps",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/compatibility-issues"}},s={},p=[],u={toc:p};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On Android 9 and later, if AdGuard is installed for more than one user profile on your device, you may encounter problems when uninstalling the app. When you uninstall AdGuard from one user profile, the app will still appear on the app list, but you won't be able to uninstall or reinstall it. It happens because AdGuard is installed for a different user profile on the device."),(0,o.kt)("p",null,'If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message "You can\'t install the app on your device".'),(0,o.kt)("p",null,"To solve this problem, you need to uninstall the application for all users: go to Settings > All apps > AdGuard. Tap three dots at the upper right corner and select ",(0,o.kt)("em",{parentName:"p"},"Uninstall for all users"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/android/multiple_users/uninst_en.png",alt:"Uninstall *mobile"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/android/multiple_users/uninst2_en.png",alt:"Uninstall *mobile"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/multiple-profiles-issue/uninst3_en.png",alt:"Uninstall *mobile"})))}d.isMDXComponent=!0}}]);