
## BirdComponent class

A component to display birds in the game.

See [BirdComponentData](/reference/birdcomponentdata.md) for the data schema used to create a bird component

**Signature:**

```typescript
export declare class BirdComponent extends Component3D<BirdComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[BirdComponentData](/reference/birdcomponentdata.md)<!-- -->&gt;

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `BirdComponent` class.

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

[color](/reference/birdcomponent/color.md)


</td><td>


</td><td>

number


</td><td>

Color of the component. Defaults to 0xffffff


</td></tr>
<tr><td>

[opacity](/reference/birdcomponent/opacity.md)


</td><td>


</td><td>

number


</td><td>

Opacity of the component, from 0 to 1. Defaults to 1


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

[\_onCreateCollisionMesh()](/reference/birdcomponent/_oncreatecollisionmesh.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[dispose()](/reference/birdcomponent/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[init()](/reference/birdcomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
</tbody></table>
