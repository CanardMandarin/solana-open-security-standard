"use strict";(self.webpackChunksolana_open_security_standard=self.webpackChunksolana_open_security_standard||[]).push([[637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},o="A02 - Account Validation",c={unversionedId:"A02_account_validation/index",id:"A02_account_validation/index",title:"A02 - Account Validation",description:"Metrics",source:"@site/docs/A02_account_validation/index.md",sourceDirName:"A02_account_validation",slug:"/A02_account_validation/",permalink:"/solana-open-security-standard/docs/A02_account_validation/",draft:!1,editUrl:"https://github.com/CanardMandarin/solana-open-security-standard/tree/main/docs/docs/A02_account_validation/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Example 1: Orca Whirlpools",permalink:"/solana-open-security-standard/docs/A01_logic_bug/example_1"},next:{title:"Missing Signer Check",permalink:"/solana-open-security-standard/docs/A02_account_validation/missing_signer_check"}},s={},l=[{value:"Metrics",id:"metrics",level:2},{value:"Description",id:"description",level:2},{value:"References",id:"references",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a02---account-validation"},"A02 - Account Validation"),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("center",null,(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Incidence Rate"),(0,r.kt)("th",{parentName:"tr",align:null},"Average Severity (/5)"),(0,r.kt)("th",{parentName:"tr",align:null},"Score"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"65.85%"),(0,r.kt)("td",{parentName:"tr",align:null},"2.441"),(0,r.kt)("td",{parentName:"tr",align:null},"3.9266"))))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Accounts")," in Solana are essential data structures used by programs to store state between transactions. They are conceptually similar to files in operating systems and can hold arbitrary data that persists beyond the lifetime of a program. By default, accounts are owned by the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/runtime-facilities/programs#system-program"},"System Program"),", but they can be assigned a new owner using the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAccount")," instruction. For comprehensive details on accounts, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/accounts"},"official Solana documentation"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Account validation")," is crucial for ensuring the security of Solana programs. Failure to thoroughly validate accounts exposes the program to significant security risks and numerous exploits have been attributed to ",(0,r.kt)("strong",{parentName:"p"},"Account Validation vulnerabilities"),"."),(0,r.kt)("p",null,"Account Validation vulnerabilities have been categorized into distinct subclasses, each dedicated to specific types of validation issues. Each subclass has its own page, ensuring an in-depth coverage of these vulnerabilities."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/solana-open-security-standard/docs/A02_account_validation/missing_signer_check"},"Missing Signer Check")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/solana-open-security-standard/docs/A02_account_validation/missing_ownership_check"},"Missing Ownership Check")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/solana-open-security-standard/docs/A02_account_validation/missing_ownership_check"},"Missing Program Validation")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/solana-open-security-standard/docs/A02_account_validation/missing_ownership_check"},"Account Confusion"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/accounts"},"Solana Documentation"))))}d.isMDXComponent=!0}}]);