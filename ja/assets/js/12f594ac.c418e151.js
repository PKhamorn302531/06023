"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6098],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),k=n,N=m["".concat(l,".").concat(k)]||m[k]||d[k]||o;return a?r.createElement(N,p(p({ref:t},c),{},{components:a})):r.createElement(N,p({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},354:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(4137));const o={title:"How to install a proxy certificate",sidebar_position:2},p=void 0,i={unversionedId:"guides/proxy-certificate",id:"guides/proxy-certificate",title:"How to install a proxy certificate",description:"Desktop AdGuard apps (AdGuard for Windows and AdGuard for Mac) can be used as a proxy. This means that you can route other devices' traffic through AdGuard (entirely, or traffic of specific apps/browsers).",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/proxy-certificate.md",sourceDirName:"guides",slug:"/guides/proxy-certificate",permalink:"/KnowledgeBase/ja/guides/proxy-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/proxy-certificate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to install a proxy certificate",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to collect a HAR file",permalink:"/KnowledgeBase/ja/guides/collect-har-file"},next:{title:"How to report a website",permalink:"/KnowledgeBase/ja/guides/report-website"}},l={},s=[{value:"How to download and install the certificate",id:"how-to-download-and-install-the-certificate",level:2},{value:"Windows",id:"windows",level:3},{value:"Mac",id:"mac",level:3},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Desktop AdGuard apps (AdGuard for Windows and AdGuard for Mac) can be used as a proxy. This means that you can route other devices' traffic through AdGuard (entirely, or traffic of specific apps/browsers)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that these devices must be in the same network as the PC or Mac on which AdGuard is installed.")),(0,n.kt)("p",null,"HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install AdGuard certificate on the connected device."),(0,n.kt)("h2",{id:"how-to-download-and-install-the-certificate"},"How to download and install the certificate"),(0,n.kt)("p",null,"Depending on the operation system of your device (Windows/Mac/Android/iOS), follow one of these instructions:"),(0,n.kt)("h3",{id:"windows"},"Windows"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Note the IP address of your desktop computer with installed AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure AdGuard\u2019s protection is enabled. Then check the box ",(0,n.kt)("strong",{parentName:"p"},"Use AdGuard as an HTTP proxy")," in the ",(0,n.kt)("strong",{parentName:"p"},"Network")," tab of its settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the same device with AdGuard follow this link using any browser: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Download")," button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfer the downloaded ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," file to the device which traffic you want to route through AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On that device, press the ",(0,n.kt)("strong",{parentName:"p"},"Win")," button, type ",(0,n.kt)("inlineCode",{parentName:"p"},"Manage computer certificates")," and press ",(0,n.kt)("strong",{parentName:"p"},"Enter"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("em",{parentName:"p"},"Certificates - Local Computer")," page, find the ",(0,n.kt)("em",{parentName:"p"},"Trusted Root Certification")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Certificates")," folder.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Right-click the ",(0,n.kt)("em",{parentName:"p"},"Certificates")," folder and click ",(0,n.kt)("strong",{parentName:"p"},"All Tasks")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Import"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("em",{parentName:"p"},"Certificate Import Wizard")," page, click ",(0,n.kt)("strong",{parentName:"p"},"Next"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Browse")," to import the certificate.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," certificate file, select it, then click ",(0,n.kt)("strong",{parentName:"p"},"Open"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Next"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Place all certificates in the following store")," checkbox.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure that the ",(0,n.kt)("em",{parentName:"p"},"Certificate store")," field displays ",(0,n.kt)("em",{parentName:"p"},"Trusted Root Certification Authorities")," and click ",(0,n.kt)("strong",{parentName:"p"},"Next"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Finish"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Press the ",(0,n.kt)("strong",{parentName:"p"},"Win")," key, then open ",(0,n.kt)("strong",{parentName:"p"},"Settings"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Network & Internet")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Toggle ",(0,n.kt)("em",{parentName:"p"},"Automatically detect settings")," off.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Set up")," in the ",(0,n.kt)("em",{parentName:"p"},"Use a proxy server")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Turn the toggle on. For ",(0,n.kt)("strong",{parentName:"p"},"Proxy IP address"),", enter the noted IP address of your desktop computer (step 1). For ",(0,n.kt)("strong",{parentName:"p"},"Port"),", enter the port chosen in the network settings of the desktop AdGuard app.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("h3",{id:"mac"},"Mac"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Note the IP address of your desktop computer with installed AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure AdGuard\u2019s protection is enabled. Then go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"HTTP proxy")," and check the box ",(0,n.kt)("strong",{parentName:"p"},"Use AdGuard as an HTTP proxy"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the same computer with AdGuard follow this link using any browser: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Download")," button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfer the downloaded ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," file to the device which traffic you want to route through AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Double-click the downloaded certificate file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the administrator password and then click ",(0,n.kt)("strong",{parentName:"p"},"Modify Keychain"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Spotlight"),' (the search icon in the top right corner), type in "Keychain Access", and then select ',(0,n.kt)("strong",{parentName:"p"},"Keychain Access")," from the search results.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Under ",(0,n.kt)("em",{parentName:"p"},"System"),", highlight the certificate that you added.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Right-click on it and choose ",(0,n.kt)("strong",{parentName:"p"},"Get Info")," from the context menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Expand ",(0,n.kt)("em",{parentName:"p"},"Trust")," to display the trust policies for the certificate.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Under ",(0,n.kt)("em",{parentName:"p"},"Secure Sockets Layers (SSL)"),", select ",(0,n.kt)("strong",{parentName:"p"},"Always Trust"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"System Preferences")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," and choose the upper active connection.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Details...")," and navigate to the ",(0,n.kt)("strong",{parentName:"p"},"Proxies")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tick two checkboxes: ",(0,n.kt)("em",{parentName:"p"},"Web proxy (HTTP)")," and ",(0,n.kt)("em",{parentName:"p"},"Secure web proxy (HTTPS)"),". In the ",(0,n.kt)("strong",{parentName:"p"},"Server")," field, enter the noted IP address of your computer (step 1). In the ",(0,n.kt)("strong",{parentName:"p"},"Port")," field, enter the port chosen in the network settings of the AdGuard desktop app."))),(0,n.kt)("h3",{id:"android"},"Android"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Note the IP address of your desktop computer with installed AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure AdGuard\u2019s protection is enabled. Then check the box ",(0,n.kt)("strong",{parentName:"p"},"Use AdGuard as an HTTP proxy")," in the ",(0,n.kt)("strong",{parentName:"p"},"Network")," tab of its settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the same computer with AdGuard follow this link using any browser: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Download")," button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfer the downloaded ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," file to the device which traffic you want to route through AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate and tap the previously downloaded ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," certificate to open the file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On some phones, you might be asked to enter your device password. Do that, then press ",(0,n.kt)("strong",{parentName:"p"},"OK"),". The certificate is now installed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open advanced settings of the active Wi-Fi network.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Switch the ",(0,n.kt)("strong",{parentName:"p"},"Proxy type")," to ",(0,n.kt)("strong",{parentName:"p"},"Manual"),". For ",(0,n.kt)("strong",{parentName:"p"},"Proxy hostname"),", enter the noted IP address of your desktop computer (step 1). For ",(0,n.kt)("strong",{parentName:"p"},"Proxy port"),", enter the port chosen in the network settings of the AdGuard desktop app."))),(0,n.kt)("h3",{id:"ios"},"iOS"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Note the IP address of your desktop computer with installed AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure AdGuard\u2019s protection is enabled. Then check the box ",(0,n.kt)("strong",{parentName:"p"},"Use AdGuard as an HTTP proxy")," in the ",(0,n.kt)("strong",{parentName:"p"},"Network")," tab of its settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the same computer with AdGuard follow this link using any browser: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Download")," button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfer the downloaded ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," file to the device which traffic you want to route through AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Security")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Encryption & Credentials")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Install a certificate"),". Android devices do not trust certificates by default so there will be a warning when you choose ",(0,n.kt)("strong",{parentName:"p"},"CA certificate"),". Tap ",(0,n.kt)("strong",{parentName:"p"},"Install anyway"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Profile Donwloaded")," and tap ",(0,n.kt)("strong",{parentName:"p"},"Install")," in the top right corner. Enter your password and confirm the installation. Tap ",(0,n.kt)("strong",{parentName:"p"},"Done"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"General")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"About")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Certificate Trust Settings"),". Enable the switch beside ",(0,n.kt)("em",{parentName:"p"},"Adguard Personal CA"),". The certificate is now installed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On that device, open advanced settings of the active Wi-Fi network.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Switch the ",(0,n.kt)("strong",{parentName:"p"},"Proxy type")," to ",(0,n.kt)("strong",{parentName:"p"},"Manual"),". For ",(0,n.kt)("strong",{parentName:"p"},"Proxy hostname"),", enter the noted IP address of your computer (step 1). For ",(0,n.kt)("strong",{parentName:"p"},"Proxy port"),", enter the port chosen in the network settings of the AdGuard desktop app."))))}d.isMDXComponent=!0}}]);