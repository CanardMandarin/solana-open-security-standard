---
description: Learn how to prevent "Integer Overflow & Underflow" vulnerabilities in Solana programs. This vulnerability occurs when arithmetic operations exceed the maximum or minimum representable value, leading to unintended outcomes.
keywords: [Integer Overflow, Integer Underflow, Solana programs, arithmetic vulnerabilities, defensive programming, checked math, checked casts, overflow checks, arithmetic operations, Solana vulnerability]
---

# Integer Overflow & Underflow

## Description

Integer overflow occurs when the result of an arithmetic operation exceeds the maximum value that can be represented by the data type, causing a wraparound behavior that may lead to unexpected outcomes. Conversely, integer underflow arises when the result falls below the minimum value representable by the data type, similarly causing unintended behavior.

The consequences of integer overflow/underflow can be significant, leading to unintended and potentially malicious behavior within Solana programs. In debug mode, Rust includes checks for such occurrences and triggers panics when detected. However, in release mode, these checks are disabled by default, and arithmetic operations wrap around with two's complement, potentially leading to unexpected results.

Within the Solana ecosystem, this vulnerability class poses a serious threat, especially in financial calculations where precise values are crucial.

:::caution
Be aware that when using the Solana toolchain `(cargo build-bpf/build-sbf)`, the compilation process is performed in release mode.
:::

## How To Prevent

To mitigate the risk of integer overflow/underflow vulnerabilities, Solana developers must adopt defensive programming practices. The use of checked math and checked casts whenever possible can help avoid unintentional and potentially harmful behavior. By employing `checked_add`, `checked_sub`, `checked_mul`, and other checked operations, developers can ensure that arithmetic operations are carried out safely.

Furthermore, developers should avoid unchecked conversions between integer types (e.g., using "`as`" to cast between different integer types) and opt for checked conversions like `try_from` to prevent truncation and unexpected behavior.

:::info
Developers can effortlessly mitigate overflow/underflow by adding the following lines to the `Cargo.toml` of a project:

```toml title="Cargo.toml"
[profile.release]
overflow-checks = true
```
:::

:::caution
Enabling `overflow-checks` in a program can significantly increase the compute units consumed during execution.
:::

## Example 1: Native Rust Program

### Context

Let's analyze the following program and then explore the consequences that an overflow could cause.

```rust showLineNumbers
#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct DepositAccount {
    pub authority: Pubkey,
    pub deposit: u64,
}

pub static FEE: u64 = 10_000;

fn withdraw_collateral(program_id: &Pubkey, accounts: &[AccountInfo], amount: u64) -> ProgramResult {
    let account_iter = &mut accounts.iter();

    let signer = next_account_info(accounts_iter)?;
    let deposit_account = next_account_info(account_iter)?;

    if !signer.is_signer {
        return Err(ProgramError::MissingRequiredSignature);
    }

    if *deposit_account.owner != program_id {
        return Err(ProgramError::InvalidAccountOwner);
    }

    let mut deposit = DepositAccount::try_from_slice(&deposit_account.data.borrow())?;
    if *signer.key != deposit.authority {
        return Err(ProgramError::InvalidAccountData);
    }

    let withdraw = amount.checked_add(FEE)?;
    if amount == 0 || withdraw > deposit {
        return Err(ProgramError::InvalidInstructionData);
    }

    deposit = deposit.checked_sub(withdraw);
    deposit.serialize(&mut &mut deposit_account.data.borrow_mut()[..])?;

    // ...
    // Withdraw and transfer fees

    // msg!("Transferring {:} to signer", amount);
    // transfer(amount);

    // msg!("Transferring {:} to protocol", FEE);
    // transfer(FEE);
    // ...

    Ok(())
}
```

### Program Analysis

This code defines a program for withdrawing collateral from a `DepositAccount`. Let's analyze the code step by step:


1. `DepositAccount`: A struct representing the account type to store deposit-related information. It includes two fields: `authority` (a Pubkey representing the account's authority) and `deposit` (an unsigned 64-bit integer representing the deposited amount).

2. The program performs several checks to ensure security:

    - **Signer Check** (Line 17): It verifies if the signer account is a signer of the transaction by checking the `is_signer` field.

    - **Ownership Check** (Line 22): It ensures that the `deposit_account` is associated with the correct program by checking if its `owner` field matches the program's public key.

    - **Logic Check** (Line 27): The program deserializes the `DepositAccount` data from the `deposit_account` and checks if the `signer` is the rightful `authority` of the account.


3. The function calculates the withdrawal amount plus the fee and ensures that the withdrawal amount is not zero and is less than or equal to the current deposit in the account.

4. If all the checks pass, the program subtracts the withdrawal amount and fee from the deposit, and the updated data is serialized back to the `deposit_account`.

### Consequence

Without the `checked_add` on line 21, the calculation could potentially lead to an overflow. Since the `amount` variable is a user-supplied value, a malicious user might intentionally provide a value close to the maximum representable value for a u64. If `U64::max` is added with 5,000, the arithmetic operation will overflow, resulting in a much smaller value for the `withdraw` variable.

As a consequence, the logic test `amount == 0 || withdraw > deposit` will evaluate to false, and the program will mistakenly transfer a significant number of tokens to the signer.

# References

- [Rust Doc: Operator expressions overflow](https://doc.rust-lang.org/reference/expressions/operator-expr.html#overflow)
- [Rust Doc: Data type overflow](https://doc.rust-lang.org/book/ch03-02-data-types.html#integer-overflow)
- [Solana Smart Contracts: Common Pitfalls](https://neodyme.io/blog/solana_common_pitfalls/)
