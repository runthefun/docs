
## PhysicsRapierWrapper class

Wrapper for the physics engine, currently using Rapier3D

This is the type of the [Physics](/reference/physics.md) variable in the scripting API

**Signature:**

```typescript
export default class PhysicsRapierWrapper extends Object3D 
```
**Extends:** Object3D

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `PhysicsRapierWrapper` class.

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

[active](/reference/physicsrapierwrapper/active.md)


</td><td>


</td><td>

boolean


</td><td>

Returns true if the physics engine is active


</td></tr>
<tr><td>

[eventQueue](/reference/physicsrapierwrapper/eventqueue.md)


</td><td>


</td><td>

EventQueue


</td><td>


</td></tr>
<tr><td>

[frame](/reference/physicsrapierwrapper/frame.md)


</td><td>

`readonly`


</td><td>

number


</td><td>


</td></tr>
<tr><td>

[narrowPhase](/reference/physicsrapierwrapper/narrowphase.md)


</td><td>


</td><td>

NarrowPhase


</td><td>


</td></tr>
<tr><td>

[raycast](/reference/physicsrapierwrapper/raycast.md)


</td><td>


</td><td>

(ray: { origin: { x: number; y: number; z: number; }; direction: { x: number; y: number; z: number; }; maxDistance?: number; ignoreRigidbody?: any; filterFlags?: QueryFilterFlags; shouldRaycast?: (collider: RCollider) =&gt; boolean; }) =&gt; { point: { x: any; y: any; z: any; }; distance: number; triangle: { meshName: any; }; raw: RAPIER.RayColliderToi; hit: unknown; }


</td><td>

Performs a raycast in the physics world and returns information about the hit, if any.


</td></tr>
<tr><td>

[update](/reference/physicsrapierwrapper/update.md)


</td><td>


</td><td>

(dt: number, time: number) =&gt; void


</td><td>


</td></tr>
<tr><td>

[world](/reference/physicsrapierwrapper/world.md)


</td><td>


</td><td>

World


</td><td>

Current Rapier world instance; cf [Rapier docs](https://rapier.rs/javascript3d/classes/World.html) for more info


</td></tr>
</tbody></table>
