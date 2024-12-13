
## WaveComponentData interface

Data specification for [WaveComponent](/reference/wavecomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface WaveComponentData extends Component3DData 
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

[color?](/reference/wavecomponentdata/color.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Color of the wave lines. Defaults to 0xffffff


</td></tr>
<tr><td>

[direction](/reference/wavecomponentdata/direction.md)


</td><td>


</td><td>

-1


</td><td>

Direction of the wave circles: 1 means outwards, -1 means inwards. Defaults to -1


</td></tr>
<tr><td>

[divisions?](/reference/wavecomponentdata/divisions.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Higher values will result in a more detailed wave mesh geometry. Defaults to 100


</td></tr>
<tr><td>

[height?](/reference/wavecomponentdata/height.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Height of the wave. Defaults to 0.5


</td></tr>
<tr><td>

[id?](/reference/wavecomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[lines?](/reference/wavecomponentdata/lines.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Number of lines in the wave. Defaults to 4


</td></tr>
<tr><td>

[linewidth?](/reference/wavecomponentdata/linewidth.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Width of the wave lines. Defaults to 0.14


</td></tr>
<tr><td>

[name?](/reference/wavecomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[position?](/reference/wavecomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[radius?](/reference/wavecomponentdata/radius.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Radius of the wave. Defaults to 5


</td></tr>
<tr><td>

[rotation?](/reference/wavecomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[type](/reference/wavecomponentdata/type.md)


</td><td>


</td><td>

"kitbash"


</td><td>


</td></tr>
</tbody></table>
