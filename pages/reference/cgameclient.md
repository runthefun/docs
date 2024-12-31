
## CGameClient class

A Game client instance is used to join a game room on the server

**Signature:**

```typescript
export declare class CGameClient<S extends BaseRoomState = any, CM = any, RM = any> 
```

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `CGameClient` class.

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[room](/reference/cgameclient/room.md)


</td><td>

`readonly`


</td><td>

[GameRoom](/reference/gameroom.md)<!-- -->&lt;S, CM, RM&gt;


</td><td>


</td></tr>
<tr><td>

[state](/reference/cgameclient/state.md)


</td><td>

`readonly`


</td><td>

any


</td><td>


</td></tr>
<tr><td>

[status](/reference/cgameclient/status.md)


</td><td>

`readonly`


</td><td>

ConnectionStatus


</td><td>


</td></tr>
<tr><td>

[synced](/reference/cgameclient/synced.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>


</td></tr>
</tbody></table>

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
<tr><td>

[leave()](/reference/cgameclient/leave.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onDisconnect(cb)](/reference/cgameclient/ondisconnect.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onMessage(cb)](/reference/cgameclient/onmessage.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onMessage(type, cb)](/reference/cgameclient/onmessage_1.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onState(cb)](/reference/cgameclient/onstate.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onStatusChange(cb)](/reference/cgameclient/onstatuschange.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[reconnect()](/reference/cgameclient/reconnect.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[send(message)](/reference/cgameclient/send.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[send(type, data)](/reference/cgameclient/send_1.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
