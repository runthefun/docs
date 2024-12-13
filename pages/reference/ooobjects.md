
## OOOBjects variable

Object containing helpers for creating meshes and materials in accordance with the internal pipeline of the engine

**Signature:**

```typescript
OOOBjects: {
    PipeLineMesh: typeof PipeLineMesh;
    InstancedPipelineMesh: typeof InstancedPipelineMesh;
    InstancedGeometry: typeof InstancedGeometry;
    InstancedBasicMaterial: typeof InstancedBasic;
    InstancedStandardMaterial: typeof InstancedStandard;
    InstancedDepthMaterial: typeof InstancedShadow;
    Shared: {
        timer: {
            value: number;
        };
        timer_d2: {
            value: number;
        };
        timer_x2: {
            value: number;
        };
        scanTimer: {
            value: number;
        };
        aspect: {
            value: number;
        };
        invaspect: {
            value: number;
        };
        animationTimer: {
            value: number;
        };
        dpi: {
            value: number;
        };
        resolution: {
            value: _THREE.Vector2;
        };
        invresolution: {
            value: _THREE.Vector2;
        };
        record_size: {
            value: _THREE.Vector2;
        };
        fog: {
            value: _THREE.Vector2;
        };
        isDynamicRendering: {
            value: number;
        };
        isScreenShotRendering: {
            value: number;
        };
        update(delta: any): void;
        resize(w: any, h: any): void;
        addEvents(): void;
    };
}
```
