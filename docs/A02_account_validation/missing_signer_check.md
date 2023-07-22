# Missing Signer Check

## Description

Vulnerabilities known as "Missing Signer Check" are security flaws that occur when the validation of a transaction signer is not properly implemented. On the Solana blockchain, transactions are signed by accounts using their corresponding private keys to authorize actions or state modifications. These signatures ensure that only the rightful owner of an account can make changes to its data.

When a program fails to validate the signer's identity before executing a transaction or modifying sensitive data, it opens the door for potential malicious actors to exploit the program. The "Missing Signer Check" vulnerability essentially allows unauthorized parties to perform actions as if they were legitimate account owners, generally leading to harmful scenarios.

## How To Prevent

Preventing "Missing Signer Check" vulnerabilities in Solana programs is straightforward. Developers have to validate the `is_signer` field of the *[AccountInfo](https://docs.rs/solana-program/latest/solana_program/account_info/struct.AccountInfo.html)* struct. With this simple check, developers can ensure that only the rightful owner of an account can execute transactions that will modify critical data.

:::caution
Treating accounts as user input is a fundamental principle in building secure and robust Solana programs.
:::

## Example 1: Native Rust Program

### Context

Let's analyze the following Solana program and then explore the consequences of missing the signer check on lines 19 to 21.

```rust showLineNumbers
#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct IdentityAccount {
    pub counter: u32,
    pub authority: Pubkey,
}

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();

    let signer = next_account_info(accounts_iter)?;
    let identity_account = next_account_info(accounts_iter)?;

    // highlight-next-line
    if !signer.is_signer {
        // highlight-next-line
        return Err(ProgramError::MissingRequiredSignature);
    // highlight-next-line
    }

    if identity_account.owner != program_id {
        return Err(ProgramError::IllegalOwner);
    }

    let mut identity = IdentityAccount::try_from_slice(&identity_account.data.borrow())?;
    if *signer.key != identity.authority {
        return Err(ProgramError::InvalidAccountData);
    }

    identity.counter = identity.counter.checked_add(1);
    identity.serialize(&mut &mut account.data.borrow_mut()[..])?;

    Ok(())
}

```

:::info
 The program intentionally omits certain features to keep it small and compact. The provided code assumes that the some **IdentityAccount**  accounts already exists with the authority field appropriately set.
:::


### Program Analysis

1. The `IdentityAccount` struct contains two fields: `counter` and `authority` (a Pubkey representing the authority allowed to update the counter).

2. The function begins by obtaining the first two accounts from the accounts array - `signer` and `identity_account`.

3. The program then performs three crucial checks:

    - **Signer Check** (Line 17): It verifies if the signer account is a signer of the transaction by checking the `is_signer` field.

    - **Ownership Check** (Line 21): It ensures that the `identity_account` is associated with the correct program by checking if its owner field matches the `program_id`.

    - **Logic Check** (Line 26): It validates that the signer is the rightful `authority` of the `identity_account`.

4. After passing all checks, the program increments the `counter` field of the `IdentityAccount` struct and then serializes it back to the account data.

:::info
The **Ownership Check** in the provided code could be omitted, as the Solana runtime inherently ensures that a program cannot modify an account it does not own. 
:::

### Consequence

If the signer check on lines 17 to 19 was missing, anyone could initiate a transaction with any arbitrary `IdentityAccount` and its associated `authority`. The program would increment the counter and update the account regardless of whether the authority has signed the transaction.