
## PhysicsRapierWrapper.raycast property

Performs a raycast in the physics world and returns information about the hit, if any.

**Signature:**

```typescript
raycast: (ray: {
        origin: {
            x: number;
            y: number;
            z: number;
        };
        direction: {
            x: number;
            y: number;
            z: number;
        };
        maxDistance?: number;
        ignoreRigidbody?: any;
        filterFlags?: QueryFilterFlags;
        shouldRaycast?: (collider: RCollider) => boolean;
    }) => {
        point: {
            x: any;
            y: any;
            z: any;
        };
        distance: number;
        triangle: {
            meshName: any;
        };
        raw: RAPIER.RayColliderToi;
        hit: unknown;
    };
```
