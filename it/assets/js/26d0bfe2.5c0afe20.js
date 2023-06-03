"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7185],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||n;return r?i.createElement(f,o(o({ref:t},p),{},{components:r})):i.createElement(f,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<n;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=r(7462),a=(r(7294),r(4137));const n={title:"How to configure system-wide filtering with AdGuard for iOS",sidebar_position:2},o=void 0,l={unversionedId:"adguard-for-ios/solving-problems/system-wide-filtering",id:"adguard-for-ios/solving-problems/system-wide-filtering",title:"How to configure system-wide filtering with AdGuard for iOS",description:"About system-wide filtering",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-ios/solving-problems/system-wide-filtering.md",sourceDirName:"adguard-for-ios/solving-problems",slug:"/adguard-for-ios/solving-problems/system-wide-filtering",permalink:"/KnowledgeBase/it/adguard-for-ios/solving-problems/system-wide-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/solving-problems/system-wide-filtering.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to configure system-wide filtering with AdGuard for iOS",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to activate premium features",permalink:"/KnowledgeBase/it/adguard-for-ios/solving-problems/premium-activation"},next:{title:"How to avoid compatibility problem with FaceTime",permalink:"/KnowledgeBase/it/adguard-for-ios/solving-problems/facetime-compatibility-issues"}},s={},d=[{value:"About system-wide filtering",id:"about-system-wide-filtering",level:2},{value:"How to add a DNS filter/hosts file",id:"how-to-add-a-dns-filterhosts-file",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"about-system-wide-filtering"},"About system-wide filtering"),(0,a.kt)("p",null,"System-wide filtering means blocking ads and trackers beyond the Safari browser, i.e. in other apps and browsers. This article will tell you how to set it up on your iOS device."),(0,a.kt)("p",null,"On iOS, the only way to block ads and trackers system-wide is to use ",(0,a.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering/"},"DNS filtering"),". First, you have to enable DNS protection. To do so, open ",(0,a.kt)("em",{parentName:"p"},"AdGuard for iOS settings")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"DNS protection")," and switch it on."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG",alt:"DNS protection screen *mobile_border"})),(0,a.kt)("p",null,"Now, if your purpose is to block ads and trackers system-wide, you have two options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enable AdGuard DNS server (",(0,a.kt)("em",{parentName:"li"},"Settings")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"DNS protection")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"DNS server")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"AdGuard DNS"),")."),(0,a.kt)("li",{parentName:"ol"},"Add a DNS filter/hosts file that will block ad and tracking domains, e.g. AdGuard DNS filter.")),(0,a.kt)("p",null,"The second option takes a bit more time to set up but has several advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can use any DNS server at your discretion and you are not tied up to a specific blocking server."),(0,a.kt)("li",{parentName:"ul"},"You can add multiple DNS filters and/or hosts files at the same time, but you can't use multiple DNS servers at once.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"How DNS filtering works"})),(0,a.kt)("h2",{id:"how-to-add-a-dns-filterhosts-file"},"How to add a DNS filter/hosts file"),(0,a.kt)("p",null,"You can add any DNS filter or hosts file, the instruction will be the same for all of them. For the sake of the example, let's add ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardSDNSFilter"},"AdGuard DNS filter"),". It is composed of several other filters (AdGuard Base filter, Social Media filter, Tracking Protection filter, Mobile Ads filter, EasyList, EasyPrivacy, etc.) and it's simplified specifically to be better compatible with DNS-level ad blocking."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("em",{parentName:"li"},"AdGuard for iOS settings")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"General"),"."),(0,a.kt)("li",{parentName:"ol"},"Enable ",(0,a.kt)("em",{parentName:"li"},"Advanced mode"),". The ",(0,a.kt)("em",{parentName:"li"},"Advanced settings")," tab will appear. Open it.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_en.jpg",alt:"Open AdGuard Settings and enable Advanced mode *mobile_border"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/ios_advanced_settings.PNG",alt:"Advanced settings screen *mobile_border"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: We don't recommend touching other settings you'll find inside the ",(0,a.kt)("em",{parentName:"p"},"Advanced settings")," tab, especially when it comes to ",(0,a.kt)("em",{parentName:"p"},"Low-level settings"),". Some of them might break the Internet connection or compromise your privacy and security, so it's better to be careful. The text below describes the exact actions required to add AdGuard DNS filter.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Copy this link: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt")," (it's a link for AdGuard DNS filter)"),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("em",{parentName:"li"},"AdGuard for iOS settings")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"DNS protection")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"DNS filtering")," (available while ",(0,a.kt)("em",{parentName:"li"},"Advanced mode")," is enabled) \u2192 ",(0,a.kt)("em",{parentName:"li"},"DNS filters"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("em",{parentName:"li"},"Add a filter"),", paste the link into the filter URL field, and click 'Next'.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/ios_adding_a_filter.PNG",alt:"Adding a DNS filter screen *mobile_border"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Add any number of other DNS filters the same way by pasting a different URL at step 3. You can find various filters and links to them ",(0,a.kt)("a",{parentName:"p",href:"https://filterlists.com"},"here"),".")))}c.isMDXComponent=!0}}]);