"use strict";(self.webpackChunksolana_open_security_standard=self.webpackChunksolana_open_security_standard||[]).push([[575],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,v=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(v,o(o({ref:r},p),{},{components:t})):n.createElement(v,o({ref:r},p))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9884:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const i={description:"Learn how to prevent Denial of Service (DoS) vulnerabilities in your Solana programs.",keywords:["Denial of Service","DoS vulnerabilities","Solana programs","service interruptions","risk prevention","design flaws","proper validation","error handling","code security","Solana vulnerability"]},o="A06 - Denial of Service",l={unversionedId:"A06_denial_of_service/index",id:"A06_denial_of_service/index",title:"A06 - Denial of Service",description:"Learn how to prevent Denial of Service (DoS) vulnerabilities in your Solana programs.",source:"@site/docs/A06_denial_of_service/index.md",sourceDirName:"A06_denial_of_service",slug:"/A06_denial_of_service/",permalink:"/solana-open-security-standard/docs/A06_denial_of_service/",draft:!1,editUrl:"https://github.com/CanardMandarin/solana-open-security-standard/tree/main/docs/A06_denial_of_service/index.md",tags:[],version:"current",frontMatter:{description:"Learn how to prevent Denial of Service (DoS) vulnerabilities in your Solana programs.",keywords:["Denial of Service","DoS vulnerabilities","Solana programs","service interruptions","risk prevention","design flaws","proper validation","error handling","code security","Solana vulnerability"]},sidebar:"sidebar",previous:{title:"A05 - Dependencies",permalink:"/solana-open-security-standard/docs/A05_dependencies/"}},s={},c=[{value:"Metrics",id:"metrics",level:2}],p={toc:c},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"a06---denial-of-service"},"A06 - Denial of Service"),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("div",{class:"centered_table metric_table"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Incidence Rate"),(0,a.kt)("th",{parentName:"tr",align:null},"Average Severity"),(0,a.kt)("th",{parentName:"tr",align:null},"Score"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"12.20%"),(0,a.kt)("td",{parentName:"tr",align:null},"2.750"),(0,a.kt)("td",{parentName:"tr",align:null},"0.9222"))))),(0,a.kt)("h1",{id:"description"},"Description"),(0,a.kt)("p",null,'The "Denial of Service" (DoS) class focuses on vulnerabilities that can disrupt or prevent users from interacting with a specific Solana program. These vulnerabilities can have critical implications, especially in DeFi protocols where funds may become temporally locked or lost in the worst-case scenario. DoS attacks typically exploit design flaws, lack of proper validation, or inadequate error handling in the program\'s code. Attackers target these weaknesses to prevent the normal usage of a program, causing service interruptions and risks for users.'),(0,a.kt)("h1",{id:"how-to-prevent"},"How to Prevent"),(0,a.kt)("p",null,"Because Solana programs are by default upgradeable, developers have the flexibility to address and patch Denial of Service issues. This significantly reduces the impact of Dos vulnerabilities, as it often prevents loss of funds and instead results in temporary unavailability of a program services."),(0,a.kt)("p",null,"One prevalent cause of DoS vulnerabilities, as highlighted in audit reports, is related to account deletion. While developers allow users to delete particular accounts to reclaim rent, there are instances where these accounts are necessary for specific instructions within the program."),(0,a.kt)("p",null,"Denial of Service issues can also arise when relying on external program accounts. For instance, token accounts can be intentionally deleted by their owners, or frozen by the freeze authority. Developers often assume that a token account will alway exist or will never be frozen, which inherently leads to Denial of Service vulnerabilities."))}d.isMDXComponent=!0}}]);