"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7729],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(a),m=r,c=h["".concat(i,".").concat(m)]||h[m]||d[m]||o;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(4137));const o={title:"Plural forms",sidebar_position:4},l=void 0,s={unversionedId:"miscellaneous/contribute/translate/plural-forms",id:"miscellaneous/contribute/translate/plural-forms",title:"Plural forms",description:"There are a lot of differences between the world\u2019s languages. One of these differences is the use of plural forms that can cause huge difficulties when it comes to localization issue.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/miscellaneous/contribute/translate/plural-forms.md",sourceDirName:"miscellaneous/contribute/translate",slug:"/miscellaneous/contribute/translate/plural-forms",permalink:"/KnowledgeBase/zh-TW/miscellaneous/contribute/translate/plural-forms",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/miscellaneous/contribute/translate/plural-forms.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Plural forms",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Guidelines and recommendations",permalink:"/KnowledgeBase/zh-TW/miscellaneous/contribute/translate/guidelines"},next:{title:"How to prioritize the translations of Crowdin files",permalink:"/KnowledgeBase/zh-TW/miscellaneous/contribute/translate/translation-priority"}},i={},u=[{value:"What do plural forms mean?",id:"plurals",level:2},{value:"Where can you learn about the number of plural forms?",id:"where-to-learn",level:2},{value:"Plurals in AdGuard translations",id:"translations",level:2},{value:"1. Phrases with string keys ending in <code>.singular</code>, <code>.dual</code>, <code>.plural</code>",id:"1type",level:3},{value:"2. Strings with singular and plural nouns separated by commas",id:"2type",level:3},{value:"3. Strings that use the Crowdin-developed pattern",id:"3type",level:3},{value:"4. Strings with templates separated by the vertical bar sign",id:"4type",level:3},{value:"Short summary",id:"summury",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are a lot of differences between the world\u2019s languages. One of these differences is the use of plural forms that can cause huge difficulties when it comes to localization issue."),(0,r.kt)("p",null,"We strongly recommend you to properly read this article to learn more about plural forms and how they are being used in AdGuard translations."),(0,r.kt)("h2",{id:"plurals"},"What do plural forms mean?"),(0,r.kt)("p",null,"Nouns in different languages can have several plural word forms. Their usage depends on the number of things you are talking about."),(0,r.kt)("p",null,"For instance, English words have two word forms when speaking about something in the singular, like ",(0,r.kt)("em",{parentName:"p"},"'one star'"),", and in the plural \u2013 ",(0,r.kt)("em",{parentName:"p"},"'two stars'"),". It doesn\u2019t matter if you say five, twenty six or even five hundred thirty two stars \u2013 the ending 's' will remain the same. But some languages can contain only one or many plural forms."),(0,r.kt)("p",null,"In contrast to English, the Polish language has three plural forms of nouns. One of them is used when speaking about something in the singular, another form is used in the plural but with numbers ending in 2-4, excluding 12-14, and the third form \u2013 for words with other numbers in front of them."),(0,r.kt)("p",null,"Let\u2019s have a look at this picture. Here you can see the groups of numerals which determine a word form when standing in front of it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png",alt:"Polish"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Find other examples ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals"},"here"),".")),(0,r.kt)("p",null,"Let\u2019s draw a small parallel between English and Polish for better understanding: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  The English version:                                                 The Polish equivalents:\n\n  1. form - It takes one hour.                                     1. form - Zajmuje to godzin\u0119. \n  2. form - It takes two hours.                                    2. form - Zajmuje to dwie godziny. \n  3. form - It takes five hours.                                   3. form - Zajmuje to pi\u0119\u0107 godzin.\n")),(0,r.kt)("p",null,"Now it is clear that the Polish ",(0,r.kt)("em",{parentName:"p"},"'godzin\u0119'")," (hour) has three different forms, whereas the English word changes its form with given numbers only twice."),(0,r.kt)("p",null,"Except for Polish, there are a lot of other languages that have three plural forms and more, such as Russian, Serbian, Slovak, Czech etc. But not all of them obey the same rule. That's why it is so important to know how many plural forms your language contains and how you can apply them."),(0,r.kt)("h2",{id:"where-to-learn"},"Where can you learn about the number of plural forms?"),(0,r.kt)("p",null,"When you are faced with a translation that requires the use of plurals, you may not be able to realize right away how many word forms your language contains."),(0,r.kt)("p",null,"Here are some sources of information you can use."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html"},"Localization Guide")," contains a wide list of languages. The number of plural forms for different languages is shown this way: 'nplurals=2', 'nplurals=4' and so on. The numeral after the Equals sign '='  means the number of plural forms of the respective language."),(0,r.kt)("p",null,"Also, you can get information about plural forms in the ",(0,r.kt)("a",{parentName:"p",href:"http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules"},"Unicode Common Locale Data Repository")," (CLDR). The CLDR Plural Rules indicate an additional word form for decimal numbers (1.5; 2.3; 100.1\u2026), but we don\u2019t use them in AdGuard translations."),(0,r.kt)("h2",{id:"translations"},"Plurals in AdGuard translations"),(0,r.kt)("p",null,"First of all, we want to mention that not every AdGuard translation requires the use of plural forms."),(0,r.kt)("p",null,"Currently, we have 4 types of strings on Crowdin that involve the use of plurals."),(0,r.kt)("p",null,"Let's take a closer look at them."),(0,r.kt)("h3",{id:"1type"},"1. Phrases with string keys ending in ",(0,r.kt)("inlineCode",{parentName:"h3"},".singular"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},".dual"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},".plural")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png",alt:"crowdin *border"})),(0,r.kt)("p",null,"Most of them are represented in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AdGuard for Windows")," project and consist of only one or two words:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"days;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extensions;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hours"))),(0,r.kt)("p",null,'Please pay attention to the string keys of such phrases and to the "Context" field where you can see some important notes about plurals. The string keys may contain ',(0,r.kt)("inlineCode",{parentName:"p"},"Singular"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Dual"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Plural")," words (ex.",(0,r.kt)("inlineCode",{parentName:"p"},"FormatDayDeclensionDual"),"). In this case, you should leave the appropriate plural form as it is specified in the key."),(0,r.kt)("h3",{id:"2type"},"2. Strings with singular and plural nouns separated by commas"),(0,r.kt)("p",null,"This kind of strings is mostly concentrated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AdGuard for Android")," project."),(0,r.kt)("p",null,"Please look at the example:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png",alt:"crowdin *border"})),(0,r.kt)("p",null,"If there are 3 plural forms of nouns in your language (like in Polish), please write all plural forms separated by commas."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hour, hours \u2014 godzin\u0119, godziny, godzin")),(0,r.kt)("p",null,"In case a noun has only 2 forms, there is no need to write the same form twice (",(0,r.kt)("em",{parentName:"p"},"typically only for this type of strings with plurals!"),"). However, it won't be a mistake if you repeat the form twice."),(0,r.kt)("h3",{id:"3type"},"3. Strings that use the Crowdin-developed pattern"),(0,r.kt)("p",null,"This is the most user-friendly scheme of translating strings with plurals."),(0,r.kt)("p",null,"Crowdin suggests to users that they translate the certain amount of phrases with different plural forms."),(0,r.kt)("p",null,"If your language provides only one plural form, then you will see only one phrase to translate. If three or more forms, Crowdin will provide you with the string divided into other two or three strings to translate."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png",alt:"crowdin *border"})),(0,r.kt)("p",null,'Please be attentive when translating these strings and approving them. If you have no idea what the "Other" field means, then just paste the same form as it is in the "Many" field. The translations of "Many" and "Other" fields can be the same.'),(0,r.kt)("h3",{id:"4type"},"4. Strings with templates separated by the vertical bar sign"),(0,r.kt)("p",null,"This is the most complicated type of AdGuard strings which is mostly used in ",(0,r.kt)("inlineCode",{parentName:"p"},"AdGuard Websites")," project."),(0,r.kt)("p",null,"Pay close attention to a vertical bar sign between the sentences and ",(0,r.kt)("strong",{parentName:"p"},"%count%")," placeholders in original phrases \u2013 this will help you identify phrases where translations require the use of plural forms."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png",alt:"crowdin *border"})),(0,r.kt)("p",null,"Now, let\u2019s imagine \u2014 you are faced with such a string: ",(0,r.kt)("inlineCode",{parentName:"p"},"Standard license for %count% computer | Standard license for %count% computers"),"."),(0,r.kt)("p",null,"What should you know to translate it correctly?"),(0,r.kt)("p",null,"Let's call the sentences which are divided by a vertical bar sign ",(0,r.kt)("strong",{parentName:"p"},'"templates"'),", because actually they serve as templates for phrases with different numbers."),(0,r.kt)("p",null,"Coming back to the example, as the English language includes only two forms, there should be two templates respectively:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Standard license for *%count%* computer | Standard license for *%count%* computers")),(0,r.kt)("p",null,"where ",(0,r.kt)("strong",{parentName:"p"},"template 1")," \u2013 Standard license for ",(0,r.kt)("em",{parentName:"p"},"%count%")," computer,"),(0,r.kt)("p",null,"and ",(0,r.kt)("strong",{parentName:"p"},"template 2")," \u2013 Standard license for ",(0,r.kt)("em",{parentName:"p"},"%count%")," computers"),(0,r.kt)("p",null,"Another important thing you should pay your attention to is ",(0,r.kt)("strong",{parentName:"p"},"%count%")," placeholders that, as usual, take place before the words they define. Instead of ",(0,r.kt)("strong",{parentName:"p"},"%count%")," here will appear different numbers depending on which templates are being chosen."),(0,r.kt)("p",null,"In a situation with another language that has, let\u2019s say, three plural forms, there should be three templates with two vertical bar signs between them."),(0,r.kt)("p",null,"For example, when we translate the above mentioned phrase into Slovak, that according to the rule of ",(0,r.kt)("a",{parentName:"p",href:"http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html"},"Localization Guide")," has three word forms, the correct translation will look so:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"**\u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010d | \u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010de | \u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010dov**")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png",alt:"Slovak"})),(0,r.kt)("p",null,"In this case, we see three templates which contain three forms of the word ",(0,r.kt)("em",{parentName:"p"},'"po\u010d\xedta\u010d"')," (computer) in Slovak."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If we ignore one of the forms and use only two templates for Slovak instead of three, the system won\u2019t be able to take an appropriate template for certain numbers")," and, as a result, we will have grammar mistakes in sentences, like in English: ",(0,r.kt)("em",{parentName:"p"},"Standard license for 5 computer"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Always use as many forms as there are in your language, even when the word itself has fewer word forms."))),(0,r.kt)("p",null,"For example, the Serbian word ",(0,r.kt)("em",{parentName:"p"},"'ra\u010dunar'")," (computer) has only two forms. But there are 3 plural forms in Serbian."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png",alt:"Serbian"})),(0,r.kt)("p",null,"Thus, the translation from English into Serbian should be:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"**Standardna licenca za *%count%* ra\u010dunar | Standardna licenca za *%count%* ra\u010dunara | Standardna licenca za *%count%* ra\u010dunara**")),(0,r.kt)("p",null,"Although it is obvious that the last two templates have no differences, it is very important to keep the rule: ",(0,r.kt)("strong",{parentName:"p"},"The number of templates should reflect the number of plural forms of the respective language!"),"(typically for this type of strings with plurals)."),(0,r.kt)("h3",{id:"summury"},"Short summary"),(0,r.kt)("p",null,"When translating AdGuard projects pay your close attention to phrases which require the use of plural forms."),(0,r.kt)("p",null,"While first three types of such strings are more or less easy to perform, the fourth type demands more vigilance."),(0,r.kt)("p",null,"And again: if you come across an original phrase with two important elements: ",(0,r.kt)("strong",{parentName:"p"},"the vertical bar sign")," and ",(0,r.kt)("strong",{parentName:"p"},"%count%")," placeholders, please do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refer to the plural rule of a language you translate into;")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The number of your templates should be consistent with the number of plural forms your language includes, even in cases some words have fewer forms themselves. Two plural forms \u2013 two templates in translations; five plural forms \u2013 five templates, etc.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not forget to use a vertical bar sign between templates as it is represented in original strings;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not translate, fill in or delete ",(0,r.kt)("strong",{parentName:"p"},"%count%")," placeholders."))),(0,r.kt)("p",null,"By following these simple rules you will help AdGuard developers avoid a lot of unnecessary complications during the localization process."))}d.isMDXComponent=!0}}]);