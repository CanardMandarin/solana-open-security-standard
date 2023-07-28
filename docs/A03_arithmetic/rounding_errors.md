# Rounding Errors

Rounding errors occur in approximate arithmetic when a calculation is performed using a limited number of digits or precision, leading to an approximation of the exact result. In contrast to exact arithmetic, which yields precise results, approximate arithmetic introduces small discrepancies due to the truncation or rounding of numbers.

Rounding errors can accumulate and propagate through subsequent calculations, leading to larger discrepancies. In some cases, this can cause significant deviations in the final result, impacting the accuracy of computations.

Dealing with rounding errors requires careful consideration of numerical precision, appropriate rounding techniques, and, in some cases, using specialized numerical methods or arbitrary precision arithmetic to minimize the impact of these errors.

## How To Prevent

Establishing clear and consistent rounding direction policies is essential. When instructions involve sending tokens to a user, it is generally recommended to round down to the nearest value. This approach ensures that users do not receive more funds than they should, preventing overestimation.

On the other hand, rounding up is the preferred method in calculations that determine the amount of tokens a user should send. For instance, developers may opt to round up fees computations to guarantee that users always cover the necessary fees, even when dealing with small amounts. 

Minimizing rounding operations is another crucial aspect to prevent errors. Performing rounding only at the final output stage and keeping intermediate values in their full precision can help avoid cumulative errors that may arise from multiple rounding operations. By reducing the number of rounding steps, developers can maintain the accuracy of numerical computations.

# Reference

- [Ottersec: Becoming a Millionaire, 0.000150 BTC at a Time](https://osec.io/blog/2022-04-26-spl-swap-rounding)
- [Neodyme: How to Become a Millionaire, 0.000001 BTC at a Time](https://neodyme.io/blog/lending_disclosure/)