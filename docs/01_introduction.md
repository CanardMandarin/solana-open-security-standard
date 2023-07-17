---
---

# Introduction

**Solana Open Security Standard** (SOSS) is a proposition of a security **awareness standard** for Solana. Our intention is to establish a consensus about the most common security risks of Solana programs.

This document is free and open to anyone interested in Solana programs security. SOSS aims to educate Solana developers and organizations about security and the consequence of weaknesses. 

:::note
**Solana Open Security Standard** should remain neutral and free from any commercial pressure. This is why SOSS will never endorse or recommend specific products or services.
:::

# Security Risks Ranking

The security risks within Solana programs have been ranked based on the assessment of various vulnerability classes. A total of **243 vulnerabilities** were extracted from **41 audit reports** and **publicly known exploits**, forming the basis for this ranking.

**# 01 - Logic Bug:** Ranked first, the Logic Bug class exhibits the highest incidence rate and severity among the vulnerability classes. With a significant incidence rate of 78,05%, this class represents a critical security risk. Logic bugs can lead to unexpected behaviors and are crucial to address due to their potential impact on a program's security.

**# 02 - Account Validation:** Ranked second, the Account Validation class demonstrates a high incidence rate and severity. Several publicly known security incidents within the Solana ecosystem have been attributed to vulnerabilities related to account validation, this class also represents a significant security risk. Implementing proper account validation mechanisms is essential to safeguard the integrity and security of any Solana program.

**# 03 - Arithmetic:** Ranked third, the Arithmetic class shows a moderate occurrence and incidence rate. Although not as prevalent as the Logic Bug or Account Validation classes, vulnerabilities within the Arithmetic class can still pose security risks that need attention. Proper handling of mathematical operations is essential to prevent computational errors and ensure the integrity of calculations.

**# 04 - Code Quality:** Ranked fourth, the Code Quality class exhibits a relatively high incidence rate but a low impact. With 65 issues identified, this class highlights an aspect that is often overlooked. Addressing code complexity, lack of documentation, and other code quality issues is crucial for improving the overall security and maintainability of a Solana program.

**# 05 - Dependencies:** Ranked fifth, the Dependencies class demonstrates a moderate incidence. Vulnerabilities within this class arise from deprecated or unaudited external dependencies integrated into a given Solana program. Correctly managing and updating dependencies is essential to mitigate potential risks and vulnerabilities associated with third-party libraries.

**# 06 - Denial of Service:**  Ranked sixth, the Denial of Service class demonstrates a relatively low occurrence. Solana programs, by default, are upgradeable, allowing developers to address and patch Denial of Service issues. However, for non-upgradable programs, it is crucial to exercise caution as these vulnerabilities have the potential to make a program unusable.

**# 07 - Economic:** Ranked seventh, the Economic class has a very low incidence rate. While vulnerabilities within this class are relatively less prevalent, addressing economic-related risks is still important for maintaining the financial integrity of a protocol.

This ranking provides insights into the prioritization and relative significance of different security risk classes for Solana programs. By focusing on classes with higher ranks, developers can allocate resources effectively to address vulnerabilities and improve the overall security posture of the Solana ecosystem.