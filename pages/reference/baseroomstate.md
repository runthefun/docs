
## BaseRoomState interface

**Signature:**

```typescript
export interface BaseRoomState extends Schema 
```
**Extends:** Schema

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

[players](/reference/baseroomstate/players.md)


</td><td>


</td><td>

MapSchema&lt;PlayerData&gt;


</td><td>


</td></tr>
<tr><td>

[settings](/reference/baseroomstate/settings.md)


</td><td>


</td><td>

{ tickRate: number; patchRate: number; reconnectTimeout: number; }


</td><td>


</td></tr>
<tr><td>

[snapshotId](/reference/baseroomstate/snapshotid.md)


</td><td>


</td><td>

string


</td><td>


</td></tr>
<tr><td>

[timestamp](/reference/baseroomstate/timestamp.md)


</td><td>


</td><td>

number


</td><td>


</td></tr>
</tbody></table>

## Methods

<table><thead><tr><th>

Method


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[addPlayer(player)](/reference/baseroomstate/addplayer.md)


</td><td>


</td></tr>
<tr><td>

[removePlayer(sessionId)](/reference/baseroomstate/removeplayer.md)


</td><td>


</td></tr>
</tbody></table>
