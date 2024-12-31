
## DefaultControlsWrapper class

This class implements the default platformer controls, with support for jumping, running, etc

the controls use keyboard keys W, A, S, D or Arrow keys for movement, and SPACE for jumping;

The meaning of `object` &amp; `target` options is intepreted as follows:

- The `object` is moved by the controls actions

- The `target` is used to determine the forward direction of the movement

The behavior of the controls can be customized using the params object. See [DefaultControlParams](/reference/defaultcontrolparams.md) for more info

**Signature:**

```typescript
export declare class DefaultControlsWrapper extends ControlsAbstract 
```
**Extends:** ControlsAbstract

## Constructors

<table><thead><tr><th>

Constructor


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[(constructor)(opts)](/reference/defaultcontrolswrapper/_constructor_.md)


</td><td>


</td><td>

Constructs a new instance of the `DefaultControlsWrapper` class


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

[\_active](/reference/defaultcontrolswrapper/_active.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[\_animState](/reference/defaultcontrolswrapper/_animstate.md)


</td><td>


</td><td>

{ wasJumping: boolean; jumpAnimCount: number; isDropAnimPlaying: boolean; }


</td><td>


</td></tr>
<tr><td>

[\_jumpState](/reference/defaultcontrolswrapper/_jumpstate.md)


</td><td>


</td><td>

{ speed: number; delay: number; jumpedCount: number; jumped: boolean; isJumping: boolean; reachedPeak: boolean; coyoteTimeLeft: number; elapsedTime: number; jumpGravity: number; jumpVelocity: number; currentHeight: number; jumpMaxHeight: number; prevJumpKeyState: boolean; }


</td><td>


</td></tr>
<tr><td>

[\_keyActive](/reference/defaultcontrolswrapper/_keyactive.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[\_seqId](/reference/defaultcontrolswrapper/_seqid.md)


</td><td>


</td><td>

number


</td><td>


</td></tr>
<tr><td>

[\_state](/reference/defaultcontrolswrapper/_state.md)


</td><td>


</td><td>

{ isMoving: boolean; onFloor: boolean; speed: number; }


</td><td>


</td></tr>
<tr><td>

[actions](/reference/defaultcontrolswrapper/actions.md)


</td><td>


</td><td>

PCActions


</td><td>

The actions influence the movement of the attached object. Those are typically set automtically from the user input.

If you deactivate the controls's controller, you can set those manually to control the movement of the attached object


</td></tr>
<tr><td>

[active](/reference/defaultcontrolswrapper/active.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[advancedAnimations](/reference/defaultcontrolswrapper/advancedanimations.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[animations](/reference/defaultcontrolswrapper/animations.md)


</td><td>


</td><td>

{ idle: string; run: string; sprint: string; jump\_idle: string; jump\_walking: string; jump\_sprinting: string; jump\_running: string; falling: string; drop\_idle: string; drop\_walking: string; drop\_walking\_roll: string; drop\_running: string; drop\_running\_roll: string; drop\_sprinting: string; drop\_sprinting\_roll: string; walk: string; jump\_double: string; }


</td><td>


</td></tr>
<tr><td>

[autoAnimate](/reference/defaultcontrolswrapper/autoanimate.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[autoRotate](/reference/defaultcontrolswrapper/autorotate.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[autoUpdate](/reference/defaultcontrolswrapper/autoupdate.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[characterController](/reference/defaultcontrolswrapper/charactercontroller.md)


</td><td>


</td><td>

[BasicCharacterController](/reference/basiccharactercontroller.md)


</td><td>


</td></tr>
<tr><td>

[collidesWith](/reference/defaultcontrolswrapper/collideswith.md)


</td><td>


</td><td>

any\[\]


</td><td>


</td></tr>
<tr><td>

[controller](/reference/defaultcontrolswrapper/controller.md)


</td><td>


</td><td>

Controller


</td><td>

The controller handles the input events and sets the corresponding actions


</td></tr>
<tr><td>

[direction](/reference/defaultcontrolswrapper/direction.md)


</td><td>


</td><td>

Vector3


</td><td>


</td></tr>
<tr><td>

[dirtyJoystick](/reference/defaultcontrolswrapper/dirtyjoystick.md)


</td><td>


</td><td>

Vector3


</td><td>


</td></tr>
<tr><td>

[gravity](/reference/defaultcontrolswrapper/gravity.md)


</td><td>


</td><td>

{ x: number; y: number; z: number; }


</td><td>


</td></tr>
<tr><td>

[jump](/reference/defaultcontrolswrapper/jump.md)


</td><td>


</td><td>

{ airAcceleration: number; hold: boolean; duration: number; height: number; max: number; coyote: number; maxFallSpeed: number; peakSpeed: number; delay: number; }


</td><td>


</td></tr>
<tr><td>

[jumpPromise](/reference/defaultcontrolswrapper/jumppromise.md)


</td><td>


</td><td>

any


</td><td>


</td></tr>
<tr><td>

[keyActive](/reference/defaultcontrolswrapper/keyactive.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[playAnimationIfNotPlaying](/reference/defaultcontrolswrapper/playanimationifnotplaying.md)


</td><td>


</td><td>

(animationName: any, animationsToCheck?: any\[\]) =&gt; void


</td><td>


</td></tr>
<tr><td>

[playAnimationOnceIfNotPlaying](/reference/defaultcontrolswrapper/playanimationonceifnotplaying.md)


</td><td>


</td><td>

(animationName: any, animationsToCheck: any, opts?: {}) =&gt; Promise&lt;unknown&gt;


</td><td>


</td></tr>
<tr><td>

[prevDirection](/reference/defaultcontrolswrapper/prevdirection.md)


</td><td>


</td><td>

Vector3


</td><td>


</td></tr>
<tr><td>

[quaternion](/reference/defaultcontrolswrapper/quaternion.md)


</td><td>


</td><td>

Quaternion


</td><td>


</td></tr>
<tr><td>

[run](/reference/defaultcontrolswrapper/run.md)


</td><td>


</td><td>

{ maxSpeed: number; maxAcceleration: number; maxDeceleration: number; accelerationFactor: number; decelerationFactor: number; boost: number; }


</td><td>


</td></tr>
<tr><td>

[showJoystick](/reference/defaultcontrolswrapper/showjoystick.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[targetQuaternion](/reference/defaultcontrolswrapper/targetquaternion.md)


</td><td>


</td><td>

Quaternion


</td><td>


</td></tr>
<tr><td>

[targetRot](/reference/defaultcontrolswrapper/targetrot.md)


</td><td>


</td><td>

number


</td><td>


</td></tr>
<tr><td>

[update](/reference/defaultcontrolswrapper/update.md)


</td><td>


</td><td>

(deltaTime: any) =&gt; void


</td><td>


</td></tr>
<tr><td>

[velocity](/reference/defaultcontrolswrapper/velocity.md)


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

[\_animation()](/reference/defaultcontrolswrapper/_animation.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[calcVelocity(deltaTime)](/reference/defaultcontrolswrapper/calcvelocity.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[reset()](/reference/defaultcontrolswrapper/reset.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[restoreState(state)](/reference/defaultcontrolswrapper/restorestate.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[saveState()](/reference/defaultcontrolswrapper/savestate.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[setForce(impulse)](/reference/defaultcontrolswrapper/setforce.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[triggerJump({ duration, height })](/reference/defaultcontrolswrapper/triggerjump.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
