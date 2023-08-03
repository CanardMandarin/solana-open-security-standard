"use strict";(self.webpackChunksolana_open_security_standard=self.webpackChunksolana_open_security_standard||[]).push([[878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Integer Overflow & Underflow",l={unversionedId:"A03_arithmetic/integer_overflow",id:"A03_arithmetic/integer_overflow",title:"Integer Overflow & Underflow",description:"Description",source:"@site/docs/A03_arithmetic/integer_overflow.md",sourceDirName:"A03_arithmetic",slug:"/A03_arithmetic/integer_overflow",permalink:"/solana-open-security-standard/docs/A03_arithmetic/integer_overflow",draft:!1,editUrl:"https://github.com/CanardMandarin/solana-open-security-standard/tree/main/docs/A03_arithmetic/integer_overflow.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"A03 - Arithmetic",permalink:"/solana-open-security-standard/docs/A03_arithmetic/"},next:{title:"Rounding Errors",permalink:"/solana-open-security-standard/docs/A03_arithmetic/rounding_errors"}},s={},c=[{value:"Description",id:"description",level:2},{value:"How To Prevent",id:"how-to-prevent",level:2},{value:"Example 1: Native Rust Program",id:"example-1-native-rust-program",level:2},{value:"Context",id:"context",level:3},{value:"Program Analysis",id:"program-analysis",level:3},{value:"Consequence",id:"consequence",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integer-overflow--underflow"},"Integer Overflow & Underflow"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Integer overflow occurs when the result of an arithmetic operation exceeds the maximum value that can be represented by the data type, causing a wraparound behavior that may lead to unexpected outcomes. Conversely, integer underflow arises when the result falls below the minimum value representable by the data type, similarly causing unintended behavior."),(0,a.kt)("p",null,"The consequences of integer overflow/underflow can be significant, leading to unintended and potentially malicious behavior within Solana programs. In debug mode, Rust includes checks for such occurrences and triggers panics when detected. However, in release mode, these checks are disabled by default, and arithmetic operations wrap around with two's complement, potentially leading to unexpected results."),(0,a.kt)("p",null,"Within the Solana ecosystem, this vulnerability class poses a serious threat, especially in financial calculations where precise values are crucial."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Be aware that when using the Solana toolchain ",(0,a.kt)("inlineCode",{parentName:"p"},"(cargo build-bpf/build-sbf)"),", the compilation process is performed in release mode.")),(0,a.kt)("h2",{id:"how-to-prevent"},"How To Prevent"),(0,a.kt)("p",null,"To mitigate the risk of integer overflow/underflow vulnerabilities, Solana developers must adopt defensive programming practices. The use of checked math and checked casts whenever possible can help avoid unintentional and potentially harmful behavior. By employing ",(0,a.kt)("inlineCode",{parentName:"p"},"checked_add"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"checked_sub"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"checked_mul"),", and other checked operations, developers can ensure that arithmetic operations are carried out safely."),(0,a.kt)("p",null,'Furthermore, developers should avoid unchecked conversions between integer types (e.g., using "',(0,a.kt)("inlineCode",{parentName:"p"},"as"),'" to cast between different integer types) and opt for checked conversions like ',(0,a.kt)("inlineCode",{parentName:"p"},"try_from")," to prevent truncation and unexpected behavior."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Developers can effortlessly mitigate overflow/underflow by adding the following lines to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," of a project:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},"[profile.release]\noverflow-checks = true\n"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Enabling ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow-checks")," in a program can significantly increase the compute units consumed during execution.")),(0,a.kt)("h2",{id:"example-1-native-rust-program"},"Example 1: Native Rust Program"),(0,a.kt)("h3",{id:"context"},"Context"),(0,a.kt)("p",null,"Let's analyze the following program and then explore the consequences that an overflow could cause."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers",showLineNumbers:!0},'#[derive(BorshSerialize, BorshDeserialize, Debug)]\npub struct DepositAccount {\n    pub authority: Pubkey,\n    pub deposit: u64,\n}\n\npub static FEE: u64 = 10_000;\n\nfn withdraw_collateral(program_id: &Pubkey, accounts: &[AccountInfo], amount: u64) -> ProgramResult {\n    let account_iter = &mut accounts.iter();\n\n    let signer = next_account_info(accounts_iter)?;\n    let deposit_account = next_account_info(account_iter)?;\n\n    if !signer.is_signer {\n        return Err(ProgramError::MissingRequiredSignature);\n    }\n\n    if *deposit_account.owner != program_id {\n        return Err(ProgramError::InvalidAccountOwner);\n    }\n\n    let mut deposit = DepositAccount::try_from_slice(&deposit_account.data.borrow())?;\n    if *signer.key != deposit.authority {\n        return Err(ProgramError::InvalidAccountData);\n    }\n\n    let withdraw = amount.checked_add(FEE)?;\n    if amount == 0 || withdraw > deposit {\n        return Err(ProgramError::InvalidInstructionData);\n    }\n\n    deposit = deposit.checked_sub(withdraw);\n    deposit.serialize(&mut &mut deposit_account.data.borrow_mut()[..])?;\n\n    // ...\n    // Withdraw and transfer fees\n\n    // msg!("Transferring {:} to signer", amount);\n    // transfer(amount);\n\n    // msg!("Transferring {:} to protocol", FEE);\n    // transfer(FEE);\n    // ...\n\n    Ok(())\n}\n')),(0,a.kt)("h3",{id:"program-analysis"},"Program Analysis"),(0,a.kt)("p",null,"This code defines a program for withdrawing collateral from a ",(0,a.kt)("inlineCode",{parentName:"p"},"DepositAccount"),". Let's analyze the code step by step:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"DepositAccount"),": A struct representing the account type to store deposit-related information. It includes two fields: ",(0,a.kt)("inlineCode",{parentName:"p"},"authority")," (a Pubkey representing the account's authority) and ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit")," (an unsigned 64-bit integer representing the deposited amount).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The program performs several checks to ensure security:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Signer Check")," (Line 17): It verifies if the signer account is a signer of the transaction by checking the ",(0,a.kt)("inlineCode",{parentName:"p"},"is_signer")," field.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Ownership Check")," (Line 22): It ensures that the ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit_account")," is associated with the correct program by checking if its ",(0,a.kt)("inlineCode",{parentName:"p"},"owner")," field matches the program's public key.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Logic Check")," (Line 27): The program deserializes the ",(0,a.kt)("inlineCode",{parentName:"p"},"DepositAccount")," data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit_account")," and checks if the ",(0,a.kt)("inlineCode",{parentName:"p"},"signer")," is the rightful ",(0,a.kt)("inlineCode",{parentName:"p"},"authority")," of the account."))))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The function calculates the withdrawal amount plus the fee and ensures that the withdrawal amount is not zero and is less than or equal to the current deposit in the account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If all the checks pass, the program subtracts the withdrawal amount and fee from the deposit, and the updated data is serialized back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit_account"),"."))),(0,a.kt)("h3",{id:"consequence"},"Consequence"),(0,a.kt)("p",null,"Without the ",(0,a.kt)("inlineCode",{parentName:"p"},"checked_add")," on line 21, the calculation could potentially lead to an overflow. Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," variable is a user-supplied value, a malicious user might intentionally provide a value close to the maximum representable value for a u64. If ",(0,a.kt)("inlineCode",{parentName:"p"},"U64::max")," is added with 5,000, the arithmetic operation will overflow, resulting in a much smaller value for the ",(0,a.kt)("inlineCode",{parentName:"p"},"withdraw")," variable."),(0,a.kt)("p",null,"As a consequence, the logic test ",(0,a.kt)("inlineCode",{parentName:"p"},"amount == 0 || withdraw > deposit")," will evaluate to false, and the program will mistakenly transfer a significant number of tokens to the signer."),(0,a.kt)("h1",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/reference/expressions/operator-expr.html#overflow"},"Rust Doc: Operator expressions overflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/ch03-02-data-types.html#integer-overflow"},"Rust Doc: Data type overflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://neodyme.io/blog/solana_common_pitfalls/"},"Solana Smart Contracts: Common Pitfalls"))))}d.isMDXComponent=!0}}]);