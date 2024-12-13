
## MagneticFieldComponent class

A component to display magnetic field like effect in the game.

See [MagneticFieldComponentData](/reference/magneticfieldcomponentdata.md) for the data specification to create a magnetic field component.

**Signature:**

```typescript
export declare class MagneticFieldComponent extends Component3D<MagneticFieldComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[MagneticFieldComponentData](/reference/magneticfieldcomponentdata.md)<!-- -->&gt;

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `MagneticFieldComponent` class.

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

[\_changeCallbacks](/reference/magneticfieldcomponent/_changecallbacks.md)


</td><td>


</td><td>

{ color: (c: any) =&gt; any; radius: (r: any) =&gt; any; }


</td><td>


</td></tr>
<tr><td>

[color](/reference/magneticfieldcomponent/color.md)


</td><td>


</td><td>

number


</td><td>

Color of the magnetic field. Defaults to 0x000000


</td></tr>
<tr><td>

[radius](/reference/magneticfieldcomponent/radius.md)


</td><td>


</td><td>

number


</td><td>

Radius of the magnetic field. Defaults to 1


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

[dispose()](/reference/magneticfieldcomponent/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[init()](/reference/magneticfieldcomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
</tbody></table>
