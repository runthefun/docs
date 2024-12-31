
## UnionParam interface

**Signature:**

```typescript
export interface UnionParam extends AbstractParam 
```
**Extends:** [AbstractParam](/reference/abstractparam.md)

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

[mode?](/reference/unionparam/mode.md)


</td><td>


</td><td>

"buttons" \| "slider" \| "dropdown"


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[options?](/reference/unionparam/options.md)


</td><td>


</td><td>

Array&lt;{ tag: string; value: [ScriptParam](/reference/scriptparam.md)<!-- -->; }&gt;


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[tagLabels?](/reference/unionparam/taglabels.md)


</td><td>


</td><td>

Record&lt;string, string&gt;


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[type?](/reference/unionparam/type.md)


</td><td>


</td><td>

"union"


</td><td>

_(Optional)_


</td></tr>
</tbody></table>
