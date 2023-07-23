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

# References


- [Rust Doc: Operator expressions overflow](https://doc.rust-lang.org/reference/expressions/operator-expr.html#overflow)
- [Rust Doc: Data type overflow](https://doc.rust-lang.org/book/ch03-02-data-types.html#integer-overflow)
- [Solana Smart Contracts: Common Pitfalls](https://neodyme.io/blog/solana_common_pitfalls/)
