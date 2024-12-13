
## GodrayComponent class

A component to display godrays effect in the game.

See [GodrayComponentData](/reference/godraycomponentdata.md) for the data schema used to create a godray component

**Signature:**

```typescript
export declare class GodrayComponent extends Component3D<GodrayComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[GodrayComponentData](/reference/godraycomponentdata.md)<!-- -->&gt;

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `GodrayComponent` class.

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

[color](/reference/godraycomponent/color.md)


</td><td>


</td><td>

number


</td><td>

Color of the compoent. Defaults to 0xffffff


</td></tr>
<tr><td>

[opacity](/reference/godraycomponent/opacity.md)


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

[dispose()](/reference/godraycomponent/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[init()](/reference/godraycomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
</tbody></table>
