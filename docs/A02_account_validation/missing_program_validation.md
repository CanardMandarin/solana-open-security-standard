---
description: Learn how to prevent the Missing Program Validation vulnerability in Solana programs. 
keywords: [Missing Program Validation, Solana program, Cross Program Invocation, program ID verification, validation, Solana vulnerability]
---

# Missing Program Validation

## Description

The "Missing Program Validation" vulnerability is a security flaw that arises in the context of Cross Program Invocation (CPI). When one program invokes another program, it needs to verify the pubkey (program ID) of the program it intends to call. Failure to perform this validation creates the "Missing Program Validation" vulnerability. Malicious actors can exploit this weakness by deploying fake programs and tricking the invoking program into running instructions from the counterfeit program.

## How To Prevent

Whenever performing Cross Program Invocation (CPI), explicitly verify the program ID (pubkey) of the invoked program.

## Example 1: Native Rust Program

### Context

Let's analyze the following program and explore the consequence of missing the program validation on lines 14 to 16.

```rust showLineNumbers
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();

    let system_program = next_account_info(accounts_iter)?;
    let metadata_program = next_account_info(accounts_iter)?;
    let signer = next_account_info(accounts_iter)?;
    let mint = next_account_info(accounts_iter)?;
    let metadata = next_account_info(accounts_iter)?;
    let authority = next_account_info(accounts_iter)?;

    // highlight-next-line
    if *system_program.key != system_program::ID {
        // highlight-next-line
        return Err(ProgramError::IncorrectProgramId);
    // highlight-next-line
    }

    // highlight-next-line
    if *metadata_program.key != mpl_token_metadata::ID {
        // highlight-next-line
        return Err(ProgramError::IncorrectProgramId);
    // highlight-next-line
    }

    if !signer.is_signer {
        return Err(ProgramError::MissingRequiredSignature);
    }

    if *mint.owner != spl_token::ID {
        return Err(ProgramError::IllegalOwner);
    }

    let _ = spl_token::state::Mint::unpack(*mint.data.borrow())?;

    if *metadata.key != find_metadata_account(mint.key).0 {
        return Err(ProgramError::InvalidArgument);   
    }

    let (expected_authority, nonce) = Pubkey::find_program_address(&[b"authority"], &program_id);
    if *authority.key != expected_authority {
        return Err(ProgramError::InvalidArgument);
    }

    invoke_signed(
        &create_metadata_accounts_v3(
            metadata_program.key(),
            metadata_account.key(),
            mint.key(),
            authority.key(),
            signer.key(),
            authority.key(),
            METADATA_NAME.to_string(),
            METADATA_SYMBOL.to_string(),
            METADATA_URI.to_string(),
            None,
            0,
            false,
            true,
            None,
            None,
            None,
        ),
        &[
            metadata_account.to_account_info(),
            mint.to_account_info(),
            authority.to_account_info(),
            authority.to_account_info(),
            signer.to_account_info(),
            metadata_program.to_account_info(),
            system_program.to_account_info(),
            rent.to_account_info(),
        ],
        &[&[&b"authority"[..], &[nonce]]]
    )?;

    Ok(())
}
```

### Program Analysis

1. The function begins by obtaining the first fives accounts from the accounts array - `system_program`, `metadata_program`, `signer`, `mint`, `metadata`, and `authority`.

2. The program then performs multiples checks:

    - **Program Validation** (Line 15 & 19): 
    It verifies whether the `system_program` and `metadata_program` account's key respectively match `system_program::ID` and `mpl_token_metadata::ID`. 

    - **Signer Check** (Line 23): It verifies if the signer account is a signer of the transaction by checking the `is_signer` field.

    - **Ownership Check** (Line 27): It ensures that the `mint` account is owned by the Token Program.

    - **Account Check** (Line 31): It ensures that the `mint` account is indeed a [Mint](https://docs.rs/spl-token/4.0.0/spl_token/state/struct.Mint.html) and not a [Token Account](https://docs.rs/spl-token/4.0.0/spl_token/state/struct.Account.html), as both account are created by the Token Program.

    - **PDA Check** (Line 33): It verifies that the `metadata` account is associated the to given `mint`. Metadata accounts are PDA derived from the mint, therefore programs have to ensure that metadata accounts are associated with the right mint. In this scenario, the check could be omitted as the Metadata program will do it when called.

    - **Logic Check** (Line 37): It validates that the `authority` account is the rightful authority.

4. If all checks pass successfully, the program proceeds to call the Metadata program in order to create a `metadata` account for the mint.

### Consequence

If the program validation were missing on lines 15 an 19, someone could supply their own malicious program instead of the `metadata_program`. The program could execute arbitrary code while having the permission over the `authority` because of the `invoke_signed`. 