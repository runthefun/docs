
## DefaultControlsWrapper.saveState() method

**Signature:**

```typescript
saveState(): (Vector3 | {
        isMoving: boolean;
        onFloor: boolean;
        speed: number;
    } | {
        speed: number;
        delay: number;
        jumpedCount: number;
        jumped: boolean;
        isJumping: boolean;
        reachedPeak: boolean;
        coyoteTimeLeft: number;
        elapsedTime: number;
        jumpGravity: number;
        jumpVelocity: number;
        currentHeight: number;
        jumpMaxHeight: number;
        prevJumpKeyState: boolean;
    })[];
```
**Returns:**

(Vector3 \| { isMoving: boolean; onFloor: boolean; speed: number; } \| { speed: number; delay: number; jumpedCount: number; jumped: boolean; isJumping: boolean; reachedPeak: boolean; coyoteTimeLeft: number; elapsedTime: number; jumpGravity: number; jumpVelocity: number; currentHeight: number; jumpMaxHeight: number; prevJumpKeyState: boolean; })\[\]

