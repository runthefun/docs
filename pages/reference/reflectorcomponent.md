
## ReflectorComponent class

This component is used to display a reflective plan in the game. Use the studio to configure the reflector for the space.

This is a singleton component. You can only have one reflector in the game. For performance reasons, adding both a water and a reflector component to the same space is not supported.

**Signature:**

```typescript
export declare class ReflectorComponent extends Component3D<any> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;any&gt;

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

[blur](/reference/reflectorcomponent/blur.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[color](/reference/reflectorcomponent/color.md)


</td><td>


</td><td>

string


</td><td>

Public api


</td></tr>
<tr><td>

[opacity](/reference/reflectorcomponent/opacity.md)


</td><td>


</td><td>

number


</td><td>


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

[\_onCreateCollisionMesh()](/reference/reflectorcomponent/_oncreatecollisionmesh.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[dispose()](/reference/reflectorcomponent/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[init()](/reference/reflectorcomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
</tbody></table>
