
## CloudComponentData interface

Data specification for [CloudComponent](/reference/cloudcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface CloudComponentData extends Component3DData 
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

[atlas?](/reference/cloudcomponentdata/atlas.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Type of the cloud, use a number from 0 to 3 to choose the cloud type. Defaults to 0


</td></tr>
<tr><td>

[id?](/reference/cloudcomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[name?](/reference/cloudcomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[opacity?](/reference/cloudcomponentdata/opacity.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Opcaity of the component, from 0 to 1. Defaults to 1


</td></tr>
<tr><td>

[position?](/reference/cloudcomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[rotation?](/reference/cloudcomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[scale?](/reference/cloudcomponentdata/scale.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Scale of the component in the space. Defaults to {<!-- -->x: 1, y: 1, z: 1<!-- -->}


</td></tr>
<tr><td>

[type](/reference/cloudcomponentdata/type.md)


</td><td>


</td><td>

"cloud"


</td><td>


</td></tr>
</tbody></table>
