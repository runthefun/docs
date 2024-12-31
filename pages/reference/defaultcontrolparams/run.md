
## DefaultControlParams.run property

Params to controls walking and running of the target object

- speed : the walking speed of the character

- boost: how much to speedup the character when running, this is activated when the user presses the shift key

- accelerationFactor: the acceleration of the character. 0 means no acceleration

- decelerationFactor: the deceleration of the character. 0 means no deceleration

**Signature:**

```typescript
run?: {
        speed?: number;
        boost?: number;
        accelerationFactor?: number;
        decelerationFactor?: number;
    };
```
