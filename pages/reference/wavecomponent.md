
## WaveComponent class

A component to display a wave effect in the game.

See [WaveComponentData](/reference/wavecomponentdata.md) for the data schema used to create a wave component

**Signature:**

```typescript
export declare class WaveComponent extends Component3D<WaveComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[WaveComponentData](/reference/wavecomponentdata.md)<!-- -->&gt;

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `WaveComponent` class.

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

[color](/reference/wavecomponent/color.md)


</td><td>


</td><td>

number


</td><td>

Get the color of the wave lines.


</td></tr>
<tr><td>

[direction](/reference/wavecomponent/direction.md)


</td><td>


</td><td>

any


</td><td>

Get the direction of the wave circles: 1 means outwards, -1 means inwards. Defaults to -1


</td></tr>
<tr><td>

[lineWidth](/reference/wavecomponent/linewidth.md)


</td><td>


</td><td>

number


</td><td>

Get the width of the wave lines.


</td></tr>
<tr><td>

[radius](/reference/wavecomponent/radius.md)


</td><td>


</td><td>

number


</td><td>

Get the radius of the wave.


</td></tr>
</tbody></table>
