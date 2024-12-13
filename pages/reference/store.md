
## Store class


**Signature:**

```typescript
export declare class Store<State> extends Augmented 
```
**Extends:** Augmented

## Constructors

<table><thead><tr><th>

Constructor


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[(constructor)(\_state)](/reference/store/_constructor_.md)


</td><td>


</td><td>

Constructs a new instance of the `Store` class


</td></tr>
</tbody></table>

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

[getState](/reference/store/getstate.md)


</td><td>


</td><td>

() =&gt; State


</td><td>


</td></tr>
<tr><td>

[notify](/reference/store/notify.md)


</td><td>


</td><td>

() =&gt; void


</td><td>


</td></tr>
<tr><td>

[state](/reference/store/state.md)


</td><td>

`readonly`


</td><td>

State


</td><td>


</td></tr>
<tr><td>

[subscribe](/reference/store/subscribe.md)


</td><td>


</td><td>

(cb: Callback) =&gt; () =&gt; void


</td><td>


</td></tr>
<tr><td>

[update](/reference/store/update.md)


</td><td>


</td><td>

(newState: Partial&lt;State&gt;) =&gt; void


</td><td>


</td></tr>
</tbody></table>
