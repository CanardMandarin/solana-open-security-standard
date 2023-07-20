# Missing Ownership Check

## Description

The "Missing Ownership Check" is a security flaw that occurs when a program fails to validate the ownership of an account before performing critical actions or making modifications. In the Solana blockchain, each account is owned by a specific program, which has the authority to modify its data. Proper ownership validation ensures that the account was not forged by another malicious program.

## How To Prevent

Preventing "Missing Ownership Check" vulnerabilities in Solana programs is straightforward. Developers should verify the ownership of each account involved in a transaction by checking the `owner` field of the _[AccountInfo](https://docs.rs/solana-program/latest/solana_program/account_info/struct.AccountInfo.html)_ struct to confirm that it is legitimately owned by the intended program.

## Example 1: Native Rust Program

### Context

Let's analyze the following program and then explore the consequences of missing the ownership check on lines 23 to 25.

```rust showLineNumbers
#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct BankAccount {
    pub authority: Pubkey,
}

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();

    let signer = next_account_info(accounts_iter)?;
    let bank_account = next_account_info(accounts_iter)?;
    let vault = next_account_info(accounts_iter)?;

    if !signer.is_signer {
        return Err(ProgramError::MissingRequiredSignature);
    }

    // highlight-next-line
    if bank_account.owner != program_id {
        // highlight-next-line
        return Err(ProgramError::IllegalOwner);
    // highlight-next-line
    }

    let (expected_vault, nonce) = Pubkey::find_program_address(&[b"vault"], &program_id);
    if *vault.key != expected_vault {
        return Err(ProgramError::InvalidArgument);
    }

    let bank = BankAccount::try_from_slice(&bank_account.data.borrow())?;
    if *signer.key != bank.authority {
        return Err(ProgramError::InvalidAccountData);
    }

    invoke_signed(
        &system_instruction::transfer(
            vault.key,
            signer.key,
            vault.lamports(),
        ),
        &[vault.clone(), signer.clone()],
        &[&[&b"vault"[..], &[nonce]]]
    )?;

    Ok(())
}
```

:::info
 The program intentionally omits certain features to keep it small and compact. The provided code assumes that the some **BankAccount** accounts already exists with the authority field appropriately set.
:::

### Program Analysis

1. The `BankAccount` struct contains a single field `authority``, which stores a `Pubkey`` representing the authority allowed to withdraw lamports from the vault.

2. The function begins by obtaining the first three accounts from the accounts array - `signer`, `bank_account` and `vault`.

3. The program performs several checks to ensure security and proper execution:

    - **Signer Check** (Line 19): It verifies if the signer account is a signer of the transaction by checking the `is_signer`` field.

    - **Ownership Check** (Line 23): It ensures that the `bank_account` is associated with the correct program by checking if its `owner` field matches the program's public key.

    - **Address Verification** (Line 28): It verifies that the `vault` account's key matches this address

    - **Logic Check** (Line 31): It validates that the signer is the rightful `authority` of the `bank_account`.

4. If all checks pass successfully, the program proceeds to transfer all lamports from the `vault` account to the `signer`. 

:::info
The **Address Verification** check in the provided code could be omitted, as the `invoke_signed` will fail if the `vault` account is incorrect. 
:::

### Consequence

If the ownership check on lines 23 to 25 was missing, someone could craft a fake `BankAccount` using a another program and set an arbitrary `authority`. This would allow the malicious actor to withdraw the lamports from the vault by passing the forged account `BankAccount`. 
