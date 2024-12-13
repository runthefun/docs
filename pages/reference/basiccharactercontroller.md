
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

[accumulator](/reference/basiccharactercontroller/accumulator.md)


</td><td>


</td><td>

number


</td><td>


</td></tr>
<tr><td>

[controlVelocity](/reference/basiccharactercontroller/controlvelocity.md)


</td><td>


</td><td>

Vector3


</td><td>


</td></tr>
<tr><td>

[dampling](/reference/basiccharactercontroller/dampling.md)


</td><td>


</td><td>

number


</td><td>


</td></tr>
<tr><td>

[forces](/reference/basiccharactercontroller/forces.md)


</td><td>


</td><td>

any\[\]


</td><td>


</td></tr>
<tr><td>

[gravity](/reference/basiccharactercontroller/gravity.md)


</td><td>


</td><td>

Vector3


</td><td>


</td></tr>
<tr><td>

[onFloor](/reference/basiccharactercontroller/onfloor.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[previousVelocity](/reference/basiccharactercontroller/previousvelocity.md)


</td><td>


</td><td>

Vector3


</td><td>


</td></tr>
<tr><td>

[rotation](/reference/basiccharactercontroller/rotation.md)


</td><td>


</td><td>

Euler


</td><td>


</td></tr>
<tr><td>

[velocity](/reference/basiccharactercontroller/velocity.md)


</td><td>


</td><td>

Vector3


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

[getCCState(object)](/reference/basiccharactercontroller/getccstate.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[update(object, velocity, dt)](/reference/basiccharactercontroller/update.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
