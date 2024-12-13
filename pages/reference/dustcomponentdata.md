
## DustComponentData interface

Data specification for [DustComponent](/reference/dustcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface DustComponentData extends Component3DData 
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

[condition?](/reference/dustcomponentdata/condition.md)


</td><td>


</td><td>

null


</td><td>

_(Optional)_ Condition for the dust to spawn. Defaults to null


</td></tr>
<tr><td>

[decaySpeed?](/reference/dustcomponentdata/decayspeed.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Speed at which the dust will disappear. Defaults to 1.5


</td></tr>
<tr><td>

[id?](/reference/dustcomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[name?](/reference/dustcomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[randomXZ?](/reference/dustcomponentdata/randomxz.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Randomness of the dust spawn position. Defaults to 0.9


</td></tr>
<tr><td>

[scale?](/reference/dustcomponentdata/scale.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Scale of the dust. Defaults to 1


</td></tr>
<tr><td>

[spawnDistance?](/reference/dustcomponentdata/spawndistance.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Minimum distance the target must move before the dust is spawned. Defaults to 2


</td></tr>
<tr><td>

[spawnSource?](/reference/dustcomponentdata/spawnsource.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Spawn position of the dust spawn source relative to the target. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[target](/reference/dustcomponentdata/target.md)


</td><td>


</td><td>

Object3D


</td><td>

Once created, the dust will follow the target


</td></tr>
<tr><td>

[type](/reference/dustcomponentdata/type.md)


</td><td>


</td><td>

"cloud"


</td><td>


</td></tr>
</tbody></table>
