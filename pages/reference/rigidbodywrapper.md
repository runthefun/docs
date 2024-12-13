
## RigidBodyWrapper class

**Signature:**

```typescript
export declare class RigidBodyWrapper 
```

## Constructors

<table><thead><tr><th>

Constructor


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[(constructor)(engine, \_component, \_opts)](/reference/rigidbodywrapper/_constructor_.md)


</td><td>


</td><td>

Constructs a new instance of the `RigidBodyWrapper` class


</td></tr>
</tbody></table>

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

[\_currentRbPosition](/reference/rigidbodywrapper/_currentrbposition.md)


</td><td>


</td><td>

Vector3


</td><td>


</td></tr>
<tr><td>

[\_prevRbPosition](/reference/rigidbodywrapper/_prevrbposition.md)


</td><td>


</td><td>

Vector3


</td><td>


</td></tr>
<tr><td>

[\_rbPosition](/reference/rigidbodywrapper/_rbposition.md)


</td><td>


</td><td>

Vector3


</td><td>


</td></tr>
<tr><td>

[colliders](/reference/rigidbodywrapper/colliders.md)


</td><td>

`readonly`


</td><td>

Collider\[\]


</td><td>


</td></tr>
<tr><td>

[component](/reference/rigidbodywrapper/component.md)


</td><td>

`readonly`


</td><td>

[Component3D](/reference/component3d.md)


</td><td>

Returns the component that owns this rigidbody


</td></tr>
<tr><td>

[enabled](/reference/rigidbodywrapper/enabled.md)


</td><td>


</td><td>

boolean


</td><td>

Is this rigidbody enabled?


</td></tr>
<tr><td>

[isDynamic](/reference/rigidbodywrapper/isdynamic.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Is this rigidbody a dynamic rigidbody?


</td></tr>
<tr><td>

[isFixed](/reference/rigidbodywrapper/isfixed.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Is this rigidbody a fixed rigidbody?


</td></tr>
<tr><td>

[isKinematic](/reference/rigidbodywrapper/iskinematic.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Is this rigidbody a kinematic rigidbody?


</td></tr>
<tr><td>

[options](/reference/rigidbodywrapper/options.md)


</td><td>

`readonly`


</td><td>

RigidBodyOpts


</td><td>

Returns the options used to create this rigidbody


</td></tr>
<tr><td>

[position](/reference/rigidbodywrapper/position.md)


</td><td>


</td><td>

Vector3


</td><td>


</td></tr>
<tr><td>

[quaternion](/reference/rigidbodywrapper/quaternion.md)


</td><td>


</td><td>

Quaternion


</td><td>


</td></tr>
<tr><td>

[raw](/reference/rigidbodywrapper/raw.md)


</td><td>

`readonly`


</td><td>

RapierRigidBody


</td><td>

Returns the raw Rapier rigidbody


</td></tr>
<tr><td>

[rotationLock](/reference/rigidbodywrapper/rotationlock.md)


</td><td>


</td><td>

\[boolean, boolean, boolean\]


</td><td>

Returns the current rotation lock state


</td></tr>
<tr><td>

[translationLock](/reference/rigidbodywrapper/translationlock.md)


</td><td>


</td><td>

\[boolean, boolean, boolean\]


</td><td>

Returns the current translation lock state


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

[\_\_updateActiveEvents()](/reference/rigidbodywrapper/__updateactiveevents.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[\_preInterpolate()](/reference/rigidbodywrapper/_preinterpolate.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[\_updateColliders(opts)](/reference/rigidbodywrapper/_updatecolliders.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[addCollider(collider)](/reference/rigidbodywrapper/addcollider.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[addColliderFromOptions(opts)](/reference/rigidbodywrapper/addcolliderfromoptions.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[addForce(force, relativePoint)](/reference/rigidbodywrapper/addforce.md)


</td><td>


</td><td>

Add a force to the rigidbody. The force is applied at the center of mass by default unless a relative point is provided


</td></tr>
<tr><td>

[addTorque(torque)](/reference/rigidbodywrapper/addtorque.md)


</td><td>


</td><td>

Add a torque to the rigidbody


</td></tr>
<tr><td>

[applyImpulse(impulse, relativePoint)](/reference/rigidbodywrapper/applyimpulse.md)


</td><td>


</td><td>

Apply an impulse to the rigidbody. The impulse is applied at the center of mass by default unless a relative point is provided


</td></tr>
<tr><td>

[dispose()](/reference/rigidbodywrapper/dispose.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[removeCollider(collider)](/reference/rigidbodywrapper/removecollider.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[reset()](/reference/rigidbodywrapper/reset.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[resetForces()](/reference/rigidbodywrapper/resetforces.md)


</td><td>


</td><td>

Reset all forces applied to the rigidbody to zero


</td></tr>
<tr><td>

[resetTorques()](/reference/rigidbodywrapper/resettorques.md)


</td><td>


</td><td>

Reset all torques applied to the rigidbody to zero


</td></tr>
<tr><td>

[resetVelocities()](/reference/rigidbodywrapper/resetvelocities.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[teleport(position, quaternion)](/reference/rigidbodywrapper/teleport.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
