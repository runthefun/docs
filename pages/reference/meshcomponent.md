
## MeshComponent class

Mesh component, used to display simple meshes in the game (box, sphere, cylinder)

See [MeshComponentData](/reference/meshcomponentdata.md) for the data schema used to create a mesh component

**Signature:**

```typescript
export declare class MeshComponent extends Component3D<MeshComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[MeshComponentData](/reference/meshcomponentdata.md)<!-- -->&gt;

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

[color](/reference/meshcomponent/color.md)


</td><td>


</td><td>

string


</td><td>

Color of the mesh. Defaults to "\#ff0000"


</td></tr>
<tr><td>

[geometryData](/reference/meshcomponent/geometrydata.md)


</td><td>


</td><td>

[MeshGeometryData](/reference/meshgeometrydata.md)


</td><td>

Geometry of the mesh. Defaults to a Box with a size of 1


</td></tr>
<tr><td>

[mesh](/reference/meshcomponent/mesh.md)


</td><td>


</td><td>

Mesh


</td><td>

This is the threejs mesh created from component data


</td></tr>
<tr><td>

[opacity](/reference/meshcomponent/opacity.md)


</td><td>


</td><td>

number


</td><td>

Opacity of the mesh. Defaults to 1


</td></tr>
</tbody></table>

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[dispose()](/reference/meshcomponent/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[getCollisionMesh()](/reference/meshcomponent/getcollisionmesh.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[init()](/reference/meshcomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[updateRenderMode()](/reference/meshcomponent/updaterendermode.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
