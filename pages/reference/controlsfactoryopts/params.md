
## ControlsFactoryOpts.params property

The parameters to pass to the controls constructor.

**Signature:**

```typescript
params?: ControlsParams[ControlsType];
```

## Remarks

the params depend on the type of controls:

- For "platformer", see [PlatformerControlsWrapperParams](/reference/platformercontrolswrapperparams.md) constructor

- For "thirdperson", see [ThirdPersonCameraControlsWrapperParams](/reference/thirdpersoncameracontrolswrapperparams.md) constructor

- For "firstperson", no params are required

- For "debugorbit", no params are required

- For "fly", no params are required for now

- For "default", see [DefaultControlParams](/reference/defaultcontrolparams.md) constructor

