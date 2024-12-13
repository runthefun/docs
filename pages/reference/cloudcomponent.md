
## CloudComponent class

A component to display clouds in the game.

See [CloudComponentData](/reference/cloudcomponentdata.md) for the data schema used to create a cloud component

**Signature:**

```typescript
export declare class CloudComponent extends Component3D<CloudComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[CloudComponentData](/reference/cloudcomponentdata.md)<!-- -->&gt;

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `CloudComponent` class.

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

[atlas](/reference/cloudcomponent/atlas.md)


</td><td>


</td><td>

number


</td><td>

Type of the cloud, use a number from 0 to 3 to choose the cloud type. Defaults to 0


</td></tr>
<tr><td>

[opacity](/reference/cloudcomponent/opacity.md)


</td><td>


</td><td>

number


</td><td>

Opcaity of the component, from 0 to 1. Defaults to 1


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

[getInstanceWrapper()](/reference/cloudcomponent/getinstancewrapper.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[init()](/reference/cloudcomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
</tbody></table>
