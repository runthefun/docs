
## Component3DData interface

Base class for all components data interfaces. It contains the common properties for all components

**Signature:**

```typescript
export interface Component3DData 
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

[\_batchId?](/reference/component3ddata/_batchid.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[children?](/reference/component3ddata/children.md)


</td><td>


</td><td>

Record&lt;string, [Component3DData](/reference/component3ddata.md)<!-- -->&gt;


</td><td>

_(Optional)_ List of children components


</td></tr>
<tr><td>

[collider?](/reference/component3ddata/collider.md)


</td><td>


</td><td>

[PhysicsData](/reference/physicsdata.md)


</td><td>

_(Optional)_ Physics paramaters for the component (rigidbody type, collider type, etc)


</td></tr>
<tr><td>

[id?](/reference/component3ddata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[name?](/reference/component3ddata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[parentId?](/reference/component3ddata/parentid.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ id of the parent component


</td></tr>
<tr><td>

[script?](/reference/component3ddata/script.md)


</td><td>


</td><td>

[ScriptData](/reference/scriptdata.md)


</td><td>

_(Optional)_ Attach an identifier or a tag to a component, so that can be easily accessed in the [ComponentManager](/reference/componentmanager.md)


</td></tr>
<tr><td>

[type](/reference/component3ddata/type.md)


</td><td>


</td><td>

unknown


</td><td>

Type of the component (model, video, platform, kitbash, etc)


</td></tr>
</tbody></table>
