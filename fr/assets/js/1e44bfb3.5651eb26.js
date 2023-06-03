"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5847],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,f=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return r?o.createElement(f,n(n({ref:t},d),{},{components:r})):o.createElement(f,n({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var u=2;u<i;u++)n[u]=r[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(7462),a=(r(7294),r(4137));const i={title:"Browsing Security",sidebar_position:3},n=void 0,s={unversionedId:"general/browsing-security",id:"general/browsing-security",title:"Browsing Security",description:"Every day, tens of thousands of people fall prey to virus attacks or fraud on the Internet. We have added special filters to the AdGuard app to protect you from malicious and phishing websites.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/general/browsing-security.md",sourceDirName:"general",slug:"/general/browsing-security",permalink:"/KnowledgeBase/fr/general/browsing-security",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/browsing-security.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Browsing Security",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Local.adguard.org domain",permalink:"/KnowledgeBase/fr/general/https-filtering/local-adguard-com-domain"},next:{title:"Stealth Mode",permalink:"/KnowledgeBase/fr/general/stealth-mode"}},l={},u=[{value:"How does a check work?",id:"how-does-a-check-work",level:2},{value:"AdGuard for Windows, Mac, and Android",id:"adguard-for-windows-mac-and-android",level:3},{value:"AdGuard Browser extensions",id:"adguard-browser-extensions",level:3},{value:"AdGuard filters",id:"adguard-filters",level:2},{value:"Phishing sites filter",id:"phishing-sites-filter",level:3},{value:"Malicious sites filter",id:"malicious-sites-filter",level:3},{value:"How do we fill up our filters?",id:"how-do-we-fill-up-our-filters",level:2},{value:"AdGuard Browsing Security Community",id:"adguard-browsing-security-community",level:3},{value:"Want to help?",id:"want-to-help",level:3},{value:"False-positive responses",id:"false-positive-responses",level:3}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every day, tens of thousands of people fall prey to virus attacks or fraud on the Internet. We have added special filters to the AdGuard app to protect you from malicious and phishing websites."),(0,a.kt)("p",null,"So far, we have categorized more than 15 million sites, and our filters contain about 1.5 million phishing and malware sites. Just think about it: 10% of all known sites can be dangerous for you! Inexperienced users can easily become victims of fraudsters or hackers. We hope that using protection against malicious websites will help you avoid all hazards that you may encounter."),(0,a.kt)("h2",{id:"how-does-a-check-work"},"How does a check work?"),(0,a.kt)("p",null,"The scope and methods of checks depend on the product you use. In our browser extensions, AdGuard inspects only the pages you visit. In AdGuard for Windows, Mac, or Android, we offer you the best possible protection by checking both the pages and all objects loaded on them."),(0,a.kt)("h3",{id:"adguard-for-windows-mac-and-android"},"AdGuard for Windows, Mac, and Android"),(0,a.kt)("p",null,"We use the protocol ",(0,a.kt)("a",{parentName:"p",href:"https://code.google.com/p/google-safe-browsing/wiki/Protocolv2Spec"},"Safe Browsing API version 2.2")," for our work with filters. This protocol allows us to keep your personal data absolutely safe. Our server knows nothing about the websites that you visit. We use hash prefixes for checks, not the opened URLs."),(0,a.kt)("p",null,"The figure below provides a general understanding of how the Browsing Security module works, using AdGuard for Windows as an example."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_adguard_for_windows.png",alt:"Functioning algorithm of Browsing Security module"})),(0,a.kt)("h3",{id:"adguard-browser-extensions"},"AdGuard Browser extensions"),(0,a.kt)("p",null,"Browser extensions work differently, using the so-called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardForAndroid/issues/162#issue-115487668"},(0,a.kt)("em",{parentName:"a"},"Lookup API"))," to check the pages you visit. Every time you visit any website, your local client exchanges information with our backend server in the form of hashes and hash prefixes. For those interested in the process at a deeper level, the link above will be helpful. As a result of that exchange, the local client determines if the website belongs to the database of potentially dangerous websites or not."),(0,a.kt)("p",null,"We bring to your attention that we never get any information that could allow us to determine which websites you visit and use that data in any way."),(0,a.kt)("p",null,"An approximate algorithm of the functioning of the Browsing Security module is shown in the picture below."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_extension.png",alt:"Functioning algorithm of Browsing Security module in AdGuard browser extensions."})),(0,a.kt)("h2",{id:"adguard-filters"},"AdGuard filters"),(0,a.kt)("p",null,"We currently maintain two AdGuard filters. One protects against phishing and fraudulent websites. The other protects against malicious websites, visiting which may lead to a virus infection."),(0,a.kt)("h3",{id:"phishing-sites-filter"},"Phishing sites filter"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Phishing")," is a type of online fraud aimed at gaining access to confidential data of users \u2014 username and password. If you are interested in this topic, we suggest that you read ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Phishing"},"this article at Wikipedia"),"."),(0,a.kt)("p",null,"Apart from phishing sites, this filter also covers different fraudulent sites, including all kinds of scams, sales of nonexistent content, and such."),(0,a.kt)("h3",{id:"malicious-sites-filter"},"Malicious sites filter"),(0,a.kt)("p",null,"This filter contains links to pages that lead to the execution of malicious code. It can initiate leakage or loss of data or harm the device of a user. It can be authorized (for example, when downloading and running the executable file) or unauthorized (for example, when being attacked with spyware)."),(0,a.kt)("h2",{id:"how-do-we-fill-up-our-filters"},"How do we fill up our filters?"),(0,a.kt)("p",null,"Our filters are constantly filled with new addresses. Since most of the work is automated, you can be sure that new malware and phishing addresses fall into our database as quickly as possible."),(0,a.kt)("h3",{id:"adguard-browsing-security-community"},"AdGuard Browsing Security Community"),(0,a.kt)("p",null,"An important tool for maintaining the highest level of filtering is ",(0,a.kt)("em",{parentName:"p"},"AdGuard Browsing Security Community"),". Any user of our products \u2014 be it AdGuard for Windows or our browser extension \u2014 can become a member of the community and help us in the making of AdGuard filters."),(0,a.kt)("p",null,"In the picture below we described an algorithm of Browsing Security Community work:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/En/Articles/browsing_security_community.png",alt:"The way AdGuard Browsing Security Community works"})),(0,a.kt)("h3",{id:"want-to-help"},"Want to help?"),(0,a.kt)("p",null,"We will gladly accept any help! If you want to send us a complaint about a phishing or malware site, you can do it via technical support at ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com"))," or ",(0,a.kt)("a",{parentName:"p",href:"http://forum.adguard.com/"},"on our forum"),"."),(0,a.kt)("h3",{id:"false-positive-responses"},"False-positive responses"),(0,a.kt)("p",null,"Occasionally, some non-malicious websites get added to AdGuard's filters. We do our best to reduce the percentage of false positives, but they still occur. If you come across this behavior from AdGuard, please send us a complaint about the false-positive alarm. You can submit such complaints via our technical support at ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com"))," or on ",(0,a.kt)("a",{parentName:"p",href:"http://forum.adguard.com/"},"our forum"),"."))}c.isMDXComponent=!0}}]);