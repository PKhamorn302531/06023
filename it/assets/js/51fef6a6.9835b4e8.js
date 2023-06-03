"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[414],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),b=r,m=c["".concat(l,".").concat(b)]||c[b]||u[b]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(4137));const o={title:"Safari Web extension",sidebar_position:3},i=void 0,s={unversionedId:"adguard-for-ios/web-extension",id:"adguard-for-ios/web-extension",title:"Safari Web extension",description:"Web extensions add custom functionality to Safari. You can find more information about Web extensions here.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-ios/web-extension.md",sourceDirName:"adguard-for-ios",slug:"/adguard-for-ios/web-extension",permalink:"/KnowledgeBase/it/adguard-for-ios/web-extension",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/web-extension.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Safari Web extension",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/KnowledgeBase/it/adguard-for-ios/installation"},next:{title:"How to activate premium features",permalink:"/KnowledgeBase/it/adguard-for-ios/solving-problems/premium-activation"}},l={},d=[{value:"What it does",id:"what-it-does",level:2},{value:"How to enable AdGuard&#39;s Safari Web extension",id:"how-to-enable-adguards-safari-web-extension",level:2},{value:"In the iOS settings",id:"in-the-ios-settings",level:3},{value:"In Safari",id:"in-safari",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Web extensions add custom functionality to Safari. You can find ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/safariservices/safari_web_extensions"},"more information about Web extensions here"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png",alt:"What the Web extension looks like in Safari *mobile_border"})),(0,r.kt)("p",null,"AdGuard's Safari Web extension is a tool that takes advantage of the new features of iOS 15. It serves to enhance the capabilities of AdGuard for iOS. With it, AdGuard can apply advanced filtering rules and ultimately block more ads."),(0,r.kt)("h2",{id:"what-it-does"},"What it does"),(0,r.kt)("p",null,"By default, Safari provides only basic tools to content blockers. These tools don't allow the level of performance that can be found in content blockers on other operating systems (Windows, Mac, Android). For example, AdGuard apps on other platforms can use such effective weapons against ads as ",(0,r.kt)("a",{parentName:"p",href:"/general/ad-filtering/create-own-filters#cosmetic-css-rules"},"CSS rules"),", ",(0,r.kt)("a",{parentName:"p",href:"/general/ad-filtering/create-own-filters#extended-css-selectors"},"CSS selectors"),", and ",(0,r.kt)("a",{parentName:"p",href:"/general/ad-filtering/create-own-filters#scriptlets"},"scriptlets"),". Unfortunately, these instruments are absolutely irreplaceable when dealing with more complex cases such as pre-roll ads on YouTube, for example."),(0,r.kt)("p",null,"AdGuard's Safari Web extension compliments AdGuard by giving it the ability to employ these types of filtering rules."),(0,r.kt)("p",null,"Besides that, AdGuard's Safari Web extension can be used to quickly manage AdGuard for iOS right from the browser. Tap the ",(0,r.kt)("em",{parentName:"p"},"Extensions")," button \u2014 it's the one with a jigsaw icon, depending on your device type it may be located to the left or to the right of the address bar. Find ",(0,r.kt)("strong",{parentName:"p"},"AdGuard")," in the list and tap it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1",alt:"Web extension menu *mobile_border"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"On iPads AdGuard's Safari Web extension is accessible directly by tapping the AdGuard icon in the browser's address bar.")),(0,r.kt)("p",null,"You will see the following list of options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Enabling/disabling protection on the website"),". Turning the switch off will disable AdGuard completely for the current website and add a respective exclusion rule. Turning the switch back on will resume protection for the website and delete the rule. Any such change will require some time to take effect.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blocking elements on the page manually"),". Tap the ",(0,r.kt)("em",{parentName:"p"},"Block elements on this page")," button to prompt a pop-up for element blocking. Select any element on the page you want to hide, adjust the selection zone, then preview changes and confirm the removal. A corresponding filtering rule will be added to AdGuard (that you can later disable or delete to revert the change).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Report an issue"),". Swipe up to bring out the ",(0,r.kt)("em",{parentName:"p"},"Report an issue")," button. Use it to report a missed ad or any other problem that you encountered on the current page."))),(0,r.kt)("h2",{id:"how-to-enable-adguards-safari-web-extension"},"How to enable AdGuard's Safari Web extension"),(0,r.kt)("h3",{id:"in-the-ios-settings"},"In the iOS settings"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"AdGuard's Safari Web extension greatly improves the ad blocking quality, so we recommend enabling it on all sites.")),(0,r.kt)("p",null,"Web extension is not a standalone tool and requires AdGuard for iOS. If you don't have AdGuard for iOS installed on your device, please ",(0,r.kt)("a",{parentName:"p",href:"../installation"},"install it first")," and complete the onboarding process to prepare it for work."),(0,r.kt)("p",null,"Once done, open ",(0,r.kt)("em",{parentName:"p"},"Settings > Safari > Extensions"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png",alt:'Select "Safari" *mobile_border'})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png",alt:'Select "Extensions" *mobile_border'})),(0,r.kt)("p",null,"Find ",(0,r.kt)("strong",{parentName:"p"},"ALLOW THESE EXTENSIONS")," section and then find ",(0,r.kt)("strong",{parentName:"p"},"AdGuard")," among the available extensions."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_en.png",alt:'Select "AdGuard" in ALLOW THESE EXTENSIONS section *mobile_border'})),(0,r.kt)("p",null,"Tap it, then turn on the switch. On the same screen make sure that the AdGuard extension has required permissions: ",(0,r.kt)("strong",{parentName:"p"},"All Websites")," should have the ",(0,r.kt)("em",{parentName:"p"},"Allow")," status."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_en.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"AdGuard's Safari Web extension requires access to the web pages' content to operate, but doesn't use it for any purpose other than blocking ads.")),(0,r.kt)("h3",{id:"in-safari"},"In Safari"),(0,r.kt)("p",null,"Alternitavely, you can also turn AdGuard extension on from the Safari browser. Tap the ",(0,r.kt)("em",{parentName:"p"},"Extensions")," button (if you don't see it next to the address bar, tap the ",(0,r.kt)("inlineCode",{parentName:"p"},"aA")," icon)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_en.png",alt:"In Safari tap aA icon *mobile_border"})),(0,r.kt)("p",null,"Then find the ",(0,r.kt)("em",{parentName:"p"},"Manage Extensions")," option in the list and tap it. In the opened window turn on the switch next to ",(0,r.kt)("strong",{parentName:"p"},"AdGuard"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_en.png",alt:"Extensions *mobile_border"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_en.png",alt:"Extensions *mobile_border"})),(0,r.kt)("p",null,"If you use this method, you may have to go to Safari settings to grant AdGuard extension the necessary permissions anyway."),(0,r.kt)("p",null,"You should now be able to see AdGuard among the available extensions. Tap it, and then tap on the yellow ",(0,r.kt)("strong",{parentName:"p"},"i")," icon. Enable ",(0,r.kt)("strong",{parentName:"p"},"Advanced protection")," by tapping the ",(0,r.kt)("em",{parentName:"p"},"Turn on")," button and confirming the action."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you use AdGuard for iOS without Premium subscription, you won't be able to enable ",(0,r.kt)("strong",{parentName:"p"},"Advanced protection"),".")),(0,r.kt)("p",null,"Alternatively, you can enable ",(0,r.kt)("strong",{parentName:"p"},"Advanced protection")," directly from the app, in the ",(0,r.kt)("strong",{parentName:"p"},"Protection")," tab (second from the left in the bottom icon row)."),(0,r.kt)("p",null,"AdGuard's Safari Web extension only works on iOS versions 15 and later."))}u.isMDXComponent=!0}}]);