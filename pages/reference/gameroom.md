
## GameRoom class

This class is used to communicate with the game server and sync the game state

**Signature:**

```typescript
export declare class GameRoom<S extends BaseRoomState, RM = any, CM = any> 
```

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `GameRoom` class.

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

[host](/reference/gameroom/host.md)


</td><td>

`readonly`


</td><td>

string


</td><td>

Returns the host url of the server


</td></tr>
<tr><td>

[interpolator](/reference/gameroom/interpolator.md)


</td><td>

`readonly`


</td><td>

Interpolator


</td><td>

Returns the  instance that is used to interpolate the players' states


</td></tr>
<tr><td>

[isGameLoop](/reference/gameroom/isgameloop.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[isHost](/reference/gameroom/ishost.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Returns true if the client is the host of the game room, the host is the player that created the room


</td></tr>
<tr><td>

[lastError](/reference/gameroom/lasterror.md)


</td><td>

`readonly`


</td><td>

string


</td><td>

Returns the last error message if any


</td></tr>
<tr><td>

[opts](/reference/gameroom/opts.md)


</td><td>


</td><td>

{ host: string; roomId: string; gameId: string; gameName?: string; engine: Engine; playerManager: [PlayerManager](/reference/playermanager.md)<!-- -->; disableSnapshots?: boolean; timeout?: number; remotePlayerOpts?: [PlayerAvatarOpts](/reference/playeravataropts.md)<!-- -->; multiRoom?: boolean; }


</td><td>


</td></tr>
<tr><td>

[patchRate](/reference/gameroom/patchrate.md)


</td><td>

`readonly`


</td><td>

number


</td><td>

Returns the patch rate of the server, this is the number of times the server sends a state update per second


</td></tr>
<tr><td>

[players](/reference/gameroom/players.md)


</td><td>


</td><td>

Record&lt;string, any&gt;


</td><td>


</td></tr>
<tr><td>

[ready](/reference/gameroom/ready.md)


</td><td>

`readonly`


</td><td>

Promise&lt;void&gt;


</td><td>

Returns a promise that resolves when the client is connected to the server, and the initial state is synced


</td></tr>
<tr><td>

[remotePlayerOpts](/reference/gameroom/remoteplayeropts.md)


</td><td>


</td><td>

[PlayerAvatarOpts](/reference/playeravataropts.md)


</td><td>

Use this to configure the options for the remote player avatars


</td></tr>
<tr><td>

[roomId](/reference/gameroom/roomid.md)


</td><td>

`readonly`


</td><td>

string


</td><td>

Returns the room id of the game server


</td></tr>
<tr><td>

[sessionId](/reference/gameroom/sessionid.md)


</td><td>

`readonly`


</td><td>

string


</td><td>

Returns the session id of the client that is assigned by the server


</td></tr>
<tr><td>

[state](/reference/gameroom/state.md)


</td><td>

`readonly`


</td><td>

any


</td><td>

Returns the current state of the room, the game state is regularly updated by the server and synced with the clients

cf [BaseRoomState](/reference/baseroomstate.md) for common properties on the state; the game server can add custom properties to the state that are specific to the game


</td></tr>
<tr><td>

[status](/reference/gameroom/status.md)


</td><td>

`readonly`


</td><td>

ConnectionStatus


</td><td>

Returns the status of the connection; possible values are: "disconnected", "connecting", "connected"


</td></tr>
<tr><td>

[synced](/reference/gameroom/synced.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Returns true if the room state is initially synced with the server


</td></tr>
<tr><td>

[tickRate](/reference/gameroom/tickrate.md)


</td><td>

`readonly`


</td><td>

number


</td><td>

Returns the tick rate of the server, this is the fps of the simulation loop on the serve


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

[broadcast(message)](/reference/gameroom/broadcast.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[getPlayerStateSync(selector)](/reference/gameroom/getplayerstatesync.md)


</td><td>


</td><td>

Returns the  instance that is used to sync the players' states


</td></tr>
<tr><td>

[leave()](/reference/gameroom/leave.md)


</td><td>


</td><td>

Disconnects the client from the server


</td></tr>
<tr><td>

[onConnect(listener)](/reference/gameroom/onconnect.md)


</td><td>


</td><td>

listen to connect events, this is fired when the client is connected to the server, but not necessarily synced


</td></tr>
<tr><td>

[onDisconnect(listener)](/reference/gameroom/ondisconnect.md)


</td><td>


</td><td>

listen to disconnect events, this is fired when the client is disconnected from the server


</td></tr>
<tr><td>

[onMessage(listener)](/reference/gameroom/onmessage.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onMessage(type, listener)](/reference/gameroom/onmessage_1.md)


</td><td>


</td><td>

listen to incoming messages from the server


</td></tr>
<tr><td>

[onPlayerJoined(listener)](/reference/gameroom/onplayerjoined.md)


</td><td>


</td><td>

listen to player joined events, this is fired whenever a new player joins the game room


</td></tr>
<tr><td>

[onPlayerLeft(listener)](/reference/gameroom/onplayerleft.md)


</td><td>


</td><td>

listen to player left events, this is fired whenever a player leaves the game room


</td></tr>
<tr><td>

[onStart(listener)](/reference/gameroom/onstart.md)


</td><td>


</td><td>

listen to game start notifications from the server


</td></tr>
<tr><td>

[onState(listener)](/reference/gameroom/onstate.md)


</td><td>


</td><td>

listen to state events, this is fired whenever the client receives a state update from the server as defined by the tick rate


</td></tr>
<tr><td>

[onStatusChange(listener)](/reference/gameroom/onstatuschange.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onStop(listener)](/reference/gameroom/onstop.md)


</td><td>


</td><td>

listen to game stop notifications from the server


</td></tr>
<tr><td>

[onSync(listener)](/reference/gameroom/onsync.md)


</td><td>


</td><td>

listen to sync events, this is fired when the client is connected to the server and the initial state is synced


</td></tr>
<tr><td>

[requestStart(countdown)](/reference/gameroom/requeststart.md)


</td><td>


</td><td>

Sends a request to the server to start the game


</td></tr>
<tr><td>

[send(message)](/reference/gameroom/send.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[send(type, data)](/reference/gameroom/send_1.md)


</td><td>


</td><td>

Sends a message to the server, the data type is specific to the game

For example `client.send({ type: "hit", damage: 10 })`


</td></tr>
</tbody></table>
