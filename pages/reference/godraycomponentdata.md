
## GodrayComponentData interface

Data specification for [GodrayComponent](/reference/godraycomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface GodrayComponentData extends Component3DData 
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

[color?](/reference/godraycomponentdata/color.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Color of the component. Defaults to 0xffffff


</td></tr>
<tr><td>

[id?](/reference/godraycomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[name?](/reference/godraycomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[opacity?](/reference/godraycomponentdata/opacity.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Opacity of the component, from 0 to 1. Defaults to 1


</td></tr>
<tr><td>

[position?](/reference/godraycomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[rotation?](/reference/godraycomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[scale?](/reference/godraycomponentdata/scale.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Scale of the component in the space. Defaults to {<!-- -->x: 1, y: 1, z: 1<!-- -->}


</td></tr>
<tr><td>

[type](/reference/godraycomponentdata/type.md)


</td><td>


</td><td>

"godray"


</td><td>


</td></tr>
</tbody></table>
