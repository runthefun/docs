
## Page variable

**Signature:**

```typescript
Page: {
    gotoGame: (opts: {
        gameId: string;
        params?: Record<string, any>;
    }) => void;
    open: (url: string) => void;
    reload: () => void;
    params: () => Promise<Record<string, any>>;
}
```
