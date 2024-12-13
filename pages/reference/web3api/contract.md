
## Web3Api.Contract property

Create a new Contract instance if reanOnly is not set to true creating a contract will require a wallet connection

**Signature:**

```typescript
Contract: <T extends ABI>(address: string, abi: T, chain: Chain) => Promise<Contract & ContractOf<T>>;
```
