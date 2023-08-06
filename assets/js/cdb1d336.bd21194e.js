"use strict";(self.webpackChunksolana_open_security_standard=self.webpackChunksolana_open_security_standard||[]).push([[381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={description:"Learn how to prevent the Missing Ownership Check vulnerability in Solana programs.",keywords:["Missing Program Validation","Solana program","Cross Program Invocation","program ID verification","validation","Solana vulnerability"]},o="Missing Ownership Check",s={unversionedId:"A02_account_validation/missing_ownership_check",id:"A02_account_validation/missing_ownership_check",title:"Missing Ownership Check",description:"Learn how to prevent the Missing Ownership Check vulnerability in Solana programs.",source:"@site/docs/A02_account_validation/missing_ownership_check.md",sourceDirName:"A02_account_validation",slug:"/A02_account_validation/missing_ownership_check",permalink:"/solana-open-security-standard/docs/A02_account_validation/missing_ownership_check",draft:!1,editUrl:"https://github.com/CanardMandarin/solana-open-security-standard/tree/main/docs/A02_account_validation/missing_ownership_check.md",tags:[],version:"current",frontMatter:{description:"Learn how to prevent the Missing Ownership Check vulnerability in Solana programs.",keywords:["Missing Program Validation","Solana program","Cross Program Invocation","program ID verification","validation","Solana vulnerability"]},sidebar:"sidebar",previous:{title:"Missing Signer Check",permalink:"/solana-open-security-standard/docs/A02_account_validation/missing_signer_check"},next:{title:"Missing Program Validation",permalink:"/solana-open-security-standard/docs/A02_account_validation/missing_program_validation"}},c={},l=[{value:"Description",id:"description",level:2},{value:"How To Prevent",id:"how-to-prevent",level:2},{value:"Example 1: Native Rust Program",id:"example-1-native-rust-program",level:2},{value:"Context",id:"context",level:3},{value:"Program Analysis",id:"program-analysis",level:3},{value:"Consequence",id:"consequence",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"missing-ownership-check"},"Missing Ownership Check"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,'The "Missing Ownership Check" is a security flaw that occurs when a program fails to validate the ownership of an account before performing critical actions or making modifications. In the Solana blockchain, each account is owned by a specific program, which has the authority to modify its data. Proper ownership validation ensures that the account was not forged by another malicious program.'),(0,r.kt)("h2",{id:"how-to-prevent"},"How To Prevent"),(0,r.kt)("p",null,'Preventing "Missing Ownership Check" vulnerabilities in Solana programs is straightforward. Developers should verify the ownership of each account involved in a transaction by checking the ',(0,r.kt)("inlineCode",{parentName:"p"},"owner")," field of the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://docs.rs/solana-program/latest/solana_program/account_info/struct.AccountInfo.html"},"AccountInfo"))," struct to confirm that it is legitimately owned by the intended program."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Changing the owner of an account in Solana requires specific conditions. The owner of the account is the only entity with the privilege to execute this operation, but even then, certain conditions must be met:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The account must be writable."),(0,r.kt)("li",{parentName:"ul"},"The account cannot have executable permissions. "),(0,r.kt)("li",{parentName:"ul"},"The account's data must be either zero-initialized or empty."))),(0,r.kt)("h2",{id:"example-1-native-rust-program"},"Example 1: Native Rust Program"),(0,r.kt)("h3",{id:"context"},"Context"),(0,r.kt)("p",null,"Let's analyze the following program and then explore the consequences of missing the ownership check on lines 23 to 25."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"showLineNumbers",showLineNumbers:!0},'#[derive(BorshSerialize, BorshDeserialize, Debug)]\npub struct BankAccount {\n    pub authority: Pubkey,\n}\n\npub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    _instruction_data: &[u8],\n) -> ProgramResult {\n    let accounts_iter = &mut accounts.iter();\n\n    let signer = next_account_info(accounts_iter)?;\n    let bank_account = next_account_info(accounts_iter)?;\n    let vault = next_account_info(accounts_iter)?;\n\n    if !signer.is_signer {\n        return Err(ProgramError::MissingRequiredSignature);\n    }\n\n    // highlight-next-line\n    if bank_account.owner != program_id {\n        // highlight-next-line\n        return Err(ProgramError::IllegalOwner);\n    // highlight-next-line\n    }\n\n    let (expected_vault, nonce) = Pubkey::find_program_address(&[b"vault"], &program_id);\n    if *vault.key != expected_vault {\n        return Err(ProgramError::InvalidArgument);\n    }\n\n    let bank = BankAccount::try_from_slice(&bank_account.data.borrow())?;\n    if *signer.key != bank.authority {\n        return Err(ProgramError::InvalidAccountData);\n    }\n\n    invoke_signed(\n        &system_instruction::transfer(\n            vault.key,\n            signer.key,\n            vault.lamports(),\n        ),\n        &[vault.clone(), signer.clone()],\n        &[&[&b"vault"[..], &[nonce]]]\n    )?;\n\n    Ok(())\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," The program intentionally omits certain features to keep it small and compact. The provided code assumes that the some ",(0,r.kt)("strong",{parentName:"p"},"BankAccount")," accounts already exists with the authority field appropriately set.")),(0,r.kt)("h3",{id:"program-analysis"},"Program Analysis"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BankAccount")," struct contains a single field ",(0,r.kt)("inlineCode",{parentName:"p"},"authority"),", which stores a `Pubkey`` representing the authority allowed to withdraw lamports from the vault.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The function begins by obtaining the first three accounts from the accounts array - ",(0,r.kt)("inlineCode",{parentName:"p"},"signer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bank_account")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"vault"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The program performs several checks to ensure security and proper execution:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Signer Check")," (Line 17): It verifies if the signer account is a signer of the transaction by checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"is_signer")," field.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ownership Check")," (Line 21): It ensures that the ",(0,r.kt)("inlineCode",{parentName:"p"},"bank_account")," is associated with the correct program by checking if its ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," field matches the program's public key.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Address Verification")," (Line 26): It verifies that the ",(0,r.kt)("inlineCode",{parentName:"p"},"vault")," account's key matches this address")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Logic Check")," (Line 29): It validates that the signer is the rightful ",(0,r.kt)("inlineCode",{parentName:"p"},"authority")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"bank_account"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If all checks pass successfully, the program proceeds to transfer all lamports from the ",(0,r.kt)("inlineCode",{parentName:"p"},"vault")," account to the ",(0,r.kt)("inlineCode",{parentName:"p"},"signer"),". "))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"Address Verification")," check in the provided code could be omitted, as the ",(0,r.kt)("inlineCode",{parentName:"p"},"invoke_signed")," will fail if the ",(0,r.kt)("inlineCode",{parentName:"p"},"vault")," account is incorrect. ")),(0,r.kt)("h3",{id:"consequence"},"Consequence"),(0,r.kt)("p",null,"If the ownership check on lines 21 to 23 was missing, someone could craft a fake ",(0,r.kt)("inlineCode",{parentName:"p"},"BankAccount")," using a another program and set an arbitrary ",(0,r.kt)("inlineCode",{parentName:"p"},"authority"),". This would allow the malicious actor to withdraw the lamports from the vault by passing the forged account ",(0,r.kt)("inlineCode",{parentName:"p"},"BankAccount"),"."))}m.isMDXComponent=!0}}]);