
## SelectParam interface

**Signature:**

```typescript
export interface SelectParam<T extends OptId = string> extends AbstractParam<T> 
```
**Extends:** [AbstractParam](/reference/abstractparam.md)<!-- -->&lt;T&gt;

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

[mode?](/reference/selectparam/mode.md)


</td><td>


</td><td>

"buttons" \| "slider" \| "dropdown"


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[options?](/reference/selectparam/options.md)


</td><td>


</td><td>

Options&lt;T&gt;


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[type?](/reference/selectparam/type.md)


</td><td>


</td><td>

"select"


</td><td>

_(Optional)_


</td></tr>
</tbody></table>
