---
description: Learn the importance of account validation in Solana programs to ensure security. Discover various vulnerabilities, including Missing Signer Check, Missing Ownership Check, Missing Program Validation, and Account Confusion.
keywords: [Solana account validation, Solana programs, security risks, vulnerabilities, Missing Signer Check, Missing Ownership Check, Missing Program Validation, Account Confusion]
---

# A02 - Account Validation

## Metrics

<div class="centered_table metric_table">

| Incidence Rate | Average Severity      | Score      |
|----------------|-----------------------|------------|
|     65.85%     |         2.441         |   3.9266   |

</div>

## Description

**Accounts** in Solana are essential data structures used by programs to store state between transactions. They are conceptually similar to files in operating systems and can hold arbitrary data that persists beyond the lifetime of a program. By default, accounts are owned by the [System Program](https://docs.solana.com/developing/runtime-facilities/programs#system-program), but they can be assigned a new owner using the `CreateAccount` instruction. For comprehensive details on accounts, refer to the [official Solana documentation](https://docs.solana.com/developing/programming-model/accounts).

**Account validation** is crucial for ensuring the security of Solana programs. Failure to thoroughly validate accounts exposes the program to significant security risks and numerous exploits have been attributed to **Account Validation vulnerabilities**.

Account Validation vulnerabilities have been categorized into distinct subclasses, each dedicated to specific types of validation issues. Each subclass has its own page, ensuring an in-depth coverage of these vulnerabilities.

1. [Missing Signer Check](./missing_signer_check.md)
2. [Missing Ownership Check](./missing_ownership_check.md)
3. [Missing Program Validation](./missing_program_validation.md)
4. [Account Confusion](./account_confusion.md)

## References 

- [Solana Documentation](https://docs.solana.com/developing/programming-model/accounts)