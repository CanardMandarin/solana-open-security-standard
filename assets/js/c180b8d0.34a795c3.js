"use strict";(self.webpackChunksolana_open_security_standard=self.webpackChunksolana_open_security_standard||[]).push([[692],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,y=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8979:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={description:"Learn about the comprehensive methodology used to establish the Solana Open Security Standard, which relies on publicly available data for transparency and reproducibility.",keywords:["Solana Open Security Standard","methodology","data collection","security audits","public exploits","vulnerability classification","vulnerability scoring","incidence rate","average severity"]},o="Methodology",s={unversionedId:"methodology",id:"methodology",title:"Methodology",description:"Learn about the comprehensive methodology used to establish the Solana Open Security Standard, which relies on publicly available data for transparency and reproducibility.",source:"@site/docs/03_methodology.md",sourceDirName:".",slug:"/methodology",permalink:"/solana-open-security-standard/docs/methodology",draft:!1,editUrl:"https://github.com/CanardMandarin/solana-open-security-standard/tree/main/docs/03_methodology.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about the comprehensive methodology used to establish the Solana Open Security Standard, which relies on publicly available data for transparency and reproducibility.",keywords:["Solana Open Security Standard","methodology","data collection","security audits","public exploits","vulnerability classification","vulnerability scoring","incidence rate","average severity"]},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/solana-open-security-standard/docs/introduction"},next:{title:"Call For Data",permalink:"/solana-open-security-standard/docs/call_for_data"}},l={},c=[{value:"Data collection",id:"data-collection",level:2},{value:"Classification",id:"classification",level:2},{value:"Scoring (subject to change)",id:"scoring-subject-to-change",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"methodology"},"Methodology"),(0,r.kt)("p",null,"In order to establish an objective standard, a comprehensive methodology was employed, focusing on utilizing publicly available data. This approach ensures transparency and allows for reproducibility, enabling anyone to assess and adhere to the defined standard. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The standard has to ",(0,r.kt)("strong",{parentName:"p"},"be and remain objective"),". Anyone should be able to reproduce the result obtained.")),(0,r.kt)("h2",{id:"data-collection"},"Data collection"),(0,r.kt)("p",null,"The data collection process for creating the security standard involved a comprehensive approach to gather relevant and diverse information. Multiple sources were considered to ensure a holistic understanding of potential vulnerabilities and real-world security incidents, allowing the standard to align closely with the reality of the Solana ecosystem."),(0,r.kt)("p",null,"In the first phase of data collection, public audits conducted on Solana programs were thoroughly reviewed. Public audits are comprehensive assessments performed by independent security firms or experts. These audits provide valuable insights into the security posture of Solana programs and serve as a reliable source of vulnerability information."),(0,r.kt)("p",null,"Additionally, the data collection process involved the analysis of multiple exploits and security incidents that occurred within the Solana ecosystem."),(0,r.kt)("p",null,"By including both security audits and public exploits in the data collection process, the methodology ensures that the security standard does not rely on theoretical vulnerabilities but takes into account practical exploitation scenarios. This approach allows the standard to address potential risks and provide mitigation strategies that are grounded in the actual security landscape of the Solana ecosystem."),(0,r.kt)("p",null,"The reports used can found in the following repository: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CanardMandarin/solana-open-security-standard-reports"},"Solana Open Security Standard Reports"),".\nThe vulnerabilities extracted are available in the following google sheet: ",(0,r.kt)("a",{parentName:"p",href:"https://TODO/"},"spreadsheet")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"While collecting data, a disparity in severity levels was observed for identical vulnerabilities. The following issue has be opened to discuss this problem: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CanardMandarin/solana-open-security-standard/issues/1"},"Severity differences"),".")),(0,r.kt)("h2",{id:"classification"},"Classification"),(0,r.kt)("p",null,"Through an in-depth analysis of the gathered vulnerabilities, common characteristics and underlying factors were observed. These shared attributes allowed for the classification of vulnerabilities into specific classes that encompassed similar types of security issues and risks."),(0,r.kt)("p",null,"The purpose of extracting these categories from the gathered vulnerabilities is to provide a systematic and organized framework for understanding and addressing the security concerns within the Solana program. Each category represents a distinct area of vulnerability that requires attention and appropriate mitigation strategies."),(0,r.kt)("p",null,"The following classes were established to provide a structured framework for understanding and addressing security concerns within a Solana program:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arithmetic"),(0,r.kt)("li",{parentName:"ul"},"Account Validation"),(0,r.kt)("li",{parentName:"ul"},"Dependencies"),(0,r.kt)("li",{parentName:"ul"},"Logic Bug"),(0,r.kt)("li",{parentName:"ul"},"Denial of Service"),(0,r.kt)("li",{parentName:"ul"},"Code Quality")),(0,r.kt)("h2",{id:"scoring-subject-to-change"},"Scoring (subject to change)"),(0,r.kt)("p",null,"To determine the ranking of the security standard, vulnerability classes are assessed and ranked based on two key properties: ",(0,r.kt)("strong",{parentName:"p"},"average severity")," and ",(0,r.kt)("strong",{parentName:"p"},"incidence rate"),". The scoring process utilizes these properties to compute the score for each class within the standard."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"incidence rate")," refers to the percentage of audits that identified at least one occurrence of a vulnerability within a given class. It reflects the prevalence and frequency of vulnerabilities encountered in real-world assessments. Higher incidence rates indicate a higher likelihood of encountering vulnerabilities within that class."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"average severity")," corresponds to the average severity level of vulnerabilities within each class. Severity levels range from ",(0,r.kt)("em",{parentName:"p"},"Info (1)")," to ",(0,r.kt)("em",{parentName:"p"},"Critical (5)"),", representing increasing levels of severity and potential impact. The average severity provides an overall measure of the severity level associated with vulnerabilities within a class."),(0,r.kt)("p",null,"By combining the incidence rate and average severity, the scoring system can calculate the score for each class, enabling their ranking within the standard."),(0,r.kt)("p",null,"The scoring process ensures that classes with higher incidence rates and severity are given higher scores, indicating a greater need for attention and mitigation. Conversely, classes with lower scores may indicate a relatively lower prevalence or severity of vulnerabilities within those categories."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The scoring system may evolve. A more advanced scoring methodology is considered.")))}u.isMDXComponent=!0}}]);