
## PlayerWrapper class

Represents a player entity in the game.

A PlayerWrapper instance is always created for the main player of the game; In mulitplayer mode, a PlayerWrapper instanceRor remote players in mulitplayer mode.

By default an avatar component is created for each player. You can customise the avatar used by the game using the current snippet in the `onPreload` method of the script

**Signature:**

```typescript
export declare class PlayerWrapper 
```

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `PlayerWrapper` class.

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

[\_dataTemplate](/reference/playerwrapper/_datatemplate.md)


</td><td>

`static`


</td><td>

any


</td><td>


</td></tr>
<tr><td>

[avatar](/reference/playerwrapper/avatar.md)


</td><td>


</td><td>

[AvatarComponent](/reference/avatarcomponent.md)


</td><td>

Avatar component attached to the player


</td></tr>
<tr><td>

[avatarData](/reference/playerwrapper/avatardata.md)


</td><td>


</td><td>

any


</td><td>

Current avatar data for the player, this is the data used to create the avatar component


</td></tr>
<tr><td>

[avatarReady](/reference/playerwrapper/avatarready.md)


</td><td>


</td><td>

Promise&lt;[AvatarComponent](/reference/avatarcomponent.md)<!-- -->&gt;


</td><td>

A promise that resolves when the avatar component for the player is created


</td></tr>
<tr><td>

[data](/reference/playerwrapper/data.md)


</td><td>


</td><td>

[PlayerData](/reference/playerdata.md)


</td><td>

Current data for the player (session id, name, position, rotation etc)


</td></tr>
<tr><td>

[EVENTS](/reference/playerwrapper/events.md)


</td><td>


</td><td>

{ userDataChange: string; userChanged: string; }


</td><td>


</td></tr>
<tr><td>

[isAnonymous](/reference/playerwrapper/isanonymous.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Returns true if the player is anonymous (not logged in)


</td></tr>
<tr><td>

[isHost](/reference/playerwrapper/ishost.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Returns true if the player is the host of the game, in multiplayer mode the host is the player who created the game room


</td></tr>
<tr><td>

[name](/reference/playerwrapper/name.md)


</td><td>

`readonly`


</td><td>

string


</td><td>

Returns the player's name


</td></tr>
<tr><td>

[sessionId](/reference/playerwrapper/sessionid.md)


</td><td>

`readonly`


</td><td>

string


</td><td>

Returns the player's session id, in multiplayer this is the id assigned by the server


</td></tr>
<tr><td>

[userId](/reference/playerwrapper/userid.md)


</td><td>

`readonly`


</td><td>

string


</td><td>

Returns the player's user id


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

[getAvatarData()](/reference/playerwrapper/getavatardata.md)


</td><td>


</td><td>

Returns the default avatar data used to create the avatar component


</td></tr>
<tr><td>

[onUserChange(cb)](/reference/playerwrapper/onuserchange.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onUserDataChange(cb)](/reference/playerwrapper/onuserdatachange.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[setAvatarData(data)](/reference/playerwrapper/setavatardata.md)


</td><td>


</td><td>

Set the avatar data used to create the avatar component for the player


</td></tr>
<tr><td>

[setOtherAvatarData(data)](/reference/playerwrapper/setotheravatardata.md)


</td><td>


</td><td>

Set the others data used to create the avatar component for the player


</td></tr>
</tbody></table>
