
## GameRoom.onPlayerLeft() method

listen to player left events, this is fired whenever a player leaves the game room

**Signature:**

```typescript
onPlayerLeft(listener: (data: {
        sessionId: string;
    }) => void): () => void;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

listener


</td><td>

(data: { sessionId: string; }) =&gt; void


</td><td>


</td></tr>
</tbody></table>
**Returns:**

() =&gt; void

