
## Collider class

This class encapsulates the physics entities attached to a component (rigid body, collider).

it offers some convenience methods to physics properties of the component.

For more info on the underlying physics engine, cf [Rapier docs](https://rapier.rs/docs/)

**Signature:**

```typescript
export declare class Collider 
```

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Collider` class.

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

[\_collider](/reference/collider/_collider.md)


</td><td>


</td><td>

RapierCollider


</td><td>

Rapier collider instance, cf [Rapier docs](https://rapier.rs/docs/user_guides/javascript/colliders/) for more info


</td></tr>
<tr><td>

[colliderDesc](/reference/collider/colliderdesc.md)


</td><td>


</td><td>

ColliderDesc


</td><td>

Collider description, cf [Rapier docs](https://rapier.rs/docs/user_guides/javascript/colliders/) for more info


</td></tr>
<tr><td>

[colliderType](/reference/collider/collidertype.md)


</td><td>


</td><td>

[ColliderType](/reference/collidertype.md)


</td><td>

Collider type, cf [Rapier docs](https://rapier.rs/docs/user_guides/javascript/colliders/) for more info on the meaning of different types


</td></tr>
<tr><td>

[component](/reference/collider/component.md)


</td><td>

`readonly`


</td><td>

[Component3D](/reference/component3d.md)


</td><td>

Returns the component this collider is attached to


</td></tr>
<tr><td>

[enabled](/reference/collider/enabled.md)


</td><td>


</td><td>

boolean


</td><td>

Returns the enabled state of the rigidbody


</td></tr>
<tr><td>

[enabledRotation](/reference/collider/enabledrotation.md)


</td><td>


</td><td>

\[boolean, boolean, boolean\]


</td><td>

Returns the current rotation lock state


</td></tr>
<tr><td>

[enabledTranslation](/reference/collider/enabledtranslation.md)


</td><td>


</td><td>

\[boolean, boolean, boolean\]


</td><td>

Returns the current translation lock state


</td></tr>
<tr><td>

[isSensor](/reference/collider/issensor.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[name](/reference/collider/name.md)


</td><td>


</td><td>

string


</td><td>

Component's name this collider is attached to


</td></tr>
<tr><td>

[rigidBody](/reference/collider/rigidbody.md)


</td><td>


</td><td>

RigidBody


</td><td>

Rapier rigid body instance, cf [Rapier docs](https://rapier.rs/docs/user_guides/javascript/rigid_bodies/) for more info


</td></tr>
<tr><td>

[rigidbodyType](/reference/collider/rigidbodytype.md)


</td><td>


</td><td>

[RigidBodyType](/reference/rigidbodytype.md)


</td><td>

Rigid body type, cf [Rapier docs](https://rapier.rs/docs/user_guides/javascript/rigid_bodies/) for more info on the meaning of different types


</td></tr>
</tbody></table>
