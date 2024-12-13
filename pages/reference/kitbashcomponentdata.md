
## KitbashComponentData interface

Data specification for [KitBashComponent](/reference/kitbashcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface KitbashComponentData extends Component3DData 
```
**Extends:** [Component3DData](/reference/component3ddata.md)

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

[id?](/reference/kitbashcomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[kitType](/reference/kitbashcomponentdata/kittype.md)


</td><td>


</td><td>

string


</td><td>

Type of the kit asset


</td></tr>
<tr><td>

[name?](/reference/kitbashcomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[position?](/reference/kitbashcomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[rotation?](/reference/kitbashcomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[scale?](/reference/kitbashcomponentdata/scale.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Scale of the component in the space. Defaults to {<!-- -->x: 1, y: 1, z: 1<!-- -->}


</td></tr>
<tr><td>

[type](/reference/kitbashcomponentdata/type.md)


</td><td>


</td><td>

"kitbash"


</td><td>


</td></tr>
</tbody></table>
