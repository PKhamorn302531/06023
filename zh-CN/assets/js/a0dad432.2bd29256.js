"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9086],{4137:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=s(r),k=n,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return r?a.createElement(c,o(o({ref:e},u),{},{components:r})):a.createElement(c,o({ref:e},u))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6868:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(4137));const l={title:"\u62a5\u544a\u7f51\u7ad9",sidebar_position:3},o=void 0,i={unversionedId:"guides/report-website",id:"guides/report-website",title:"\u62a5\u544a\u7f51\u7ad9",description:"\u4f7f\u7528\u5e7f\u544a\u62e6\u622a\u7a0b\u5e8f\u65f6\uff0c\u60a8\u53ef\u80fd\u4f1a\u9047\u5230\u67d0\u4e9b\u7f51\u7ad9\u7684\u9519\u8bef\u5de5\u4f5c\u6216\u9875\u9762\u5143\u7d20\u635f\u574f\u7684\u60c5\u51b5\u3002 \u8fd9\u4e9b\u95ee\u9898\u53ef\u80fd\u662f\u7531\u4e8e\u591a\u79cd\u56e0\u7d20\u5f15\u8d77\u7684\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/report-website.md",sourceDirName:"guides",slug:"/guides/report-website",permalink:"/KnowledgeBase/zh-CN/guides/report-website",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/report-website.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u62a5\u544a\u7f51\u7ad9",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4ee3\u7406\u8bc1\u4e66\u5b89\u88c5",permalink:"/KnowledgeBase/zh-CN/guides/proxy-certificate"},next:{title:"How to report bugs",permalink:"/KnowledgeBase/zh-CN/guides/report-bugs"}},p={},s=[{value:"\u62a5\u544a\u7f51\u7ad9",id:"report",level:2},{value:"\u6d4f\u89c8\u5668\u6269\u5c55",id:"extension",level:3},{value:"Windows \u7cfb\u7edf",id:"windows",level:3},{value:"\u5b89\u5353\u7cfb\u7edf",id:"android",level:3},{value:"Mac \u7cfb\u7edf",id:"mac",level:3},{value:"iOS \u7cfb\u7edf",id:"ios",level:3},{value:"\u586b\u5199\u8868\u683c",id:"form",level:2},{value:"\u95ee\u9898\u8bca\u65ad",id:"issue",level:2},{value:"<strong>\u8fc7\u6ee4\u5668</strong>",id:"\u8fc7\u6ee4\u5668",level:3},{value:"<strong>\u9690\u8eab\u6a21\u5f0f</strong>",id:"\u9690\u8eab\u6a21\u5f0f",level:3},{value:"<strong>\u6d4f\u89c8\u5668\u6269\u5c55</strong>",id:"\u6d4f\u89c8\u5668\u6269\u5c55",level:3},{value:"<strong>\u7b2c\u4e09\u65b9\u62e6\u622a\u5668</strong>",id:"\u7b2c\u4e09\u65b9\u62e6\u622a\u5668",level:3}],u={toc:s};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f7f\u7528\u5e7f\u544a\u62e6\u622a\u7a0b\u5e8f\u65f6\uff0c\u60a8\u53ef\u80fd\u4f1a\u9047\u5230\u67d0\u4e9b\u7f51\u7ad9\u7684\u9519\u8bef\u5de5\u4f5c\u6216\u9875\u9762\u5143\u7d20\u635f\u574f\u7684\u60c5\u51b5\u3002 \u8fd9\u4e9b\u95ee\u9898\u53ef\u80fd\u662f\u7531\u4e8e\u591a\u79cd\u56e0\u7d20\u5f15\u8d77\u7684\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u6b63\u786e\u7684\u7528\u6237\u89c4\u5219\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u4fee\u6539\u6dfb\u52a0\u5e7f\u544a\u7684\u7b97\u6cd5\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e86\u6765\u81ea\u7b2c\u4e09\u65b9\u5f00\u53d1\u4eba\u5458\u7684\u8fc7\u6ee4\u5668/\u6269\u5c55\u7a0b\u5e8f\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u89c4\u5219\u65f6\uff0c\u5176\u4e2d\u4e00\u4e2a\u8fc7\u6ee4\u5668\u7684\u4f5c\u8005\u72af\u4e86\u4e00\u4e2a\u9519\u8bef\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u63d2\u5165\u5e7f\u544a\u3002 \u5728",(0,n.kt)("a",{parentName:"li",href:"https://adguard.com/blog/ad-reinsertion.html"},"\u6211\u4eec\u7684\u535a\u5ba2"),"\u4e2d\u627e\u5230\u6709\u5173\u6b64\u65b9\u6cd5\u7684\u66f4\u591a\u4fe1\u606f\u3002")),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u586b\u5199\u7533\u8bf7\u8868\u4e2d\u7684\u5e7f\u544a\u793a\u4f8b\u6765\u5e2e\u52a9\u6211\u4eec\u3002 \u4e3a\u6b64\uff0c\u8bf7\u6309\u7167\u60a8\u7684\u64cd\u4f5c\u7cfb\u7edf\u4f7f\u7528\u8bf4\u660e\u3002"),(0,n.kt)("h2",{id:"report"},"\u62a5\u544a\u7f51\u7ad9"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5f53\u60a8\u901a\u8fc7\u5e94\u7528\u6216AdGuard \u6d4f\u89c8\u5668\u52a9\u624b\u53d1\u9001\u6295\u8bc9\u65f6\uff0c\u6240\u6709\u4fe1\u606f\u90fd\u4f1a\u81ea\u52a8\u586b\u5199\u3002 \u9664\u4e86\u5c4f\u5e55\u622a\u56fe\uff0c\u60a8\u8fd8\u5fc5\u987b\u81ea\u5df1\u5236\u4f5c\u5e76\u9644\u52a0\u5b83\u4eec\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f",(0,n.kt)("a",{parentName:"p",href:"https://reports.adguard.com/new_issue.html"},"\u6b64\u94fe\u63a5"),"\uff0c\u5219\u9700\u8981\u624b\u52a8\u8f93\u5165\u6570\u636e\u3002")),(0,n.kt)("p",null,"\u8981\u62a5\u544a\u5e7f\u544a\u5df2\u91cd\u65b0\u63d2\u5165\u6216\u7f51\u7ad9\u663e\u793a\u4e0d\u6b63\u786e\uff0c\u60a8\u9700\u8981\uff1a"),(0,n.kt)("h3",{id:"extension"},"\u6d4f\u89c8\u5668\u6269\u5c55"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u76f8\u5e94\u56fe\u6807\u6253\u5f00\u6d4f\u89c8\u5668\u6269\u5c55\u8bbe\u7f6e\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u62a5\u544a\u95ee\u9898"),"\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/extension_issue.png",alt:"\u6269\u5c55 *mobile"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u586b\u5199\u4e3e\u62a5\u8868\u683c\u540e\uff0c\u5c06\u81ea\u52a8\u5728 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," \u4e0a\u521b\u5efa\u4e00\u4e2a\u95ee\u9898\u3002 \u4e5f\u5c06\u6709\u4e00\u4e2a\u94fe\u63a5\u8ba9\u7528\u6237\u76d1\u89c6\u89e3\u51b3\u95ee\u9898\u7684\u8fdb\u5ea6\u3002")),(0,n.kt)("h3",{id:"windows"},"Windows \u7cfb\u7edf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6253\u5f00 ",(0,n.kt)("a",{parentName:"li",href:"/adguard-for-windows/browser-assistant"},"AdGuard \u6d4f\u89c8\u5668\u52a9\u624b"),"\uff0c\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"li"},"\u62a5\u544a\u95ee\u9898"),"\u300d\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png",alt:"windows *border"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u586b\u5199\u4e3e\u62a5\u8868\u683c\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u540e\uff0c\u5c06\u81ea\u52a8\u5728 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," \u4e0a\u521b\u5efa\u4e00\u4e2a\u95ee\u9898\u3002 \u4e5f\u5c06\u6709\u4e00\u4e2a\u94fe\u63a5\u8ba9\u7528\u6237\u76d1\u89c6\u89e3\u51b3\u95ee\u9898\u7684\u8fdb\u5ea6\u3002")),(0,n.kt)("h3",{id:"android"},"\u5b89\u5353\u7cfb\u7edf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6253\u5f00 AdGuard \u8bbe\u7f6e\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u300c",(0,n.kt)("strong",{parentName:"li"},"\u652f\u6301"),"\u300d\uff0c\u7136\u540e\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"li"},"\u53d1\u9001\u53cd\u9988"),"\u300d \u2192 \u300c",(0,n.kt)("strong",{parentName:"li"},"\u6f0f\u62e6\u622a\u7684\u5e7f\u544a\u6216\u8ddf\u8e2a\u5668"),"\u300d/\u300c",(0,n.kt)("strong",{parentName:"li"},"\u62e6\u622a\u9519\u8bef"),"\u300d\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/android.png",alt:"android *mobile"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u586b\u5199\u4e3e\u62a5\u8868\u683c\u540e\uff0c\u5c06\u81ea\u52a8\u5728 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," \u4e0a\u521b\u5efa\u4e00\u4e2a\u95ee\u9898\u3002 \u4e5f\u5c06\u6709\u4e00\u4e2a\u94fe\u63a5\u8ba9\u7528\u6237\u76d1\u89c6\u89e3\u51b3\u95ee\u9898\u7684\u8fdb\u5ea6\u3002")),(0,n.kt)("h3",{id:"mac"},"Mac \u7cfb\u7edf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6253\u5f00 ",(0,n.kt)("a",{parentName:"li",href:"/adguard-for-mac/browser-assistant"},"AdGuard \u6d4f\u89c8\u5668\u52a9\u624b"),"\uff0c\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"li"},"\u62a5\u544a\u95ee\u9898"),"\u300d\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png",alt:"mac *mobile"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u586b\u5199\u4e3e\u62a5\u8868\u683c\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u540e\uff0c\u5c06\u81ea\u52a8\u5728 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," \u4e0a\u521b\u5efa\u4e00\u4e2a\u95ee\u9898\u3002 \u4e5f\u5c06\u6709\u4e00\u4e2a\u94fe\u63a5\u8ba9\u7528\u6237\u76d1\u89c6\u89e3\u51b3\u95ee\u9898\u7684\u8fdb\u5ea6\u3002")),(0,n.kt)("h3",{id:"ios"},"iOS \u7cfb\u7edf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6253\u5f00 AdGuard \u8bbe\u7f6e\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9",(0,n.kt)("strong",{parentName:"li"},"\u652f\u6301"),"\uff0c\u7136\u540e\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u62a5\u544a\u9519\u8bef\u62e6\u622a"),"\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/ios_issue.png",alt:"ios *mobile"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u586b\u5199\u4e3e\u62a5\u8868\u683c\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u540e\uff0c\u5c06\u81ea\u52a8\u5728 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," \u4e0a\u521b\u5efa\u4e00\u4e2a\u95ee\u9898\u3002 \u4e5f\u5c06\u6709\u4e00\u4e2a\u94fe\u63a5\u8ba9\u7528\u6237\u76d1\u89c6\u89e3\u51b3\u95ee\u9898\u7684\u8fdb\u5ea6\u3002")),(0,n.kt)("h2",{id:"form"},"\u586b\u5199\u8868\u683c"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5f53\u60a8\u901a\u8fc7\u5e94\u7528\u6216 AdGuard \u52a9\u624b\u53d1\u9001\u6295\u8bc9\u65f6\uff0c\u6240\u6709\u4fe1\u606f\u90fd\u4f1a\u81ea\u52a8\u586b\u5199\u3002 \u9664\u4e86\u5c4f\u5e55\u622a\u56fe\uff0c\u60a8\u8fd8\u5fc5\u987b\u81ea\u5df1\u5236\u4f5c\u5e76\u9644\u52a0\u5b83\u4eec\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f",(0,n.kt)("a",{parentName:"p",href:"https://reports.adguard.com/en/new_issue.html"},"\u6b64\u94fe\u63a5"),"\uff0c\u5219\u9700\u8981\u624b\u52a8\u8f93\u5165\u6570\u636e\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u586b\u5199\u8868\u683c\u59cb\u4e8e\u8be6\u7ec6\u8bf4\u660e\u8f6f\u4ef6\u7684\u7c7b\u578b\u548c\u7248\u672c\uff1b")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png",alt:"forma1 *border"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u95ee\u9898\u7684\u7c7b\u578b\u4ee5\u53ca\u6709\u5173\u4f7f\u7528\u7b2c\u4e09\u65b9\u8f6f\u4ef6\uff08\u9632\u75c5\u6bd2\uff0cVPN\uff09\u7684\u5176\u4ed6\u4fe1\u606f\uff1b")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png",alt:"forma2 *border"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u8f93\u5165\u60a8\u9047\u5230\u95ee\u9898\u7684\u9875\u9762\u7684\u5730\u5740\u548c\u60a8\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\uff08\u5982\u679c\u662f\u5e94\u7528\u7a0b\u5e8f\uff0c\u5219\u8f93\u5165\u4e0b\u8f7d\u94fe\u63a5\uff09\uff1b")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png",alt:"forma3 *border"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u5fc5\u987b\u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u60a8\u4f7f\u7528\u7684\u8fc7\u6ee4\u5668\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u9690\u8eab\u6a21\u5f0f\u8bbe\u7f6e\uff08\u5982\u679c\u542f\u7528\u4e86\u6b64\u529f\u80fd\uff09\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png",alt:"forma4 *border"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"../take-screenshot"},"\u63d0\u4f9b\u5c4f\u5e55\u622a\u56fe"),"\u6355\u83b7\u4e86\u95ee\u9898\u7684\u5b9e\u8d28\uff1b")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u91cd\u8981"),"\uff1a\u9690\u85cf\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u7535\u5b50\u90ae\u4ef6\uff0c\u7535\u8bdd\u53f7\u7801\u7b49\uff09\uff0c\u56e0\u4e3a\u5c4f\u5e55\u622a\u56fe\u5c06\u516c\u5f00\u663e\u793a\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png",alt:"forma5 *border"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u989d\u5916\u7684\u4fe1\u606f\uff0c\u4ee5\u5e2e\u52a9\u8fc7\u6ee4\u5668\u5f00\u53d1\u4eba\u5458\u4e86\u89e3\u60c5\u51b5\uff1b")),(0,n.kt)("p",null,"\u6b64\u5916\uff0c\u5982\u679c\u6709\u7684\u8bdd\uff0c\u8bf7\u8f93\u5165\u60a8\u7684 ",(0,n.kt)("strong",{parentName:"p"},"GitHub")," \u8d26\u6237\uff08\u8fd9\u5bf9\u5f00\u53d1\u8005\u6765\u8bf4\u662f\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u4ed6\u4eec\u9700\u8981\u4e00\u4e9b\u989d\u5916\u7684\u7ec6\u8282\uff0c\u624d\u80fd\u8054\u7cfb\u60a8\uff09\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png",alt:"forma6 *border"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"\u5728\u53d1\u9001\u8868\u683c\u4e4b\u524d\u68c0\u67e5\u6bcf\u4e00\u6b65\uff1b")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png",alt:"forma7 *mobile_border"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"\u5c06\u4e3a\u60a8\u63d0\u4f9b\u4e00\u4e2a\u94fe\u63a5\uff0c\u4ee5\u8ddf\u8e2a\u60a8\u7684\u4efb\u52a1\u8fdb\u5ea6\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png",alt:"forma8 *border"})),(0,n.kt)("h2",{id:"issue"},"\u95ee\u9898\u8bca\u65ad"),(0,n.kt)("p",null,"\u6b64\u9009\u9879\u9002\u7528\u4e8e\u90a3\u4e9b\u4e0d\u6015\u56f0\u96be\u5e76\u4e14\u4e0d\u4ecb\u610f\u81ea\u884c\u5bfb\u627e\u95ee\u9898\u7684\u4eba\u3002 \u8fd9\u4e0d\u9700\u8981\u4efb\u4f55\u7279\u6b8a\u6280\u80fd\u6216\u5bf9 HTML \u548c CSS \u7684\u6df1\u5165\u4e86\u89e3\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u60a8\u53ef\u80fd\u9047\u5230\u65e0\u6cd5\u6253\u5f00\u60a8\u559c\u6b22\u7684\u7f51\u7ad9\uff0c\u6388\u6743\u88ab\u7834\u574f\u6216\u67d0\u4e9b\u9875\u9762\u5143\u7d20\u663e\u793a\u4e0d\u6b63\u786e\u7684\u60c5\u51b5\u3002 \u539f\u56e0\u53ef\u80fd\u662f\u4f7f\u7528\u7279\u5b9a\u7684\u8fc7\u6ee4\u5668/\u6269\u5c55/\u9690\u8eab\u6a21\u5f0f\u8bbe\u7f6e\u3002 \u8981\u8bca\u65ad\u8fd9\u4e9b\u95ee\u9898\uff0c\u60a8\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,n.kt)("h3",{id:"\u8fc7\u6ee4\u5668"},(0,n.kt)("strong",{parentName:"h3"},"\u8fc7\u6ee4\u5668")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7981\u7528",(0,n.kt)("strong",{parentName:"li"},"\u5e7f\u544a\u62e6\u622a\u7a0b\u5e8f"),"\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u89e3\u51b3\u4e86\u95ee\u9898\uff0c\u8bf7\u91cd\u65b0\u542f\u7528\u6a21\u5757\u5e76\u9010\u4e2a\u7981\u7528\u8fc7\u6ee4\u5668\u3002 \u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u8bc6\u522b\u201c\u7834\u574f\u201d\u9875\u9762\u7684\u8fc7\u6ee4\u5668\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u60a8\u8bbe\u6cd5\u627e\u51fa\u54ea\u4e2a\u8fc7\u6ee4\u5668\u201c\u7834\u574f\u4e86\u201d\u9875\u9762\uff0c\u5219\u5728\u586b\u5199\u8868\u683c\u65f6\u5e94\u901a\u77e5\u5f00\u53d1\u4eba\u5458\uff08\u8bf7\u53c2\u89c1\u4e0a\u6587\uff09\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5e0c\u671b\u8fd4\u56de\u5230\u521d\u59cb\u8bbe\u7f6e\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u5173\u95ed\u6240\u6709\u8fc7\u6ee4\u5668\u5747\u672a\u4ea7\u751f\u4efb\u4f55\u7ed3\u679c\uff0c\u5219\u5e94\u7528\u89c4\u5219 ",(0,n.kt)("strong",{parentName:"li"},"@@||example.com^$document,extension"),"\uff1b \u5176\u4e2d ",(0,n.kt)("strong",{parentName:"li"},"example.com")," \u662f\u4e00\u4e2a\u793a\u4f8b\u7f51\u7ad9\u540d\u79f0\uff0c\u9700\u8981\u7528\u60a8\u81ea\u5df1\u7684\u9009\u9879\u66ff\u6362\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u53d1\u751f\u6545\u969c\uff08\u95ee\u9898\u672a\u89e3\u51b3\uff09\uff0c\u8bf7\u8f6c\u5230",(0,n.kt)("strong",{parentName:"li"},"\u300c\u9690\u8eab\u6a21\u5f0f\u300d"),"\u4e00\u8282\u3002")),(0,n.kt)("h3",{id:"\u9690\u8eab\u6a21\u5f0f"},(0,n.kt)("strong",{parentName:"h3"},"\u9690\u8eab\u6a21\u5f0f")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7981\u7528",(0,n.kt)("strong",{parentName:"li"},"\u9690\u8eab\u6a21\u5f0f"),"\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u8fd9\u89e3\u51b3\u4e86\u95ee\u9898\uff0c\u8bf7\u4f9d\u6b21\u6253\u5f00\u6a21\u5757\u5e76\u5173\u95ed",(0,n.kt)("strong",{parentName:"li"},"\u300c\u9690\u8eab\u6a21\u5f0f\u300d"),"\u9009\u9879\u3002 \u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u68c0\u6d4b\u54ea\u4e9b\u8bbe\u7f6e\u6b63\u5728\u201c\u7834\u574f\u201d\u9875\u9762\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u60a8\u8bbe\u6cd5\u68c0\u6d4b\u5230\u54ea\u4e2a\u8bbe\u7f6e\u201c\u7834\u574f\u4e86\u201d\u9875\u9762\uff0c\u5219\u5e94\u5728\u586b\u5199\u8868\u5355\u65f6\u901a\u77e5\u5f00\u53d1\u4eba\u5458\uff08\u8bf7\u53c2\u89c1\u4e0a\u6587\uff09\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5e0c\u671b\u8fd4\u56de\u5230\u521d\u59cb\u8bbe\u7f6e\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u51fa\u73b0\u6545\u969c\uff08\u95ee\u9898\u672a\u89e3\u51b3\uff09\uff0c\u8bf7\u8f6c\u5230",(0,n.kt)("strong",{parentName:"li"},"\u300c\u6269\u5c55\u300d"),"\u4e00\u8282\u3002")),(0,n.kt)("h3",{id:"\u6d4f\u89c8\u5668\u6269\u5c55"},(0,n.kt)("strong",{parentName:"h3"},"\u6d4f\u89c8\u5668\u6269\u5c55")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7981\u7528",(0,n.kt)("strong",{parentName:"li"},"\u6269\u5c55"),"\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u8fd9\u89e3\u51b3\u4e86\u95ee\u9898\uff0c\u8bf7\u6253\u5f00\u6a21\u5757\u5e76\u9010\u4e2a\u5173\u95ed",(0,n.kt)("strong",{parentName:"li"},"\u6269\u5c55"),"\u8bbe\u7f6e\u3002 \u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u627e\u51fa\u54ea\u4e2a\u8bbe\u7f6e\u201c\u7834\u574f\u4e86\u201d\u9875\u9762\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u60a8\u8bbe\u6cd5\u68c0\u6d4b\u5230\u54ea\u4e2a\u8bbe\u7f6e\u4f1a\u201c\u7834\u574f\u201d\u9875\u9762\uff0c\u8bf7\u5728\u586b\u5199\u8868\u5355\u65f6\u901a\u77e5\u5f00\u53d1\u4eba\u5458\uff08\u8bf7\u53c2\u89c1\u4e0a\u6587\uff09\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5e0c\u671b\u8fd4\u56de\u5230\u521d\u59cb\u8bbe\u7f6e\u3002")),(0,n.kt)("h3",{id:"\u7b2c\u4e09\u65b9\u62e6\u622a\u5668"},(0,n.kt)("strong",{parentName:"h3"},"\u7b2c\u4e09\u65b9\u62e6\u622a\u5668")),(0,n.kt)("p",null,"\u67d0\u4e9b\u6d4f\u89c8\u5668\u548c\u9632\u75c5\u6bd2\u7a0b\u5e8f\uff08\u4f8b\u5982 Yandex \u6d4f\u89c8\u5668\uff0c\u5361\u5df4\u65af\u57fa\u7b49\uff09\u5177\u6709\u5185\u7f6e\u7684\u5e7f\u544a\u62e6\u622a\u5668\u3002 \u5b83\u4eec\u53ef\u80fd\u4f1a\u5f71\u54cd\u7ad9\u70b9\u7684\u8fd0\u884c\u5e76\u5f15\u8d77\u95ee\u9898\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u6b64\u7c7b\u7a0b\u5e8f\uff0c\u8bf7\u786e\u4fdd\u95ee\u9898\u51fa\u5728 ",(0,n.kt)("strong",{parentName:"p"},"AdGuard")," \u4e00\u8fb9\uff1a\u7981\u7528 ",(0,n.kt)("strong",{parentName:"p"},"AdGuard")," \u8fc7\u6ee4\uff0c\u7136\u540e\u5c1d\u8bd5\u91cd\u590d\u8be5\u95ee\u9898\u3002 \u5982\u679c\u4ecd\u7136\u5b58\u5728\uff0c\u5219\u8868\u793a\u95ee\u9898\u662f\u7531\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u6216\u6d4f\u89c8\u5668\u5f15\u8d77\u7684\u3002 \u5982\u679c\u95ee\u9898\u662f\u7531 ",(0,n.kt)("strong",{parentName:"p"},"AdGuard")," \u5f15\u8d77\u7684\uff0c\u8bf7\u6309\u7167\u524d\u9762\u6bb5\u843d\u4e2d\u63cf\u8ff0\u7684\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\u3002"))}d.isMDXComponent=!0}}]);