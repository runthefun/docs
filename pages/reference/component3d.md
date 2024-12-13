
## Component3D class

**Signature:**

```typescript
export declare class Component3D<Data extends Component3DData = Component3DData> extends AugmentedGroup 
```
**Extends:** AugmentedGroup

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Component3D` class.

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

[\_dataChangeListener](/reference/component3d/_datachangelistener.md)


</td><td>


</td><td>

() =&gt; void


</td><td>


</td></tr>
<tr><td>

[behaviors](/reference/component3d/behaviors.md)


</td><td>

`readonly`


</td><td>

[ScriptBehavior](/reference/scriptbehavior.md)<!-- -->\[\]


</td><td>


</td></tr>
<tr><td>

[childComponents](/reference/component3d/childcomponents.md)


</td><td>

`readonly`


</td><td>

[Component3D](/reference/component3d.md)<!-- -->\[\]


</td><td>


</td></tr>
<tr><td>

[collider](/reference/component3d/collider.md)


</td><td>


</td><td>

Collider


</td><td>

Collider for this component, it encapsulates some convenience methods for physics And gives access to the underlying physics rigidbody and collider


</td></tr>
<tr><td>

[componentId](/reference/component3d/componentid.md)


</td><td>

`readonly`


</td><td>

string


</td><td>

Returns the unique id for this component


</td></tr>
<tr><td>

[componentName](/reference/component3d/componentname.md)


</td><td>

`readonly`


</td><td>

string


</td><td>

Returns the name of this component (if set in data.name)


</td></tr>
<tr><td>

[componentType](/reference/component3d/componenttype.md)


</td><td>

`readonly`


</td><td>

unknown


</td><td>

Returns the type of this component (avatar, model, etc)


</td></tr>
<tr><td>

[data](/reference/component3d/data.md)


</td><td>

`readonly`


</td><td>

Data


</td><td>


</td></tr>
<tr><td>

[geometry](/reference/component3d/geometry.md)


</td><td>


</td><td>

never


</td><td>

geometry prop is not allowed on components


</td></tr>
<tr><td>

[identifier](/reference/component3d/identifier.md)


</td><td>

`readonly`


</td><td>

string


</td><td>

Returns the unique identifier for this component


</td></tr>
<tr><td>

[isPersistent](/reference/component3d/ispersistent.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[material](/reference/component3d/material.md)


</td><td>


</td><td>

never


</td><td>

material prop is not allowed on components


</td></tr>
<tr><td>

[opts](/reference/component3d/opts.md)


</td><td>

`protected`


</td><td>

ComponentOpts


</td><td>


</td></tr>
<tr><td>

[parentComponent](/reference/component3d/parentcomponent.md)


</td><td>

`readonly`


</td><td>

[Component3D](/reference/component3d.md)


</td><td>


</td></tr>
<tr><td>

[positionWorld](/reference/component3d/positionworld.md)


</td><td>

`readonly`


</td><td>

Vector3


</td><td>

the position in world space


</td></tr>
<tr><td>

[quaternionWorld](/reference/component3d/quaternionworld.md)


</td><td>

`readonly`


</td><td>

Quaternion


</td><td>

the quaternion in world space


</td></tr>
<tr><td>

[rigidBody](/reference/component3d/rigidbody.md)


</td><td>


</td><td>

[RigidBodyWrapper](/reference/rigidbodywrapper.md)


</td><td>

Rigid body attached to this component, it encapsulates some convenience methods for physics And gives access to the underlying physics rigidbody and colliders

you can find more info at [RigidBodyWrapper](/reference/rigidbodywrapper.md)


</td></tr>
<tr><td>

[rotationWorld](/reference/component3d/rotationworld.md)


</td><td>

`readonly`


</td><td>

Quaternion


</td><td>

the rotation in world space


</td></tr>
<tr><td>

[scaleWorld](/reference/component3d/scaleworld.md)


</td><td>

`readonly`


</td><td>

Vector3


</td><td>

the scale in world space


</td></tr>
<tr><td>

[tag](/reference/component3d/tag.md)


</td><td>

`readonly`


</td><td>

string


</td><td>

Returns the group identifier for this component


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

[\_onCreateCollisionMesh()](/reference/component3d/_oncreatecollisionmesh.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[destroy()](/reference/component3d/destroy.md)


</td><td>


</td><td>

Destroy this component


</td></tr>
<tr><td>

[dispose()](/reference/component3d/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[duplicate(opts)](/reference/component3d/duplicate.md)


</td><td>


</td><td>

Duplicate this component

Returns a promise that resolves with the duplicated component


</td></tr>
<tr><td>

[getBBox(target)](/reference/component3d/getbbox.md)


</td><td>


</td><td>

Returns the bounding box of this component


</td></tr>
<tr><td>

[getBehavior(type)](/reference/component3d/getbehavior.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[getBehaviors(type)](/reference/component3d/getbehaviors.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[getDimensions(target)](/reference/component3d/getdimensions.md)


</td><td>


</td><td>

Returns the dimensions of this component


</td></tr>
<tr><td>

[init()](/reference/component3d/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[isDescendantOf(component)](/reference/component3d/isdescendantof.md)


</td><td>


</td><td>

Returns true if this component is a dierct or indirect child of the provided component


</td></tr>
<tr><td>

[off(event, listener)](/reference/component3d/off.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[on(event, listener)](/reference/component3d/on.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onCollisionEnter(cb)](/reference/component3d/oncollisionenter.md)


</td><td>


</td><td>

Event fired when this component starts colliding with another component


</td></tr>
<tr><td>

[onCollisionExit(cb)](/reference/component3d/oncollisionexit.md)


</td><td>


</td><td>

Event fired when this component stops colliding with another component


</td></tr>
<tr><td>

[onCollisionStay(cb)](/reference/component3d/oncollisionstay.md)


</td><td>


</td><td>

This event is fired each frame between the start and end of a collision


</td></tr>
<tr><td>

[onSensorEnter(cb)](/reference/component3d/onsensorenter.md)


</td><td>


</td><td>

Event fired when this component starts intersecting a sensor


</td></tr>
<tr><td>

[onSensorExit(cb)](/reference/component3d/onsensorexit.md)


</td><td>


</td><td>

Event fired when this component stops intersecting a sensor


</td></tr>
<tr><td>

[onSensorStay(cb)](/reference/component3d/onsensorstay.md)


</td><td>


</td><td>

This event is fired each frame between the start and end of a sensor intersection


</td></tr>
</tbody></table>
