
## GameRoom.onState() method

listen to state events, this is fired whenever the client receives a state update from the server as defined by the tick rate

**Signature:**

```typescript
onState(listener: (state: S) => void): () => void;
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

(state: S) =&gt; void


</td><td>


</td></tr>
</tbody></table>
**Returns:**

() =&gt; void

