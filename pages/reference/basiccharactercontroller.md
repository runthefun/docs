
## BasicCharacterController class

A controller class that can be used to control kinematic rigid bodies. This is a convenient class that wraps the [Rapier's Character controller](https://rapier.rs/docs/user_guides/javascript/character_controller) class.

**Signature:**

```typescript
export declare class BasicCharacterController 
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

[(constructor)(opts)](/reference/basiccharactercontroller/_constructor_.md)


</td><td>


</td><td>

Constructs a new instance of the `BasicCharacterController` class


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

[\_firstFrame](/reference/basiccharactercontroller/_firstframe.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[\_logs](/reference/basiccharactercontroller/_logs.md)


</td><td>


</td><td>

any\[\]


</td><td>


</td></tr>
<tr><td>

[disableEvents](/reference/basiccharactercontroller/disableevents.md)


</td><td>


</td><td>

boolean


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

[\_logVec3(v)](/reference/basiccharactercontroller/_logvec3.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[\_updateCollisionState(collider, playerCollider, collision)](/reference/basiccharactercontroller/_updatecollisionstate.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[\_updateIntersectionState(collider, playerCollider)](/reference/basiccharactercontroller/_updateintersectionstate.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[castCallback(collider, now, collision, delta, playerCollider)](/reference/basiccharactercontroller/castcallback.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[castSensors(rigidbody, rpos, collider)](/reference/basiccharactercontroller/castsensors.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[update(object, velocity, dt, seqId)](/reference/basiccharactercontroller/update.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
