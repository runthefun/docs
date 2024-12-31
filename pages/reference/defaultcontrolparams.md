
## DefaultControlParams interface

**Signature:**

```typescript
export interface DefaultControlParams 
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

[animations](/reference/defaultcontrolparams/animations.md)


</td><td>


</td><td>

{ idle: string; run: string; sprint: string; jump\_idle: string; jump\_walking: string; jump\_sprinting: string; jump\_running: string; falling: string; drop\_idle: string; drop\_walking: string; drop\_walking\_roll: string; drop\_running: string; drop\_running\_roll: string; drop\_sprinting: string; drop\_sprinting\_roll: string; walk: string; jump\_double: string; }


</td><td>

Animations to be used by the character


</td></tr>
<tr><td>

[autoAnimate?](/reference/defaultcontrolparams/autoanimate.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ whether to automatically apply the corresponding animation to the attached object This applies only when the attached object is an avatar component


</td></tr>
<tr><td>

[character?](/reference/defaultcontrolparams/character.md)


</td><td>


</td><td>

typeof DEFAULT\_CC\_OPTIONS


</td><td>

_(Optional)_ The character options for the kinematic character


</td></tr>
<tr><td>

[gravity?](/reference/defaultcontrolparams/gravity.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ The gravity of the scene


</td></tr>
<tr><td>

[jump?](/reference/defaultcontrolparams/jump.md)


</td><td>


</td><td>

{ height?: number; duration?: number; airAcceleration?: number; hold?: boolean; max?: number; coyote?: number; maxFallSpeed?: number; peakSpeed?: number; delay?: number; }


</td><td>

_(Optional)_ Params to controls the jump of the character of the target object

- height: the height of the jump

- duration: the duration of the jump

- airAcceleration: the acceleration of the jump

- hold: whether to hold the jump key to keep the jump going

- max: the maximum number of jumps

- coyote: the time in seconds after the character has left the ground that the character can still jump - Infinity by default

- maxFallSpeed: the maximum speed the character can fall

- peakSpeed: the speed at which the character reaches the peak of the jump

- delay: the delay in seconds before the character can jump again


</td></tr>
<tr><td>

[run?](/reference/defaultcontrolparams/run.md)


</td><td>


</td><td>

{ speed?: number; boost?: number; accelerationFactor?: number; decelerationFactor?: number; }


</td><td>

_(Optional)_ Params to controls walking and running of the target object

- speed : the walking speed of the character

- boost: how much to speedup the character when running, this is activated when the user presses the shift key

- accelerationFactor: the acceleration of the character. 0 means no acceleration

- decelerationFactor: the deceleration of the character. 0 means no deceleration


</td></tr>
</tbody></table>
