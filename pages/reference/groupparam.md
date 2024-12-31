
## GroupParam interface

Group Params need to be initialized

**Signature:**

```typescript
export interface GroupParam<T = any> extends AbstractParam<T> 
```
**Extends:** [AbstractParam](/reference/abstractparam.md)<!-- -->&lt;T&gt;

## Example

@<!-- -->Param(<!-- -->{ type: "group" }<!-- -->) myGroup = new MyGroup();

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

[children?](/reference/groupparam/children.md)


</td><td>


</td><td>

{ key: string; param: [ScriptParam](/reference/scriptparam.md)<!-- -->; }\[\]


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[factory?](/reference/groupparam/factory.md)


</td><td>


</td><td>

new () =&gt; T


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[type?](/reference/groupparam/type.md)


</td><td>


</td><td>

"group"


</td><td>

_(Optional)_


</td></tr>
</tbody></table>
