
## PlatformerControlsWrapper class

This class implements traditional platformer controls, with support for jumping, running, etc

the controls use keyboard keys W, A, S, D or Arrow keys for movement, and SPACE for jumping;

The meaning of `object` &amp; `target` options is intepreted as follows:

- The `object` is moved by the controls actions

- The `target` is used to determine the forward direction of the movement

The behavior of the controls can be customized using the params object. See [PlatformerControlsWrapperParams](/reference/platformercontrolswrapperparams.md) for more info

**Signature:**

```typescript
export declare class PlatformerControlsWrapper extends ControlsAbstract 
```
**Extends:** ControlsAbstract

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `PlatformerControlsWrapper` class.

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

[actions](/reference/platformercontrolswrapper/actions.md)


</td><td>


</td><td>

[PCActions](/reference/pcactions.md)


</td><td>

The actions influence the movement of the attached object. Those are typically set automtically from the user input.

If you deactivate the controls's controller, you can set those manually to control the movement of the attached object


</td></tr>
<tr><td>

[active](/reference/platformercontrolswrapper/active.md)


</td><td>


</td><td>

boolean


</td><td>

whether the controls are active


</td></tr>
<tr><td>

[autoRotate](/reference/platformercontrolswrapper/autorotate.md)


</td><td>


</td><td>

boolean


</td><td>

When true, the controls will automatically set the forward direction of the movement based on the target object's rotation. Default is true.


</td></tr>
<tr><td>

[collidesWith](/reference/platformercontrolswrapper/collideswith.md)


</td><td>


</td><td>

CollisionInfo\[\]


</td><td>

a list of objects that the attached object is colliding with in the current frame


</td></tr>
<tr><td>

[controller](/reference/platformercontrolswrapper/controller.md)


</td><td>


</td><td>

[Controller](/reference/platformerinputcontroller.md)


</td><td>

The controller handles the input events and sets the corresponding actions


</td></tr>
<tr><td>

[isJumping](/reference/platformercontrolswrapper/isjumping.md)


</td><td>


</td><td>

boolean


</td><td>

Indicates whether the attached object is currently jumping


</td></tr>
<tr><td>

[isMoving](/reference/platformercontrolswrapper/ismoving.md)


</td><td>


</td><td>

boolean


</td><td>

Indicates whether the attached object is currently moving (walking, jumping, etc)


</td></tr>
<tr><td>

[onFloor](/reference/platformercontrolswrapper/onfloor.md)


</td><td>


</td><td>

boolean


</td><td>

Indicates whether the attached object is colliding with a ground collider (like a terrain)


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

[dispose()](/reference/platformercontrolswrapper/dispose.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
