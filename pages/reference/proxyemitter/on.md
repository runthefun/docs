
## ProxyEmitter.on property

**Signature:**

```typescript
on: <K extends keyof T & string>(name: K, callback: (...args: T[K]) => void) => () => void;
```
