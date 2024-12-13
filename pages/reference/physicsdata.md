
## PhysicsData interface

This interface describes the data schema used to attach collision data to a component.

See [Component3DData.collider](/reference/component3ddata/collider.md)

**Signature:**

```typescript
export interface PhysicsData 
```

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

[colliderType?](/reference/physicsdata/collidertype.md)


</td><td>


</td><td>

ColliderType


</td><td>

_(Optional)_ The type of collider to attach to the component


</td></tr>
<tr><td>

[dynamicProps?](/reference/physicsdata/dynamicprops.md)


</td><td>


</td><td>

DynamicProps


</td><td>

_(Optional)_ Properties for dynamic rigid bodies


</td></tr>
<tr><td>

[enabled?](/reference/physicsdata/enabled.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ If this is false, no collider will be attached to the component


</td></tr>
<tr><td>

[enabledRotation?](/reference/physicsdata/enabledrotation.md)


</td><td>


</td><td>

\[boolean, boolean, boolean\]


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[enabledTranslation?](/reference/physicsdata/enabledtranslation.md)


</td><td>


</td><td>

\[boolean, boolean, boolean\]


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[groups?](/reference/physicsdata/groups.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[rigidbodyType?](/reference/physicsdata/rigidbodytype.md)


</td><td>


</td><td>

RigidBodyType


</td><td>

_(Optional)_ The type of rigidbody to attach to the component


</td></tr>
<tr><td>

[rotationLock?](/reference/physicsdata/rotationlock.md)


</td><td>


</td><td>

\[boolean, boolean, boolean\]


</td><td>

_(Optional)_ Locks the rotation of the rigid body along the x, y, and z axes


</td></tr>
<tr><td>

[sensor?](/reference/physicsdata/sensor.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ If this is true, the collider will be a sensor

See [Rapier Documentation](https://rapier.rs/docs/user_guides/javascript/colliders/#collider-type) for more info


</td></tr>
<tr><td>

[translationLock?](/reference/physicsdata/translationlock.md)


</td><td>


</td><td>

\[boolean, boolean, boolean\]


</td><td>

_(Optional)_ Locks the translation of the rigid body along the x, y, and z axes


</td></tr>
</tbody></table>
