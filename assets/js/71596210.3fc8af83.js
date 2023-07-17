"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,k=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?i.createElement(k,a(a({ref:t},s),{},{components:n})):i.createElement(k,a({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={},a="Example 1: Orca Whirlpools",l={unversionedId:"A01_logic_bug/example_1",id:"A01_logic_bug/example_1",title:"Example 1: Orca Whirlpools",description:"Context",source:"@site/docs/A01_logic_bug/example_1.mdx",sourceDirName:"A01_logic_bug",slug:"/A01_logic_bug/example_1",permalink:"/solana-open-security-standard/docs/A01_logic_bug/example_1",draft:!1,editUrl:"https://github.com/CanardMandarin/solana-open-security-standard/tree/main/docs/docs/A01_logic_bug/example_1.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"A01 - Logic Bug",permalink:"/solana-open-security-standard/docs/A01_logic_bug/"}},c={},p=[{value:"Context",id:"context",level:2},{value:"The vulnerability",id:"the-vulnerability",level:2},{value:"References",id:"references",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,i.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"example-1-orca-whirlpools"},"Example 1: Orca Whirlpools"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Orca Whirlpools is a concentrated liquidity AMM (Automated Market Maker), a concept known from Uniswap v3. Unlike traditional AMM, liquidity providers can specify a price range over which they provide liquidity, enhancing efficiency and mitigating impermanent loss risks."),(0,r.kt)("center",null,(0,r.kt)("figure",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(4709).Z,width:"516",height:"387"})),(0,r.kt)("figcaption",null,"Creating a LP position"))),(0,r.kt)("p",null,"The following code represents the ",(0,r.kt)("inlineCode",{parentName:"p"},"open_position")," function within the Whirlpools program.\nIt has 3 parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"whirlpool"),": Pool associated to the position"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tick_lower_index"),": Integer representing the lower boundary of the price range"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tick_upper_index"),": Integer representing the upper boundary of the price range")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers",showLineNumbers:!0},"    pub fn open_position(\n        &mut self,\n        whirlpool: &Account<Whirlpool>,\n        tick_lower_index: i32,\n        tick_upper_index: i32,\n    ) -> Result<()> {\n        if !Tick::check_is_usable_tick(tick_lower_index, whirlpool.tick_spacing)\n            || !Tick::check_is_usable_tick(tick_upper_index, whirlpool.tick_spacing)\n        {\n            return Err(ErrorCode::InvalidTickIndex.into());\n        }\n\n        self.whirlpool = whirlpool.key();\n        self.tick_lower_index = tick_lower_index;\n        self.tick_upper_index = tick_upper_index;\n        Ok(())\n    }\n")),(0,r.kt)("p",null,"Before opening the position, the function performs validity checks on both the ",(0,r.kt)("inlineCode",{parentName:"p"},"tick_lower_index")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tick_upper_index"),". It uses the following ",(0,r.kt)("inlineCode",{parentName:"p"},"check_is_usable_tick")," function to ensure that the provided tick indices are within acceptable limits, given the pool's tick spacing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers",showLineNumbers:!0},"    pub const MAX_TICK_INDEX: i32 = 443636;\n    pub const MIN_TICK_INDEX: i32 = -443636;\n\n    pub fn check_is_out_of_bounds(tick_index: i32) -> bool {\n        tick_index > MAX_TICK_INDEX || tick_index < MIN_TICK_INDEX\n    }\n\n    pub fn check_is_usable_tick(tick_index: i32, tick_spacing: u16) -> bool {\n        if Tick::check_is_out_of_bounds(tick_index) {\n            return false;\n        }\n\n        tick_index % tick_spacing as i32 == 0\n    }\n")),(0,r.kt)("p",null,"After passing the tick validity checks, the function update the position's fields and create the position."),(0,r.kt)("h2",{id:"the-vulnerability"},"The vulnerability"),(0,r.kt)("p",null,"Given the code above, can you detect a logic bug that the developers missed during the development?"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Hint"),(0,r.kt)("p",null,"Pay close attention to how the ",(0,r.kt)("strong",{parentName:"p"},"tick_lower_index")," and ",(0,r.kt)("strong",{parentName:"p"},"tick_upper_index")," values are handled. Look for any ",(0,r.kt)("strong",{parentName:"p"},"missing checks or validations")," that could allow these values to be manipulated in a way that violates what the developers expected.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Spoiler"),(0,r.kt)("p",null,"During the security audit of the Orca Whirlpools program, a vulnerability was discovered in the ",(0,r.kt)("strong",{parentName:"p"},"open_position")," function. It failed to validate whether the ",(0,r.kt)("strong",{parentName:"p"},"tick_lower_index")," was ",(0,r.kt)("strong",{parentName:"p"},"smaller")," than the ",(0,r.kt)("strong",{parentName:"p"},"tick_upper_index"),", allowing attackers to manipulate these values and create positions with invalid price range boundaries. "),(0,r.kt)("p",null,"This oversight could have potentially resulted in uncovered liquidity and incorrect calculations, posing a significant risk of financial loss for users. To understand the full extent of the vulnerability and its resolution, we strongly advise referring to the comprehensive audit report and examining the Whirlpools program source code.")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CanardMandarin/solana-open-security-standard-reports/blob/main/reports/2022-05/Neodyme-Orca_Whirlpool.pdf"},"Neodyme Audit Report")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/orca-so/whirlpools"},"Whirlpool Source Code"))))}d.isMDXComponent=!0},4709:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/orca-92384b8fe3aec81066d2659dcfad3337.png"}}]);