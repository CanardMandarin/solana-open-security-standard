---
description: Learn about the comprehensive methodology used to establish the Solana Open Security Standard, which relies on publicly available data for transparency and reproducibility.
keywords: [Solana Open Security Standard, methodology, data collection, security audits, public exploits, vulnerability classification, vulnerability scoring, incidence rate, average severity]
---

# Methodology

In order to establish an objective standard, a comprehensive methodology was employed, focusing on utilizing publicly available data. This approach ensures transparency and allows for reproducibility, enabling anyone to assess and adhere to the defined standard. 

:::note
The standard has to **be and remain objective**. Anyone should be able to reproduce the result obtained.
:::

## Data collection

The data collection process for creating the security standard involved a comprehensive approach to gather relevant and diverse information. Multiple sources were considered to ensure a holistic understanding of potential vulnerabilities and real-world security incidents, allowing the standard to align closely with the reality of the Solana ecosystem.

In the first phase of data collection, public audits conducted on Solana programs were thoroughly reviewed. Public audits are comprehensive assessments performed by independent security firms or experts. These audits provide valuable insights into the security posture of Solana programs and serve as a reliable source of vulnerability information.

Additionally, the data collection process involved the analysis of multiple exploits and security incidents that occurred within the Solana ecosystem.

By including both security audits and public exploits in the data collection process, the methodology ensures that the security standard does not rely on theoretical vulnerabilities but takes into account practical exploitation scenarios. This approach allows the standard to address potential risks and provide mitigation strategies that are grounded in the actual security landscape of the Solana ecosystem.

The reports used can found in the following repository: [Solana Open Security Standard Reports](https://github.com/CanardMandarin/solana-open-security-standard-reports).
The vulnerabilities extracted are available in the following google sheet: [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1h-FR17KilOYrlh9FDe9gYc1-BR5ok_-oMdxZElNSFEo/edit#gid=0)

:::info
While collecting data, a disparity in severity levels was observed for identical vulnerabilities. The following issue has be opened to discuss this problem: [Severity differences](https://github.com/CanardMandarin/solana-open-security-standard/issues/1).
:::

## Classification

Through an in-depth analysis of the gathered vulnerabilities, common characteristics and underlying factors were observed. These shared attributes allowed for the classification of vulnerabilities into specific classes that encompassed similar types of security issues and risks.

The purpose of extracting these categories from the gathered vulnerabilities is to provide a systematic and organized framework for understanding and addressing the security concerns within the Solana program. Each category represents a distinct area of vulnerability that requires attention and appropriate mitigation strategies.

The following classes were established to provide a structured framework for understanding and addressing security concerns within a Solana program:

- Arithmetic
- Account Validation
- Dependencies
- Logic Bug
- Denial of Service
- Code Quality

## Scoring (subject to change)

To determine the ranking of the security standard, vulnerability classes are assessed and ranked based on two key properties: **average severity** and **incidence rate**. The scoring process utilizes these properties to compute the score for each class within the standard.

The **incidence rate** refers to the percentage of audits that identified at least one occurrence of a vulnerability within a given class. It reflects the prevalence and frequency of vulnerabilities encountered in real-world assessments. Higher incidence rates indicate a higher likelihood of encountering vulnerabilities within that class.

The **average severity** corresponds to the average severity level of vulnerabilities within each class. Severity levels range from *Info (1)* to *Critical (5)*, representing increasing levels of severity and potential impact. The average severity provides an overall measure of the severity level associated with vulnerabilities within a class.

By combining the incidence rate and average severity, the scoring system can calculate the score for each class, enabling their ranking within the standard.

The scoring process ensures that classes with higher incidence rates and severity are given higher scores, indicating a greater need for attention and mitigation. Conversely, classes with lower scores may indicate a relatively lower prevalence or severity of vulnerabilities within those categories.

:::info
The scoring system may evolve. A more advanced scoring methodology is considered.
:::
