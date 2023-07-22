# Account Confusion

## Description

An "account confusion" vulnerability in Solana programs occurs when a program fails to properly validate the type of account it receives as input. Solana's account data is represented as a byte array without inherent type information, which means programs must manually deserialize the data into specific account types. However, if a program does not verify the type of the received account, it may misinterpret the data and perform unintended actions.

## How To Prevent

To prevent account confusion vulnerabilities, developers must meticulously define data structures, avoid overlapping fields between different structs, and implement rigorous type-checking to ensure that data is interpreted correctly and safely. Proper validation and verification of the data received by the program are crucial to prevent attackers from manipulating data in unintended ways and maintain the integrity and security of Solana programs.

## Example 1: Native Rust Program

### Context

This code defines two structs, `Product` and `Order`, each having a `discriminator` field to differentiate between them. The `create_product` instruction is used to create a new product account, and the `place_order` instruction allows users to place an order.


```rust showLineNumbers
const PRODUCT_DISCRIMINATOR: u32 = 0xFFAA00;
const ORDER_DISCRIMINATOR: u32 = 0xFFAA11;

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Product {
    pub discriminator: u32,
    pub id: u8,
    pub price: u64,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Order {
    pub discriminator: u32,
    pub product_id: u8,
    pub quantity: u64,
}

// Instruction to create a new product
fn create_product(program_id: &Pubkey, accounts: &[AccountInfo], id: u8, price: u64) -> ProgramResult {
    let account_iter = &mut accounts.iter();
    let product = next_account_info(account_iter)?;

    // ... 
    // !! Admin only function !!
    // Initialize a Product struct and set price and id ...
    // ... 

    Ok(())
}

// Instruction to place an order
fn place_order(program_id: &Pubkey, accounts: &[AccountInfo], quantity: u64) -> ProgramResult {
    let account_iter = &mut accounts.iter();

    let signer = next_account_info(accounts_iter)?;
    let order_account = next_account_info(account_iter)?;
    let product_account = next_account_info(account_iter)?;

    if !signer.is_signer {
        return Err(ProgramError::MissingRequiredSignature);
    }

    if *order_account.owner != program_id || *product_account.owner != program_id {
        return Err(ProgramError::InvalidAccountOwner);
    }

    let product = Product::try_from_slice(&product_account.data.borrow())?;
    // highlight-next-line
    if product.discriminator != PRODUCT_DISCRIMINATOR  {
        // highlight-next-line
        return Err(ProgramError::InvalidAccountData);
    // highlight-next-line
    }

    let mut order = Order::try_from_slice(&order_account.data.borrow())?;
    if order.discriminator != 0 {
        // Order account should be empty as we will override it
        return Err(ProgramError::InvalidAccountData);
    }

    order = Order {
        discriminator: ORDER_DISCRIMINATOR,
        product_id: product.id,
        quantity
    }

    order.serialize(&mut &mut order_account.data.borrow_mut()[..])?;

    invoke(
        &system_instruction::transfer(
            signer.key,
            product_account.key,
            product.price.checked_mul(quantity),
        ),
        &[signer.clone(), product_account.clone()],
    )?;

    Ok(())
}
```

### Program Analysis

The place_order instruction is the main focus of the explanation:

1. The function begins by obtaining the required accounts from the accounts array, the `signer`, `order_account`, and `product_account`.

2. The program performs several checks:

    - **Signer Check** (Line 39): It ensures that the transaction has been signed by the user placing the order.

    - **Ownership Check** (Line 43): It ensures that the `order_account` and `product_account` are owned by the correct program. It prevents an user from submitting an account that would a valid product id but a different price.

    - **Account Confusion Check** (Line 48): It validates that the `discriminator` field of the `Product` struct matches the constant `PRODUCT_DISCRIMINATOR`. This check is intended to ensure that the `product_account` is indeed of type `Product`.

    - **Logic Check** (Line 53): It ensures that the `order_account` is empty by verifying if the `discriminator` field is zero.

3. After passing the checks, the program creates an `Order` struct, sets its fields with the provided quantity and data from the product account, and serializes it into the `order_account` data (Lines 58-64).

4. Finally, the program transfers funds based on the quantity and price of the product (Lines 66-73).

:::info
The **Signer Check** in the provided code could technically be omitted, as the transfer on line 66 will fail if the signer did not sign the transaction.
:::

### Consequence

In the absence of `discriminator` fields and proper account confusion checks, a potential security vulnerability arises, enabling malicious users to substitute a legitimate `product_account` with an arbitrary `order_account`. This exploit becomes possible due to the identical length of the `Order` and `Product` structs.

Consider the scenario with the following product:

![small_image](/img/account_validation/account_confusion_0.png)

If a genuine user places an order for this product, specifying a quantity of 2, they would be required to pay 7000 lamports (2 * 3500), leading to the creation of an account to store the order details, as shown here:

![](/img/account_validation/account_confusion_1.png)

However, an attacker could potentially take advantage of the absence of discriminator fields and account confusion checks. By attempting to place an order with an excessive quantity, let's say 100, and deliberately providing the previous `Order` account instead of the correct `Product` account, the program would mistakenly deserialize the `Order` account as a `Product`.

As a result, the malicious user would only be charged 200 lamports (instead of the appropriate 100 * 3500), and the program would inadvertently create a new order using the manipulated data, as depicted in the illustration below:

![](/img/account_validation/account_confusion_2.png)
