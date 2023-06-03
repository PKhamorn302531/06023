"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5410],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return r?o.createElement(g,l(l({ref:t},d),{},{components:r})):o.createElement(g,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(7462),n=(r(7294),r(4137));const a={title:"How to get Logcat log",sidebar_position:4},l=void 0,i={unversionedId:"adguard-for-android/solving-problems/logcat",id:"adguard-for-android/solving-problems/logcat",title:"How to get Logcat log",description:"General Instruction",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/logcat.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/logcat",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/logcat",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/logcat.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to get Logcat log",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to automate AdGuard for Android",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/tasker"},next:{title:"\u5982\u4f55\u6536\u96c6 HAR \u6587\u4ef6",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/har"}},p={},s=[{value:"General Instruction",id:"general-instruction",level:2},{value:"Capture a bug report from a device",id:"capture-a-bug-report-from-a-device",level:2},{value:"Additional Instruction (for old Android versions)",id:"additional-instruction-for-old-android-versions",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"general-instruction"},"General Instruction"),(0,n.kt)("p",null,"For troubleshooting problems with crashes a regular log is almost always not enough. In such cases to identify the origin of the problem we need the system log. Below is the instruction how to collect and get it."),(0,n.kt)("h2",{id:"capture-a-bug-report-from-a-device"},"Capture a bug report from a device"),(0,n.kt)("p",null,"To get a bug report directly from your device, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Be sure you have ",(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/device.html#developer-device-options"},"Developer Options")," enabled.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("strong",{parentName:"p"},"Developer options"),", tap ",(0,n.kt)("strong",{parentName:"p"},"Take bug report"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png",alt:"Bug report *mobile"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Select the type of bug report you want and tap ",(0,n.kt)("strong",{parentName:"li"},"Report"),". >After a moment you get a notification that the bug report is ready (see figure 2).")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png",alt:"Bug report *mobile"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"To share the bug report, tap the notification.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png",alt:"Bug report *mobile_border"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Send this log to our support team.",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Note: Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.")))),(0,n.kt)("h2",{id:"additional-instruction-for-old-android-versions"},"Additional Instruction (for old Android versions)"),(0,n.kt)("p",null,"On old Android devices there is no such option to take a bug report automatically. It has to be done manually by following this instruction:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Part #1: prepare the device")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Switch device to the developer mode. To do this: go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," > ",(0,n.kt)("strong",{parentName:"p"},"About")," > tap on ",(0,n.kt)("strong",{parentName:"p"},"Build Number")," 7 times.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Developer Options"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable ",(0,n.kt)("strong",{parentName:"p"},"USB debugging"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Increase ",(0,n.kt)("strong",{parentName:"p"},"Logger buffer")," sizes to 4MB per log buffer."))),(0,n.kt)("p",null,"4MB should be enough for storing the logs we need until you're able to do the second part (getting log from the device);"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important:")," you need to reproduce the problem after you've done with the first part!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Part #2: get the log")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect your device to PC with USB cable.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download and install Minimal ADB:"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://forum.xda-developers.com/showthread.php?t=2317790"},"http://forum.xda-developers.com/showthread.php?t=2317790")),(0,n.kt)("p",null,"Direct download link:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.androidfilehost.com/?fid=24052804347803384"},"https://www.androidfilehost.com/?fid=24052804347803384")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Run this command in the console (it will be opened after install):",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"adb logcat -v threadtime -d > C:\\logcat.txt")))),(0,n.kt)("p",null,"Send this log to us by contacting support or by any other way."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Alternative way for ROOT users:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download and run ",(0,n.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.pluscubed.matlog"},"Logcat"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("strong",{parentName:"p"},"Record")," in the menu. Choose a name for a log file or just press ",(0,n.kt)("strong",{parentName:"p"},"OK"),". Now you can press ",(0,n.kt)("strong",{parentName:"p"},"Home")," button, CatLog will continue recording the log in background.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce the issue.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open CatLog and press ",(0,n.kt)("strong",{parentName:"p"},"Stop record")," in the menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Send this log to our support team."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Note: Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.")))))}u.isMDXComponent=!0}}]);