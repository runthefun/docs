
## PlayerManager class

A class to access to all player entities on the game

**Signature:**

```typescript
export declare class PlayerManager 
```

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `PlayerManager` class.

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

[main](/reference/playermanager/main.md)


</td><td>


</td><td>

[PlayerWrapper](/reference/playerwrapper.md)


</td><td>

Main player of the game


</td></tr>
<tr><td>

[opts](/reference/playermanager/opts.md)


</td><td>


</td><td>

{ isMuliplayer?: boolean; user?: any; spawnData?: any; userAvatar$?: any; }


</td><td>


</td></tr>
<tr><td>

[players](/reference/playermanager/players.md)


</td><td>


</td><td>

Record&lt;string, [PlayerWrapper](/reference/playerwrapper.md)<!-- -->&gt;


</td><td>

A record containing all the current players connected to the game


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

[get(avatarOrSessionId)](/reference/playermanager/get.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
