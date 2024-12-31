
## JoinRoomOpts interface

**Signature:**

```typescript
export interface JoinRoomOpts 
```

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

[disableSnapshots?](/reference/joinroomopts/disablesnapshots.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Disable snapshots for the room, default is true, disable only if you don't want to sync the players' states


</td></tr>
<tr><td>

[host](/reference/joinroomopts/host.md)


</td><td>


</td><td>

string


</td><td>

The host of the game server, this can be the local dev server or the production server


</td></tr>
<tr><td>

[multiRoom?](/reference/joinroomopts/multiroom.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Multi-room mode, default is false


</td></tr>
<tr><td>

[remotePlayerOpts?](/reference/joinroomopts/remoteplayeropts.md)


</td><td>


</td><td>

[PlayerAvatarOpts](/reference/playeravataropts.md)


</td><td>

_(Optional)_ Options for remote players


</td></tr>
<tr><td>

[roomId?](/reference/joinroomopts/roomid.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Usually the roomId is managed by the application (e.g. from invite links). USE THIS ONLY IF YOU WANT TO JOIN A ROOM OTHER THAN THE ONE MANAGED BY THE APPLICATION


</td></tr>
<tr><td>

[serverEngine?](/reference/joinroomopts/serverengine.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_


</td></tr>
</tbody></table>
