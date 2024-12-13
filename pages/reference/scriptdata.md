
## ScriptData interface

Attach an identifier or a tag to a component, so that it can be easily accessed in the [ComponentManager.byId()](/reference/componentmanager/byid.md) or [ComponentManager.byTag()](/reference/componentmanager/bytag.md) methods

**Signature:**

```typescript
export interface ScriptData 
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

[identifier?](/reference/scriptdata/identifier.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Identifier for the script, can be used to access the script in the [ComponentManager.byId()](/reference/componentmanager/byid.md) method


</td></tr>
<tr><td>

[tag?](/reference/scriptdata/tag.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Tag for the script, can be used to access the script in the [ComponentManager.byTag()](/reference/componentmanager/bytag.md) method


</td></tr>
</tbody></table>
