
## DefaultControlParams.jump property

Params to controls the jump of the character of the target object

- height: the height of the jump

- duration: the duration of the jump

- airAcceleration: the acceleration of the jump

- hold: whether to hold the jump key to keep the jump going

- max: the maximum number of jumps

- coyote: the time in seconds after the character has left the ground that the character can still jump - Infinity by default

- maxFallSpeed: the maximum speed the character can fall

- peakSpeed: the speed at which the character reaches the peak of the jump

- delay: the delay in seconds before the character can jump again

**Signature:**

```typescript
jump?: {
        height?: number;
        duration?: number;
        airAcceleration?: number;
        hold?: boolean;
        max?: number;
        coyote?: number;
        maxFallSpeed?: number;
        peakSpeed?: number;
        delay?: number;
    };
```
