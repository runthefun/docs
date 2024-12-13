
## ContractOf type


**Signature:**

```typescript
export type ContractOf<T extends ABI> = {
    [K in T[number]["name"]]: Extract<T[number], {
        name: K;
    }> extends infer U extends T[number] ? (U["type"] extends "function" ? (U["stateMutability"] extends "view" | "pure" ? 
    (...args: ParseType<U["inputs"]>) => Promise<BigIntify<ParseType<U["outputs"]>>> : 
    (...args: [...ParseType<U["inputs"]>, options?: TransactionOptions]) => Promise<PendingTransaction>) : U["type"] extends "event" ? {
        next: (...args: [...OrArray<ParseType<U["inputs"]>>, options?: EventNextOptions]) => Promise<EventResult<U["inputs"]> | undefined>;
        query: (...args: [...OrArray<ParseType<U["inputs"]>>, options?: EventQueryOptions]) => Promise<(EventResult<U["inputs"]> & EventResultMetaData)[]>;
    } : unknown) : unknown;
};
```
