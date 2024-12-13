
## MeshComponentData interface

Data specification for [MeshComponent](/reference/meshcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface MeshComponentData extends Component3DData 
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

[color?](/reference/meshcomponentdata/color.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Color of the mesh. Defaults to "\#ff0000"


</td></tr>
<tr><td>

[display?](/reference/meshcomponentdata/display.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether the mesh should be displayed in live mode. Defaults to true


</td></tr>
<tr><td>

[displayInEditor?](/reference/meshcomponentdata/displayineditor.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether the mesh should be displayed in editor mode. Defaults to true


</td></tr>
<tr><td>

[geometry?](/reference/meshcomponentdata/geometry.md)


</td><td>


</td><td>

[MeshGeometryData](/reference/meshgeometrydata.md)


</td><td>

_(Optional)_ Geometry of the mesh. Defaults to a Box with a size of 1


</td></tr>
<tr><td>

[id?](/reference/meshcomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[name?](/reference/meshcomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[opacity?](/reference/meshcomponentdata/opacity.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Opacity of the mesh. Defaults to 1


</td></tr>
<tr><td>

[position?](/reference/meshcomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[renderMode](/reference/meshcomponentdata/rendermode.md)


</td><td>


</td><td>

"wireframe" \| "dome" \| 'default'


</td><td>

Render mode of the mesh. Defaults to "dome"


</td></tr>
<tr><td>

[rotation?](/reference/meshcomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[scale?](/reference/meshcomponentdata/scale.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Scale of the component in the space. Defaults to {<!-- -->x: 1, y: 1, z: 1<!-- -->}


</td></tr>
<tr><td>

[type](/reference/meshcomponentdata/type.md)


</td><td>


</td><td>

"mesh"


</td><td>


</td></tr>
</tbody></table>
