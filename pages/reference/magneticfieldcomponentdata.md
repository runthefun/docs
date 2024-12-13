
## MagneticFieldComponentData interface

Data specification for [MagneticFieldComponent](/reference/magneticfieldcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface MagneticFieldComponentData extends Component3DData 
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

[color?](/reference/magneticfieldcomponentdata/color.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Color of the magnetic field. Defaults to 0x000000


</td></tr>
<tr><td>

[id?](/reference/magneticfieldcomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[name?](/reference/magneticfieldcomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[position?](/reference/magneticfieldcomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the magnetic field. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[radius?](/reference/magneticfieldcomponentdata/radius.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Radius of the magnetic field. Defaults to 1


</td></tr>
<tr><td>

[rotation?](/reference/magneticfieldcomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the magnetic field. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[type](/reference/magneticfieldcomponentdata/type.md)


</td><td>


</td><td>

"magenticfield"


</td><td>


</td></tr>
</tbody></table>
