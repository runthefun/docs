
## Emitter variable

Use this to register listeners for events on the game (ready, update, etc)

See [Events](/reference/events.md) for the list of events you can listen to

**Signature:**

```typescript
Emitter: {
    on: (name: string, callback: Function) => void;
    off: (name: string, callback: Function) => void;
}
```
