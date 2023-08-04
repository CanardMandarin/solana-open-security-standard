# A06 - Denial of Service

## Metrics

<center>

| Incidence Rate | Average Severity (/5) | Score      |
|----------------|-----------------------|------------|
|     12.20%     |         2.750         |   0.9222   |

</center>

# Description

The "Denial of Service" (DoS) class focuses on vulnerabilities that can disrupt or prevent users from interacting with a specific Solana program. These vulnerabilities can have critical implications, especially in DeFi protocols where funds may become temporally locked or lost in the worst-case scenario. DoS attacks typically exploit design flaws, lack of proper validation, or inadequate error handling in the program's code. Attackers target these weaknesses to prevent the normal usage of a program, causing service interruptions and risks for users.

# How to Prevent

Because Solana programs are by default upgradeable, developers have the flexibility to address and patch Denial of Service issues. This significantly reduces the impact of Dos vulnerabilities, as it often prevents loss of funds and instead results in temporary unavailability of a program services.

One prevalent cause of DoS vulnerabilities, as highlighted in audit reports, is related to account deletion. While developers allow users to delete particular accounts to reclaim rent, there are instances where these accounts are necessary for specific instructions within the program.

Denial of Service issues can also arise when relying on external program accounts. For instance, token accounts can be intentionally deleted by their owners, or frozen by the freeze authority. Developers often assume that a token account will alway exist or will never be frozen, which inherently leads to Denial of Service vulnerabilities.
