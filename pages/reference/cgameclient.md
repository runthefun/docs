
## CGameClient class

A Game client instance is used to join a game room on the server

**Signature:**

```typescript
export declare class CGameClient<S extends BaseRoomState = any, CM = any, RM = any> 
```

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `CGameClient` class.

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[join(opts)](/reference/cgameclient/join.md)


</td><td>


</td><td>

Used to join a game room on the server Returns a [GameRoom](/reference/gameroom.md) instance


</td></tr>
</tbody></table>
