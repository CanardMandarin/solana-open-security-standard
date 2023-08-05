# A05 - Dependencies

## Metrics

<center>

| Incidence Rate | Average Severity (/5) | Score      |
|----------------|-----------------------|------------|
|     29.27%     |         1.785         |   0.9333   |

</center>

## Description

When developing software, it is common to rely on external libraries and packages to add functionality and speed up development. However, this reliance on third-party code introduces potential risks and vulnerabilities.

A major concern lies in the utilization of deprecated or unaudited dependencies. Deprecated dependencies lack active maintenance, which means they might contain known security flaws that will remain unfixed. On the other hand, unaudited dependencies may not have undergone proper security evaluations, leading to an uncertain security posture.

## How to prevent

To mitigate these risks, it is essential to adopt a robust dependency management strategy. This includes regularly monitoring the dependencies used in a Solana program, keeping track of their maintainers' activity, and staying informed about security advisories and updates. Minimizing the number of dependencies used in a project can improve security, as it reduces the potential attack surface. Additionally, opting for well-established and reputable libraries with a history of security audits can provide an extra layer of assurance.

:::info
Developers can use `cargo audit` to quickly scan a project's dependencies for vulnerabilities: https://github.com/RustSec/rustsec/tree/main/cargo-audit
:::
