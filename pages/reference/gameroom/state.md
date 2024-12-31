
## GameRoom.state property

Returns the current state of the room, the game state is regularly updated by the server and synced with the clients

cf [BaseRoomState](/reference/baseroomstate.md) for common properties on the state; the game server can add custom properties to the state that are specific to the game

**Signature:**

```typescript
get state(): any;
```
