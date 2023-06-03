"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8372],{4137:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),d=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=d(e.components);return o.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=d(t),g=n,m=c["".concat(u,".").concat(g)]||c[g]||p[g]||a;return t?o.createElement(m,s(s({ref:r},l),{},{components:t})):o.createElement(m,s({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=c;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5055:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(7462),n=(t(7294),t(4137));const a={title:"How to use Samsung Pay with AdGuard in South Korea",sidebar_position:16},s=void 0,i={unversionedId:"adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",id:"adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",title:"How to use Samsung Pay with AdGuard in South Korea",description:"This problem occurs almost exclusively on devices registered in South Korea. Samsung Pay occasionally doesn't work on such devices with running VPN services. However, there is a way to solve this problem.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"How to use Samsung Pay with AdGuard in South Korea",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Known compatibility issues with Android apps",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/compatibility-issues"},next:{title:"Features overview",permalink:"/KnowledgeBase/fr/adguard-for-ios/overview"}},u={},d=[],l={toc:d};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This problem occurs almost exclusively on devices registered in South Korea. Samsung Pay occasionally doesn't work on such devices with running VPN services. However, there is a way to solve this problem."),(0,n.kt)("p",null,"By default, AdGuard uses Local VPN to filter traffic. This was the reason why the South Korean users had to disable AdGuard when making payments with Samsung Pay. Now it is possible to avoid such difficulties."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},'"pref.samsungpay.autopause.enable"'),' feature was developed specifically for South Korean users. So, what process does it initiate? If the "pref.samsungpay.autopause.enable" option is enabled, the AdGuard app is suspended when a user opens the Samsung Pay app. But once the app is closed, AdGuard resumes operation.'),(0,n.kt)("p",null,"Let's see how it works."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/en.gif",alt:"samsungpay *mobile"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," this feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. If another mode is being used, Samsung Pay will function without any interruptions.")))}p.isMDXComponent=!0}}]);